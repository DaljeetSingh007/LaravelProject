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
                    <div id="studentStreamApp">
                        <student-stream
                            props-language='{!! json_encode(trans("student_classes"),JSON_HEX_APOS) !!}'
                            props-api-key='{!! $apiKey or null !!}'
                            props-session-id='{!! $sessionId or null !!}'
                            props-token='{!! $token or null !!}'
                            props-class='{!! json_encode($class, JSON_HEX_APOS) !!}'
                            props-errors='{!! json_encode(trans("common.tokbox_errors"),JSON_HEX_APOS) !!}'
                            props-url='{!! json_encode([
                                "stream_update" => route("students.class.update_stream_id",["token"=>0]),
                                "log_tutor_trove" => route("tutors.log_tutor_trove")
                            ],JSON_HEX_APOS) !!}'
                        ></student-stream>
                        <div class="clearfix"></div>
                    </div><!-- /#studentStreamApp -->
                @endif
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </div>
@stop

@section('after-script')
<script src="{{asset('js/student-stream-app.js')}}"></script>
<script type="text/javascript">
    var vue = new Vue({
        el: '#studentStreamApp',
    });
</script>
@endsection
@section('after-scrip')
    <script type="text/javascript">
        var classStarted = false;
        const API_KEY = "{!! $apiKey or '' !!}";
        const SESSION_ID = "{!! $sessionId or '' !!}";
        const TOKEN = "{!! $token or '' !!}";
        const G_CLASS = JSON.parse('{!! json_encode($class) !!}');
        const G_ERRORS = JSON.parse('{!! json_encode(trans("common.tokbox_errors"),JSON_HEX_APOS) !!}');
        
        $(document).ready(function(){
            if(API_KEY == '' || SESSION_ID =='' || TOKEN == '' || !OT.checkSystemRequirements()) {
                $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS['-1']);
                return false;
            }

            // OT.getDevices(function(error, devices){});
            var session = OT.initSession(API_KEY, SESSION_ID);
            var publisher = '';
            session.connect(TOKEN, function (error) {
                if (error) {
                    $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
                } else {
                    publisher = OT.initPublisher('my-stream', {
                        insertMode: 'replace',
                        width: '320px',
                        height: '200px',
                        name: G_CLASS.name,
                        publishAudio: false,
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
                    .on('exception',function(error){
                        $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
                    })
                    .on("accessDenied", function () {
                        $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS['-2']);
                    });
                }

                OT.on('exception',function(error){
                    $('div.m-alert.alert-danger').show().find('.m-alert__text').text(G_ERRORS[error.code]);
                });
            })
            .on("streamCreated", function(event) {
                var data = event.stream.connection.data.split('&');
                var mod = data[0].split('=');
                if(mod[1] == "1"){
                    session.subscribe(event.stream, 'subscriber', {
                        insertMode: 'replace',
                        width: '100%',
                        height: '100%',
                    });
                }
            })
            .on("streamDestroyed", function(event) {
                var data = event.stream.connection.data.split('&');
                var mod = data[0].split('=');
                if(mod[1] == "1"){
                    $('#video-container').html('<div id="subscriber"></div>');
                }
            });

            $('#close').click(function(event){
                session.unpublish(publisher);
            });
        });
        
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

        function subscribeModerator(session) {
            if(classStarted == true) {
                return false;
            }
            
            $.ajax({
                method: 'GET',
                url: "{{route('students.class.moderator',['token'=>$token])}}",
                success: function(response) {
                    if(response.success != undefined && response.success == true){
                        session.subscribe(JSON.parse(response.class.stream_obj), 'subscriber', {
                            insertMode: 'replace',
                            width: '100%',
                            height: '100%',
                        });
                    }
                },
                error: function(error) {

                }
            });
        }
    </script>
@endsection