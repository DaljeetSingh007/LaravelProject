<template>
    <div class="animated fadeIn" v-show="createEditPanelStatus">
        <form @submit.prevent="sendForm" autocomplete="off" class='m-form m-form--state'>
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
                <div class="col-3">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('start_time')}">
                        <label for="start_time"> {{trans.input_start_time}} <span class="text-danger">*</span></label>
                        <input type="text" name="start_time" class="form-control m-input form-control-danger g-datetimepicker" v-model="form.$fields.start_time" autocomplete="off" id="start_time" aria-describedby="start_time" autofocus/>
                        <div class="form-control-feedback" v-if="form.$errors.has('start_time')"> 
                            <div v-for="error in form.$errors.get('start_time')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-3 -->
                <div class="col-3">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('end_time')}">
                        <label for="end_time"> {{trans.input_end_time}} </label>
                        <input type="text" name="end_time" class="form-control m-input form-control-danger g-datetimepicker" v-model="form.$fields.end_time" autocomplete="off" id="end_time" aria-describedby="end_time" autofocus/>
                        <div class="form-control-feedback" v-if="form.$errors.has('end_time')"> 
                            <div v-for="error in form.$errors.get('end_time')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-3 -->
            </div><!-- /.row -->

            <div class="row m-t-16">
                <div class="col-3">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('tutor_id')}">
                        <label for="tutor_id"> {{trans.input_tutor}} <span class="text-danger">*</span></label>
                        <select name="tutor_id" id="tutor_id" class="form-control m-bootstrap-select m_selectpicker form-control-danger" data-live-search="true" autocomplete="off" aria-describedby="tutor_id">
                            <option data-hidden="true" value=null>{{trans.common.select_placeholder}}</option>
                            <option v-for="(item,index) in moduleData.tutors" v-bind:value="item.id">{{item.name}}</option>
                        </select>
                        <div class="form-control-feedback" v-if="form.$errors.has('tutor_id')"> 
                            <div v-for="error in form.$errors.get('tutor_id')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-3 -->
                <div class="col-3">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('estimated_time')}">
                        <label for="estimated_time"> {{trans.input_estimated_time}} </label>
                        <input type="text" name="estimated_time" class="form-control m-input form-control-danger" v-model="form.$fields.estimated_time" autocomplete="off" id="estimated_time" aria-describedby="estimated_time" autofocus/>
                        <div class="form-control-feedback" v-if="form.$errors.has('estimated_time')"> 
                            <div v-for="error in form.$errors.get('estimated_time')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-3 -->
                <div class="col-3">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('student_id')}">
                        <label for="student_id"> {{trans.input_students}} <span class="text-danger">*</span></label>
                        <select name="student_id" id="student_id" class="form-control m-bootstrap-select m_selectpicker form-control-danger" data-live-search="true" autocomplete="off" aria-describedby="student_id" multiple>
                            <option data-hidden="true" value=null>{{trans.common.select_placeholder}}</option>
                            <option v-for="(item,index) in moduleData.students" v-bind:value="item.id">{{item.name}}</option>
                        </select>
                        <div class="form-control-feedback" v-if="form.$errors.has('student_id')"> 
                            <div v-for="error in form.$errors.get('student_id')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-3 -->
            </div><!-- /.row.m-t-16-->
            
            <div class="row m-t-16">
                <div class="col-6">
                    <div class="form-group m-form__group" :class="{'has-danger': form.$errors.has('notes')}">
                        <label for="notes"> {{trans.input_notes}}</label>
                        <div id="notes"></div>
                        <div class="form-control-feedback" v-if="form.$errors.has('notes')"> 
                            <div v-for="error in form.$errors.get('notes')">
                                <div>{{error}}</div> 
                            </div> 
                        </div><!-- /.form-control-feedback -->
                    </div><!-- /.form-group.m-form__group -->
                </div><!-- /.col-6 -->
            </div><!-- /.row.m-t-16-->

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
                    estimated_time: null,
                    start_time: null,
                    end_time: null,
                    notes: null,
                    tutor_id: null,
                    student_id: [],
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
            base.initPlugins();
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
            updateForm(id) {
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
                            name: response.data.data.name,
                            estimated_time: response.data.data.estimated_time,
                            start_time: response.data.data.start_time,
                            end_time: response.data.data.end_time,
                            notes: response.data.data.notes,
                            tutor_id: response.data.data.tutor_id,
                            student_id: response.data.data.student_id,
                        });
                        
                        $("#notes").summernote('code',response.data.data.notes);
                        $('#student_id').val(response.data.data.student_id).selectpicker('refresh');
                        $('#tutor_id').val(response.data.data.tutor_id).selectpicker('refresh');
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
                base.initPlugins();
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
                    estimated_time: null,
                    start_time: null,
                    end_time: null,
                    notes: null,
                    tutor_id: null,
                    student_id: [],
                    notes: null
                });

                $('.m_selectpicker').val(null).selectpicker('refresh');
                return true;
            },
            hide(){
                this.isEdit = false;
                this.initInput();
                // To Master Components
                this.$root.$emit('reset-panels');
            },
            initPlugins(){
                let base = this;

                // Datepicker
                let options = {
                    todayHighlight: true,
                    todayBtn: true,
                    format: 'dd.mm.yyyy hh:ii',
                    autoclose: true,
                    orientation: "bottom left",
                    templates: {
                        leftArrow: '<i class="la la-angle-left"></i>',
                        rightArrow: '<i class="la la-angle-right"></i>'
                    },
                    showMeridian: true,
                };

                $('.g-datetimepicker').datetimepicker(options).on('changeDate',function(event){
                    base.form.$fields[$(event.target).attr('name')] = moment(event.date).format('DD.MM.YYYY HH:mm');
                });

                // Selectpicket
                $('.m_selectpicker').selectpicker().on('changed.bs.select',function(event){
                    let value = $(event.target).val();
                    if(value != null && value != '')
                        base.form.$fields[$(event.target).attr('name')] = value;
                    else
                        base.form.$fields[$(event.target).attr('name')] = null;
                });

                $('#notes').summernote({
                    height: 250 ,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'italic', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['height', ['height']],
                        ['table', ['table']],
                        ['insert', ['link', 'hr']],
                        ['view', ['codeview']]
                    ],
                    callbacks: {
                        onChange: function(contents, $editable) {
                            base.form.$fields['notes'] = contents;
                        }
                    }
                });
            }
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

