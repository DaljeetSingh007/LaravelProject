<!--[if IE 8]> <html lang="{!! app()->getLocale() !!} class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="{!! app()->getLocale() !!} class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<!DOCTYPE html>
<html lang="{!! app()->getLocale() !!}">
    <head>
        <meta charset="utf-8"/>
        <title> {!! config('glorious.project_name') !!} @yield('title') </title>
        <meta name="description" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="csrf-token" content="{!! csrf_token() !!}">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="{!! asset('css/gilroy.css') !!}" rel="stylesheet" type="text/css" />
        
        @yield('before-style')

        @if(isset($additional_css))
            @foreach($additional_css as $key_css => $value_css)
                <link rel="stylesheet" href="{!! asset($value_css) !!}">
            @endforeach
        @endif

        <link rel="stylesheet" href="{!! mix('/css/system.css') !!}">
        <link rel="stylesheet" href="{!! asset('/css/custom.css') !!}">
        @yield('after-style')
    </head>
    <body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
        <div class="page-wrapper">
            <!-- BEGIN HEADER & CONTENT DIVIDER -->
            @include('layouts.partials.metronic.top')
            <div class="clearfix"></div>
            <!-- END HEADER & CONTENT DIVIDER -->

            <!-- BEGIN CONTAINER -->
            <div class="page-container">
                <!-- BEGIN SIDEBAR -->
                @include('layouts.partials.metronic.sidebar')
                <!-- END SIDEBAR -->
                <!-- BEGIN CONTENT -->
                <div class="page-content-wrapper">
                    <!-- BEGIN CONTENT BODY -->
                    <div class="page-content">
                        <!-- BEGIN PAGE HEADER-->
                        @yield('content')
                    </div>
                    <!-- END CONTENT BODY -->
                </div>
                <!-- END CONTENT -->
            </div>
            <!-- END CONTAINER -->
            <!-- BEGIN SIDEBAR -->
            @include('layouts.partials.metronic.footer')
                <!-- END SIDEBAR -->
        </div>

        @yield('before-script')
        <script src="{!! mix('/js/system.js') !!}" type="text/javascript"></script>
        @if(isset($additional_js))
            @foreach($additional_js as $key_js => $value_js)
                <script src="{!! asset($value_js) !!}" type="text/javascript"></script>
            @endforeach
        @endif
        <script src="{!! mix('/js/app.js') !!}" type="text/javascript"></script>
        @yield('after-script')
        <script type="text/javascript">
            var vue = new Vue({
                el: '#gloriousTimeApp',
            });
        </script>
    </body><!-- /.page-header-fixed.page-sidebar-closed-hide-logo.page-content-white -->
</html>