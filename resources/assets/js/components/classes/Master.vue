<template>
    <div class="m-portlet__body" id="users">
        <div class="tab-content">
            <notification></notification>
            <div class="tab-pane active" id="all_classes" role="tabpanel">
                <list
                    :props-panel="listPanel"
                    :props-urls="urls"
                    :props-permissions="permissions"
                    :props-trans="trans">
                </list>
            </div>
            <div class="tab-pane" id="add_edit_class" role="tabpanel">
                <div>
                    <create-edit 
                        :props-urls="urls" 
                        :props-trans="trans"
                        :props-permissions="permissions"
                        :props-panel="createEditPanel"
                        :props-data="moduleData">
                    </create-edit>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import List from './List';
    import CreateEdit from './CreateEdit';
    import Notification from '../common/Notification';

    export default {
        props: ['propsTrans', 'propsPermissions', 'propsUrls', 'propsData'],
        components:{
            List: List,
            CreateEdit: CreateEdit,
            Notification: Notification,
        },
        data(){
            return {
                listPanel: true, // if this is false LIST will not going to display
                createEditPanel: true, // if this is false Form will not going to display
                trans: JSON.parse(this.propsTrans),
                permissions: JSON.parse(this.propsPermissions),
                urls: JSON.parse(this.propsUrls),
                moduleData: JSON.parse(this.propsData),
                formReset: true
            }
        },
        mounted() {
            let base = this; // To Avoid this keyword conflict
            base.$root.$on('reset-panels',function(value){
                base.resetPanelStatus(value);
                if(value != 2) // No react if edit time
                    base.$root.$emit('refresh-list-event',1);
            });

            $('a[href="#add_edit_student"]').click((event) => {
                if(base.formReset)
                    base.$root.$emit('reset-form',1);

                base.formReset = true;
            });
        },
        methods : {
            /**
             * to reset panel and active list panel default
             */
            resetPanelStatus(value) {
                this.formReset = true;
                if(value == 1 || value == 2) {
                    if(value == 2){ // edit time Do not reset form
                        this.formReset = false;
                    }
                    $('a[href="#add_edit_class"]').trigger('click');
                    return true;
                }
                
                $('a[href="#all_classes"]').trigger('click');
                return true;
            }
        }
    }   
</script>