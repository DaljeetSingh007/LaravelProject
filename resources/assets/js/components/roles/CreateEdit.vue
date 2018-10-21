<template>
    <div class="animated fadeIn" v-show="createEditPanelStatus">
        <form @submit.prevent="sendForm" autocomplete="off" class='m-form m-form--state'>
            <input type="hidden" v-model="form.$fields.id" />
            <div class="row">
                <div class="col-6">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('name')}">
                        <label for="name"> {{trans.input_name}} <span class="text-danger">*</span></label>
                        <input type="text" name="name" class="form-control m-input form-control-danger" v-model="form.$fields.name" autocomplete="off" id="name" aria-describedby="name" autofocus/>
                        <div class="form-control-feedback" v-if="form.$errors.has('name')"> 
                            <div v-for="error in form.$errors.get('name')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
            </div><!-- /.row -->

            <div class="row m-t-15">
                <div class="col-8">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th width="250">{{trans.input_module}}</th>
                                <th>{{trans.input_permissions}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="permissions in moduleData.permissions">
                                <td><span v-text="permissions.id"></span></td>
                                <td>
                                    <div class="row">
                                        <div class="col-3" v-for="permission in permissions.value">
                                            <label class="m-checkbox m-b-0">
                                                <input type="checkbox" 
                                                v-model="form.$fields.permissions" 
                                                :id="permission.permission" 
                                                :value="permission.permission" />
                                                {{permission.label}}
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table><!-- /.table.table-bordered -->
                </div><!-- /.col-8 -->
            </div><!-- /.row.m-t-15 -->

            <div class="row m-t-16">
                <div class="col-12">
                    <button :disabled="form.$busy" v-show="form.$fields.id == 0" type="submit" class="btn btn-outline-success m-btn m-btn--custom m-btn--outline-2x">
                        {{trans.common.save_exit}}
                    </button>
                    <button :disabled="form.$busy" v-show="form.$fields.id != 0" type="submit" class="btn btn-outline-info m-btn m-btn--custom m-btn--outline-2x">
                        {{trans.common.update_exit}}
                    </button>
                    <button :disabled="form.$busy" @click="hide()" type="button" class="btn btn-outline-danger m-btn m-btn--custom m-btn--outline-2x">{{trans.common.cancel}}</button>
                </div><!-- /.col-12 -->
            </div><!-- /.row -->
        </form><!-- /form -->
    </div><!-- /.animated.fadeIn -->
</template>
<script>
    import LaravelValidator from 'vue-laravel-validator';
    import VueResource from 'vue-resource';
    Vue.use(LaravelValidator);
    Vue.use(VueResource);

    export default {
        props: ['propsTrans', 'propsUrls', 'propsPanel', 'propsData'],
        data() {
            let base = this;
            return {
                createEditPanelStatus: base.propsPanel,
                trans: base.propsTrans,
                isEdit: false,
                form: base.$form({
                    id: 0,
                    name: null,
                    permissions: [],
                    _token: base.propsData.csrf
                }),
                urls: base.propsUrls,
                moduleData: base.propsData,
            }
        },
        mounted(){
            let base = this;
            base.$root.$on('edit-event',function(value){
                base.editForm(value);
            });
            base.$root.$on('reset-form',function(value){
                base.isEdit = false;
                base.form.$errors = [];
                base.initInput();
            });
        },
        created: function() { this.panelStatus(this.propsPanel);Vue.http.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content'); },
        methods: {
            sendForm(){
                let _form = this.form.$fields;
                if(_form.id != 0)
                    return this.updateForm(_form.id);
                if(_form.id <= 0)
                    return this.storeForm();
            },
            storeForm() {
                NProgress.start();
                this.form.post(this.urls.store).then((response) => {
                    NProgress.done();
                    this.initInput();
                    this.hide();

                    this.$root.$emit('g-notify',{
                        type: response.data.type,
                        message: response.data.message 
                    });
                }, (response) => {
                    if(response.status == 403) 
                        this.$root.$emit('g-notify',{ type: 'danger', message: this.trans.common.unauthorized });     
                    else if(response.status != 422)
                        this.$root.$emit('g-notify',{ type: 'danger', message: response.data.message  });

                    NProgress.done();
                });
            },
            updateForm(id){
                NProgress.start();
                this.form.patch(this.urls.update.replace(0,id)).then((response) => {
                    NProgress.done();
                    this.initInput();
                    this.hide();

                    this.$root.$emit('g-notify',{
                        type: response.data.type,
                        message: response.data.message 
                    });
                }, (response) => {
                    if(response.status == 403) 
                        this.$root.$emit('g-notify',{ type: 'danger', message: this.trans.common.unauthorized });     
                    else if(response.status != 422)
                        this.$root.$emit('g-notify',{ type: 'danger', message: response.data.message  });

                    NProgress.done();
                });
            },
            editForm(id){
                let base = this;
                axios.get(base.urls.edit.replace(0,id) , {})
                .then((response) => {
                    if(response.data.success == true){
                        base.form = base.$form({
                            id: response.data.data.uuid,
                            name: response.data.data.display_name,
                            permissions: response.data.data.m_p
                        });
                        
                        base.isEdit = true;
                        base.$root.$emit('reset-panels', 2); // Open Create panel if data is availble in Edit
                        NProgress.done();
                    }else{
                        this.$root.$emit('g-notify',{
                            type: response.data.type,
                            message: response.data.message 
                        });
                    }
                })
                .catch((errors) => {
                    this.$root.$emit('g-notify',{ type: 'danger', message: errors.message });
                });
                NProgress.done();
                return true;
            },
            panelStatus(state){
                this.createEditPanelStatus = state;
                if(state == true){ // To Avoid Conflict. Logic is for reset every input at add time but not at edit
                    this.initInput();
                }

                return true;
            },
            initInput(){
                if(this.isEdit == true) { // prevent input reset when status is going edit
                    this.isEdit = false;
                    return true;
                }
                
                this.form = this.$form({
                    id: 0,
                    name: null,
                    permissions: [],
                });
                
                return true;
            },
            hide(){
                this.isEdit = false;
                this.initInput();
                // To Master Components
                this.$root.$emit('reset-panels');
            },
        },
        watch: {
            propsPanel: function(newVal, oldVal) {this.panelStatus(newVal)},
        },
    }
</script>
<style scoped>
    [type="checkbox"] + label{
        font-weight: bold;
    }

    .checkbox+.checkbox, .radio+.radio{
        margin-top: 10px;
    }

    .m-t-16{
        margin-top: 30px;
    }

    .m-t-15{
        margin-top: 15px;
    }

    .m-b-0{
        margin-bottom: 0px;
    }
</style>

