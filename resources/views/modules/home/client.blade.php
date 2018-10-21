@extends('layouts.metronic')
@section('title', ' | '.$title)
@section('after-style')
    <script>
        var API_KEY = "{{ $api_key }}";
        var TOKEN = "{{ $token }}";
        var SESSION_ID = "{{ $session_id }}";
    </script>
    <script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
    <script type="text/javascript" src="{!! asset('js/tokbox-client.js') !!}"></script>
    <style>
    body, html {
        background-color: gray;
        height: 100%;
    }

    #videos {
        position: relative;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    #subscriber {
        position: absolute;
        top: 0;
        width: 600px;
        height: 400px;
        bottom: 10px;
        left: 10px;
        z-index: 100;
        border: 3px solid white;
        border-radius: 3px;
    }

    #publisher {
        position: absolute;
        top: 0;
        width: 600px;
        height: 400px;
        bottom: 10px;
        left: 10px;
        z-index: 100;
        border: 3px solid white;
        border-radius: 3px;
    }
    </style>
@endsection
@section('after-script')
    <script>
        initializeSession();
    </script>
@endsection
@section('content')
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <!-- BEGIN: Subheader -->
        <div class="m-subheader ">
            <div class="d-flex align-items-center">
                <div class="mr-auto">
                    <h3 class="m-subheader__title ">
                        Client
                    </h3>
                </div>
            </div>
        </div>
        <!-- END: Subheader -->
        <div class="m-content">
            <div id="videos">
                <div id="subscriber"></div>
                <div id="publisher"></div>
            </div>     
        </div>
    </div>
@endsection