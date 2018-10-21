<template>
    <div v-show="listPanelStatus" class="animated fadeIn">
        <div>
            <div class="m-demo animated fadeIn" v-show="lSearchPanelStatus">
                <div class="m-demo__preview g-search-panel">
                    <div class="row">
                        <div class="col-2">
                            <div class="form-group m-form__group">
                                <label for="search_email"> {{trans.input_email}}</label>
                                <input type="text" id="search_email" @keyup.enter="showMore" class="form-control m-input" v-model="search.email"/>
                            </div><!-- /.form-group.m-form__group -->
                        </div><!-- /.col-2 -->
                        <div class="col-2">
                            <div class="form-group m-form__group">
                                <label for="search_first_name"> {{trans.input_first_name}}</label>
                                <input id="search_first_name" type="text" @keyup.enter="showMore" class="form-control m-input" v-model="search.first_name"/>
                            </div><!-- /.form-group.m-form__group -->
                        </div><!-- /.col-2 -->
                        <div class="col-2">
                            <div class="form-group m-form__group">
                                <label for="search_last_name"> {{trans.input_last_name}}</label>
                                <input id="search_last_name" type="text" @keyup.enter="showMore" class="form-control m-input" v-model="search.last_name"/>
                            </div><!-- /.form-group.m-form__group -->
                        </div><!-- /.col-2 -->
                    </div><!-- /.row -->
                </div>
            </div>
        </div>
        <div>
            <vuetable ref="vuetable"
                :api-url="urls.index"
                :fields="fields"
                :css="css"  
                :append-params="externalParams" 
                @vuetable:cell-clicked="onCellClicked"
                @vuetable:pagination-data="onPaginationData"
                @vuetable:loading="setLoader"
                @vuetable:loaded="setLoader"
                @vuetable:load-error="handleLoadError"
                class="table g-table"
                pagination-path="">
                    <template slot="actions" slot-scope="props">
                        <button class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" @click="editEvent(props.rowData.uuid)" v-bind:href="permissions.edit == 1">
                            <i class="la la-edit"></i>
                        </button>
                        <delete
                            :props-permission="permissions.delete"
                            :props-delete-url="urls.destroy.replace(0, props.rowData.uuid)"
                            :props-label="trans.popup.buttonLabel"
                            :props-alert-label="trans.popup.alert"
                        >
                        </delete>
                    </template>
            </vuetable>
        </div>
        <div>
            <table class="table g-responsive-table">
                <tr>
                    <td class="v-middle">
                        <div class="form-group m-form-group">
                            <label>Per Page:</label>
                            <select class="form-control m-input m-input--solid g-select-control" v-model="entity.perPage" @change="showMore">
                                <option value="3">3</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="150">150</option>
                                <option value="300">300</option>
                                <option value="500">500</option>
                                <option value="100">1000</option>
                            </select>
                            <vuetable-pagination-info ref="paginationInfo" info-template="Showing {to} From {total} Records." info-class="pagination-info"></vuetable-pagination-info>
                        </div>
                    </td>
                    <td class="v-middle">
                        <div class="clearfix">
                            <div class="g-sm-pull-right">
                                <vuetable-pagination ref="pagination" :css="css.pagination" @vuetable-pagination:change-page="onChangePage" ></vuetable-pagination>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import Vuetable from 'vuetable-2/src/components/Vuetable';
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination';
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo';
import Delete from '../common/Delete';

