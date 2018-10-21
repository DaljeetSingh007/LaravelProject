<template>
    <div>
        <div class="m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-dismissible fade show alert-danger animated fadeIn" role="alert" v-show="type == 'danger'">
            <div class="m-alert__icon">
                <i class="la la-close"></i>
                <span></span>
            </div><!-- /.m-alert__icon -->
            <div class="m-alert__text">
                {{message}}
            </div><!-- /.m-alert__text -->
            <div class="m-alert__close">
                <button type="button" class="close" v-on:click.prevent.stop="type=null"></button>
            </div><!-- /.m-alert__close -->
        </div><!-- /.m-alert.m-alert--icon.m-alert--icon-solid.m-alert--outline.alert.alert-danger.alert-dismissible.fade.show -->
        <div class="m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-dismissible fade show alert-success animated fadeIn" role="alert" v-show="type == 'success'">
            <div class="m-alert__icon">
                <i class="la la-check"></i>
                <span></span>
            </div><!-- /.m-alert__icon -->
            <div class="m-alert__text">
                {{message}}
            </div><!-- /.m-alert__text -->
            <div class="m-alert__close">
                <button type="button" class="close" v-on:click.prevent.stop="type=null"></button>
            </div><!-- /.m-alert__close -->
        </div><!-- /.m-alert.m-alert--icon.m-alert--icon-solid.m-alert--outline.alert.alert-success.alert-dismissible.fade.show -->
        <div class="m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-dismissible fade show alert-warning animated fadeIn" role="alert" v-show="type == 'warning'">
            <div class="m-alert__icon">
                <i class="la la-warning"></i>
                <span></span>
            </div><!-- /.m-alert__icon -->
            <div class="m-alert__text">
                {{message}}
            </div><!-- /.m-alert__text -->
            <div class="m-alert__close">
                <button type="button" class="close" v-on:click.prevent.stop="type=null"></button>
            </div><!-- /.m-alert__close -->
        </div><!-- /.m-alert.m-alert--icon.m-alert--icon-solid.m-alert--outline.alert.alert-warning.alert-dismissible.fade.show -->
        <div class="m-alert m-alert--icon m-alert--icon-solid m-alert--outline alert alert-dismissible fade show alert-info animated fadeIn" role="alert" v-show="type == 'info'">
            <div class="m-alert__icon">
                <i class="la la-hand-stop-o"></i>
                <span></span>
            </div><!-- /.m-alert__icon -->
            <div class="m-alert__text">
                {{message}}
            </div><!-- /.m-alert__text -->
            <div class="m-alert__close">
                <button type="button" class="close" v-on:click.prevent.stop="type=null"></button>
            </div><!-- /.m-alert__close -->
        </div><!-- /.m-alert.m-alert--icon.m-alert--icon-solid.m-alert--outline.alert.alert-info.alert-dismissible.fade.show -->
    </div>
</template>
<script>

export default {
    props: [],
    mounted(){
        let base = this;
        base.$root.$on('g-notify',function(value){
            base.showNotification(value);
        });
    },
    data() {
        return {
            type: null,
            message: null,
            title: null
        }
    },
    methods:{
        showNotification(value){
            this.type = value.type;
            this.message = value.message;
        }
    },
}
</script>

