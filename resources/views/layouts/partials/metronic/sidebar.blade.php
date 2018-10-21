@php use App\Http\Helpers; @endphp
<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
            <li class="sidebar-toggler-wrapper hide">
                <div class="sidebar-toggler">
                    <span></span>
                </div>
            </li>
            <!-- END SIDEBAR TOGGLER BUTTON -->
            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'dashboard',
                ], 'active') !!}">
                <a href="{!! route('dashboard') !!}" class="nav-link">
                    <i class="fa fa-home"></i>
                    <span class="title">{!! trans('sidebar.dashboard') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>

            @if($auth_user_data->can('users.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'users.index','users.create','users.edit',
                ], 'active') !!}">
                <a href="{!! route('users.index') !!}" class="nav-link">
                    <i class="fa fa-users"></i>
                    <span class="title">{!! trans('sidebar.user_management') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('roles.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'roles.index','roles.create','roles.edit',
                ], 'active') !!}">
                <a href="{!! route('roles.index') !!}" class="nav-link">
                    <i class="fa fa-cog"></i>
                    <span class="title">{!! trans('sidebar.role') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('tutors.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'tutors.index','tutors.create','tutors.edit',
                ], 'active') !!}">
                <a href="{!! route('tutors.index') !!}" class="nav-link">
                    <i class="fa fa-user"></i>
                    <span class="title">{!! trans('sidebar.tutor') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('students.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'students.index','students.create','students.edit',
                ], 'active') !!}">
                <a href="{!! route('students.index') !!}" class="nav-link">
                    <i class="fa fa-file"></i>
                    <span class="title">{!! trans('sidebar.student') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('classes.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'classes.index','classes.create','classes.edit',
                ], 'active') !!}">
                <a href="{!! route('classes.index') !!}" class="nav-link">
                    <i class="fa fa-gears"></i>
                    <span class="title">{!! trans('sidebar.class') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('student_assigned_classes.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'students.myclass','students.join_class'
                ], 'active') !!}">
                <a href="{!! route('students.myclass') !!}" class="nav-link">
                    <i class="fa fa-home"></i>
                    <span class="title">{!! trans('sidebar.student_class') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif

            @if($auth_user_data->can('tutor_assigned_classes.view'))
            <li class="nav-item start {!! Helpers::getActiveRouteState([
                    'tutors.myclass','tutors.start_class'
                ], 'active') !!}">
                <a href="{!! route('tutors.myclass') !!}" class="nav-link">
                    <i class="fa fa-home"></i>
                    <span class="title">{!! trans('sidebar.tutor_class') !!}</span>
                    <span class="selected"></span>
                </a>
            </li>
            @endif
        </ul><!-- END SIDEBAR MENU -->
    </div><!-- END SIDEBAR -->
</div><!-- END SIDEBAR -->