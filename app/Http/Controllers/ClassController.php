<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HelperTrait;
use DB;
use GClass;
use ClassTutor;
use ClassStudent;
use ClassSession;
use TutorTroveLog;
use ClassStatusHistory;
use ClassSessionHistory;
use App\Http\Requests\ClassRequest;
use App\Http\Helpers;
use Carbon\Carbon;

class ClassController extends GloriousAdminController
{
    use HelperTrait;

    public $viewPath;

    /**
     * @var Object of OpenTokController
     */
    public $_openTok;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(OpenTokController $_openTok)
    {
        $this->middleware('auth');
        parent::__construct();

        $this->middleware('permission:classes.view', ['only' => ['index', 'show']]);
        $this->middleware('permission:classes.create', ['only' => ['create', 'store']]);
        $this->middleware('permission:classes.update', ['only' => ['edit', 'update']]);
        $this->middleware('permission:classes.destroy', ['only' => ['destroy']]);

        $this->shareResource([
            'title'  => trans('classes.module_title'),
            'module' => trans('classes.module'),
            'layout' => $this->layout,
            'search' => true,
        ]);

        $this->_openTok = $_openTok;
        $this->viewPath = 'modules.classes';
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
            if (auth()->user()->can('classes.view')) {
                return $this->apiIndex($request);
            }

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.common.unauthorized'),
            ], 403);
        }

        view()->share('tutors', Helpers::getTutors());
        view()->share('students', Helpers::getStudents());

        return view()->make("{$this->viewPath}.index");
    }

    /**
     * Display a listing of the classes.
     *
     * @param  \Illuminate\Http\Request $request
     * @return JSON
     */
    public function apiIndex(Request $request)
    {
        $entities = GClass::select(['id', 'uuid', 'start_time', 'end_time', 'name']);

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
            $value            = $entity_value;
            $value->_tutors   = ($entity_value->tutors) ? $entity_value->tutors : null;
            $value->_students = ($entity_value->students) ? $entity_value->students : null;
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

        if (isset($input->name) && !empty($input->name)) {
            $entities = $entities->where('name', 'LIKE', '%' . $input->name . '%');
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
     * @param  App\Http\Requests\ClassRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClassRequest $request)
    {
        try {
            DB::beginTransaction();

            $entity                 = new GClass;
            $entity->name           = $request->get('name', null);
            $entity->estimated_time	= $request->get('estimated_time', null);
            $entity->notes          = $request->get('notes', null);
            $entity->start_time     = $request->get('start_time', null);
            $entity->end_time       = $request->get('end_time', null);
            $entity->save();

            $tutor_entity           = new ClassTutor;
            $tutor_entity->class_id = $entity->id;
            $tutor_entity->tutor_id = $request->get('tutor_id', null);
            $tutor_entity->save();

            foreach ($request->get('student_id', []) as $s_key => $s_value) {
                $student_entity             = new ClassStudent;
                $student_entity->class_id   = $entity->id;
                $student_entity->student_id = $s_value;
                $student_entity->save();
            }

            self::createClassStatusHistory($entity->id, 0);
            $this->createClassSession($entity->id, $this->_openTok->createSession());
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.flash_messages.create.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('classes.flash_messages.create.success', ['name' => $request->get('name')]),
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
        $entity = GClass::select(['id', 'name', 'estimated_time', 'notes', 'start_time', 'end_time', 'uuid'])->whereUuid($id)->first();

        if (is_null($entity) || empty($entity)) {
            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.common.ajax_error'),
            ]);
        }
        $entity->tutor_id   = ($entity->tutors) ? $entity->tutors->first()->tutor_id : null;
        $entity->student_id = ($entity->students) ? $entity->students()->get()->pluck('student_id') : null;
        unset($entity['tutors'],$entity['students']);

        return response()->json(['success' => true, 'data' => $entity]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Requests\ClassRequest  $request
     * @param  UUID  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ClassRequest $request, $id)
    {
        $entity = GClass::whereUuid($id)->first();

        if (!$entity) {
            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.common.ajax_error'),
            ]);
        }

        try {
            DB::beginTransaction();
            $entity->name           = $request->get('name', null);
            $entity->estimated_time	= $request->get('estimated_time', null);
            $entity->notes          = $request->get('notes', null);
            $entity->start_time     = $request->get('start_time', null);
            $entity->end_time       = $request->get('end_time', null);
            $entity->save();

            ClassTutor::where('class_id', $entity->id)->delete();
            if (ClassTutor::withTrashed()->where('class_id', $entity->id)->where('tutor_id', $request->get('tutor_id'))->count() > 0) {
                $tutor_entity             = ClassTutor::withTrashed()->where('class_id', $entity->id)->where('tutor_id', $request->get('tutor_id'))->first();
                $tutor_entity->deleted_at = null;
            } else {
                $tutor_entity           = new ClassTutor;
                $tutor_entity->class_id = $entity->id;
                $tutor_entity->tutor_id = $request->get('tutor_id');
            }
            $tutor_entity->save();

            ClassStudent::where('class_id', $entity->id)->delete();
            foreach ($request->get('student_id', []) as $s_key => $s_value) {
                if (ClassStudent::withTrashed()->where('class_id', $entity->id)->where('student_id', $s_value)->count() > 0) {
                    $student_entity             = ClassStudent::withTrashed()->where('class_id', $entity->id)->where('student_id', $s_value)->first();
                    $student_entity->deleted_at = null;
                } else {
                    $student_entity             = new ClassStudent;
                    $student_entity->class_id   = $entity->id;
                    $student_entity->student_id = $s_value;
                }
                $student_entity->save();
            }

            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.flash_messages.edit.error'),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'success',
            'message' => trans('classes.flash_messages.edit.success', ['name' => $request->first_name . ' ' . $request->last_name]),
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
            $entity = GClass::whereUuid($id)->first();
            if (is_null($entity) || empty($entity)) {
                return response()->json([
                    'success' => false,
                    'type'    => 'danger',
                    'message' => trans('classes.common.ajax_error'),
                ]);
            }

            $name = $entity->name;
            $entity->delete();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return response()->json([
                'success' => false,
                'type'    => 'danger',
                'message' => trans('classes.flash_messages.destroy.error'),
                // 'message' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'success' => true,
            'type'    => 'warning',
            'message' => trans('classes.flash_messages.destroy.success', ['name' => $name]),
        ]);
    }

    /**
     * To create ClassSession
     * @param \App\Models\GClass $class_id GClass Table ID
     * @param \OpenTok\OpenTok\Session $session Session string or id
     * @return \App\Models\ClassSession $object
     */
    public function createClassSession($class_id, $session)
    {
        $class_session_entity             = new ClassSession;
        $class_session_entity->class_id   = $class_id;
        $class_session_entity->session_id = $session;
        $class_session_entity->save();

        return $class_session_entity;
    }

    /**
     * To create ClassStatusHistory
     * @param \App\Models\GClass $class_id GClass Table ID
     * @param TINYINT $status
     * @return \App\Models\ClassStatusHistory $object
     */
    public static function createClassStatusHistory($class_id, $status)
    {
        $class_status_entity             = new ClassStatusHistory;
        $class_status_entity->class_id   = $class_id;
        $class_status_entity->status     = $status;
        $class_status_entity->created_at = Carbon::now();
        $class_status_entity->save();
        GClass::whereId($class_id)->update(['status' => $status]);

        return $class_status_entity;
    }

    /**
     * To Store history of TOKEN and Tutor or Login User
     *
     * @param  array $params
     * @return \App\Models\ClassSessionHistory $class_session_history_entity
     */
    public static function createClassSessionHistory($params)
    {
        $class_session_history_entity                   = new ClassSessionHistory;
        $class_session_history_entity->class_id         = $params['class_id'];
        $class_session_history_entity->class_session_id = $params['class_session_id'];
        $class_session_history_entity->token            = $params['token'];
        $class_session_history_entity->start_time       = Carbon::now();
        $class_session_history_entity->role             = $params['role'];
        $class_session_history_entity->save();

        return $class_session_history_entity;
    }

    /**
     * To Update StreamID after Stream Created
     *
     * @param  string $token
     * @param  string $stream_id
     * @return boolean
     */
    public static function updateClassStream($token, $stream_id)
    {
        try {
            DB::beginTransaction();
            $class                    = ClassSessionHistory::where('token', $token)->orderBy('id', 'desc')->first();
            $class->stream_id         = $stream_id;
            $class->stream_created_at = Carbon::now();
            $class->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return false;
        }

        return true;
    }

    /**
     * To Log Tutor Trove Entry
     *
     * @param \Illuminate\Http\Request $request
     * @param INT $user_type 1 = Admin, 2 Tutor, 3 Student
     * @param string $user_name login user_name
     * @return array
     */
    public static function logTutorTrove(Request $request, $user_type, $user_name)
    {
        try {
            DB::beginTransaction();
            $class                                = GClass::whereUuid($request->get('class_id'))->first();
            $tutor_trove_entity                   = new TutorTroveLog;
            $tutor_trove_entity->class_id         = $class->id;
            $tutor_trove_entity->stream_id        = $tutor_trove_entity->whiteboard_hash        = $request->get('stream_id');
            $tutor_trove_entity->user_type        = $user_type;
            $tutor_trove_entity->user_name        = $user_name;
            $tutor_trove_entity->whiteboard_title = $class->name;
            $tutor_trove_entity->save();
            DB::commit();
        } catch (Exception $e) {
            DB::rollback();

            return ['success'=> false];
        }

        return [
            'success'          => true,
            'id'               => $tutor_trove_entity->id,
            'whiteboard_hash'  => $tutor_trove_entity->whiteboard_hash,
            'whiteboard_title' => $tutor_trove_entity->whiteboard_title,
            'user_type'        => $tutor_trove_entity->user_type,
            'user_id'          => $tutor_trove_entity->author_id,
            'user_name'        => $tutor_trove_entity->user_name,
        ];
    }
}
