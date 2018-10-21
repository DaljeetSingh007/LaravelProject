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
        <div class="portlet light " id="tutorApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <i class=" icon-social-twitter font-dark hide"></i>
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_tutors" data-toggle="tab"> {!! trans('tutors.listing_heading') !!} </a>
                    </li>
                    <li>
                        <a href="#add_edit_tutor" data-toggle="tab"> {!! trans('common.operation') !!} </a>
                    </li>
                </ul><!-- /.nav.nav-tabs -->
            </div><!-- /.portlet-title.tabbable-line -->

            @if(isset($system_error))
                <div class="alert alert-info fade in alert-dismissible" style="margin-top:18px;">
                    <button type="button" class="close"></button>
                    {{session()->get('danger')}}
                </div>
            @else
                <tutors
                    props-trans='{!! json_encode(trans("tutors"),JSON_HEX_APOS) !!}'
                    props-permissions='{!! 
                        json_encode([
                            "view" => $auth_user_data->can("tutors.view"),
                            "create" => $auth_user_data->can("tutors.create"),
                            "edit" => $auth_user_data->can("tutors.edit"),
                            "delete" => $auth_user_data->can("tutors.destroy") 
                        ],JSON_HEX_APOS)
                    !!}'
                    props-urls='{!!
                        json_encode([
                            "index" => route("tutors.index",["api"=>1]),
                            "store" => route("tutors.store"),
                            "update" => route("tutors.update", 0),
                            "edit" => route("tutors.edit",0),
                            "destroy" => route("tutors.destroy",0),
                        ],JSON_HEX_APOS)
                    !!}'
                    props-data='{!! json_encode([],JSON_HEX_APOS) !!}'
                >
                </tutors>
            @endif
        </div><!-- /#userApp -->
    </div><!-- /#g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/tutor-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#tutorApp',
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    </script>
@endsection