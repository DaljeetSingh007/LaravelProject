<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use GClass;
use ClassSessionHistory;
use Exception;
use OpenTok\Role;
use Carbon\Carbon;
use DB;
use Student;
use TutorTroveLog;
use App\Http\Controllers\TutorTrove\TutorTrove;
use App\Http\Controllers\TutorTrove\TutorTrove_SSO;
use App\Http\Helpers;

class StudentClassController extends GloriousAdminController
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
        $this->middleware('permission:student_assigned_classes.view', ['only' => ['assignedClasses']]);
        $this->middleware('permission:student_assigned_classes.update', ['only' => []]);

        $this->shareResource([
            'title'    => trans('student_classes.module'),
            'module'   => trans('student_classes.module_title'),
            'layout'   => $this->layout,
            'partials' => $this->partials,
            'search'   => false,
        ]);

        $this->viewPath = 'modules.student-classes';
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
            if (auth()->user()->can('student_assigned_classes.view')) {
                return $this->assignedClassesApiIndex($request);
            }

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('students.common.unauthorized'),
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
            whereHas('students', function ($query) use ($user) {
                $query->where('class_students.student_id', '=', $user->student->id);
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
            $value->_tutors       = ($entity_value->tutors) ? $entity_value->tutors : null;
            $value->_status       = $this->getStatus(Carbon::createFromFormat(config('glorious.date_format.class_start_time'), $entity_value->_start_time));
            $value->_current_time = Carbon::now()->format('Y-m-d H:i:s');
            $value->_end          = (!empty($entity_value->end_time)) ? Carbon::createFromFormat(config('glorious.date_format.class_end_time'), $entity_value->end_time)->format('Y-m-d H:i:s') : '';
            unset($value['tutor'],$value['students']);
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
     * To display Join Class Page
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $uuid
     * @return response
     */
    public function joinClass(Request $request, $uuid)
    {
        $entity_class = GClass::whereUuid($uuid)->first();
        view()->share('class', $entity_class);

        if (!empty($entity_class) && !is_null(optional($entity_class->class_session)->session_id)) {
            try {
                DB::beginTransaction();
                $session        = optional($entity_class->class_session)->session_id;
                $tutorUuid      =  !is_null(optional($this->auth_user_data->tutor)->uuid) ? optional($this->auth_user_data->tutor)->uuid : $this->auth_user_data->uuid;

                $openTok_entity = new OpenTokController();
                $role           = Role::PUBLISHER;
                $token          = $openTok_entity->generateToken($this->auth_user_data->full_name, $this->auth_user_id, $entity_class->uuid, $tutorUuid, $role, $session, 0);

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

        return view()->make("{$this->viewPath}.join-class");
    }

    /**
     * To update stream id after stream creates
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $token
     * @return json
     */
    public function updateStreamId(Request $request, $token)
    {
        if (ClassController::updateClassStream($token, $request->get('stream_id', null))) {
            return response()->json(['success'=>true]);
        }

        return response()->json(['success'=>false]);
    }

    /**
     * To pass moderator
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $token
     * @return json
     */
    public function getModerator(Request $request, $token)
    {
        $class_session_entity        = ClassSessionHistory::whereToken($token)->first();
        $class_session_entity_second = [];
        if (!empty($class_session_entity)) {
            $class_session_entity_second = ClassSessionHistory::
                                            select([
                                                'stream_id',
                                                'stream_obj',
                                            ])
                                            ->where('class_session_id', $class_session_entity->class_session_id)
                                            ->where('class_id', $class_session_entity->class_id)
                                            ->whereRole('moderator')
                                            ->orderBy('id', 'desc')
                                            ->whereNotNull('stream_id')
                                            ->first();
        }

        return response()->json([
            'class'   => $class_session_entity_second,
            'success' => (!is_null(optional($class_session_entity_second)->stream_id)) ? true : false,
        ]);
    }

    /**
     * To set stream end time when student disconnect
     *
     * @param  \Illuminate\Http\Request $request
     * @return json
     */
    public function setStreamEndTime(Request $request)
    {
        try {
            DB::beginTransaction();
            $class_session_entity                = ClassSessionHistory::whereStreamId($request->get('stream_id'))->first();
            $class_session_entity->stream_end_at = Carbon::now();
            $class_session_entity->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json(['success' => false]);
        }

        return response()->json(['success' => true]);
    }

    /**
     * To Log Tutor Trove
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function logTutorTrove(Request $request)
    {
        $data = ClassController::logTutorTrove($request, 3, $this->auth_user_data->full_name);
        if ($data['success']) {
            TutorTrove::$public_key  = config('glorious.TUTOR_PUBLIC_KEY');
            TutorTrove::$private_key = config('glorious.TUTOR_PRIVATE_KEY');
            TutorTrove::$use_https   = false;
            $url                     = TutorTrove_SSO::whiteboard([
                'whiteboard_hash'  => $data['whiteboard_hash'],
                'whiteboard_title' => $data['whiteboard_title'],
                'user_type'        => Helpers::getTutorUserType($data['user_type']),
                'user_id'          => $data['user_id'],
                'user_name'        => $data['user_name'],
            ]);

            $entity               = TutorTroveLog::find($data['id']);
            $entity->response_url = $url;
            $entity->save();

            return response()->json(['success'=>true, 'url' => $url]);
        }

        return response()->json(['success'=>false]);
    }
}
