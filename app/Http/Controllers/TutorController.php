<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use DB;
use User;
use Role;
use Tutor;
use App\Http\Requests\TutorRequest;
use Validator;

class TutorController extends GloriousAdminController
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

        $this->middleware('permission:tutors.view', ['only' => ['index', 'show']]);
        $this->middleware('permission:tutors.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:tutors.update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:tutors.destroy', ['only' => ['destroy']]);

        $this->shareResource([
            'title'  => trans('tutors.module_title'),
            'module' => trans('tutors.module'),
            'layout' => $this->layout,
            'search' => true,
        ]);

        $this->viewPath = 'modules.tutors';
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $role = Role::whereName('glorious-tutor')->first();
        if (empty($role) || is_null($role)) {
            view()->share('system_error', 1);
            session()->flash('danger', trans('common.add_tutor_role'));
        }

        if ($request->has('api') && (!empty($role) && !is_null($role))) {
            if (auth()->user()->can('tutors.view')) {
                return $this->apiIndex($request);
            }

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.common.unauthorized'),
            ], 403);
        }

        return view()->make("{$this->viewPath}.index");
    }

    /**
     * Display a listing of the tutors.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function apiIndex(Request $request)
    {
        $entities = Tutor::select(['id', 'uuid', 'email', 'first_name', 'last_name', 'last_name', 'active']);

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
     * @param  App\Http\Requests\TutorRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(TutorRequest $request)
    {
        try {
            DB::beginTransaction();
            $entity             = new Tutor;
            $entity->first_name = $request->get('first_name');
            $entity->last_name  = $request->get('last_name');
            $entity->email      = $request->get('email');
            $entity->active     = $request->get('active', false);
            $entity->intro      = $request->get('intro', null);
            $user_entity        = $this->createOrUpdateUser($request);
            $entity->user_id    = $user_entity->id;
            $entity->save();

            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.flash_messages.create.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('tutors.flash_messages.create.success', ['name' => $request->get('first_name') . ' ' . $request->get('last_name')]),
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
        $entity = Tutor::select(['id', 'first_name', 'last_name', 'email', 'active', 'intro', 'uuid'])->whereUuid($id)->first();

        if (is_null($entity) || empty($entity)) {
            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.common.ajax_error'),
            ]);
        }

        return response()->json(['success' => true, 'data' => $entity, ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Requests\TutorRequest  $request
     * @param  UUID  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TutorRequest $request, $id)
    {
        $entity = Tutor::whereUuid($id)->first();

        if (!$entity) {
            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.common.ajax_error'),
            ]);
        }

        $validator = Validator::make($request->all(), [
            'email'      => 'required|email|max:100|unique:users,email,' . $entity->user_id . ',id|eliminate_script',
            'password'   => ((bool)$entity->active ? 'nullable' : (((bool)$request->get('active', false)) ? 'required|confirmed' : 'nullable')) . '|min:6|eliminate_script',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        try {
            DB::beginTransaction();
            $entity->first_name = $request->get('first_name');
            $entity->last_name  = $request->get('last_name');
            $entity->email      = $request->get('email');
            $entity->intro      = $request->get('intro', null);
            $entity->intro      = $request->get('intro');
            $user_entity        = $this->createOrUpdateUser($request, $entity->user_id);
            $entity->user_id    = $user_entity->id;
            $entity->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.flash_messages.edit.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('tutors.flash_messages.edit.success', ['name' => $request->first_name . ' ' . $request->last_name]),
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
            $entity = Tutor::whereUuid($id)->first();
            if (is_null($entity) || empty($entity)) {
                return response()->json([
                    'success' => false,
                    'type'    => 'danger',
                    'message' => trans('tutors.common.ajax_error'),
                ]);
            }

            if ($entity->class_tutors()->count() > 0) {
                return response()->json([
                    'success' => false,
                    'type'    => 'danger',
                    'message' => trans('tutors.flash_messages.destroy.dependent_error'),
                ], 422);
            }

            $name        = $entity->first_name . ' ' . $entity->last_name;
            $user_entity = User::find($entity->user_id);
            UserController::createDeletedUser($user_entity);
            $user_entity->delete();
            $entity->delete();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('tutors.flash_messages.destroy.error'),
                // 'message' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'warning',
            'message' => trans('tutors.flash_messages.destroy.success', ['name' => $name]),
        ]);
    }

    /**
     * Used to create or update user
     *
     * @param \Illuminate\Http\Request $request
     * @param INT $id User ID to find record
     * @return User $user_entity
     */
    private function createOrUpdateUser($request, $id = 0)
    {
        if (!is_null($id) && $id > 0) {
            $user_entity         = User::find($id);
        } else {
            $user_entity         = new User;
        }

        $user_entity->first_name = $request->get('first_name');
        $user_entity->last_name  = $request->get('last_name');
        $user_entity->email      = $request->get('email');
        $user_entity->active     = (bool)$request->get('active', false);
        $user_entity->save();

        if($id == 0)
            $user_entity->assignRole('glorious-tutor');

        if ($user_entity->active) {
            $user_entity->password  = $request->get('password');
            $user_entity->save();
        } elseif (!$user_entity->active) {
            DB::table('users')->where('id', $user_entity->id)->update(['password' => null]);
        }

        return $user_entity;
    }
}
