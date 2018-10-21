<template>
    <span>
        <button type="button" 
            v-on:click="clickHandler(deleteUrl)" 
            class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" 
            v-show="showButton"
            v-html="deleteLabel">
        </button>
    </span>
</template>
<script>
import VueSweetAlert from 'vue-sweetalert';
Vue.use(VueSweetAlert);

export default {
    props: ['propsPermission','propsDeleteUrl','propsLabel','propsAlertLabel'],
    data() {
        return {
            showButton: this.propsPermission,
            deleteUrl: this.propsDeleteUrl,
            deleteLabel: this.propsLabel,
            alertLabel: this.propsAlertLabel
        }
    },
    methods:{
        clickHandler(url) {
            NProgress.start();
            var base = this;
            base.$swal({
                title: base.alertLabel.title,
                text: base.alertLabel.message,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: base.alertLabel.buttonYes,
                cancelButtonText: base.alertLabel.buttonNo
            }).then((result)=>{
                let base = this;
                axios.delete(url, {})
                .then((response) => {
                    // showNotification('alert-'+response.data.flash, response.data.message);
                    if(response.data.success == true) {
                        base.$root.$emit('refresh-list-event',1); // Open Create panel if data is availble in Edit

                        this.$root.$emit('g-notify',{
                            type: response.data.type,
                            message: response.data.message 
                        });
                        return true;
                    }
                    this.$root.$emit('g-notify',{
                        type: response.data.type,
                        message: response.data.message 
                    });
                })
                .catch((errors) => {
                    if(errors.response.status == 422)
                        this.$root.$emit('g-notify',{ type: 'danger', message: errors.response.data.message });
                    else
                        this.$root.$emit('g-notify',{ type: 'danger', message: errors.message });
                });
                NProgress.done();
            }).catch((result)=> {
                this.$root.$emit('g-notify',{ type: 'danger', message: errors.message });
            });
            return true;
        }
    },
    watch: {
        propsDeleteUrl: function(newVal, oldVal) {
            this.deleteUrl = newVal;
        },  
    }
}
</script>

