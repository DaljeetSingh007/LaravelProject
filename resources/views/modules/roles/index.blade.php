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
        <div class="portlet light " id="roleApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_roles" data-toggle="tab"> {!! trans('roles.listing_heading') !!} </a>
                    </li>
                    <li>
                        <a href="#add_edit_role" data-toggle="tab"> {!! trans('common.operation') !!} </a>
                    </li>
                </ul><!-- /.nav -->
            </div><!-- /.portlet-title.tabbable-line -->
            <roles
                props-trans='{!! json_encode(trans("roles"),JSON_HEX_APOS) !!}'
                props-permissions='{!! 
                    json_encode([
                        "view" => $auth_user_data->can("roles.view"),
                        "create" => $auth_user_data->can("roles.create"),
                        "edit" => $auth_user_data->can("roles.edit"),
                        "delete" => $auth_user_data->can("roles.destroy") 
                    ],JSON_HEX_APOS)
                !!}'
                props-urls='{!!
                    json_encode([
                        "index" => route("roles.index",["api"=>1]),
                        "store" => route("roles.store"),
                        "update" => route("roles.update", 0),
                        "edit" => route("roles.edit",0),
                        "destroy" => route("roles.destroy",0),
                    ],JSON_HEX_APOS)
                !!}'
                props-data='{!! json_encode([
                    "permissions" => $permissions,
                    "csrf" => csrf_token()
                ],JSON_HEX_APOS) !!}'
            >
            </roles>    
        </div><!-- /#roleApp.portlet.light.bordered -->
    </div><!-- /.g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/role-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#roleApp',
        });
    </script>
@endsection