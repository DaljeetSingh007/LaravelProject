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
        <div class="portlet light bordered">
            <div class="portlet-title tabbable-line">
                <div class="caption">
                    <i class=" icon-social-twitter font-dark hide"></i>
                    <span class="caption-subject font-dark bold uppercase">{!! $module !!}</span>
                </div><!-- /.caption -->
            </div><!-- /.portlet-title.tabbable-line -->
            <div class="portlet-body" id="stream">
                @include($partials.'.notifications')
                @if(!isset($token))
                    <div class="alert alert-danger fade in alert-dismissible" style="margin-top:18px;">
                        <button type="button" class="close"></button>
                        {{session()->get('danger')}}
                    </div>
                @else
                    <div id="startClassStreamApp">
                        <tutor-stream
                            props-language='{!! json_encode(trans("tutor_classes"),JSON_HEX_APOS) !!}'
                            props-api-key='{!! $apiKey or null !!}'
                            props-session-id='{!! $sessionId or null !!}'
                            props-token='{!! $token or null !!}'
                            props-class='{!! json_encode($class, JSON_HEX_APOS) !!}'
                            props-errors='{!! json_encode(trans("common.tokbox_errors"),JSON_HEX_APOS) !!}'
                            props-url='{!! json_encode([
                                "stream_update" => route("tutors.class.update_stream_id",["token"=>0]),
                                "stream_update_endtime" => route("students.class.endtime")
                            ],JSON_HEX_APOS) !!}'
                        ></tutor-stream>
                    </div><!-- /#startClassStreamApp -->
                    @include('modules.modals.video-container-modal')
                @endif
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </div>
@stop

@section('after-style')
<script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
<script type="text/javascript" src="{!! asset('js/common.js') !!}"></script>
<style>
    #video-stream{
        clear: both;
        padding-bottom: 30px;
    }

    #video-container{
        background: url('{{asset("images/transp_bg.png")}}') repeat;
        /* width: 640px;
        height: 360px; */
        border: 1px solid #e2e2e2;
        height: 200px;
        width: 320px;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 10px;
        /* margin: 0 auto; */
    }

    #subscribers{
        clear: both;
        padding-bottom: 20px;
    }
    
    .student-video{
        border: 1px solid #e2e2e2;
        padding: 4px;
        margin: 20px 0px 20px 20px;
        width: 640px;
        height: 360px;
        position: relative;
    }

    .p-lr-10{
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
@endsection

@section('after-script')
    <script src="{{asset('js/tutor-stream-app.js')}}"></script>
    <script type="text/javascript">
        var vue = new Vue({
            el: '#startClassStreamApp',
        });
    </script>
@endsection

@section('after-scrip')
    <script type="text/javascript">
        $(document).ready(function(){
            const API_KEY = "{!! $apiKey or '' !!}";
            const SESSION_ID = "{!! $sessionId or '' !!}";
            const TOKEN = "{!! $token or '' !!}";
            const G_CLASS = JSON.parse('{!! json_encode($class) !!}');
            const G_ERRORS = JSON.parse('{!! json_encode(trans("common.tokbox_errors"),JSON_HEX_APOS) !!}');
            
            initPlugin();
            if(API_KEY == '' || SESSION_ID =='' || TOKEN == '' || !OT.checkSystemRequirements()) {
                $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS['-1']);
                return false;
            }
            
            OT.getDevices(function(error, devices){});

            var session = OT.initSession(API_KEY, SESSION_ID);
            var publisher = '';
            session.connect(TOKEN, function (error) {
                if (error) {
                    $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
                } else {
                    publisher = OT.initPublisher('publisher', {
                        insertMode: 'replace',
                        width: '100%',
                        height: '100%',
                        showControls: true,
                        name: G_CLASS.name,
                    });

                    session.publish(publisher);

                    publisher
                    .on("streamCreated", function(event) {
                        addStreamId(event.stream, event.stream.streamId);
                        $('#close').show();
                    })
                    .on("streamDestroyed", function(event) {
                        $('#close').hide();
                    })
                    .on('exception',function(error) {
                        $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
                    })
                    .on("accessDenied", function () {
                        $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS['-2']);
                    });
                }
            })
            .on("streamCreated", function(event) {
                var streamId = event.stream.streamId; 
                $('#subscribers').append('<div class="col-sm-6 student-video-container"><div class="student-video animated fadeIn" id="main-'+streamId+'"><div class="video" id="'+streamId+'"></div><div class="meta"></div></div></div>');
                session.subscribe(event.stream, streamId , {
                    insertMode: 'replace',
                    width: '100%',
                    height: '100%',
                    // subscribeToAudio: false,
                });
                var name = event.stream.connection.data.split('&');
                name = name[1].split('=');
                $('#'+streamId).parent().find('.meta').html('<small>'+ name[1] +'<small>');
            })
            .on("streamDestroyed", function(event) {
                addSubsEndTime(event.stream.streamId);
            });

            OT.on('exception',function(error){
                $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
            });

            $('#close').click(function(event){
                session.unpublish(publisher);
            });
        });

        function initPlugin(){
            $('.m_selectpicker').selectpicker();
        }

        function addStreamId(stream, streamId) {
            var seen = [];
            var replacer = function(key, value) {
                if (value != null && typeof value == "object") {
                    if (seen.indexOf(value) >= 0) {
                        return;
                    }
                    seen.push(value);
                }
                return value;
            }
            var _connection = JSON.stringify(stream, replacer);
            $.ajax({
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': '{{csrf_token()}}'
                },
                url: "{{route('tutors.class.update_stream_id',['token'=>$token])}}",
                data: {'stream': _connection, 'stream_id':streamId},
                success: function(response) { },
                error: function(error){ }
            });
            return true;
        }

        function addSubsEndTime(stream_id) {
            $.ajax({
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': '{{csrf_token()}}'
                },
                url: "{{route('students.class.endtime')}}",
                data: {'stream_id':stream_id},
                success: function(response) { },
                error: function(error){ }
            });
        }
    </script>
@endsection