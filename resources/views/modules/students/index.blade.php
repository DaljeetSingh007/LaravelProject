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
        <div class="portlet light " id="studentApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <i class=" icon-social-twitter font-dark hide"></i>
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_students" data-toggle="tab"> {!! trans('students.listing_heading') !!} </a>
                    </li>
                    <li>
                        <a href="#add_edit_student" data-toggle="tab"> {!! trans('common.operation') !!} </a>
                    </li>
                </ul><!-- /.nav.nav-tabs -->
            </div><!-- /.portlet-title.tabbable-line -->

            @if(isset($system_error))
                <div class="alert alert-info fade in alert-dismissible" style="margin-top:18px;">
                    <button type="button" class="close"></button>
                    {{session()->get('danger')}}
                </div>
            @else
            <students
                props-trans='{!! json_encode(trans("students"),JSON_HEX_APOS) !!}'
                props-permissions='{!! 
                    json_encode([
                        "view" => $auth_user_data->can("students.view"),
                        "create" => $auth_user_data->can("students.create"),
                        "edit" => $auth_user_data->can("students.edit"),
                        "delete" => $auth_user_data->can("students.destroy") 
                    ],JSON_HEX_APOS)
                !!}'
                props-urls='{!!
                    json_encode([
                        "index" => route("students.index",["api"=>1]),
                        "store" => route("students.store"),
                        "update" => route("students.update", 0),
                        "edit" => route("students.edit",0),
                        "destroy" => route("students.destroy",0),
                    ],JSON_HEX_APOS)
                !!}'
                props-data='{!! json_encode([
                    "csrf" => csrf_token()
                ],JSON_HEX_APOS) !!}'
            >
            </students>
            @endif
        </div><!-- /#studentApp -->
    </div><!-- /#g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/student-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#studentApp',
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    </script>
@endsection