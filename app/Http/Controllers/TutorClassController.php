<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use GClass;
use Exception;
use OpenTok\Role;
use Carbon\Carbon;
use DB;

class TutorClassController extends GloriousAdminController
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
        $this->middleware('permission:tutor_assigned_classes.view', ['only' => ['assignedClasses']]);
        $this->middleware('permission:tutor_assigned_classes.update', ['only' => []]);

        $this->shareResource([
            'title'    => trans('tutor_classes.module'),
            'module'   => trans('tutor_classes.module_title'),
            'layout'   => $this->layout,
            'partials' => $this->partials,
            'search'   => false,
        ]);

        $this->viewPath = 'modules.tutor-classes';
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function assignedClasses(Request $request)
    {
        if ($request->has('api')) {
            if (auth()->user()->can('tutor_assigned_classes.view')) {
                return $this->assignedClassesApiIndex($request);
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
     * Display a listing of the assigned class.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function assignedClassesApiIndex(Request $request)
    {
        $user     = $this->auth_user_data;
        $entities = GClass::
            whereHas('tutors', function ($query) use ($user) {
                $query->where('class_tutors.tutor_id', '=', $user->tutor->id);
            })
            ->select(['id', 'uuid', 'start_time', 'end_time', 'name', 'notes', 'start_time as _start_time']);

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
            $value                = $entity_value;
            $value->_students     = ($entity_value->students) ? $entity_value->students : null;
            $value->_status       = $this->getStatus(Carbon::createFromFormat(config('glorious.date_format.class_start_time'), $entity_value->_start_time));
            $value->_current_time = Carbon::now()->format('Y-m-d H:i:s');
            $value->_end          = (!empty($entity_value->end_time)) ? Carbon::createFromFormat(config('glorious.date_format.class_end_time'), $entity_value->end_time)->format('Y-m-d H:i:s') : '';
            unset($value['tutors'],$value['students']);
            $items[] = $value;
        }

        // Modified Item Injection
        $paginator->getCollection($items);

        return response($paginator);
    }

    /**
     * to decide status of record
     * if status == 0 or 3 mean pending
     * if status == 1 mean expired
     * if status == 2 mean Today
     *
     * @param  Carbon\Carbon $object
     * @return string
     */
    private function getStatus($object)
    {
        try {
            $now    = Carbon::parse(Carbon::now()->format('Y-m-d'));
            $object = Carbon::parse($object->format('Y-m-d'));
            if ($now->gt($object)) {
                return 1;
            } elseif ($now->eq($object)) {
                return 2;
            } elseif ($now->lt($object)) {
                return 3;
            }
        } catch (Exception $e) {
        }

        return 0;
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
     * To display Start Class Page
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $uui
     * @return response
     */
    public function startClass(Request $request, $uuid)
    {
        $entity_class = GClass::whereUuid($uuid)->first();
        view()->share('class', $entity_class);

        if (!empty($entity_class) && !is_null(optional($entity_class->class_session)->session_id)) {
            try {
                DB::beginTransaction();
                $session        = optional($entity_class->class_session)->session_id;
                $tutorUuid      =  !is_null(optional($this->auth_user_data->tutor)->uuid) ? optional($this->auth_user_data->tutor)->uuid : $this->auth_user_data->uuid;

                $openTok_entity = new OpenTokController();
                $role           = Role::MODERATOR;
                $token          = $openTok_entity->generateToken($this->auth_user_data->full_name, $this->auth_user_id, $entity_class->uuid, $tutorUuid, $role, $session, 1);

                ClassController::createClassSessionHistory([
                    'class_id'         => $entity_class->id,
                    'class_session_id' => optional($entity_class->class_session)->id,
                    'token'            => $token,
                    'role'             => $role,
                ]);

                view()->share('token', $token);
                view()->share('sessionId', $session);
                view()->share('class', [
                    'uuid'           => $entity_class->uuid,
                    'name'           => $entity_class->name,
                    'status'         => $entity_class->status,
                    'notes'          => $entity_class->notes,
                    'estimated_time' => $entity_class->estimated_time,
                ]);

                view()->share('apiKey', env('TALKBOX_KEY'));
                DB::commit();
            } catch (Exception $e) {
                DB::rollback();
                session()->flash('danger', $e->getMessage());
            }
        }

        return view()->make("{$this->viewPath}.start-class");
    }

    /**
     * To Update StreamID after Stream Created
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $token
     * @return JSON
     */
    public function updateStreamId(Request $request, $token)
    {
        if (ClassController::updateClassStream($token, $request->get('stream_id', null))) {
            return response()->json(['success'=>true]);
        }

        return response()->json(['success'=>false]);
    }
}
