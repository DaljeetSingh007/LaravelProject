<template>
    <div id="student-stream">
        <notification></notification>
        <div class="col-sm-12" id="tutor-stream-container">
            <div class="clearfix">
                <h4 class="pull-left">{{trans.tutor}}</h4>
                <div class="pull-right">
                    <a class="m-portlet__nav-link m-portlet__nav-link--icon close" v-on:click="unSubscribe()" style="display:none">
                        <i class="la la-close"></i>
                    </a>
                </div><!-- /.pull-right -->
            </div><!-- /.clearfix -->
            <div id="tutor-video-container">
                <div class="video-background"> 
                    <div id="subscriber"></div>
                </div><!-- /.video-background -->
            </div><!-- /#video-container -->
        </div><!-- /#tutor-stream-container -->
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
    </div><!-- /#video-stream -->
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

                base.session.publish(base.publisher,function(){
                    screenshare();
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
                let data = event.stream.connection.data.split('&');
                let mod = data[0].split('=');
                if(mod[1] == "1"){
                    base.session.subscribe(event.stream, 'subscriber', {
                        insertMode: 'replace',
                        width: '100%',
                        height: '100%',
                    });
                }
            })
            .on("streamDestroyed", function(event) {
                let data = event.stream.connection.data.split('&');
                let mod = data[0].split('=');
                if(mod[1] == "1") {
                    $('#tutor-video-container .video-container').html('<div id="subscriber"></div>');
                }
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
        unPublish() {
            this.session.unpublish(this.publisher);
        },
    },
    mounted(){
        this.initChatBot();
    }
}
</script>

<style>
    #my-video-container .video-background{
        height: 202px;
        width: 322px;
        border: 1px solid #e2e2e2;
        padding: 2px;
        box-shadow: 0 0 3px #C8C8C8;
        margin: 0 auto;
        background: url('/images/transp_bg.png') repeat;
    }

    #tutor-video-container{
        min-height: 450px;
    }

    #my-stream-container{
        min-height: 300px;
    }

    #tutor-video-container .video-background{
        height: 360px;
        width: 640px;
        border: 1px solid #e2e2e2;
        padding: 2px;
        box-shadow: 0 0 3px #C8C8C8;
        margin: 0 auto;
        background: url('/images/transp_bg.png') repeat;
    }
</style>