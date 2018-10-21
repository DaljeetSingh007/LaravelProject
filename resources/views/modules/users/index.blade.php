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
        <div class="portlet light" id="userApp">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <i class=" icon-social-twitter font-dark hide"></i>
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#all_users" data-toggle="tab"> {!! trans('users.listing_heading') !!} </a>
                    </li>
                    <li>
                        <a href="#add_edit_user" data-toggle="tab"> {!! trans('common.operation') !!} </a>
                    </li>
                </ul><!-- /.nav.nav-tabs -->
            </div><!-- /.portlet-title.tabbable-line -->

            <users
                props-trans='{!! json_encode(trans("users"),JSON_HEX_APOS) !!}'
                props-permissions='{!! 
                    json_encode([
                        "view" => $auth_user_data->can("users.view"),
                        "create" => $auth_user_data->can("users.create"),
                        "edit" => $auth_user_data->can("users.edit"),
                        "delete" => $auth_user_data->can("users.destroy") 
                    ],JSON_HEX_APOS)
                !!}'
                props-urls='{!!
                    json_encode([
                        "index" => route("users.index",["api"=>1]),
                        "store" => route("users.store"),
                        "update" => route("users.update", 0),
                        "edit" => route("users.edit",0),
                        "destroy" => route("users.destroy",0),
                    ],JSON_HEX_APOS)
                !!}'
                props-data='{!! json_encode([
                    "roles" => $roles
                ],JSON_HEX_APOS) !!}'
            >
            </users> 
        </div><!-- /#userApp -->
    </div><!-- /#g-progress -->
@stop

@section('after-script')
    <script src="{{asset('js/user-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#userApp',
        });

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    </script>
@endsection