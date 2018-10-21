<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <title>
            {!! config('glorious.project_name') !!} | {!! trans('login.module_title') !!}
        </title>
        <meta name="description" content="Latest updates and statistic charts">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="{{ mix('/css/login.css') }}">
    </head>

    <body class=" login">
        <div class="logo">
            <a href="index.html">
                <img src="{!! asset('pages/img/logo-big.png') !!}" alt=""/>
            </a>
        </div><!-- /.logo -->

        <div class="content">
            {!! Form::open(['route'=>'login','class'=>'login-form']) !!}
            <h3 class="form-title font-green">{!! trans('login.heading') !!}</h3>

            <div class="form-group {{ ($errors->has('email')) ? 'has-error' : '' }}">
                <label class="control-label visible-ie8 visible-ie9">{!! trans('login.input_email') !!}</label>
                {!! Form::text('email',NULL,["class"=>"form-control form-control-solid placeholder-no-fix",'placeholder'=>trans('login.input_email')]) !!} 
                {!! ($errors->has('email') ? $errors->first('email', '<p class="text-danger">:message</p>') : '') !!}
            </div><!-- /.form-group -->

            <div class="form-group m-form__group {{ ($errors->has('password')) ? 'has-error' : '' }}">
                <label class="control-label visible-ie8 visible-ie9">{!! trans('login.input_password') !!}</label>
                {!! Form::password('password',["class"=>"form-control m-input m-login__form-input--last",'placeholder'=> trans('login.input_password')] ) !!}
            </div><!-- /.form-group -->

            <div class="form-actions">
                <button type="submit" class="btn green uppercase">{!! trans('common.sign_in') !!}</button>
                <label class="rememberme check mt-checkbox mt-checkbox-outline">
                    {!! Form::checkbox('remember',true,NULL) !!} {!! trans('login.remember_me') !!}
                    <span></span>
                </label>
                <!-- <a href="javascript:;" id="forget-password" class="forget-password">Forgot Password?</a> -->
            </div><!-- /.form-action -->

            {!! Form::close() !!}<!-- /.login-form -->
        </div><!-- /.content -->

        <script src="{{ mix('/js/login.js') }}" type="text/javascript"></script>
    </body><!-- /.login -->
</html>