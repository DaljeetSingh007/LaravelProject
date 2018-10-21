<template>
    <div id="tutor-stream">
        <notification></notification>
        <div class="col-sm-12" id="student-stream-container">
            <div class="clearfix">
                <h4 class="pull-left">{{trans.students}}</h4>
            </div><!-- /.clearfix -->
            <div id="student-video-container">
                <div class="student-background">
                    <div id="subscribers" class="row">
                        <div class="clearfix"></div>
                    </div><!-- #subscribers -->
                </div><!-- /.student-background -->
            </div><!-- /#student-container -->
        </div><!-- /#student-stream-container -->
        <div class="col-sm-12" id="my-stream-container">
            <div class="clearfix">
                <h4 class="pull-left">{{trans.my_stream}}</h4>
                <div class="pull-right">
                    <a class="m-portlet__nav-link m-portlet__nav-link--icon close" v-on:click="unPublish()" style="display:none">
                        <i class="la la-close"></i>
                    </a>
                </div><!-- /.pull-right -->
            </div><!-- /.clearfix -->
            <div id="my-video-container">
                <div class="video-background">
                    <div id="publisher"></div>
                </div><!-- /.video-background -->
            </div><!-- /#my-video-container -->
        </div>
    </div><!-- /#tutor-stream -->
</template>

<script>
const OT = require('@opentok/client');
import Notification from '../common/Notification';

