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
                @vuetable:load-success="showJoinButton"
                class="table g-table"
                pagination-path="">
                    <template slot="actions" slot-scope="props">
                        <a :href="urls.start_class.replaceAt(urls.start_class.length-1,props.rowData.uuid)" :class="['g-join-button','btn btn-primary btn-sm',props.rowData.uuid]" v-show="false">
                            {{trans.common.join}}
                        </a>
                        <a class="btn btn-info btn-sm g-btn" v-on:click="openModal(props.rowData.notes);">
                            {{ trans.common.notes }}
                        </a>
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
            entity:{ perPage: 10, joinButtons:[] },
            externalParams:{},
            fields: [
                {
                    name: '__sequence',
                    title: () => base.trans.column_heading.sr_no,
                    sortField: 'id',
                    width: '50px'
                },
                {
                    name: 'name',
                    title: () => base.trans.column_heading.name,
                    sortField: 'name',
                },
                {
                    name: '_students',
                    title: () => base.trans.column_heading.students,
                    callback: 'studentFormat',
                },
                {
                    name: 'start_time',
                    title: () => base.trans.column_heading.start_time,
                    sortField: 'start_time',
                },
                {
                    name: 'estimated_time',
                    title: () => base.trans.column_heading.estimated_time,
                    sortField: 'estimated_time',
                    callback: 'hourFormat',
                },
                {
                    name: '_status',
                    title: () => base.trans.column_heading.status,
                    callback: 'labelStatus',
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
        labelStatus: function(value){
            return '<span class="'+this.trans.status_color[value]+'">'+this.trans.status[value]+'<span>';
        },
        dateFormat: function(value){
            return (value && value != '') ? moment(value).format('DD-MM-YYYY HH:mm') : '<em>-</em>';
        },
        hourFormat: function(value){
            return (value && value != '') ? value + ' ' + this.trans.common.hours : '<em>-</em>';
        },
        studentFormat: function(value) {
            if(value){
                let full_name = '';
                value.map(function (val, inx) {
                    if(val.student != null){
                        full_name += val.student.first_name +' '+val.student.last_name +', ';
                    }
                });
                return full_name.slice(0, -2);
            }
            return '<em>-</em>';
        },
        showJoinButton: function(value){
            let base = this;
            if(value.data && value.data.data.length > 0){
                let currentTimeHolder = []; // To Everytime update current time_stamp of every recond. This is holder.
                setInterval(function(){
                    $.each(value.data.data,function(idx,val){
                        if(typeof currentTimeHolder[val.uuid] == 'undefined'){
                            currentTimeHolder[val.uuid] = moment(val._current_time);
                        }

                        let updateHoldedTime = moment(currentTimeHolder[val.uuid]);
                        currentTimeHolder[val.uuid] = updateHoldedTime.add(5, 's');
                        // if(val.uuid == '73e43a3c-194c-11e8-8a5f-0242d0529d53-1593277340661385'){
                        //     console.log(updateHoldedTime.add(5, 's'));
                        // }

                        let endTime = '';
                        let current_time = moment(currentTimeHolder[val.uuid]);
                        let start_time = moment(val._start_time);
                        let duration = moment.duration(current_time.diff(start_time));

                        if(val._end != '' && val._end != null && val._end != undefined) {
                            endTime = moment(val._end);
                        }
                    
                        if((duration.asMinutes() > 0 && duration.asMinutes() <= 10) || (endTime != '' && endTime.isSameOrAfter(current_time))) {
                            $('.g-join-button.'+val.uuid).show();
                        }else{
                            $('.g-join-button.'+val.uuid).hide();
                        }
                    })
                }, 5000);
            }
        },
        openModal(data){
            if(data != null){
                $('#noteInfoModal').modal('show');
                $('#noteInfoModal').find('.modal-body').html(data);
            }
        }
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

    .g-btn{
        color: #fff !important;
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
