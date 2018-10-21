<template>
    <div class="animated fadeIn" v-show="createEditPanelStatus">
        <form @submit.prevent="sendForm" autocomplete="off" class='m-form m-form--state'>
            <input type="hidden" v-model="form.$fields.id" />
            <div class="row">
                <div class="col-6">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('email')}">
                        <label for="email"> {{trans.input_email}} <span class="text-danger">*</span></label>
                        <input type="text" name="email" class="form-control m-input form-control-danger" v-model="form.$fields.email" autocomplete="off" id="email" aria-describedby="email" autofocus/>
                        <div class="form-control-feedback" v-if="form.$errors.has('email')"> 
                            <div v-for="error in form.$errors.get('email')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
            </div><!-- /.row -->

            <div class="row m-t-15">
                <div class="col-6">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('first_name')}">
                        <label for="first_name">{{ trans.input_first_name }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control m-input form-control-danger" id="first_name" v-model="form.$fields.first_name" autocomplete="off" name="first_name" aria-describedby="first_name" />
                        <div class="form-control-feedback" v-if="form.$errors.has('first_name')"> 
                            <div v-for="error in form.$errors.get('first_name')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
                <div class="col-6">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('last_name')}">
                        <label for="last_name">{{ trans.input_last_name }} <span class="text-danger">*</span></label>
                        <input type="text" class="form-control m-input form-control-danger" id="last_name" v-model="form.$fields.last_name" autocomplete="off" name="last_name" aria-describedby="last_name" />
                        <div class="form-control-feedback" v-if="form.$errors.has('last_name')"> 
                            <div v-for="error in form.$errors.get('last_name')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
            </div><!-- /.row -->

            <div class="row m-t-15">
                <div class="col-6">
                    <div class="form-group m-form__group ">
                        <label for="status" class="col-form-label" v-text="trans.input_status"></label>
                        <div>
                            <span class="m-switch m-switch--icon">
                                <label>
                                    <input type="checkbox" id="status" v-model="form.$fields.active" autocomplete="off">
                                    <span></span>
                                </label>
                            </span><!-- /.m-switch.m-switch--icon -->
                        </div>
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
            </div><!-- /.row.m-t-15 -->

            <div class="row m-t-15">
                <div class="col">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('password')}">
                        <label for="password">{{ trans.input_password }} <span class="text-danger" v-show="form.$fields.active == true">*</span></label>
                        <input type="password" class="form-control m-input form-control-danger" id="password" name="password" v-model="form.$fields.password" autocomplete="off" aria-describedby="password" v-bind:disabled="form.$fields.active != true" />
                        <div class="form-control-feedback" v-if="form.$errors.has('password')"> 
                            <div v-for="error in form.$errors.get('password')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col -->
                <div class="col">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('password_confirmation')}">
                        <label for="password_confirmation">{{ trans.password_confirmation }} <span class="text-danger" v-show="form.$fields.active == true">*</span></label>
                        <input type="password" class="form-control m-input form-control-danger" id="password_confirmation" name="password_confirmation" v-model="form.$fields.password_confirmation" autocomplete="off" aria-describedby="confirm_password" v-bind:disabled="form.$fields.active != true"/>
                        <div class="form-control-feedback" v-if="form.$errors.has('confirm_password')"> 
                            <div v-for="error in form.$errors.get('confirm_password')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.form-group.m-form__group -->
            </div><!-- /.row.m-t-15 -->

            <div class="row m-t-15">
                <div class="col-12">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('intro')}">
                        <label for="intro">{{ trans.input_intro }}</label>
                        <textarea name="intro" id="intro" v-model="form.$fields.intro" autocomplete="off" class="form-control m-input form-control-danger" cols="30" rows="10"></textarea>
                        <div class="form-control-feedback" v-if="form.$errors.has('intro')"> 
                            <div v-for="error in form.$errors.get('intro')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-12 -->
            </div><!-- /.row -->

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
                    first_name: null,
                    last_name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                    active: false,
                    intro: null,
                    _token: base.propsData.csrf,
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
                            first_name: response.data.data.first_name,
                            last_name: response.data.data.last_name,
                            email: response.data.data.email,
                            active: response.data.data.active,
                            password: null,
                            password_confirmation: null,
                            intro: response.data.data.intro
                        });
                        
                        base.isEdit = true;
                        base.$root.$emit('reset-panels', 2); // Open Create panel if data is availble in Edit
                        NProgress.done();
                    }else{
                        this.$root.$emit('g-notify',{ type: response.data.type, message: response.data.message  });
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
                    first_name: null,
                    last_name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                    active: false,
                    intro: null,
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
</style>

