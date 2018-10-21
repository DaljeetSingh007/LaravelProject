@extends($layout)
@section('title',' | '.$title) 

@section('content')
    <div class="page-bar">
        <ul class="page-breadcrumb">
            <li>
                <a href="#">Home</a>
                <i class="fa fa-circle"></i>
            </li>
            <li>
                <span>{!! $module !!}</span>
            </li>
        </ul>
    </div>

    <div id="g-progress" class="m-t--20">
        <div class="portlet light " id="studentClassApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_student_classes" data-toggle="tab"> {!! trans('roles.listing_heading') !!} </a>
                    </li>
                </ul><!-- /.nav -->
            </div><!-- /.portlet-title.tabbable-line -->

            @if(isset($system_error))
                <div class="alert alert-danger fade in alert-dismissible" style="margin-top:18px;">
                    {{session()->get('danger')}}
                </div><!-- /.alert.alert-danger.fade.in.alert-dismissible -->
            @else
                <student-classes
                    props-trans='{!! json_encode(trans("student_classes"),JSON_HEX_APOS) !!}'
                    props-permissions='{!! 
                        json_encode([
                            "view" => $auth_user_data->can("student_assigned_classes.view"),
                            "update" => $auth_user_data->can("student_assigned_classes.update"),
                        ],JSON_HEX_APOS)
                    !!}'
                    props-urls='{!!
                        json_encode([
                            "index" => route("students.myclass",["api"=>1]),
                            "join_class" => route("students.join_class",["uuid"=>0])
                        ],JSON_HEX_APOS)
                    !!}'
                    props-data='{!! json_encode([
                        "csrf" => csrf_token()
                    ],JSON_HEX_APOS) !!}'
                >
                </student-classes>
            @endif
            @include('modules.modals.notes-modal')
            @include('modules.modals.video-container-modal')
        </div><!-- /#studentClassApp -->
    </div><!-- /#g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/student-class-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#studentClassApp',
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    </script>
@endsection