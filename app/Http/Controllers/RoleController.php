<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use DB;
use Role;
use Exception;
use App\Http\Requests\RoleRequest;
use App\Http\Helpers;

class RoleController extends GloriousAdminController
{
    use HelperTrait;

    public $viewPath;

    public function __construct()
    {
        $this->middleware('auth');
        parent::__construct();

        $this->middleware('permission:roles.view', ['only' => ['index', 'show', 'apiIndex', 'search']]);
        $this->middleware('permission:roles.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:roles.update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:roles.destroy', ['only' => ['destroy']]);

        $this->shareResource([
            'title'  => trans('roles.module_title'),
            'module' => trans('roles.module'),
            'layout' => $this->layout,
            'search' => true
        ]);

        $this->viewPath = 'modules.roles';
    }

    /**
     * Display a listing of the roles.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @return JSON
     */
    public function index(Request $request)
    {
        if ($request->has('api')) {
            if (auth()->user()->can('roles.view')) {
                return $this->apiIndex($request);
            }

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('roles.common.unauthorized'),
            ], 403);
        }

        $permissions = [];
        foreach (config('glorious_permissions') as $key => $value) {
            $permissions[] = [
                'id'    => $value['label'],
                'value' => $value['data'],
            ];
        }

        view()->share('permissions', $permissions);

        return view()->make("{$this->viewPath}.index");
    }

    /**
     * Display a listing of the roles.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function apiIndex(Request $request)
    {
        $entities = Role::select(['id','is_public','display_name', 'name', 'uuid']);

        if ($request->has('sort') && !empty($request->get('sort'))) {
            $short_array = explode('|', $request->get('sort'));
            $entities    = $entities->orderBy($short_array[0], $short_array[1]);
        } else {
            $entities = $entities->orderBy('id', 'desc');
        }

        if ($request->has('perPage')) {
            $this->per_page = $request->get('perPage');
        }

        if ($request->has('search')) {
            $entities = $this->search($request, $entities);
        }

        $permissions = [];
        foreach (config('glorious_permissions') as $key => $value) {
            foreach ($value['data'] as $pkey => $pvalue) {
                $permissions[$pvalue['permission']] = $pvalue['label'];
            }
        }
        
        $paginator = $entities->paginate($this->per_page);
        $items     = [];
        foreach ($paginator->getCollection() as $entity_key => $entity_value) {
            $value        = $entity_value;
            $_permissions = '';
            foreach ($entity_value->permissions()->get() as $k => $v) {
                $_permissions .= '<span class="m-badge m-badge--primary m-badge--wide m-r-2">' . $permissions[$v->name] . '</span>';
            }
            
            $value->_m_permissions = $_permissions;
            $items[]               = $value;
        }

        $paginator->getCollection($items);

        return response($paginator);
    }

    /**
     * Filter Records
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Role $entities
     * @return \Role
     */
    public function search(Request $request, $entities)
    {
        $input = json_decode($request->get('search'));

        if (isset($input->name) && !empty($input->name)) {
            $entities = $entities->where('display_name', 'LIKE', '%' . $input->name . '%');
        }

        return $entities;
    }

    /**
     * Show the form for creating a new role.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return $this->index();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\RoleRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(RoleRequest $request)
    {
        try {
            DB::beginTransaction();
            $slug                 = Helpers::generateSlug($request->get('name'));
            $entity               = new Role;
            $entity->name         = $slug;
            $entity->display_name = $request->get('name');
            $entity->save();
            $entity->syncPermissions($request->get('permissions', []));
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('roles.flash_messages.create.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('roles.flash_messages.create.success', ['name' => $request->name]),
        ]);
    }

    /**
     * Display the specified role.
     *
     * @param  string  $hash
     * @return JSON
     */
    public function show($id)
    {
        return $this->index();
    }

    /**
     * Show the form for editing the specified role.
     *
     * @param  UUIS  $hash
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $entity = Role::public()->select(['id','display_name', 'name', 'uuid'])->whereUuid($id)->first();

        if (is_null($entity) || empty($entity)) {
            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('roles.common.ajax_error'),
            ]);
        }

        $permissions  = $entity->permissions;
        $_permissions = [];
        foreach ($permissions as $p_key => $p_value) {
            $_permissions[] = $p_value->name;
        }

        $entity->m_p = $_permissions;
        unset($entity['permissions']);
        return response()->json([
            'success' => true,
            'data'    => $entity,
        ]);
    }

    /**
     * Update the specified role in storage.
     *
     * @param  App\Http\Requests\RoleRequest $request
     * @param  UUID  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RoleRequest $request, $id)
    {
        try {
            DB::beginTransaction();
            $slug                 = Helpers::generateSlug($request->get('name'));
            $entity               = Role::public()->whereUuid($id)->first();
            $entity->name         = $slug;
            $entity->display_name = $request->get('name');
            $entity->save();
            $entity->syncPermissions($request->get('permissions', []));
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('roles.flash_messages.edit.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('roles.flash_messages.edit.success', ['name' => $request->name]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Illuminate\Http\Request #$request
     * @param UUID $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        try {
            DB::beginTransaction();

            $entity = Role::public()->whereUuid($id)->first();
            if (is_null($entity) || empty($entity)) {
                return response()->json([
                    'success' => false,
                    'type'    => 'danger',
                    'message' => trans('roles.common.ajax_error'),
                ]);
            }

            $name = $entity->display_name;
            $entity->delete();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('roles.flash_messages.destroy.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'warning',
            'message' => trans('roles.flash_messages.destroy.success', ['name' => $name]),
        ]);
    }
}
