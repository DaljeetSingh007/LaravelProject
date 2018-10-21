<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use DB;
use User;
use DeletedUser;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
use App\Http\Helpers;

class UserController extends GloriousAdminController
{
    use HelperTrait;

    public $viewPath;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        parent::__construct();

        $this->middleware('permission:users.view', ['only' => ['index', 'show']]);
        $this->middleware('permission:users.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:users.update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:users.destroy', ['only' => ['destroy']]);

        $this->shareResource([
            'title'  => trans('users.module_title'),
            'module' => trans('users.module'),
            'layout' => $this->layout,
            'search' => true
        ]);

        $this->viewPath = 'modules.users';
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('api')) {
            if(auth()->user()->can('users.view'))
                return $this->apiIndex($request);

            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.common.unauthorized'),
            ], 403);
        }

        view()->share('roles', ($this->auth_user_data->is_master == 1 ? Helpers::getRoles(true) : Helpers::getRoles())  );
        return view()->make("{$this->viewPath}.index");
    }

    /**
     * Display a listing of the users.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function apiIndex(Request $request)
    {
        $entities = User::select(['id', 'uuid', 'email', 'active', 'first_name', 'last_name', 'last_login_at']);

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

        $paginator = $entities->paginate($this->per_page);
        $items     = [];
        foreach ($paginator->getCollection() as $entity_key => $entity_value) {
            $value   = $entity_value;
            $value->_roles      = ($entity_value->roles->count() > 0) ? $entity_value->roles->implode('display_name', ', ') : '<em>-</em>';
            $items[] = $value;
        }

        // Modified Item Injection
        $paginator->getCollection($items);

        return response($paginator);
    }

    /**
     * Filter Records
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \User $entities
     * @return \User
     */
    private function search(Request $request, $entities)
    {
        $input = json_decode($request->get('search'));

        if (isset($input->first_name) && !empty($input->first_name)) {
            $entities = $entities->where('first_name', 'LIKE', '%' . $input->first_name . '%');
        }

        if (isset($input->last_name) && !empty($input->last_name)) {
            $entities = $entities->where('last_name', 'LIKE', '%' . $input->last_name . '%');
        }

        if (isset($input->email) && !empty($input->email)) {
            $entities = $entities->where('email', 'LIKE', '%' . $input->email . '%');
        }

        return $entities;
    }

    /**
     * Show the form for creating a new resource.
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
     * @param  App\Http\Requests\UserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        try {
            DB::beginTransaction();
            $entity             = new User;
            $entity->first_name = $request->get('first_name');
            $entity->last_name  = $request->get('last_name');
            $entity->active     = (bool)$request->get('active');
            $entity->email      = $request->get('email');
            $entity->password   = Hash::make($request->get('password'));
            $entity->save();
            $entity->syncRoles($request->get('roles',[]));
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.flash_messages.create.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'   => 'success',
            'message' => trans('users.flash_messages.create.success', ['name' => $request->first_name . ' ' . $request->last_name]),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->index();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  UUID $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $entity = User::select(['id','first_name', 'active', 'last_name', 'email', 'uuid', 'last_login_at'])->whereUuid($id)->first();

        if (is_null($entity) || empty($entity)) {
            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.common.ajax_error'),
            ]);
        }
        
        $roles = [];
        foreach ($entity->roles()->get() as $key => $role) {
            $roles[] = $role->id;
        }

        $entity->roles  = $roles;
        return response()->json([
            'success' => true,
            'data'    => $entity,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  UUID  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        $entity = User::whereUuid($id)->first();

        if (!$entity) {
            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.common.ajax_error'),
            ]);
        }

        if ($request->has('password') && !empty($request->get('password'))) {
            $entity->password = Hash::make($request->get('password'));
        }

        try {
            DB::beginTransaction();
            $entity->first_name = $request->get('first_name');
            $entity->active     = (bool)$request->get('active');
            $entity->last_name  = $request->get('last_name');
            $entity->email      = $request->get('email');
            $entity->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.flash_messages.edit.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'   => 'success',
            'message' => trans('users.flash_messages.edit.success', ['name' => $request->first_name . ' ' . $request->last_name]),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param UUID $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            $entity = User::whereUuid($id)->first();
            if (is_null($entity) || empty($entity)) {
                return response()->json([
                    'success' => false,
                    'type'   => 'danger',
                    'message' => trans('users.common.ajax_error'),
                ]);
            }

            if ($this->auth_user_id == $entity->id) {
                $message = '';

                return response()->json([
                    'success' => false,
                    'type'   => 'danger',
                    'message' => trans('users.flash_messages.destroy.error_self'),
                ]);
            }
            // Remove the user
            $name = $entity->first_name . ' ' . $entity->last_name;
            self::createDeletedUser($entity);
            $entity->delete();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'   => 'danger',
                'message' => trans('users.flash_messages.destroy.error'),
                // 'message' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'   => 'warning',
            'message' => trans('users.flash_messages.destroy.success', ['name' => $name]),
        ]);
    }

    /**
     * Used to store user into deleted_users table
     *
     * @param  \User $user
     * @return \DeletedUser $user
     */
    public static function createDeletedUser($user)
    {
        $entity                     = new DeletedUser;
        $entity->current_user_id    = auth()->user()->id;
        $entity->current_user_email = auth()->user()->email;
        $entity->user_id            = $user->id;
        $entity->is_master          = $user->is_master;
        $entity->banned_at          = $user->banned_at;
        $entity->active             = $user->active;
        $entity->email              = $user->email;
        $entity->first_name         = $user->first_name;
        $entity->last_name          = $user->last_name;
        $entity->password           = $user->password;
        $entity->user_created_at    = $user->created_at;
        $entity->user_updated_at    = $user->updated_at;
        $entity->last_login_ip      = $user->last_login_ip;
        $entity->last_login_at      = $user->last_login_ip;
        $entity->user_uuid          = $user->uuid;
        $entity->save();

        return $entity;
    }
}