export default {
    props: ['propsApiKey', 'propsSessionId', 'propsToken', 'propsLanguage', 'propsClass', 'propsErrors', 'propsUrl'],
    components:{
        Notification: Notification,
    },
    data() {
        return {
            apiKey: this.propsApiKey,
            sessionId: this.propsSessionId,
            token: this.propsToken,
            gClass: JSON.parse(this.propsClass),
            trans: JSON.parse(this.propsLanguage),
            transError: JSON.parse(this.propsErrors),
            urls: JSON.parse(this.propsUrl),
            session:'',
            publisher:'',
            subscriber: '',
            subscriberObj:{},
        };
    },
    methods: {
        initChatBot(){
            this.validate();
        },
        validate() {
            let base = this;
            let isFalse = false;

            if(base.apiKey == undefined || base.apiKey == '' || base.apiKey == null || base.sessionId == undefined || base.sessionId == '' || base.sessionId == null || base.token == undefined || base.token == '' || base.token == null ) {
                base.$root.$emit('g-notify',{
                    type: 'danger',
                    message: base.transError.unable
                });
                isFalse = true;
            }

            if(!isFalse)
                base.initSession();
        },
        initSession() {
            let base = this;
            base.session = OT.initSession(base.apiKey, base.sessionId);
            base.session.connect(base.token, function (error) {
                if(error) {
                    let message = base.trans.failed_connect + ': '+ error.message;
                    if(error.name === "OT_NOT_CONNECTED")
                        message = base.trans.internet_connect;
                    else
                        base.$root.$emit('g-notify',{
                            type: 'danger',
                            message: message
                        });

                    return false;
                }

                base.publisher = OT.initPublisher('publisher', {
                    insertMode: 'replace',
                    width: '320px',
                    height: '200px',
                    name: base.gClass.name,
                });

                base.session.publish(base.publisher,function () {
                    base.screenshare();
                });

                base.publisher
                .on("streamCreated", function(event) {
                    $('#my-stream-container').find('.close').fadeIn();
                    base.addStream(event.stream.streamId);
                })
                .on("streamDestroyed", function(event) {
                    $('#my-stream-container').find('.close').fadeOut();
                })
                .on('exception',function(error) {
                    base.$root.$emit('g-notify',{ type: 'danger', message: error.message });
                })
                .on("accessDenied", function () {
                    base.$root.$emit('g-notify',{ type: 'danger', message: base.transError.permission_denide });
                });
            })
            .on('exception',function(error) {
                base.$root.$emit('g-notify',{ type: 'danger', message: error.message });
            })
            .on("streamCreated", function(event) {
                let streamId = event.stream.streamId;
                let dom = '<div class="col-sm-4 margin-bottom-30" id="container-'+streamId+'">\
                                <div class="video-background student-video animated fadeIn" id="main-'+streamId+'">\
                                    <div class="full-div" id="'+streamId+'"></div>\
                                    <div class="meta"></div>\
                                </div>\
                            </div>';
                $('#subscribers').append(dom);
                base.session.subscribe(event.stream, streamId , {
                    insertMode: 'append',
                    width: '100%',
                    height: '100%',
                });
                let name = event.stream.connection.data.split('&');
                name = name[1].split('=');

                let _streamId = streamId;
                let metaDom = '<div>\
                                    <div class="pull-left"><small>'+ name[1] +'<small></div>\
                                    <div class="pull-right">\
                                        <a class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill modal-streamid" data-streamid="'+_streamId+'">\
                                            <i class="flaticon-plus"></i>\
                                        </a>\
                                    </div>\
                                    <div class="clearfix"></div>\
                                </div>';
                $('#'+streamId).parent().find('.meta').html(metaDom);
            })
            .on("streamDestroyed", function(event) {
                base.addStudentEndTime(event.stream.streamId);
            });

        },
        screenshare() {
            let base = this;
            OT.checkScreenSharingCapability(function (response) {
                if (!response.supported || response.extensionRegistered === false) {
                    base.$root.$emit('g-notify',{ type: 'warning', message: 'This browser does not support screen sharing.' });
                } else if (response.extensionInstalled === false) {
                    base.$root.$emit('g-notify',{ type: 'warning', message: 'Please install the screen sharing extension and load your app over https.' });
                } else {
                    let screenSharingPublisher = OT.initPublisher('screen-preview', { videoSource: 'screen' });
                    base.session.publish(screenSharingPublisher, function (error) {
                        if (error) {
                            alert('Could not share the screen: ' + error.message);
                        }
                    });
                }
            });
        },
        addStream(streamId) {
            NProgress.start();
            axios.post(this.urls.stream_update.replace("0", this.token), { stream_id:streamId })
            .then((response) => {
                NProgress.done();
            })
            .catch((errors) => {
                NProgress.done();
            });
        },
        addStudentEndTime(streamId) {
            NProgress.start();
            axios.post(this.urls.stream_update_endtime, { stream_id:streamId })
            .then((response) => {
                NProgress.done();
            })
            .catch((errors) => {
                NProgress.done();
            });
        },
        unPublish() {
            this.session.unpublish(this.publisher);
        },
    },
    mounted(){
        this.initChatBot();
        $(document).on('click','.modal-streamid',function(event){
            
            let streamid = $(this).data('streamid');
            $('#modal-stream-id').val(streamid);
            $('#videoContainerInfoModal').modal('show');
            $('#main-'+streamid).appendTo("#modal-video-container");
        });

        $(document).on('hidden.bs.modal', '#videoContainerInfoModal' ,function (event) {
            let streamid = $('#modal-stream-id').val();
            let container = '#main-'+streamid;
            $(container).appendTo('#container-'+streamid);
        });
    }
}
</script>

<style>
    #my-video-container .video-background {
        height: 202px;
        width: 322px;
        border: 1px solid #e2e2e2;
        padding: 2px;
        box-shadow: 0 0 3px #C8C8C8;
        margin: 0 auto;
        background: url('/images/transp_bg.png') repeat;
    }

    #student-video-container {
        min-height: 450px;
    }

    #my-stream-container {
        min-height: 300px;
    }

    .full-div {
        width: 100%;
        height: 100%;
        clear: both;
    }

    .full-div .OT_root{
        margin: 0 auto;
    }

    #student-video-container .video-background {
        border: 1px solid #e2e2e2;
        padding: 2px;
        box-shadow: 0 0 3px #C8C8C8;
        margin: 0 auto;
    }

    .student-video{
        margin: 0 auto;
    }

    #student-video-container .student-video {
        background: url('/images/transp_bg.png') repeat;
        height: 202px;
        width: 322px;
        margin: 0 auto;
    }

    #student-video-container .margin-bottom-30 {
        margin-bottom: 30px;
    }
</style>