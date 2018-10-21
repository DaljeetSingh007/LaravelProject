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
        <div class="portlet light " id="classApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <i class=" icon-social-twitter font-dark hide"></i>
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_classes" data-toggle="tab"> {!! trans('classes.listing_heading') !!} </a>
                    </li>
                    <li>
                        <a href="#add_edit_class" data-toggle="tab"> {!! trans('common.operation') !!} </a>
                    </li>
                </ul><!-- /.nav.nav-tabs -->
            </div><!-- /.portlet-title.tabbable-line -->

            <classes
                props-trans='{!! json_encode(trans("classes"),JSON_HEX_APOS) !!}'
                props-permissions='{!! 
                    json_encode([
                        "view" => $auth_user_data->can("classes.view"),
                        "create" => $auth_user_data->can("classes.create"),
                        "edit" => $auth_user_data->can("classes.edit"),
                        "delete" => $auth_user_data->can("classes.destroy") 
                    ],JSON_HEX_APOS)
                !!}'
                props-urls='{!!
                    json_encode([
                        "index" => route("classes.index",["api"=>1]),
                        "store" => route("classes.store"),
                        "update" => route("classes.update", 0),
                        "edit" => route("classes.edit",0),
                        "destroy" => route("classes.destroy",0),
                    ],JSON_HEX_APOS)
                !!}'
                props-data='{!! json_encode([
                    "students" => $students,
                    "tutors" => $tutors,
                    "csrf" => csrf_token()
                ],JSON_HEX_APOS) !!}'
            >
            </classes>
        </div><!-- /#classApp -->
    </div><!-- /#g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/class-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#classApp',
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    </script>
@endsection