export default {
    props: ['propsTrans','propsPanel', 'propsUrls', 'propsPermissions'],
    components: {
        Vuetable,
        VuetablePagination,
        VuetablePaginationInfo,
        Delete
    },
    created: function() { this.panelStatus(this.propsPanel); },
    data() {
        let base = this;
        return {
            lSearchPanelStatus: false,
            urls: this.propsUrls,
            permissions: this.propsPermissions,
            listPanelStatus: base.propsPanel,
            loading:false,
            trans: base.propsTrans,
            entity:{ perPage: 10 },
            externalParams:{},
            fields: [
                {
                    name: '__sequence',
                    title: () => base.trans.column_heading.sr_no,
                    sortField: 'id',
                    width: '50px'
                },
                {
                    name: 'first_name',
                    title: () => base.trans.column_heading.first_name,
                    sortField: 'first_name',
                },
                {
                    name: 'last_name',
                    title: () => base.trans.column_heading.last_name,
                    sortField: 'last_name',
                },
                {
                    name: 'email',
                    title: () => base.trans.column_heading.email,
                    sortField: 'email',
                },
                {
                    name: 'active',
                    title: () => base.trans.column_heading.active,
                    sortField: 'active',
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                    callback: 'labelStatus'
                },
                {
                    name: '__slot:actions',
                    title: () => base.trans.column_heading.action,
                    width: '200px',
                    titleClass:'text-center',
                    dataClass:'text-center'
                },
            ],
            css: {
                ascendingIcon:"la la-arrow-up",
                descendingIcon:"la la-arrow-down",
                pagination: {
                    wrapperClass: 'pagination',
                    activeClass: 'active',
                    disabledClass: 'disabled',
                    pageClass: 'page',
                    icons: {
                        first: 'la la-angle-double-left',
                        prev: 'la la-angle-left',
                        next: 'la la-angle-right',
                        last: 'la la-angle-double-right',
                    },
                },
            },
            search: {
                first_name: null,
                last_name: null,
                email: null,
            }
        }
    },
    mounted(){
        let base = this;
        NProgress.configure({ parent: "#g-progress" });
        base.$root.$on('refresh-list-event',function(value){
            base.showMore();
        });

        $('#search-button').click(function(event){
            base.searchPanelStatus();
        });
    },
    methods: {
        panelStatus: function(state){this.listPanelStatus = state},
        searchPanelStatus: function(state){
            this.lSearchPanelStatus = !this.lSearchPanelStatus
            if(this.lSearchPanelStatus){
                $('#search-button').parent().css('background-color','#f4f5f8');
            }else{
                $('#search-button').parent().css('background-color','inherit')
            }
        },
        editEvent(id) {
            NProgress.start();   // will stop in createedit component 
            this.$root.$emit('edit-event', id); // listen on CreateEdit Component vue js
        },
        setLoader(){
            if(this.loading)
                NProgress.start();

            this.loading = !this.loading;

            if(!this.loading)
                NProgress.done();
        },
        onCellClicked (data, field, event) {
            this.$refs.vuetable.toggleDetailRow(data.id)
        },
        onChangePage (page) {
            NProgress.start();
            this.$refs.vuetable.changePage(page)
        },
        onPaginationData (paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationInfo.setPaginationData(paginationData);
        },
        showMore() {
            this.externalParams = {
                'perPage': this.entity.perPage,
                'search' : this.search
            };
            Vue.nextTick( () => this.$refs.vuetable.refresh());
        },
        handleLoadError(response){
            this.$root.$emit('g-notify',{ type: 'danger', message: this.trans.common.unauthorized });
        },

        /**
         * Column Modified
         */
        labelStatus(value){
            let label = '<span class="m-badge m-badge--success"></span>';
            if(!value)
                label = '<span class="m-badge m-badge--danger"></span>';
            return label;
        },
        dateFormat: function(value){
            return (value && value != '') ? moment(value).format('DD-MM-YYYY') : '-';
        },
    },
    watch: {
        propsPanel: function(newVal, oldVal) {
            this.panelStatus(newVal);
            if(newVal){
                Vue.nextTick( () => this.$refs.vuetable.refresh());
            }
        },  
    }
}
</script>
<style>
    table.g-table thead tr {
        background: #f4f3f8;
    }
    table.g-table thead tr th{
        padding:16px 10px;
    }
    table.g-table tbody tr td{
        padding:14px 10px;
    }
    table.g-table tr.odd{
        background: #faf9fc;
    }
    table.g-table tbody tr:hover{
        background: #f7f6fa;
    }

    .pagination a{
        cursor: pointer;
        display: inline-block;
        height: 2.25rem;
        min-width: 2.25rem;
        vertical-align: middle;
        padding: 0.5rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        text-align: center;
        position: relative;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        text-align: center;
        vertical-align: middle;
        font-size: 1rem;
        line-height: 1.4rem;
        font-weight: 400;
        margin-right: 5px;
    }

    .pagination a.page,
    .pagination a.btn-nav{
        color: #898b96;
    }

    .pagination a.btn-nav i{
        font-size: 1rem !important;
    }

    .pagination a.page.active{
        background: #716aca;
        color: #ffffff;
    }

    .pagination a.btn-nav:hover,
    .pagination a.btn-nav:focus,
    .pagination a.page:hover,
    .pagination a.page:focus{
        background: #716aca;
        color: #ffffff;
    }

    .pagination .btn-nav{
        background: #ebe9f2;
    }

    .g-select-control{
        max-width: 150px;
        display: inline-block;
    }

    .v-middle{
        vertical-align: middle !important;
    }

    .pagination .btn-nav.disabled:hover,
    .pagination .btn-nav.disabled:focus,
    .pagination .btn-nav.disabled{
        background: #ebe9f2;
        opacity: 0.3;
        filter: alpha(opacity=30);
        cursor: not-allowed;
    }

    .g-search-panel{
        padding: 10px 10px 0px 16px !important;
        background: #fdfdfd !important;
    }

    @media screen and (max-width: 800px) {
        table.g-responsive-table{
            display: block;
            width: 100%;
            border-top: 1px solid #E2E2E2;
        }   

        table.g-responsive-table tr td{
            display: block;
            width: 100%;
            border: none;
        }   

        table.g-responsive-table .m-form-group{
            margin-bottom: 0px;
        }
    }

    @media screen and (min-width: 800px) {
        .g-sm-pull-right{
            float: right;
        }
    }
</style>
