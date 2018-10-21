/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fields: {
      type: Array,
      required: true
    },
    loadOnStart: {
      type: Boolean,
      default: true
    },
    apiUrl: {
      type: String,
      default: ''
    },
    httpMethod: {
      type: String,
      default: 'get',
      validator: function validator(value) {
        return ['get', 'post'].indexOf(value) > -1;
      }
    },
    reactiveApiUrl: {
      type: Boolean,
      default: true
    },
    apiMode: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object],
      default: function _default() {
        return null;
      }
    },
    dataTotal: {
      type: Number,
      default: 0
    },
    dataManager: {
      type: Function,
      default: function _default() {
        return null;
      }
    },
    dataPath: {
      type: String,
      default: 'data'
    },
    paginationPath: {
      type: [String],
      default: 'links.pagination'
    },
    queryParams: {
      type: [Object, Function],
      default: function _default() {
        return {
          sort: 'sort',
          page: 'page',
          perPage: 'per_page'
        };
      }
    },
    appendParams: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    httpOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    httpFetch: {
      type: Function,
      default: null
    },
    perPage: {
      type: Number,
      default: function _default() {
        return 10;
      }
    },
    initialPage: {
      type: Number,
      default: function _default() {
        return 1;
      }
    },
    sortOrder: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    multiSort: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    tableHeight: {
      type: String,
      default: null
    },

    multiSortKey: {
      type: String,
      default: 'alt'
    },

    rowClassCallback: {
      type: [String, Function],
      default: ''
    },
    rowClass: {
      type: [String, Function],
      default: ''
    },
    detailRowComponent: {
      type: String,
      default: ''
    },
    detailRowTransition: {
      type: String,
      default: ''
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    css: {
      type: Object,
      default: function _default() {
        return {
          tableClass: 'ui blue selectable celled stackable attached table',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: '',
          detailRowClass: 'vuetable-detail-row',
          handleIcon: 'grey sidebar icon',
          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',
          tableHeaderClass: 'vuetable-fixed-layout'
        };
      }
    },
    minRows: {
      type: Number,
      default: 0
    },
    silent: {
      type: Boolean,
      default: false
    },
    noDataTemplate: {
      type: String,
      default: function _default() {
        return 'No Data Available';
      }
    },
    showSortIcons: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable:',
      tableFields: [],
      tableData: null,
      tablePagination: null,
      currentPage: this.initialPage,
      selectedTo: [],
      visibleDetailRows: [],
      lastScrollPosition: 0,
      scrollBarWidth: '17px',
      scrollVisible: false
    };
  },
  mounted: function mounted() {
    this.normalizeFields();
    this.normalizeSortOrder();
    if (this.isFixedHeader) {
      this.scrollBarWidth = this.getScrollBarWidth() + 'px';
    }
    this.$nextTick(function () {
      this.fireEvent('initialized', this.tableFields);
    });

    if (this.loadOnStart) {
      this.loadData();
    }
    if (this.isFixedHeader) {
      var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        elem.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  destroyed: function destroyed() {
    var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
    if (elem != null) {
      elem.removeEventListener('scroll', this.handleScroll);
    }
  },

  computed: {
    useDetailRow: function useDetailRow() {
      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {
        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!');
        return false;
      }

      return this.detailRowComponent !== '';
    },
    countVisibleFields: function countVisibleFields() {
      return this.tableFields.filter(function (field) {
        return field.visible;
      }).length;
    },
    countTableData: function countTableData() {
      if (this.tableData === null) {
        return 0;
      }
      return this.tableData.length;
    },
    displayEmptyDataRow: function displayEmptyDataRow() {
      return this.countTableData === 0 && this.noDataTemplate.length > 0;
    },
    lessThanMinRows: function lessThanMinRows() {
      if (this.tableData === null || this.tableData.length === 0) {
        return true;
      }
      return this.tableData.length < this.minRows;
    },
    blankRows: function blankRows() {
      if (this.tableData === null || this.tableData.length === 0) {
        return this.minRows;
      }
      if (this.tableData.length >= this.minRows) {
        return 0;
      }

      return this.minRows - this.tableData.length;
    },
    isApiMode: function isApiMode() {
      return this.apiMode;
    },
    isDataMode: function isDataMode() {
      return !this.apiMode;
    },
    isFixedHeader: function isFixedHeader() {
      return this.tableHeight != null;
    }
  },
  methods: {
    getScrollBarWidth: function getScrollBarWidth() {
      var outer = document.createElement('div');
      var inner = document.createElement('div');

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';

      inner.style.width = '100%';

      outer.appendChild(inner);
      document.body.appendChild(outer);

      var widthWithoutScrollbar = outer.offsetWidth;

      outer.style.overflow = 'scroll';

      var widthWithScrollbar = inner.offsetWidth;

      document.body.removeChild(outer);

      return widthWithoutScrollbar - widthWithScrollbar;
    },
    handleScroll: function handleScroll(e) {
      var horizontal = e.currentTarget.scrollLeft;
      if (horizontal != this.lastScrollPosition) {
        var header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0];
        if (header != null) {
          header.scrollLeft = horizontal;
        }
        this.lastScrollPosition = horizontal;
      }
    },
    normalizeFields: function normalizeFields() {
      if (typeof this.fields === 'undefined') {
        this.warn('You need to provide "fields" prop.');
        return;
      }

      this.tableFields = [];
      var self = this;
      var obj = void 0;
      this.fields.forEach(function (field, i) {
        if (typeof field === 'string') {
          obj = {
            name: field,
            title: self.setTitle(field),
            titleClass: '',
            dataClass: '',
            callback: null,
            visible: true
          };
        } else {
          obj = {
            name: field.name,
            width: field.width,
            title: field.title === undefined ? self.setTitle(field.name) : field.title,
            sortField: field.sortField,
            titleClass: field.titleClass === undefined ? '' : field.titleClass,
            dataClass: field.dataClass === undefined ? '' : field.dataClass,
            callback: field.callback === undefined ? '' : field.callback,
            visible: field.visible === undefined ? true : field.visible
          };
        }
        self.tableFields.push(obj);
      });
    },
    setData: function setData(data) {
      if (Array.isArray(data)) {
        this.tableData = data;
        return;
      }

      this.fireEvent('loading');

      this.tableData = this.getObjectValue(data, this.dataPath, null);
      this.tablePagination = this.getObjectValue(data, this.paginationPath, null);

      this.$nextTick(function () {
        this.fireEvent('pagination-data', this.tablePagination);
        this.fireEvent('loaded');
      });
    },
    setTitle: function setTitle(str) {
      if (this.isSpecialField(str)) {
        return '';
      }

      return this.titleCase(str);
    },
    getTitle: function getTitle(field) {
      if (typeof field.title === 'function') return field.title();

      return typeof field.title === 'undefined' ? field.name.replace('.', ' ') : field.title;
    },
    renderTitle: function renderTitle(field) {
      var title = this.getTitle(field);

      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {
        var style = 'opacity:' + this.sortIconOpacity(field) + ';position:relative;float:right';
        var iconTag = this.showSortIcons ? this.renderIconTag(['sort-icon', this.sortIcon(field)], 'style="' + style + '"') : '';
        return title + ' ' + iconTag;
      }

      return title;
    },
    renderSequence: function renderSequence(index) {
      return this.tablePagination ? this.tablePagination.from + index : index;
    },
    renderNormalField: function renderNormalField(field, item) {
      return this.hasCallback(field) ? this.callCallback(field, item) : this.getObjectValue(item, field.name, '');
    },
    isSpecialField: function isSpecialField(fieldName) {
      return fieldName.slice(0, 2) === '__';
    },
    titleCase: function titleCase(str) {
      return str.replace(/\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    camelCase: function camelCase(str) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

      var self = this;
      return str.split(delimiter).map(function (item) {
        return self.titleCase(item);
      }).join('');
    },
    notIn: function notIn(str, arr) {
      return arr.indexOf(str) === -1;
    },
    loadData: function loadData() {
      var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.loadSuccess;
      var failed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.loadFailed;

      if (this.isDataMode) {
        this.callDataManager();
        return;
      }

      this.fireEvent('loading');

      this.httpOptions['params'] = this.getAppendParams(this.getAllQueryParams());

      return this.fetch(this.apiUrl, this.httpOptions).then(success, failed).catch(function () {
        return failed();
      });
    },
    fetch: function fetch(apiUrl, httpOptions) {
      return this.httpFetch ? this.httpFetch(apiUrl, httpOptions) : __WEBPACK_IMPORTED_MODULE_1_axios___default.a[this.httpMethod](apiUrl, httpOptions);
    },
    loadSuccess: function loadSuccess(response) {
      this.fireEvent('load-success', response);

      var body = this.transform(response.data);

      this.tableData = this.getObjectValue(body, this.dataPath, null);
      this.tablePagination = this.getObjectValue(body, this.paginationPath, null);

      if (this.tablePagination === null) {
        this.warn('vuetable: pagination-path "' + this.paginationPath + '" not found. ' + 'It looks like the data returned from the sever does not have pagination information ' + "or you may have set it incorrectly.\n" + 'You can explicitly suppress this warning by setting pagination-path="".');
      }

      this.$nextTick(function () {
        this.fixHeader();
        this.fireEvent('pagination-data', this.tablePagination);
        this.fireEvent('loaded');
      });
    },
    fixHeader: function fixHeader() {
      if (!this.isFixedHeader) {
        return;
      }

      var elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];
      if (elem != null) {
        if (elem.scrollHeight > elem.clientHeight) {
          this.scrollVisible = true;
        } else {
          this.scrollVisible = false;
        }
      }
    },
    loadFailed: function loadFailed(response) {
      console.error('load-error', response);
      this.fireEvent('load-error', response);
      this.fireEvent('loaded');
    },
    transform: function transform(data) {
      var func = 'transform';

      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, data);
      }

      return data;
    },
    parentFunctionExists: function parentFunctionExists(func) {
      return func !== '' && typeof this.$parent[func] === 'function';
    },
    callParentFunction: function callParentFunction(func, args) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (this.parentFunctionExists(func)) {
        return this.$parent[func].call(this.$parent, args);
      }

      return defaultValue;
    },
    fireEvent: function fireEvent(eventName, args) {
      this.$emit(this.eventPrefix + eventName, args);
    },
    warn: function warn(msg) {
      if (!this.silent) {
        console.warn(msg);
      }
    },
    getAllQueryParams: function getAllQueryParams() {
      var params = {};

      if (typeof this.queryParams === 'function') {
        params = this.queryParams(this.sortOrder, this.currentPage, this.perPage);
        return (typeof params === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(params)) !== 'object' ? {} : params;
      }

      params[this.queryParams.sort] = this.getSortParam();
      params[this.queryParams.page] = this.currentPage;
      params[this.queryParams.perPage] = this.perPage;

      return params;
    },
    getSortParam: function getSortParam() {
      if (!this.sortOrder || this.sortOrder.field == '') {
        return '';
      }

      if (typeof this.$parent['getSortParam'] === 'function') {
        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder);
      }

      return this.getDefaultSortParam();
    },
    getDefaultSortParam: function getDefaultSortParam() {
      var result = '';

      for (var i = 0; i < this.sortOrder.length; i++) {
        var fieldName = typeof this.sortOrder[i].sortField === 'undefined' ? this.sortOrder[i].field : this.sortOrder[i].sortField;

        result += fieldName + '|' + this.sortOrder[i].direction + (i + 1 < this.sortOrder.length ? ',' : '');
      }
      console.log('getDefaultSortParam: ', result);
      return result;
    },
    getAppendParams: function getAppendParams(params) {
      for (var x in this.appendParams) {
        params[x] = this.appendParams[x];
      }

      return params;
    },
    extractName: function extractName(string) {
      return string.split(':')[0].trim();
    },
    extractArgs: function extractArgs(string) {
      return string.split(':')[1];
    },
    isSortable: function isSortable(field) {
      return !(typeof field.sortField === 'undefined');
    },
    isInCurrentSortGroup: function isInCurrentSortGroup(field) {
      return this.currentSortOrderPosition(field) !== false;
    },
    hasSortableIcon: function hasSortableIcon(field) {
      return this.isSortable(field) && this.css.sortableIcon != '';
    },
    currentSortOrderPosition: function currentSortOrderPosition(field) {
      if (!this.isSortable(field)) {
        return false;
      }

      for (var i = 0; i < this.sortOrder.length; i++) {
        if (this.fieldIsInSortOrderPosition(field, i)) {
          return i;
        }
      }

      return false;
    },
    fieldIsInSortOrderPosition: function fieldIsInSortOrderPosition(field, i) {
      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField;
    },
    orderBy: function orderBy(field, event) {
      if (!this.isSortable(field)) return;

      var key = this.multiSortKey.toLowerCase() + 'Key';

      if (this.multiSort && event[key]) {
        this.multiColumnSort(field);
      } else {
        this.singleColumnSort(field);
      }

      this.currentPage = 1;
      if (this.apiMode || this.dataManager) {
        this.loadData();
      }
    },
    multiColumnSort: function multiColumnSort(field) {
      var i = this.currentSortOrderPosition(field);

      if (i === false) {
        this.sortOrder.push({
          field: field.name,
          sortField: field.sortField,
          direction: 'asc'
        });
      } else {
        if (this.sortOrder[i].direction === 'asc') {
          this.sortOrder[i].direction = 'desc';
        } else {
          this.sortOrder.splice(i, 1);
        }
      }
    },
    singleColumnSort: function singleColumnSort(field) {
      if (this.sortOrder.length === 0) {
        this.clearSortOrder();
      }

      this.sortOrder.splice(1);

      if (this.fieldIsInSortOrderPosition(field, 0)) {
        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortOrder[0].direction = 'asc';
      }
      this.sortOrder[0].field = field.name;
      this.sortOrder[0].sortField = field.sortField;
    },
    clearSortOrder: function clearSortOrder() {
      this.sortOrder.push({
        field: '',
        sortField: '',
        direction: 'asc'
      });
    },
    sortClass: function sortClass(field) {
      var cls = '';
      var i = this.currentSortOrderPosition(field);

      if (i !== false) {
        cls = this.sortOrder[i].direction == 'asc' ? this.css.ascendingClass : this.css.descendingClass;
      }

      return cls;
    },
    sortIcon: function sortIcon(field) {
      var cls = this.css.sortableIcon;
      var i = this.currentSortOrderPosition(field);

      if (i !== false) {
        cls = this.sortOrder[i].direction == 'asc' ? this.css.ascendingIcon : this.css.descendingIcon;
      }

      return cls;
    },
    sortIconOpacity: function sortIconOpacity(field) {
      var max = 1.0,
          min = 0.3,
          step = 0.3;

      var count = this.sortOrder.length;
      var current = this.currentSortOrderPosition(field);

      if (max - count * step < min) {
        step = (max - min) / (count - 1);
      }

      var opacity = max - current * step;

      return opacity;
    },
    hasCallback: function hasCallback(item) {
      return item.callback ? true : false;
    },
    callCallback: function callCallback(field, item) {
      if (!this.hasCallback(field)) return;

      if (typeof field.callback == 'function') {
        return field.callback(this.getObjectValue(item, field.name));
      }

      var args = field.callback.split('|');
      var func = args.shift();

      if (typeof this.$parent[func] === 'function') {
        var value = this.getObjectValue(item, field.name);

        return args.length > 0 ? this.$parent[func].apply(this.$parent, [value].concat(args)) : this.$parent[func].call(this.$parent, value);
      }

      return null;
    },
    getObjectValue: function getObjectValue(object, path, defaultValue) {
      defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue;

      var obj = object;
      if (path.trim() != '') {
        var keys = path.split('.');
        keys.forEach(function (key) {
          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {
            obj = obj[key];
          } else {
            obj = defaultValue;
            return;
          }
        });
      }
      return obj;
    },
    toggleCheckbox: function toggleCheckbox(dataItem, fieldName, event) {
      var isChecked = event.target.checked;
      var idColumn = this.trackBy;

      if (dataItem[idColumn] === undefined) {
        this.warn('__checkbox field: The "' + this.trackBy + '" field does not exist! Make sure the field you specify in "track-by" prop does exist.');
        return;
      }

      var key = dataItem[idColumn];
      if (isChecked) {
        this.selectId(key);
      } else {
        this.unselectId(key);
      }
      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem);
    },
    selectId: function selectId(key) {
      if (!this.isSelectedRow(key)) {
        this.selectedTo.push(key);
      }
    },
    unselectId: function unselectId(key) {
      this.selectedTo = this.selectedTo.filter(function (item) {
        return item !== key;
      });
    },
    isSelectedRow: function isSelectedRow(key) {
      return this.selectedTo.indexOf(key) >= 0;
    },
    rowSelected: function rowSelected(dataItem, fieldName) {
      var idColumn = this.trackBy;
      var key = dataItem[idColumn];

      return this.isSelectedRow(key);
    },
    checkCheckboxesState: function checkCheckboxesState(fieldName) {
      if (!this.tableData) return;

      var self = this;
      var idColumn = this.trackBy;
      var selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]';
      var els = document.querySelectorAll(selector);

      if (els.forEach === undefined) els.forEach = function (cb) {
        [].forEach.call(els, cb);
      };

      var selected = this.tableData.filter(function (item) {
        return self.selectedTo.indexOf(item[idColumn]) >= 0;
      });

      if (selected.length <= 0) {
        els.forEach(function (el) {
          el.indeterminate = false;
        });
        return false;
      } else if (selected.length < this.perPage) {
          els.forEach(function (el) {
            el.indeterminate = true;
          });
          return true;
        } else {
            els.forEach(function (el) {
              el.indeterminate = false;
            });
            return true;
          }
    },
    toggleAllCheckboxes: function toggleAllCheckboxes(fieldName, event) {
      var self = this;
      var isChecked = event.target.checked;
      var idColumn = this.trackBy;

      if (isChecked) {
        this.tableData.forEach(function (dataItem) {
          self.selectId(dataItem[idColumn]);
        });
      } else {
        this.tableData.forEach(function (dataItem) {
          self.unselectId(dataItem[idColumn]);
        });
      }
      this.$emit('vuetable:checkbox-toggled-all', isChecked);
    },
    gotoPreviousPage: function gotoPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.loadData();
      }
    },
    gotoNextPage: function gotoNextPage() {
      if (this.currentPage < this.tablePagination.last_page) {
        this.currentPage++;
        this.loadData();
      }
    },
    gotoPage: function gotoPage(page) {
      if (page != this.currentPage && page > 0 && page <= this.tablePagination.last_page) {
        this.currentPage = page;
        this.loadData();
      }
    },
    isVisibleDetailRow: function isVisibleDetailRow(rowId) {
      return this.visibleDetailRows.indexOf(rowId) >= 0;
    },
    showDetailRow: function showDetailRow(rowId) {
      if (!this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.push(rowId);
      }
    },
    hideDetailRow: function hideDetailRow(rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.visibleDetailRows.splice(this.visibleDetailRows.indexOf(rowId), 1);
      }
    },
    toggleDetailRow: function toggleDetailRow(rowId) {
      if (this.isVisibleDetailRow(rowId)) {
        this.hideDetailRow(rowId);
      } else {
        this.showDetailRow(rowId);
      }
    },
    showField: function showField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = true;
    },
    hideField: function hideField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = false;
    },
    toggleField: function toggleField(index) {
      if (index < 0 || index > this.tableFields.length) return;

      this.tableFields[index].visible = !this.tableFields[index].visible;
    },
    renderIconTag: function renderIconTag(classes) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return typeof this.css.renderIcon === 'undefined' ? '<i class="' + classes.join(' ') + '" ' + options + '></i>' : this.css.renderIcon(classes, options);
    },
    makePagination: function makePagination() {
      var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var currentPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var pagination = {};
      total = total === null ? this.dataTotal : total;
      perPage = perPage === null ? this.perPage : perPage;
      currentPage = currentPage === null ? this.currentPage : currentPage;

      return {
        'total': total,
        'per_page': perPage,
        'current_page': currentPage,
        'last_page': Math.ceil(total / perPage) || 0,
        'next_page_url': '',
        'prev_page_url': '',
        'from': (currentPage - 1) * perPage + 1,
        'to': Math.min(currentPage * perPage, total)
      };
    },
    normalizeSortOrder: function normalizeSortOrder() {
      this.sortOrder.forEach(function (item) {
        item.sortField = item.sortField || item.field;
      });
    },
    callDataManager: function callDataManager() {
      if (this.dataManager === null && this.data === null) return;

      if (Array.isArray(this.data)) {
        console.log('data mode: array');
        this.setData(this.data);
      } else {
        this.normalizeSortOrder();
        this.setData(this.dataManager(this.sortOrder, this.makePagination()));
      }
    },
    onRowClass: function onRowClass(dataItem, index) {
      if (this.rowClassCallback !== '') {
        this.warn('"row-class-callback" prop is deprecated, please use "row-class" prop instead.');
        return;
      }

      if (typeof this.rowClass === 'function') {
        return this.rowClass(dataItem, index);
      }

      return this.rowClass;
    },
    onRowChanged: function onRowChanged(dataItem) {
      this.fireEvent('row-changed', dataItem);
      return true;
    },
    onRowClicked: function onRowClicked(dataItem, event) {
      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event);
      return true;
    },
    onRowDoubleClicked: function onRowDoubleClicked(dataItem, event) {
      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event);
    },
    onDetailRowClick: function onDetailRowClick(dataItem, event) {
      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event);
    },
    onCellClicked: function onCellClicked(dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event);
    },
    onCellDoubleClicked: function onCellDoubleClicked(dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event);
    },
    onCellRightClicked: function onCellRightClicked(dataItem, field, event) {
      this.$emit(this.eventPrefix + 'cell-rightclicked', dataItem, field, event);
    },
    changePage: function changePage(page) {
      if (page === 'prev') {
        this.gotoPreviousPage();
      } else if (page === 'next') {
        this.gotoNextPage();
      } else {
        this.gotoPage(page);
      }
    },
    reload: function reload() {
      return this.loadData();
    },
    refresh: function refresh() {
      this.currentPage = 1;
      return this.loadData();
    },
    resetData: function resetData() {
      this.tableData = null;
      this.tablePagination = null;
      this.fireEvent('data-reset');
    }
  },
  watch: {
    'multiSort': function multiSort(newVal, oldVal) {
      if (newVal === false && this.sortOrder.length > 1) {
        this.sortOrder.splice(1);
        this.loadData();
      }
    },
    'apiUrl': function apiUrl(newVal, oldVal) {
      if (this.reactiveApiUrl && newVal !== oldVal) this.refresh();
    },
    'data': function data(newVal, oldVal) {
      this.setData(newVal);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePagination.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VuetablePaginationMixin_vue__ = __webpack_require__("./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VuetablePaginationMixin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VuetablePaginationMixin_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__VuetablePaginationMixin_vue___default.a]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VuetablePaginationInfoMixin_vue__ = __webpack_require__("./node_modules/vuetable-2/src/components/VuetablePaginationInfoMixin.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VuetablePaginationInfoMixin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VuetablePaginationInfoMixin_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__VuetablePaginationInfoMixin_vue___default.a]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfoMixin.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    css: {
      type: Object,
      default: function _default() {
        return {
          infoClass: 'left floated left aligned six wide column'
        };
      }
    },
    infoTemplate: {
      type: String,
      default: function _default() {
        return "Displaying {from} to {to} of {total} items";
      }
    },
    noDataTemplate: {
      type: String,
      default: function _default() {
        return 'No relevant data';
      }
    }
  },
  data: function data() {
    return {
      tablePagination: null
    };
  },
  computed: {
    paginationInfo: function paginationInfo() {
      if (this.tablePagination == null || this.tablePagination.total == 0) {
        return this.noDataTemplate;
      }

      return this.infoTemplate.replace('{from}', this.tablePagination.from || 0).replace('{to}', this.tablePagination.to || 0).replace('{total}', this.tablePagination.total || 0);
    }
  },
  methods: {
    setPaginationData: function setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData: function resetData() {
      this.tablePagination = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    css: {
      type: Object,
      default: function _default() {
        return {
          wrapperClass: 'ui right floated pagination menu',
          activeClass: 'active large',
          disabledClass: 'disabled',
          pageClass: 'item',
          linkClass: 'icon item',
          paginationClass: 'ui bottom attached segment grid',
          paginationInfoClass: 'left floated left aligned six wide column',
          dropdownClass: 'ui search dropdown',
          icons: {
            first: 'angle double left icon',
            prev: 'left chevron icon',
            next: 'right chevron icon',
            last: 'angle double right icon'
          }
        };
      }
    },
    onEachSide: {
      type: Number,
      default: function _default() {
        return 2;
      }
    }
  },
  data: function data() {
    return {
      eventPrefix: 'vuetable-pagination:',
      tablePagination: null
    };
  },
  computed: {
    totalPage: function totalPage() {
      return this.tablePagination === null ? 0 : this.tablePagination.last_page;
    },
    isOnFirstPage: function isOnFirstPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === 1;
    },
    isOnLastPage: function isOnLastPage() {
      return this.tablePagination === null ? false : this.tablePagination.current_page === this.tablePagination.last_page;
    },
    notEnoughPages: function notEnoughPages() {
      return this.totalPage < this.onEachSide * 2 + 4;
    },
    windowSize: function windowSize() {
      return this.onEachSide * 2 + 1;
    },
    windowStart: function windowStart() {
      if (!this.tablePagination || this.tablePagination.current_page <= this.onEachSide) {
        return 1;
      } else if (this.tablePagination.current_page >= this.totalPage - this.onEachSide) {
        return this.totalPage - this.onEachSide * 2;
      }

      return this.tablePagination.current_page - this.onEachSide;
    }
  },
  methods: {
    loadPage: function loadPage(page) {
      this.$emit(this.eventPrefix + 'change-page', page);
    },
    isCurrentPage: function isCurrentPage(page) {
      return page === this.tablePagination.current_page;
    },
    setPaginationData: function setPaginationData(tablePagination) {
      this.tablePagination = tablePagination;
    },
    resetData: function resetData() {
      this.tablePagination = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Delete.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_sweetalert__ = __webpack_require__("./node_modules/vue-sweetalert/build/vue-sweetalert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_sweetalert__);
//
//
//
//
//
//
//
//
//
//


Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_sweetalert___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['propsPermission', 'propsDeleteUrl', 'propsLabel', 'propsAlertLabel'],
    data: function data() {
        return {
            showButton: this.propsPermission,
            deleteUrl: this.propsDeleteUrl,
            deleteLabel: this.propsLabel,
            alertLabel: this.propsAlertLabel
        };
    },

    methods: {
        clickHandler: function clickHandler(url) {
            var _this = this;

            NProgress.start();
            var base = this;
            base.$swal({
                title: base.alertLabel.title,
                text: base.alertLabel.message,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: base.alertLabel.buttonYes,
                cancelButtonText: base.alertLabel.buttonNo
            }).then(function (result) {
                var base = _this;
                axios.delete(url, {}).then(function (response) {
                    // showNotification('alert-'+response.data.flash, response.data.message);
                    if (response.data.success == true) {
                        base.$root.$emit('refresh-list-event', 1); // Open Create panel if data is availble in Edit

                        _this.$root.$emit('g-notify', {
                            type: response.data.type,
                            message: response.data.message
                        });
                        return true;
                    }
                    _this.$root.$emit('g-notify', {
                        type: response.data.type,
                        message: response.data.message
                    });
                }).catch(function (errors) {
                    if (errors.response.status == 422) _this.$root.$emit('g-notify', { type: 'danger', message: errors.response.data.message });else _this.$root.$emit('g-notify', { type: 'danger', message: errors.message });
                });
                NProgress.done();
            }).catch(function (result) {
                if (result == 'cancel') {} else {
                    _this.$root.$emit('g-notify', { type: 'danger', message: errors.message });
                }
                NProgress.done();
            });
            return true;
        }
    },
    watch: {
        propsDeleteUrl: function propsDeleteUrl(newVal, oldVal) {
            this.deleteUrl = newVal;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Notification.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: [],
    mounted: function mounted() {
        var base = this;
        base.$root.$on('g-notify', function (value) {
            base.showNotification(value);
        });
    },
    data: function data() {
        return {
            type: null,
            message: null,
            title: null
        };
    },

    methods: {
        showNotification: function showNotification(value) {
            this.type = value.type;
            this.message = value.message;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/student-classes/List.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_Vuetable__ = __webpack_require__("./node_modules/vuetable-2/src/components/Vuetable.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_Vuetable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_Vuetable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetable_2_src_components_VuetablePagination__ = __webpack_require__("./node_modules/vuetable-2/src/components/VuetablePagination.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetable_2_src_components_VuetablePagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetable_2_src_components_VuetablePagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetable_2_src_components_VuetablePaginationInfo__ = __webpack_require__("./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetable_2_src_components_VuetablePaginationInfo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetable_2_src_components_VuetablePaginationInfo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Delete__ = __webpack_require__("./resources/assets/js/components/common/Delete.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_Delete__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['propsTrans', 'propsPanel', 'propsUrls', 'propsPermissions'],
    components: {
        Vuetable: __WEBPACK_IMPORTED_MODULE_0_vuetable_2_src_components_Vuetable___default.a,
        VuetablePagination: __WEBPACK_IMPORTED_MODULE_1_vuetable_2_src_components_VuetablePagination___default.a,
        VuetablePaginationInfo: __WEBPACK_IMPORTED_MODULE_2_vuetable_2_src_components_VuetablePaginationInfo___default.a,
        Delete: __WEBPACK_IMPORTED_MODULE_3__common_Delete___default.a
    },
    created: function created() {
        this.panelStatus(this.propsPanel);
    },
    data: function data() {
        var base = this;
        return {
            lSearchPanelStatus: false,
            urls: this.propsUrls,
            permissions: this.propsPermissions,
            listPanelStatus: base.propsPanel,
            loading: false,
            trans: base.propsTrans,
            entity: { perPage: 10, joinButtons: [] },
            externalParams: {},
            fields: [{
                name: '__sequence',
                title: function title() {
                    return base.trans.column_heading.sr_no;
                },
                sortField: 'id',
                width: '50px'
            }, {
                name: 'name',
                title: function title() {
                    return base.trans.column_heading.name;
                },
                sortField: 'name'
            }, {
                name: '_tutors',
                title: function title() {
                    return base.trans.column_heading.tutor;
                },
                callback: 'tutorFormat'
            }, {
                name: 'start_time',
                title: function title() {
                    return base.trans.column_heading.start_time;
                },
                sortField: 'start_time'
            }, {
                name: 'estimated_time',
                title: function title() {
                    return base.trans.column_heading.estimated_time;
                },
                sortField: 'estimated_time',
                callback: 'hourFormat'
            }, {
                name: '_status',
                title: function title() {
                    return base.trans.column_heading.status;
                },
                callback: 'labelStatus'
            }, {
                name: '__slot:actions',
                title: function title() {
                    return base.trans.column_heading.action;
                },
                width: '200px',
                titleClass: 'text-center',
                dataClass: 'text-center'
            }],
            css: {
                ascendingIcon: "fa fa-arrow-up",
                descendingIcon: "fa fa-arrow-down",
                pagination: {
                    wrapperClass: 'pagination',
                    activeClass: 'active',
                    disabledClass: 'disabled',
                    pageClass: 'page',
                    icons: {
                        first: 'fa fa-angle-double-left',
                        prev: 'fa fa-angle-left',
                        next: 'fa fa-angle-right',
                        last: 'fa fa-angle-double-right'
                    }
                }
            },
            search: {
                first_name: null,
                last_name: null,
                email: null
            }
        };
    },
    mounted: function mounted() {
        var base = this;
        NProgress.configure({ parent: "#g-progress" });
        base.$root.$on('refresh-list-event', function (value) {
            base.showMore();
        });

        $('#search-button').click(function (event) {
            base.searchPanelStatus();
        });
    },

    methods: {
        panelStatus: function panelStatus(state) {
            this.listPanelStatus = state;
        },
        searchPanelStatus: function searchPanelStatus(state) {
            this.lSearchPanelStatus = !this.lSearchPanelStatus;
            if (this.lSearchPanelStatus) {
                $('#search-button').parent().css('background-color', '#f4f5f8');
            } else {
                $('#search-button').parent().css('background-color', 'inherit');
            }
        },
        editEvent: function editEvent(id) {
            NProgress.start(); // will stop in createedit component 
            this.$root.$emit('edit-event', id); // listen on CreateEdit Component vue js
        },
        setLoader: function setLoader() {
            if (this.loading) NProgress.start();

            this.loading = !this.loading;

            if (!this.loading) NProgress.done();
        },
        onCellClicked: function onCellClicked(data, field, event) {
            this.$refs.vuetable.toggleDetailRow(data.id);
        },
        onChangePage: function onChangePage(page) {
            NProgress.start();
            this.$refs.vuetable.changePage(page);
        },
        onPaginationData: function onPaginationData(paginationData) {
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationInfo.setPaginationData(paginationData);
        },
        showMore: function showMore() {
            var _this = this;

            this.externalParams = {
                'perPage': this.entity.perPage,
                'search': this.search
            };
            Vue.nextTick(function () {
                return _this.$refs.vuetable.refresh();
            });
        },
        handleLoadError: function handleLoadError(response) {
            this.$root.$emit('g-notify', { type: 'danger', message: this.trans.common.unauthorized });
        },


        /**
         * Column Modified
         */
        labelStatus: function labelStatus(value) {
            var label = '<span class="m-badge m-badge--success"></span>';
            if (!value) label = '<span class="m-badge m-badge--danger"></span>';
            return label;
        },

        dateFormat: function dateFormat(value) {
            return value && value != '' ? moment(value).format('DD-MM-YYYY HH:mm') : '<em>-</em>';
        },
        hourFormat: function hourFormat(value) {
            return value && value != '' ? value + ' ' + this.trans.common.hours : '<em>-</em>';
        },
        tutorFormat: function tutorFormat(value) {
            if (value) {
                var full_name = '';
                value.map(function (val, inx) {
                    if (val.tutor != null) {
                        full_name += val.tutor.first_name + ' ' + val.tutor.last_name + ', ';
                    }
                });
                return full_name.slice(0, -2);
            }
            return '<em>-</em>';
        },
        showJoinButton: function showJoinButton(value) {
            var base = this;
            if (value.data && value.data.data.length > 0) {
                var currentTimeHolder = []; // To Everytime update current time_stamp of every recond. This is holder.
                setInterval(function () {
                    $.each(value.data.data, function (idx, val) {
                        if (typeof currentTimeHolder[val.uuid] == 'undefined') {
                            currentTimeHolder[val.uuid] = moment(val._current_time);
                        }

                        var updateHoldedTime = moment(currentTimeHolder[val.uuid]);
                        currentTimeHolder[val.uuid] = updateHoldedTime.add(5, 's');
                        // if(val.uuid == '73e43a3c-194c-11e8-8a5f-0242d0529d53-1593277340661385'){
                        //     console.log(updateHoldedTime.add(5, 's'));
                        // }

                        var endTime = '';
                        var current_time = moment(currentTimeHolder[val.uuid]);
                        var start_time = moment(val._start_time);
                        var duration = moment.duration(current_time.diff(start_time));

                        if (val._end != '' && val._end != null && val._end != undefined) {
                            endTime = moment(val._end);
                        }

                        if (duration.asMinutes() > 0 && duration.asMinutes() <= 10 || endTime != '' && (endTime.isSame(current_time) || endTime.isAfter(current_time))) {
                            $('.g-join-button.' + val.uuid).show();
                        } else {
                            $('.g-join-button.' + val.uuid).hide();
                        }
                    });
                }, 5000);
            }
        },
        openModal: function openModal(data) {
            if (data != null) {
                $('#noteInfoModal').modal('show');
                $('#noteInfoModal').find('.modal-body').html(data);
            }
        }
    },
    watch: {
        propsPanel: function propsPanel(newVal, oldVal) {
            var _this2 = this;

            this.panelStatus(newVal);
            if (newVal) {
                Vue.nextTick(function () {
                    return _this2.$refs.vuetable.refresh();
                });
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/student-classes/Master.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__("./resources/assets/js/components/student-classes/List.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Notification__ = __webpack_require__("./resources/assets/js/components/common/Notification.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_Notification__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['propsTrans', 'propsPermissions', 'propsUrls', 'propsData'],
    components: {
        List: __WEBPACK_IMPORTED_MODULE_0__List___default.a,
        Notification: __WEBPACK_IMPORTED_MODULE_1__common_Notification___default.a
    },
    data: function data() {
        return {
            listPanel: true, // if this is false LIST will not going to display
            createEditPanel: true, // if this is false Form will not going to display
            trans: JSON.parse(this.propsTrans),
            permissions: JSON.parse(this.propsPermissions),
            urls: JSON.parse(this.propsUrls),
            moduleData: JSON.parse(this.propsData),
            formReset: true
        };
    },
    mounted: function mounted() {
        var base = this; // To Avoid this keyword conflict
        base.$root.$on('reset-panels', function (value) {
            base.resetPanelStatus(value);
            if (value != 2) // No react if edit time
                base.$root.$emit('refresh-list-event', 1);
        });
    },

    methods: {
        /**
         * to reset panel and active list panel default
         */
        resetPanelStatus: function resetPanelStatus(value) {
            // this.formReset = true;
            // if(value == 1 || value == 2) {
            //     if(value == 2){ // edit time Do not reset form
            //         this.formReset = false;
            //     }
            //     $('a[href="#add_edit_class"]').trigger('click');
            //     return true;
            // }

            $('a[href="#all_student_classes"]').trigger('click');
            return true;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n[v-cloak][data-v-15965e3b] {\n  display: none;\n}\n.vuetable th.sortable[data-v-15965e3b]:hover {\n  color: #2185d0;\n  cursor: pointer;\n}\n.vuetable-body-wrapper[data-v-15965e3b] {\n  position:relative;\n  overflow-y:auto;\n}\n.vuetable-head-wrapper[data-v-15965e3b] {\n  overflow-x: hidden;\n}\n.vuetable-actions[data-v-15965e3b] {\n  width: 15%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.vuetable-pagination[data-v-15965e3b] {\n  background: #f9fafb !important;\n}\n.vuetable-pagination-info[data-v-15965e3b] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.vuetable-empty-result[data-v-15965e3b] {\n  text-align: center;\n}\n.vuetable-clip-text[data-v-15965e3b] {\n  white-space: pre-wrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: block;\n}\n.vuetable-semantic-no-top[data-v-15965e3b] {\n  border-top:none !important;\n  margin-top:0 !important;\n}\n.vuetable-fixed-layout[data-v-15965e3b] {\n  table-layout: fixed;\n}\n.vuetable-gutter-col[data-v-15965e3b] {\n  padding: 0 !important;\n  border-left: none  !important;\n  border-right: none  !important;\n}\n", "", {"version":3,"sources":["/home/mmameldi/JayAmbe/code/tutor-bank/node_modules/vuetable-2/src/components/node_modules/vuetable-2/src/components/Vuetable.vue"],"names":[],"mappings":";AA8wCA;EACA,cAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;CACA;AACA;EACA,kBAAA;EACA,gBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,+BAAA;CACA;AACA;EACA,iBAAA;EACA,oBAAA;CACA;AACA;EACA,mBAAA;CACA;AACA;EACA,sBAAA;EACA,wBAAA;EACA,iBAAA;EACA,eAAA;CACA;AACA;EACA,2BAAA;EACA,wBAAA;CACA;AACA;EACA,oBAAA;CACA;AACA;EACA,sBAAA;EACA,8BAAA;EACA,+BAAA;CACA","file":"Vuetable.vue","sourcesContent":["<template>\r\n<div v-if=\"isFixedHeader\">\r\n  <div class=\"vuetable-head-wrapper\">\r\n    <table :class=\"['vuetable', css.tableClass, css.tableHeaderClass]\">\r\n      <thead :class=\"[css.gTableTheadClass]\">\r\n        <tr :class=\"[css.gTableTheadTrClass]\">\r\n          <template v-for=\"(field, fieldIndex) in tableFields\">\r\n            <template v-if=\"field.visible\">\r\n              <template v-if=\"isSpecialField(field.name)\">\r\n                <th v-if=\"extractName(field.name) == '__checkbox'\"\r\n                  :key=\"fieldIndex\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-checkbox-'+trackBy, field.titleClass]\"\r\n                >\r\n                  <input type=\"checkbox\" @change=\"toggleAllCheckboxes(field.name, $event)\"\r\n                    :checked=\"checkCheckboxesState(field.name)\">\r\n                </th>\r\n                <th v-if=\"extractName(field.name) == '__component'\"\r\n                  :key=\"fieldIndex\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-component-'+trackBy, field.titleClass, sortClass(field), {'sortable': isSortable(field)}]\"\r\n                  v-html=\"renderTitle(field)\"\r\n                  @click=\"orderBy(field, $event)\"\r\n                ></th>\r\n                <th v-if=\"extractName(field.name) == '__slot'\"\r\n                  :key=\"fieldIndex\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-slot-'+extractArgs(field.name), field.titleClass, sortClass(field), {'sortable': isSortable(field)}]\"\r\n                  v-html=\"renderTitle(field)\"\r\n                  @click=\"orderBy(field, $event)\"\r\n                ></th>\r\n                <th v-if=\"extractName(field.name) == '__sequence'\"\r\n                  :key=\"fieldIndex\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-sequence', field.titleClass || '']\" v-html=\"renderTitle(field)\">\r\n                </th>\r\n                <th v-if=\"notIn(extractName(field.name), ['__sequence', '__checkbox', '__component', '__slot'])\"\r\n                  :key=\"fieldIndex\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-'+field.name, field.titleClass || '']\" v-html=\"renderTitle(field)\">\r\n                </th>\r\n              </template>\r\n              <template v-else>\r\n                <th @click=\"orderBy(field, $event)\"\r\n                  :key=\"fieldIndex\"\r\n                  :id=\"'_' + field.name\"\r\n                  :style=\"{width: field.width}\"\r\n                  :class=\"['vuetable-th-'+field.name, field.titleClass, sortClass(field), {'sortable': isSortable(field)}]\"\r\n                  v-html=\"renderTitle(field)\"\r\n                ></th>\r\n              </template>\r\n            </template>\r\n          </template>\r\n          <th v-if=\"scrollVisible\" :style=\"{width: scrollBarWidth}\" class=\"vuetable-gutter-col\"></th>\r\n        </tr>\r\n      </thead>\r\n    </table>\r\n  </div>\r\n  <div class=\"vuetable-body-wrapper\" :style=\"{height: tableHeight}\">\r\n    <table :class=\"['vuetable', css.tableClass, css.tableBodyClass]\">\r\n      <colgroup>\r\n        <template v-for=\"(field, fieldIndex) in tableFields\">\r\n          <template v-if=\"field.visible\">\r\n            <col\r\n              :key=\"fieldIndex\"\r\n              :id=\"'_col_' + field.name\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-'+field.name, field.titleClass]\"\r\n            />\r\n          </template>\r\n        </template>\r\n      </colgroup>\r\n      <tbody v-cloak :class=\"['vuetable-body', css.gTableBodyClass]\">\r\n        <template v-for=\"(item, itemIndex) in tableData\">\r\n          <tr \r\n            :key=\"itemIndex\"\r\n            :item-index=\"itemIndex\" \r\n            :render=\"onRowChanged(item)\" \r\n            :class=\"onRowClass(item, itemIndex)\"\r\n            @click=\"onRowClicked(item, $event)\" \r\n            @dblclick=\"onRowDoubleClicked(item, $event)\" \r\n          >\r\n            <template v-for=\"(field, fieldIndex) in tableFields\">\r\n              <template v-if=\"field.visible\">\r\n                <template v-if=\"isSpecialField(field.name)\">\r\n                  <td v-if=\"extractName(field.name) == '__sequence'\" \r\n                    :key=\"fieldIndex\"\r\n                    :class=\"['vuetable-sequence', field.dataClass]\"\r\n                    v-html=\"renderSequence(itemIndex)\">\r\n                  </td>\r\n                  <td v-if=\"extractName(field.name) == '__handle'\" \r\n                    :key=\"fieldIndex\"\r\n                    :class=\"['vuetable-handle', field.dataClass]\"\r\n                    v-html=\"renderIconTag(['handle-icon', css.handleIcon])\"\r\n                  ></td>\r\n                  <td v-if=\"extractName(field.name) == '__checkbox'\" \r\n                    :key=\"fieldIndex\"\r\n                    :class=\"['vuetable-checkboxes', field.dataClass]\"\r\n                  >\r\n                    <input type=\"checkbox\"\r\n                      @change=\"toggleCheckbox(item, field.name, $event)\"\r\n                      :checked=\"rowSelected(item, field.name)\">\r\n                  </td>\r\n                  <td v-if=\"extractName(field.name) === '__component'\" \r\n                    :key=\"fieldIndex\"\r\n                    :class=\"['vuetable-component', field.dataClass]\"\r\n                  >\r\n                    <component :is=\"extractArgs(field.name)\"\r\n                      :row-data=\"item\" :row-index=\"itemIndex\" :row-field=\"field.sortField\"\r\n                    ></component>\r\n                  </td>\r\n                  <td v-if=\"extractName(field.name) === '__slot'\" \r\n                    :key=\"fieldIndex\"\r\n                    :class=\"['vuetable-slot', field.dataClass]\"\r\n                  >\r\n                    <slot :name=\"extractArgs(field.name)\"\r\n                      :row-data=\"item\" :row-index=\"itemIndex\" :row-field=\"field.sortField\"\r\n                    ></slot>\r\n                  </td>\r\n                </template>\r\n                <template v-else>\r\n                  <td :class=\"field.dataClass\"\r\n                    :key=\"fieldIndex\"\r\n                    v-html=\"renderNormalField(field, item)\"\r\n                    @click=\"onCellClicked(item, field, $event)\"\r\n                    @dblclick=\"onCellDoubleClicked(item, field, $event)\"\r\n                    @contextmenu=\"onCellRightClicked(item, field, $event)\"\r\n                  ></td>\r\n                </template>\r\n              </template>\r\n            </template>\r\n          </tr>\r\n          <template v-if=\"useDetailRow\">\r\n            <transition :name=\"detailRowTransition\" :key=\"itemIndex\">\r\n              <tr v-if=\"isVisibleDetailRow(item[trackBy])\"\r\n                :class=\"[css.detailRowClass]\"\r\n                @click=\"onDetailRowClick(item, $event)\"\r\n              >\r\n                <td :colspan=\"countVisibleFields\">\r\n                  <component :is=\"detailRowComponent\" :row-data=\"item\" :row-index=\"itemIndex\"></component>\r\n                </td>\r\n              </tr>\r\n            </transition>\r\n          </template>\r\n        </template>\r\n        <template v-if=\"displayEmptyDataRow\">\r\n          <tr>\r\n            <td :colspan=\"countVisibleFields\" class=\"vuetable-empty-result\" v-html=\"noDataTemplate\"></td>\r\n          </tr>\r\n        </template>\r\n        <template v-if=\"lessThanMinRows\">\r\n          <tr v-for=\"i in blankRows\" class=\"blank-row\" :key=\"i\">\r\n            <template v-for=\"(field, fieldIndex) in tableFields\">\r\n              <td v-if=\"field.visible\" :key=\"fieldIndex\">&nbsp;</td>\r\n            </template>\r\n          </tr>\r\n        </template>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<table v-else :class=\"['vuetable', css.tableClass]\"> <!-- no fixed header - regular table -->\r\n  <thead :class=\"[css.gTableTheadClass]\">\r\n    <tr :class=\"[css.gTableTheadTrClass]\">\r\n      <template v-for=\"(field, fieldIndex) in tableFields\">\r\n        <template v-if=\"field.visible\">\r\n          <template v-if=\"isSpecialField(field.name)\">\r\n            <th v-if=\"extractName(field.name) == '__checkbox'\"\r\n              :key=\"fieldIndex\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-checkbox-'+trackBy, field.titleClass]\"\r\n            >\r\n              <input type=\"checkbox\" @change=\"toggleAllCheckboxes(field.name, $event)\"\r\n                :checked=\"checkCheckboxesState(field.name)\">\r\n            </th>\r\n            <th v-if=\"extractName(field.name) == '__component'\"\r\n              :key=\"fieldIndex\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-component-'+trackBy, field.titleClass, sortClass(field), {'sortable': isSortable(field)}]\"\r\n              v-html=\"renderTitle(field)\"\r\n              @click=\"orderBy(field, $event)\"\r\n            ></th>\r\n            <th v-if=\"extractName(field.name) == '__slot'\"\r\n              :key=\"fieldIndex\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-slot-'+extractArgs(field.name), field.titleClass, sortClass(field), {'sortable': isSortable(field)}]\"\r\n              v-html=\"renderTitle(field)\"\r\n              @click=\"orderBy(field, $event)\"\r\n            ></th>\r\n            <th v-if=\"extractName(field.name) == '__sequence'\"\r\n              :key=\"fieldIndex\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-sequence', field.titleClass || '', sortClass(field)]\" v-html=\"renderTitle(field)\"\r\n            ></th>\r\n            <th v-if=\"notIn(extractName(field.name), ['__sequence', '__checkbox', '__component', '__slot'])\"\r\n              :key=\"fieldIndex\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-'+field.name, field.titleClass || '', sortClass(field)]\" v-html=\"renderTitle(field)\"\r\n            ></th>\r\n          </template>\r\n          <template v-else>\r\n            <th @click=\"orderBy(field, $event)\"\r\n              :key=\"fieldIndex\"\r\n              :id=\"'_' + field.name\"\r\n              :style=\"{width: field.width}\"\r\n              :class=\"['vuetable-th-'+field.name, field.titleClass, sortClass(field),  {'sortable': isSortable(field)}]\"\r\n              v-html=\"renderTitle(field)\"\r\n            ></th>\r\n          </template>\r\n        </template>\r\n      </template>\r\n    </tr>\r\n  </thead>\r\n  <tbody v-cloak :class=\"['vuetable-body', css.gTableBodyClass]\">\r\n    <template v-for=\"(item, itemIndex) in tableData\">\r\n      <tr @dblclick=\"onRowDoubleClicked(item, $event)\" \r\n        :key=\"itemIndex\"\r\n        :item-index=\"itemIndex\" \r\n        :render=\"onRowChanged(item)\" \r\n        :class=\"[(itemIndex%2==0 ? 'even' : 'odd'), onRowClass(item, itemIndex)]\"\r\n        @click=\"onRowClicked(item, $event)\" \r\n      >\r\n        <template v-for=\"(field, fieldIndex) in tableFields\">\r\n          <template v-if=\"field.visible\">\r\n            <template v-if=\"isSpecialField(field.name)\">\r\n              <td v-if=\"extractName(field.name) == '__sequence'\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"['vuetable-sequence', field.dataClass]\"\r\n                v-html=\"renderSequence(itemIndex)\"\r\n              ></td>\r\n              <td v-if=\"extractName(field.name) == '__handle'\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"['vuetable-handle', field.dataClass]\"\r\n                v-html=\"renderIconTag(['handle-icon', css.handleIcon])\"\r\n              ></td>\r\n              <td v-if=\"extractName(field.name) == '__checkbox'\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"['vuetable-checkboxes', field.dataClass]\"\r\n              >\r\n                <input type=\"checkbox\"\r\n                  @change=\"toggleCheckbox(item, field.name, $event)\"\r\n                  :checked=\"rowSelected(item, field.name)\">\r\n              </td>\r\n              <td v-if=\"extractName(field.name) === '__component'\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"['vuetable-component', field.dataClass]\"\r\n              >\r\n                <component :is=\"extractArgs(field.name)\"\r\n                  :row-data=\"item\" :row-index=\"itemIndex\" :row-field=\"field.sortField\"\r\n                ></component>\r\n              </td>\r\n              <td v-if=\"extractName(field.name) === '__slot'\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"['vuetable-slot', field.dataClass]\"\r\n              >\r\n                <slot :name=\"extractArgs(field.name)\"\r\n                  :row-data=\"item\" :row-index=\"itemIndex\" :row-field=\"field.sortField\"\r\n                ></slot>\r\n              </td>\r\n            </template>\r\n            <template v-else>\r\n              <td v-if=\"hasCallback(field)\" \r\n                :key=\"fieldIndex\"\r\n                :class=\"field.dataClass\"\r\n                v-html=\"callCallback(field, item)\"\r\n                @click=\"onCellClicked(item, field, $event)\"\r\n                @dblclick=\"onCellDoubleClicked(item, field, $event)\"\r\n                @contextmenu=\"onCellRightClicked(item, field, $event)\"\r\n              ></td>\r\n              <td v-else \r\n                :key=\"fieldIndex\"\r\n                :class=\"field.dataClass\"\r\n                v-html=\"getObjectValue(item, field.name, '')\"\r\n                @click=\"onCellClicked(item, field, $event)\"\r\n                @dblclick=\"onCellDoubleClicked(item, field, $event)\"\r\n                @contextmenu=\"onCellRightClicked(item, field, $event)\"\r\n              ></td>\r\n            </template>\r\n          </template>\r\n        </template>\r\n      </tr>\r\n      <template v-if=\"useDetailRow\">\r\n        <transition :name=\"detailRowTransition\" :key=\"itemIndex\">\r\n          <tr v-if=\"isVisibleDetailRow(item[trackBy])\"\r\n            :class=\"[css.detailRowClass]\"\r\n            @click=\"onDetailRowClick(item, $event)\"\r\n          >\r\n            <td :colspan=\"countVisibleFields\">\r\n              <component :is=\"detailRowComponent\" :row-data=\"item\" :row-index=\"itemIndex\"></component>\r\n            </td>\r\n          </tr>\r\n        </transition>\r\n      </template>\r\n    </template>\r\n    <template v-if=\"displayEmptyDataRow\">\r\n      <tr>\r\n        <td :colspan=\"countVisibleFields\" class=\"vuetable-empty-result\" v-html=\"noDataTemplate\"></td>\r\n      </tr>\r\n    </template>\r\n    <template v-if=\"lessThanMinRows\">\r\n      <tr v-for=\"i in blankRows\" class=\"blank-row\" :key=\"i\">\r\n        <template v-for=\"(field, fieldIndex) in tableFields\">\r\n          <td v-if=\"field.visible\" :key=\"fieldIndex\">&nbsp;</td>\r\n        </template>\r\n      </tr>\r\n    </template>\r\n  </tbody>\r\n</table>\r\n</template>\r\n\r\n<script>\r\nimport axios from 'axios'\r\n\r\nexport default {\r\n  props: {\r\n    fields: {\r\n      type: Array,\r\n      required: true\r\n    },\r\n    loadOnStart: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    apiUrl: {\r\n        type: String,\r\n        default: ''\r\n    },\r\n    httpMethod: {\r\n        type: String,\r\n        default: 'get',\r\n        validator: (value) => {\r\n          return ['get', 'post'].indexOf(value) > -1\r\n        }\r\n    },\r\n    reactiveApiUrl: {\r\n        type: Boolean,\r\n        default: true\r\n    },\r\n    apiMode: {\r\n      type: Boolean,\r\n      default: true\r\n    },\r\n    data: {\r\n      type: [Array, Object],\r\n      default () {\r\n        return null\r\n      }\r\n    },\r\n    dataTotal: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    dataManager: {\r\n      type: Function,\r\n      default () {\r\n        return null\r\n      }\r\n    },\r\n    dataPath: {\r\n        type: String,\r\n        default: 'data'\r\n    },\r\n    paginationPath: {\r\n        type: [String],\r\n        default: 'links.pagination'\r\n    },\r\n    queryParams: {\r\n      type: [Object, Function],\r\n      default () {\r\n        return {\r\n          sort: 'sort',\r\n          page: 'page',\r\n          perPage: 'per_page'\r\n        }\r\n      }\r\n    },\r\n    appendParams: {\r\n      type: Object,\r\n      default () {\r\n        return {}\r\n      }\r\n    },\r\n    httpOptions: {\r\n      type: Object,\r\n      default () {\r\n        return {}\r\n      }\r\n    },\r\n    httpFetch: {\r\n      type: Function,\r\n      default: null\r\n    },\r\n    perPage: {\r\n        type: Number,\r\n        default () {\r\n            return 10\r\n        }\r\n    },\r\n    initialPage: {\r\n      type: Number,\r\n      default () {\r\n        return 1\r\n      }\r\n    },\r\n    sortOrder: {\r\n      type: Array,\r\n      default () {\r\n        return []\r\n      }\r\n    },\r\n    multiSort: {\r\n      type: Boolean,\r\n      default () {\r\n        return false\r\n      }\r\n    },\r\n    tableHeight: {\r\n      type: String,\r\n      default: null\r\n    },\r\n    /*\r\n     * physical key that will trigger multi-sort option\r\n     * possible values: 'alt', 'ctrl', 'meta', 'shift'\r\n     * 'ctrl' might not work as expected on Mac\r\n     */\r\n    multiSortKey: {\r\n      type: String,\r\n      default: 'alt'\r\n    },\r\n    /* deprecated */\r\n    rowClassCallback: {\r\n      type: [String, Function],\r\n      default: ''\r\n    },\r\n    rowClass: {\r\n      type: [String, Function],\r\n      default: ''\r\n    },\r\n    detailRowComponent: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    detailRowTransition: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n    trackBy: {\r\n      type: String,\r\n      default: 'id'\r\n    },\r\n    css: {\r\n      type: Object,\r\n      default () {\r\n        return {\r\n          tableClass: 'ui blue selectable celled stackable attached table',\r\n          loadingClass: 'loading',\r\n          ascendingIcon: 'blue chevron up icon',\r\n          descendingIcon: 'blue chevron down icon',\r\n          ascendingClass: 'sorted-asc',\r\n          descendingClass: 'sorted-desc',\r\n          sortableIcon: '',\r\n          detailRowClass: 'vuetable-detail-row',\r\n          handleIcon: 'grey sidebar icon',\r\n          tableBodyClass: 'vuetable-semantic-no-top vuetable-fixed-layout',\r\n          tableHeaderClass: 'vuetable-fixed-layout'\r\n        }\r\n      }\r\n    },\r\n    minRows: {\r\n      type: Number,\r\n      default: 0\r\n    },\r\n    silent: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    noDataTemplate: {\r\n      type: String,\r\n      default() {\r\n        return 'No Data Available'\r\n      }\r\n    },\r\n    showSortIcons: {\r\n      type: Boolean,\r\n      default: true\r\n    }\r\n  },\r\n  data () {\r\n    return {\r\n      eventPrefix: 'vuetable:',\r\n      tableFields: [],\r\n      tableData: null,\r\n      tablePagination: null,\r\n      currentPage: this.initialPage,\r\n      selectedTo: [],\r\n      visibleDetailRows: [],\r\n      lastScrollPosition: 0,\r\n      scrollBarWidth: '17px', //chrome default\r\n      scrollVisible: false,\r\n    }\r\n  },\r\n  mounted () {\r\n    this.normalizeFields()\r\n    this.normalizeSortOrder()\r\n    if (this.isFixedHeader) {\r\n      this.scrollBarWidth = this.getScrollBarWidth() + 'px';\r\n    }\r\n    this.$nextTick(function() {\r\n      this.fireEvent('initialized', this.tableFields)\r\n    })\r\n\r\n    if (this.loadOnStart) {\r\n      this.loadData()\r\n    }\r\n    if (this.isFixedHeader) {\r\n      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];\r\n      if (elem != null) {\r\n        elem.addEventListener('scroll', this.handleScroll);\r\n      }\r\n    }\r\n  },\r\n  destroyed () {\r\n    let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0];\r\n    if (elem != null) {\r\n      elem.removeEventListener('scroll', this.handleScroll);\r\n    }\r\n  },\r\n  computed: {\r\n    useDetailRow () {\r\n      if (this.tableData && this.tableData[0] && this.detailRowComponent !== '' && typeof this.tableData[0][this.trackBy] === 'undefined') {\r\n        this.warn('You need to define unique row identifier in order for detail-row feature to work. Use `track-by` prop to define one!')\r\n        return false\r\n      }\r\n\r\n      return this.detailRowComponent !== ''\r\n    },\r\n    countVisibleFields () {\r\n      return this.tableFields.filter(function(field) {\r\n        return field.visible\r\n      }).length\r\n    },\r\n    countTableData () {\r\n      if (this.tableData === null) {\r\n        return 0\r\n      }\r\n      return this.tableData.length\r\n    },\r\n    displayEmptyDataRow () {\r\n      return this.countTableData === 0 && this.noDataTemplate.length > 0\r\n    },\r\n    lessThanMinRows () {\r\n      if (this.tableData === null || this.tableData.length === 0) {\r\n        return true\r\n      }\r\n      return this.tableData.length < this.minRows\r\n    },\r\n    blankRows () {\r\n      if (this.tableData === null || this.tableData.length === 0) {\r\n        return this.minRows\r\n      }\r\n      if (this.tableData.length >= this.minRows) {\r\n        return 0\r\n      }\r\n\r\n      return this.minRows - this.tableData.length\r\n    },\r\n    isApiMode () {\r\n      return this.apiMode\r\n    },\r\n    isDataMode () {\r\n      return ! this.apiMode\r\n    },\r\n    isFixedHeader () {\r\n      return this.tableHeight != null\r\n    }\r\n  },\r\n  methods: {\r\n    getScrollBarWidth () {\r\n      const outer = document.createElement('div');\r\n      const inner = document.createElement('div');\r\n\r\n      outer.style.visibility = 'hidden';\r\n      outer.style.width = '100px';\r\n\r\n      inner.style.width = '100%';\r\n\r\n\r\n      outer.appendChild(inner);\r\n      document.body.appendChild(outer);\r\n\r\n\r\n      const widthWithoutScrollbar = outer.offsetWidth;\r\n\r\n      outer.style.overflow = 'scroll';\r\n\r\n      const widthWithScrollbar = inner.offsetWidth;\r\n\r\n\r\n      document.body.removeChild(outer);\r\n\r\n\r\n      return (widthWithoutScrollbar - widthWithScrollbar);\r\n    },\r\n    handleScroll (e) { //make sure that the header and the body are aligned when scrolling horizontally on a table that is wider than the viewport\r\n      let horizontal = e.currentTarget.scrollLeft;\r\n      if (horizontal != this.lastScrollPosition) { //don't modify header scroll if we are scrolling vertically\r\n        let header = this.$el.getElementsByClassName('vuetable-head-wrapper')[0]\r\n        if (header != null) {\r\n          header.scrollLeft = horizontal;\r\n        }\r\n        this.lastScrollPosition = horizontal;\r\n      }\r\n\r\n    },\r\n    normalizeFields () {\r\n      if (typeof(this.fields) === 'undefined') {\r\n        this.warn('You need to provide \"fields\" prop.')\r\n        return\r\n      }\r\n\r\n      this.tableFields = []\r\n      let self = this\r\n      let obj\r\n      this.fields.forEach(function(field, i) {\r\n        if (typeof (field) === 'string') {\r\n          obj = {\r\n            name: field,\r\n            title: self.setTitle(field),\r\n            titleClass: '',\r\n            dataClass: '',\r\n            callback: null,\r\n            visible: true,\r\n          }\r\n        } else {\r\n          obj = {\r\n            name: field.name,\r\n            width: field.width,\r\n            title: (field.title === undefined) ? self.setTitle(field.name) : field.title,\r\n            sortField: field.sortField,\r\n            titleClass: (field.titleClass === undefined) ? '' : field.titleClass,\r\n            dataClass: (field.dataClass === undefined) ? '' : field.dataClass,\r\n            callback: (field.callback === undefined) ? '' : field.callback,\r\n            visible: (field.visible === undefined) ? true : field.visible,\r\n          }\r\n        }\r\n        self.tableFields.push(obj)\r\n      })\r\n    },\r\n    setData (data) {\r\n      // this.apiMode = false\r\n      if (Array.isArray(data)) {\r\n        this.tableData = data\r\n        return\r\n      }\r\n\r\n      this.fireEvent('loading')\r\n\r\n      this.tableData = this.getObjectValue(data, this.dataPath, null)\r\n      this.tablePagination = this.getObjectValue(data, this.paginationPath, null)\r\n\r\n      this.$nextTick(function() {\r\n        this.fireEvent('pagination-data', this.tablePagination)\r\n        this.fireEvent('loaded')\r\n      })\r\n    },\r\n    setTitle (str) {\r\n      if (this.isSpecialField(str)) {\r\n        return ''\r\n      }\r\n\r\n      return this.titleCase(str)\r\n    },\r\n    getTitle (field) {\r\n      if (typeof(field.title) === 'function') return field.title()\r\n\r\n      return typeof(field.title) === 'undefined'\r\n        ? field.name.replace('.', ' ')\r\n        : field.title\r\n    },\r\n    renderTitle (field) {\r\n      let title = this.getTitle(field)\r\n\r\n      if (title.length > 0 && this.isInCurrentSortGroup(field) || this.hasSortableIcon(field)) {\r\n        let style = `opacity:${this.sortIconOpacity(field)};position:relative;float:right`\r\n        let iconTag = this.showSortIcons ? this.renderIconTag(['sort-icon', this.sortIcon(field)], `style=\"${style}\"`) : ''\r\n        return title + ' ' + iconTag\r\n      }\r\n\r\n      return title\r\n    },\r\n    renderSequence (index) {\r\n      return this.tablePagination\r\n        ? this.tablePagination.from + index\r\n        : index\r\n    },\r\n    renderNormalField (field, item) {\r\n      return this.hasCallback(field)\r\n        ? this.callCallback(field, item)\r\n        : this.getObjectValue(item, field.name, '')\r\n    },\r\n    isSpecialField (fieldName) {\r\n      return fieldName.slice(0, 2) === '__'\r\n    },\r\n    titleCase (str) {\r\n      return str.replace(/\\w+/g, function(txt) {\r\n        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()\r\n      })\r\n    },\r\n    camelCase (str, delimiter = '_') {\r\n      let self = this\r\n      return str.split(delimiter).map(function(item) {\r\n        return self.titleCase(item)\r\n      }).join('')\r\n    },\r\n    notIn (str, arr) {\r\n      return arr.indexOf(str) === -1\r\n    },\r\n    loadData (success = this.loadSuccess, failed = this.loadFailed) {\r\n      if (this.isDataMode) {\r\n        this.callDataManager()\r\n        return\r\n      }\r\n\r\n      this.fireEvent('loading')\r\n\r\n      this.httpOptions['params'] = this.getAppendParams( this.getAllQueryParams() )\r\n\r\n      return this.fetch(this.apiUrl, this.httpOptions).then(\r\n          success,\r\n          failed\r\n      ).catch(() => failed())\r\n    },\r\n    fetch (apiUrl, httpOptions) {\r\n      return this.httpFetch\r\n          ? this.httpFetch(apiUrl, httpOptions)\r\n          : axios[this.httpMethod](apiUrl, httpOptions)\r\n    },\r\n    loadSuccess (response) {\r\n      this.fireEvent('load-success', response)\r\n\r\n      let body = this.transform(response.data)\r\n\r\n      this.tableData = this.getObjectValue(body, this.dataPath, null)\r\n      this.tablePagination = this.getObjectValue(body, this.paginationPath, null)\r\n\r\n      if (this.tablePagination === null) {\r\n        this.warn('vuetable: pagination-path \"' + this.paginationPath + '\" not found. '\r\n          + 'It looks like the data returned from the sever does not have pagination information '\r\n          + \"or you may have set it incorrectly.\\n\"\r\n          + 'You can explicitly suppress this warning by setting pagination-path=\"\".'\r\n        )\r\n      }\r\n\r\n      this.$nextTick(function() {\r\n        this.fixHeader()\r\n        this.fireEvent('pagination-data', this.tablePagination)\r\n        this.fireEvent('loaded')\r\n      })\r\n    },\r\n    fixHeader() {\r\n      if (!this.isFixedHeader) {\r\n        return;\r\n      }\r\n\r\n      let elem = this.$el.getElementsByClassName('vuetable-body-wrapper')[0]\r\n      if (elem != null) {\r\n        if (elem.scrollHeight > elem.clientHeight) {\r\n          this.scrollVisible = true;\r\n        }\r\n        else {\r\n          this.scrollVisible = false;\r\n        }\r\n      }\r\n    },\r\n    loadFailed (response) {\r\n      console.error('load-error', response)\r\n      this.fireEvent('load-error', response)\r\n      this.fireEvent('loaded')\r\n    },\r\n    transform (data) {\r\n      let func = 'transform'\r\n\r\n      if (this.parentFunctionExists(func)) {\r\n          return this.$parent[func].call(this.$parent, data)\r\n      }\r\n\r\n      return data\r\n    },\r\n    parentFunctionExists (func) {\r\n      return (func !== '' && typeof this.$parent[func] === 'function')\r\n    },\r\n    callParentFunction (func, args, defaultValue = null) {\r\n      if (this.parentFunctionExists(func)) {\r\n        return this.$parent[func].call(this.$parent, args)\r\n      }\r\n\r\n      return defaultValue\r\n    },\r\n    fireEvent (eventName, args) {\r\n      this.$emit(this.eventPrefix + eventName, args)\r\n    },\r\n    warn (msg) {\r\n      if (!this.silent) {\r\n        console.warn(msg)\r\n      }\r\n    },\r\n    getAllQueryParams () {\r\n      let params = {}\r\n\r\n      if (typeof(this.queryParams) === 'function') {\r\n        params = this.queryParams(this.sortOrder, this.currentPage, this.perPage)\r\n        return typeof(params) !== 'object' ? {} : params\r\n      }\r\n\r\n      params[this.queryParams.sort] = this.getSortParam()\r\n      params[this.queryParams.page] = this.currentPage\r\n      params[this.queryParams.perPage] = this.perPage\r\n\r\n      return params\r\n    },\r\n    getSortParam () {\r\n      if (!this.sortOrder || this.sortOrder.field == '') {\r\n        return ''\r\n      }\r\n\r\n      if (typeof this.$parent['getSortParam'] === 'function') {\r\n        return this.$parent['getSortParam'].call(this.$parent, this.sortOrder)\r\n      }\r\n\r\n      return this.getDefaultSortParam()\r\n    },\r\n    getDefaultSortParam () {\r\n      let result = '';\r\n\r\n      for (let i = 0; i < this.sortOrder.length; i++) {\r\n        let fieldName = (typeof this.sortOrder[i].sortField === 'undefined')\r\n          ? this.sortOrder[i].field\r\n          : this.sortOrder[i].sortField;\r\n\r\n        result += fieldName + '|' + this.sortOrder[i].direction + ((i+1) < this.sortOrder.length ? ',' : '');\r\n      }\r\n      console.log('getDefaultSortParam: ', result)\r\n      return result;\r\n    },\r\n    getAppendParams (params) {\r\n      for (let x in this.appendParams) {\r\n        params[x] = this.appendParams[x]\r\n      }\r\n\r\n      return params\r\n    },\r\n    extractName (string) {\r\n      return string.split(':')[0].trim()\r\n    },\r\n    extractArgs (string) {\r\n      return string.split(':')[1]\r\n    },\r\n    isSortable (field) {\r\n      return !(typeof field.sortField === 'undefined')\r\n    },\r\n    isInCurrentSortGroup (field) {\r\n      return this.currentSortOrderPosition(field) !== false;\r\n    },\r\n    hasSortableIcon (field) {\r\n      return this.isSortable(field) && this.css.sortableIcon != ''\r\n    },\r\n    currentSortOrderPosition (field) {\r\n      if ( ! this.isSortable(field)) {\r\n        return false\r\n      }\r\n\r\n      for (let i = 0; i < this.sortOrder.length; i++) {\r\n        if (this.fieldIsInSortOrderPosition(field, i)) {\r\n          return i;\r\n        }\r\n      }\r\n\r\n      return false;\r\n    },\r\n    fieldIsInSortOrderPosition (field, i) {\r\n      return this.sortOrder[i].field === field.name && this.sortOrder[i].sortField === field.sortField\r\n    },\r\n    orderBy (field, event) {\r\n      if ( ! this.isSortable(field) ) return\r\n\r\n      let key = this.multiSortKey.toLowerCase() + 'Key'\r\n\r\n      if (this.multiSort && event[key]) { //adding column to multisort\r\n        this.multiColumnSort(field)\r\n      } else {\r\n        //no multisort, or resetting sort\r\n        this.singleColumnSort(field)\r\n      }\r\n\r\n      this.currentPage = 1    // reset page index\r\n      if (this.apiMode || this.dataManager) {\r\n        this.loadData()\r\n      }\r\n    },\r\n    multiColumnSort (field) {\r\n      let i = this.currentSortOrderPosition(field);\r\n\r\n      if(i === false) { //this field is not in the sort array yet\r\n        this.sortOrder.push({\r\n          field: field.name,\r\n          sortField: field.sortField,\r\n          direction: 'asc'\r\n        });\r\n      } else { //this field is in the sort array, now we change its state\r\n        if(this.sortOrder[i].direction === 'asc') {\r\n          // switch direction\r\n          this.sortOrder[i].direction = 'desc'\r\n        } else {\r\n          //remove sort condition\r\n          this.sortOrder.splice(i, 1);\r\n        }\r\n      }\r\n    },\r\n    singleColumnSort (field) {\r\n      if (this.sortOrder.length === 0) {\r\n        this.clearSortOrder()\r\n      }\r\n\r\n      this.sortOrder.splice(1); //removes additional columns\r\n\r\n      if (this.fieldIsInSortOrderPosition(field, 0)) {\r\n        // change sort direction\r\n        this.sortOrder[0].direction = this.sortOrder[0].direction === 'asc' ? 'desc' : 'asc'\r\n      } else {\r\n        // reset sort direction\r\n        this.sortOrder[0].direction = 'asc'\r\n      }\r\n      this.sortOrder[0].field = field.name\r\n      this.sortOrder[0].sortField = field.sortField\r\n    },\r\n    clearSortOrder () {\r\n      this.sortOrder.push({\r\n        field: '',\r\n        sortField: '',\r\n        direction: 'asc'\r\n      });\r\n    },\r\n    sortClass (field) {\r\n      let cls = ''\r\n      let i = this.currentSortOrderPosition(field)\r\n\r\n      if (i !== false) {\r\n        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingClass : this.css.descendingClass\r\n      }\r\n\r\n      return cls\r\n    },\r\n    sortIcon (field) {\r\n      let cls = this.css.sortableIcon\r\n      let i = this.currentSortOrderPosition(field)\r\n\r\n      if (i !== false) {\r\n        cls = (this.sortOrder[i].direction == 'asc') ? this.css.ascendingIcon : this.css.descendingIcon\r\n      }\r\n\r\n      return cls;\r\n    },\r\n    sortIconOpacity (field) {\r\n      /*\r\n       * fields with stronger precedence have darker color\r\n       *\r\n       * if there are few fields, we go down by 0.3\r\n       * ex. 2 fields are selected: 1.0, 0.7\r\n       *\r\n       * if there are more we go down evenly on the given spectrum\r\n       * ex. 6 fields are selected: 1.0, 0.86, 0.72, 0.58, 0.44, 0.3\r\n       */\r\n      let max = 1.0,\r\n          min = 0.3,\r\n          step = 0.3\r\n\r\n      let count = this.sortOrder.length;\r\n      let current = this.currentSortOrderPosition(field)\r\n\r\n\r\n      if(max - count * step < min) {\r\n        step = (max - min) / (count-1)\r\n      }\r\n\r\n      let opacity = max - current * step\r\n\r\n      return opacity\r\n    },\r\n    hasCallback (item) {\r\n      return item.callback ? true : false\r\n    },\r\n    callCallback (field, item) {\r\n      if ( ! this.hasCallback(field)) return\r\n\r\n      if(typeof(field.callback) == 'function') {\r\n       return field.callback(this.getObjectValue(item, field.name))\r\n      }\r\n\r\n      let args = field.callback.split('|')\r\n      let func = args.shift()\r\n\r\n      if (typeof this.$parent[func] === 'function') {\r\n        let value = this.getObjectValue(item, field.name)\r\n\r\n        return (args.length > 0)\r\n          ? this.$parent[func].apply(this.$parent, [value].concat(args))\r\n          : this.$parent[func].call(this.$parent, value)\r\n      }\r\n\r\n      return null\r\n    },\r\n    getObjectValue (object, path, defaultValue) {\r\n      defaultValue = (typeof defaultValue === 'undefined') ? null : defaultValue\r\n\r\n      let obj = object\r\n      if (path.trim() != '') {\r\n        let keys = path.split('.')\r\n        keys.forEach(function(key) {\r\n          if (obj !== null && typeof obj[key] !== 'undefined' && obj[key] !== null) {\r\n            obj = obj[key]\r\n          } else {\r\n            obj = defaultValue\r\n            return\r\n          }\r\n        })\r\n      }\r\n      return obj\r\n    },\r\n    toggleCheckbox (dataItem, fieldName, event) {\r\n      let isChecked = event.target.checked\r\n      let idColumn = this.trackBy\r\n\r\n      if (dataItem[idColumn] === undefined) {\r\n        this.warn('__checkbox field: The \"'+this.trackBy+'\" field does not exist! Make sure the field you specify in \"track-by\" prop does exist.')\r\n        return\r\n      }\r\n\r\n      let key = dataItem[idColumn]\r\n      if (isChecked) {\r\n        this.selectId(key)\r\n      } else {\r\n        this.unselectId(key)\r\n      }\r\n      this.$emit('vuetable:checkbox-toggled', isChecked, dataItem)\r\n    },\r\n    selectId (key) {\r\n      if ( ! this.isSelectedRow(key)) {\r\n        this.selectedTo.push(key)\r\n      }\r\n    },\r\n    unselectId (key) {\r\n      this.selectedTo = this.selectedTo.filter(function(item) {\r\n        return item !== key\r\n      })\r\n    },\r\n    isSelectedRow (key) {\r\n      return this.selectedTo.indexOf(key) >= 0\r\n    },\r\n    rowSelected (dataItem, fieldName){\r\n      let idColumn = this.trackBy\r\n      let key = dataItem[idColumn]\r\n\r\n      return this.isSelectedRow(key)\r\n    },\r\n    checkCheckboxesState (fieldName) {\r\n      if (! this.tableData) return\r\n\r\n      let self = this\r\n      let idColumn = this.trackBy\r\n      let selector = 'th.vuetable-th-checkbox-' + idColumn + ' input[type=checkbox]'\r\n      let els = document.querySelectorAll(selector)\r\n\r\n      //fixed:document.querySelectorAll return the typeof nodeList not array\r\n      if (els.forEach===undefined)\r\n        els.forEach=function(cb){\r\n          [].forEach.call(els, cb);\r\n        }\r\n\r\n      // count how many checkbox row in the current page has been checked\r\n      let selected = this.tableData.filter(function(item) {\r\n        return self.selectedTo.indexOf(item[idColumn]) >= 0\r\n      })\r\n\r\n      // count == 0, clear the checkbox\r\n      if (selected.length <= 0) {\r\n        els.forEach(function(el) {\r\n          el.indeterminate = false\r\n        })\r\n        return false\r\n      }\r\n      // count > 0 and count < perPage, set checkbox state to 'indeterminate'\r\n      else if (selected.length < this.perPage) {\r\n        els.forEach(function(el) {\r\n          el.indeterminate = true\r\n        })\r\n        return true\r\n      }\r\n      // count == perPage, set checkbox state to 'checked'\r\n      else {\r\n        els.forEach(function(el) {\r\n          el.indeterminate = false\r\n        })\r\n        return true\r\n      }\r\n    },\r\n    toggleAllCheckboxes (fieldName, event) {\r\n      let self = this\r\n      let isChecked = event.target.checked\r\n      let idColumn = this.trackBy\r\n\r\n      if (isChecked) {\r\n        this.tableData.forEach(function(dataItem) {\r\n          self.selectId(dataItem[idColumn])\r\n        })\r\n      } else {\r\n        this.tableData.forEach(function(dataItem) {\r\n          self.unselectId(dataItem[idColumn])\r\n        })\r\n      }\r\n      this.$emit('vuetable:checkbox-toggled-all', isChecked)\r\n    },\r\n    gotoPreviousPage () {\r\n      if (this.currentPage > 1) {\r\n        this.currentPage--\r\n        this.loadData()\r\n      }\r\n    },\r\n    gotoNextPage () {\r\n      if (this.currentPage < this.tablePagination.last_page) {\r\n        this.currentPage++\r\n        this.loadData()\r\n      }\r\n    },\r\n    gotoPage (page) {\r\n      if (page != this.currentPage && (page > 0 && page <= this.tablePagination.last_page)) {\r\n        this.currentPage = page\r\n        this.loadData()\r\n      }\r\n    },\r\n    isVisibleDetailRow (rowId) {\r\n      return this.visibleDetailRows.indexOf( rowId ) >= 0\r\n    },\r\n    showDetailRow (rowId) {\r\n      if (!this.isVisibleDetailRow(rowId)) {\r\n        this.visibleDetailRows.push(rowId)\r\n      }\r\n    },\r\n    hideDetailRow (rowId) {\r\n      if (this.isVisibleDetailRow(rowId)) {\r\n        this.visibleDetailRows.splice(\r\n          this.visibleDetailRows.indexOf(rowId),\r\n          1\r\n        )\r\n      }\r\n    },\r\n    toggleDetailRow (rowId) {\r\n      if (this.isVisibleDetailRow(rowId)) {\r\n        this.hideDetailRow(rowId)\r\n      } else {\r\n        this.showDetailRow(rowId)\r\n      }\r\n    },\r\n    showField (index) {\r\n      if (index < 0 || index > this.tableFields.length) return\r\n\r\n      this.tableFields[index].visible = true\r\n    },\r\n    hideField (index) {\r\n      if (index < 0 || index > this.tableFields.length) return\r\n\r\n      this.tableFields[index].visible = false\r\n    },\r\n    toggleField (index) {\r\n      if (index < 0 || index > this.tableFields.length) return\r\n\r\n      this.tableFields[index].visible = ! this.tableFields[index].visible\r\n    },\r\n    renderIconTag (classes, options = '') {\r\n      return typeof(this.css.renderIcon) === 'undefined'\r\n        ? `<i class=\"${classes.join(' ')}\" ${options}></i>`\r\n        : this.css.renderIcon(classes, options)\r\n    },\r\n    makePagination (total = null, perPage = null, currentPage = null) {\r\n      let pagination = {}\r\n      total = total === null ? this.dataTotal : total\r\n      perPage = perPage === null ? this.perPage : perPage\r\n      currentPage = currentPage === null ? this.currentPage : currentPage\r\n\r\n      return {\r\n        'total': total,\r\n        'per_page': perPage,\r\n        'current_page': currentPage,\r\n        'last_page': Math.ceil(total / perPage) || 0,\r\n        'next_page_url': '',\r\n        'prev_page_url': '',\r\n        'from': (currentPage -1) * perPage +1,\r\n        'to': Math.min(currentPage * perPage, total)\r\n      }\r\n    },\r\n    normalizeSortOrder () {\r\n      this.sortOrder.forEach(function(item) {\r\n        item.sortField = item.sortField || item.field\r\n      })\r\n    },\r\n    callDataManager () {\r\n      if (this.dataManager === null && this.data === null) return\r\n\r\n      if (Array.isArray(this.data)) {\r\n        console.log('data mode: array')\r\n        this.setData(this.data)\r\n      } else {\r\n        this.normalizeSortOrder()\r\n        this.setData(this.dataManager(this.sortOrder, this.makePagination()))\r\n      }\r\n    },\r\n    onRowClass (dataItem, index) {\r\n      if (this.rowClassCallback !== '') {\r\n        this.warn('\"row-class-callback\" prop is deprecated, please use \"row-class\" prop instead.')\r\n        return\r\n      }\r\n\r\n      if (typeof(this.rowClass) === 'function') {\r\n        return this.rowClass(dataItem, index)\r\n      }\r\n\r\n      return this.rowClass\r\n    },\r\n    onRowChanged (dataItem) {\r\n      this.fireEvent('row-changed', dataItem)\r\n      return true\r\n    },\r\n    onRowClicked (dataItem, event) {\r\n      this.$emit(this.eventPrefix + 'row-clicked', dataItem, event)\r\n      return true\r\n    },\r\n    onRowDoubleClicked (dataItem, event) {\r\n      this.$emit(this.eventPrefix + 'row-dblclicked', dataItem, event)\r\n    },\r\n    onDetailRowClick (dataItem, event) {\r\n      this.$emit(this.eventPrefix + 'detail-row-clicked', dataItem, event)\r\n    },\r\n    onCellClicked (dataItem, field, event) {\r\n      this.$emit(this.eventPrefix + 'cell-clicked', dataItem, field, event)\r\n    },\r\n    onCellDoubleClicked (dataItem, field, event) {\r\n      this.$emit(this.eventPrefix + 'cell-dblclicked', dataItem, field, event)\r\n    },\r\n    onCellRightClicked (dataItem, field, event) {\r\n      this.$emit(this.eventPrefix + 'cell-rightclicked', dataItem, field, event)\r\n    },\r\n    /*\r\n     * API for externals\r\n     */\r\n    changePage (page) {\r\n      if (page === 'prev') {\r\n        this.gotoPreviousPage()\r\n      } else if (page === 'next') {\r\n        this.gotoNextPage()\r\n      } else {\r\n        this.gotoPage(page)\r\n      }\r\n    },\r\n    reload () {\r\n      return this.loadData()\r\n    },\r\n    refresh () {\r\n      this.currentPage = 1\r\n      return this.loadData()\r\n    },\r\n    resetData () {\r\n      this.tableData = null\r\n      this.tablePagination = null\r\n      this.fireEvent('data-reset')\r\n    }\r\n  }, // end: methods\r\n  watch: {\r\n    'multiSort' (newVal, oldVal) {\r\n      if (newVal === false && this.sortOrder.length > 1) {\r\n        this.sortOrder.splice(1);\r\n        this.loadData();\r\n      }\r\n    },\r\n    'apiUrl'  (newVal, oldVal) {\r\n      if(this.reactiveApiUrl && newVal !== oldVal)\r\n        this.refresh()\r\n    },\r\n    'data' (newVal, oldVal) {\r\n      this.setData(newVal)\r\n    }\r\n  },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n  [v-cloak] {\r\n    display: none;\r\n  }\r\n  .vuetable th.sortable:hover {\r\n    color: #2185d0;\r\n    cursor: pointer;\r\n  }\r\n  .vuetable-body-wrapper {\r\n    position:relative;\r\n    overflow-y:auto;\r\n  }\r\n  .vuetable-head-wrapper {\r\n    overflow-x: hidden;\r\n  }\r\n  .vuetable-actions {\r\n    width: 15%;\r\n    padding: 12px 0px;\r\n    text-align: center;\r\n  }\r\n  .vuetable-pagination {\r\n    background: #f9fafb !important;\r\n  }\r\n  .vuetable-pagination-info {\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n  }\r\n  .vuetable-empty-result {\r\n    text-align: center;\r\n  }\r\n  .vuetable-clip-text {\r\n    white-space: pre-wrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    display: block;\r\n  }\r\n  .vuetable-semantic-no-top {\r\n    border-top:none !important;\r\n    margin-top:0 !important;\r\n  }\r\n  .vuetable-fixed-layout {\r\n    table-layout: fixed;\r\n  }\r\n  .vuetable-gutter-col {\r\n    padding: 0 !important;\r\n    border-left: none  !important;\r\n    border-right: none  !important;\r\n  }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15965e3b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isFixedHeader
    ? _c("div", [
        _c("div", { staticClass: "vuetable-head-wrapper" }, [
          _c(
            "table",
            {
              class: ["vuetable", _vm.css.tableClass, _vm.css.tableHeaderClass]
            },
            [
              _c("thead", { class: [_vm.css.gTableTheadClass] }, [
                _c(
                  "tr",
                  { class: [_vm.css.gTableTheadTrClass] },
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "th",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-th-checkbox-" +
                                                _vm.trackBy,
                                              field.titleClass
                                            ],
                                            style: { width: field.width }
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.checkCheckboxesState(
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleAllCheckboxes(
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__component"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-component-" +
                                              _vm.trackBy,
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__slot"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-slot-" +
                                              _vm.extractArgs(field.name),
                                            field.titleClass,
                                            _vm.sortClass(field),
                                            { sortable: _vm.isSortable(field) }
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.orderBy(field, $event)
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-sequence",
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.notIn(_vm.extractName(field.name), [
                                      "__sequence",
                                      "__checkbox",
                                      "__component",
                                      "__slot"
                                    ])
                                      ? _c("th", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-th-" + field.name,
                                            field.titleClass || ""
                                          ],
                                          style: { width: field.width },
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderTitle(field)
                                            )
                                          }
                                        })
                                      : _vm._e()
                                  ]
                                : [
                                    _c("th", {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-" + field.name,
                                        field.titleClass,
                                        _vm.sortClass(field),
                                        { sortable: _vm.isSortable(field) }
                                      ],
                                      style: { width: field.width },
                                      attrs: { id: "_" + field.name },
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.renderTitle(field)
                                        )
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.orderBy(field, $event)
                                        }
                                      }
                                    })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.scrollVisible
                      ? _c("th", {
                          staticClass: "vuetable-gutter-col",
                          style: { width: _vm.scrollBarWidth }
                        })
                      : _vm._e()
                  ],
                  2
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "vuetable-body-wrapper",
            style: { height: _vm.tableHeight }
          },
          [
            _c(
              "table",
              {
                class: ["vuetable", _vm.css.tableClass, _vm.css.tableBodyClass]
              },
              [
                _c(
                  "colgroup",
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _c("col", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass
                                ],
                                style: { width: field.width },
                                attrs: { id: "_col_" + field.name }
                              })
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "tbody",
                  { class: ["vuetable-body", _vm.css.gTableBodyClass] },
                  [
                    _vm._l(_vm.tableData, function(item, itemIndex) {
                      return [
                        _c(
                          "tr",
                          {
                            key: itemIndex,
                            class: _vm.onRowClass(item, itemIndex),
                            attrs: {
                              "item-index": itemIndex,
                              render: _vm.onRowChanged(item)
                            },
                            on: {
                              click: function($event) {
                                _vm.onRowClicked(item, $event)
                              },
                              dblclick: function($event) {
                                _vm.onRowDoubleClicked(item, $event)
                              }
                            }
                          },
                          [
                            _vm._l(_vm.tableFields, function(
                              field,
                              fieldIndex
                            ) {
                              return [
                                field.visible
                                  ? [
                                      _vm.isSpecialField(field.name)
                                        ? [
                                            _vm.extractName(field.name) ==
                                            "__sequence"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-sequence",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderSequence(
                                                        itemIndex
                                                      )
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__handle"
                                              ? _c("td", {
                                                  key: fieldIndex,
                                                  class: [
                                                    "vuetable-handle",
                                                    field.dataClass
                                                  ],
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      _vm.renderIconTag([
                                                        "handle-icon",
                                                        _vm.css.handleIcon
                                                      ])
                                                    )
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ==
                                            "__checkbox"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-checkboxes",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c("input", {
                                                      attrs: {
                                                        type: "checkbox"
                                                      },
                                                      domProps: {
                                                        checked: _vm.rowSelected(
                                                          item,
                                                          field.name
                                                        )
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          _vm.toggleCheckbox(
                                                            item,
                                                            field.name,
                                                            $event
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__component"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-component",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _c(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      {
                                                        tag: "component",
                                                        attrs: {
                                                          "row-data": item,
                                                          "row-index": itemIndex,
                                                          "row-field":
                                                            field.sortField
                                                        }
                                                      }
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.extractName(field.name) ===
                                            "__slot"
                                              ? _c(
                                                  "td",
                                                  {
                                                    key: fieldIndex,
                                                    class: [
                                                      "vuetable-slot",
                                                      field.dataClass
                                                    ]
                                                  },
                                                  [
                                                    _vm._t(
                                                      _vm.extractArgs(
                                                        field.name
                                                      ),
                                                      null,
                                                      {
                                                        rowData: item,
                                                        rowIndex: itemIndex,
                                                        rowField:
                                                          field.sortField
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              : _vm._e()
                                          ]
                                        : [
                                            _c("td", {
                                              key: fieldIndex,
                                              class: field.dataClass,
                                              domProps: {
                                                innerHTML: _vm._s(
                                                  _vm.renderNormalField(
                                                    field,
                                                    item
                                                  )
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.onCellClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                dblclick: function($event) {
                                                  _vm.onCellDoubleClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                },
                                                contextmenu: function($event) {
                                                  _vm.onCellRightClicked(
                                                    item,
                                                    field,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                    ]
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _vm.useDetailRow
                          ? [
                              _c(
                                "transition",
                                {
                                  key: itemIndex,
                                  attrs: { name: _vm.detailRowTransition }
                                },
                                [
                                  _vm.isVisibleDetailRow(item[_vm.trackBy])
                                    ? _c(
                                        "tr",
                                        {
                                          class: [_vm.css.detailRowClass],
                                          on: {
                                            click: function($event) {
                                              _vm.onDetailRowClick(item, $event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "td",
                                            {
                                              attrs: {
                                                colspan: _vm.countVisibleFields
                                              }
                                            },
                                            [
                                              _c(_vm.detailRowComponent, {
                                                tag: "component",
                                                attrs: {
                                                  "row-data": item,
                                                  "row-index": itemIndex
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          : _vm._e()
                      ]
                    }),
                    _vm._v(" "),
                    _vm.displayEmptyDataRow
                      ? [
                          _c("tr", [
                            _c("td", {
                              staticClass: "vuetable-empty-result",
                              attrs: { colspan: _vm.countVisibleFields },
                              domProps: {
                                innerHTML: _vm._s(_vm.noDataTemplate)
                              }
                            })
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.lessThanMinRows
                      ? _vm._l(_vm.blankRows, function(i) {
                          return _c(
                            "tr",
                            { key: i, staticClass: "blank-row" },
                            [
                              _vm._l(_vm.tableFields, function(
                                field,
                                fieldIndex
                              ) {
                                return [
                                  field.visible
                                    ? _c("td", { key: fieldIndex }, [
                                        _vm._v(" ")
                                      ])
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        })
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ]
        )
      ])
    : _c("table", { class: ["vuetable", _vm.css.tableClass] }, [
        _c("thead", { class: [_vm.css.gTableTheadClass] }, [
          _c(
            "tr",
            { class: [_vm.css.gTableTheadTrClass] },
            [
              _vm._l(_vm.tableFields, function(field, fieldIndex) {
                return [
                  field.visible
                    ? [
                        _vm.isSpecialField(field.name)
                          ? [
                              _vm.extractName(field.name) == "__checkbox"
                                ? _c(
                                    "th",
                                    {
                                      key: fieldIndex,
                                      class: [
                                        "vuetable-th-checkbox-" + _vm.trackBy,
                                        field.titleClass
                                      ],
                                      style: { width: field.width }
                                    },
                                    [
                                      _c("input", {
                                        attrs: { type: "checkbox" },
                                        domProps: {
                                          checked: _vm.checkCheckboxesState(
                                            field.name
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            _vm.toggleAllCheckboxes(
                                              field.name,
                                              $event
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__component"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-component-" + _vm.trackBy,
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__slot"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-slot-" +
                                        _vm.extractArgs(field.name),
                                      field.titleClass,
                                      _vm.sortClass(field),
                                      { sortable: _vm.isSortable(field) }
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.orderBy(field, $event)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.extractName(field.name) == "__sequence"
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-sequence",
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.notIn(_vm.extractName(field.name), [
                                "__sequence",
                                "__checkbox",
                                "__component",
                                "__slot"
                              ])
                                ? _c("th", {
                                    key: fieldIndex,
                                    class: [
                                      "vuetable-th-" + field.name,
                                      field.titleClass || "",
                                      _vm.sortClass(field)
                                    ],
                                    style: { width: field.width },
                                    domProps: {
                                      innerHTML: _vm._s(_vm.renderTitle(field))
                                    }
                                  })
                                : _vm._e()
                            ]
                          : [
                              _c("th", {
                                key: fieldIndex,
                                class: [
                                  "vuetable-th-" + field.name,
                                  field.titleClass,
                                  _vm.sortClass(field),
                                  { sortable: _vm.isSortable(field) }
                                ],
                                style: { width: field.width },
                                attrs: { id: "_" + field.name },
                                domProps: {
                                  innerHTML: _vm._s(_vm.renderTitle(field))
                                },
                                on: {
                                  click: function($event) {
                                    _vm.orderBy(field, $event)
                                  }
                                }
                              })
                            ]
                      ]
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          { class: ["vuetable-body", _vm.css.gTableBodyClass] },
          [
            _vm._l(_vm.tableData, function(item, itemIndex) {
              return [
                _c(
                  "tr",
                  {
                    key: itemIndex,
                    class: [
                      itemIndex % 2 == 0 ? "even" : "odd",
                      _vm.onRowClass(item, itemIndex)
                    ],
                    attrs: {
                      "item-index": itemIndex,
                      render: _vm.onRowChanged(item)
                    },
                    on: {
                      dblclick: function($event) {
                        _vm.onRowDoubleClicked(item, $event)
                      },
                      click: function($event) {
                        _vm.onRowClicked(item, $event)
                      }
                    }
                  },
                  [
                    _vm._l(_vm.tableFields, function(field, fieldIndex) {
                      return [
                        field.visible
                          ? [
                              _vm.isSpecialField(field.name)
                                ? [
                                    _vm.extractName(field.name) == "__sequence"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-sequence",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderSequence(itemIndex)
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__handle"
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: [
                                            "vuetable-handle",
                                            field.dataClass
                                          ],
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.renderIconTag([
                                                "handle-icon",
                                                _vm.css.handleIcon
                                              ])
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) == "__checkbox"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-checkboxes",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c("input", {
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked: _vm.rowSelected(
                                                  item,
                                                  field.name
                                                )
                                              },
                                              on: {
                                                change: function($event) {
                                                  _vm.toggleCheckbox(
                                                    item,
                                                    field.name,
                                                    $event
                                                  )
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) ===
                                    "__component"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-component",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _c(_vm.extractArgs(field.name), {
                                              tag: "component",
                                              attrs: {
                                                "row-data": item,
                                                "row-index": itemIndex,
                                                "row-field": field.sortField
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.extractName(field.name) === "__slot"
                                      ? _c(
                                          "td",
                                          {
                                            key: fieldIndex,
                                            class: [
                                              "vuetable-slot",
                                              field.dataClass
                                            ]
                                          },
                                          [
                                            _vm._t(
                                              _vm.extractArgs(field.name),
                                              null,
                                              {
                                                rowData: item,
                                                rowIndex: itemIndex,
                                                rowField: field.sortField
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
                                  ]
                                : [
                                    _vm.hasCallback(field)
                                      ? _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.callCallback(field, item)
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                      : _c("td", {
                                          key: fieldIndex,
                                          class: field.dataClass,
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.getObjectValue(
                                                item,
                                                field.name,
                                                ""
                                              )
                                            )
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.onCellClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            dblclick: function($event) {
                                              _vm.onCellDoubleClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            },
                                            contextmenu: function($event) {
                                              _vm.onCellRightClicked(
                                                item,
                                                field,
                                                $event
                                              )
                                            }
                                          }
                                        })
                                  ]
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.useDetailRow
                  ? [
                      _c(
                        "transition",
                        {
                          key: itemIndex,
                          attrs: { name: _vm.detailRowTransition }
                        },
                        [
                          _vm.isVisibleDetailRow(item[_vm.trackBy])
                            ? _c(
                                "tr",
                                {
                                  class: [_vm.css.detailRowClass],
                                  on: {
                                    click: function($event) {
                                      _vm.onDetailRowClick(item, $event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      attrs: { colspan: _vm.countVisibleFields }
                                    },
                                    [
                                      _c(_vm.detailRowComponent, {
                                        tag: "component",
                                        attrs: {
                                          "row-data": item,
                                          "row-index": itemIndex
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  : _vm._e()
              ]
            }),
            _vm._v(" "),
            _vm.displayEmptyDataRow
              ? [
                  _c("tr", [
                    _c("td", {
                      staticClass: "vuetable-empty-result",
                      attrs: { colspan: _vm.countVisibleFields },
                      domProps: { innerHTML: _vm._s(_vm.noDataTemplate) }
                    })
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.lessThanMinRows
              ? _vm._l(_vm.blankRows, function(i) {
                  return _c(
                    "tr",
                    { key: i, staticClass: "blank-row" },
                    [
                      _vm._l(_vm.tableFields, function(field, fieldIndex) {
                        return [
                          field.visible
                            ? _c("td", { key: fieldIndex }, [_vm._v(" ")])
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                })
              : _vm._e()
          ],
          2
        )
      ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15965e3b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17724083\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    class: ["vuetable-pagination-info", _vm.css.infoClass],
    domProps: { innerHTML: _vm._s(_vm.paginationInfo) }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17724083", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c7f6268\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Delete.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _c("button", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showButton,
          expression: "showButton"
        }
      ],
      staticClass: "btn btn-xs red",
      attrs: { type: "button" },
      domProps: { innerHTML: _vm._s(_vm.deleteLabel) },
      on: {
        click: function($event) {
          _vm.clickHandler(_vm.deleteUrl)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2c7f6268", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3efdd596\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/VuetablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.tablePagination && _vm.tablePagination.last_page > 1,
          expression: "tablePagination && tablePagination.last_page > 1"
        }
      ],
      class: _vm.css.wrapperClass
    },
    [
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(1)
            }
          }
        },
        [
          _vm.css.icons.first != ""
            ? _c("i", { class: [_vm.css.icons.first] })
            : _c("span", [_vm._v("«")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnFirstPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("prev")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.prev] })
            : _c("span", [_vm._v(" ‹")])
        ]
      ),
      _vm._v(" "),
      _vm.notEnoughPages
        ? [
            _vm._l(_vm.totalPage, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(n) ? _vm.css.activeClass : ""
                  ],
                  domProps: { innerHTML: _vm._s(n) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(n)
                    }
                  }
                })
              ]
            })
          ]
        : [
            _vm._l(_vm.windowSize, function(n) {
              return [
                _c("a", {
                  class: [
                    _vm.css.pageClass,
                    _vm.isCurrentPage(_vm.windowStart + n - 1)
                      ? _vm.css.activeClass
                      : ""
                  ],
                  domProps: { innerHTML: _vm._s(_vm.windowStart + n - 1) },
                  on: {
                    click: function($event) {
                      _vm.loadPage(_vm.windowStart + n - 1)
                    }
                  }
                })
              ]
            })
          ],
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage("next")
            }
          }
        },
        [
          _vm.css.icons.next != ""
            ? _c("i", { class: [_vm.css.icons.next] })
            : _c("span", [_vm._v("› ")])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          class: [
            "btn-nav",
            _vm.css.linkClass,
            _vm.isOnLastPage ? _vm.css.disabledClass : ""
          ],
          on: {
            click: function($event) {
              _vm.loadPage(_vm.totalPage)
            }
          }
        },
        [
          _vm.css.icons.last != ""
            ? _c("i", { class: [_vm.css.icons.last] })
            : _c("span", [_vm._v("»")])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3efdd596", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65229430\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Notification.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.type == "danger",
            expression: "type == 'danger'"
          }
        ],
        staticClass: "alert alert-danger fade in alert-dismissible",
        staticStyle: { "margin-top": "18px" }
      },
      [
        _c("button", {
          staticClass: "close",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              _vm.type = null
            }
          }
        }),
        _vm._v("\n        " + _vm._s(_vm.message) + "\n    ")
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.type == "success",
            expression: "type == 'success'"
          }
        ],
        staticClass: "alert alert-success fade in alert-dismissible",
        staticStyle: { "margin-top": "18px" }
      },
      [
        _c("button", {
          staticClass: "close",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              _vm.type = null
            }
          }
        }),
        _vm._v("\n        " + _vm._s(_vm.message) + "\n    ")
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.type == "warning",
            expression: "type == 'warning'"
          }
        ],
        staticClass: "alert alert-warning fade in alert-dismissible",
        staticStyle: { "margin-top": "18px" }
      },
      [
        _c("button", {
          staticClass: "close",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              _vm.type = null
            }
          }
        }),
        _vm._v("\n        " + _vm._s(_vm.message) + "\n    ")
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.type == "info",
            expression: "type == 'info'"
          }
        ],
        staticClass: "alert alert-info fade in alert-dismissible",
        staticStyle: { "margin-top": "18px" }
      },
      [
        _c("button", {
          staticClass: "close",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              $event.stopPropagation()
              _vm.type = null
            }
          }
        }),
        _vm._v("\n        " + _vm._s(_vm.message) + "\n    ")
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65229430", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-750f5ab4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/student-classes/Master.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "portlet-body", attrs: { id: "student-classes" } },
    [
      _c(
        "div",
        { staticClass: "tab-content" },
        [
          _c("notification"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane active",
              attrs: { id: "all_student_classes", role: "tabpanel" }
            },
            [
              _c("list", {
                attrs: {
                  "props-panel": _vm.listPanel,
                  "props-urls": _vm.urls,
                  "props-permissions": _vm.permissions,
                  "props-trans": _vm.trans
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-750f5ab4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-79986d20\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/student-classes/List.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.listPanelStatus,
          expression: "listPanelStatus"
        }
      ],
      staticClass: "animated fadeIn"
    },
    [
      _c("div", [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.lSearchPanelStatus,
                expression: "lSearchPanelStatus"
              }
            ],
            staticClass: "m-demo animated fadeIn"
          },
          [_c("div", { staticClass: "m-demo__preview g-search-panel" })]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("vuetable", {
            ref: "vuetable",
            staticClass: "table g-table",
            attrs: {
              "api-url": _vm.urls.index,
              fields: _vm.fields,
              css: _vm.css,
              "append-params": _vm.externalParams,
              "pagination-path": ""
            },
            on: {
              "vuetable:cell-clicked": _vm.onCellClicked,
              "vuetable:pagination-data": _vm.onPaginationData,
              "vuetable:loading": _vm.setLoader,
              "vuetable:loaded": _vm.setLoader,
              "vuetable:load-error": _vm.handleLoadError,
              "vuetable:load-success": _vm.showJoinButton
            },
            scopedSlots: _vm._u([
              {
                key: "actions",
                fn: function(props) {
                  return [
                    _c(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: false,
                            expression: "false"
                          }
                        ],
                        class: [
                          "g-join-button",
                          "btn btn-primary btn-sm",
                          props.rowData.uuid
                        ],
                        attrs: {
                          href: _vm.urls.join_class.replaceAt(
                            _vm.urls.join_class.length - 1,
                            props.rowData.uuid
                          )
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.trans.common.join) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-info btn-sm g-btn",
                        on: {
                          click: function($event) {
                            _vm.openModal(props.rowData.notes)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.trans.common.notes) +
                            "\n                    "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", [
        _c("table", { staticClass: "table g-responsive-table" }, [
          _c("tr", [
            _c("td", { staticClass: "v-middle" }, [
              _c(
                "div",
                { staticClass: "form-group m-form-group" },
                [
                  _c("label", [_vm._v("Per Page:")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.entity.perPage,
                          expression: "entity.perPage"
                        }
                      ],
                      staticClass:
                        "form-control m-input m-input--solid g-select-control",
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.entity,
                              "perPage",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.showMore
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "3" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "150" } }, [
                        _vm._v("150")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "300" } }, [
                        _vm._v("300")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "500" } }, [
                        _vm._v("500")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "100" } }, [
                        _vm._v("1000")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("vuetable-pagination-info", {
                    ref: "paginationInfo",
                    attrs: {
                      "info-template": "Showing {to} From {total} Records.",
                      "info-class": "pagination-info"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("td", { staticClass: "v-middle" }, [
              _c("div", { staticClass: "clearfix" }, [
                _c(
                  "div",
                  { staticClass: "g-sm-pull-right" },
                  [
                    _c("vuetable-pagination", {
                      ref: "pagination",
                      attrs: { css: _vm.css.pagination },
                      on: {
                        "vuetable-pagination:change-page": _vm.onChangePage
                      }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79986d20", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6ee5d24c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0!./Vuetable.vue", function() {
     var newContent = require("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../vue-loader/lib/selector.js?type=styles&index=0!./Vuetable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__("./node_modules/vue-style-loader/lib/listToStyles.js")

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue-sweetalert/build/vue-sweetalert.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSweetAlert=t():e.VueSweetAlert=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="/build/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=o(a);t.default=r.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=o(a);n(5);var i={};i.install=function(e){e.prototype.$swal=r.default},t.default=i},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'body.swal2-shown{overflow-y:hidden}.swal2-container,body.swal2-iosfix{position:fixed;left:0;right:0}.swal2-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:0;bottom:0;padding:10px;background-color:transparent;z-index:1060}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-modal{background-color:#fff;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;border-radius:5px;box-sizing:border-box;text-align:center;margin:auto;overflow-x:hidden;overflow-y:auto;display:none;position:relative;max-width:100%}.swal2-modal:focus{outline:none}.swal2-modal.swal2-loading{overflow-y:hidden}.swal2-modal .swal2-title{color:#595959;font-size:30px;text-align:center;font-weight:600;text-transform:none;position:relative;margin:0 0 .4em;padding:0;display:block;word-wrap:break-word}.swal2-modal .swal2-buttonswrapper{margin-top:15px}.swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4;cursor:no-drop}.swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;border:4px solid transparent;border-color:transparent;width:40px;height:40px;padding:0;margin:7.5px;vertical-align:top;background-color:transparent!important;color:transparent;cursor:default;border-radius:100%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;animation:rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel{margin-left:30px;margin-right:30px}.swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm:after{display:inline-block;content:"";margin-left:5px 0 15px;vertical-align:-1px;height:15px;width:15px;border:3px solid #999;box-shadow:1px 1px 1px #fff;border-right-color:transparent;border-radius:50%;-webkit-animation:rotate-loading 1.5s linear 0s infinite normal;animation:rotate-loading 1.5s linear 0s infinite normal}.swal2-modal .swal2-styled{border:0;border-radius:3px;box-shadow:none;color:#fff;cursor:pointer;font-size:17px;font-weight:500;margin:15px 5px 0;padding:10px 32px}.swal2-modal .swal2-image{margin:20px auto;max-width:100%}.swal2-modal .swal2-close{background:transparent;border:0;margin:0;padding:0;width:38px;height:40px;font-size:36px;line-height:40px;font-family:serif;position:absolute;top:5px;right:8px;cursor:pointer;color:#ccc;transition:color .1s ease}.swal2-modal .swal2-close:hover{color:#d55}.swal2-modal>.swal2-checkbox,.swal2-modal>.swal2-file,.swal2-modal>.swal2-input,.swal2-modal>.swal2-radio,.swal2-modal>.swal2-select,.swal2-modal>.swal2-textarea{display:none}.swal2-modal .swal2-content{font-size:18px;text-align:center;font-weight:300;position:relative;float:none;margin:0;padding:0;line-height:normal;color:#545454;word-wrap:break-word}.swal2-modal .swal2-checkbox,.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-radio,.swal2-modal .swal2-select,.swal2-modal .swal2-textarea{margin:20px auto}.swal2-modal .swal2-file,.swal2-modal .swal2-input,.swal2-modal .swal2-textarea{width:100%;box-sizing:border-box;font-size:18px;border-radius:3px;border:1px solid #d9d9d9;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);transition:border-color box-shadow .3s}.swal2-modal .swal2-file.swal2-inputerror,.swal2-modal .swal2-input.swal2-inputerror,.swal2-modal .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-modal .swal2-file:focus,.swal2-modal .swal2-input:focus,.swal2-modal .swal2-textarea:focus{outline:none;border:1px solid #b4dbed;box-shadow:0 0 3px #c4e6f5}.swal2-modal .swal2-file:focus::-webkit-input-placeholder,.swal2-modal .swal2-input:focus::-webkit-input-placeholder,.swal2-modal .swal2-textarea:focus::-webkit-input-placeholder{transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file:focus:-ms-input-placeholder,.swal2-modal .swal2-input:focus:-ms-input-placeholder,.swal2-modal .swal2-textarea:focus:-ms-input-placeholder{transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file:focus::placeholder,.swal2-modal .swal2-input:focus::placeholder,.swal2-modal .swal2-textarea:focus::placeholder{transition:opacity .3s ease .03s;opacity:.8}.swal2-modal .swal2-file::-webkit-input-placeholder,.swal2-modal .swal2-input::-webkit-input-placeholder,.swal2-modal .swal2-textarea::-webkit-input-placeholder{color:#e6e6e6}.swal2-modal .swal2-file:-ms-input-placeholder,.swal2-modal .swal2-input:-ms-input-placeholder,.swal2-modal .swal2-textarea:-ms-input-placeholder{color:#e6e6e6}.swal2-modal .swal2-file::placeholder,.swal2-modal .swal2-input::placeholder,.swal2-modal .swal2-textarea::placeholder{color:#e6e6e6}.swal2-modal .swal2-range input{float:left;width:80%}.swal2-modal .swal2-range output{float:right;width:20%;font-size:20px;font-weight:600;text-align:center}.swal2-modal .swal2-range input,.swal2-modal .swal2-range output{height:43px;line-height:43px;vertical-align:middle;margin:20px auto;padding:0}.swal2-modal .swal2-input{height:43px;padding:0 12px}.swal2-modal .swal2-input[type=number]{max-width:150px}.swal2-modal .swal2-file{font-size:20px}.swal2-modal .swal2-textarea{height:108px;padding:12px}.swal2-modal .swal2-select{color:#545454;font-size:inherit;padding:5px 10px;min-width:40%;max-width:100%}.swal2-modal .swal2-radio{border:0}.swal2-modal .swal2-radio label:not(:first-child){margin-left:20px}.swal2-modal .swal2-radio input,.swal2-modal .swal2-radio span{vertical-align:middle}.swal2-modal .swal2-radio input{margin:0 3px 0 0}.swal2-modal .swal2-checkbox{color:#545454}.swal2-modal .swal2-checkbox input,.swal2-modal .swal2-checkbox span{vertical-align:middle}.swal2-modal .swal2-validationerror{background-color:#f0f0f0;margin:0 -20px;overflow:hidden;padding:10px;color:gray;font-size:16px;font-weight:300;display:none}.swal2-modal .swal2-validationerror:before{content:"!";display:inline-block;width:24px;height:24px;border-radius:50%;background-color:#ea7d7d;color:#fff;line-height:24px;text-align:center;margin-right:10px}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.swal2-range input{width:100%!important}.swal2-range output{display:none}}.swal2-icon{width:80px;height:80px;border:4px solid transparent;border-radius:50%;margin:20px auto 30px;padding:0;position:relative;box-sizing:content-box;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;display:block}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}.swal2-icon.swal2-warning{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#f8bb86;border-color:#facea8}.swal2-icon.swal2-info,.swal2-icon.swal2-warning{font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-info{font-family:Open Sans,sans-serif;color:#3fc3ee;border-color:#9de0f6}.swal2-icon.swal2-question{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#87adbd;border-color:#c9dae1;font-size:60px;line-height:80px;text-align:center}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{border-radius:50%;position:absolute;width:60px;height:120px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px}.swal2-icon.swal2-success .swal2-success-ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal2-icon.swal2-success .swal2-success-fix{width:7px;height:90px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{font-weight:600;margin:0 0 20px;padding:0}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{background:#3085d6;border-radius:2em;color:#fff;height:2em;line-height:2em;text-align:center;width:2em;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle,.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{background:#3085d6;height:.4em;margin:0 -1px;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes hideSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}.swal2-show{-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:hideSweetAlert .15s forwards;animation:hideSweetAlert .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}@-webkit-keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animate-success-tip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animate-success-long{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}.swal2-animate-success-line-tip{-webkit-animation:animate-success-tip .75s;animation:animate-success-tip .75s}.swal2-animate-success-line-long{-webkit-animation:animate-success-long .75s;animation:animate-success-long .75s}.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}@-webkit-keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}.swal2-animate-error-icon{-webkit-animation:animate-error-icon .5s;animation:animate-error-icon .5s}@-webkit-keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animate-x-mark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal2-animate-x-mark{-webkit-animation:animate-x-mark .5s;animation:animate-x-mark .5s}@-webkit-keyframes rotate-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(o[r]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],a=f[o.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](o.parts[r]);for(;r<o.parts.length;r++)a.parts.push(c(o.parts[r],t))}else{for(var i=[],r=0;r<o.parts.length;r++)i.push(c(o.parts[r],t));f[o.id]={id:o.id,refs:1,parts:i}}}}function a(e){for(var t=[],n={},o=0;o<e.length;o++){var a=e[o],r=a[0],i=a[1],s=a[2],l=a[3],c={css:i,media:s,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=g(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,o,a;if(t.singleton){var r=b++;n=h||(h=s(t)),o=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=p.bind(null,n),a=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=d.bind(null,n),a=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}function u(e,t,n,o){var a=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(a),r&&URL.revokeObjectURL(r)}var f={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},w=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),g=m(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,b=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=w()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=a(e);return o(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i],l=f[s.id];l.refs--,r.push(l)}if(e){var c=a(e);o(c,t)}for(var i=0;i<r.length;i++){var l=r[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.id,o,""]]);n(4)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){/*!
	 * sweetalert2 v6.6.6
	 * Released under the MIT License.
	 */
!function(t,n){e.exports=n()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,customClass:"",target:"body",animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusCancel:!1,showCloseButton:!1,showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onOpen:null,onClose:null,useRejections:!0},t="swal2-",n=function(e){var n={};for(var o in e)n[e[o]]=t+e[o];return n},o=n(["container","shown","iosfix","modal","overlay","fade","show","hide","noanimation","close","title","content","buttonswrapper","confirm","cancel","icon","image","input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled"]),a=n(["success","warning","info","question","error"]),r=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var a=parseInt(e.substr(2*o,2),16);a=Math.round(Math.min(Math.max(0,a+a*t),255)).toString(16),n+=("00"+a).substr(a.length)}return n},i=function(e){var t=[];for(var n in e)t.indexOf(e[n])===-1&&t.push(e[n]);return t},s={previousWindowKeyDown:null,previousActiveElement:null,previousBodyPadding:null},l=function(e){if("undefined"==typeof document)return void console.error("SweetAlert2 requires document to initialize");var t=document.createElement("div");t.className=o.container,t.innerHTML=c;var n=document.querySelector(e.target);n||(console.warn("SweetAlert2: Can't find the target \""+e.target+'"'),n=document.body),n.appendChild(t);var a=d(),r=P(a,o.input),i=P(a,o.file),s=a.querySelector("."+o.range+" input"),l=a.querySelector("."+o.range+" output"),u=P(a,o.select),p=a.querySelector("."+o.checkbox+" input"),f=P(a,o.textarea);return r.oninput=function(){Y.resetValidationError()},r.onkeydown=function(t){setTimeout(function(){13===t.keyCode&&e.allowEnterKey&&(t.stopPropagation(),Y.clickConfirm())},0)},i.onchange=function(){Y.resetValidationError()},s.oninput=function(){Y.resetValidationError(),l.value=s.value},s.onchange=function(){Y.resetValidationError(),s.previousSibling.value=s.value},u.onchange=function(){Y.resetValidationError()},p.onchange=function(){Y.resetValidationError()},f.oninput=function(){Y.resetValidationError()},a},c=('\n <div role="dialog" aria-labelledby="'+o.title+'" aria-describedby="'+o.content+'" class="'+o.modal+'" tabindex="-1">\n   <ul class="'+o.progresssteps+'"></ul>\n   <div class="'+o.icon+" "+a.error+'">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="'+o.icon+" "+a.question+'">?</div>\n   <div class="'+o.icon+" "+a.warning+'">!</div>\n   <div class="'+o.icon+" "+a.info+'">i</div>\n   <div class="'+o.icon+" "+a.success+'">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="'+o.image+'" />\n   <h2 class="'+o.title+'" id="'+o.title+'"></h2>\n   <div id="'+o.content+'" class="'+o.content+'"></div>\n   <input class="'+o.input+'" />\n   <input type="file" class="'+o.file+'" />\n   <div class="'+o.range+'">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="'+o.select+'"></select>\n   <div class="'+o.radio+'"></div>\n   <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n     <input type="checkbox" />\n   </label>\n   <textarea class="'+o.textarea+'"></textarea>\n   <div class="'+o.validationerror+'"></div>\n   <div class="'+o.buttonswrapper+'">\n     <button type="button" class="'+o.confirm+'">OK</button>\n     <button type="button" class="'+o.cancel+'">Cancel</button>\n   </div>\n   <button type="button" class="'+o.close+'" aria-label="Close this dialog">×</button>\n </div>\n').replace(/(^|\n)\s*/g,""),u=function(){return document.body.querySelector("."+o.container)},d=function(){return u()?u().querySelector("."+o.modal):null},p=function(){var e=d();return e.querySelectorAll("."+o.icon)},f=function(e){return u()?u().querySelector("."+e):null},m=function(){return f(o.title)},w=function(){return f(o.content)},g=function(){return f(o.image)},h=function(){return f(o.buttonswrapper)},b=function(){return f(o.progresssteps)},x=function(){return f(o.validationerror)},v=function(){return f(o.confirm)},y=function(){return f(o.cancel)},k=function(){return f(o.close)},C=function(e){var t=[v(),y()];e&&t.reverse();var n=t.concat(Array.prototype.slice.call(d().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, *[tabindex]:not([tabindex="-1"])')));return i(n)},S=function(e,t){return!!e.classList&&e.classList.contains(t)},A=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},E=function(e,t){if(e&&t){var n=t.split(/\s+/).filter(Boolean);n.forEach(function(t){e.classList.add(t)})}},B=function(e,t){if(e&&t){var n=t.split(/\s+/).filter(Boolean);n.forEach(function(t){e.classList.remove(t)})}},P=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(S(e.childNodes[n],t))return e.childNodes[n]},L=function(e,t){t||(t="block"),e.style.opacity="",e.style.display=t},M=function(e){e.style.opacity="",e.style.display="none"},T=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},O=function(e){return e.offsetWidth||e.offsetHeight||e.getClientRects().length},q=function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)},H=function(e){if(!O(e))return!1;if("function"==typeof MouseEvent){var t=new MouseEvent("click",{view:window,bubbles:!1,cancelable:!0});e.dispatchEvent(t)}else if(document.createEvent){var n=document.createEvent("MouseEvents");n.initEvent("click",!1,!1),e.dispatchEvent(n)}else document.createEventObject?e.fireEvent("onclick"):"function"==typeof e.onclick&&e.onclick()},V=function(){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),j=function(){if(window.onkeydown=s.previousWindowKeyDown,s.previousActiveElement&&s.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;s.previousActiveElement.focus(),e&&t&&window.scrollTo(e,t)}},z=function(){var e="ontouchstart"in window||navigator.msMaxTouchPoints;if(e)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),n},N=function(e,t){var n=void 0;return function(){var o=function(){n=null,e()};clearTimeout(n),n=setTimeout(o,t)}},R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},I=U({},e),K=[],D=void 0,W=function(t){var n=d()||l(t);for(var r in t)e.hasOwnProperty(r)||"extraParams"===r||console.warn('SweetAlert2: Unknown parameter "'+r+'"');n.style.width="number"==typeof t.width?t.width+"px":t.width,n.style.padding=t.padding+"px",n.style.background=t.background;for(var i=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),s=0;s<i.length;s++)i[s].style.background=t.background;var c=m(),u=w(),f=h(),x=v(),C=y(),S=k();if(t.titleText?c.innerText=t.titleText:c.innerHTML=t.title.split("\n").join("<br />"),t.text||t.html){if("object"===R(t.html))if(u.innerHTML="",0 in t.html)for(var A=0;A in t.html;A++)u.appendChild(t.html[A].cloneNode(!0));else u.appendChild(t.html.cloneNode(!0));else t.html?u.innerHTML=t.html:t.text&&(u.textContent=t.text);L(u)}else M(u);t.showCloseButton?L(S):M(S),n.className=o.modal,t.customClass&&E(n,t.customClass);var P=b(),O=parseInt(null===t.currentProgressStep?Y.getQueueStep():t.currentProgressStep,10);t.progressSteps.length?(L(P),T(P),O>=t.progressSteps.length&&console.warn("SweetAlert2: Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(function(e,n){var a=document.createElement("li");if(E(a,o.progresscircle),a.innerHTML=e,n===O&&E(a,o.activeprogressstep),P.appendChild(a),n!==t.progressSteps.length-1){var r=document.createElement("li");E(r,o.progressline),r.style.width=t.progressStepsDistance,P.appendChild(r)}})):M(P);for(var H=p(),V=0;V<H.length;V++)M(H[V]);if(t.type){var j=!1;for(var z in a)if(t.type===z){j=!0;break}if(!j)return console.error("SweetAlert2: Unknown alert type: "+t.type),!1;var N=n.querySelector("."+o.icon+"."+a[t.type]);if(L(N),t.animation)switch(t.type){case"success":E(N,"swal2-animate-success-icon"),E(N.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),E(N.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":E(N,"swal2-animate-error-icon"),E(N.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var U=g();t.imageUrl?(U.setAttribute("src",t.imageUrl),L(U),t.imageWidth?U.setAttribute("width",t.imageWidth):U.removeAttribute("width"),t.imageHeight?U.setAttribute("height",t.imageHeight):U.removeAttribute("height"),U.className=o.image,t.imageClass&&E(U,t.imageClass)):M(U),t.showCancelButton?C.style.display="inline-block":M(C),t.showConfirmButton?q(x,"display"):M(x),t.showConfirmButton||t.showCancelButton?L(f):M(f),x.innerHTML=t.confirmButtonText,C.innerHTML=t.cancelButtonText,t.buttonsStyling&&(x.style.backgroundColor=t.confirmButtonColor,C.style.backgroundColor=t.cancelButtonColor),x.className=o.confirm,E(x,t.confirmButtonClass),C.className=o.cancel,E(C,t.cancelButtonClass),t.buttonsStyling?(E(x,o.styled),E(C,o.styled)):(B(x,o.styled),B(C,o.styled),x.style.backgroundColor=x.style.borderLeftColor=x.style.borderRightColor="",C.style.backgroundColor=C.style.borderLeftColor=C.style.borderRightColor=""),t.animation===!0?B(n,o.noanimation):E(n,o.noanimation)},_=function(e,t){var n=u(),a=d();e?(E(a,o.show),E(n,o.fade),B(a,o.hide)):B(a,o.fade),L(a),n.style.overflowY="hidden",V&&!S(a,o.noanimation)?a.addEventListener(V,function e(){a.removeEventListener(V,e),n.style.overflowY="auto"}):n.style.overflowY="auto",E(document.documentElement,o.shown),E(document.body,o.shown),E(n,o.shown),X(),Z(),s.previousActiveElement=document.activeElement,null!==t&&"function"==typeof t&&setTimeout(function(){t(a)})},X=function(){null===s.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(s.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=z()+"px")},$=function(){null!==s.previousBodyPadding&&(document.body.style.paddingRight=s.previousBodyPadding,s.previousBodyPadding=null)},Z=function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;if(e&&!S(document.body,o.iosfix)){var t=document.body.scrollTop;document.body.style.top=t*-1+"px",E(document.body,o.iosfix)}},Q=function(){if(S(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);B(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},Y=function e(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];if(void 0===n[0])return console.error("SweetAlert2 expects at least 1 attribute!"),!1;var i=U({},I);switch(R(n[0])){case"string":i.title=n[0],i.html=n[1],i.type=n[2];break;case"object":U(i,n[0]),i.extraParams=n[0].extraParams,"email"===i.input&&null===i.inputValidator&&(i.inputValidator=function(e){return new Promise(function(t,n){var o=/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;o.test(e)?t():n("Invalid email address")})}),"url"===i.input&&null===i.inputValidator&&(i.inputValidator=function(e){return new Promise(function(t,n){var o=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/\/=]*)$/;o.test(e)?t():n("Invalid URL")})});break;default:return console.error('SweetAlert2: Unexpected type of argument! Expected "string" or "object", got '+R(n[0])),!1}W(i);var l=u(),c=d();return new Promise(function(t,n){i.timer&&(c.timeout=setTimeout(function(){e.closeModal(i.onClose),i.useRejections?n("timer"):t({dismiss:"timer"})},i.timer));var a=function(e){if(e=e||i.input,!e)return null;switch(e){case"select":case"textarea":case"file":return P(c,o[e]);case"checkbox":return c.querySelector("."+o.checkbox+" input");case"radio":return c.querySelector("."+o.radio+" input:checked")||c.querySelector("."+o.radio+" input:first-child");case"range":return c.querySelector("."+o.range+" input");default:return P(c,o.input)}},p=function(){var e=a();if(!e)return null;switch(i.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return i.inputAutoTrim?e.value.trim():e.value}};i.input&&setTimeout(function(){var e=a();e&&A(e)},0);for(var f=function(n){i.showLoaderOnConfirm&&e.showLoading(),i.preConfirm?i.preConfirm(n,i.extraParams).then(function(o){e.closeModal(i.onClose),t(o||n)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):(e.closeModal(i.onClose),t(i.useRejections?n:{value:n}))},S=function(o){var a=o||window.event,s=a.target||a.srcElement,l=v(),c=y(),u=l&&(l===s||l.contains(s)),d=c&&(c===s||c.contains(s));switch(a.type){case"mouseover":case"mouseup":i.buttonsStyling&&(u?l.style.backgroundColor=r(i.confirmButtonColor,-.1):d&&(c.style.backgroundColor=r(i.cancelButtonColor,-.1)));break;case"mouseout":i.buttonsStyling&&(u?l.style.backgroundColor=i.confirmButtonColor:d&&(c.style.backgroundColor=i.cancelButtonColor));break;case"mousedown":i.buttonsStyling&&(u?l.style.backgroundColor=r(i.confirmButtonColor,-.2):d&&(c.style.backgroundColor=r(i.cancelButtonColor,-.2)));break;case"click":if(u&&e.isVisible())if(e.disableButtons(),i.input){var m=p();i.inputValidator?(e.disableInput(),i.inputValidator(m,i.extraParams).then(function(){e.enableButtons(),e.enableInput(),f(m)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)})):f(m)}else f(!0);else d&&e.isVisible()&&(e.disableButtons(),e.closeModal(i.onClose),i.useRejections?n("cancel"):t({dismiss:"cancel"}))}},T=c.querySelectorAll("button"),q=0;q<T.length;q++)T[q].onclick=S,T[q].onmouseover=S,T[q].onmouseout=S,T[q].onmousedown=S;k().onclick=function(){e.closeModal(i.onClose),i.useRejections?n("close"):t({dismiss:"close"})},l.onclick=function(o){o.target===l&&i.allowOutsideClick&&(e.closeModal(i.onClose),i.useRejections?n("overlay"):t({dismiss:"overlay"}))};var V=h(),j=v(),z=y();i.reverseButtons?j.parentNode.insertBefore(z,j):j.parentNode.insertBefore(j,z);var U=function(e,t){for(var n=C(i.focusCancel),o=0;o<n.length;o++){e+=t,e===n.length?e=0:e===-1&&(e=n.length-1);var a=n[e];if(O(a))return a.focus()}},I=function(o){var a=o||window.event,r=a.keyCode||a.which;if([9,13,32,27,37,38,39,40].indexOf(r)!==-1){for(var s=a.target||a.srcElement,l=C(i.focusCancel),c=-1,u=0;u<l.length;u++)if(s===l[u]){c=u;break}9===r?(a.shiftKey?U(c,-1):U(c,1),a.stopPropagation(),a.preventDefault()):37===r||38===r||39===r||40===r?document.activeElement===j&&O(z)?z.focus():document.activeElement===z&&O(j)&&j.focus():13===r||32===r?c===-1&&i.allowEnterKey&&(i.focusCancel?H(z,a):H(j,a),a.stopPropagation(),a.preventDefault()):27===r&&i.allowEscapeKey===!0&&(e.closeModal(i.onClose),i.useRejections?n("esc"):t({dismiss:"esc"}))}};window.onkeydown&&window.onkeydown.toString()===I.toString()||(s.previousWindowKeyDown=window.onkeydown,window.onkeydown=I),i.buttonsStyling&&(j.style.borderLeftColor=i.confirmButtonColor,j.style.borderRightColor=i.confirmButtonColor),e.hideLoading=e.disableLoading=function(){i.showConfirmButton||(M(j),i.showCancelButton||M(h())),B(V,o.loading),B(c,o.loading),j.disabled=!1,z.disabled=!1},e.getTitle=function(){return m()},e.getContent=function(){return w()},e.getInput=function(){return a()},e.getImage=function(){return g()},e.getButtonsWrapper=function(){return h()},e.getConfirmButton=function(){return v()},e.getCancelButton=function(){return y()},e.enableButtons=function(){j.disabled=!1,z.disabled=!1},e.disableButtons=function(){j.disabled=!0,z.disabled=!0},e.enableConfirmButton=function(){j.disabled=!1},e.disableConfirmButton=function(){j.disabled=!0},e.enableInput=function(){var e=a();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=a();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode,n=t.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=!0;else e.disabled=!0},e.recalculateHeight=N(function(){var e=d();if(e){var t=e.style.display;e.style.minHeight="",L(e),e.style.minHeight=e.scrollHeight+1+"px",e.style.display=t}},50),e.showValidationError=function(e){var t=x();t.innerHTML=e,L(t);var n=a();n&&(A(n),E(n,o.inputerror))},e.resetValidationError=function(){var t=x();M(t),e.recalculateHeight();var n=a();n&&B(n,o.inputerror)},e.getProgressSteps=function(){return i.progressSteps},e.setProgressSteps=function(e){i.progressSteps=e,W(i)},e.showProgressSteps=function(){L(b())},e.hideProgressSteps=function(){M(b())},e.enableButtons(),e.hideLoading(),e.resetValidationError();for(var K=["input","file","range","select","radio","checkbox","textarea"],X=void 0,$=0;$<K.length;$++){var Z=o[K[$]],Q=P(c,Z);if(X=a(K[$])){for(var Y in X.attributes)if(X.attributes.hasOwnProperty(Y)){var J=X.attributes[Y].name;"type"!==J&&"value"!==J&&X.removeAttribute(J)}for(var F in i.inputAttributes)X.setAttribute(F,i.inputAttributes[F])}Q.className=Z,i.inputClass&&E(Q,i.inputClass),M(Q)}var G=void 0;switch(i.input){case"text":case"email":case"password":case"number":case"tel":case"url":X=P(c,o.input),X.value=i.inputValue,X.placeholder=i.inputPlaceholder,X.type=i.input,L(X);break;case"file":X=P(c,o.file),X.placeholder=i.inputPlaceholder,X.type=i.input,L(X);break;case"range":var ee=P(c,o.range),te=ee.querySelector("input"),ne=ee.querySelector("output");te.value=i.inputValue,te.type=i.input,ne.value=i.inputValue,L(ee);break;case"select":var oe=P(c,o.select);if(oe.innerHTML="",i.inputPlaceholder){var ae=document.createElement("option");ae.innerHTML=i.inputPlaceholder,ae.value="",ae.disabled=!0,ae.selected=!0,oe.appendChild(ae)}G=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],i.inputValue===t&&(n.selected=!0),oe.appendChild(n)}L(oe),oe.focus()};break;case"radio":var re=P(c,o.radio);re.innerHTML="",G=function(e){for(var t in e){var n=document.createElement("input"),a=document.createElement("label"),r=document.createElement("span");n.type="radio",n.name=o.radio,n.value=t,i.inputValue===t&&(n.checked=!0),r.innerHTML=e[t],a.appendChild(n),a.appendChild(r),a.for=n.id,re.appendChild(a)}L(re);var s=re.querySelectorAll("input");s.length&&s[0].focus()};break;case"checkbox":var ie=P(c,o.checkbox),se=a("checkbox");se.type="checkbox",se.value=1,se.id=o.checkbox,se.checked=Boolean(i.inputValue);var le=ie.getElementsByTagName("span");le.length&&ie.removeChild(le[0]),le=document.createElement("span"),le.innerHTML=i.inputPlaceholder,ie.appendChild(le),L(ie);break;case"textarea":var ce=P(c,o.textarea);ce.value=i.inputValue,ce.placeholder=i.inputPlaceholder,L(ce);break;case null:break;default:console.error('SweetAlert2: Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+i.input+'"')}"select"!==i.input&&"radio"!==i.input||(i.inputOptions instanceof Promise?(e.showLoading(),i.inputOptions.then(function(t){e.hideLoading(),G(t)})):"object"===R(i.inputOptions)?G(i.inputOptions):console.error("SweetAlert2: Unexpected type of inputOptions! Expected object or Promise, got "+R(i.inputOptions))),_(i.animation,i.onOpen),i.allowEnterKey?U(-1,1):document.activeElement&&document.activeElement.blur(),u().scrollTop=0,"undefined"==typeof MutationObserver||D||(D=new MutationObserver(e.recalculateHeight),D.observe(c,{childList:!0,characterData:!0,subtree:!0}))})};return Y.isVisible=function(){return!!d()},Y.queue=function(e){K=e;var t=function(){K=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function a(r,i){r<K.length?(document.body.setAttribute("data-swal2-queue-step",r),Y(K[r]).then(function(e){n.push(e),a(r+1,i)},function(e){t(),o(e)})):(t(),e(n))}(0)})},Y.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},Y.insertQueueStep=function(e,t){return t&&t<K.length?K.splice(t,0,e):K.push(e)},Y.deleteQueueStep=function(e){"undefined"!=typeof K[e]&&K.splice(e,1)},Y.close=Y.closeModal=function(e){var t=u(),n=d();if(n){B(n,o.show),E(n,o.hide),clearTimeout(n.timeout),j();var a=function(){t.parentNode&&t.parentNode.removeChild(t),B(document.documentElement,o.shown),B(document.body,o.shown),$(),Q()};V&&!S(n,o.noanimation)?n.addEventListener(V,function e(){n.removeEventListener(V,e),S(n,o.hide)&&a()}):a(),null!==e&&"function"==typeof e&&setTimeout(function(){e(n)})}},Y.clickConfirm=function(){return v().click()},Y.clickCancel=function(){return y().click()},Y.showLoading=Y.enableLoading=function(){var e=d();e||Y("");var t=h(),n=v(),a=y();L(t),L(n,"inline-block"),E(t,o.loading),E(e,o.loading),n.disabled=!0,a.disabled=!0},Y.setDefaults=function(t){if(!t||"object"!==("undefined"==typeof t?"undefined":R(t)))return console.error("SweetAlert2: the argument for setDefaults() is required and has to be a object");for(var n in t)e.hasOwnProperty(n)||"extraParams"===n||(console.warn('SweetAlert2: Unknown parameter "'+n+'"'),delete t[n]);U(I,t)},Y.resetDefaults=function(){I=U({},e)},Y.noop=function(){},Y.version="6.6.6",Y.default=Y,Y}),window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2)}])});
//# sourceMappingURL=vue-sweetalert.js.map

/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        if (request.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/dispatchRequest.js");
var isAbsoluteURL = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, response);
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 @ @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/normalizeHeaderName.js");

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/utils.js");

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/vuetable-2/node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/vuetable-2/node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  typeof document.createElement -> undefined
 */
function isStandardBrowserEnv() {
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof document.createElement === 'function'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/Vuetable.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15965e3b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15965e3b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/Vuetable.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15965e3b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/Vuetable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15965e3b", Component.options)
  } else {
    hotAPI.reload("data-v-15965e3b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3efdd596\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/VuetablePagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/VuetablePagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3efdd596", Component.options)
  } else {
    hotAPI.reload("data-v-3efdd596", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17724083\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/VuetablePaginationInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17724083", Component.options)
  } else {
    hotAPI.reload("data-v-17724083", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePaginationInfoMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationInfoMixin.vue")
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/VuetablePaginationInfoMixin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f05a36e", Component.options)
  } else {
    hotAPI.reload("data-v-2f05a36e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue")
/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vuetable-2/src/components/VuetablePaginationMixin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c4c2408", Component.options)
  } else {
    hotAPI.reload("data-v-5c4c2408", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/common/Delete.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Delete.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c7f6268\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Delete.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/common/Delete.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c7f6268", Component.options)
  } else {
    hotAPI.reload("data-v-2c7f6268", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/common/Notification.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Notification.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65229430\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Notification.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/common/Notification.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65229430", Component.options)
  } else {
    hotAPI.reload("data-v-65229430", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/student-classes/List.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/student-classes/List.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-79986d20\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/student-classes/List.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/student-classes/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79986d20", Component.options)
  } else {
    hotAPI.reload("data-v-79986d20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/student-classes/Master.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/student-classes/Master.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-750f5ab4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/student-classes/Master.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/student-classes/Master.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-750f5ab4", Component.options)
  } else {
    hotAPI.reload("data-v-750f5ab4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/student-class-app.js":
/***/ (function(module, exports, __webpack_require__) {


/*
|----------------------------------------------------------------------
| Student Classes Module
|----------------------------------------------------------------------
*/
var StudentClass = __webpack_require__("./resources/assets/js/components/student-classes/Master.vue");
Vue.component('student-classes', StudentClass);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/student-class-app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDZiNDA2MWY5ZGJhYjU3NDU4NDMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTWFzdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/NGU2ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlP2JiNzMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWU/ODc2ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWU/NDYzOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlPzQ3NWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlP2JjNDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9NYXN0ZXIudnVlPzA4YTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9MaXN0LnZ1ZT8yOTcwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT8xNDA5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN3ZWV0YWxlcnQvYnVpbGQvdnVlLXN3ZWV0YWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvTWl4aW4udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9NYXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3R1ZGVudC1jbGFzcy1hcHAuanMiXSwibmFtZXMiOlsiU3R1ZGVudENsYXNzIiwicmVxdWlyZSIsIlZ1ZSIsImNvbXBvbmVudCJdLCJtYXBwaW5n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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7O0FDM0VBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLG9iQUFzUjtBQUN0UjtBQUNBLDZTQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLHFiQUFzUjtBQUN0UjtBQUNBLDhTQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLHViQUFzUjtBQUN0UjtBQUNBLGdUQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7OztBQ3ZDQTs7Ozs7QUFLQSxJQUFNQSxlQUFlLG1CQUFBQyxDQUFRLDZEQUFSLENBQXJCO0FBQ0FDLElBQUlDLFNBQUosQ0FBYyxpQkFBZCxFQUFpQ0gsWUFBakMsRSIsImZpbGUiOiIvanMvc3R1ZGVudC1jbGFzcy1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNmI0MDYxZjlkYmFiNTc0NTg0MyIsIjx0ZW1wbGF0ZT5cclxuPGRpdiB2LWlmPVwiaXNGaXhlZEhlYWRlclwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ2dWV0YWJsZS1oZWFkLXdyYXBwZXJcIj5cclxuICAgIDx0YWJsZSA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3MsIGNzcy50YWJsZUhlYWRlckNsYXNzXVwiPlxyXG4gICAgICA8dGhlYWQgOmNsYXNzPVwiW2Nzcy5nVGFibGVUaGVhZENsYXNzXVwiPlxyXG4gICAgICAgIDx0ciA6Y2xhc3M9XCJbY3NzLmdUYWJsZVRoZWFkVHJDbGFzc11cIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NvbXBvbmVudCdcIlxyXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jb21wb25lbnQtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXCJcclxuICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLXNlcXVlbmNlJywgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcIlxyXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJyddXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgIDx0aCBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICA6aWQ9XCInXycgKyBmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8dGggdi1pZj1cInNjcm9sbFZpc2libGVcIiA6c3R5bGU9XCJ7d2lkdGg6IHNjcm9sbEJhcldpZHRofVwiIGNsYXNzPVwidnVldGFibGUtZ3V0dGVyLWNvbFwiPjwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLWJvZHktd3JhcHBlclwiIDpzdHlsZT1cIntoZWlnaHQ6IHRhYmxlSGVpZ2h0fVwiPlxyXG4gICAgPHRhYmxlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzcywgY3NzLnRhYmxlQm9keUNsYXNzXVwiPlxyXG4gICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDxjb2xcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOmlkPVwiJ19jb2xfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L2NvbGdyb3VwPlxyXG4gICAgICA8dGJvZHkgdi1jbG9hayA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWJvZHknLCBjc3MuZ1RhYmxlQm9keUNsYXNzXVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICAgICAgPHRyIFxyXG4gICAgICAgICAgICA6a2V5PVwiaXRlbUluZGV4XCJcclxuICAgICAgICAgICAgOml0ZW0taW5kZXg9XCJpdGVtSW5kZXhcIiBcclxuICAgICAgICAgICAgOnJlbmRlcj1cIm9uUm93Q2hhbmdlZChpdGVtKVwiIFxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleClcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCJvblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtc2VxdWVuY2UnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19faGFuZGxlJ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWhhbmRsZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlckljb25UYWcoWydoYW5kbGUtaWNvbicsIGNzcy5oYW5kbGVJY29uXSlcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jaGVja2JveGVzJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fY29tcG9uZW50J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNvbXBvbmVudCcsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiIDpyb3ctZmllbGQ9XCJmaWVsZC5zb3J0RmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fc2xvdCdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvc2xvdD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgOmNsYXNzPVwiZmllbGQuZGF0YUNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyTm9ybWFsRmllbGQoZmllbGQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZURldGFpbFJvd1wiPlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cImRldGFpbFJvd1RyYW5zaXRpb25cIiA6a2V5PVwiaXRlbUluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHRyIHYtaWY9XCJpc1Zpc2libGVEZXRhaWxSb3coaXRlbVt0cmFja0J5XSlcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJkZXRhaWxSb3dDb21wb25lbnRcIiA6cm93LWRhdGE9XCJpdGVtXCIgOnJvdy1pbmRleD1cIml0ZW1JbmRleFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJkaXNwbGF5RW1wdHlEYXRhUm93XCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiIGNsYXNzPVwidnVldGFibGUtZW1wdHktcmVzdWx0XCIgdi1odG1sPVwibm9EYXRhVGVtcGxhdGVcIj48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwibGVzc1RoYW5NaW5Sb3dzXCI+XHJcbiAgICAgICAgICA8dHIgdi1mb3I9XCJpIGluIGJsYW5rUm93c1wiIGNsYXNzPVwiYmxhbmstcm93XCIgOmtleT1cImlcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZmllbGQudmlzaWJsZVwiIDprZXk9XCJmaWVsZEluZGV4XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48dGFibGUgdi1lbHNlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzc11cIj4gPCEtLSBubyBmaXhlZCBoZWFkZXIgLSByZWd1bGFyIHRhYmxlIC0tPlxyXG4gIDx0aGVhZCA6Y2xhc3M9XCJbY3NzLmdUYWJsZVRoZWFkQ2xhc3NdXCI+XHJcbiAgICA8dHIgOmNsYXNzPVwiW2Nzcy5nVGFibGVUaGVhZFRyQ2xhc3NdXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwidG9nZ2xlQWxsQ2hlY2tib3hlcyhmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jb21wb25lbnQnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtY29tcG9uZW50LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cIlxyXG4gICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnLCBzb3J0Q2xhc3MoZmllbGQpXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgPHRoIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6aWQ9XCInXycgKyBmaWVsZC5uYW1lXCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksICB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5IHYtY2xvYWsgOmNsYXNzPVwiWyd2dWV0YWJsZS1ib2R5JywgY3NzLmdUYWJsZUJvZHlDbGFzc11cIj5cclxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICA8dHIgQGRibGNsaWNrPVwib25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcIiBcclxuICAgICAgICA6a2V5PVwiaXRlbUluZGV4XCJcclxuICAgICAgICA6aXRlbS1pbmRleD1cIml0ZW1JbmRleFwiIFxyXG4gICAgICAgIDpyZW5kZXI9XCJvblJvd0NoYW5nZWQoaXRlbSlcIiBcclxuICAgICAgICA6Y2xhc3M9XCJbKGl0ZW1JbmRleCUyPT0wID8gJ2V2ZW4nIDogJ29kZCcpLCBvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleCldXCJcclxuICAgICAgICBAY2xpY2s9XCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJmaWVsZC52aXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19oYW5kbGUnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWhhbmRsZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVySWNvblRhZyhbJ2hhbmRsZS1pY29uJywgY3NzLmhhbmRsZUljb25dKVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY2hlY2tib3hlcycsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidG9nZ2xlQ2hlY2tib3goaXRlbSwgZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX2NvbXBvbmVudCdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY29tcG9uZW50JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19zbG90J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVwiXHJcbiAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICA+PC9zbG90PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJoYXNDYWxsYmFjayhmaWVsZClcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImZpZWxkLmRhdGFDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJjYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWVsc2UgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJmaWVsZC5kYXRhQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgdi1odG1sPVwiZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSwgJycpXCJcclxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInVzZURldGFpbFJvd1wiPlxyXG4gICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVwiZGV0YWlsUm93VHJhbnNpdGlvblwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuICAgICAgICAgIDx0ciB2LWlmPVwiaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bdHJhY2tCeV0pXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJjb3VudFZpc2libGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImRldGFpbFJvd0NvbXBvbmVudFwiIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImRpc3BsYXlFbXB0eURhdGFSb3dcIj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiIGNsYXNzPVwidnVldGFibGUtZW1wdHktcmVzdWx0XCIgdi1odG1sPVwibm9EYXRhVGVtcGxhdGVcIj48L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwibGVzc1RoYW5NaW5Sb3dzXCI+XHJcbiAgICAgIDx0ciB2LWZvcj1cImkgaW4gYmxhbmtSb3dzXCIgY2xhc3M9XCJibGFuay1yb3dcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgIDx0ZCB2LWlmPVwiZmllbGQudmlzaWJsZVwiIDprZXk9XCJmaWVsZEluZGV4XCI+Jm5ic3A7PC90ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBmaWVsZHM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbG9hZE9uU3RhcnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwaVVybDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGh0dHBNZXRob2Q6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2dldCcsXHJcbiAgICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBbJ2dldCcsICdwb3N0J10uaW5kZXhPZih2YWx1ZSkgPiAtMVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFjdGl2ZUFwaVVybDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwaU1vZGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgdHlwZTogW0FycmF5LCBPYmplY3RdLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YVRvdGFsOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMFxyXG4gICAgfSxcclxuICAgIGRhdGFNYW5hZ2VyOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YVBhdGg6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJ2RhdGEnXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvblBhdGg6IHtcclxuICAgICAgICB0eXBlOiBbU3RyaW5nXSxcclxuICAgICAgICBkZWZhdWx0OiAnbGlua3MucGFnaW5hdGlvbidcclxuICAgIH0sXHJcbiAgICBxdWVyeVBhcmFtczoge1xyXG4gICAgICB0eXBlOiBbT2JqZWN0LCBGdW5jdGlvbl0sXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzb3J0OiAnc29ydCcsXHJcbiAgICAgICAgICBwYWdlOiAncGFnZScsXHJcbiAgICAgICAgICBwZXJQYWdlOiAncGVyX3BhZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kUGFyYW1zOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodHRwT3B0aW9uczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaHR0cEZldGNoOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9LFxyXG4gICAgcGVyUGFnZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRpYWxQYWdlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIDFcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNvcnRPcmRlcjoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdWx0aVNvcnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0YWJsZUhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgICogcGh5c2ljYWwga2V5IHRoYXQgd2lsbCB0cmlnZ2VyIG11bHRpLXNvcnQgb3B0aW9uXHJcbiAgICAgKiBwb3NzaWJsZSB2YWx1ZXM6ICdhbHQnLCAnY3RybCcsICdtZXRhJywgJ3NoaWZ0J1xyXG4gICAgICogJ2N0cmwnIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIE1hY1xyXG4gICAgICovXHJcbiAgICBtdWx0aVNvcnRLZXk6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnYWx0J1xyXG4gICAgfSxcclxuICAgIC8qIGRlcHJlY2F0ZWQgKi9cclxuICAgIHJvd0NsYXNzQ2FsbGJhY2s6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIHJvd0NsYXNzOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBkZXRhaWxSb3dDb21wb25lbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGRldGFpbFJvd1RyYW5zaXRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIHRyYWNrQnk6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnaWQnXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRhYmxlQ2xhc3M6ICd1aSBibHVlIHNlbGVjdGFibGUgY2VsbGVkIHN0YWNrYWJsZSBhdHRhY2hlZCB0YWJsZScsXHJcbiAgICAgICAgICBsb2FkaW5nQ2xhc3M6ICdsb2FkaW5nJyxcclxuICAgICAgICAgIGFzY2VuZGluZ0ljb246ICdibHVlIGNoZXZyb24gdXAgaWNvbicsXHJcbiAgICAgICAgICBkZXNjZW5kaW5nSWNvbjogJ2JsdWUgY2hldnJvbiBkb3duIGljb24nLFxyXG4gICAgICAgICAgYXNjZW5kaW5nQ2xhc3M6ICdzb3J0ZWQtYXNjJyxcclxuICAgICAgICAgIGRlc2NlbmRpbmdDbGFzczogJ3NvcnRlZC1kZXNjJyxcclxuICAgICAgICAgIHNvcnRhYmxlSWNvbjogJycsXHJcbiAgICAgICAgICBkZXRhaWxSb3dDbGFzczogJ3Z1ZXRhYmxlLWRldGFpbC1yb3cnLFxyXG4gICAgICAgICAgaGFuZGxlSWNvbjogJ2dyZXkgc2lkZWJhciBpY29uJyxcclxuICAgICAgICAgIHRhYmxlQm9keUNsYXNzOiAndnVldGFibGUtc2VtYW50aWMtbm8tdG9wIHZ1ZXRhYmxlLWZpeGVkLWxheW91dCcsXHJcbiAgICAgICAgICB0YWJsZUhlYWRlckNsYXNzOiAndnVldGFibGUtZml4ZWQtbGF5b3V0J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pblJvd3M6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgc2lsZW50OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbm9EYXRhVGVtcGxhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiAnTm8gRGF0YSBBdmFpbGFibGUnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U29ydEljb25zOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXZlbnRQcmVmaXg6ICd2dWV0YWJsZTonLFxyXG4gICAgICB0YWJsZUZpZWxkczogW10sXHJcbiAgICAgIHRhYmxlRGF0YTogbnVsbCxcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsLFxyXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5pbml0aWFsUGFnZSxcclxuICAgICAgc2VsZWN0ZWRUbzogW10sXHJcbiAgICAgIHZpc2libGVEZXRhaWxSb3dzOiBbXSxcclxuICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uOiAwLFxyXG4gICAgICBzY3JvbGxCYXJXaWR0aDogJzE3cHgnLCAvL2Nocm9tZSBkZWZhdWx0XHJcbiAgICAgIHNjcm9sbFZpc2libGU6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZCAoKSB7XHJcbiAgICB0aGlzLm5vcm1hbGl6ZUZpZWxkcygpXHJcbiAgICB0aGlzLm5vcm1hbGl6ZVNvcnRPcmRlcigpXHJcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsQmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbEJhcldpZHRoKCkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdpbml0aWFsaXplZCcsIHRoaXMudGFibGVGaWVsZHMpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh0aGlzLmxvYWRPblN0YXJ0KSB7XHJcbiAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNGaXhlZEhlYWRlcikge1xyXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xyXG4gICAgICBpZiAoZWxlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3llZCAoKSB7XHJcbiAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xyXG4gICAgaWYgKGVsZW0gIT0gbnVsbCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICB1c2VEZXRhaWxSb3cgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgJiYgdGhpcy50YWJsZURhdGFbMF0gJiYgdGhpcy5kZXRhaWxSb3dDb21wb25lbnQgIT09ICcnICYmIHR5cGVvZiB0aGlzLnRhYmxlRGF0YVswXVt0aGlzLnRyYWNrQnldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gZGVmaW5lIHVuaXF1ZSByb3cgaWRlbnRpZmllciBpbiBvcmRlciBmb3IgZGV0YWlsLXJvdyBmZWF0dXJlIHRvIHdvcmsuIFVzZSBgdHJhY2stYnlgIHByb3AgdG8gZGVmaW5lIG9uZSEnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5kZXRhaWxSb3dDb21wb25lbnQgIT09ICcnXHJcbiAgICB9LFxyXG4gICAgY291bnRWaXNpYmxlRmllbGRzICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLnZpc2libGVcclxuICAgICAgfSkubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgY291bnRUYWJsZURhdGEgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5RW1wdHlEYXRhUm93ICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY291bnRUYWJsZURhdGEgPT09IDAgJiYgdGhpcy5ub0RhdGFUZW1wbGF0ZS5sZW5ndGggPiAwXHJcbiAgICB9LFxyXG4gICAgbGVzc1RoYW5NaW5Sb3dzICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsIHx8IHRoaXMudGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmxlbmd0aCA8IHRoaXMubWluUm93c1xyXG4gICAgfSxcclxuICAgIGJsYW5rUm93cyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCB8fCB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW5Sb3dzXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmxlbmd0aCA+PSB0aGlzLm1pblJvd3MpIHtcclxuICAgICAgICByZXR1cm4gMFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5taW5Sb3dzIC0gdGhpcy50YWJsZURhdGEubGVuZ3RoXHJcbiAgICB9LFxyXG4gICAgaXNBcGlNb2RlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYXBpTW9kZVxyXG4gICAgfSxcclxuICAgIGlzRGF0YU1vZGUgKCkge1xyXG4gICAgICByZXR1cm4gISB0aGlzLmFwaU1vZGVcclxuICAgIH0sXHJcbiAgICBpc0ZpeGVkSGVhZGVyICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVIZWlnaHQgIT0gbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0U2Nyb2xsQmFyV2lkdGggKCkge1xyXG4gICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICBvdXRlci5zdHlsZS53aWR0aCA9ICcxMDBweCc7XHJcblxyXG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuXHJcblxyXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG5cclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoV2l0aG91dFNjcm9sbGJhciA9IG91dGVyLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuXHJcbiAgICAgIGNvbnN0IHdpZHRoV2l0aFNjcm9sbGJhciA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG5cclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG5cclxuXHJcbiAgICAgIHJldHVybiAod2lkdGhXaXRob3V0U2Nyb2xsYmFyIC0gd2lkdGhXaXRoU2Nyb2xsYmFyKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVTY3JvbGwgKGUpIHsgLy9tYWtlIHN1cmUgdGhhdCB0aGUgaGVhZGVyIGFuZCB0aGUgYm9keSBhcmUgYWxpZ25lZCB3aGVuIHNjcm9sbGluZyBob3Jpem9udGFsbHkgb24gYSB0YWJsZSB0aGF0IGlzIHdpZGVyIHRoYW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgIGxldCBob3Jpem9udGFsID0gZS5jdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQ7XHJcbiAgICAgIGlmIChob3Jpem9udGFsICE9IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uKSB7IC8vZG9uJ3QgbW9kaWZ5IGhlYWRlciBzY3JvbGwgaWYgd2UgYXJlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWhlYWQtd3JhcHBlcicpWzBdXHJcbiAgICAgICAgaWYgKGhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICBoZWFkZXIuc2Nyb2xsTGVmdCA9IGhvcml6b250YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gaG9yaXpvbnRhbDtcclxuICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBub3JtYWxpemVGaWVsZHMgKCkge1xyXG4gICAgICBpZiAodHlwZW9mKHRoaXMuZmllbGRzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgXCJmaWVsZHNcIiBwcm9wLicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHMgPSBbXVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IG9ialxyXG4gICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uKGZpZWxkLCBpKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZmllbGQpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWVsZCxcclxuICAgICAgICAgICAgdGl0bGU6IHNlbGYuc2V0VGl0bGUoZmllbGQpLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzOiAnJyxcclxuICAgICAgICAgICAgZGF0YUNsYXNzOiAnJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcclxuICAgICAgICAgICAgd2lkdGg6IGZpZWxkLndpZHRoLFxyXG4gICAgICAgICAgICB0aXRsZTogKGZpZWxkLnRpdGxlID09PSB1bmRlZmluZWQpID8gc2VsZi5zZXRUaXRsZShmaWVsZC5uYW1lKSA6IGZpZWxkLnRpdGxlLFxyXG4gICAgICAgICAgICBzb3J0RmllbGQ6IGZpZWxkLnNvcnRGaWVsZCxcclxuICAgICAgICAgICAgdGl0bGVDbGFzczogKGZpZWxkLnRpdGxlQ2xhc3MgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLnRpdGxlQ2xhc3MsXHJcbiAgICAgICAgICAgIGRhdGFDbGFzczogKGZpZWxkLmRhdGFDbGFzcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQuZGF0YUNsYXNzLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKGZpZWxkLmNhbGxiYWNrID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC5jYWxsYmFjayxcclxuICAgICAgICAgICAgdmlzaWJsZTogKGZpZWxkLnZpc2libGUgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogZmllbGQudmlzaWJsZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi50YWJsZUZpZWxkcy5wdXNoKG9iailcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZXREYXRhIChkYXRhKSB7XHJcbiAgICAgIC8vIHRoaXMuYXBpTW9kZSA9IGZhbHNlXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcclxuXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLmRhdGFQYXRoLCBudWxsKVxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoZGF0YSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcclxuXHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZXRUaXRsZSAoc3RyKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzU3BlY2lhbEZpZWxkKHN0cikpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMudGl0bGVDYXNlKHN0cilcclxuICAgIH0sXHJcbiAgICBnZXRUaXRsZSAoZmllbGQpIHtcclxuICAgICAgaWYgKHR5cGVvZihmaWVsZC50aXRsZSkgPT09ICdmdW5jdGlvbicpIHJldHVybiBmaWVsZC50aXRsZSgpXHJcblxyXG4gICAgICByZXR1cm4gdHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICA/IGZpZWxkLm5hbWUucmVwbGFjZSgnLicsICcgJylcclxuICAgICAgICA6IGZpZWxkLnRpdGxlXHJcbiAgICB9LFxyXG4gICAgcmVuZGVyVGl0bGUgKGZpZWxkKSB7XHJcbiAgICAgIGxldCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoZmllbGQpXHJcblxyXG4gICAgICBpZiAodGl0bGUubGVuZ3RoID4gMCAmJiB0aGlzLmlzSW5DdXJyZW50U29ydEdyb3VwKGZpZWxkKSB8fCB0aGlzLmhhc1NvcnRhYmxlSWNvbihmaWVsZCkpIHtcclxuICAgICAgICBsZXQgc3R5bGUgPSBgb3BhY2l0eToke3RoaXMuc29ydEljb25PcGFjaXR5KGZpZWxkKX07cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6cmlnaHRgXHJcbiAgICAgICAgbGV0IGljb25UYWcgPSB0aGlzLnNob3dTb3J0SWNvbnMgPyB0aGlzLnJlbmRlckljb25UYWcoWydzb3J0LWljb24nLCB0aGlzLnNvcnRJY29uKGZpZWxkKV0sIGBzdHlsZT1cIiR7c3R5bGV9XCJgKSA6ICcnXHJcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgJyAnICsgaWNvblRhZ1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGl0bGVcclxuICAgIH0sXHJcbiAgICByZW5kZXJTZXF1ZW5jZSAoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgPyB0aGlzLnRhYmxlUGFnaW5hdGlvbi5mcm9tICsgaW5kZXhcclxuICAgICAgICA6IGluZGV4XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyTm9ybWFsRmllbGQgKGZpZWxkLCBpdGVtKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhc0NhbGxiYWNrKGZpZWxkKVxyXG4gICAgICAgID8gdGhpcy5jYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXHJcbiAgICAgICAgOiB0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUsICcnKVxyXG4gICAgfSxcclxuICAgIGlzU3BlY2lhbEZpZWxkIChmaWVsZE5hbWUpIHtcclxuICAgICAgcmV0dXJuIGZpZWxkTmFtZS5zbGljZSgwLCAyKSA9PT0gJ19fJ1xyXG4gICAgfSxcclxuICAgIHRpdGxlQ2FzZSAoc3RyKSB7XHJcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3Ky9nLCBmdW5jdGlvbih0eHQpIHtcclxuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2FtZWxDYXNlIChzdHIsIGRlbGltaXRlciA9ICdfJykge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgcmV0dXJuIHN0ci5zcGxpdChkZWxpbWl0ZXIpLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYudGl0bGVDYXNlKGl0ZW0pXHJcbiAgICAgIH0pLmpvaW4oJycpXHJcbiAgICB9LFxyXG4gICAgbm90SW4gKHN0ciwgYXJyKSB7XHJcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihzdHIpID09PSAtMVxyXG4gICAgfSxcclxuICAgIGxvYWREYXRhIChzdWNjZXNzID0gdGhpcy5sb2FkU3VjY2VzcywgZmFpbGVkID0gdGhpcy5sb2FkRmFpbGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzRGF0YU1vZGUpIHtcclxuICAgICAgICB0aGlzLmNhbGxEYXRhTWFuYWdlcigpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcclxuXHJcbiAgICAgIHRoaXMuaHR0cE9wdGlvbnNbJ3BhcmFtcyddID0gdGhpcy5nZXRBcHBlbmRQYXJhbXMoIHRoaXMuZ2V0QWxsUXVlcnlQYXJhbXMoKSApXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mZXRjaCh0aGlzLmFwaVVybCwgdGhpcy5odHRwT3B0aW9ucykudGhlbihcclxuICAgICAgICAgIHN1Y2Nlc3MsXHJcbiAgICAgICAgICBmYWlsZWRcclxuICAgICAgKS5jYXRjaCgoKSA9PiBmYWlsZWQoKSlcclxuICAgIH0sXHJcbiAgICBmZXRjaCAoYXBpVXJsLCBodHRwT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwRmV0Y2hcclxuICAgICAgICAgID8gdGhpcy5odHRwRmV0Y2goYXBpVXJsLCBodHRwT3B0aW9ucylcclxuICAgICAgICAgIDogYXhpb3NbdGhpcy5odHRwTWV0aG9kXShhcGlVcmwsIGh0dHBPcHRpb25zKVxyXG4gICAgfSxcclxuICAgIGxvYWRTdWNjZXNzIChyZXNwb25zZSkge1xyXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZC1zdWNjZXNzJywgcmVzcG9uc2UpXHJcblxyXG4gICAgICBsZXQgYm9keSA9IHRoaXMudHJhbnNmb3JtKHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5kYXRhUGF0aCwgbnVsbClcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0aGlzLmdldE9iamVjdFZhbHVlKGJvZHksIHRoaXMucGFnaW5hdGlvblBhdGgsIG51bGwpXHJcblxyXG4gICAgICBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ3Z1ZXRhYmxlOiBwYWdpbmF0aW9uLXBhdGggXCInICsgdGhpcy5wYWdpbmF0aW9uUGF0aCArICdcIiBub3QgZm91bmQuICdcclxuICAgICAgICAgICsgJ0l0IGxvb2tzIGxpa2UgdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgc2V2ZXIgZG9lcyBub3QgaGF2ZSBwYWdpbmF0aW9uIGluZm9ybWF0aW9uICdcclxuICAgICAgICAgICsgXCJvciB5b3UgbWF5IGhhdmUgc2V0IGl0IGluY29ycmVjdGx5LlxcblwiXHJcbiAgICAgICAgICArICdZb3UgY2FuIGV4cGxpY2l0bHkgc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGJ5IHNldHRpbmcgcGFnaW5hdGlvbi1wYXRoPVwiXCIuJ1xyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5maXhIZWFkZXIoKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcclxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBmaXhIZWFkZXIoKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdXHJcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcclxuICAgICAgICBpZiAoZWxlbS5zY3JvbGxIZWlnaHQgPiBlbGVtLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2FkRmFpbGVkIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdsb2FkLWVycm9yJywgcmVzcG9uc2UpXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkLWVycm9yJywgcmVzcG9uc2UpXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybSAoZGF0YSkge1xyXG4gICAgICBsZXQgZnVuYyA9ICd0cmFuc2Zvcm0nXHJcblxyXG4gICAgICBpZiAodGhpcy5wYXJlbnRGdW5jdGlvbkV4aXN0cyhmdW5jKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgZGF0YSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH0sXHJcbiAgICBwYXJlbnRGdW5jdGlvbkV4aXN0cyAoZnVuYykge1xyXG4gICAgICByZXR1cm4gKGZ1bmMgIT09ICcnICYmIHR5cGVvZiB0aGlzLiRwYXJlbnRbZnVuY10gPT09ICdmdW5jdGlvbicpXHJcbiAgICB9LFxyXG4gICAgY2FsbFBhcmVudEZ1bmN0aW9uIChmdW5jLCBhcmdzLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEZ1bmN0aW9uRXhpc3RzKGZ1bmMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgYXJncylcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgfSxcclxuICAgIGZpcmVFdmVudCAoZXZlbnROYW1lLCBhcmdzKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArIGV2ZW50TmFtZSwgYXJncylcclxuICAgIH0sXHJcbiAgICB3YXJuIChtc2cpIHtcclxuICAgICAgaWYgKCF0aGlzLnNpbGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihtc2cpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRBbGxRdWVyeVBhcmFtcyAoKSB7XHJcbiAgICAgIGxldCBwYXJhbXMgPSB7fVxyXG5cclxuICAgICAgaWYgKHR5cGVvZih0aGlzLnF1ZXJ5UGFyYW1zKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbXModGhpcy5zb3J0T3JkZXIsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGVyUGFnZSlcclxuICAgICAgICByZXR1cm4gdHlwZW9mKHBhcmFtcykgIT09ICdvYmplY3QnID8ge30gOiBwYXJhbXNcclxuICAgICAgfVxyXG5cclxuICAgICAgcGFyYW1zW3RoaXMucXVlcnlQYXJhbXMuc29ydF0gPSB0aGlzLmdldFNvcnRQYXJhbSgpXHJcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBhZ2VdID0gdGhpcy5jdXJyZW50UGFnZVxyXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5wZXJQYWdlXSA9IHRoaXMucGVyUGFnZVxyXG5cclxuICAgICAgcmV0dXJuIHBhcmFtc1xyXG4gICAgfSxcclxuICAgIGdldFNvcnRQYXJhbSAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5zb3J0T3JkZXIgfHwgdGhpcy5zb3J0T3JkZXIuZmllbGQgPT0gJycpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRwYXJlbnRbJ2dldFNvcnRQYXJhbSddID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFsnZ2V0U29ydFBhcmFtJ10uY2FsbCh0aGlzLiRwYXJlbnQsIHRoaXMuc29ydE9yZGVyKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0U29ydFBhcmFtKClcclxuICAgIH0sXHJcbiAgICBnZXREZWZhdWx0U29ydFBhcmFtICgpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAodHlwZW9mIHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZCA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICA/IHRoaXMuc29ydE9yZGVyW2ldLmZpZWxkXHJcbiAgICAgICAgICA6IHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZDtcclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IGZpZWxkTmFtZSArICd8JyArIHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiArICgoaSsxKSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aCA/ICcsJyA6ICcnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnZ2V0RGVmYXVsdFNvcnRQYXJhbTogJywgcmVzdWx0KVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIGdldEFwcGVuZFBhcmFtcyAocGFyYW1zKSB7XHJcbiAgICAgIGZvciAobGV0IHggaW4gdGhpcy5hcHBlbmRQYXJhbXMpIHtcclxuICAgICAgICBwYXJhbXNbeF0gPSB0aGlzLmFwcGVuZFBhcmFtc1t4XVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICB9LFxyXG4gICAgZXh0cmFjdE5hbWUgKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMF0udHJpbSgpXHJcbiAgICB9LFxyXG4gICAgZXh0cmFjdEFyZ3MgKHN0cmluZykge1xyXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMV1cclxuICAgIH0sXHJcbiAgICBpc1NvcnRhYmxlIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gISh0eXBlb2YgZmllbGQuc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcclxuICAgIH0sXHJcbiAgICBpc0luQ3VycmVudFNvcnRHcm91cCAoZmllbGQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKSAhPT0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgaGFzU29ydGFibGVJY29uIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSAmJiB0aGlzLmNzcy5zb3J0YWJsZUljb24gIT0gJydcclxuICAgIH0sXHJcbiAgICBjdXJyZW50U29ydE9yZGVyUG9zaXRpb24gKGZpZWxkKSB7XHJcbiAgICAgIGlmICggISB0aGlzLmlzU29ydGFibGUoZmllbGQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0T3JkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgaSkpIHtcclxuICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uIChmaWVsZCwgaSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zb3J0T3JkZXJbaV0uZmllbGQgPT09IGZpZWxkLm5hbWUgJiYgdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkID09PSBmaWVsZC5zb3J0RmllbGRcclxuICAgIH0sXHJcbiAgICBvcmRlckJ5IChmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkgKSByZXR1cm5cclxuXHJcbiAgICAgIGxldCBrZXkgPSB0aGlzLm11bHRpU29ydEtleS50b0xvd2VyQ2FzZSgpICsgJ0tleSdcclxuXHJcbiAgICAgIGlmICh0aGlzLm11bHRpU29ydCAmJiBldmVudFtrZXldKSB7IC8vYWRkaW5nIGNvbHVtbiB0byBtdWx0aXNvcnRcclxuICAgICAgICB0aGlzLm11bHRpQ29sdW1uU29ydChmaWVsZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL25vIG11bHRpc29ydCwgb3IgcmVzZXR0aW5nIHNvcnRcclxuICAgICAgICB0aGlzLnNpbmdsZUNvbHVtblNvcnQoZmllbGQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxICAgIC8vIHJlc2V0IHBhZ2UgaW5kZXhcclxuICAgICAgaWYgKHRoaXMuYXBpTW9kZSB8fCB0aGlzLmRhdGFNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtdWx0aUNvbHVtblNvcnQgKGZpZWxkKSB7XHJcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpO1xyXG5cclxuICAgICAgaWYoaSA9PT0gZmFsc2UpIHsgLy90aGlzIGZpZWxkIGlzIG5vdCBpbiB0aGUgc29ydCBhcnJheSB5ZXRcclxuICAgICAgICB0aGlzLnNvcnRPcmRlci5wdXNoKHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgICAgc29ydEZpZWxkOiBmaWVsZC5zb3J0RmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vdGhpcyBmaWVsZCBpcyBpbiB0aGUgc29ydCBhcnJheSwgbm93IHdlIGNoYW5nZSBpdHMgc3RhdGVcclxuICAgICAgICBpZih0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XHJcbiAgICAgICAgICAvLyBzd2l0Y2ggZGlyZWN0aW9uXHJcbiAgICAgICAgICB0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPSAnZGVzYydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9yZW1vdmUgc29ydCBjb25kaXRpb25cclxuICAgICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaW5nbGVDb2x1bW5Tb3J0IChmaWVsZCkge1xyXG4gICAgICBpZiAodGhpcy5zb3J0T3JkZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhclNvcnRPcmRlcigpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTsgLy9yZW1vdmVzIGFkZGl0aW9uYWwgY29sdW1uc1xyXG5cclxuICAgICAgaWYgKHRoaXMuZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24oZmllbGQsIDApKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIHNvcnQgZGlyZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID0gdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVzZXQgc29ydCBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSAnYXNjJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmZpZWxkID0gZmllbGQubmFtZVxyXG4gICAgICB0aGlzLnNvcnRPcmRlclswXS5zb3J0RmllbGQgPSBmaWVsZC5zb3J0RmllbGRcclxuICAgIH0sXHJcbiAgICBjbGVhclNvcnRPcmRlciAoKSB7XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xyXG4gICAgICAgIGZpZWxkOiAnJyxcclxuICAgICAgICBzb3J0RmllbGQ6ICcnLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ2FzYydcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc29ydENsYXNzIChmaWVsZCkge1xyXG4gICAgICBsZXQgY2xzID0gJydcclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcclxuXHJcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nQ2xhc3MgOiB0aGlzLmNzcy5kZXNjZW5kaW5nQ2xhc3NcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsc1xyXG4gICAgfSxcclxuICAgIHNvcnRJY29uIChmaWVsZCkge1xyXG4gICAgICBsZXQgY2xzID0gdGhpcy5jc3Muc29ydGFibGVJY29uXHJcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXHJcblxyXG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBjbHMgPSAodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09ICdhc2MnKSA/IHRoaXMuY3NzLmFzY2VuZGluZ0ljb24gOiB0aGlzLmNzcy5kZXNjZW5kaW5nSWNvblxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xzO1xyXG4gICAgfSxcclxuICAgIHNvcnRJY29uT3BhY2l0eSAoZmllbGQpIHtcclxuICAgICAgLypcclxuICAgICAgICogZmllbGRzIHdpdGggc3Ryb25nZXIgcHJlY2VkZW5jZSBoYXZlIGRhcmtlciBjb2xvclxyXG4gICAgICAgKlxyXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgZmV3IGZpZWxkcywgd2UgZ28gZG93biBieSAwLjNcclxuICAgICAgICogZXguIDIgZmllbGRzIGFyZSBzZWxlY3RlZDogMS4wLCAwLjdcclxuICAgICAgICpcclxuICAgICAgICogaWYgdGhlcmUgYXJlIG1vcmUgd2UgZ28gZG93biBldmVubHkgb24gdGhlIGdpdmVuIHNwZWN0cnVtXHJcbiAgICAgICAqIGV4LiA2IGZpZWxkcyBhcmUgc2VsZWN0ZWQ6IDEuMCwgMC44NiwgMC43MiwgMC41OCwgMC40NCwgMC4zXHJcbiAgICAgICAqL1xyXG4gICAgICBsZXQgbWF4ID0gMS4wLFxyXG4gICAgICAgICAgbWluID0gMC4zLFxyXG4gICAgICAgICAgc3RlcCA9IDAuM1xyXG5cclxuICAgICAgbGV0IGNvdW50ID0gdGhpcy5zb3J0T3JkZXIubGVuZ3RoO1xyXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxyXG5cclxuXHJcbiAgICAgIGlmKG1heCAtIGNvdW50ICogc3RlcCA8IG1pbikge1xyXG4gICAgICAgIHN0ZXAgPSAobWF4IC0gbWluKSAvIChjb3VudC0xKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgb3BhY2l0eSA9IG1heCAtIGN1cnJlbnQgKiBzdGVwXHJcblxyXG4gICAgICByZXR1cm4gb3BhY2l0eVxyXG4gICAgfSxcclxuICAgIGhhc0NhbGxiYWNrIChpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmNhbGxiYWNrID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2FsbENhbGxiYWNrIChmaWVsZCwgaXRlbSkge1xyXG4gICAgICBpZiAoICEgdGhpcy5oYXNDYWxsYmFjayhmaWVsZCkpIHJldHVyblxyXG5cclxuICAgICAgaWYodHlwZW9mKGZpZWxkLmNhbGxiYWNrKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICByZXR1cm4gZmllbGQuY2FsbGJhY2sodGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGFyZ3MgPSBmaWVsZC5jYWxsYmFjay5zcGxpdCgnfCcpXHJcbiAgICAgIGxldCBmdW5jID0gYXJncy5zaGlmdCgpXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChhcmdzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICA/IHRoaXMuJHBhcmVudFtmdW5jXS5hcHBseSh0aGlzLiRwYXJlbnQsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKVxyXG4gICAgICAgICAgOiB0aGlzLiRwYXJlbnRbZnVuY10uY2FsbCh0aGlzLiRwYXJlbnQsIHZhbHVlKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSxcclxuICAgIGdldE9iamVjdFZhbHVlIChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICBkZWZhdWx0VmFsdWUgPSAodHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpID8gbnVsbCA6IGRlZmF1bHRWYWx1ZVxyXG5cclxuICAgICAgbGV0IG9iaiA9IG9iamVjdFxyXG4gICAgICBpZiAocGF0aC50cmltKCkgIT0gJycpIHtcclxuICAgICAgICBsZXQga2V5cyA9IHBhdGguc3BsaXQoJy4nKVxyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgIGlmIChvYmogIT09IG51bGwgJiYgdHlwZW9mIG9ialtrZXldICE9PSAndW5kZWZpbmVkJyAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvYmogPSBvYmpba2V5XVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9ialxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUNoZWNrYm94IChkYXRhSXRlbSwgZmllbGROYW1lLCBldmVudCkge1xyXG4gICAgICBsZXQgaXNDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcblxyXG4gICAgICBpZiAoZGF0YUl0ZW1baWRDb2x1bW5dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLndhcm4oJ19fY2hlY2tib3ggZmllbGQ6IFRoZSBcIicrdGhpcy50cmFja0J5KydcIiBmaWVsZCBkb2VzIG5vdCBleGlzdCEgTWFrZSBzdXJlIHRoZSBmaWVsZCB5b3Ugc3BlY2lmeSBpbiBcInRyYWNrLWJ5XCIgcHJvcCBkb2VzIGV4aXN0LicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBrZXkgPSBkYXRhSXRlbVtpZENvbHVtbl1cclxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SWQoa2V5KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudW5zZWxlY3RJZChrZXkpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy4kZW1pdCgndnVldGFibGU6Y2hlY2tib3gtdG9nZ2xlZCcsIGlzQ2hlY2tlZCwgZGF0YUl0ZW0pXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0SWQgKGtleSkge1xyXG4gICAgICBpZiAoICEgdGhpcy5pc1NlbGVjdGVkUm93KGtleSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVG8ucHVzaChrZXkpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1bnNlbGVjdElkIChrZXkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFRvID0gdGhpcy5zZWxlY3RlZFRvLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGtleVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGlzU2VsZWN0ZWRSb3cgKGtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRvLmluZGV4T2Yoa2V5KSA+PSAwXHJcbiAgICB9LFxyXG4gICAgcm93U2VsZWN0ZWQgKGRhdGFJdGVtLCBmaWVsZE5hbWUpe1xyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaXNTZWxlY3RlZFJvdyhrZXkpXHJcbiAgICB9LFxyXG4gICAgY2hlY2tDaGVja2JveGVzU3RhdGUgKGZpZWxkTmFtZSkge1xyXG4gICAgICBpZiAoISB0aGlzLnRhYmxlRGF0YSkgcmV0dXJuXHJcblxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XHJcbiAgICAgIGxldCBzZWxlY3RvciA9ICd0aC52dWV0YWJsZS10aC1jaGVja2JveC0nICsgaWRDb2x1bW4gKyAnIGlucHV0W3R5cGU9Y2hlY2tib3hdJ1xyXG4gICAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcclxuXHJcbiAgICAgIC8vZml4ZWQ6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCByZXR1cm4gdGhlIHR5cGVvZiBub2RlTGlzdCBub3QgYXJyYXlcclxuICAgICAgaWYgKGVscy5mb3JFYWNoPT09dW5kZWZpbmVkKVxyXG4gICAgICAgIGVscy5mb3JFYWNoPWZ1bmN0aW9uKGNiKXtcclxuICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbHMsIGNiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAvLyBjb3VudCBob3cgbWFueSBjaGVja2JveCByb3cgaW4gdGhlIGN1cnJlbnQgcGFnZSBoYXMgYmVlbiBjaGVja2VkXHJcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuc2VsZWN0ZWRUby5pbmRleE9mKGl0ZW1baWRDb2x1bW5dKSA+PSAwXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBjb3VudCA9PSAwLCBjbGVhciB0aGUgY2hlY2tib3hcclxuICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgLy8gY291bnQgPiAwIGFuZCBjb3VudCA8IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnaW5kZXRlcm1pbmF0ZSdcclxuICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQubGVuZ3RoIDwgdGhpcy5wZXJQYWdlKSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvdW50ID09IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnY2hlY2tlZCdcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUFsbENoZWNrYm94ZXMgKGZpZWxkTmFtZSwgZXZlbnQpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuXHJcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGFJdGVtKSB7XHJcbiAgICAgICAgICBzZWxmLnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YUl0ZW0pIHtcclxuICAgICAgICAgIHNlbGYudW5zZWxlY3RJZChkYXRhSXRlbVtpZENvbHVtbl0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCd2dWV0YWJsZTpjaGVja2JveC10b2dnbGVkLWFsbCcsIGlzQ2hlY2tlZClcclxuICAgIH0sXHJcbiAgICBnb3RvUHJldmlvdXNQYWdlICgpIHtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZS0tXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb3RvTmV4dFBhZ2UgKCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ290b1BhZ2UgKHBhZ2UpIHtcclxuICAgICAgaWYgKHBhZ2UgIT0gdGhpcy5jdXJyZW50UGFnZSAmJiAocGFnZSA+IDAgJiYgcGFnZSA8PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UpKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VcclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzVmlzaWJsZURldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaWJsZURldGFpbFJvd3MuaW5kZXhPZiggcm93SWQgKSA+PSAwXHJcbiAgICB9LFxyXG4gICAgc2hvd0RldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnB1c2gocm93SWQpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAodGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5zcGxpY2UoXHJcbiAgICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLmluZGV4T2Yocm93SWQpLFxyXG4gICAgICAgICAgMVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZURldGFpbFJvdyAocm93SWQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xyXG4gICAgICAgIHRoaXMuaGlkZURldGFpbFJvdyhyb3dJZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxSb3cocm93SWQpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93RmllbGQgKGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGhpZGVGaWVsZCAoaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGUgPSBmYWxzZVxyXG4gICAgfSxcclxuICAgIHRvZ2dsZUZpZWxkIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy50YWJsZUZpZWxkcy5sZW5ndGgpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9ICEgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZVxyXG4gICAgfSxcclxuICAgIHJlbmRlckljb25UYWcgKGNsYXNzZXMsIG9wdGlvbnMgPSAnJykge1xyXG4gICAgICByZXR1cm4gdHlwZW9mKHRoaXMuY3NzLnJlbmRlckljb24pID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gYDxpIGNsYXNzPVwiJHtjbGFzc2VzLmpvaW4oJyAnKX1cIiAke29wdGlvbnN9PjwvaT5gXHJcbiAgICAgICAgOiB0aGlzLmNzcy5yZW5kZXJJY29uKGNsYXNzZXMsIG9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgbWFrZVBhZ2luYXRpb24gKHRvdGFsID0gbnVsbCwgcGVyUGFnZSA9IG51bGwsIGN1cnJlbnRQYWdlID0gbnVsbCkge1xyXG4gICAgICBsZXQgcGFnaW5hdGlvbiA9IHt9XHJcbiAgICAgIHRvdGFsID0gdG90YWwgPT09IG51bGwgPyB0aGlzLmRhdGFUb3RhbCA6IHRvdGFsXHJcbiAgICAgIHBlclBhZ2UgPSBwZXJQYWdlID09PSBudWxsID8gdGhpcy5wZXJQYWdlIDogcGVyUGFnZVxyXG4gICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID09PSBudWxsID8gdGhpcy5jdXJyZW50UGFnZSA6IGN1cnJlbnRQYWdlXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICd0b3RhbCc6IHRvdGFsLFxyXG4gICAgICAgICdwZXJfcGFnZSc6IHBlclBhZ2UsXHJcbiAgICAgICAgJ2N1cnJlbnRfcGFnZSc6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgICdsYXN0X3BhZ2UnOiBNYXRoLmNlaWwodG90YWwgLyBwZXJQYWdlKSB8fCAwLFxyXG4gICAgICAgICduZXh0X3BhZ2VfdXJsJzogJycsXHJcbiAgICAgICAgJ3ByZXZfcGFnZV91cmwnOiAnJyxcclxuICAgICAgICAnZnJvbSc6IChjdXJyZW50UGFnZSAtMSkgKiBwZXJQYWdlICsxLFxyXG4gICAgICAgICd0byc6IE1hdGgubWluKGN1cnJlbnRQYWdlICogcGVyUGFnZSwgdG90YWwpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBub3JtYWxpemVTb3J0T3JkZXIgKCkge1xyXG4gICAgICB0aGlzLnNvcnRPcmRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLnNvcnRGaWVsZCA9IGl0ZW0uc29ydEZpZWxkIHx8IGl0ZW0uZmllbGRcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjYWxsRGF0YU1hbmFnZXIgKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhTWFuYWdlciA9PT0gbnVsbCAmJiB0aGlzLmRhdGEgPT09IG51bGwpIHJldHVyblxyXG5cclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5kYXRhKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIG1vZGU6IGFycmF5JylcclxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5kYXRhKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubm9ybWFsaXplU29ydE9yZGVyKClcclxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5kYXRhTWFuYWdlcih0aGlzLnNvcnRPcmRlciwgdGhpcy5tYWtlUGFnaW5hdGlvbigpKSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uUm93Q2xhc3MgKGRhdGFJdGVtLCBpbmRleCkge1xyXG4gICAgICBpZiAodGhpcy5yb3dDbGFzc0NhbGxiYWNrICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMud2FybignXCJyb3ctY2xhc3MtY2FsbGJhY2tcIiBwcm9wIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJyb3ctY2xhc3NcIiBwcm9wIGluc3RlYWQuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZih0aGlzLnJvd0NsYXNzKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvd0NsYXNzKGRhdGFJdGVtLCBpbmRleClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucm93Q2xhc3NcclxuICAgIH0sXHJcbiAgICBvblJvd0NoYW5nZWQgKGRhdGFJdGVtKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdyb3ctY2hhbmdlZCcsIGRhdGFJdGVtKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuICAgIG9uUm93Q2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0sXHJcbiAgICBvblJvd0RvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAncm93LWRibGNsaWNrZWQnLCBkYXRhSXRlbSwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25EZXRhaWxSb3dDbGljayAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdkZXRhaWwtcm93LWNsaWNrZWQnLCBkYXRhSXRlbSwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25DZWxsQ2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1jbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkNlbGxEb3VibGVDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLWRibGNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uQ2VsbFJpZ2h0Q2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1yaWdodGNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAgKiBBUEkgZm9yIGV4dGVybmFsc1xyXG4gICAgICovXHJcbiAgICBjaGFuZ2VQYWdlIChwYWdlKSB7XHJcbiAgICAgIGlmIChwYWdlID09PSAncHJldicpIHtcclxuICAgICAgICB0aGlzLmdvdG9QcmV2aW91c1BhZ2UoKVxyXG4gICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xyXG4gICAgICAgIHRoaXMuZ290b05leHRQYWdlKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdvdG9QYWdlKHBhZ2UpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWxvYWQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9LFxyXG4gICAgcmVmcmVzaCAoKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxXHJcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IG51bGxcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSBudWxsXHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdkYXRhLXJlc2V0JylcclxuICAgIH1cclxuICB9LCAvLyBlbmQ6IG1ldGhvZHNcclxuICB3YXRjaDoge1xyXG4gICAgJ211bHRpU29ydCcgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmIChuZXdWYWwgPT09IGZhbHNlICYmIHRoaXMuc29ydE9yZGVyLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoMSk7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2FwaVVybCcgIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICBpZih0aGlzLnJlYWN0aXZlQXBpVXJsICYmIG5ld1ZhbCAhPT0gb2xkVmFsKVxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9LFxyXG4gICAgJ2RhdGEnIChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgICB0aGlzLnNldERhdGEobmV3VmFsKVxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIFt2LWNsb2FrXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudnVldGFibGUgdGguc29ydGFibGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyMTg1ZDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1ib2R5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdy15OmF1dG87XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1oZWFkLXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuICAudnVldGFibGUtYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1wYWdpbmF0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWZhZmIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWVtcHR5LXJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1jbGlwLXRleHQge1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1zZW1hbnRpYy1uby10b3Age1xyXG4gICAgYm9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWZpeGVkLWxheW91dCB7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIH1cclxuICAudnVldGFibGUtZ3V0dGVyLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAgIWltcG9ydGFudDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiB2LXNob3c9XCJ0YWJsZVBhZ2luYXRpb24gJiYgdGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSA+IDFcIiA6Y2xhc3M9XCJjc3Mud3JhcHBlckNsYXNzXCI+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSgxKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25GaXJzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMuZmlyc3QgIT0gJydcIiA6Y2xhc3M9XCJbY3NzLmljb25zLmZpcnN0XVwiPjwvaT5cclxuICAgICAgICA8c3BhbiB2LWVsc2U+JmxhcXVvOzwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKCdwcmV2JylcIlxyXG4gICAgICA6Y2xhc3M9XCJbJ2J0bi1uYXYnLCBjc3MubGlua0NsYXNzLCBpc09uRmlyc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgICA8aSB2LWlmPVwiY3NzLmljb25zLm5leHQgIT0gJydcIiA6Y2xhc3M9XCJbY3NzLmljb25zLnByZXZdXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIHYtZWxzZT4mbmJzcDsmbHNhcXVvOzwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwibm90RW5vdWdoUGFnZXNcIj5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwibiBpbiB0b3RhbFBhZ2VcIj5cclxuICAgICAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZShuKVwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbY3NzLnBhZ2VDbGFzcywgaXNDdXJyZW50UGFnZShuKSA/IGNzcy5hY3RpdmVDbGFzcyA6ICcnXVwiXHJcbiAgICAgICAgICB2LWh0bWw9XCJuXCI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIm4gaW4gd2luZG93U2l6ZVwiPlxyXG4gICAgICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKHdpbmRvd1N0YXJ0K24tMSlcIlxyXG4gICAgICAgICAgOmNsYXNzPVwiW2Nzcy5wYWdlQ2xhc3MsIGlzQ3VycmVudFBhZ2Uod2luZG93U3RhcnQrbi0xKSA/IGNzcy5hY3RpdmVDbGFzcyA6ICcnXVwiXHJcbiAgICAgICAgICB2LWh0bWw9XCJ3aW5kb3dTdGFydCtuLTFcIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UoJ25leHQnKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25MYXN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubmV4dCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMubmV4dF1cIj48L2k+XHJcbiAgICAgIDxzcGFuIHYtZWxzZT4mcnNhcXVvOyZuYnNwOzwvc3Bhbj5cclxuICAgIDwvYT5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKHRvdGFsUGFnZSlcIlxyXG4gICAgICA6Y2xhc3M9XCJbJ2J0bi1uYXYnLCBjc3MubGlua0NsYXNzLCBpc09uTGFzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICA8aSB2LWlmPVwiY3NzLmljb25zLmxhc3QgIT0gJydcIiA6Y2xhc3M9XCJbY3NzLmljb25zLmxhc3RdXCI+PC9pPlxyXG4gICAgICA8c3BhbiB2LWVsc2U+JnJhcXVvOzwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBQYWdpbmF0aW9uTWl4aW4gZnJvbSAnLi9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWl4aW5zOiBbUGFnaW5hdGlvbk1peGluXSxcclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXBhZ2luYXRpb24taW5mbycsIGNzcy5pbmZvQ2xhc3NdXCJcclxuICAgIHYtaHRtbD1cInBhZ2luYXRpb25JbmZvXCI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUGFnaW5hdGlvbkluZm9NaXhpbiBmcm9tICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWl4aW5zOiBbUGFnaW5hdGlvbkluZm9NaXhpbl0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZSIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5mb0NsYXNzOiAnbGVmdCBmbG9hdGVkIGxlZnQgYWxpZ25lZCBzaXggd2lkZSBjb2x1bW4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5mb1RlbXBsYXRlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdCgpIHtcclxuICAgICAgICByZXR1cm4gXCJEaXNwbGF5aW5nIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gaXRlbXNcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbm9EYXRhVGVtcGxhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiAnTm8gcmVsZXZhbnQgZGF0YSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcGFnaW5hdGlvbkluZm8gKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24gPT0gbnVsbCB8fCB0aGlzLnRhYmxlUGFnaW5hdGlvbi50b3RhbCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9EYXRhVGVtcGxhdGVcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuaW5mb1RlbXBsYXRlXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tmcm9tfScsIHRoaXMudGFibGVQYWdpbmF0aW9uLmZyb20gfHwgMClcclxuICAgICAgICAucmVwbGFjZSgne3RvfScsIHRoaXMudGFibGVQYWdpbmF0aW9uLnRvIHx8IDApXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t0b3RhbH0nLCB0aGlzLnRhYmxlUGFnaW5hdGlvbi50b3RhbCB8fCAwKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldFBhZ2luYXRpb25EYXRhICh0YWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0YWJsZVBhZ2luYXRpb25cclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZSIsIjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHdyYXBwZXJDbGFzczogJ3VpIHJpZ2h0IGZsb2F0ZWQgcGFnaW5hdGlvbiBtZW51JyxcclxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlIGxhcmdlJyxcclxuICAgICAgICAgIGRpc2FibGVkQ2xhc3M6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgICBwYWdlQ2xhc3M6ICdpdGVtJyxcclxuICAgICAgICAgIGxpbmtDbGFzczogJ2ljb24gaXRlbScsXHJcbiAgICAgICAgICBwYWdpbmF0aW9uQ2xhc3M6ICd1aSBib3R0b20gYXR0YWNoZWQgc2VnbWVudCBncmlkJyxcclxuICAgICAgICAgIHBhZ2luYXRpb25JbmZvQ2xhc3M6ICdsZWZ0IGZsb2F0ZWQgbGVmdCBhbGlnbmVkIHNpeCB3aWRlIGNvbHVtbicsXHJcbiAgICAgICAgICBkcm9wZG93bkNsYXNzOiAndWkgc2VhcmNoIGRyb3Bkb3duJyxcclxuICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgIGZpcnN0OiAnYW5nbGUgZG91YmxlIGxlZnQgaWNvbicsXHJcbiAgICAgICAgICAgIHByZXY6ICdsZWZ0IGNoZXZyb24gaWNvbicsXHJcbiAgICAgICAgICAgIG5leHQ6ICdyaWdodCBjaGV2cm9uIGljb24nLFxyXG4gICAgICAgICAgICBsYXN0OiAnYW5nbGUgZG91YmxlIHJpZ2h0IGljb24nLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRWFjaFNpZGU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gMlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudFByZWZpeDogJ3Z1ZXRhYmxlLXBhZ2luYXRpb246JyxcclxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdG90YWxQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyAwXHJcbiAgICAgICAgOiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2VcclxuICAgIH0sXHJcbiAgICBpc09uRmlyc3RQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSAxXHJcbiAgICB9LFxyXG4gICAgaXNPbkxhc3RQYWdlICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uID09PSBudWxsXHJcbiAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgIDogdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlID09PSB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2VcclxuICAgIH0sXHJcbiAgICBub3RFbm91Z2hQYWdlcyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvdGFsUGFnZSA8ICh0aGlzLm9uRWFjaFNpZGUgKiAyKSArIDRcclxuICAgIH0sXHJcbiAgICB3aW5kb3dTaXplICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25FYWNoU2lkZSAqIDIgKzE7XHJcbiAgICB9LFxyXG4gICAgd2luZG93U3RhcnQgKCkge1xyXG4gICAgICBpZiAoIXRoaXMudGFibGVQYWdpbmF0aW9uIHx8IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA8PSB0aGlzLm9uRWFjaFNpZGUpIHtcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSA+PSAodGhpcy50b3RhbFBhZ2UgLSB0aGlzLm9uRWFjaFNpZGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxQYWdlIC0gdGhpcy5vbkVhY2hTaWRlKjJcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSAtIHRoaXMub25FYWNoU2lkZVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvYWRQYWdlIChwYWdlKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCsnY2hhbmdlLXBhZ2UnLCBwYWdlKVxyXG4gICAgfSxcclxuICAgIGlzQ3VycmVudFBhZ2UgKHBhZ2UpIHtcclxuICAgICAgcmV0dXJuIHBhZ2UgPT09IHRoaXMudGFibGVQYWdpbmF0aW9uLmN1cnJlbnRfcGFnZVxyXG4gICAgfSxcclxuICAgIHNldFBhZ2luYXRpb25EYXRhICh0YWJsZVBhZ2luYXRpb24pIHtcclxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSB0YWJsZVBhZ2luYXRpb25cclxuICAgIH0sXHJcbiAgICByZXNldERhdGEgKCkge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUiLCI8dGVtcGxhdGU+XG4gICAgPHNwYW4+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgdi1vbjpjbGljaz1cImNsaWNrSGFuZGxlcihkZWxldGVVcmwpXCIgXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4teHMgcmVkXCJcbiAgICAgICAgICAgIHYtc2hvdz1cInNob3dCdXR0b25cIlxuICAgICAgICAgICAgdi1odG1sPVwiZGVsZXRlTGFiZWxcIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlU3dlZXRBbGVydCBmcm9tICd2dWUtc3dlZXRhbGVydCc7XG5WdWUudXNlKFZ1ZVN3ZWV0QWxlcnQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsncHJvcHNQZXJtaXNzaW9uJywncHJvcHNEZWxldGVVcmwnLCdwcm9wc0xhYmVsJywncHJvcHNBbGVydExhYmVsJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dCdXR0b246IHRoaXMucHJvcHNQZXJtaXNzaW9uLFxuICAgICAgICAgICAgZGVsZXRlVXJsOiB0aGlzLnByb3BzRGVsZXRlVXJsLFxuICAgICAgICAgICAgZGVsZXRlTGFiZWw6IHRoaXMucHJvcHNMYWJlbCxcbiAgICAgICAgICAgIGFsZXJ0TGFiZWw6IHRoaXMucHJvcHNBbGVydExhYmVsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBjbGlja0hhbmRsZXIodXJsKSB7XG4gICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcbiAgICAgICAgICAgIGJhc2UuJHN3YWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBiYXNlLmFsZXJ0TGFiZWwudGl0bGUsXG4gICAgICAgICAgICAgICAgdGV4dDogYmFzZS5hbGVydExhYmVsLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGJhc2UuYWxlcnRMYWJlbC5idXR0b25ZZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogYmFzZS5hbGVydExhYmVsLmJ1dHRvbk5vXG4gICAgICAgICAgICB9KS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh1cmwsIHt9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG93Tm90aWZpY2F0aW9uKCdhbGVydC0nK3Jlc3BvbnNlLmRhdGEuZmxhc2gsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLiRyb290LiRlbWl0KCdyZWZyZXNoLWxpc3QtZXZlbnQnLDEpOyAvLyBPcGVuIENyZWF0ZSBwYW5lbCBpZiBkYXRhIGlzIGF2YWlsYmxlIGluIEVkaXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS5kYXRhLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnLW5vdGlmeScse1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVzcG9uc2UuZGF0YS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9ycy5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IGVycm9ycy5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2ctbm90aWZ5Jyx7IHR5cGU6ICdkYW5nZXInLCBtZXNzYWdlOiBlcnJvcnMubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3VsdCk9PiB7XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0ID09ICdjYW5jZWwnKXtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IGVycm9ycy5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcHJvcHNEZWxldGVVcmw6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVVybCA9IG5ld1ZhbDtcbiAgICAgICAgfSwgIFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgZmFkZSBpbiBhbGVydC1kaXNtaXNzaWJsZVwiIHN0eWxlPVwibWFyZ2luLXRvcDoxOHB4O1wiICB2LXNob3c9XCJ0eXBlID09ICdkYW5nZXInXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgdi1vbjpjbGljay5wcmV2ZW50LnN0b3A9XCJ0eXBlPW51bGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2VzcyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjE4cHg7XCIgIHYtc2hvdz1cInR5cGUgPT0gJ3N1Y2Nlc3MnXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgdi1vbjpjbGljay5wcmV2ZW50LnN0b3A9XCJ0eXBlPW51bGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtd2FybmluZyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjE4cHg7XCIgIHYtc2hvdz1cInR5cGUgPT0gJ3dhcm5pbmcnXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgdi1vbjpjbGljay5wcmV2ZW50LnN0b3A9XCJ0eXBlPW51bGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mbyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjE4cHg7XCIgIHYtc2hvdz1cInR5cGUgPT0gJ2luZm8nXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgdi1vbjpjbGljay5wcmV2ZW50LnN0b3A9XCJ0eXBlPW51bGxcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIHt7bWVzc2FnZX19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogW10sXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBsZXQgYmFzZSA9IHRoaXM7XG4gICAgICAgIGJhc2UuJHJvb3QuJG9uKCdnLW5vdGlmeScsZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgYmFzZS5zaG93Tm90aWZpY2F0aW9uKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgICAgICAgICB0aXRsZTogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZS50eXBlO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdmFsdWUubWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vTm90aWZpY2F0aW9uLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtc2hvdz1cImxpc3RQYW5lbFN0YXR1c1wiIGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1kZW1vIGFuaW1hdGVkIGZhZGVJblwiIHYtc2hvdz1cImxTZWFyY2hQYW5lbFN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWRlbW9fX3ByZXZpZXcgZy1zZWFyY2gtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx2dWV0YWJsZSByZWY9XCJ2dWV0YWJsZVwiXG4gICAgICAgICAgICAgICAgOmFwaS11cmw9XCJ1cmxzLmluZGV4XCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6Y3NzPVwiY3NzXCIgIFxuICAgICAgICAgICAgICAgIDphcHBlbmQtcGFyYW1zPVwiZXh0ZXJuYWxQYXJhbXNcIiBcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6Y2VsbC1jbGlja2VkPVwib25DZWxsQ2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YT1cIm9uUGFnaW5hdGlvbkRhdGFcIlxuICAgICAgICAgICAgICAgIEB2dWV0YWJsZTpsb2FkaW5nPVwic2V0TG9hZGVyXCJcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6bG9hZGVkPVwic2V0TG9hZGVyXCJcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6bG9hZC1lcnJvcj1cImhhbmRsZUxvYWRFcnJvclwiXG4gICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOmxvYWQtc3VjY2Vzcz1cInNob3dKb2luQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlIGctdGFibGVcIlxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24tcGF0aD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXJscy5qb2luX2NsYXNzLnJlcGxhY2VBdCh1cmxzLmpvaW5fY2xhc3MubGVuZ3RoLTEscHJvcHMucm93RGF0YS51dWlkKVwiIDpjbGFzcz1cIlsnZy1qb2luLWJ1dHRvbicsJ2J0biBidG4tcHJpbWFyeSBidG4tc20nLHByb3BzLnJvd0RhdGEudXVpZF1cIiB2LXNob3c9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dHJhbnMuY29tbW9uLmpvaW59fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLXNtIGctYnRuXCIgdi1vbjpjbGljaz1cIm9wZW5Nb2RhbChwcm9wcy5yb3dEYXRhLm5vdGVzKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFucy5jb21tb24ubm90ZXMgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdnVldGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgZy1yZXNwb25zaXZlLXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ2LW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbS1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBlciBQYWdlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCBtLWlucHV0IG0taW5wdXQtLXNvbGlkIGctc2VsZWN0LWNvbnRyb2xcIiB2LW1vZGVsPVwiZW50aXR5LnBlclBhZ2VcIiBAY2hhbmdlPVwic2hvd01vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMFwiPjIwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MFwiPjUwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxNTBcIj4xNTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMwMFwiPjMwMDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTAwXCI+NTAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj4xMDAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mbyByZWY9XCJwYWdpbmF0aW9uSW5mb1wiIGluZm8tdGVtcGxhdGU9XCJTaG93aW5nIHt0b30gRnJvbSB7dG90YWx9IFJlY29yZHMuXCIgaW5mby1jbGFzcz1cInBhZ2luYXRpb24taW5mb1wiPjwvdnVldGFibGUtcGFnaW5hdGlvbi1pbmZvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInYtbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZy1zbS1wdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWV0YWJsZS1wYWdpbmF0aW9uIHJlZj1cInBhZ2luYXRpb25cIiA6Y3NzPVwiY3NzLnBhZ2luYXRpb25cIiBAdnVldGFibGUtcGFnaW5hdGlvbjpjaGFuZ2UtcGFnZT1cIm9uQ2hhbmdlUGFnZVwiID48L3Z1ZXRhYmxlLXBhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBWdWV0YWJsZSBmcm9tICd2dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlJztcbmltcG9ydCBWdWV0YWJsZVBhZ2luYXRpb24gZnJvbSAndnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24nO1xuaW1wb3J0IFZ1ZXRhYmxlUGFnaW5hdGlvbkluZm8gZnJvbSAndnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vY29tbW9uL0RlbGV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydwcm9wc1RyYW5zJywncHJvcHNQYW5lbCcsICdwcm9wc1VybHMnLCAncHJvcHNQZXJtaXNzaW9ucyddLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVnVldGFibGUsXG4gICAgICAgIFZ1ZXRhYmxlUGFnaW5hdGlvbixcbiAgICAgICAgVnVldGFibGVQYWdpbmF0aW9uSW5mbyxcbiAgICAgICAgRGVsZXRlXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHsgdGhpcy5wYW5lbFN0YXR1cyh0aGlzLnByb3BzUGFuZWwpOyB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIGxldCBiYXNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxTZWFyY2hQYW5lbFN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICB1cmxzOiB0aGlzLnByb3BzVXJscyxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0aGlzLnByb3BzUGVybWlzc2lvbnMsXG4gICAgICAgICAgICBsaXN0UGFuZWxTdGF0dXM6IGJhc2UucHJvcHNQYW5lbCxcbiAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgICAgICB0cmFuczogYmFzZS5wcm9wc1RyYW5zLFxuICAgICAgICAgICAgZW50aXR5OnsgcGVyUGFnZTogMTAsIGpvaW5CdXR0b25zOltdIH0sXG4gICAgICAgICAgICBleHRlcm5hbFBhcmFtczp7fSxcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ19fc2VxdWVuY2UnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCkgPT4gYmFzZS50cmFucy5jb2x1bW5faGVhZGluZy5zcl9ubyxcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwcHgnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgpID0+IGJhc2UudHJhbnMuY29sdW1uX2hlYWRpbmcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnbmFtZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdfdHV0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgpID0+IGJhc2UudHJhbnMuY29sdW1uX2hlYWRpbmcudHV0b3IsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAndHV0b3JGb3JtYXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhcnRfdGltZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnN0YXJ0X3RpbWUsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ3N0YXJ0X3RpbWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZXN0aW1hdGVkX3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCkgPT4gYmFzZS50cmFucy5jb2x1bW5faGVhZGluZy5lc3RpbWF0ZWRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnZXN0aW1hdGVkX3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ2hvdXJGb3JtYXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnX3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICdsYWJlbFN0YXR1cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdfX3Nsb3Q6YWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6J3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOid0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZ0ljb246XCJmYSBmYS1hcnJvdy11cFwiLFxuICAgICAgICAgICAgICAgIGRlc2NlbmRpbmdJY29uOlwiZmEgZmEtYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRDbGFzczogJ2Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNsYXNzOiAncGFnZScsXG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6ICdmYSBmYS1hbmdsZS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiAnZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGxldCBiYXNlID0gdGhpcztcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogXCIjZy1wcm9ncmVzc1wiIH0pO1xuICAgICAgICBiYXNlLiRyb290LiRvbigncmVmcmVzaC1saXN0LWV2ZW50JyxmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBiYXNlLnNob3dNb3JlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNzZWFyY2gtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgYmFzZS5zZWFyY2hQYW5lbFN0YXR1cygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcGFuZWxTdGF0dXM6IGZ1bmN0aW9uKHN0YXRlKXt0aGlzLmxpc3RQYW5lbFN0YXR1cyA9IHN0YXRlfSxcbiAgICAgICAgc2VhcmNoUGFuZWxTdGF0dXM6IGZ1bmN0aW9uKHN0YXRlKXtcbiAgICAgICAgICAgIHRoaXMubFNlYXJjaFBhbmVsU3RhdHVzID0gIXRoaXMubFNlYXJjaFBhbmVsU3RhdHVzXG4gICAgICAgICAgICBpZih0aGlzLmxTZWFyY2hQYW5lbFN0YXR1cyl7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1idXR0b24nKS5wYXJlbnQoKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCcjZjRmNWY4Jyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLWJ1dHRvbicpLnBhcmVudCgpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsJ2luaGVyaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0RXZlbnQoaWQpIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpOyAgIC8vIHdpbGwgc3RvcCBpbiBjcmVhdGVlZGl0IGNvbXBvbmVudCBcbiAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2VkaXQtZXZlbnQnLCBpZCk7IC8vIGxpc3RlbiBvbiBDcmVhdGVFZGl0IENvbXBvbmVudCB2dWUganNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TG9hZGVyKCl7XG4gICAgICAgICAgICBpZih0aGlzLmxvYWRpbmcpXG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmxvYWRpbmcpXG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DZWxsQ2xpY2tlZCAoZGF0YSwgZmllbGQsIGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnZ1ZXRhYmxlLnRvZ2dsZURldGFpbFJvdyhkYXRhLmlkKVxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZVBhZ2UgKHBhZ2UpIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy52dWV0YWJsZS5jaGFuZ2VQYWdlKHBhZ2UpXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGFnaW5hdGlvbkRhdGEgKHBhZ2luYXRpb25EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnBhZ2luYXRpb24uc2V0UGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbkRhdGEpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uSW5mby5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNb3JlKCkge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbFBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAncGVyUGFnZSc6IHRoaXMuZW50aXR5LnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgJ3NlYXJjaCcgOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayggKCkgPT4gdGhpcy4kcmVmcy52dWV0YWJsZS5yZWZyZXNoKCkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVMb2FkRXJyb3IocmVzcG9uc2Upe1xuICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IHRoaXMudHJhbnMuY29tbW9uLnVuYXV0aG9yaXplZCB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29sdW1uIE1vZGlmaWVkXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFN0YXR1cyh2YWx1ZSl7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSAnPHNwYW4gY2xhc3M9XCJtLWJhZGdlIG0tYmFkZ2UtLXN1Y2Nlc3NcIj48L3NwYW4+JztcbiAgICAgICAgICAgIGlmKCF2YWx1ZSlcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICc8c3BhbiBjbGFzcz1cIm0tYmFkZ2UgbS1iYWRnZS0tZGFuZ2VyXCI+PC9zcGFuPic7XG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVGb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUgIT0gJycpID8gbW9tZW50KHZhbHVlKS5mb3JtYXQoJ0RELU1NLVlZWVkgSEg6bW0nKSA6ICc8ZW0+LTwvZW0+JztcbiAgICAgICAgfSxcbiAgICAgICAgaG91ckZvcm1hdDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSAhPSAnJykgPyB2YWx1ZSArICcgJyArIHRoaXMudHJhbnMuY29tbW9uLmhvdXJzIDogJzxlbT4tPC9lbT4nO1xuICAgICAgICB9LFxuICAgICAgICB0dXRvckZvcm1hdDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgaWYodmFsdWUpe1xuICAgICAgICAgICAgICAgIGxldCBmdWxsX25hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCwgaW54KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbC50dXRvciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxfbmFtZSArPSB2YWwudHV0b3IuZmlyc3RfbmFtZSArJyAnK3ZhbC50dXRvci5sYXN0X25hbWUgKycsICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVsbF9uYW1lLnNsaWNlKDAsIC0yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnPGVtPi08L2VtPic7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dKb2luQnV0dG9uOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBsZXQgYmFzZSA9IHRoaXM7XG4gICAgICAgICAgICBpZih2YWx1ZS5kYXRhICYmIHZhbHVlLmRhdGEuZGF0YS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWVIb2xkZXIgPSBbXTsgLy8gVG8gRXZlcnl0aW1lIHVwZGF0ZSBjdXJyZW50IHRpbWVfc3RhbXAgb2YgZXZlcnkgcmVjb25kLiBUaGlzIGlzIGhvbGRlci5cbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkLmVhY2godmFsdWUuZGF0YS5kYXRhLGZ1bmN0aW9uKGlkeCx2YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGN1cnJlbnRUaW1lSG9sZGVyW3ZhbC51dWlkXSA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVIb2xkZXJbdmFsLnV1aWRdID0gbW9tZW50KHZhbC5fY3VycmVudF90aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVwZGF0ZUhvbGRlZFRpbWUgPSBtb21lbnQoY3VycmVudFRpbWVIb2xkZXJbdmFsLnV1aWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lSG9sZGVyW3ZhbC51dWlkXSA9IHVwZGF0ZUhvbGRlZFRpbWUuYWRkKDUsICdzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZih2YWwudXVpZCA9PSAnNzNlNDNhM2MtMTk0Yy0xMWU4LThhNWYtMDI0MmQwNTI5ZDUzLTE1OTMyNzczNDA2NjEzODUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh1cGRhdGVIb2xkZWRUaW1lLmFkZCg1LCAncycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFRpbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X3RpbWUgPSBtb21lbnQoY3VycmVudFRpbWVIb2xkZXJbdmFsLnV1aWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydF90aW1lID0gbW9tZW50KHZhbC5fc3RhcnRfdGltZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24oY3VycmVudF90aW1lLmRpZmYoc3RhcnRfdGltZSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWwuX2VuZCAhPSAnJyAmJiB2YWwuX2VuZCAhPSBudWxsICYmIHZhbC5fZW5kICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZFRpbWUgPSBtb21lbnQodmFsLl9lbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoZHVyYXRpb24uYXNNaW51dGVzKCkgPiAwICYmIGR1cmF0aW9uLmFzTWludXRlcygpIDw9IDEwKSB8fCAoZW5kVGltZSAhPSAnJyAmJiAoZW5kVGltZS5pc1NhbWUoY3VycmVudF90aW1lKSAgfHwgZW5kVGltZS5pc0FmdGVyKGN1cnJlbnRfdGltZSkpKSAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmctam9pbi1idXR0b24uJyt2YWwudXVpZCkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmctam9pbi1idXR0b24uJyt2YWwudXVpZCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICQoJyNub3RlSW5mb01vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAkKCcjbm90ZUluZm9Nb2RhbCcpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgcHJvcHNQYW5lbDogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxTdGF0dXMobmV3VmFsKTtcbiAgICAgICAgICAgIGlmKG5ld1ZhbCl7XG4gICAgICAgICAgICAgICAgVnVlLm5leHRUaWNrKCAoKSA9PiB0aGlzLiRyZWZzLnZ1ZXRhYmxlLnJlZnJlc2goKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICBcbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9MaXN0LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGxldC1ib2R5XCIgaWQ9XCJzdHVkZW50LWNsYXNzZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICA8bm90aWZpY2F0aW9uPjwvbm90aWZpY2F0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiYWxsX3N0dWRlbnRfY2xhc3Nlc1wiIHJvbGU9XCJ0YWJwYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxsaXN0XG4gICAgICAgICAgICAgICAgICAgIDpwcm9wcy1wYW5lbD1cImxpc3RQYW5lbFwiXG4gICAgICAgICAgICAgICAgICAgIDpwcm9wcy11cmxzPVwidXJsc1wiXG4gICAgICAgICAgICAgICAgICAgIDpwcm9wcy1wZXJtaXNzaW9ucz1cInBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgOnByb3BzLXRyYW5zPVwidHJhbnNcIj5cbiAgICAgICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuICAgIGltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi4vY29tbW9uL05vdGlmaWNhdGlvbic7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ3Byb3BzVHJhbnMnLCAncHJvcHNQZXJtaXNzaW9ucycsICdwcm9wc1VybHMnLCAncHJvcHNEYXRhJ10sXG4gICAgICAgIGNvbXBvbmVudHM6e1xuICAgICAgICAgICAgTGlzdDogTGlzdCxcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3RQYW5lbDogdHJ1ZSwgLy8gaWYgdGhpcyBpcyBmYWxzZSBMSVNUIHdpbGwgbm90IGdvaW5nIHRvIGRpc3BsYXlcbiAgICAgICAgICAgICAgICBjcmVhdGVFZGl0UGFuZWw6IHRydWUsIC8vIGlmIHRoaXMgaXMgZmFsc2UgRm9ybSB3aWxsIG5vdCBnb2luZyB0byBkaXNwbGF5XG4gICAgICAgICAgICAgICAgdHJhbnM6IEpTT04ucGFyc2UodGhpcy5wcm9wc1RyYW5zKSxcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogSlNPTi5wYXJzZSh0aGlzLnByb3BzUGVybWlzc2lvbnMpLFxuICAgICAgICAgICAgICAgIHVybHM6IEpTT04ucGFyc2UodGhpcy5wcm9wc1VybHMpLFxuICAgICAgICAgICAgICAgIG1vZHVsZURhdGE6IEpTT04ucGFyc2UodGhpcy5wcm9wc0RhdGEpLFxuICAgICAgICAgICAgICAgIGZvcm1SZXNldDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IGJhc2UgPSB0aGlzOyAvLyBUbyBBdm9pZCB0aGlzIGtleXdvcmQgY29uZmxpY3RcbiAgICAgICAgICAgIGJhc2UuJHJvb3QuJG9uKCdyZXNldC1wYW5lbHMnLGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBiYXNlLnJlc2V0UGFuZWxTdGF0dXModmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9IDIpIC8vIE5vIHJlYWN0IGlmIGVkaXQgdGltZVxuICAgICAgICAgICAgICAgICAgICBiYXNlLiRyb290LiRlbWl0KCdyZWZyZXNoLWxpc3QtZXZlbnQnLDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IHBhbmVsIGFuZCBhY3RpdmUgbGlzdCBwYW5lbCBkZWZhdWx0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlc2V0UGFuZWxTdGF0dXModmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZvcm1SZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gaWYodmFsdWUgPT0gMSB8fCB2YWx1ZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKHZhbHVlID09IDIpeyAvLyBlZGl0IHRpbWUgRG8gbm90IHJlc2V0IGZvcm1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZm9ybVJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgJCgnYVtocmVmPVwiI2FkZF9lZGl0X2NsYXNzXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoJ2FbaHJlZj1cIiNhbGxfc3R1ZGVudF9jbGFzc2VzXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc3R1ZGVudC1jbGFzc2VzL01hc3Rlci52dWUiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblt2LWNsb2FrXVtkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi52dWV0YWJsZSB0aC5zb3J0YWJsZVtkYXRhLXYtMTU5NjVlM2JdOmhvdmVyIHtcXG4gIGNvbG9yOiAjMjE4NWQwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udnVldGFibGUtYm9keS13cmFwcGVyW2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBvdmVyZmxvdy15OmF1dG87XFxufVxcbi52dWV0YWJsZS1oZWFkLXdyYXBwZXJbZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi52dWV0YWJsZS1hY3Rpb25zW2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgd2lkdGg6IDE1JTtcXG4gIHBhZGRpbmc6IDEycHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udnVldGFibGUtcGFnaW5hdGlvbltkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIGJhY2tncm91bmQ6ICNmOWZhZmIgIWltcG9ydGFudDtcXG59XFxuLnZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mb1tkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4udnVldGFibGUtZW1wdHktcmVzdWx0W2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udnVldGFibGUtY2xpcC10ZXh0W2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi52dWV0YWJsZS1zZW1hbnRpYy1uby10b3BbZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6MCAhaW1wb3J0YW50O1xcbn1cXG4udnVldGFibGUtZml4ZWQtbGF5b3V0W2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuLnZ1ZXRhYmxlLWd1dHRlci1jb2xbZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICBib3JkZXItbGVmdDogbm9uZSAgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yaWdodDogbm9uZSAgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21tYW1lbGRpL0pheUFtYmUvY29kZS90dXRvci1iYW5rL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOHdDQTtFQUNBLGNBQUE7Q0FDQTtBQUNBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0NBQ0E7QUFDQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7Q0FDQTtBQUNBO0VBQ0EsbUJBQUE7Q0FDQTtBQUNBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7Q0FDQTtBQUNBO0VBQ0EsK0JBQUE7Q0FDQTtBQUNBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtDQUNBO0FBQ0E7RUFDQSxtQkFBQTtDQUNBO0FBQ0E7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0NBQ0E7QUFDQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7Q0FDQTtBQUNBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlZ1ZXRhYmxlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPGRpdiB2LWlmPVxcXCJpc0ZpeGVkSGVhZGVyXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInZ1ZXRhYmxlLWhlYWQtd3JhcHBlclxcXCI+XFxyXFxuICAgIDx0YWJsZSA6Y2xhc3M9XFxcIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzcywgY3NzLnRhYmxlSGVhZGVyQ2xhc3NdXFxcIj5cXHJcXG4gICAgICA8dGhlYWQgOmNsYXNzPVxcXCJbY3NzLmdUYWJsZVRoZWFkQ2xhc3NdXFxcIj5cXHJcXG4gICAgICAgIDx0ciA6Y2xhc3M9XFxcIltjc3MuZ1RhYmxlVGhlYWRUckNsYXNzXVxcXCI+XFxyXFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImZpZWxkLnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIEBjaGFuZ2U9XFxcInRvZ2dsZUFsbENoZWNrYm94ZXMoZmllbGQubmFtZSwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVxcXCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jb21wb25lbnQnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtY29tcG9uZW50LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9yZGVyQnkoZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnXVxcXCIgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cXFwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cXFwiIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcclxcbiAgICAgICAgICAgICAgICA8dGggQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmlkPVxcXCInXycgKyBmaWVsZC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICA8dGggdi1pZj1cXFwic2Nyb2xsVmlzaWJsZVxcXCIgOnN0eWxlPVxcXCJ7d2lkdGg6IHNjcm9sbEJhcldpZHRofVxcXCIgY2xhc3M9XFxcInZ1ZXRhYmxlLWd1dHRlci1jb2xcXFwiPjwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICAgIDwvdGhlYWQ+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInZ1ZXRhYmxlLWJvZHktd3JhcHBlclxcXCIgOnN0eWxlPVxcXCJ7aGVpZ2h0OiB0YWJsZUhlaWdodH1cXFwiPlxcclxcbiAgICA8dGFibGUgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3MsIGNzcy50YWJsZUJvZHlDbGFzc11cXFwiPlxcclxcbiAgICAgIDxjb2xncm91cD5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJmaWVsZC52aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8Y29sXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOmlkPVxcXCInX2NvbF8nICsgZmllbGQubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAvPlxcclxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICA8L2NvbGdyb3VwPlxcclxcbiAgICAgIDx0Ym9keSB2LWNsb2FrIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1ib2R5JywgY3NzLmdUYWJsZUJvZHlDbGFzc11cXFwiPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoaXRlbSwgaXRlbUluZGV4KSBpbiB0YWJsZURhdGFcXFwiPlxcclxcbiAgICAgICAgICA8dHIgXFxyXFxuICAgICAgICAgICAgOmtleT1cXFwiaXRlbUluZGV4XFxcIlxcclxcbiAgICAgICAgICAgIDppdGVtLWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiIFxcclxcbiAgICAgICAgICAgIDpyZW5kZXI9XFxcIm9uUm93Q2hhbmdlZChpdGVtKVxcXCIgXFxyXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCJvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleClcXFwiXFxyXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgICAgICAgQGRibGNsaWNrPVxcXCJvblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImZpZWxkLnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlclNlcXVlbmNlKGl0ZW1JbmRleClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2hhbmRsZSdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1oYW5kbGUnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJJY29uVGFnKFsnaGFuZGxlLWljb24nLCBjc3MuaGFuZGxlSWNvbl0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1jaGVja2JveGVzJywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInRvZ2dsZUNoZWNrYm94KGl0ZW0sIGZpZWxkLm5hbWUsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVxcXCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX2NvbXBvbmVudCdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1jb21wb25lbnQnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVxcXCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVxcXCJpdGVtXFxcIiA6cm93LWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiIDpyb3ctZmllbGQ9XFxcImZpZWxkLnNvcnRGaWVsZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fc2xvdCdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cXFwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cXFwiaXRlbVxcXCIgOnJvdy1pbmRleD1cXFwiaXRlbUluZGV4XFxcIiA6cm93LWZpZWxkPVxcXCJmaWVsZC5zb3J0RmllbGRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA+PC9zbG90PlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkIDpjbGFzcz1cXFwiZmllbGQuZGF0YUNsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyTm9ybWFsRmllbGQoZmllbGQsIGl0ZW0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGRibGNsaWNrPVxcXCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgQGNvbnRleHRtZW51PVxcXCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJ1c2VEZXRhaWxSb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVxcXCJkZXRhaWxSb3dUcmFuc2l0aW9uXFxcIiA6a2V5PVxcXCJpdGVtSW5kZXhcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHRyIHYtaWY9XFxcImlzVmlzaWJsZURldGFpbFJvdyhpdGVtW3RyYWNrQnldKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbY3NzLmRldGFpbFJvd0NsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cXFwiY291bnRWaXNpYmxlRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwiZGV0YWlsUm93Q29tcG9uZW50XFxcIiA6cm93LWRhdGE9XFxcIml0ZW1cXFwiIDpyb3ctaW5kZXg9XFxcIml0ZW1JbmRleFxcXCI+PC9jb21wb25lbnQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiZGlzcGxheUVtcHR5RGF0YVJvd1xcXCI+XFxyXFxuICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XFxcImNvdW50VmlzaWJsZUZpZWxkc1xcXCIgY2xhc3M9XFxcInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFxcXCIgdi1odG1sPVxcXCJub0RhdGFUZW1wbGF0ZVxcXCI+PC90ZD5cXHJcXG4gICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwibGVzc1RoYW5NaW5Sb3dzXFxcIj5cXHJcXG4gICAgICAgICAgPHRyIHYtZm9yPVxcXCJpIGluIGJsYW5rUm93c1xcXCIgY2xhc3M9XFxcImJsYW5rLXJvd1xcXCIgOmtleT1cXFwiaVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJmaWVsZC52aXNpYmxlXFxcIiA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIj4mbmJzcDs8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDwvdGJvZHk+XFxyXFxuICAgIDwvdGFibGU+XFxyXFxuICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48dGFibGUgdi1lbHNlIDpjbGFzcz1cXFwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzXVxcXCI+IDwhLS0gbm8gZml4ZWQgaGVhZGVyIC0gcmVndWxhciB0YWJsZSAtLT5cXHJcXG4gIDx0aGVhZCA6Y2xhc3M9XFxcIltjc3MuZ1RhYmxlVGhlYWRDbGFzc11cXFwiPlxcclxcbiAgICA8dHIgOmNsYXNzPVxcXCJbY3NzLmdUYWJsZVRoZWFkVHJDbGFzc11cXFwiPlxcclxcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiZmllbGQudmlzaWJsZVxcXCI+XFxyXFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1xcXCJcXHJcXG4gICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBAY2hhbmdlPVxcXCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjaGVja2VkPVxcXCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICA8dGggdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY29tcG9uZW50J1xcXCJcXHJcXG4gICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLWNvbXBvbmVudC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXFxcIlxcclxcbiAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9yZGVyQnkoZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3Nsb3QnXFxcIlxcclxcbiAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtc2xvdC0nK2V4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVxcXCJcXHJcXG4gICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcXFwiXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC1zZXF1ZW5jZScsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXFxcIiB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgICA8dGggdi1pZj1cXFwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVxcXCJcXHJcXG4gICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJywgc29ydENsYXNzKGZpZWxkKV1cXFwiIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcclxcbiAgICAgICAgICAgIDx0aCBAY2xpY2s9XFxcIm9yZGVyQnkoZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOmlkPVxcXCInXycgKyBmaWVsZC5uYW1lXFxcIlxcclxcbiAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksICB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVxcXCJcXHJcXG4gICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L3RyPlxcclxcbiAgPC90aGVhZD5cXHJcXG4gIDx0Ym9keSB2LWNsb2FrIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1ib2R5JywgY3NzLmdUYWJsZUJvZHlDbGFzc11cXFwiPlxcclxcbiAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihpdGVtLCBpdGVtSW5kZXgpIGluIHRhYmxlRGF0YVxcXCI+XFxyXFxuICAgICAgPHRyIEBkYmxjbGljaz1cXFwib25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcXFwiIFxcclxcbiAgICAgICAgOmtleT1cXFwiaXRlbUluZGV4XFxcIlxcclxcbiAgICAgICAgOml0ZW0taW5kZXg9XFxcIml0ZW1JbmRleFxcXCIgXFxyXFxuICAgICAgICA6cmVuZGVyPVxcXCJvblJvd0NoYW5nZWQoaXRlbSlcXFwiIFxcclxcbiAgICAgICAgOmNsYXNzPVxcXCJbKGl0ZW1JbmRleCUyPT0wID8gJ2V2ZW4nIDogJ29kZCcpLCBvblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleCldXFxcIlxcclxcbiAgICAgICAgQGNsaWNrPVxcXCJvblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImZpZWxkLnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXNlcXVlbmNlJywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXFxcIlxcclxcbiAgICAgICAgICAgICAgPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19faGFuZGxlJ1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1oYW5kbGUnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlckljb25UYWcoWydoYW5kbGUtaWNvbicsIGNzcy5oYW5kbGVJY29uXSlcXFwiXFxyXFxuICAgICAgICAgICAgICA+PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtY2hlY2tib3hlcycsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVxcXCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19jb21wb25lbnQnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLWNvbXBvbmVudCcsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVxcXCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XFxcIml0ZW1cXFwiIDpyb3ctaW5kZXg9XFxcIml0ZW1JbmRleFxcXCIgOnJvdy1maWVsZD1cXFwiZmllbGQuc29ydEZpZWxkXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XFxyXFxuICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19zbG90J1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1zbG90JywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XFxcImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cXFwiaXRlbVxcXCIgOnJvdy1pbmRleD1cXFwiaXRlbUluZGV4XFxcIiA6cm93LWZpZWxkPVxcXCJmaWVsZC5zb3J0RmllbGRcXFwiXFxyXFxuICAgICAgICAgICAgICAgID48L3Nsb3Q+XFxyXFxuICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJoYXNDYWxsYmFjayhmaWVsZClcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImZpZWxkLmRhdGFDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1odG1sPVxcXCJjYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXFxcIlxcclxcbiAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cXFwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNvbnRleHRtZW51PVxcXCJvbkNlbGxSaWdodENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICA+PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWVsc2UgXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiZmllbGQuZGF0YUNsYXNzXFxcIlxcclxcbiAgICAgICAgICAgICAgICB2LWh0bWw9XFxcImdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUsICcnKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XFxcIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cXFwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgPjwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC90cj5cXHJcXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidXNlRGV0YWlsUm93XFxcIj5cXHJcXG4gICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVxcXCJkZXRhaWxSb3dUcmFuc2l0aW9uXFxcIiA6a2V5PVxcXCJpdGVtSW5kZXhcXFwiPlxcclxcbiAgICAgICAgICA8dHIgdi1pZj1cXFwiaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bdHJhY2tCeV0pXFxcIlxcclxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcXFwiXFxyXFxuICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XFxcImNvdW50VmlzaWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwiZGV0YWlsUm93Q29tcG9uZW50XFxcIiA6cm93LWRhdGE9XFxcIml0ZW1cXFwiIDpyb3ctaW5kZXg9XFxcIml0ZW1JbmRleFxcXCI+PC9jb21wb25lbnQ+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cXHJcXG4gICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8L3RlbXBsYXRlPlxcclxcbiAgICA8dGVtcGxhdGUgdi1pZj1cXFwiZGlzcGxheUVtcHR5RGF0YVJvd1xcXCI+XFxyXFxuICAgICAgPHRyPlxcclxcbiAgICAgICAgPHRkIDpjb2xzcGFuPVxcXCJjb3VudFZpc2libGVGaWVsZHNcXFwiIGNsYXNzPVxcXCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcXFwiIHYtaHRtbD1cXFwibm9EYXRhVGVtcGxhdGVcXFwiPjwvdGQ+XFxyXFxuICAgICAgPC90cj5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPHRlbXBsYXRlIHYtaWY9XFxcImxlc3NUaGFuTWluUm93c1xcXCI+XFxyXFxuICAgICAgPHRyIHYtZm9yPVxcXCJpIGluIGJsYW5rUm93c1xcXCIgY2xhc3M9XFxcImJsYW5rLXJvd1xcXCIgOmtleT1cXFwiaVxcXCI+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICA8dGQgdi1pZj1cXFwiZmllbGQudmlzaWJsZVxcXCIgOmtleT1cXFwiZmllbGRJbmRleFxcXCI+Jm5ic3A7PC90ZD5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC90cj5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gIHByb3BzOiB7XFxyXFxuICAgIGZpZWxkczoge1xcclxcbiAgICAgIHR5cGU6IEFycmF5LFxcclxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIGxvYWRPblN0YXJ0OiB7XFxyXFxuICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIGFwaVVybDoge1xcclxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgZGVmYXVsdDogJydcXHJcXG4gICAgfSxcXHJcXG4gICAgaHR0cE1ldGhvZDoge1xcclxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgZGVmYXVsdDogJ2dldCcsXFxyXFxuICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xcclxcbiAgICAgICAgICByZXR1cm4gWydnZXQnLCAncG9zdCddLmluZGV4T2YodmFsdWUpID4gLTFcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgcmVhY3RpdmVBcGlVcmw6IHtcXHJcXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIGFwaU1vZGU6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQ6IHRydWVcXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YToge1xcclxcbiAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBudWxsXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBkYXRhVG90YWw6IHtcXHJcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgZGVmYXVsdDogMFxcclxcbiAgICB9LFxcclxcbiAgICBkYXRhTWFuYWdlcjoge1xcclxcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIG51bGxcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGRhdGFQYXRoOiB7XFxyXFxuICAgICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgICBkZWZhdWx0OiAnZGF0YSdcXHJcXG4gICAgfSxcXHJcXG4gICAgcGFnaW5hdGlvblBhdGg6IHtcXHJcXG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxcclxcbiAgICAgICAgZGVmYXVsdDogJ2xpbmtzLnBhZ2luYXRpb24nXFxyXFxuICAgIH0sXFxyXFxuICAgIHF1ZXJ5UGFyYW1zOiB7XFxyXFxuICAgICAgdHlwZTogW09iamVjdCwgRnVuY3Rpb25dLFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgc29ydDogJ3NvcnQnLFxcclxcbiAgICAgICAgICBwYWdlOiAncGFnZScsXFxyXFxuICAgICAgICAgIHBlclBhZ2U6ICdwZXJfcGFnZSdcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGFwcGVuZFBhcmFtczoge1xcclxcbiAgICAgIHR5cGU6IE9iamVjdCxcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7fVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgaHR0cE9wdGlvbnM6IHtcXHJcXG4gICAgICB0eXBlOiBPYmplY3QsXFxyXFxuICAgICAgZGVmYXVsdCAoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge31cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGh0dHBGZXRjaDoge1xcclxcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcclxcbiAgICAgIGRlZmF1bHQ6IG51bGxcXHJcXG4gICAgfSxcXHJcXG4gICAgcGVyUGFnZToge1xcclxcbiAgICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgICAgZGVmYXVsdCAoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIDEwXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGluaXRpYWxQYWdlOiB7XFxyXFxuICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIDFcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHNvcnRPcmRlcjoge1xcclxcbiAgICAgIHR5cGU6IEFycmF5LFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIFtdXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtdWx0aVNvcnQ6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIGZhbHNlXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB0YWJsZUhlaWdodDoge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiBudWxsXFxyXFxuICAgIH0sXFxyXFxuICAgIC8qXFxyXFxuICAgICAqIHBoeXNpY2FsIGtleSB0aGF0IHdpbGwgdHJpZ2dlciBtdWx0aS1zb3J0IG9wdGlvblxcclxcbiAgICAgKiBwb3NzaWJsZSB2YWx1ZXM6ICdhbHQnLCAnY3RybCcsICdtZXRhJywgJ3NoaWZ0J1xcclxcbiAgICAgKiAnY3RybCcgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gTWFjXFxyXFxuICAgICAqL1xcclxcbiAgICBtdWx0aVNvcnRLZXk6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogJ2FsdCdcXHJcXG4gICAgfSxcXHJcXG4gICAgLyogZGVwcmVjYXRlZCAqL1xcclxcbiAgICByb3dDbGFzc0NhbGxiYWNrOiB7XFxyXFxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxcclxcbiAgICAgIGRlZmF1bHQ6ICcnXFxyXFxuICAgIH0sXFxyXFxuICAgIHJvd0NsYXNzOiB7XFxyXFxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxcclxcbiAgICAgIGRlZmF1bHQ6ICcnXFxyXFxuICAgIH0sXFxyXFxuICAgIGRldGFpbFJvd0NvbXBvbmVudDoge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICB9LFxcclxcbiAgICBkZXRhaWxSb3dUcmFuc2l0aW9uOiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQ6ICcnXFxyXFxuICAgIH0sXFxyXFxuICAgIHRyYWNrQnk6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogJ2lkJ1xcclxcbiAgICB9LFxcclxcbiAgICBjc3M6IHtcXHJcXG4gICAgICB0eXBlOiBPYmplY3QsXFxyXFxuICAgICAgZGVmYXVsdCAoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICB0YWJsZUNsYXNzOiAndWkgYmx1ZSBzZWxlY3RhYmxlIGNlbGxlZCBzdGFja2FibGUgYXR0YWNoZWQgdGFibGUnLFxcclxcbiAgICAgICAgICBsb2FkaW5nQ2xhc3M6ICdsb2FkaW5nJyxcXHJcXG4gICAgICAgICAgYXNjZW5kaW5nSWNvbjogJ2JsdWUgY2hldnJvbiB1cCBpY29uJyxcXHJcXG4gICAgICAgICAgZGVzY2VuZGluZ0ljb246ICdibHVlIGNoZXZyb24gZG93biBpY29uJyxcXHJcXG4gICAgICAgICAgYXNjZW5kaW5nQ2xhc3M6ICdzb3J0ZWQtYXNjJyxcXHJcXG4gICAgICAgICAgZGVzY2VuZGluZ0NsYXNzOiAnc29ydGVkLWRlc2MnLFxcclxcbiAgICAgICAgICBzb3J0YWJsZUljb246ICcnLFxcclxcbiAgICAgICAgICBkZXRhaWxSb3dDbGFzczogJ3Z1ZXRhYmxlLWRldGFpbC1yb3cnLFxcclxcbiAgICAgICAgICBoYW5kbGVJY29uOiAnZ3JleSBzaWRlYmFyIGljb24nLFxcclxcbiAgICAgICAgICB0YWJsZUJvZHlDbGFzczogJ3Z1ZXRhYmxlLXNlbWFudGljLW5vLXRvcCB2dWV0YWJsZS1maXhlZC1sYXlvdXQnLFxcclxcbiAgICAgICAgICB0YWJsZUhlYWRlckNsYXNzOiAndnVldGFibGUtZml4ZWQtbGF5b3V0J1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWluUm93czoge1xcclxcbiAgICAgIHR5cGU6IE51bWJlcixcXHJcXG4gICAgICBkZWZhdWx0OiAwXFxyXFxuICAgIH0sXFxyXFxuICAgIHNpbGVudDoge1xcclxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgZGVmYXVsdDogZmFsc2VcXHJcXG4gICAgfSxcXHJcXG4gICAgbm9EYXRhVGVtcGxhdGU6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdCgpIHtcXHJcXG4gICAgICAgIHJldHVybiAnTm8gRGF0YSBBdmFpbGFibGUnXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBzaG93U29ydEljb25zOiB7XFxyXFxuICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBkYXRhICgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgICBldmVudFByZWZpeDogJ3Z1ZXRhYmxlOicsXFxyXFxuICAgICAgdGFibGVGaWVsZHM6IFtdLFxcclxcbiAgICAgIHRhYmxlRGF0YTogbnVsbCxcXHJcXG4gICAgICB0YWJsZVBhZ2luYXRpb246IG51bGwsXFxyXFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuaW5pdGlhbFBhZ2UsXFxyXFxuICAgICAgc2VsZWN0ZWRUbzogW10sXFxyXFxuICAgICAgdmlzaWJsZURldGFpbFJvd3M6IFtdLFxcclxcbiAgICAgIGxhc3RTY3JvbGxQb3NpdGlvbjogMCxcXHJcXG4gICAgICBzY3JvbGxCYXJXaWR0aDogJzE3cHgnLCAvL2Nocm9tZSBkZWZhdWx0XFxyXFxuICAgICAgc2Nyb2xsVmlzaWJsZTogZmFsc2UsXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBtb3VudGVkICgpIHtcXHJcXG4gICAgdGhpcy5ub3JtYWxpemVGaWVsZHMoKVxcclxcbiAgICB0aGlzLm5vcm1hbGl6ZVNvcnRPcmRlcigpXFxyXFxuICAgIGlmICh0aGlzLmlzRml4ZWRIZWFkZXIpIHtcXHJcXG4gICAgICB0aGlzLnNjcm9sbEJhcldpZHRoID0gdGhpcy5nZXRTY3JvbGxCYXJXaWR0aCgpICsgJ3B4JztcXHJcXG4gICAgfVxcclxcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgnaW5pdGlhbGl6ZWQnLCB0aGlzLnRhYmxlRmllbGRzKVxcclxcbiAgICB9KVxcclxcblxcclxcbiAgICBpZiAodGhpcy5sb2FkT25TdGFydCkge1xcclxcbiAgICAgIHRoaXMubG9hZERhdGEoKVxcclxcbiAgICB9XFxyXFxuICAgIGlmICh0aGlzLmlzRml4ZWRIZWFkZXIpIHtcXHJcXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xcclxcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcXHJcXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG4gIGRlc3Ryb3llZCAoKSB7XFxyXFxuICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF07XFxyXFxuICAgIGlmIChlbGVtICE9IG51bGwpIHtcXHJcXG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG4gIGNvbXB1dGVkOiB7XFxyXFxuICAgIHVzZURldGFpbFJvdyAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhICYmIHRoaXMudGFibGVEYXRhWzBdICYmIHRoaXMuZGV0YWlsUm93Q29tcG9uZW50ICE9PSAnJyAmJiB0eXBlb2YgdGhpcy50YWJsZURhdGFbMF1bdGhpcy50cmFja0J5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcXHJcXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gZGVmaW5lIHVuaXF1ZSByb3cgaWRlbnRpZmllciBpbiBvcmRlciBmb3IgZGV0YWlsLXJvdyBmZWF0dXJlIHRvIHdvcmsuIFVzZSBgdHJhY2stYnlgIHByb3AgdG8gZGVmaW5lIG9uZSEnKVxcclxcbiAgICAgICAgcmV0dXJuIGZhbHNlXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJydcXHJcXG4gICAgfSxcXHJcXG4gICAgY291bnRWaXNpYmxlRmllbGRzICgpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcXHJcXG4gICAgICAgIHJldHVybiBmaWVsZC52aXNpYmxlXFxyXFxuICAgICAgfSkubGVuZ3RoXFxyXFxuICAgIH0sXFxyXFxuICAgIGNvdW50VGFibGVEYXRhICgpIHtcXHJcXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwpIHtcXHJcXG4gICAgICAgIHJldHVybiAwXFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcXHJcXG4gICAgfSxcXHJcXG4gICAgZGlzcGxheUVtcHR5RGF0YVJvdyAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuY291bnRUYWJsZURhdGEgPT09IDAgJiYgdGhpcy5ub0RhdGFUZW1wbGF0ZS5sZW5ndGggPiAwXFxyXFxuICAgIH0sXFxyXFxuICAgIGxlc3NUaGFuTWluUm93cyAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsIHx8IHRoaXMudGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xcclxcbiAgICAgICAgcmV0dXJuIHRydWVcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmxlbmd0aCA8IHRoaXMubWluUm93c1xcclxcbiAgICB9LFxcclxcbiAgICBibGFua1Jvd3MgKCkge1xcclxcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCB8fCB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLm1pblJvd3NcXHJcXG4gICAgICB9XFxyXFxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhLmxlbmd0aCA+PSB0aGlzLm1pblJvd3MpIHtcXHJcXG4gICAgICAgIHJldHVybiAwXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLm1pblJvd3MgLSB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcXHJcXG4gICAgfSxcXHJcXG4gICAgaXNBcGlNb2RlICgpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy5hcGlNb2RlXFxyXFxuICAgIH0sXFxyXFxuICAgIGlzRGF0YU1vZGUgKCkge1xcclxcbiAgICAgIHJldHVybiAhIHRoaXMuYXBpTW9kZVxcclxcbiAgICB9LFxcclxcbiAgICBpc0ZpeGVkSGVhZGVyICgpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUhlaWdodCAhPSBudWxsXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBtZXRob2RzOiB7XFxyXFxuICAgIGdldFNjcm9sbEJhcldpZHRoICgpIHtcXHJcXG4gICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xcclxcbiAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XFxyXFxuXFxyXFxuICAgICAgb3V0ZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xcclxcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcXHJcXG5cXHJcXG4gICAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcXHJcXG5cXHJcXG5cXHJcXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XFxyXFxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgY29uc3Qgd2lkdGhXaXRob3V0U2Nyb2xsYmFyID0gb3V0ZXIub2Zmc2V0V2lkdGg7XFxyXFxuXFxyXFxuICAgICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcXHJcXG5cXHJcXG4gICAgICBjb25zdCB3aWR0aFdpdGhTY3JvbGxiYXIgPSBpbm5lci5vZmZzZXRXaWR0aDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gKHdpZHRoV2l0aG91dFNjcm9sbGJhciAtIHdpZHRoV2l0aFNjcm9sbGJhcik7XFxyXFxuICAgIH0sXFxyXFxuICAgIGhhbmRsZVNjcm9sbCAoZSkgeyAvL21ha2Ugc3VyZSB0aGF0IHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IGFyZSBhbGlnbmVkIHdoZW4gc2Nyb2xsaW5nIGhvcml6b250YWxseSBvbiBhIHRhYmxlIHRoYXQgaXMgd2lkZXIgdGhhbiB0aGUgdmlld3BvcnRcXHJcXG4gICAgICBsZXQgaG9yaXpvbnRhbCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0O1xcclxcbiAgICAgIGlmIChob3Jpem9udGFsICE9IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uKSB7IC8vZG9uJ3QgbW9kaWZ5IGhlYWRlciBzY3JvbGwgaWYgd2UgYXJlIHNjcm9sbGluZyB2ZXJ0aWNhbGx5XFxyXFxuICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtaGVhZC13cmFwcGVyJylbMF1cXHJcXG4gICAgICAgIGlmIChoZWFkZXIgIT0gbnVsbCkge1xcclxcbiAgICAgICAgICBoZWFkZXIuc2Nyb2xsTGVmdCA9IGhvcml6b250YWw7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IGhvcml6b250YWw7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICB9LFxcclxcbiAgICBub3JtYWxpemVGaWVsZHMgKCkge1xcclxcbiAgICAgIGlmICh0eXBlb2YodGhpcy5maWVsZHMpID09PSAndW5kZWZpbmVkJykge1xcclxcbiAgICAgICAgdGhpcy53YXJuKCdZb3UgbmVlZCB0byBwcm92aWRlIFxcXCJmaWVsZHNcXFwiIHByb3AuJylcXHJcXG4gICAgICAgIHJldHVyblxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRmllbGRzID0gW11cXHJcXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcXHJcXG4gICAgICBsZXQgb2JqXFxyXFxuICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmdW5jdGlvbihmaWVsZCwgaSkge1xcclxcbiAgICAgICAgaWYgKHR5cGVvZiAoZmllbGQpID09PSAnc3RyaW5nJykge1xcclxcbiAgICAgICAgICBvYmogPSB7XFxyXFxuICAgICAgICAgICAgbmFtZTogZmllbGQsXFxyXFxuICAgICAgICAgICAgdGl0bGU6IHNlbGYuc2V0VGl0bGUoZmllbGQpLFxcclxcbiAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICcnLFxcclxcbiAgICAgICAgICAgIGRhdGFDbGFzczogJycsXFxyXFxuICAgICAgICAgICAgY2FsbGJhY2s6IG51bGwsXFxyXFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgb2JqID0ge1xcclxcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXFxyXFxuICAgICAgICAgICAgd2lkdGg6IGZpZWxkLndpZHRoLFxcclxcbiAgICAgICAgICAgIHRpdGxlOiAoZmllbGQudGl0bGUgPT09IHVuZGVmaW5lZCkgPyBzZWxmLnNldFRpdGxlKGZpZWxkLm5hbWUpIDogZmllbGQudGl0bGUsXFxyXFxuICAgICAgICAgICAgc29ydEZpZWxkOiBmaWVsZC5zb3J0RmllbGQsXFxyXFxuICAgICAgICAgICAgdGl0bGVDbGFzczogKGZpZWxkLnRpdGxlQ2xhc3MgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLnRpdGxlQ2xhc3MsXFxyXFxuICAgICAgICAgICAgZGF0YUNsYXNzOiAoZmllbGQuZGF0YUNsYXNzID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC5kYXRhQ2xhc3MsXFxyXFxuICAgICAgICAgICAgY2FsbGJhY2s6IChmaWVsZC5jYWxsYmFjayA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQuY2FsbGJhY2ssXFxyXFxuICAgICAgICAgICAgdmlzaWJsZTogKGZpZWxkLnZpc2libGUgPT09IHVuZGVmaW5lZCkgPyB0cnVlIDogZmllbGQudmlzaWJsZSxcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgc2VsZi50YWJsZUZpZWxkcy5wdXNoKG9iailcXHJcXG4gICAgICB9KVxcclxcbiAgICB9LFxcclxcbiAgICBzZXREYXRhIChkYXRhKSB7XFxyXFxuICAgICAgLy8gdGhpcy5hcGlNb2RlID0gZmFsc2VcXHJcXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xcclxcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhXFxyXFxuICAgICAgICByZXR1cm5cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRpbmcnKVxcclxcblxcclxcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLmRhdGFQYXRoLCBudWxsKVxcclxcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLnBhZ2luYXRpb25QYXRoLCBudWxsKVxcclxcblxcclxcbiAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xcclxcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ3BhZ2luYXRpb24tZGF0YScsIHRoaXMudGFibGVQYWdpbmF0aW9uKVxcclxcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgc2V0VGl0bGUgKHN0cikge1xcclxcbiAgICAgIGlmICh0aGlzLmlzU3BlY2lhbEZpZWxkKHN0cikpIHtcXHJcXG4gICAgICAgIHJldHVybiAnJ1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGhpcy50aXRsZUNhc2Uoc3RyKVxcclxcbiAgICB9LFxcclxcbiAgICBnZXRUaXRsZSAoZmllbGQpIHtcXHJcXG4gICAgICBpZiAodHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZpZWxkLnRpdGxlKClcXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ3VuZGVmaW5lZCdcXHJcXG4gICAgICAgID8gZmllbGQubmFtZS5yZXBsYWNlKCcuJywgJyAnKVxcclxcbiAgICAgICAgOiBmaWVsZC50aXRsZVxcclxcbiAgICB9LFxcclxcbiAgICByZW5kZXJUaXRsZSAoZmllbGQpIHtcXHJcXG4gICAgICBsZXQgdGl0bGUgPSB0aGlzLmdldFRpdGxlKGZpZWxkKVxcclxcblxcclxcbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHRoaXMuaXNJbkN1cnJlbnRTb3J0R3JvdXAoZmllbGQpIHx8IHRoaXMuaGFzU29ydGFibGVJY29uKGZpZWxkKSkge1xcclxcbiAgICAgICAgbGV0IHN0eWxlID0gYG9wYWNpdHk6JHt0aGlzLnNvcnRJY29uT3BhY2l0eShmaWVsZCl9O3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OnJpZ2h0YFxcclxcbiAgICAgICAgbGV0IGljb25UYWcgPSB0aGlzLnNob3dTb3J0SWNvbnMgPyB0aGlzLnJlbmRlckljb25UYWcoWydzb3J0LWljb24nLCB0aGlzLnNvcnRJY29uKGZpZWxkKV0sIGBzdHlsZT1cXFwiJHtzdHlsZX1cXFwiYCkgOiAnJ1xcclxcbiAgICAgICAgcmV0dXJuIHRpdGxlICsgJyAnICsgaWNvblRhZ1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGl0bGVcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVuZGVyU2VxdWVuY2UgKGluZGV4KSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMudGFibGVQYWdpbmF0aW9uXFxyXFxuICAgICAgICA/IHRoaXMudGFibGVQYWdpbmF0aW9uLmZyb20gKyBpbmRleFxcclxcbiAgICAgICAgOiBpbmRleFxcclxcbiAgICB9LFxcclxcbiAgICByZW5kZXJOb3JtYWxGaWVsZCAoZmllbGQsIGl0ZW0pIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy5oYXNDYWxsYmFjayhmaWVsZClcXHJcXG4gICAgICAgID8gdGhpcy5jYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXFxyXFxuICAgICAgICA6IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSwgJycpXFxyXFxuICAgIH0sXFxyXFxuICAgIGlzU3BlY2lhbEZpZWxkIChmaWVsZE5hbWUpIHtcXHJcXG4gICAgICByZXR1cm4gZmllbGROYW1lLnNsaWNlKDAsIDIpID09PSAnX18nXFxyXFxuICAgIH0sXFxyXFxuICAgIHRpdGxlQ2FzZSAoc3RyKSB7XFxyXFxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcdysvZywgZnVuY3Rpb24odHh0KSB7XFxyXFxuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgY2FtZWxDYXNlIChzdHIsIGRlbGltaXRlciA9ICdfJykge1xcclxcbiAgICAgIGxldCBzZWxmID0gdGhpc1xcclxcbiAgICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xcclxcbiAgICAgICAgcmV0dXJuIHNlbGYudGl0bGVDYXNlKGl0ZW0pXFxyXFxuICAgICAgfSkuam9pbignJylcXHJcXG4gICAgfSxcXHJcXG4gICAgbm90SW4gKHN0ciwgYXJyKSB7XFxyXFxuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKHN0cikgPT09IC0xXFxyXFxuICAgIH0sXFxyXFxuICAgIGxvYWREYXRhIChzdWNjZXNzID0gdGhpcy5sb2FkU3VjY2VzcywgZmFpbGVkID0gdGhpcy5sb2FkRmFpbGVkKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuaXNEYXRhTW9kZSkge1xcclxcbiAgICAgICAgdGhpcy5jYWxsRGF0YU1hbmFnZXIoKVxcclxcbiAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcXHJcXG5cXHJcXG4gICAgICB0aGlzLmh0dHBPcHRpb25zWydwYXJhbXMnXSA9IHRoaXMuZ2V0QXBwZW5kUGFyYW1zKCB0aGlzLmdldEFsbFF1ZXJ5UGFyYW1zKCkgKVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLmZldGNoKHRoaXMuYXBpVXJsLCB0aGlzLmh0dHBPcHRpb25zKS50aGVuKFxcclxcbiAgICAgICAgICBzdWNjZXNzLFxcclxcbiAgICAgICAgICBmYWlsZWRcXHJcXG4gICAgICApLmNhdGNoKCgpID0+IGZhaWxlZCgpKVxcclxcbiAgICB9LFxcclxcbiAgICBmZXRjaCAoYXBpVXJsLCBodHRwT3B0aW9ucykge1xcclxcbiAgICAgIHJldHVybiB0aGlzLmh0dHBGZXRjaFxcclxcbiAgICAgICAgICA/IHRoaXMuaHR0cEZldGNoKGFwaVVybCwgaHR0cE9wdGlvbnMpXFxyXFxuICAgICAgICAgIDogYXhpb3NbdGhpcy5odHRwTWV0aG9kXShhcGlVcmwsIGh0dHBPcHRpb25zKVxcclxcbiAgICB9LFxcclxcbiAgICBsb2FkU3VjY2VzcyAocmVzcG9uc2UpIHtcXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZC1zdWNjZXNzJywgcmVzcG9uc2UpXFxyXFxuXFxyXFxuICAgICAgbGV0IGJvZHkgPSB0aGlzLnRyYW5zZm9ybShyZXNwb25zZS5kYXRhKVxcclxcblxcclxcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShib2R5LCB0aGlzLmRhdGFQYXRoLCBudWxsKVxcclxcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGhpcy5nZXRPYmplY3RWYWx1ZShib2R5LCB0aGlzLnBhZ2luYXRpb25QYXRoLCBudWxsKVxcclxcblxcclxcbiAgICAgIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbCkge1xcclxcbiAgICAgICAgdGhpcy53YXJuKCd2dWV0YWJsZTogcGFnaW5hdGlvbi1wYXRoIFxcXCInICsgdGhpcy5wYWdpbmF0aW9uUGF0aCArICdcXFwiIG5vdCBmb3VuZC4gJ1xcclxcbiAgICAgICAgICArICdJdCBsb29rcyBsaWtlIHRoZSBkYXRhIHJldHVybmVkIGZyb20gdGhlIHNldmVyIGRvZXMgbm90IGhhdmUgcGFnaW5hdGlvbiBpbmZvcm1hdGlvbiAnXFxyXFxuICAgICAgICAgICsgXFxcIm9yIHlvdSBtYXkgaGF2ZSBzZXQgaXQgaW5jb3JyZWN0bHkuXFxcXG5cXFwiXFxyXFxuICAgICAgICAgICsgJ1lvdSBjYW4gZXhwbGljaXRseSBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYnkgc2V0dGluZyBwYWdpbmF0aW9uLXBhdGg9XFxcIlxcXCIuJ1xcclxcbiAgICAgICAgKVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcXHJcXG4gICAgICAgIHRoaXMuZml4SGVhZGVyKClcXHJcXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcXHJcXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIGZpeEhlYWRlcigpIHtcXHJcXG4gICAgICBpZiAoIXRoaXMuaXNGaXhlZEhlYWRlcikge1xcclxcbiAgICAgICAgcmV0dXJuO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdXFxyXFxuICAgICAgaWYgKGVsZW0gIT0gbnVsbCkge1xcclxcbiAgICAgICAgaWYgKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpIHtcXHJcXG4gICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlID0gdHJ1ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGVsc2Uge1xcclxcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUgPSBmYWxzZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGxvYWRGYWlsZWQgKHJlc3BvbnNlKSB7XFxyXFxuICAgICAgY29uc29sZS5lcnJvcignbG9hZC1lcnJvcicsIHJlc3BvbnNlKVxcclxcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkLWVycm9yJywgcmVzcG9uc2UpXFxyXFxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXFxyXFxuICAgIH0sXFxyXFxuICAgIHRyYW5zZm9ybSAoZGF0YSkge1xcclxcbiAgICAgIGxldCBmdW5jID0gJ3RyYW5zZm9ybSdcXHJcXG5cXHJcXG4gICAgICBpZiAodGhpcy5wYXJlbnRGdW5jdGlvbkV4aXN0cyhmdW5jKSkge1xcclxcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBkYXRhKVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gZGF0YVxcclxcbiAgICB9LFxcclxcbiAgICBwYXJlbnRGdW5jdGlvbkV4aXN0cyAoZnVuYykge1xcclxcbiAgICAgIHJldHVybiAoZnVuYyAhPT0gJycgJiYgdHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJylcXHJcXG4gICAgfSxcXHJcXG4gICAgY2FsbFBhcmVudEZ1bmN0aW9uIChmdW5jLCBhcmdzLCBkZWZhdWx0VmFsdWUgPSBudWxsKSB7XFxyXFxuICAgICAgaWYgKHRoaXMucGFyZW50RnVuY3Rpb25FeGlzdHMoZnVuYykpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnRbZnVuY10uY2FsbCh0aGlzLiRwYXJlbnQsIGFyZ3MpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcXHJcXG4gICAgfSxcXHJcXG4gICAgZmlyZUV2ZW50IChldmVudE5hbWUsIGFyZ3MpIHtcXHJcXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyBldmVudE5hbWUsIGFyZ3MpXFxyXFxuICAgIH0sXFxyXFxuICAgIHdhcm4gKG1zZykge1xcclxcbiAgICAgIGlmICghdGhpcy5zaWxlbnQpIHtcXHJcXG4gICAgICAgIGNvbnNvbGUud2Fybihtc2cpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBnZXRBbGxRdWVyeVBhcmFtcyAoKSB7XFxyXFxuICAgICAgbGV0IHBhcmFtcyA9IHt9XFxyXFxuXFxyXFxuICAgICAgaWYgKHR5cGVvZih0aGlzLnF1ZXJ5UGFyYW1zKSA9PT0gJ2Z1bmN0aW9uJykge1xcclxcbiAgICAgICAgcGFyYW1zID0gdGhpcy5xdWVyeVBhcmFtcyh0aGlzLnNvcnRPcmRlciwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wZXJQYWdlKVxcclxcbiAgICAgICAgcmV0dXJuIHR5cGVvZihwYXJhbXMpICE9PSAnb2JqZWN0JyA/IHt9IDogcGFyYW1zXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnNvcnRdID0gdGhpcy5nZXRTb3J0UGFyYW0oKVxcclxcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBhZ2VdID0gdGhpcy5jdXJyZW50UGFnZVxcclxcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBlclBhZ2VdID0gdGhpcy5wZXJQYWdlXFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHBhcmFtc1xcclxcbiAgICB9LFxcclxcbiAgICBnZXRTb3J0UGFyYW0gKCkge1xcclxcbiAgICAgIGlmICghdGhpcy5zb3J0T3JkZXIgfHwgdGhpcy5zb3J0T3JkZXIuZmllbGQgPT0gJycpIHtcXHJcXG4gICAgICAgIHJldHVybiAnJ1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFsnZ2V0U29ydFBhcmFtJ10gPT09ICdmdW5jdGlvbicpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLiRwYXJlbnRbJ2dldFNvcnRQYXJhbSddLmNhbGwodGhpcy4kcGFyZW50LCB0aGlzLnNvcnRPcmRlcilcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFNvcnRQYXJhbSgpXFxyXFxuICAgIH0sXFxyXFxuICAgIGdldERlZmF1bHRTb3J0UGFyYW0gKCkge1xcclxcbiAgICAgIGxldCByZXN1bHQgPSAnJztcXHJcXG5cXHJcXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aDsgaSsrKSB7XFxyXFxuICAgICAgICBsZXQgZmllbGROYW1lID0gKHR5cGVvZiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQgPT09ICd1bmRlZmluZWQnKVxcclxcbiAgICAgICAgICA/IHRoaXMuc29ydE9yZGVyW2ldLmZpZWxkXFxyXFxuICAgICAgICAgIDogdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkO1xcclxcblxcclxcbiAgICAgICAgcmVzdWx0ICs9IGZpZWxkTmFtZSArICd8JyArIHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiArICgoaSsxKSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aCA/ICcsJyA6ICcnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgY29uc29sZS5sb2coJ2dldERlZmF1bHRTb3J0UGFyYW06ICcsIHJlc3VsdClcXHJcXG4gICAgICByZXR1cm4gcmVzdWx0O1xcclxcbiAgICB9LFxcclxcbiAgICBnZXRBcHBlbmRQYXJhbXMgKHBhcmFtcykge1xcclxcbiAgICAgIGZvciAobGV0IHggaW4gdGhpcy5hcHBlbmRQYXJhbXMpIHtcXHJcXG4gICAgICAgIHBhcmFtc1t4XSA9IHRoaXMuYXBwZW5kUGFyYW1zW3hdXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBwYXJhbXNcXHJcXG4gICAgfSxcXHJcXG4gICAgZXh0cmFjdE5hbWUgKHN0cmluZykge1xcclxcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVswXS50cmltKClcXHJcXG4gICAgfSxcXHJcXG4gICAgZXh0cmFjdEFyZ3MgKHN0cmluZykge1xcclxcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVsxXVxcclxcbiAgICB9LFxcclxcbiAgICBpc1NvcnRhYmxlIChmaWVsZCkge1xcclxcbiAgICAgIHJldHVybiAhKHR5cGVvZiBmaWVsZC5zb3J0RmllbGQgPT09ICd1bmRlZmluZWQnKVxcclxcbiAgICB9LFxcclxcbiAgICBpc0luQ3VycmVudFNvcnRHcm91cCAoZmllbGQpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpICE9PSBmYWxzZTtcXHJcXG4gICAgfSxcXHJcXG4gICAgaGFzU29ydGFibGVJY29uIChmaWVsZCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLmlzU29ydGFibGUoZmllbGQpICYmIHRoaXMuY3NzLnNvcnRhYmxlSWNvbiAhPSAnJ1xcclxcbiAgICB9LFxcclxcbiAgICBjdXJyZW50U29ydE9yZGVyUG9zaXRpb24gKGZpZWxkKSB7XFxyXFxuICAgICAgaWYgKCAhIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkpIHtcXHJcXG4gICAgICAgIHJldHVybiBmYWxzZVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aDsgaSsrKSB7XFxyXFxuICAgICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgaSkpIHtcXHJcXG4gICAgICAgICAgcmV0dXJuIGk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBmYWxzZTtcXHJcXG4gICAgfSxcXHJcXG4gICAgZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24gKGZpZWxkLCBpKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuc29ydE9yZGVyW2ldLmZpZWxkID09PSBmaWVsZC5uYW1lICYmIHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZCA9PT0gZmllbGQuc29ydEZpZWxkXFxyXFxuICAgIH0sXFxyXFxuICAgIG9yZGVyQnkgKGZpZWxkLCBldmVudCkge1xcclxcbiAgICAgIGlmICggISB0aGlzLmlzU29ydGFibGUoZmllbGQpICkgcmV0dXJuXFxyXFxuXFxyXFxuICAgICAgbGV0IGtleSA9IHRoaXMubXVsdGlTb3J0S2V5LnRvTG93ZXJDYXNlKCkgKyAnS2V5J1xcclxcblxcclxcbiAgICAgIGlmICh0aGlzLm11bHRpU29ydCAmJiBldmVudFtrZXldKSB7IC8vYWRkaW5nIGNvbHVtbiB0byBtdWx0aXNvcnRcXHJcXG4gICAgICAgIHRoaXMubXVsdGlDb2x1bW5Tb3J0KGZpZWxkKVxcclxcbiAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAvL25vIG11bHRpc29ydCwgb3IgcmVzZXR0aW5nIHNvcnRcXHJcXG4gICAgICAgIHRoaXMuc2luZ2xlQ29sdW1uU29ydChmaWVsZClcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDEgICAgLy8gcmVzZXQgcGFnZSBpbmRleFxcclxcbiAgICAgIGlmICh0aGlzLmFwaU1vZGUgfHwgdGhpcy5kYXRhTWFuYWdlcikge1xcclxcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtdWx0aUNvbHVtblNvcnQgKGZpZWxkKSB7XFxyXFxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZCk7XFxyXFxuXFxyXFxuICAgICAgaWYoaSA9PT0gZmFsc2UpIHsgLy90aGlzIGZpZWxkIGlzIG5vdCBpbiB0aGUgc29ydCBhcnJheSB5ZXRcXHJcXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xcclxcbiAgICAgICAgICBmaWVsZDogZmllbGQubmFtZSxcXHJcXG4gICAgICAgICAgc29ydEZpZWxkOiBmaWVsZC5zb3J0RmllbGQsXFxyXFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcXHJcXG4gICAgICAgIH0pO1xcclxcbiAgICAgIH0gZWxzZSB7IC8vdGhpcyBmaWVsZCBpcyBpbiB0aGUgc29ydCBhcnJheSwgbm93IHdlIGNoYW5nZSBpdHMgc3RhdGVcXHJcXG4gICAgICAgIGlmKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcXHJcXG4gICAgICAgICAgLy8gc3dpdGNoIGRpcmVjdGlvblxcclxcbiAgICAgICAgICB0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPSAnZGVzYydcXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgIC8vcmVtb3ZlIHNvcnQgY29uZGl0aW9uXFxyXFxuICAgICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZShpLCAxKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHNpbmdsZUNvbHVtblNvcnQgKGZpZWxkKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuc29ydE9yZGVyLmxlbmd0aCA9PT0gMCkge1xcclxcbiAgICAgICAgdGhpcy5jbGVhclNvcnRPcmRlcigpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTsgLy9yZW1vdmVzIGFkZGl0aW9uYWwgY29sdW1uc1xcclxcblxcclxcbiAgICAgIGlmICh0aGlzLmZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uKGZpZWxkLCAwKSkge1xcclxcbiAgICAgICAgLy8gY2hhbmdlIHNvcnQgZGlyZWN0aW9uXFxyXFxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYydcXHJcXG4gICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgLy8gcmVzZXQgc29ydCBkaXJlY3Rpb25cXHJcXG4gICAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmRpcmVjdGlvbiA9ICdhc2MnXFxyXFxuICAgICAgfVxcclxcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmZpZWxkID0gZmllbGQubmFtZVxcclxcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLnNvcnRGaWVsZCA9IGZpZWxkLnNvcnRGaWVsZFxcclxcbiAgICB9LFxcclxcbiAgICBjbGVhclNvcnRPcmRlciAoKSB7XFxyXFxuICAgICAgdGhpcy5zb3J0T3JkZXIucHVzaCh7XFxyXFxuICAgICAgICBmaWVsZDogJycsXFxyXFxuICAgICAgICBzb3J0RmllbGQ6ICcnLFxcclxcbiAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xcclxcbiAgICAgIH0pO1xcclxcbiAgICB9LFxcclxcbiAgICBzb3J0Q2xhc3MgKGZpZWxkKSB7XFxyXFxuICAgICAgbGV0IGNscyA9ICcnXFxyXFxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcXHJcXG5cXHJcXG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcXHJcXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nQ2xhc3MgOiB0aGlzLmNzcy5kZXNjZW5kaW5nQ2xhc3NcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIGNsc1xcclxcbiAgICB9LFxcclxcbiAgICBzb3J0SWNvbiAoZmllbGQpIHtcXHJcXG4gICAgICBsZXQgY2xzID0gdGhpcy5jc3Muc29ydGFibGVJY29uXFxyXFxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcXHJcXG5cXHJcXG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcXHJcXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nSWNvbiA6IHRoaXMuY3NzLmRlc2NlbmRpbmdJY29uXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBjbHM7XFxyXFxuICAgIH0sXFxyXFxuICAgIHNvcnRJY29uT3BhY2l0eSAoZmllbGQpIHtcXHJcXG4gICAgICAvKlxcclxcbiAgICAgICAqIGZpZWxkcyB3aXRoIHN0cm9uZ2VyIHByZWNlZGVuY2UgaGF2ZSBkYXJrZXIgY29sb3JcXHJcXG4gICAgICAgKlxcclxcbiAgICAgICAqIGlmIHRoZXJlIGFyZSBmZXcgZmllbGRzLCB3ZSBnbyBkb3duIGJ5IDAuM1xcclxcbiAgICAgICAqIGV4LiAyIGZpZWxkcyBhcmUgc2VsZWN0ZWQ6IDEuMCwgMC43XFxyXFxuICAgICAgICpcXHJcXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgbW9yZSB3ZSBnbyBkb3duIGV2ZW5seSBvbiB0aGUgZ2l2ZW4gc3BlY3RydW1cXHJcXG4gICAgICAgKiBleC4gNiBmaWVsZHMgYXJlIHNlbGVjdGVkOiAxLjAsIDAuODYsIDAuNzIsIDAuNTgsIDAuNDQsIDAuM1xcclxcbiAgICAgICAqL1xcclxcbiAgICAgIGxldCBtYXggPSAxLjAsXFxyXFxuICAgICAgICAgIG1pbiA9IDAuMyxcXHJcXG4gICAgICAgICAgc3RlcCA9IDAuM1xcclxcblxcclxcbiAgICAgIGxldCBjb3VudCA9IHRoaXMuc29ydE9yZGVyLmxlbmd0aDtcXHJcXG4gICAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxcclxcblxcclxcblxcclxcbiAgICAgIGlmKG1heCAtIGNvdW50ICogc3RlcCA8IG1pbikge1xcclxcbiAgICAgICAgc3RlcCA9IChtYXggLSBtaW4pIC8gKGNvdW50LTEpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGxldCBvcGFjaXR5ID0gbWF4IC0gY3VycmVudCAqIHN0ZXBcXHJcXG5cXHJcXG4gICAgICByZXR1cm4gb3BhY2l0eVxcclxcbiAgICB9LFxcclxcbiAgICBoYXNDYWxsYmFjayAoaXRlbSkge1xcclxcbiAgICAgIHJldHVybiBpdGVtLmNhbGxiYWNrID8gdHJ1ZSA6IGZhbHNlXFxyXFxuICAgIH0sXFxyXFxuICAgIGNhbGxDYWxsYmFjayAoZmllbGQsIGl0ZW0pIHtcXHJcXG4gICAgICBpZiAoICEgdGhpcy5oYXNDYWxsYmFjayhmaWVsZCkpIHJldHVyblxcclxcblxcclxcbiAgICAgIGlmKHR5cGVvZihmaWVsZC5jYWxsYmFjaykgPT0gJ2Z1bmN0aW9uJykge1xcclxcbiAgICAgICByZXR1cm4gZmllbGQuY2FsbGJhY2sodGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKSlcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgbGV0IGFyZ3MgPSBmaWVsZC5jYWxsYmFjay5zcGxpdCgnfCcpXFxyXFxuICAgICAgbGV0IGZ1bmMgPSBhcmdzLnNoaWZ0KClcXHJcXG5cXHJcXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJykge1xcclxcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKVxcclxcblxcclxcbiAgICAgICAgcmV0dXJuIChhcmdzLmxlbmd0aCA+IDApXFxyXFxuICAgICAgICAgID8gdGhpcy4kcGFyZW50W2Z1bmNdLmFwcGx5KHRoaXMuJHBhcmVudCwgW3ZhbHVlXS5jb25jYXQoYXJncykpXFxyXFxuICAgICAgICAgIDogdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCB2YWx1ZSlcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIG51bGxcXHJcXG4gICAgfSxcXHJcXG4gICAgZ2V0T2JqZWN0VmFsdWUgKG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XFxyXFxuICAgICAgZGVmYXVsdFZhbHVlID0gKHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnKSA/IG51bGwgOiBkZWZhdWx0VmFsdWVcXHJcXG5cXHJcXG4gICAgICBsZXQgb2JqID0gb2JqZWN0XFxyXFxuICAgICAgaWYgKHBhdGgudHJpbSgpICE9ICcnKSB7XFxyXFxuICAgICAgICBsZXQga2V5cyA9IHBhdGguc3BsaXQoJy4nKVxcclxcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xcclxcbiAgICAgICAgICBpZiAob2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmpba2V5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcXHJcXG4gICAgICAgICAgICBvYmogPSBvYmpba2V5XVxcclxcbiAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIG9iaiA9IGRlZmF1bHRWYWx1ZVxcclxcbiAgICAgICAgICAgIHJldHVyblxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgIH1cXHJcXG4gICAgICByZXR1cm4gb2JqXFxyXFxuICAgIH0sXFxyXFxuICAgIHRvZ2dsZUNoZWNrYm94IChkYXRhSXRlbSwgZmllbGROYW1lLCBldmVudCkge1xcclxcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxcclxcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxcclxcblxcclxcbiAgICAgIGlmIChkYXRhSXRlbVtpZENvbHVtbl0gPT09IHVuZGVmaW5lZCkge1xcclxcbiAgICAgICAgdGhpcy53YXJuKCdfX2NoZWNrYm94IGZpZWxkOiBUaGUgXFxcIicrdGhpcy50cmFja0J5KydcXFwiIGZpZWxkIGRvZXMgbm90IGV4aXN0ISBNYWtlIHN1cmUgdGhlIGZpZWxkIHlvdSBzcGVjaWZ5IGluIFxcXCJ0cmFjay1ieVxcXCIgcHJvcCBkb2VzIGV4aXN0LicpXFxyXFxuICAgICAgICByZXR1cm5cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxcclxcbiAgICAgIGlmIChpc0NoZWNrZWQpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0SWQoa2V5KVxcclxcbiAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICB0aGlzLnVuc2VsZWN0SWQoa2V5KVxcclxcbiAgICAgIH1cXHJcXG4gICAgICB0aGlzLiRlbWl0KCd2dWV0YWJsZTpjaGVja2JveC10b2dnbGVkJywgaXNDaGVja2VkLCBkYXRhSXRlbSlcXHJcXG4gICAgfSxcXHJcXG4gICAgc2VsZWN0SWQgKGtleSkge1xcclxcbiAgICAgIGlmICggISB0aGlzLmlzU2VsZWN0ZWRSb3coa2V5KSkge1xcclxcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRvLnB1c2goa2V5KVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgdW5zZWxlY3RJZCAoa2V5KSB7XFxyXFxuICAgICAgdGhpcy5zZWxlY3RlZFRvID0gdGhpcy5zZWxlY3RlZFRvLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XFxyXFxuICAgICAgICByZXR1cm4gaXRlbSAhPT0ga2V5XFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgaXNTZWxlY3RlZFJvdyAoa2V5KSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUby5pbmRleE9mKGtleSkgPj0gMFxcclxcbiAgICB9LFxcclxcbiAgICByb3dTZWxlY3RlZCAoZGF0YUl0ZW0sIGZpZWxkTmFtZSl7XFxyXFxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XFxyXFxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0ZWRSb3coa2V5KVxcclxcbiAgICB9LFxcclxcbiAgICBjaGVja0NoZWNrYm94ZXNTdGF0ZSAoZmllbGROYW1lKSB7XFxyXFxuICAgICAgaWYgKCEgdGhpcy50YWJsZURhdGEpIHJldHVyblxcclxcblxcclxcbiAgICAgIGxldCBzZWxmID0gdGhpc1xcclxcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxcclxcbiAgICAgIGxldCBzZWxlY3RvciA9ICd0aC52dWV0YWJsZS10aC1jaGVja2JveC0nICsgaWRDb2x1bW4gKyAnIGlucHV0W3R5cGU9Y2hlY2tib3hdJ1xcclxcbiAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxcclxcblxcclxcbiAgICAgIC8vZml4ZWQ6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCByZXR1cm4gdGhlIHR5cGVvZiBub2RlTGlzdCBub3QgYXJyYXlcXHJcXG4gICAgICBpZiAoZWxzLmZvckVhY2g9PT11bmRlZmluZWQpXFxyXFxuICAgICAgICBlbHMuZm9yRWFjaD1mdW5jdGlvbihjYil7XFxyXFxuICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlbHMsIGNiKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAvLyBjb3VudCBob3cgbWFueSBjaGVja2JveCByb3cgaW4gdGhlIGN1cnJlbnQgcGFnZSBoYXMgYmVlbiBjaGVja2VkXFxyXFxuICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy50YWJsZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcXHJcXG4gICAgICAgIHJldHVybiBzZWxmLnNlbGVjdGVkVG8uaW5kZXhPZihpdGVtW2lkQ29sdW1uXSkgPj0gMFxcclxcbiAgICAgIH0pXFxyXFxuXFxyXFxuICAgICAgLy8gY291bnQgPT0gMCwgY2xlYXIgdGhlIGNoZWNrYm94XFxyXFxuICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA8PSAwKSB7XFxyXFxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xcclxcbiAgICAgICAgICBlbC5pbmRldGVybWluYXRlID0gZmFsc2VcXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgICByZXR1cm4gZmFsc2VcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLy8gY291bnQgPiAwIGFuZCBjb3VudCA8IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnaW5kZXRlcm1pbmF0ZSdcXHJcXG4gICAgICBlbHNlIGlmIChzZWxlY3RlZC5sZW5ndGggPCB0aGlzLnBlclBhZ2UpIHtcXHJcXG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XFxyXFxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSB0cnVlXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgICAgcmV0dXJuIHRydWVcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLy8gY291bnQgPT0gcGVyUGFnZSwgc2V0IGNoZWNrYm94IHN0YXRlIHRvICdjaGVja2VkJ1xcclxcbiAgICAgIGVsc2Uge1xcclxcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcXHJcXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgICAgcmV0dXJuIHRydWVcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHRvZ2dsZUFsbENoZWNrYm94ZXMgKGZpZWxkTmFtZSwgZXZlbnQpIHtcXHJcXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcXHJcXG4gICAgICBsZXQgaXNDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcXHJcXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcXHJcXG5cXHJcXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XFxyXFxuICAgICAgICB0aGlzLnRhYmxlRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRhdGFJdGVtKSB7XFxyXFxuICAgICAgICAgIHNlbGYuc2VsZWN0SWQoZGF0YUl0ZW1baWRDb2x1bW5dKVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgdGhpcy50YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhSXRlbSkge1xcclxcbiAgICAgICAgICBzZWxmLnVuc2VsZWN0SWQoZGF0YUl0ZW1baWRDb2x1bW5dKVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9XFxyXFxuICAgICAgdGhpcy4kZW1pdCgndnVldGFibGU6Y2hlY2tib3gtdG9nZ2xlZC1hbGwnLCBpc0NoZWNrZWQpXFxyXFxuICAgIH0sXFxyXFxuICAgIGdvdG9QcmV2aW91c1BhZ2UgKCkge1xcclxcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gMSkge1xcclxcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZS0tXFxyXFxuICAgICAgICB0aGlzLmxvYWREYXRhKClcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGdvdG9OZXh0UGFnZSAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCB0aGlzLnRhYmxlUGFnaW5hdGlvbi5sYXN0X3BhZ2UpIHtcXHJcXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UrK1xcclxcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBnb3RvUGFnZSAocGFnZSkge1xcclxcbiAgICAgIGlmIChwYWdlICE9IHRoaXMuY3VycmVudFBhZ2UgJiYgKHBhZ2UgPiAwICYmIHBhZ2UgPD0gdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlKSkge1xcclxcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VcXHJcXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgaXNWaXNpYmxlRGV0YWlsUm93IChyb3dJZCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLnZpc2libGVEZXRhaWxSb3dzLmluZGV4T2YoIHJvd0lkICkgPj0gMFxcclxcbiAgICB9LFxcclxcbiAgICBzaG93RGV0YWlsUm93IChyb3dJZCkge1xcclxcbiAgICAgIGlmICghdGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XFxyXFxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnB1c2gocm93SWQpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBoaWRlRGV0YWlsUm93IChyb3dJZCkge1xcclxcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcXHJcXG4gICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3Muc3BsaWNlKFxcclxcbiAgICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLmluZGV4T2Yocm93SWQpLFxcclxcbiAgICAgICAgICAxXFxyXFxuICAgICAgICApXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB0b2dnbGVEZXRhaWxSb3cgKHJvd0lkKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xcclxcbiAgICAgICAgdGhpcy5oaWRlRGV0YWlsUm93KHJvd0lkKVxcclxcbiAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICB0aGlzLnNob3dEZXRhaWxSb3cocm93SWQpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBzaG93RmllbGQgKGluZGV4KSB7XFxyXFxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBoaWRlRmllbGQgKGluZGV4KSB7XFxyXFxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gZmFsc2VcXHJcXG4gICAgfSxcXHJcXG4gICAgdG9nZ2xlRmllbGQgKGluZGV4KSB7XFxyXFxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gISB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlXFxyXFxuICAgIH0sXFxyXFxuICAgIHJlbmRlckljb25UYWcgKGNsYXNzZXMsIG9wdGlvbnMgPSAnJykge1xcclxcbiAgICAgIHJldHVybiB0eXBlb2YodGhpcy5jc3MucmVuZGVySWNvbikgPT09ICd1bmRlZmluZWQnXFxyXFxuICAgICAgICA/IGA8aSBjbGFzcz1cXFwiJHtjbGFzc2VzLmpvaW4oJyAnKX1cXFwiICR7b3B0aW9uc30+PC9pPmBcXHJcXG4gICAgICAgIDogdGhpcy5jc3MucmVuZGVySWNvbihjbGFzc2VzLCBvcHRpb25zKVxcclxcbiAgICB9LFxcclxcbiAgICBtYWtlUGFnaW5hdGlvbiAodG90YWwgPSBudWxsLCBwZXJQYWdlID0gbnVsbCwgY3VycmVudFBhZ2UgPSBudWxsKSB7XFxyXFxuICAgICAgbGV0IHBhZ2luYXRpb24gPSB7fVxcclxcbiAgICAgIHRvdGFsID0gdG90YWwgPT09IG51bGwgPyB0aGlzLmRhdGFUb3RhbCA6IHRvdGFsXFxyXFxuICAgICAgcGVyUGFnZSA9IHBlclBhZ2UgPT09IG51bGwgPyB0aGlzLnBlclBhZ2UgOiBwZXJQYWdlXFxyXFxuICAgICAgY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA9PT0gbnVsbCA/IHRoaXMuY3VycmVudFBhZ2UgOiBjdXJyZW50UGFnZVxcclxcblxcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAndG90YWwnOiB0b3RhbCxcXHJcXG4gICAgICAgICdwZXJfcGFnZSc6IHBlclBhZ2UsXFxyXFxuICAgICAgICAnY3VycmVudF9wYWdlJzogY3VycmVudFBhZ2UsXFxyXFxuICAgICAgICAnbGFzdF9wYWdlJzogTWF0aC5jZWlsKHRvdGFsIC8gcGVyUGFnZSkgfHwgMCxcXHJcXG4gICAgICAgICduZXh0X3BhZ2VfdXJsJzogJycsXFxyXFxuICAgICAgICAncHJldl9wYWdlX3VybCc6ICcnLFxcclxcbiAgICAgICAgJ2Zyb20nOiAoY3VycmVudFBhZ2UgLTEpICogcGVyUGFnZSArMSxcXHJcXG4gICAgICAgICd0byc6IE1hdGgubWluKGN1cnJlbnRQYWdlICogcGVyUGFnZSwgdG90YWwpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBub3JtYWxpemVTb3J0T3JkZXIgKCkge1xcclxcbiAgICAgIHRoaXMuc29ydE9yZGVyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xcclxcbiAgICAgICAgaXRlbS5zb3J0RmllbGQgPSBpdGVtLnNvcnRGaWVsZCB8fCBpdGVtLmZpZWxkXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgY2FsbERhdGFNYW5hZ2VyICgpIHtcXHJcXG4gICAgICBpZiAodGhpcy5kYXRhTWFuYWdlciA9PT0gbnVsbCAmJiB0aGlzLmRhdGEgPT09IG51bGwpIHJldHVyblxcclxcblxcclxcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZGF0YSkpIHtcXHJcXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIG1vZGU6IGFycmF5JylcXHJcXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmRhdGEpXFxyXFxuICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgIHRoaXMubm9ybWFsaXplU29ydE9yZGVyKClcXHJcXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmRhdGFNYW5hZ2VyKHRoaXMuc29ydE9yZGVyLCB0aGlzLm1ha2VQYWdpbmF0aW9uKCkpKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgb25Sb3dDbGFzcyAoZGF0YUl0ZW0sIGluZGV4KSB7XFxyXFxuICAgICAgaWYgKHRoaXMucm93Q2xhc3NDYWxsYmFjayAhPT0gJycpIHtcXHJcXG4gICAgICAgIHRoaXMud2FybignXFxcInJvdy1jbGFzcy1jYWxsYmFja1xcXCIgcHJvcCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFxcXCJyb3ctY2xhc3NcXFwiIHByb3AgaW5zdGVhZC4nKVxcclxcbiAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGlmICh0eXBlb2YodGhpcy5yb3dDbGFzcykgPT09ICdmdW5jdGlvbicpIHtcXHJcXG4gICAgICAgIHJldHVybiB0aGlzLnJvd0NsYXNzKGRhdGFJdGVtLCBpbmRleClcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHRoaXMucm93Q2xhc3NcXHJcXG4gICAgfSxcXHJcXG4gICAgb25Sb3dDaGFuZ2VkIChkYXRhSXRlbSkge1xcclxcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdyb3ctY2hhbmdlZCcsIGRhdGFJdGVtKVxcclxcbiAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIG9uUm93Q2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ3Jvdy1jbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxcclxcbiAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIG9uUm93RG91YmxlQ2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ3Jvdy1kYmxjbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxcclxcbiAgICB9LFxcclxcbiAgICBvbkRldGFpbFJvd0NsaWNrIChkYXRhSXRlbSwgZXZlbnQpIHtcXHJcXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnZGV0YWlsLXJvdy1jbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxcclxcbiAgICB9LFxcclxcbiAgICBvbkNlbGxDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtY2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXFxyXFxuICAgIH0sXFxyXFxuICAgIG9uQ2VsbERvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpIHtcXHJcXG4gICAgICB0aGlzLiRlbWl0KHRoaXMuZXZlbnRQcmVmaXggKyAnY2VsbC1kYmxjbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcXHJcXG4gICAgfSxcXHJcXG4gICAgb25DZWxsUmlnaHRDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtcmlnaHRjbGlja2VkJywgZGF0YUl0ZW0sIGZpZWxkLCBldmVudClcXHJcXG4gICAgfSxcXHJcXG4gICAgLypcXHJcXG4gICAgICogQVBJIGZvciBleHRlcm5hbHNcXHJcXG4gICAgICovXFxyXFxuICAgIGNoYW5nZVBhZ2UgKHBhZ2UpIHtcXHJcXG4gICAgICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XFxyXFxuICAgICAgICB0aGlzLmdvdG9QcmV2aW91c1BhZ2UoKVxcclxcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XFxyXFxuICAgICAgICB0aGlzLmdvdG9OZXh0UGFnZSgpXFxyXFxuICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgIHRoaXMuZ290b1BhZ2UocGFnZSlcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHJlbG9hZCAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoKVxcclxcbiAgICB9LFxcclxcbiAgICByZWZyZXNoICgpIHtcXHJcXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMVxcclxcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVzZXREYXRhICgpIHtcXHJcXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IG51bGxcXHJcXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgnZGF0YS1yZXNldCcpXFxyXFxuICAgIH1cXHJcXG4gIH0sIC8vIGVuZDogbWV0aG9kc1xcclxcbiAgd2F0Y2g6IHtcXHJcXG4gICAgJ211bHRpU29ydCcgKG5ld1ZhbCwgb2xkVmFsKSB7XFxyXFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gZmFsc2UgJiYgdGhpcy5zb3J0T3JkZXIubGVuZ3RoID4gMSkge1xcclxcbiAgICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKDEpO1xcclxcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgJ2FwaVVybCcgIChuZXdWYWwsIG9sZFZhbCkge1xcclxcbiAgICAgIGlmKHRoaXMucmVhY3RpdmVBcGlVcmwgJiYgbmV3VmFsICE9PSBvbGRWYWwpXFxyXFxuICAgICAgICB0aGlzLnJlZnJlc2goKVxcclxcbiAgICB9LFxcclxcbiAgICAnZGF0YScgKG5ld1ZhbCwgb2xkVmFsKSB7XFxyXFxuICAgICAgdGhpcy5zZXREYXRhKG5ld1ZhbClcXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIFt2LWNsb2FrXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUgdGguc29ydGFibGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzIxODVkMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWJvZHktd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdy15OmF1dG87XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtaGVhZC13cmFwcGVyIHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWFjdGlvbnMge1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtcGFnaW5hdGlvbi1pbmZvIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC52dWV0YWJsZS1lbXB0eS1yZXN1bHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtY2xpcC10ZXh0IHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtc2VtYW50aWMtbm8tdG9wIHtcXHJcXG4gICAgYm9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6MCAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWZpeGVkLWxheW91dCB7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtZ3V0dGVyLWNvbCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZSAgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTE1OTY1ZTNiXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmlzRml4ZWRIZWFkZXJcbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1oZWFkLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBbXCJ2dWV0YWJsZVwiLCBfdm0uY3NzLnRhYmxlQ2xhc3MsIF92bS5jc3MudGFibGVIZWFkZXJDbGFzc11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgeyBjbGFzczogW192bS5jc3MuZ1RhYmxlVGhlYWRDbGFzc10gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgeyBjbGFzczogW192bS5jc3MuZ1RhYmxlVGhlYWRUckNsYXNzXSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNoZWNrYm94LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uY2hlY2tDaGVja2JveGVzU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQWxsQ2hlY2tib3hlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNvbXBvbmVudC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNsb3QtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90SW4oX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIl9cIiArIGZpZWxkLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxWaXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZ3V0dGVyLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLnNjcm9sbEJhcldpZHRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1ib2R5LXdyYXBwZXJcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogX3ZtLnRhYmxlSGVpZ2h0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzLCBfdm0uY3NzLnRhYmxlQm9keUNsYXNzXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImNvbGdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImNvbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfY29sX1wiICsgZmllbGQubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgeyBjbGFzczogW1widnVldGFibGUtYm9keVwiLCBfdm0uY3NzLmdUYWJsZUJvZHlDbGFzc10gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZURhdGEsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5vblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IF92bS5vblJvd0NoYW5nZWQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyU2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2hhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVySWNvblRhZyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGxlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5oYW5kbGVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY2hlY2tib3hlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0ucm93U2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQ2hlY2tib3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1maWVsZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtc2xvdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RGF0YTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RmllbGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJOb3JtYWxGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxEb3VibGVDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlRGV0YWlsUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLmRldGFpbFJvd1RyYW5zaXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVmlzaWJsZURldGFpbFJvdyhpdGVtW192bS50cmFja0J5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmNzcy5kZXRhaWxSb3dDbGFzc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHNwYW46IF92bS5jb3VudFZpc2libGVGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZGV0YWlsUm93Q29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5RW1wdHlEYXRhUm93XG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZW1wdHktcmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ubm9EYXRhVGVtcGxhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubGVzc1RoYW5NaW5Sb3dzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2woX3ZtLmJsYW5rUm93cywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpLCBzdGF0aWNDbGFzczogXCJibGFuay1yb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBmaWVsZEluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLCoFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX2MoXCJ0YWJsZVwiLCB7IGNsYXNzOiBbXCJ2dWV0YWJsZVwiLCBfdm0uY3NzLnRhYmxlQ2xhc3NdIH0sIFtcbiAgICAgICAgX2MoXCJ0aGVhZFwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5nVGFibGVUaGVhZENsYXNzXSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICB7IGNsYXNzOiBbX3ZtLmNzcy5nVGFibGVUaGVhZFRyQ2xhc3NdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY2hlY2tib3gtXCIgKyBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLmNoZWNrQ2hlY2tib3hlc1N0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUFsbENoZWNrYm94ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jb21wb25lbnQtXCIgKyBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zbG90LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubm90SW4oX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNvcnRDbGFzcyhmaWVsZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIl9cIiArIGZpZWxkLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICB7IGNsYXNzOiBbXCJ2dWV0YWJsZS1ib2R5XCIsIF92bS5jc3MuZ1RhYmxlQm9keUNsYXNzXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbUluZGV4ICUgMiA9PSAwID8gXCJldmVuXCIgOiBcIm9kZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0NsYXNzKGl0ZW0sIGl0ZW1JbmRleClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0taW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogX3ZtLm9uUm93Q2hhbmdlZChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zZXF1ZW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNlcXVlbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9faGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJJY29uVGFnKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGxlLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jc3MuaGFuZGxlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1jaGVja2JveGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0ucm93U2VsZWN0ZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlQ2hlY2tib3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctaW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZmllbGRcIjogZmllbGQuc29ydEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNsb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJbmRleDogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93RmllbGQ6IGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhc0NhbGxiYWNrKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYWxsQ2FsbGJhY2soZmllbGQsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IGZpZWxkLmRhdGFDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRPYmplY3RWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxEb3VibGVDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0bWVudTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbFJpZ2h0Q2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS51c2VEZXRhaWxSb3dcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0uZGV0YWlsUm93VHJhbnNpdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNWaXNpYmxlRGV0YWlsUm93KGl0ZW1bX3ZtLnRyYWNrQnldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLmNzcy5kZXRhaWxSb3dDbGFzc10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5kZXRhaWxSb3dDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZGlzcGxheUVtcHR5RGF0YVJvd1xuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vRGF0YVRlbXBsYXRlKSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0ubGVzc1RoYW5NaW5Sb3dzXG4gICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5ibGFua1Jvd3MsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiYmxhbmstcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBmaWVsZEluZGV4IH0sIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE1OTY1ZTNiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTE1OTY1ZTNiXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgY2xhc3M6IFtcInZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mb1wiLCBfdm0uY3NzLmluZm9DbGFzc10sXG4gICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnBhZ2luYXRpb25JbmZvKSB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE3NzI0MDgzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNzcyNDA4M1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTE3NzI0MDgzXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5zaG93QnV0dG9uLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0J1dHRvblwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXhzIHJlZFwiLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmRlbGV0ZUxhYmVsKSB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS5jbGlja0hhbmRsZXIoX3ZtLmRlbGV0ZVVybClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJjN2Y2MjY4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yYzdmNjI2OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vRGVsZXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0yYzdmNjI2OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vRGVsZXRlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnRhYmxlUGFnaW5hdGlvbiAmJiBfdm0udGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSA+IDEsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJsZVBhZ2luYXRpb24gJiYgdGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSA+IDFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2xhc3M6IF92bS5jc3Mud3JhcHBlckNsYXNzXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uRmlyc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5maXJzdCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5maXJzdF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCq1wiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkZpcnN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZShcInByZXZcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLm5leHQgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMucHJldl0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCoOKAuVwiKV0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm5vdEVub3VnaFBhZ2VzXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS50b3RhbFBhZ2UsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5wYWdlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0N1cnJlbnRQYWdlKG4pID8gX3ZtLmNzcy5hY3RpdmVDbGFzcyA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhuKSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkUGFnZShuKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS53aW5kb3dTaXplLCBmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jc3MucGFnZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaXNDdXJyZW50UGFnZShfdm0ud2luZG93U3RhcnQgKyBuIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICA/IF92bS5jc3MuYWN0aXZlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ud2luZG93U3RhcnQgKyBuIC0gMSkgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoX3ZtLndpbmRvd1N0YXJ0ICsgbiAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIFwiYnRuLW5hdlwiLFxuICAgICAgICAgICAgX3ZtLmNzcy5saW5rQ2xhc3MsXG4gICAgICAgICAgICBfdm0uaXNPbkxhc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKFwibmV4dFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMubmV4dCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5uZXh0XSB9KVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIuKAusKgXCIpXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uTGFzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoX3ZtLnRvdGFsUGFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLmxhc3QgIT0gXCJcIlxuICAgICAgICAgICAgPyBfYyhcImlcIiwgeyBjbGFzczogW192bS5jc3MuaWNvbnMubGFzdF0gfSlcbiAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLCu1wiKV0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zZWZkZDU5NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2VmZGQ1OTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTNlZmRkNTk2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUgPT0gXCJkYW5nZXJcIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZSA9PSAnZGFuZ2VyJ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXIgZmFkZSBpbiBhbGVydC1kaXNtaXNzaWJsZVwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxOHB4XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBfdm0udHlwZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUgPT0gXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInR5cGUgPT0gJ3N1Y2Nlc3MnXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgZmFkZSBpbiBhbGVydC1kaXNtaXNzaWJsZVwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxOHB4XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBfdm0udHlwZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUgPT0gXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInR5cGUgPT0gJ3dhcm5pbmcnXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LXdhcm5pbmcgZmFkZSBpbiBhbGVydC1kaXNtaXNzaWJsZVwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxOHB4XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBfdm0udHlwZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUgPT0gXCJpbmZvXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInR5cGUgPT0gJ2luZm8nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWluZm8gZmFkZSBpbiBhbGVydC1kaXNtaXNzaWJsZVwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxOHB4XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICBfdm0udHlwZSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICAgIFwiKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNjUyMjk0MzBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY1MjI5NDMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTY1MjI5NDMwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwb3J0bGV0LWJvZHlcIiwgYXR0cnM6IHsgaWQ6IFwic3R1ZGVudC1jbGFzc2VzXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibm90aWZpY2F0aW9uXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBhY3RpdmVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYWxsX3N0dWRlbnRfY2xhc3Nlc1wiLCByb2xlOiBcInRhYnBhbmVsXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsaXN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJwcm9wcy1wYW5lbFwiOiBfdm0ubGlzdFBhbmVsLFxuICAgICAgICAgICAgICAgICAgXCJwcm9wcy11cmxzXCI6IF92bS51cmxzLFxuICAgICAgICAgICAgICAgICAgXCJwcm9wcy1wZXJtaXNzaW9uc1wiOiBfdm0ucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICBcInByb3BzLXRyYW5zXCI6IF92bS50cmFuc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc1MGY1YWI0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NTBmNWFiNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTWFzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03NTBmNWFiNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTWFzdGVyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmxpc3RQYW5lbFN0YXR1cyxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImxpc3RQYW5lbFN0YXR1c1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJhbmltYXRlZCBmYWRlSW5cIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sU2VhcmNoUGFuZWxTdGF0dXMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsU2VhcmNoUGFuZWxTdGF0dXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1kZW1vIGFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtLWRlbW9fX3ByZXZpZXcgZy1zZWFyY2gtcGFuZWxcIiB9KV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZ1ZXRhYmxlXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJ2dWV0YWJsZVwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgZy10YWJsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJhcGktdXJsXCI6IF92bS51cmxzLmluZGV4LFxuICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgIGNzczogX3ZtLmNzcyxcbiAgICAgICAgICAgICAgXCJhcHBlbmQtcGFyYW1zXCI6IF92bS5leHRlcm5hbFBhcmFtcyxcbiAgICAgICAgICAgICAgXCJwYWdpbmF0aW9uLXBhdGhcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidnVldGFibGU6Y2VsbC1jbGlja2VkXCI6IF92bS5vbkNlbGxDbGlja2VkLFxuICAgICAgICAgICAgICBcInZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YVwiOiBfdm0ub25QYWdpbmF0aW9uRGF0YSxcbiAgICAgICAgICAgICAgXCJ2dWV0YWJsZTpsb2FkaW5nXCI6IF92bS5zZXRMb2FkZXIsXG4gICAgICAgICAgICAgIFwidnVldGFibGU6bG9hZGVkXCI6IF92bS5zZXRMb2FkZXIsXG4gICAgICAgICAgICAgIFwidnVldGFibGU6bG9hZC1lcnJvclwiOiBfdm0uaGFuZGxlTG9hZEVycm9yLFxuICAgICAgICAgICAgICBcInZ1ZXRhYmxlOmxvYWQtc3VjY2Vzc1wiOiBfdm0uc2hvd0pvaW5CdXR0b25cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZy1qb2luLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tcHJpbWFyeSBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMucm93RGF0YS51dWlkXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLnVybHMuam9pbl9jbGFzcy5yZXBsYWNlQXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVybHMuam9pbl9jbGFzcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnJvd0RhdGEudXVpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udHJhbnMuY29tbW9uLmpvaW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4taW5mbyBidG4tc20gZy1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3Blbk1vZGFsKHByb3BzLnJvd0RhdGEubm90ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50cmFucy5jb21tb24ubm90ZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSBnLXJlc3BvbnNpdmUtdGFibGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidi1taWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG0tZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiUGVyIFBhZ2U6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW50aXR5LnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW50aXR5LnBlclBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBtLWlucHV0IG0taW5wdXQtLXNvbGlkIGctc2VsZWN0LWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlclBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIzXCIgfSB9LCBbX3ZtLl92KFwiM1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMFwiIH0gfSwgW192bS5fdihcIjEwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjIwXCIgfSB9LCBbX3ZtLl92KFwiMjBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTBcIiB9IH0sIFtfdm0uX3YoXCI1MFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxNTBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjE1MFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIzMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjMwMFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI1MDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjUwMFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjEwMDBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidnVldGFibGUtcGFnaW5hdGlvbi1pbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhZ2luYXRpb25JbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJpbmZvLXRlbXBsYXRlXCI6IFwiU2hvd2luZyB7dG99IEZyb20ge3RvdGFsfSBSZWNvcmRzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaW5mby1jbGFzc1wiOiBcInBhZ2luYXRpb24taW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ2LW1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGVhcmZpeFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImctc20tcHVsbC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidnVldGFibGUtcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjc3M6IF92bS5jc3MucGFnaW5hdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXBhZ2luYXRpb246Y2hhbmdlLXBhZ2VcIjogX3ZtLm9uQ2hhbmdlUGFnZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzk5ODZkMjBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc5OTg2ZDIwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi03OTk4NmQyMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTk2NWUzYlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVldGFibGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjZlZTVkMjRjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTU5NjVlM2JcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTU5NjVlM2JcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTU5NjVlM2JcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlU3dlZXRBbGVydD10KCk6ZS5WdWVTd2VldEFsZXJ0PXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgYT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyx0KSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIi9idWlsZC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPW4oMSkscj1vKGEpO3QuZGVmYXVsdD1yLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT1uKDYpLHI9byhhKTtuKDUpO3ZhciBpPXt9O2kuaW5zdGFsbD1mdW5jdGlvbihlKXtlLnByb3RvdHlwZS4kc3dhbD1yLmRlZmF1bHR9LHQuZGVmYXVsdD1pfSxmdW5jdGlvbihlLHQsbil7dD1lLmV4cG9ydHM9bigzKSgpLHQucHVzaChbZS5pZCwnYm9keS5zd2FsMi1zaG93bntvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItY29udGFpbmVyLGJvZHkuc3dhbDItaW9zZml4e3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtyaWdodDowfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0b3A6MDtib3R0b206MDtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt6LWluZGV4OjEwNjB9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRle3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXN9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1tb2RhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Zm9udC1mYW1pbHk6SGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Ym9yZGVyLXJhZGl1czo1cHg7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjphdXRvO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCV9LnN3YWwyLW1vZGFsOmZvY3Vze291dGxpbmU6bm9uZX0uc3dhbDItbW9kYWwuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItbW9kYWwgLnN3YWwyLXRpdGxle2NvbG9yOiM1OTU5NTk7Zm9udC1zaXplOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXJ7bWFyZ2luLXRvcDoxNXB4fS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXI6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXXtvcGFjaXR5Oi40O2N1cnNvcjpuby1kcm9wfS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXIuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cGFkZGluZzowO21hcmdpbjo3LjVweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Y29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOmRlZmF1bHQ7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246cm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItbW9kYWwgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7bWFyZ2luLWxlZnQ6MzBweDttYXJnaW4tcmlnaHQ6MzBweH0uc3dhbDItbW9kYWwgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOmFmdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbnRlbnQ6XCJcIjttYXJnaW4tbGVmdDo1cHggMCAxNXB4O3ZlcnRpY2FsLWFsaWduOi0xcHg7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweDtib3JkZXI6M3B4IHNvbGlkICM5OTk7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7YW5pbWF0aW9uOnJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbH0uc3dhbDItbW9kYWwgLnN3YWwyLXN0eWxlZHtib3JkZXI6MDtib3JkZXItcmFkaXVzOjNweDtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo1MDA7bWFyZ2luOjE1cHggNXB4IDA7cGFkZGluZzoxMHB4IDMycHh9LnN3YWwyLW1vZGFsIC5zd2FsMi1pbWFnZXttYXJnaW46MjBweCBhdXRvO21heC13aWR0aDoxMDAlfS5zd2FsMi1tb2RhbCAuc3dhbDItY2xvc2V7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MDttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MzhweDtoZWlnaHQ6NDBweDtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0MHB4O2ZvbnQtZmFtaWx5OnNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6OHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiNjY2M7dHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZX0uc3dhbDItbW9kYWwgLnN3YWwyLWNsb3NlOmhvdmVye2NvbG9yOiNkNTV9LnN3YWwyLW1vZGFsPi5zd2FsMi1jaGVja2JveCwuc3dhbDItbW9kYWw+LnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsPi5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWw+LnN3YWwyLXJhZGlvLC5zd2FsMi1tb2RhbD4uc3dhbDItc2VsZWN0LC5zd2FsMi1tb2RhbD4uc3dhbDItdGV4dGFyZWF7ZGlzcGxheTpub25lfS5zd2FsMi1tb2RhbCAuc3dhbDItY29udGVudHtmb250LXNpemU6MThweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDozMDA7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2NvbG9yOiM1NDU0NTQ7d29yZC13cmFwOmJyZWFrLXdvcmR9LnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveCwuc3dhbDItbW9kYWwgLnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXJhZGlvLC5zd2FsMi1tb2RhbCAuc3dhbDItc2VsZWN0LC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWF7bWFyZ2luOjIwcHggYXV0b30uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhe3dpZHRoOjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZToxOHB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNik7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgYm94LXNoYWRvdyAuM3N9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQhaW1wb3J0YW50fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTpmb2N1cywuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtib3gtc2hhZG93OjAgMCAzcHggI2M0ZTZmNX0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGU6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye3RyYW5zaXRpb246b3BhY2l0eSAuM3MgZWFzZSAuMDNzO29wYWNpdHk6Ljh9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGVhc2UgLjAzcztvcGFjaXR5Oi44fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTpmb2N1czo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyBlYXNlIC4wM3M7b3BhY2l0eTouOH0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNlNmU2ZTZ9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojZTZlNmU2fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2U2ZTZlNn0uc3dhbDItbW9kYWwgLnN3YWwyLXJhbmdlIGlucHV0e2Zsb2F0OmxlZnQ7d2lkdGg6ODAlfS5zd2FsMi1tb2RhbCAuc3dhbDItcmFuZ2Ugb3V0cHV0e2Zsb2F0OnJpZ2h0O3dpZHRoOjIwJTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLW1vZGFsIC5zd2FsMi1yYW5nZSBpbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXJhbmdlIG91dHB1dHtoZWlnaHQ6NDNweDtsaW5lLWhlaWdodDo0M3B4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW46MjBweCBhdXRvO3BhZGRpbmc6MH0uc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0e2hlaWdodDo0M3B4O3BhZGRpbmc6MCAxMnB4fS5zd2FsMi1tb2RhbCAuc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxNTBweH0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGV7Zm9udC1zaXplOjIwcHh9LnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6MTA4cHg7cGFkZGluZzoxMnB4fS5zd2FsMi1tb2RhbCAuc3dhbDItc2VsZWN0e2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOmluaGVyaXQ7cGFkZGluZzo1cHggMTBweDttaW4td2lkdGg6NDAlO21heC13aWR0aDoxMDAlfS5zd2FsMi1tb2RhbCAuc3dhbDItcmFkaW97Ym9yZGVyOjB9LnN3YWwyLW1vZGFsIC5zd2FsMi1yYWRpbyBsYWJlbDpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDoyMHB4fS5zd2FsMi1tb2RhbCAuc3dhbDItcmFkaW8gaW5wdXQsLnN3YWwyLW1vZGFsIC5zd2FsMi1yYWRpbyBzcGFue3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3dhbDItbW9kYWwgLnN3YWwyLXJhZGlvIGlucHV0e21hcmdpbjowIDNweCAwIDB9LnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveHtjb2xvcjojNTQ1NDU0fS5zd2FsMi1tb2RhbCAuc3dhbDItY2hlY2tib3ggaW5wdXQsLnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveCBzcGFue3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3dhbDItbW9kYWwgLnN3YWwyLXZhbGlkYXRpb25lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGYwZjA7bWFyZ2luOjAgLTIwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MTBweDtjb2xvcjpncmF5O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtkaXNwbGF5Om5vbmV9LnN3YWwyLW1vZGFsIC5zd2FsMi12YWxpZGF0aW9uZXJyb3I6YmVmb3Jle2NvbnRlbnQ6XCIhXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNlYTdkN2Q7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1yaWdodDoxMHB4fUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpLCgtbXMtaGlnaC1jb250cmFzdDpub25lKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fS5zd2FsMi1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW46MjBweCBhdXRvIDMwcHg7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3JpZ2h0OjE2cHh9LnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojZjhiYjg2O2JvcmRlci1jb2xvcjojZmFjZWE4fS5zd2FsMi1pY29uLnN3YWwyLWluZm8sLnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tmb250LXNpemU6NjBweDtsaW5lLWhlaWdodDo4MHB4O3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1pY29uLnN3YWwyLWluZm97Zm9udC1mYW1pbHk6T3BlbiBTYW5zLHNhbnMtc2VyaWY7Y29sb3I6IzNmYzNlZTtib3JkZXItY29sb3I6IzlkZTBmNn0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbntmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojODdhZGJkO2JvcmRlci1jb2xvcjojYzlkYWUxO2ZvbnQtc2l6ZTo2MHB4O2xpbmUtaGVpZ2h0OjgwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3dpZHRoOjdweDtoZWlnaHQ6OTBweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItcHJvZ3Jlc3NzdGVwc3tmb250LXdlaWdodDo2MDA7bWFyZ2luOjAgMCAyMHB4O3BhZGRpbmc6MH0uc3dhbDItcHJvZ3Jlc3NzdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGV7YmFja2dyb3VuZDojMzA4NWQ2O2JvcmRlci1yYWRpdXM6MmVtO2NvbG9yOiNmZmY7aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO3otaW5kZXg6MjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcHtiYWNrZ3JvdW5kOiMzMDg1ZDZ9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcH4uc3dhbDItcHJvZ3Jlc3NjaXJjbGUsLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcH4uc3dhbDItcHJvZ3Jlc3NsaW5le2JhY2tncm91bmQ6I2FkZDhlNn0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NsaW5le2JhY2tncm91bmQ6IzMwODVkNjtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O3otaW5kZXg6MTB9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX0uc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zc30uc3dhbDItc2hvdy5zd2FsMi1ub2FuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfS5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOmhpZGVTd2VldEFsZXJ0IC4xNXMgZm9yd2FyZHM7YW5pbWF0aW9uOmhpZGVTd2VldEFsZXJ0IC4xNXMgZm9yd2FyZHN9LnN3YWwyLWhpZGUuc3dhbDItbm9hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXRpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXRpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXN1Y2Nlc3MtbG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy1sb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtdGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGUtc3VjY2Vzcy10aXAgLjc1c30uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzfS5zd2FsMi1zdWNjZXNzLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHR7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS1lcnJvci1pY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX0uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uey13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7YW5pbWF0aW9uOmFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUteC1tYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZS14LW1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwyLWFuaW1hdGUteC1tYXJrey13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUteC1tYXJrIC41czthbmltYXRpb246YW5pbWF0ZS14LW1hcmsgLjVzfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtbG9hZGluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIHJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fScsXCJcIl0pfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpc1t0XTtuWzJdP2UucHVzaChcIkBtZWRpYSBcIituWzJdK1wie1wiK25bMV0rXCJ9XCIpOmUucHVzaChuWzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30sYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgcj10aGlzW2FdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiByJiYob1tyXT0hMCl9Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGk9dFthXTtcIm51bWJlclwiPT10eXBlb2YgaVswXSYmb1tpWzBdXXx8KG4mJiFpWzJdP2lbMl09bjpuJiYoaVsyXT1cIihcIitpWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChpKSl9fSxlfX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXSxhPWZbby5pZF07aWYoYSl7YS5yZWZzKys7Zm9yKHZhciByPTA7cjxhLnBhcnRzLmxlbmd0aDtyKyspYS5wYXJ0c1tyXShvLnBhcnRzW3JdKTtmb3IoO3I8by5wYXJ0cy5sZW5ndGg7cisrKWEucGFydHMucHVzaChjKG8ucGFydHNbcl0sdCkpfWVsc2V7Zm9yKHZhciBpPVtdLHI9MDtyPG8ucGFydHMubGVuZ3RoO3IrKylpLnB1c2goYyhvLnBhcnRzW3JdLHQpKTtmW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czppfX19fWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PVtdLG49e30sbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgYT1lW29dLHI9YVswXSxpPWFbMV0scz1hWzJdLGw9YVszXSxjPXtjc3M6aSxtZWRpYTpzLHNvdXJjZU1hcDpsfTtuW3JdP25bcl0ucGFydHMucHVzaChjKTp0LnB1c2gobltyXT17aWQ6cixwYXJ0czpbY119KX1yZXR1cm4gdH1mdW5jdGlvbiByKGUsdCl7dmFyIG49ZygpLG89eFt4Lmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdClvP28ubmV4dFNpYmxpbmc/bi5pbnNlcnRCZWZvcmUodCxvLm5leHRTaWJsaW5nKTpuLmFwcGVuZENoaWxkKHQpOm4uaW5zZXJ0QmVmb3JlKHQsbi5maXJzdENoaWxkKSx4LnB1c2godCk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7bi5hcHBlbmRDaGlsZCh0KX19ZnVuY3Rpb24gaShlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIHQ9eC5pbmRleE9mKGUpO3Q+PTAmJnguc3BsaWNlKHQsMSl9ZnVuY3Rpb24gcyhlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQudHlwZT1cInRleHQvY3NzXCIscihlLHQpLHR9ZnVuY3Rpb24gbChlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gdC5yZWw9XCJzdHlsZXNoZWV0XCIscihlLHQpLHR9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLG8sYTtpZih0LnNpbmdsZXRvbil7dmFyIHI9YisrO249aHx8KGg9cyh0KSksbz11LmJpbmQobnVsbCxuLHIsITEpLGE9dS5iaW5kKG51bGwsbixyLCEwKX1lbHNlIGUuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49bCh0KSxvPXAuYmluZChudWxsLG4pLGE9ZnVuY3Rpb24oKXtpKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyh0KSxvPWQuYmluZChudWxsLG4pLGE9ZnVuY3Rpb24oKXtpKG4pfSk7cmV0dXJuIG8oZSksZnVuY3Rpb24odCl7aWYodCl7aWYodC5jc3M9PT1lLmNzcyYmdC5tZWRpYT09PWUubWVkaWEmJnQuc291cmNlTWFwPT09ZS5zb3VyY2VNYXApcmV0dXJuO28oZT10KX1lbHNlIGEoKX19ZnVuY3Rpb24gdShlLHQsbixvKXt2YXIgYT1uP1wiXCI6by5jc3M7aWYoZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXYodCxhKTtlbHNle3ZhciByPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpLGk9ZS5jaGlsZE5vZGVzO2lbdF0mJmUucmVtb3ZlQ2hpbGQoaVt0XSksaS5sZW5ndGg/ZS5pbnNlcnRCZWZvcmUocixpW3RdKTplLmFwcGVuZENoaWxkKHIpfX1mdW5jdGlvbiBkKGUsdCl7dmFyIG49dC5jc3Msbz10Lm1lZGlhO2lmKG8mJmUuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSxlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAoZSx0KXt2YXIgbj10LmNzcyxvPXQuc291cmNlTWFwO28mJihuKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSkrXCIgKi9cIik7dmFyIGE9bmV3IEJsb2IoW25dLHt0eXBlOlwidGV4dC9jc3NcIn0pLHI9ZS5ocmVmO2UuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGEpLHImJlVSTC5yZXZva2VPYmplY3RVUkwocil9dmFyIGY9e30sbT1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdCYmKHQ9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpLHR9fSx3PW0oZnVuY3Rpb24oKXtyZXR1cm4vbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSl9KSxnPW0oZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfSksaD1udWxsLGI9MCx4PVtdO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3Q9dHx8e30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuc2luZ2xldG9uJiYodC5zaW5nbGV0b249dygpKSxcInVuZGVmaW5lZFwiPT10eXBlb2YgdC5pbnNlcnRBdCYmKHQuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49YShlKTtyZXR1cm4gbyhuLHQpLGZ1bmN0aW9uKGUpe2Zvcih2YXIgcj1bXSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBzPW5baV0sbD1mW3MuaWRdO2wucmVmcy0tLHIucHVzaChsKX1pZihlKXt2YXIgYz1hKGUpO28oYyx0KX1mb3IodmFyIGk9MDtpPHIubGVuZ3RoO2krKyl7dmFyIGw9cltpXTtpZigwPT09bC5yZWZzKXtmb3IodmFyIHU9MDt1PGwucGFydHMubGVuZ3RoO3UrKylsLnBhcnRzW3VdKCk7ZGVsZXRlIGZbbC5pZF19fX19O3ZhciB2PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIGVbdF09bixlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24oZSx0LG4pe3ZhciBvPW4oMik7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPVtbZS5pZCxvLFwiXCJdXSk7big0KShvLHt9KTtvLmxvY2FscyYmKGUuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKGUsdCxuKXsvKiFcblx0ICogc3dlZXRhbGVydDIgdjYuNi42XG5cdCAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblx0ICovXG4hZnVuY3Rpb24odCxuKXtlLmV4cG9ydHM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e3RpdGxlOlwiXCIsdGl0bGVUZXh0OlwiXCIsdGV4dDpcIlwiLGh0bWw6XCJcIix0eXBlOm51bGwsY3VzdG9tQ2xhc3M6XCJcIix0YXJnZXQ6XCJib2R5XCIsYW5pbWF0aW9uOiEwLGFsbG93T3V0c2lkZUNsaWNrOiEwLGFsbG93RXNjYXBlS2V5OiEwLGFsbG93RW50ZXJLZXk6ITAsc2hvd0NvbmZpcm1CdXR0b246ITAsc2hvd0NhbmNlbEJ1dHRvbjohMSxwcmVDb25maXJtOm51bGwsY29uZmlybUJ1dHRvblRleHQ6XCJPS1wiLGNvbmZpcm1CdXR0b25Db2xvcjpcIiMzMDg1ZDZcIixjb25maXJtQnV0dG9uQ2xhc3M6bnVsbCxjYW5jZWxCdXR0b25UZXh0OlwiQ2FuY2VsXCIsY2FuY2VsQnV0dG9uQ29sb3I6XCIjYWFhXCIsY2FuY2VsQnV0dG9uQ2xhc3M6bnVsbCxidXR0b25zU3R5bGluZzohMCxyZXZlcnNlQnV0dG9uczohMSxmb2N1c0NhbmNlbDohMSxzaG93Q2xvc2VCdXR0b246ITEsc2hvd0xvYWRlck9uQ29uZmlybTohMSxpbWFnZVVybDpudWxsLGltYWdlV2lkdGg6bnVsbCxpbWFnZUhlaWdodDpudWxsLGltYWdlQ2xhc3M6bnVsbCx0aW1lcjpudWxsLHdpZHRoOjUwMCxwYWRkaW5nOjIwLGJhY2tncm91bmQ6XCIjZmZmXCIsaW5wdXQ6bnVsbCxpbnB1dFBsYWNlaG9sZGVyOlwiXCIsaW5wdXRWYWx1ZTpcIlwiLGlucHV0T3B0aW9uczp7fSxpbnB1dEF1dG9UcmltOiEwLGlucHV0Q2xhc3M6bnVsbCxpbnB1dEF0dHJpYnV0ZXM6e30saW5wdXRWYWxpZGF0b3I6bnVsbCxwcm9ncmVzc1N0ZXBzOltdLGN1cnJlbnRQcm9ncmVzc1N0ZXA6bnVsbCxwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6XCI0MHB4XCIsb25PcGVuOm51bGwsb25DbG9zZTpudWxsLHVzZVJlamVjdGlvbnM6ITB9LHQ9XCJzd2FsMi1cIixuPWZ1bmN0aW9uKGUpe3ZhciBuPXt9O2Zvcih2YXIgbyBpbiBlKW5bZVtvXV09dCtlW29dO3JldHVybiBufSxvPW4oW1wiY29udGFpbmVyXCIsXCJzaG93blwiLFwiaW9zZml4XCIsXCJtb2RhbFwiLFwib3ZlcmxheVwiLFwiZmFkZVwiLFwic2hvd1wiLFwiaGlkZVwiLFwibm9hbmltYXRpb25cIixcImNsb3NlXCIsXCJ0aXRsZVwiLFwiY29udGVudFwiLFwiYnV0dG9uc3dyYXBwZXJcIixcImNvbmZpcm1cIixcImNhbmNlbFwiLFwiaWNvblwiLFwiaW1hZ2VcIixcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcInRleHRhcmVhXCIsXCJpbnB1dGVycm9yXCIsXCJ2YWxpZGF0aW9uZXJyb3JcIixcInByb2dyZXNzc3RlcHNcIixcImFjdGl2ZXByb2dyZXNzc3RlcFwiLFwicHJvZ3Jlc3NjaXJjbGVcIixcInByb2dyZXNzbGluZVwiLFwibG9hZGluZ1wiLFwic3R5bGVkXCJdKSxhPW4oW1wic3VjY2Vzc1wiLFwid2FybmluZ1wiLFwiaW5mb1wiLFwicXVlc3Rpb25cIixcImVycm9yXCJdKSxyPWZ1bmN0aW9uKGUsdCl7ZT1TdHJpbmcoZSkucmVwbGFjZSgvW14wLTlhLWZdL2dpLFwiXCIpLGUubGVuZ3RoPDYmJihlPWVbMF0rZVswXStlWzFdK2VbMV0rZVsyXStlWzJdKSx0PXR8fDA7Zm9yKHZhciBuPVwiI1wiLG89MDtvPDM7bysrKXt2YXIgYT1wYXJzZUludChlLnN1YnN0cigyKm8sMiksMTYpO2E9TWF0aC5yb3VuZChNYXRoLm1pbihNYXRoLm1heCgwLGErYSp0KSwyNTUpKS50b1N0cmluZygxNiksbis9KFwiMDBcIithKS5zdWJzdHIoYS5sZW5ndGgpfXJldHVybiBufSxpPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQuaW5kZXhPZihlW25dKT09PS0xJiZ0LnB1c2goZVtuXSk7cmV0dXJuIHR9LHM9e3ByZXZpb3VzV2luZG93S2V5RG93bjpudWxsLHByZXZpb3VzQWN0aXZlRWxlbWVudDpudWxsLHByZXZpb3VzQm9keVBhZGRpbmc6bnVsbH0sbD1mdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemVcIik7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT1vLmNvbnRhaW5lcix0LmlubmVySFRNTD1jO3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS50YXJnZXQpO258fChjb25zb2xlLndhcm4oXCJTd2VldEFsZXJ0MjogQ2FuJ3QgZmluZCB0aGUgdGFyZ2V0IFxcXCJcIitlLnRhcmdldCsnXCInKSxuPWRvY3VtZW50LmJvZHkpLG4uYXBwZW5kQ2hpbGQodCk7dmFyIGE9ZCgpLHI9UChhLG8uaW5wdXQpLGk9UChhLG8uZmlsZSkscz1hLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5yYW5nZStcIiBpbnB1dFwiKSxsPWEucXVlcnlTZWxlY3RvcihcIi5cIitvLnJhbmdlK1wiIG91dHB1dFwiKSx1PVAoYSxvLnNlbGVjdCkscD1hLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5jaGVja2JveCtcIiBpbnB1dFwiKSxmPVAoYSxvLnRleHRhcmVhKTtyZXR1cm4gci5vbmlucHV0PWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpfSxyLm9ua2V5ZG93bj1mdW5jdGlvbih0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7MTM9PT10LmtleUNvZGUmJmUuYWxsb3dFbnRlcktleSYmKHQuc3RvcFByb3BhZ2F0aW9uKCksWS5jbGlja0NvbmZpcm0oKSl9LDApfSxpLm9uY2hhbmdlPWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpfSxzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCksbC52YWx1ZT1zLnZhbHVlfSxzLm9uY2hhbmdlPWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpLHMucHJldmlvdXNTaWJsaW5nLnZhbHVlPXMudmFsdWV9LHUub25jaGFuZ2U9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCl9LHAub25jaGFuZ2U9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCl9LGYub25pbnB1dD1mdW5jdGlvbigpe1kucmVzZXRWYWxpZGF0aW9uRXJyb3IoKX0sYX0sYz0oJ1xcbiA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCInK28udGl0bGUrJ1wiIGFyaWEtZGVzY3JpYmVkYnk9XCInK28uY29udGVudCsnXCIgY2xhc3M9XCInK28ubW9kYWwrJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8dWwgY2xhc3M9XCInK28ucHJvZ3Jlc3NzdGVwcysnXCI+PC91bD5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5lcnJvcisnXCI+XFxuICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPjxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5xdWVzdGlvbisnXCI+PzwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInK28uaWNvbitcIiBcIithLndhcm5pbmcrJ1wiPiE8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5pbmZvKydcIj5pPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicrby5pY29uK1wiIFwiK2Euc3VjY2VzcysnXCI+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcIj48L2Rpdj5cXG4gICAgIDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiPjwvc3Bhbj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLXJpbmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtZml4XCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGltZyBjbGFzcz1cIicrby5pbWFnZSsnXCIgLz5cXG4gICA8aDIgY2xhc3M9XCInK28udGl0bGUrJ1wiIGlkPVwiJytvLnRpdGxlKydcIj48L2gyPlxcbiAgIDxkaXYgaWQ9XCInK28uY29udGVudCsnXCIgY2xhc3M9XCInK28uY29udGVudCsnXCI+PC9kaXY+XFxuICAgPGlucHV0IGNsYXNzPVwiJytvLmlucHV0KydcIiAvPlxcbiAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJytvLmZpbGUrJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicrby5yYW5nZSsnXCI+XFxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgPC9kaXY+XFxuICAgPHNlbGVjdCBjbGFzcz1cIicrby5zZWxlY3QrJ1wiPjwvc2VsZWN0PlxcbiAgIDxkaXYgY2xhc3M9XCInK28ucmFkaW8rJ1wiPjwvZGl2PlxcbiAgIDxsYWJlbCBmb3I9XCInK28uY2hlY2tib3grJ1wiIGNsYXNzPVwiJytvLmNoZWNrYm94KydcIj5cXG4gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxcbiAgIDwvbGFiZWw+XFxuICAgPHRleHRhcmVhIGNsYXNzPVwiJytvLnRleHRhcmVhKydcIj48L3RleHRhcmVhPlxcbiAgIDxkaXYgY2xhc3M9XCInK28udmFsaWRhdGlvbmVycm9yKydcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmJ1dHRvbnN3cmFwcGVyKydcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJytvLmNvbmZpcm0rJ1wiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicrby5jYW5jZWwrJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJytvLmNsb3NlKydcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgdGhpcyBkaWFsb2dcIj7DlzwvYnV0dG9uPlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLFwiXCIpLHU9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiK28uY29udGFpbmVyKX0sZD1mdW5jdGlvbigpe3JldHVybiB1KCk/dSgpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5tb2RhbCk6bnVsbH0scD1mdW5jdGlvbigpe3ZhciBlPWQoKTtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK28uaWNvbil9LGY9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoKT91KCkucXVlcnlTZWxlY3RvcihcIi5cIitlKTpudWxsfSxtPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby50aXRsZSl9LHc9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmNvbnRlbnQpfSxnPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5pbWFnZSl9LGg9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmJ1dHRvbnN3cmFwcGVyKX0sYj1mdW5jdGlvbigpe3JldHVybiBmKG8ucHJvZ3Jlc3NzdGVwcyl9LHg9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLnZhbGlkYXRpb25lcnJvcil9LHY9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmNvbmZpcm0pfSx5PWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5jYW5jZWwpfSxrPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5jbG9zZSl9LEM9ZnVuY3Rpb24oZSl7dmFyIHQ9W3YoKSx5KCldO2UmJnQucmV2ZXJzZSgpO3ZhciBuPXQuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGQoKS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwgdGV4dGFyZWEsIHNlbGVjdCwgYSwgKlt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpKSk7cmV0dXJuIGkobil9LFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4hIWUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KX0sQT1mdW5jdGlvbihlKXtpZihlLmZvY3VzKCksXCJmaWxlXCIhPT1lLnR5cGUpe3ZhciB0PWUudmFsdWU7ZS52YWx1ZT1cIlwiLGUudmFsdWU9dH19LEU9ZnVuY3Rpb24oZSx0KXtpZihlJiZ0KXt2YXIgbj10LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO24uZm9yRWFjaChmdW5jdGlvbih0KXtlLmNsYXNzTGlzdC5hZGQodCl9KX19LEI9ZnVuY3Rpb24oZSx0KXtpZihlJiZ0KXt2YXIgbj10LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO24uZm9yRWFjaChmdW5jdGlvbih0KXtlLmNsYXNzTGlzdC5yZW1vdmUodCl9KX19LFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPGUuY2hpbGROb2Rlcy5sZW5ndGg7bisrKWlmKFMoZS5jaGlsZE5vZGVzW25dLHQpKXJldHVybiBlLmNoaWxkTm9kZXNbbl19LEw9ZnVuY3Rpb24oZSx0KXt0fHwodD1cImJsb2NrXCIpLGUuc3R5bGUub3BhY2l0eT1cIlwiLGUuc3R5bGUuZGlzcGxheT10fSxNPWZ1bmN0aW9uKGUpe2Uuc3R5bGUub3BhY2l0eT1cIlwiLGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0sVD1mdW5jdGlvbihlKXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfSxPPWZ1bmN0aW9uKGUpe3JldHVybiBlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aH0scT1mdW5jdGlvbihlLHQpe2Uuc3R5bGUucmVtb3ZlUHJvcGVydHk/ZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh0KTplLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSh0KX0sSD1mdW5jdGlvbihlKXtpZighTyhlKSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBNb3VzZUV2ZW50KXt2YXIgdD1uZXcgTW91c2VFdmVudChcImNsaWNrXCIse3ZpZXc6d2luZG93LGJ1YmJsZXM6ITEsY2FuY2VsYWJsZTohMH0pO2UuZGlzcGF0Y2hFdmVudCh0KX1lbHNlIGlmKGRvY3VtZW50LmNyZWF0ZUV2ZW50KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO24uaW5pdEV2ZW50KFwiY2xpY2tcIiwhMSwhMSksZS5kaXNwYXRjaEV2ZW50KG4pfWVsc2UgZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3Q/ZS5maXJlRXZlbnQoXCJvbmNsaWNrXCIpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25jbGljayYmZS5vbmNsaWNrKCl9LFY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9e1dlYmtpdEFuaW1hdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIixtc0FuaW1hdGlvbjpcIk1TQW5pbWF0aW9uRW5kXCIsYW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCJ9O2Zvcih2YXIgbiBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkobikmJnZvaWQgMCE9PWUuc3R5bGVbbl0pcmV0dXJuIHRbbl07cmV0dXJuITF9KCksaj1mdW5jdGlvbigpe2lmKHdpbmRvdy5vbmtleWRvd249cy5wcmV2aW91c1dpbmRvd0tleURvd24scy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQmJnMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKXt2YXIgZT13aW5kb3cuc2Nyb2xsWCx0PXdpbmRvdy5zY3JvbGxZO3MucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCksZSYmdCYmd2luZG93LnNjcm9sbFRvKGUsdCl9fSx6PWZ1bmN0aW9uKCl7dmFyIGU9XCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7aWYoZSlyZXR1cm4gMDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3Quc3R5bGUud2lkdGg9XCI1MHB4XCIsdC5zdHlsZS5oZWlnaHQ9XCI1MHB4XCIsdC5zdHlsZS5vdmVyZmxvdz1cInNjcm9sbFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCk7dmFyIG49dC5vZmZzZXRXaWR0aC10LmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpLG59LE49ZnVuY3Rpb24oZSx0KXt2YXIgbj12b2lkIDA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG89ZnVuY3Rpb24oKXtuPW51bGwsZSgpfTtjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KG8sdCl9fSxSPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sST1VKHt9LGUpLEs9W10sRD12b2lkIDAsVz1mdW5jdGlvbih0KXt2YXIgbj1kKCl8fGwodCk7Zm9yKHZhciByIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShyKXx8XCJleHRyYVBhcmFtc1wiPT09cnx8Y29uc29sZS53YXJuKCdTd2VldEFsZXJ0MjogVW5rbm93biBwYXJhbWV0ZXIgXCInK3IrJ1wiJyk7bi5zdHlsZS53aWR0aD1cIm51bWJlclwiPT10eXBlb2YgdC53aWR0aD90LndpZHRoK1wicHhcIjp0LndpZHRoLG4uc3R5bGUucGFkZGluZz10LnBhZGRpbmcrXCJweFwiLG4uc3R5bGUuYmFja2dyb3VuZD10LmJhY2tncm91bmQ7Zm9yKHZhciBpPW4ucXVlcnlTZWxlY3RvckFsbChcIltjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4XCIpLHM9MDtzPGkubGVuZ3RoO3MrKylpW3NdLnN0eWxlLmJhY2tncm91bmQ9dC5iYWNrZ3JvdW5kO3ZhciBjPW0oKSx1PXcoKSxmPWgoKSx4PXYoKSxDPXkoKSxTPWsoKTtpZih0LnRpdGxlVGV4dD9jLmlubmVyVGV4dD10LnRpdGxlVGV4dDpjLmlubmVySFRNTD10LnRpdGxlLnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIgLz5cIiksdC50ZXh0fHx0Lmh0bWwpe2lmKFwib2JqZWN0XCI9PT1SKHQuaHRtbCkpaWYodS5pbm5lckhUTUw9XCJcIiwwIGluIHQuaHRtbClmb3IodmFyIEE9MDtBIGluIHQuaHRtbDtBKyspdS5hcHBlbmRDaGlsZCh0Lmh0bWxbQV0uY2xvbmVOb2RlKCEwKSk7ZWxzZSB1LmFwcGVuZENoaWxkKHQuaHRtbC5jbG9uZU5vZGUoITApKTtlbHNlIHQuaHRtbD91LmlubmVySFRNTD10Lmh0bWw6dC50ZXh0JiYodS50ZXh0Q29udGVudD10LnRleHQpO0wodSl9ZWxzZSBNKHUpO3Quc2hvd0Nsb3NlQnV0dG9uP0woUyk6TShTKSxuLmNsYXNzTmFtZT1vLm1vZGFsLHQuY3VzdG9tQ2xhc3MmJkUobix0LmN1c3RvbUNsYXNzKTt2YXIgUD1iKCksTz1wYXJzZUludChudWxsPT09dC5jdXJyZW50UHJvZ3Jlc3NTdGVwP1kuZ2V0UXVldWVTdGVwKCk6dC5jdXJyZW50UHJvZ3Jlc3NTdGVwLDEwKTt0LnByb2dyZXNzU3RlcHMubGVuZ3RoPyhMKFApLFQoUCksTz49dC5wcm9ncmVzc1N0ZXBzLmxlbmd0aCYmY29uc29sZS53YXJuKFwiU3dlZXRBbGVydDI6IEludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMClcIiksdC5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24oZSxuKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7aWYoRShhLG8ucHJvZ3Jlc3NjaXJjbGUpLGEuaW5uZXJIVE1MPWUsbj09PU8mJkUoYSxvLmFjdGl2ZXByb2dyZXNzc3RlcCksUC5hcHBlbmRDaGlsZChhKSxuIT09dC5wcm9ncmVzc1N0ZXBzLmxlbmd0aC0xKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7RShyLG8ucHJvZ3Jlc3NsaW5lKSxyLnN0eWxlLndpZHRoPXQucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlLFAuYXBwZW5kQ2hpbGQocil9fSkpOk0oUCk7Zm9yKHZhciBIPXAoKSxWPTA7VjxILmxlbmd0aDtWKyspTShIW1ZdKTtpZih0LnR5cGUpe3ZhciBqPSExO2Zvcih2YXIgeiBpbiBhKWlmKHQudHlwZT09PXope2o9ITA7YnJlYWt9aWYoIWopcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJTd2VldEFsZXJ0MjogVW5rbm93biBhbGVydCB0eXBlOiBcIit0LnR5cGUpLCExO3ZhciBOPW4ucXVlcnlTZWxlY3RvcihcIi5cIitvLmljb24rXCIuXCIrYVt0LnR5cGVdKTtpZihMKE4pLHQuYW5pbWF0aW9uKXN3aXRjaCh0LnR5cGUpe2Nhc2VcInN1Y2Nlc3NcIjpFKE4sXCJzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvblwiKSxFKE4ucXVlcnlTZWxlY3RvcihcIi5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCIpLFwic3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwXCIpLEUoTi5xdWVyeVNlbGVjdG9yKFwiLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCIpLFwic3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ1wiKTticmVhaztjYXNlXCJlcnJvclwiOkUoTixcInN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvblwiKSxFKE4ucXVlcnlTZWxlY3RvcihcIi5zd2FsMi14LW1hcmtcIiksXCJzd2FsMi1hbmltYXRlLXgtbWFya1wiKX19dmFyIFU9ZygpO3QuaW1hZ2VVcmw/KFUuc2V0QXR0cmlidXRlKFwic3JjXCIsdC5pbWFnZVVybCksTChVKSx0LmltYWdlV2lkdGg/VS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHQuaW1hZ2VXaWR0aCk6VS5yZW1vdmVBdHRyaWJ1dGUoXCJ3aWR0aFwiKSx0LmltYWdlSGVpZ2h0P1Uuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsdC5pbWFnZUhlaWdodCk6VS5yZW1vdmVBdHRyaWJ1dGUoXCJoZWlnaHRcIiksVS5jbGFzc05hbWU9by5pbWFnZSx0LmltYWdlQ2xhc3MmJkUoVSx0LmltYWdlQ2xhc3MpKTpNKFUpLHQuc2hvd0NhbmNlbEJ1dHRvbj9DLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIjpNKEMpLHQuc2hvd0NvbmZpcm1CdXR0b24/cSh4LFwiZGlzcGxheVwiKTpNKHgpLHQuc2hvd0NvbmZpcm1CdXR0b258fHQuc2hvd0NhbmNlbEJ1dHRvbj9MKGYpOk0oZikseC5pbm5lckhUTUw9dC5jb25maXJtQnV0dG9uVGV4dCxDLmlubmVySFRNTD10LmNhbmNlbEJ1dHRvblRleHQsdC5idXR0b25zU3R5bGluZyYmKHguc3R5bGUuYmFja2dyb3VuZENvbG9yPXQuY29uZmlybUJ1dHRvbkNvbG9yLEMuc3R5bGUuYmFja2dyb3VuZENvbG9yPXQuY2FuY2VsQnV0dG9uQ29sb3IpLHguY2xhc3NOYW1lPW8uY29uZmlybSxFKHgsdC5jb25maXJtQnV0dG9uQ2xhc3MpLEMuY2xhc3NOYW1lPW8uY2FuY2VsLEUoQyx0LmNhbmNlbEJ1dHRvbkNsYXNzKSx0LmJ1dHRvbnNTdHlsaW5nPyhFKHgsby5zdHlsZWQpLEUoQyxvLnN0eWxlZCkpOihCKHgsby5zdHlsZWQpLEIoQyxvLnN0eWxlZCkseC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9eC5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIsQy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Qy5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9Qy5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIpLHQuYW5pbWF0aW9uPT09ITA/QihuLG8ubm9hbmltYXRpb24pOkUobixvLm5vYW5pbWF0aW9uKX0sXz1mdW5jdGlvbihlLHQpe3ZhciBuPXUoKSxhPWQoKTtlPyhFKGEsby5zaG93KSxFKG4sby5mYWRlKSxCKGEsby5oaWRlKSk6QihhLG8uZmFkZSksTChhKSxuLnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLFYmJiFTKGEsby5ub2FuaW1hdGlvbik/YS5hZGRFdmVudExpc3RlbmVyKFYsZnVuY3Rpb24gZSgpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihWLGUpLG4uc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wifSk6bi5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsRShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsby5zaG93biksRShkb2N1bWVudC5ib2R5LG8uc2hvd24pLEUobixvLnNob3duKSxYKCksWigpLHMucHJldmlvdXNBY3RpdmVFbGVtZW50PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsbnVsbCE9PXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGEpfSl9LFg9ZnVuY3Rpb24oKXtudWxsPT09cy5wcmV2aW91c0JvZHlQYWRkaW5nJiZkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQmJihzLnByZXZpb3VzQm9keVBhZGRpbmc9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9eigpK1wicHhcIil9LCQ9ZnVuY3Rpb24oKXtudWxsIT09cy5wcmV2aW91c0JvZHlQYWRkaW5nJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9cy5wcmV2aW91c0JvZHlQYWRkaW5nLHMucHJldmlvdXNCb2R5UGFkZGluZz1udWxsKX0sWj1mdW5jdGlvbigpe3ZhciBlPS9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhd2luZG93Lk1TU3RyZWFtO2lmKGUmJiFTKGRvY3VtZW50LmJvZHksby5pb3NmaXgpKXt2YXIgdD1kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD10Ki0xK1wicHhcIixFKGRvY3VtZW50LmJvZHksby5pb3NmaXgpfX0sUT1mdW5jdGlvbigpe2lmKFMoZG9jdW1lbnQuYm9keSxvLmlvc2ZpeCkpe3ZhciBlPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLDEwKTtCKGRvY3VtZW50LmJvZHksby5pb3NmaXgpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIsZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A9ZSotMX19LFk9ZnVuY3Rpb24gZSgpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkodCksYT0wO2E8dDthKyspblthXT1hcmd1bWVudHNbYV07aWYodm9pZCAwPT09blswXSlyZXR1cm4gY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyIGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhXCIpLCExO3ZhciBpPVUoe30sSSk7c3dpdGNoKFIoblswXSkpe2Nhc2VcInN0cmluZ1wiOmkudGl0bGU9blswXSxpLmh0bWw9blsxXSxpLnR5cGU9blsyXTticmVhaztjYXNlXCJvYmplY3RcIjpVKGksblswXSksaS5leHRyYVBhcmFtcz1uWzBdLmV4dHJhUGFyYW1zLFwiZW1haWxcIj09PWkuaW5wdXQmJm51bGw9PT1pLmlucHV0VmFsaWRhdG9yJiYoaS5pbnB1dFZhbGlkYXRvcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXt2YXIgbz0vXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDZ9JC87by50ZXN0KGUpP3QoKTpuKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpfSl9KSxcInVybFwiPT09aS5pbnB1dCYmbnVsbD09PWkuaW5wdXRWYWxpZGF0b3ImJihpLmlucHV0VmFsaWRhdG9yPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LG4pe3ZhciBvPS9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/JlxcL1xcLz1dKikkLztvLnRlc3QoZSk/dCgpOm4oXCJJbnZhbGlkIFVSTFwiKX0pfSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gY29uc29sZS5lcnJvcignU3dlZXRBbGVydDI6IFVuZXhwZWN0ZWQgdHlwZSBvZiBhcmd1bWVudCEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIm9iamVjdFwiLCBnb3QgJytSKG5bMF0pKSwhMX1XKGkpO3ZhciBsPXUoKSxjPWQoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXtpLnRpbWVyJiYoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcInRpbWVyXCIpOnQoe2Rpc21pc3M6XCJ0aW1lclwifSl9LGkudGltZXIpKTt2YXIgYT1mdW5jdGlvbihlKXtpZihlPWV8fGkuaW5wdXQsIWUpcmV0dXJuIG51bGw7c3dpdGNoKGUpe2Nhc2VcInNlbGVjdFwiOmNhc2VcInRleHRhcmVhXCI6Y2FzZVwiZmlsZVwiOnJldHVybiBQKGMsb1tlXSk7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28uY2hlY2tib3grXCIgaW5wdXRcIik7Y2FzZVwicmFkaW9cIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFkaW8rXCIgaW5wdXQ6Y2hlY2tlZFwiKXx8Yy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFkaW8rXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIik7Y2FzZVwicmFuZ2VcIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFuZ2UrXCIgaW5wdXRcIik7ZGVmYXVsdDpyZXR1cm4gUChjLG8uaW5wdXQpfX0scD1mdW5jdGlvbigpe3ZhciBlPWEoKTtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goaS5pbnB1dCl7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gZS5jaGVja2VkPzE6MDtjYXNlXCJyYWRpb1wiOnJldHVybiBlLmNoZWNrZWQ/ZS52YWx1ZTpudWxsO2Nhc2VcImZpbGVcIjpyZXR1cm4gZS5maWxlcy5sZW5ndGg/ZS5maWxlc1swXTpudWxsO2RlZmF1bHQ6cmV0dXJuIGkuaW5wdXRBdXRvVHJpbT9lLnZhbHVlLnRyaW0oKTplLnZhbHVlfX07aS5pbnB1dCYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPWEoKTtlJiZBKGUpfSwwKTtmb3IodmFyIGY9ZnVuY3Rpb24obil7aS5zaG93TG9hZGVyT25Db25maXJtJiZlLnNob3dMb2FkaW5nKCksaS5wcmVDb25maXJtP2kucHJlQ29uZmlybShuLGkuZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24obyl7ZS5jbG9zZU1vZGFsKGkub25DbG9zZSksdChvfHxuKX0sZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLHQmJmUuc2hvd1ZhbGlkYXRpb25FcnJvcih0KX0pOihlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSx0KGkudXNlUmVqZWN0aW9ucz9uOnt2YWx1ZTpufSkpfSxTPWZ1bmN0aW9uKG8pe3ZhciBhPW98fHdpbmRvdy5ldmVudCxzPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsbD12KCksYz15KCksdT1sJiYobD09PXN8fGwuY29udGFpbnMocykpLGQ9YyYmKGM9PT1zfHxjLmNvbnRhaW5zKHMpKTtzd2l0Y2goYS50eXBlKXtjYXNlXCJtb3VzZW92ZXJcIjpjYXNlXCJtb3VzZXVwXCI6aS5idXR0b25zU3R5bGluZyYmKHU/bC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9cihpLmNvbmZpcm1CdXR0b25Db2xvciwtLjEpOmQmJihjLnN0eWxlLmJhY2tncm91bmRDb2xvcj1yKGkuY2FuY2VsQnV0dG9uQ29sb3IsLS4xKSkpO2JyZWFrO2Nhc2VcIm1vdXNlb3V0XCI6aS5idXR0b25zU3R5bGluZyYmKHU/bC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9aS5jb25maXJtQnV0dG9uQ29sb3I6ZCYmKGMuc3R5bGUuYmFja2dyb3VuZENvbG9yPWkuY2FuY2VsQnV0dG9uQ29sb3IpKTticmVhaztjYXNlXCJtb3VzZWRvd25cIjppLmJ1dHRvbnNTdHlsaW5nJiYodT9sLnN0eWxlLmJhY2tncm91bmRDb2xvcj1yKGkuY29uZmlybUJ1dHRvbkNvbG9yLC0uMik6ZCYmKGMuc3R5bGUuYmFja2dyb3VuZENvbG9yPXIoaS5jYW5jZWxCdXR0b25Db2xvciwtLjIpKSk7YnJlYWs7Y2FzZVwiY2xpY2tcIjppZih1JiZlLmlzVmlzaWJsZSgpKWlmKGUuZGlzYWJsZUJ1dHRvbnMoKSxpLmlucHV0KXt2YXIgbT1wKCk7aS5pbnB1dFZhbGlkYXRvcj8oZS5kaXNhYmxlSW5wdXQoKSxpLmlucHV0VmFsaWRhdG9yKG0saS5leHRyYVBhcmFtcykudGhlbihmdW5jdGlvbigpe2UuZW5hYmxlQnV0dG9ucygpLGUuZW5hYmxlSW5wdXQoKSxmKG0pfSxmdW5jdGlvbih0KXtlLmVuYWJsZUJ1dHRvbnMoKSxlLmVuYWJsZUlucHV0KCksdCYmZS5zaG93VmFsaWRhdGlvbkVycm9yKHQpfSkpOmYobSl9ZWxzZSBmKCEwKTtlbHNlIGQmJmUuaXNWaXNpYmxlKCkmJihlLmRpc2FibGVCdXR0b25zKCksZS5jbG9zZU1vZGFsKGkub25DbG9zZSksaS51c2VSZWplY3Rpb25zP24oXCJjYW5jZWxcIik6dCh7ZGlzbWlzczpcImNhbmNlbFwifSkpfX0sVD1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikscT0wO3E8VC5sZW5ndGg7cSsrKVRbcV0ub25jbGljaz1TLFRbcV0ub25tb3VzZW92ZXI9UyxUW3FdLm9ubW91c2VvdXQ9UyxUW3FdLm9ubW91c2Vkb3duPVM7aygpLm9uY2xpY2s9ZnVuY3Rpb24oKXtlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcImNsb3NlXCIpOnQoe2Rpc21pc3M6XCJjbG9zZVwifSl9LGwub25jbGljaz1mdW5jdGlvbihvKXtvLnRhcmdldD09PWwmJmkuYWxsb3dPdXRzaWRlQ2xpY2smJihlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcIm92ZXJsYXlcIik6dCh7ZGlzbWlzczpcIm92ZXJsYXlcIn0pKX07dmFyIFY9aCgpLGo9digpLHo9eSgpO2kucmV2ZXJzZUJ1dHRvbnM/ai5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh6LGopOmoucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaix6KTt2YXIgVT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1DKGkuZm9jdXNDYW5jZWwpLG89MDtvPG4ubGVuZ3RoO28rKyl7ZSs9dCxlPT09bi5sZW5ndGg/ZT0wOmU9PT0tMSYmKGU9bi5sZW5ndGgtMSk7dmFyIGE9bltlXTtpZihPKGEpKXJldHVybiBhLmZvY3VzKCl9fSxJPWZ1bmN0aW9uKG8pe3ZhciBhPW98fHdpbmRvdy5ldmVudCxyPWEua2V5Q29kZXx8YS53aGljaDtpZihbOSwxMywzMiwyNywzNywzOCwzOSw0MF0uaW5kZXhPZihyKSE9PS0xKXtmb3IodmFyIHM9YS50YXJnZXR8fGEuc3JjRWxlbWVudCxsPUMoaS5mb2N1c0NhbmNlbCksYz0tMSx1PTA7dTxsLmxlbmd0aDt1KyspaWYocz09PWxbdV0pe2M9dTticmVha305PT09cj8oYS5zaGlmdEtleT9VKGMsLTEpOlUoYywxKSxhLnN0b3BQcm9wYWdhdGlvbigpLGEucHJldmVudERlZmF1bHQoKSk6Mzc9PT1yfHwzOD09PXJ8fDM5PT09cnx8NDA9PT1yP2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1qJiZPKHopP3ouZm9jdXMoKTpkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09eiYmTyhqKSYmai5mb2N1cygpOjEzPT09cnx8MzI9PT1yP2M9PT0tMSYmaS5hbGxvd0VudGVyS2V5JiYoaS5mb2N1c0NhbmNlbD9IKHosYSk6SChqLGEpLGEuc3RvcFByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpKToyNz09PXImJmkuYWxsb3dFc2NhcGVLZXk9PT0hMCYmKGUuY2xvc2VNb2RhbChpLm9uQ2xvc2UpLGkudXNlUmVqZWN0aW9ucz9uKFwiZXNjXCIpOnQoe2Rpc21pc3M6XCJlc2NcIn0pKX19O3dpbmRvdy5vbmtleWRvd24mJndpbmRvdy5vbmtleWRvd24udG9TdHJpbmcoKT09PUkudG9TdHJpbmcoKXx8KHMucHJldmlvdXNXaW5kb3dLZXlEb3duPXdpbmRvdy5vbmtleWRvd24sd2luZG93Lm9ua2V5ZG93bj1JKSxpLmJ1dHRvbnNTdHlsaW5nJiYoai5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9aS5jb25maXJtQnV0dG9uQ29sb3Isai5zdHlsZS5ib3JkZXJSaWdodENvbG9yPWkuY29uZmlybUJ1dHRvbkNvbG9yKSxlLmhpZGVMb2FkaW5nPWUuZGlzYWJsZUxvYWRpbmc9ZnVuY3Rpb24oKXtpLnNob3dDb25maXJtQnV0dG9ufHwoTShqKSxpLnNob3dDYW5jZWxCdXR0b258fE0oaCgpKSksQihWLG8ubG9hZGluZyksQihjLG8ubG9hZGluZyksai5kaXNhYmxlZD0hMSx6LmRpc2FibGVkPSExfSxlLmdldFRpdGxlPWZ1bmN0aW9uKCl7cmV0dXJuIG0oKX0sZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHcoKX0sZS5nZXRJbnB1dD1mdW5jdGlvbigpe3JldHVybiBhKCl9LGUuZ2V0SW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gZygpfSxlLmdldEJ1dHRvbnNXcmFwcGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGgoKX0sZS5nZXRDb25maXJtQnV0dG9uPWZ1bmN0aW9uKCl7cmV0dXJuIHYoKX0sZS5nZXRDYW5jZWxCdXR0b249ZnVuY3Rpb24oKXtyZXR1cm4geSgpfSxlLmVuYWJsZUJ1dHRvbnM9ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSExLHouZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUJ1dHRvbnM9ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSEwLHouZGlzYWJsZWQ9ITB9LGUuZW5hYmxlQ29uZmlybUJ1dHRvbj1mdW5jdGlvbigpe2ouZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUNvbmZpcm1CdXR0b249ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSEwfSxlLmVuYWJsZUlucHV0PWZ1bmN0aW9uKCl7dmFyIGU9YSgpO2lmKCFlKXJldHVybiExO2lmKFwicmFkaW9cIj09PWUudHlwZSlmb3IodmFyIHQ9ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUsbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD0hMTtlbHNlIGUuZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUlucHV0PWZ1bmN0aW9uKCl7dmFyIGU9YSgpO2lmKCFlKXJldHVybiExO2lmKGUmJlwicmFkaW9cIj09PWUudHlwZSlmb3IodmFyIHQ9ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUsbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD0hMDtlbHNlIGUuZGlzYWJsZWQ9ITB9LGUucmVjYWxjdWxhdGVIZWlnaHQ9TihmdW5jdGlvbigpe3ZhciBlPWQoKTtpZihlKXt2YXIgdD1lLnN0eWxlLmRpc3BsYXk7ZS5zdHlsZS5taW5IZWlnaHQ9XCJcIixMKGUpLGUuc3R5bGUubWluSGVpZ2h0PWUuc2Nyb2xsSGVpZ2h0KzErXCJweFwiLGUuc3R5bGUuZGlzcGxheT10fX0sNTApLGUuc2hvd1ZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbihlKXt2YXIgdD14KCk7dC5pbm5lckhUTUw9ZSxMKHQpO3ZhciBuPWEoKTtuJiYoQShuKSxFKG4sby5pbnB1dGVycm9yKSl9LGUucmVzZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXt2YXIgdD14KCk7TSh0KSxlLnJlY2FsY3VsYXRlSGVpZ2h0KCk7dmFyIG49YSgpO24mJkIobixvLmlucHV0ZXJyb3IpfSxlLmdldFByb2dyZXNzU3RlcHM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5wcm9ncmVzc1N0ZXBzfSxlLnNldFByb2dyZXNzU3RlcHM9ZnVuY3Rpb24oZSl7aS5wcm9ncmVzc1N0ZXBzPWUsVyhpKX0sZS5zaG93UHJvZ3Jlc3NTdGVwcz1mdW5jdGlvbigpe0woYigpKX0sZS5oaWRlUHJvZ3Jlc3NTdGVwcz1mdW5jdGlvbigpe00oYigpKX0sZS5lbmFibGVCdXR0b25zKCksZS5oaWRlTG9hZGluZygpLGUucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtmb3IodmFyIEs9W1wiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwidGV4dGFyZWFcIl0sWD12b2lkIDAsJD0wOyQ8Sy5sZW5ndGg7JCsrKXt2YXIgWj1vW0tbJF1dLFE9UChjLFopO2lmKFg9YShLWyRdKSl7Zm9yKHZhciBZIGluIFguYXR0cmlidXRlcylpZihYLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoWSkpe3ZhciBKPVguYXR0cmlidXRlc1tZXS5uYW1lO1widHlwZVwiIT09SiYmXCJ2YWx1ZVwiIT09SiYmWC5yZW1vdmVBdHRyaWJ1dGUoSil9Zm9yKHZhciBGIGluIGkuaW5wdXRBdHRyaWJ1dGVzKVguc2V0QXR0cmlidXRlKEYsaS5pbnB1dEF0dHJpYnV0ZXNbRl0pfVEuY2xhc3NOYW1lPVosaS5pbnB1dENsYXNzJiZFKFEsaS5pbnB1dENsYXNzKSxNKFEpfXZhciBHPXZvaWQgMDtzd2l0Y2goaS5pbnB1dCl7Y2FzZVwidGV4dFwiOmNhc2VcImVtYWlsXCI6Y2FzZVwicGFzc3dvcmRcIjpjYXNlXCJudW1iZXJcIjpjYXNlXCJ0ZWxcIjpjYXNlXCJ1cmxcIjpYPVAoYyxvLmlucHV0KSxYLnZhbHVlPWkuaW5wdXRWYWx1ZSxYLnBsYWNlaG9sZGVyPWkuaW5wdXRQbGFjZWhvbGRlcixYLnR5cGU9aS5pbnB1dCxMKFgpO2JyZWFrO2Nhc2VcImZpbGVcIjpYPVAoYyxvLmZpbGUpLFgucGxhY2Vob2xkZXI9aS5pbnB1dFBsYWNlaG9sZGVyLFgudHlwZT1pLmlucHV0LEwoWCk7YnJlYWs7Y2FzZVwicmFuZ2VcIjp2YXIgZWU9UChjLG8ucmFuZ2UpLHRlPWVlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSxuZT1lZS5xdWVyeVNlbGVjdG9yKFwib3V0cHV0XCIpO3RlLnZhbHVlPWkuaW5wdXRWYWx1ZSx0ZS50eXBlPWkuaW5wdXQsbmUudmFsdWU9aS5pbnB1dFZhbHVlLEwoZWUpO2JyZWFrO2Nhc2VcInNlbGVjdFwiOnZhciBvZT1QKGMsby5zZWxlY3QpO2lmKG9lLmlubmVySFRNTD1cIlwiLGkuaW5wdXRQbGFjZWhvbGRlcil7dmFyIGFlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7YWUuaW5uZXJIVE1MPWkuaW5wdXRQbGFjZWhvbGRlcixhZS52YWx1ZT1cIlwiLGFlLmRpc2FibGVkPSEwLGFlLnNlbGVjdGVkPSEwLG9lLmFwcGVuZENoaWxkKGFlKX1HPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO24udmFsdWU9dCxuLmlubmVySFRNTD1lW3RdLGkuaW5wdXRWYWx1ZT09PXQmJihuLnNlbGVjdGVkPSEwKSxvZS5hcHBlbmRDaGlsZChuKX1MKG9lKSxvZS5mb2N1cygpfTticmVhaztjYXNlXCJyYWRpb1wiOnZhciByZT1QKGMsby5yYWRpbyk7cmUuaW5uZXJIVE1MPVwiXCIsRz1mdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi50eXBlPVwicmFkaW9cIixuLm5hbWU9by5yYWRpbyxuLnZhbHVlPXQsaS5pbnB1dFZhbHVlPT09dCYmKG4uY2hlY2tlZD0hMCksci5pbm5lckhUTUw9ZVt0XSxhLmFwcGVuZENoaWxkKG4pLGEuYXBwZW5kQ2hpbGQociksYS5mb3I9bi5pZCxyZS5hcHBlbmRDaGlsZChhKX1MKHJlKTt2YXIgcz1yZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7cy5sZW5ndGgmJnNbMF0uZm9jdXMoKX07YnJlYWs7Y2FzZVwiY2hlY2tib3hcIjp2YXIgaWU9UChjLG8uY2hlY2tib3gpLHNlPWEoXCJjaGVja2JveFwiKTtzZS50eXBlPVwiY2hlY2tib3hcIixzZS52YWx1ZT0xLHNlLmlkPW8uY2hlY2tib3gsc2UuY2hlY2tlZD1Cb29sZWFuKGkuaW5wdXRWYWx1ZSk7dmFyIGxlPWllLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKTtsZS5sZW5ndGgmJmllLnJlbW92ZUNoaWxkKGxlWzBdKSxsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxsZS5pbm5lckhUTUw9aS5pbnB1dFBsYWNlaG9sZGVyLGllLmFwcGVuZENoaWxkKGxlKSxMKGllKTticmVhaztjYXNlXCJ0ZXh0YXJlYVwiOnZhciBjZT1QKGMsby50ZXh0YXJlYSk7Y2UudmFsdWU9aS5pbnB1dFZhbHVlLGNlLnBsYWNlaG9sZGVyPWkuaW5wdXRQbGFjZWhvbGRlcixMKGNlKTticmVhaztjYXNlIG51bGw6YnJlYWs7ZGVmYXVsdDpjb25zb2xlLmVycm9yKCdTd2VldEFsZXJ0MjogVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicraS5pbnB1dCsnXCInKX1cInNlbGVjdFwiIT09aS5pbnB1dCYmXCJyYWRpb1wiIT09aS5pbnB1dHx8KGkuaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZT8oZS5zaG93TG9hZGluZygpLGkuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLEcodCl9KSk6XCJvYmplY3RcIj09PVIoaS5pbnB1dE9wdGlvbnMpP0coaS5pbnB1dE9wdGlvbnMpOmNvbnNvbGUuZXJyb3IoXCJTd2VldEFsZXJ0MjogVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0IG9yIFByb21pc2UsIGdvdCBcIitSKGkuaW5wdXRPcHRpb25zKSkpLF8oaS5hbmltYXRpb24saS5vbk9wZW4pLGkuYWxsb3dFbnRlcktleT9VKC0xLDEpOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLHUoKS5zY3JvbGxUb3A9MCxcInVuZGVmaW5lZFwiPT10eXBlb2YgTXV0YXRpb25PYnNlcnZlcnx8RHx8KEQ9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZS5yZWNhbGN1bGF0ZUhlaWdodCksRC5vYnNlcnZlKGMse2NoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwLHN1YnRyZWU6ITB9KSl9KX07cmV0dXJuIFkuaXNWaXNpYmxlPWZ1bmN0aW9uKCl7cmV0dXJuISFkKCl9LFkucXVldWU9ZnVuY3Rpb24oZSl7Sz1lO3ZhciB0PWZ1bmN0aW9uKCl7Sz1bXSxkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKX0sbj1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxvKXshZnVuY3Rpb24gYShyLGkpe3I8Sy5sZW5ndGg/KGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIsciksWShLW3JdKS50aGVuKGZ1bmN0aW9uKGUpe24ucHVzaChlKSxhKHIrMSxpKX0sZnVuY3Rpb24oZSl7dCgpLG8oZSl9KSk6KHQoKSxlKG4pKX0oMCl9KX0sWS5nZXRRdWV1ZVN0ZXA9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIil9LFkuaW5zZXJ0UXVldWVTdGVwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQmJnQ8Sy5sZW5ndGg/Sy5zcGxpY2UodCwwLGUpOksucHVzaChlKX0sWS5kZWxldGVRdWV1ZVN0ZXA9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEtbZV0mJksuc3BsaWNlKGUsMSl9LFkuY2xvc2U9WS5jbG9zZU1vZGFsPWZ1bmN0aW9uKGUpe3ZhciB0PXUoKSxuPWQoKTtpZihuKXtCKG4sby5zaG93KSxFKG4sby5oaWRlKSxjbGVhclRpbWVvdXQobi50aW1lb3V0KSxqKCk7dmFyIGE9ZnVuY3Rpb24oKXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxCKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxvLnNob3duKSxCKGRvY3VtZW50LmJvZHksby5zaG93biksJCgpLFEoKX07ViYmIVMobixvLm5vYW5pbWF0aW9uKT9uLmFkZEV2ZW50TGlzdGVuZXIoVixmdW5jdGlvbiBlKCl7bi5yZW1vdmVFdmVudExpc3RlbmVyKFYsZSksUyhuLG8uaGlkZSkmJmEoKX0pOmEoKSxudWxsIT09ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmc2V0VGltZW91dChmdW5jdGlvbigpe2Uobil9KX19LFkuY2xpY2tDb25maXJtPWZ1bmN0aW9uKCl7cmV0dXJuIHYoKS5jbGljaygpfSxZLmNsaWNrQ2FuY2VsPWZ1bmN0aW9uKCl7cmV0dXJuIHkoKS5jbGljaygpfSxZLnNob3dMb2FkaW5nPVkuZW5hYmxlTG9hZGluZz1mdW5jdGlvbigpe3ZhciBlPWQoKTtlfHxZKFwiXCIpO3ZhciB0PWgoKSxuPXYoKSxhPXkoKTtMKHQpLEwobixcImlubGluZS1ibG9ja1wiKSxFKHQsby5sb2FkaW5nKSxFKGUsby5sb2FkaW5nKSxuLmRpc2FibGVkPSEwLGEuZGlzYWJsZWQ9ITB9LFkuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7aWYoIXR8fFwib2JqZWN0XCIhPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpSKHQpKSlyZXR1cm4gY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyOiB0aGUgYXJndW1lbnQgZm9yIHNldERlZmF1bHRzKCkgaXMgcmVxdWlyZWQgYW5kIGhhcyB0byBiZSBhIG9iamVjdFwiKTtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHxcImV4dHJhUGFyYW1zXCI9PT1ufHwoY29uc29sZS53YXJuKCdTd2VldEFsZXJ0MjogVW5rbm93biBwYXJhbWV0ZXIgXCInK24rJ1wiJyksZGVsZXRlIHRbbl0pO1UoSSx0KX0sWS5yZXNldERlZmF1bHRzPWZ1bmN0aW9uKCl7ST1VKHt9LGUpfSxZLm5vb3A9ZnVuY3Rpb24oKXt9LFkudmVyc2lvbj1cIjYuNi42XCIsWS5kZWZhdWx0PVksWX0pLHdpbmRvdy5Td2VldGFsZXJ0MiYmKHdpbmRvdy5zd2VldEFsZXJ0PXdpbmRvdy5zd2FsPXdpbmRvdy5Td2VldGFsZXJ0Mil9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1zd2VldGFsZXJ0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zd2VldGFsZXJ0L2J1aWxkL3Z1ZS1zd2VldGFsZXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3dlZXRhbGVydC9idWlsZC92dWUtc3dlZXRhbGVydC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnKSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnKSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gQCBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gQCBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBQUk9URUNUSU9OX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShQUk9URUNUSU9OX1BSRUZJWCwgJycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWVodG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IC0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgIWlzQXJyYXkob2JqKSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE1OTY1ZTNiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWV0YWJsZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTk2NWUzYlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWV0YWJsZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTE1OTY1ZTNiXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNTk2NWUzYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE1OTY1ZTNiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNlZmRkNTk2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2VmZGQ1OTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZWZkZDU5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNzcyNDA4M1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTc3MjQwODNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNzcyNDA4M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjA1YTM2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmMDVhMzZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvTWl4aW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWM0YzI0MDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YzRjMjQwOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EZWxldGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzdmNjI2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RlbGV0ZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjN2Y2MjY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmM3ZjYyNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vRGVsZXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjUyMjk0MzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vTm90aWZpY2F0aW9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NTIyOTQzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY1MjI5NDMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzk5ODZkMjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc3R1ZGVudC1jbGFzc2VzL0xpc3QudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc5OTg2ZDIwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzk5ODZkMjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYXN0ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NTBmNWFiNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01hc3Rlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0dWRlbnQtY2xhc3Nlcy9NYXN0ZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc1MGY1YWI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzUwZjVhYjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zdHVkZW50LWNsYXNzZXMvTWFzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc3R1ZGVudC1jbGFzc2VzL01hc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgU3R1ZGVudCBDbGFzc2VzIE1vZHVsZVxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5jb25zdCBTdHVkZW50Q2xhc3MgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc3R1ZGVudC1jbGFzc2VzL01hc3Rlci52dWUnKTtcblZ1ZS5jb21wb25lbnQoJ3N0dWRlbnQtY2xhc3NlcycsIFN0dWRlbnRDbGFzcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0dWRlbnQtY2xhc3MtYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==