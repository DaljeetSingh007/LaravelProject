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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/tutor-classes/List.vue":
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
                name: '_students',
                title: function title() {
                    return base.trans.column_heading.students;
                },
                callback: 'studentFormat'
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
            return '<span class="' + this.trans.status_color[value] + '">' + this.trans.status[value] + '<span>';
        },
        dateFormat: function dateFormat(value) {
            return value && value != '' ? moment(value).format('DD-MM-YYYY HH:mm') : '<em>-</em>';
        },
        hourFormat: function hourFormat(value) {
            return value && value != '' ? value + ' ' + this.trans.common.hours : '<em>-</em>';
        },
        studentFormat: function studentFormat(value) {
            if (value) {
                var full_name = '';
                value.map(function (val, inx) {
                    if (val.student != null) {
                        full_name += val.student.first_name + ' ' + val.student.last_name + ', ';
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/tutor-classes/Master.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__List__ = __webpack_require__("./resources/assets/js/components/tutor-classes/List.vue");
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

            $('a[href="#all_tutor_classes"]').trigger('click');
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-383bf999\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/tutor-classes/Master.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "m-portlet__body", attrs: { id: "users" } }, [
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
            attrs: { id: "all_tutor_classes", role: "tabpanel" }
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-383bf999", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b5644d6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/tutor-classes/List.vue":
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
                          href: _vm.urls.start_class.replaceAt(
                            _vm.urls.start_class.length - 1,
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
    require("vue-hot-reload-api")      .rerender("data-v-6b5644d6", module.exports)
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

/***/ "./resources/assets/js/components/tutor-classes/List.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/tutor-classes/List.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6b5644d6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/tutor-classes/List.vue")
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
Component.options.__file = "resources/assets/js/components/tutor-classes/List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b5644d6", Component.options)
  } else {
    hotAPI.reload("data-v-6b5644d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/tutor-classes/Master.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/tutor-classes/Master.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-383bf999\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/tutor-classes/Master.vue")
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
Component.options.__file = "resources/assets/js/components/tutor-classes/Master.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-383bf999", Component.options)
  } else {
    hotAPI.reload("data-v-383bf999", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/tutor-class-app.js":
/***/ (function(module, exports, __webpack_require__) {


/*
|----------------------------------------------------------------------
| Tutor Classes Module
|----------------------------------------------------------------------
*/
var TutorClass = __webpack_require__("./resources/assets/js/components/tutor-classes/Master.vue");
Vue.component('tutor-classes', TutorClass);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/tutor-class-app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDMyNDE1OTAzM2I3MWFhOTFmZWYiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL0xpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9NYXN0ZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZT80ZTZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/YmI3MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZT84NzZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vRGVsZXRlLnZ1ZT80NjM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL01hc3Rlci52dWU/YWIyNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlPzQ3NWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlP2JjNDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3R1dG9yLWNsYXNzZXMvTGlzdC52dWU/MTNhZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWU/MTQwOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zd2VldGFsZXJ0L2J1aWxkL3Z1ZS1zd2VldGFsZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9NYXN0ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdHV0b3ItY2xhc3MtYXBwLmpzIl0sIm5hbWVzIjpbIlR1dG9yQ2xhc3MiLCJyZXF1aXJlIiwiVnVlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7OztBQzNFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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K0JILFVBQS9CLEUiLCJmaWxlIjoiL2pzL3R1dG9yLWNsYXNzLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzMjQxNTkwMzNiNzFhYTkxZmVmIiwiPHRlbXBsYXRlPlxyXG48ZGl2IHYtaWY9XCJpc0ZpeGVkSGVhZGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cInZ1ZXRhYmxlLWhlYWQtd3JhcHBlclwiPlxyXG4gICAgPHRhYmxlIDpjbGFzcz1cIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzcywgY3NzLnRhYmxlSGVhZGVyQ2xhc3NdXCI+XHJcbiAgICAgIDx0aGVhZCA6Y2xhc3M9XCJbY3NzLmdUYWJsZVRoZWFkQ2xhc3NdXCI+XHJcbiAgICAgICAgPHRyIDpjbGFzcz1cIltjc3MuZ1RhYmxlVGhlYWRUckNsYXNzXVwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiXHJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgQGNoYW5nZT1cInRvZ2dsZUFsbENoZWNrYm94ZXMoZmllbGQubmFtZSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY29tcG9uZW50J1wiXHJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNvbXBvbmVudC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2xvdCdcIlxyXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zbG90LScrZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCJcclxuICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnXVwiIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVwiXHJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgIDppZD1cIidfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclRpdGxlKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgIDx0aCB2LWlmPVwic2Nyb2xsVmlzaWJsZVwiIDpzdHlsZT1cInt3aWR0aDogc2Nyb2xsQmFyV2lkdGh9XCIgY2xhc3M9XCJ2dWV0YWJsZS1ndXR0ZXItY29sXCI+PC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidnVldGFibGUtYm9keS13cmFwcGVyXCIgOnN0eWxlPVwie2hlaWdodDogdGFibGVIZWlnaHR9XCI+XHJcbiAgICA8dGFibGUgOmNsYXNzPVwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzLCBjc3MudGFibGVCb2R5Q2xhc3NdXCI+XHJcbiAgICAgIDxjb2xncm91cD5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgPGNvbFxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6aWQ9XCInX2NvbF8nICsgZmllbGQubmFtZVwiXHJcbiAgICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBmaWVsZC53aWR0aH1cIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzXVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgIDx0Ym9keSB2LWNsb2FrIDpjbGFzcz1cIlsndnVldGFibGUtYm9keScsIGNzcy5nVGFibGVCb2R5Q2xhc3NdXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGl0ZW1JbmRleCkgaW4gdGFibGVEYXRhXCI+XHJcbiAgICAgICAgICA8dHIgXHJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtSW5kZXhcIlxyXG4gICAgICAgICAgICA6aXRlbS1pbmRleD1cIml0ZW1JbmRleFwiIFxyXG4gICAgICAgICAgICA6cmVuZGVyPVwib25Sb3dDaGFuZ2VkKGl0ZW0pXCIgXHJcbiAgICAgICAgICAgIDpjbGFzcz1cIm9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcIj5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIiBcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJlbmRlclNlcXVlbmNlKGl0ZW1JbmRleClcIj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19oYW5kbGUnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVySWNvblRhZyhbJ2hhbmRsZS1pY29uJywgY3NzLmhhbmRsZUljb25dKVwiXHJcbiAgICAgICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWNoZWNrYm94ZXMnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInRvZ2dsZUNoZWNrYm94KGl0ZW0sIGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19jb21wb25lbnQnXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtY29tcG9uZW50JywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCIgOnJvdy1maWVsZD1cImZpZWxkLnNvcnRGaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19zbG90J1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNsb3QnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9zbG90PlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJmaWVsZC5kYXRhQ2xhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJOb3JtYWxGaWVsZChmaWVsZCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2VsbENsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgID48L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXNlRGV0YWlsUm93XCI+XHJcbiAgICAgICAgICAgIDx0cmFuc2l0aW9uIDpuYW1lPVwiZGV0YWlsUm93VHJhbnNpdGlvblwiIDprZXk9XCJpdGVtSW5kZXhcIj5cclxuICAgICAgICAgICAgICA8dHIgdi1pZj1cImlzVmlzaWJsZURldGFpbFJvdyhpdGVtW3RyYWNrQnldKVwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbY3NzLmRldGFpbFJvd0NsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImRldGFpbFJvd0NvbXBvbmVudFwiIDpyb3ctZGF0YT1cIml0ZW1cIiA6cm93LWluZGV4PVwiaXRlbUluZGV4XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImRpc3BsYXlFbXB0eURhdGFSb3dcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCIgY2xhc3M9XCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIiB2LWh0bWw9XCJub0RhdGFUZW1wbGF0ZVwiPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNzVGhhbk1pblJvd3NcIj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cImkgaW4gYmxhbmtSb3dzXCIgY2xhc3M9XCJibGFuay1yb3dcIiA6a2V5PVwiaVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJmaWVsZC52aXNpYmxlXCIgOmtleT1cImZpZWxkSW5kZXhcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjx0YWJsZSB2LWVsc2UgOmNsYXNzPVwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzXVwiPiA8IS0tIG5vIGZpeGVkIGhlYWRlciAtIHJlZ3VsYXIgdGFibGUgLS0+XHJcbiAgPHRoZWFkIDpjbGFzcz1cIltjc3MuZ1RhYmxlVGhlYWRDbGFzc11cIj5cclxuICAgIDx0ciA6Y2xhc3M9XCJbY3NzLmdUYWJsZVRoZWFkVHJDbGFzc11cIj5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZmllbGQudmlzaWJsZVwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLWNoZWNrYm94LScrdHJhY2tCeSwgZmllbGQudGl0bGVDbGFzc11cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIEBjaGFuZ2U9XCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja0NoZWNrYm94ZXNTdGF0ZShmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NvbXBvbmVudCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1jb21wb25lbnQtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVwiXHJcbiAgICAgICAgICAgICAgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2xvdCdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zbG90LScrZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cIm9yZGVyQnkoZmllbGQsICRldmVudClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgPHRoIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zZXF1ZW5jZSdcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7d2lkdGg6IGZpZWxkLndpZHRofVwiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS10aC1zZXF1ZW5jZScsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXCIgdi1odG1sPVwicmVuZGVyVGl0bGUoZmllbGQpXCJcclxuICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCB2LWlmPVwibm90SW4oZXh0cmFjdE5hbWUoZmllbGQubmFtZSksIFsnX19zZXF1ZW5jZScsICdfX2NoZWNrYm94JywgJ19fY29tcG9uZW50JywgJ19fc2xvdCddKVwiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcyB8fCAnJywgc29ydENsYXNzKGZpZWxkKV1cIiB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgICA8dGggQGNsaWNrPVwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgIDppZD1cIidfJyArIGZpZWxkLm5hbWVcIlxyXG4gICAgICAgICAgICAgIDpzdHlsZT1cInt3aWR0aDogZmllbGQud2lkdGh9XCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXCJcclxuICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJUaXRsZShmaWVsZClcIlxyXG4gICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHkgdi1jbG9hayA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLWJvZHknLCBjc3MuZ1RhYmxlQm9keUNsYXNzXVwiPlxyXG4gICAgPHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW0sIGl0ZW1JbmRleCkgaW4gdGFibGVEYXRhXCI+XHJcbiAgICAgIDx0ciBAZGJsY2xpY2s9XCJvblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVwiIFxyXG4gICAgICAgIDprZXk9XCJpdGVtSW5kZXhcIlxyXG4gICAgICAgIDppdGVtLWluZGV4PVwiaXRlbUluZGV4XCIgXHJcbiAgICAgICAgOnJlbmRlcj1cIm9uUm93Q2hhbmdlZChpdGVtKVwiIFxyXG4gICAgICAgIDpjbGFzcz1cIlsoaXRlbUluZGV4JTI9PTAgPyAnZXZlbicgOiAnb2RkJyksIG9uUm93Q2xhc3MoaXRlbSwgaXRlbUluZGV4KV1cIlxyXG4gICAgICAgIEBjbGljaz1cIm9uUm93Q2xpY2tlZChpdGVtLCAkZXZlbnQpXCIgXHJcbiAgICAgID5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpZWxkLnZpc2libGVcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNlcXVlbmNlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2hhbmRsZSdcIiBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJyZW5kZXJJY29uVGFnKFsnaGFuZGxlLWljb24nLCBjc3MuaGFuZGxlSWNvbl0pXCJcclxuICAgICAgICAgICAgICA+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NoZWNrYm94J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jaGVja2JveGVzJywgZmllbGQuZGF0YUNsYXNzXVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJyb3dTZWxlY3RlZChpdGVtLCBmaWVsZC5uYW1lKVwiPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fY29tcG9uZW50J1wiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiWyd2dWV0YWJsZS1jb21wb25lbnQnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgID48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX3Nsb3QnXCIgXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGRJbmRleFwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbJ3Z1ZXRhYmxlLXNsb3QnLCBmaWVsZC5kYXRhQ2xhc3NdXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXCJcclxuICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIiA6cm93LWZpZWxkPVwiZmllbGQuc29ydEZpZWxkXCJcclxuICAgICAgICAgICAgICAgID48L3Nsb3Q+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgICAgICA8dGQgdi1pZj1cImhhc0NhbGxiYWNrKGZpZWxkKVwiIFxyXG4gICAgICAgICAgICAgICAgOmtleT1cImZpZWxkSW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZmllbGQuZGF0YUNsYXNzXCJcclxuICAgICAgICAgICAgICAgIHYtaHRtbD1cImNhbGxDYWxsYmFjayhmaWVsZCwgaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIHYtZWxzZSBcclxuICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZEluZGV4XCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImZpZWxkLmRhdGFDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICB2LWh0bWw9XCJnZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lLCAnJylcIlxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidXNlRGV0YWlsUm93XCI+XHJcbiAgICAgICAgPHRyYW5zaXRpb24gOm5hbWU9XCJkZXRhaWxSb3dUcmFuc2l0aW9uXCIgOmtleT1cIml0ZW1JbmRleFwiPlxyXG4gICAgICAgICAgPHRyIHYtaWY9XCJpc1Zpc2libGVEZXRhaWxSb3coaXRlbVt0cmFja0J5XSlcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJbY3NzLmRldGFpbFJvd0NsYXNzXVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIm9uRGV0YWlsUm93Q2xpY2soaXRlbSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImNvdW50VmlzaWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiZGV0YWlsUm93Q29tcG9uZW50XCIgOnJvdy1kYXRhPVwiaXRlbVwiIDpyb3ctaW5kZXg9XCJpdGVtSW5kZXhcIj48L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZGlzcGxheUVtcHR5RGF0YVJvd1wiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRkIDpjb2xzcGFuPVwiY291bnRWaXNpYmxlRmllbGRzXCIgY2xhc3M9XCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcIiB2LWh0bWw9XCJub0RhdGFUZW1wbGF0ZVwiPjwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJsZXNzVGhhbk1pblJvd3NcIj5cclxuICAgICAgPHRyIHYtZm9yPVwiaSBpbiBibGFua1Jvd3NcIiBjbGFzcz1cImJsYW5rLXJvd1wiIDprZXk9XCJpXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1wiPlxyXG4gICAgICAgICAgPHRkIHYtaWY9XCJmaWVsZC52aXNpYmxlXCIgOmtleT1cImZpZWxkSW5kZXhcIj4mbmJzcDs8L3RkPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGZpZWxkczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBsb2FkT25TdGFydDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBpVXJsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgaHR0cE1ldGhvZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZ2V0JyxcclxuICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIFsnZ2V0JywgJ3Bvc3QnXS5pbmRleE9mKHZhbHVlKSA+IC0xXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWN0aXZlQXBpVXJsOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBpTW9kZToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhVG90YWw6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgZGF0YU1hbmFnZXI6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhUGF0aDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnZGF0YSdcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uUGF0aDoge1xyXG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdsaW5rcy5wYWdpbmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgIHR5cGU6IFtPYmplY3QsIEZ1bmN0aW9uXSxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNvcnQ6ICdzb3J0JyxcclxuICAgICAgICAgIHBhZ2U6ICdwYWdlJyxcclxuICAgICAgICAgIHBlclBhZ2U6ICdwZXJfcGFnZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhcHBlbmRQYXJhbXM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGh0dHBPcHRpb25zOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgZGVmYXVsdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBodHRwRmV0Y2g6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICBwZXJQYWdlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdGlhbFBhZ2U6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gMVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc29ydE9yZGVyOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11bHRpU29ydDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRhYmxlSGVpZ2h0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIC8qXHJcbiAgICAgKiBwaHlzaWNhbCBrZXkgdGhhdCB3aWxsIHRyaWdnZXIgbXVsdGktc29ydCBvcHRpb25cclxuICAgICAqIHBvc3NpYmxlIHZhbHVlczogJ2FsdCcsICdjdHJsJywgJ21ldGEnLCAnc2hpZnQnXHJcbiAgICAgKiAnY3RybCcgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gTWFjXHJcbiAgICAgKi9cclxuICAgIG11bHRpU29ydEtleToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdhbHQnXHJcbiAgICB9LFxyXG4gICAgLyogZGVwcmVjYXRlZCAqL1xyXG4gICAgcm93Q2xhc3NDYWxsYmFjazoge1xyXG4gICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgcm93Q2xhc3M6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIGRldGFpbFJvd0NvbXBvbmVudDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsUm93VHJhbnNpdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgdHJhY2tCeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdpZCdcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGFibGVDbGFzczogJ3VpIGJsdWUgc2VsZWN0YWJsZSBjZWxsZWQgc3RhY2thYmxlIGF0dGFjaGVkIHRhYmxlJyxcclxuICAgICAgICAgIGxvYWRpbmdDbGFzczogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgYXNjZW5kaW5nSWNvbjogJ2JsdWUgY2hldnJvbiB1cCBpY29uJyxcclxuICAgICAgICAgIGRlc2NlbmRpbmdJY29uOiAnYmx1ZSBjaGV2cm9uIGRvd24gaWNvbicsXHJcbiAgICAgICAgICBhc2NlbmRpbmdDbGFzczogJ3NvcnRlZC1hc2MnLFxyXG4gICAgICAgICAgZGVzY2VuZGluZ0NsYXNzOiAnc29ydGVkLWRlc2MnLFxyXG4gICAgICAgICAgc29ydGFibGVJY29uOiAnJyxcclxuICAgICAgICAgIGRldGFpbFJvd0NsYXNzOiAndnVldGFibGUtZGV0YWlsLXJvdycsXHJcbiAgICAgICAgICBoYW5kbGVJY29uOiAnZ3JleSBzaWRlYmFyIGljb24nLFxyXG4gICAgICAgICAgdGFibGVCb2R5Q2xhc3M6ICd2dWV0YWJsZS1zZW1hbnRpYy1uby10b3AgdnVldGFibGUtZml4ZWQtbGF5b3V0JyxcclxuICAgICAgICAgIHRhYmxlSGVhZGVyQ2xhc3M6ICd2dWV0YWJsZS1maXhlZC1sYXlvdXQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWluUm93czoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBzaWxlbnQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBub0RhdGFUZW1wbGF0ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdObyBEYXRhIEF2YWlsYWJsZSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dTb3J0SWNvbnM6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudFByZWZpeDogJ3Z1ZXRhYmxlOicsXHJcbiAgICAgIHRhYmxlRmllbGRzOiBbXSxcclxuICAgICAgdGFibGVEYXRhOiBudWxsLFxyXG4gICAgICB0YWJsZVBhZ2luYXRpb246IG51bGwsXHJcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmluaXRpYWxQYWdlLFxyXG4gICAgICBzZWxlY3RlZFRvOiBbXSxcclxuICAgICAgdmlzaWJsZURldGFpbFJvd3M6IFtdLFxyXG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IDAsXHJcbiAgICAgIHNjcm9sbEJhcldpZHRoOiAnMTdweCcsIC8vY2hyb21lIGRlZmF1bHRcclxuICAgICAgc2Nyb2xsVmlzaWJsZTogZmFsc2UsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkICgpIHtcclxuICAgIHRoaXMubm9ybWFsaXplRmllbGRzKClcclxuICAgIHRoaXMubm9ybWFsaXplU29ydE9yZGVyKClcclxuICAgIGlmICh0aGlzLmlzRml4ZWRIZWFkZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGxCYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArICdweCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2luaXRpYWxpemVkJywgdGhpcy50YWJsZUZpZWxkcylcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHRoaXMubG9hZE9uU3RhcnQpIHtcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XHJcbiAgICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF07XHJcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVzdHJveWVkICgpIHtcclxuICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF07XHJcbiAgICBpZiAoZWxlbSAhPSBudWxsKSB7XHJcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHVzZURldGFpbFJvdyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSAmJiB0aGlzLnRhYmxlRGF0YVswXSAmJiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJycgJiYgdHlwZW9mIHRoaXMudGFibGVEYXRhWzBdW3RoaXMudHJhY2tCeV0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdZb3UgbmVlZCB0byBkZWZpbmUgdW5pcXVlIHJvdyBpZGVudGlmaWVyIGluIG9yZGVyIGZvciBkZXRhaWwtcm93IGZlYXR1cmUgdG8gd29yay4gVXNlIGB0cmFjay1ieWAgcHJvcCB0byBkZWZpbmUgb25lIScpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJydcclxuICAgIH0sXHJcbiAgICBjb3VudFZpc2libGVGaWVsZHMgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUZpZWxkcy5maWx0ZXIoZnVuY3Rpb24oZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQudmlzaWJsZVxyXG4gICAgICB9KS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBjb3VudFRhYmxlRGF0YSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhLmxlbmd0aFxyXG4gICAgfSxcclxuICAgIGRpc3BsYXlFbXB0eURhdGFSb3cgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb3VudFRhYmxlRGF0YSA9PT0gMCAmJiB0aGlzLm5vRGF0YVRlbXBsYXRlLmxlbmd0aCA+IDBcclxuICAgIH0sXHJcbiAgICBsZXNzVGhhbk1pblJvd3MgKCkge1xyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwgfHwgdGhpcy50YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZURhdGEubGVuZ3RoIDwgdGhpcy5taW5Sb3dzXHJcbiAgICB9LFxyXG4gICAgYmxhbmtSb3dzICgpIHtcclxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsIHx8IHRoaXMudGFibGVEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pblJvd3NcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEubGVuZ3RoID49IHRoaXMubWluUm93cykge1xyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLm1pblJvd3MgLSB0aGlzLnRhYmxlRGF0YS5sZW5ndGhcclxuICAgIH0sXHJcbiAgICBpc0FwaU1vZGUgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hcGlNb2RlXHJcbiAgICB9LFxyXG4gICAgaXNEYXRhTW9kZSAoKSB7XHJcbiAgICAgIHJldHVybiAhIHRoaXMuYXBpTW9kZVxyXG4gICAgfSxcclxuICAgIGlzRml4ZWRIZWFkZXIgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZUhlaWdodCAhPSBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRTY3JvbGxCYXJXaWR0aCAoKSB7XHJcbiAgICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gJzEwMHB4JztcclxuXHJcbiAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG5cclxuXHJcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XHJcblxyXG5cclxuICAgICAgY29uc3Qgd2lkdGhXaXRob3V0U2Nyb2xsYmFyID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xyXG5cclxuICAgICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsYmFyID0gaW5uZXIub2Zmc2V0V2lkdGg7XHJcblxyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XHJcblxyXG5cclxuICAgICAgcmV0dXJuICh3aWR0aFdpdGhvdXRTY3JvbGxiYXIgLSB3aWR0aFdpdGhTY3JvbGxiYXIpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVNjcm9sbCAoZSkgeyAvL21ha2Ugc3VyZSB0aGF0IHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IGFyZSBhbGlnbmVkIHdoZW4gc2Nyb2xsaW5nIGhvcml6b250YWxseSBvbiBhIHRhYmxlIHRoYXQgaXMgd2lkZXIgdGhhbiB0aGUgdmlld3BvcnRcclxuICAgICAgbGV0IGhvcml6b250YWwgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgaWYgKGhvcml6b250YWwgIT0gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24pIHsgLy9kb24ndCBtb2RpZnkgaGVhZGVyIHNjcm9sbCBpZiB3ZSBhcmUgc2Nyb2xsaW5nIHZlcnRpY2FsbHlcclxuICAgICAgICBsZXQgaGVhZGVyID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtaGVhZC13cmFwcGVyJylbMF1cclxuICAgICAgICBpZiAoaGVhZGVyICE9IG51bGwpIHtcclxuICAgICAgICAgIGhlYWRlci5zY3JvbGxMZWZ0ID0gaG9yaXpvbnRhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBob3Jpem9udGFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG5vcm1hbGl6ZUZpZWxkcyAoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YodGhpcy5maWVsZHMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBcImZpZWxkc1wiIHByb3AuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkcyA9IFtdXHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgb2JqXHJcbiAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQsIGkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLFxyXG4gICAgICAgICAgICB0aXRsZTogc2VsZi5zZXRUaXRsZShmaWVsZCksXHJcbiAgICAgICAgICAgIHRpdGxlQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICBkYXRhQ2xhc3M6ICcnLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogbnVsbCxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxyXG4gICAgICAgICAgICB3aWR0aDogZmllbGQud2lkdGgsXHJcbiAgICAgICAgICAgIHRpdGxlOiAoZmllbGQudGl0bGUgPT09IHVuZGVmaW5lZCkgPyBzZWxmLnNldFRpdGxlKGZpZWxkLm5hbWUpIDogZmllbGQudGl0bGUsXHJcbiAgICAgICAgICAgIHNvcnRGaWVsZDogZmllbGQuc29ydEZpZWxkLFxyXG4gICAgICAgICAgICB0aXRsZUNsYXNzOiAoZmllbGQudGl0bGVDbGFzcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQudGl0bGVDbGFzcyxcclxuICAgICAgICAgICAgZGF0YUNsYXNzOiAoZmllbGQuZGF0YUNsYXNzID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC5kYXRhQ2xhc3MsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoZmllbGQuY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLmNhbGxiYWNrLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiAoZmllbGQudmlzaWJsZSA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBmaWVsZC52aXNpYmxlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnRhYmxlRmllbGRzLnB1c2gob2JqKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNldERhdGEgKGRhdGEpIHtcclxuICAgICAgLy8gdGhpcy5hcGlNb2RlID0gZmFsc2VcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IGRhdGFcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRpbmcnKVxyXG5cclxuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmdldE9iamVjdFZhbHVlKGRhdGEsIHRoaXMuZGF0YVBhdGgsIG51bGwpXHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gdGhpcy5nZXRPYmplY3RWYWx1ZShkYXRhLCB0aGlzLnBhZ2luYXRpb25QYXRoLCBudWxsKVxyXG5cclxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ3BhZ2luYXRpb24tZGF0YScsIHRoaXMudGFibGVQYWdpbmF0aW9uKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNldFRpdGxlIChzdHIpIHtcclxuICAgICAgaWYgKHRoaXMuaXNTcGVjaWFsRmllbGQoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy50aXRsZUNhc2Uoc3RyKVxyXG4gICAgfSxcclxuICAgIGdldFRpdGxlIChmaWVsZCkge1xyXG4gICAgICBpZiAodHlwZW9mKGZpZWxkLnRpdGxlKSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGZpZWxkLnRpdGxlKClcclxuXHJcbiAgICAgIHJldHVybiB0eXBlb2YoZmllbGQudGl0bGUpID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgID8gZmllbGQubmFtZS5yZXBsYWNlKCcuJywgJyAnKVxyXG4gICAgICAgIDogZmllbGQudGl0bGVcclxuICAgIH0sXHJcbiAgICByZW5kZXJUaXRsZSAoZmllbGQpIHtcclxuICAgICAgbGV0IHRpdGxlID0gdGhpcy5nZXRUaXRsZShmaWVsZClcclxuXHJcbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPiAwICYmIHRoaXMuaXNJbkN1cnJlbnRTb3J0R3JvdXAoZmllbGQpIHx8IHRoaXMuaGFzU29ydGFibGVJY29uKGZpZWxkKSkge1xyXG4gICAgICAgIGxldCBzdHlsZSA9IGBvcGFjaXR5OiR7dGhpcy5zb3J0SWNvbk9wYWNpdHkoZmllbGQpfTtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpyaWdodGBcclxuICAgICAgICBsZXQgaWNvblRhZyA9IHRoaXMuc2hvd1NvcnRJY29ucyA/IHRoaXMucmVuZGVySWNvblRhZyhbJ3NvcnQtaWNvbicsIHRoaXMuc29ydEljb24oZmllbGQpXSwgYHN0eWxlPVwiJHtzdHlsZX1cImApIDogJydcclxuICAgICAgICByZXR1cm4gdGl0bGUgKyAnICcgKyBpY29uVGFnXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aXRsZVxyXG4gICAgfSxcclxuICAgIHJlbmRlclNlcXVlbmNlIChpbmRleCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb25cclxuICAgICAgICA/IHRoaXMudGFibGVQYWdpbmF0aW9uLmZyb20gKyBpbmRleFxyXG4gICAgICAgIDogaW5kZXhcclxuICAgIH0sXHJcbiAgICByZW5kZXJOb3JtYWxGaWVsZCAoZmllbGQsIGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFzQ2FsbGJhY2soZmllbGQpXHJcbiAgICAgICAgPyB0aGlzLmNhbGxDYWxsYmFjayhmaWVsZCwgaXRlbSlcclxuICAgICAgICA6IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSwgJycpXHJcbiAgICB9LFxyXG4gICAgaXNTcGVjaWFsRmllbGQgKGZpZWxkTmFtZSkge1xyXG4gICAgICByZXR1cm4gZmllbGROYW1lLnNsaWNlKDAsIDIpID09PSAnX18nXHJcbiAgICB9LFxyXG4gICAgdGl0bGVDYXNlIChzdHIpIHtcclxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHcrL2csIGZ1bmN0aW9uKHR4dCkge1xyXG4gICAgICAgIHJldHVybiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjYW1lbENhc2UgKHN0ciwgZGVsaW1pdGVyID0gJ18nKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICByZXR1cm4gc3RyLnNwbGl0KGRlbGltaXRlcikubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gc2VsZi50aXRsZUNhc2UoaXRlbSlcclxuICAgICAgfSkuam9pbignJylcclxuICAgIH0sXHJcbiAgICBub3RJbiAoc3RyLCBhcnIpIHtcclxuICAgICAgcmV0dXJuIGFyci5pbmRleE9mKHN0cikgPT09IC0xXHJcbiAgICB9LFxyXG4gICAgbG9hZERhdGEgKHN1Y2Nlc3MgPSB0aGlzLmxvYWRTdWNjZXNzLCBmYWlsZWQgPSB0aGlzLmxvYWRGYWlsZWQpIHtcclxuICAgICAgaWYgKHRoaXMuaXNEYXRhTW9kZSkge1xyXG4gICAgICAgIHRoaXMuY2FsbERhdGFNYW5hZ2VyKClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRpbmcnKVxyXG5cclxuICAgICAgdGhpcy5odHRwT3B0aW9uc1sncGFyYW1zJ10gPSB0aGlzLmdldEFwcGVuZFBhcmFtcyggdGhpcy5nZXRBbGxRdWVyeVBhcmFtcygpIClcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmZldGNoKHRoaXMuYXBpVXJsLCB0aGlzLmh0dHBPcHRpb25zKS50aGVuKFxyXG4gICAgICAgICAgc3VjY2VzcyxcclxuICAgICAgICAgIGZhaWxlZFxyXG4gICAgICApLmNhdGNoKCgpID0+IGZhaWxlZCgpKVxyXG4gICAgfSxcclxuICAgIGZldGNoIChhcGlVcmwsIGh0dHBPcHRpb25zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBGZXRjaFxyXG4gICAgICAgICAgPyB0aGlzLmh0dHBGZXRjaChhcGlVcmwsIGh0dHBPcHRpb25zKVxyXG4gICAgICAgICAgOiBheGlvc1t0aGlzLmh0dHBNZXRob2RdKGFwaVVybCwgaHR0cE9wdGlvbnMpXHJcbiAgICB9LFxyXG4gICAgbG9hZFN1Y2Nlc3MgKHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkLXN1Y2Nlc3MnLCByZXNwb25zZSlcclxuXHJcbiAgICAgIGxldCBib2R5ID0gdGhpcy50cmFuc2Zvcm0ocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5nZXRPYmplY3RWYWx1ZShib2R5LCB0aGlzLmRhdGFQYXRoLCBudWxsKVxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcclxuXHJcbiAgICAgIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud2FybigndnVldGFibGU6IHBhZ2luYXRpb24tcGF0aCBcIicgKyB0aGlzLnBhZ2luYXRpb25QYXRoICsgJ1wiIG5vdCBmb3VuZC4gJ1xyXG4gICAgICAgICAgKyAnSXQgbG9va3MgbGlrZSB0aGUgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBzZXZlciBkb2VzIG5vdCBoYXZlIHBhZ2luYXRpb24gaW5mb3JtYXRpb24gJ1xyXG4gICAgICAgICAgKyBcIm9yIHlvdSBtYXkgaGF2ZSBzZXQgaXQgaW5jb3JyZWN0bHkuXFxuXCJcclxuICAgICAgICAgICsgJ1lvdSBjYW4gZXhwbGljaXRseSBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYnkgc2V0dGluZyBwYWdpbmF0aW9uLXBhdGg9XCJcIi4nXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmZpeEhlYWRlcigpXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoJ3BhZ2luYXRpb24tZGF0YScsIHRoaXMudGFibGVQYWdpbmF0aW9uKVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGZpeEhlYWRlcigpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzRml4ZWRIZWFkZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbGVtID0gdGhpcy4kZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndnVldGFibGUtYm9keS13cmFwcGVyJylbMF1cclxuICAgICAgaWYgKGVsZW0gIT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRGYWlsZWQgKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWQtZXJyb3InLCByZXNwb25zZSlcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWQtZXJyb3InLCByZXNwb25zZSlcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWRlZCcpXHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtIChkYXRhKSB7XHJcbiAgICAgIGxldCBmdW5jID0gJ3RyYW5zZm9ybSdcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEZ1bmN0aW9uRXhpc3RzKGZ1bmMpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBkYXRhKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YVxyXG4gICAgfSxcclxuICAgIHBhcmVudEZ1bmN0aW9uRXhpc3RzIChmdW5jKSB7XHJcbiAgICAgIHJldHVybiAoZnVuYyAhPT0gJycgJiYgdHlwZW9mIHRoaXMuJHBhcmVudFtmdW5jXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgIH0sXHJcbiAgICBjYWxsUGFyZW50RnVuY3Rpb24gKGZ1bmMsIGFyZ3MsIGRlZmF1bHRWYWx1ZSA9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMucGFyZW50RnVuY3Rpb25FeGlzdHMoZnVuYykpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBhcmdzKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICB9LFxyXG4gICAgZmlyZUV2ZW50IChldmVudE5hbWUsIGFyZ3MpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgZXZlbnROYW1lLCBhcmdzKVxyXG4gICAgfSxcclxuICAgIHdhcm4gKG1zZykge1xyXG4gICAgICBpZiAoIXRoaXMuc2lsZW50KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKG1zZylcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEFsbFF1ZXJ5UGFyYW1zICgpIHtcclxuICAgICAgbGV0IHBhcmFtcyA9IHt9XHJcblxyXG4gICAgICBpZiAodHlwZW9mKHRoaXMucXVlcnlQYXJhbXMpID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcGFyYW1zID0gdGhpcy5xdWVyeVBhcmFtcyh0aGlzLnNvcnRPcmRlciwgdGhpcy5jdXJyZW50UGFnZSwgdGhpcy5wZXJQYWdlKVxyXG4gICAgICAgIHJldHVybiB0eXBlb2YocGFyYW1zKSAhPT0gJ29iamVjdCcgPyB7fSA6IHBhcmFtc1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5zb3J0XSA9IHRoaXMuZ2V0U29ydFBhcmFtKClcclxuICAgICAgcGFyYW1zW3RoaXMucXVlcnlQYXJhbXMucGFnZV0gPSB0aGlzLmN1cnJlbnRQYWdlXHJcbiAgICAgIHBhcmFtc1t0aGlzLnF1ZXJ5UGFyYW1zLnBlclBhZ2VdID0gdGhpcy5wZXJQYWdlXHJcblxyXG4gICAgICByZXR1cm4gcGFyYW1zXHJcbiAgICB9LFxyXG4gICAgZ2V0U29ydFBhcmFtICgpIHtcclxuICAgICAgaWYgKCF0aGlzLnNvcnRPcmRlciB8fCB0aGlzLnNvcnRPcmRlci5maWVsZCA9PSAnJykge1xyXG4gICAgICAgIHJldHVybiAnJ1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJHBhcmVudFsnZ2V0U29ydFBhcmFtJ10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50WydnZXRTb3J0UGFyYW0nXS5jYWxsKHRoaXMuJHBhcmVudCwgdGhpcy5zb3J0T3JkZXIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRTb3J0UGFyYW0oKVxyXG4gICAgfSxcclxuICAgIGdldERlZmF1bHRTb3J0UGFyYW0gKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydE9yZGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICh0eXBlb2YgdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgID8gdGhpcy5zb3J0T3JkZXJbaV0uZmllbGRcclxuICAgICAgICAgIDogdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkO1xyXG5cclxuICAgICAgICByZXN1bHQgKz0gZmllbGROYW1lICsgJ3wnICsgdGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uICsgKChpKzEpIDwgdGhpcy5zb3J0T3JkZXIubGVuZ3RoID8gJywnIDogJycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0U29ydFBhcmFtOiAnLCByZXN1bHQpXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0QXBwZW5kUGFyYW1zIChwYXJhbXMpIHtcclxuICAgICAgZm9yIChsZXQgeCBpbiB0aGlzLmFwcGVuZFBhcmFtcykge1xyXG4gICAgICAgIHBhcmFtc1t4XSA9IHRoaXMuYXBwZW5kUGFyYW1zW3hdXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXJhbXNcclxuICAgIH0sXHJcbiAgICBleHRyYWN0TmFtZSAoc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVswXS50cmltKClcclxuICAgIH0sXHJcbiAgICBleHRyYWN0QXJncyAoc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJzonKVsxXVxyXG4gICAgfSxcclxuICAgIGlzU29ydGFibGUgKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiAhKHR5cGVvZiBmaWVsZC5zb3J0RmllbGQgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgfSxcclxuICAgIGlzSW5DdXJyZW50U29ydEdyb3VwIChmaWVsZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpICE9PSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBoYXNTb3J0YWJsZUljb24gKGZpZWxkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzU29ydGFibGUoZmllbGQpICYmIHRoaXMuY3NzLnNvcnRhYmxlSWNvbiAhPSAnJ1xyXG4gICAgfSxcclxuICAgIGN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbiAoZmllbGQpIHtcclxuICAgICAgaWYgKCAhIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uKGZpZWxkLCBpKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24gKGZpZWxkLCBpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNvcnRPcmRlcltpXS5maWVsZCA9PT0gZmllbGQubmFtZSAmJiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQgPT09IGZpZWxkLnNvcnRGaWVsZFxyXG4gICAgfSxcclxuICAgIG9yZGVyQnkgKGZpZWxkLCBldmVudCkge1xyXG4gICAgICBpZiAoICEgdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSApIHJldHVyblxyXG5cclxuICAgICAgbGV0IGtleSA9IHRoaXMubXVsdGlTb3J0S2V5LnRvTG93ZXJDYXNlKCkgKyAnS2V5J1xyXG5cclxuICAgICAgaWYgKHRoaXMubXVsdGlTb3J0ICYmIGV2ZW50W2tleV0pIHsgLy9hZGRpbmcgY29sdW1uIHRvIG11bHRpc29ydFxyXG4gICAgICAgIHRoaXMubXVsdGlDb2x1bW5Tb3J0KGZpZWxkKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbm8gbXVsdGlzb3J0LCBvciByZXNldHRpbmcgc29ydFxyXG4gICAgICAgIHRoaXMuc2luZ2xlQ29sdW1uU29ydChmaWVsZClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDEgICAgLy8gcmVzZXQgcGFnZSBpbmRleFxyXG4gICAgICBpZiAodGhpcy5hcGlNb2RlIHx8IHRoaXMuZGF0YU1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG11bHRpQ29sdW1uU29ydCAoZmllbGQpIHtcclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZCk7XHJcblxyXG4gICAgICBpZihpID09PSBmYWxzZSkgeyAvL3RoaXMgZmllbGQgaXMgbm90IGluIHRoZSBzb3J0IGFycmF5IHlldFxyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXHJcbiAgICAgICAgICBzb3J0RmllbGQ6IGZpZWxkLnNvcnRGaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogJ2FzYydcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHsgLy90aGlzIGZpZWxkIGlzIGluIHRoZSBzb3J0IGFycmF5LCBub3cgd2UgY2hhbmdlIGl0cyBzdGF0ZVxyXG4gICAgICAgIGlmKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcclxuICAgICAgICAgIC8vIHN3aXRjaCBkaXJlY3Rpb25cclxuICAgICAgICAgIHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9ICdkZXNjJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvL3JlbW92ZSBzb3J0IGNvbmRpdGlvblxyXG4gICAgICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNpbmdsZUNvbHVtblNvcnQgKGZpZWxkKSB7XHJcbiAgICAgIGlmICh0aGlzLnNvcnRPcmRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLmNsZWFyU29ydE9yZGVyKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zb3J0T3JkZXIuc3BsaWNlKDEpOyAvL3JlbW92ZXMgYWRkaXRpb25hbCBjb2x1bW5zXHJcblxyXG4gICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgMCkpIHtcclxuICAgICAgICAvLyBjaGFuZ2Ugc29ydCBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYydcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZXNldCBzb3J0IGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyWzBdLmRpcmVjdGlvbiA9ICdhc2MnXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZmllbGQgPSBmaWVsZC5uYW1lXHJcbiAgICAgIHRoaXMuc29ydE9yZGVyWzBdLnNvcnRGaWVsZCA9IGZpZWxkLnNvcnRGaWVsZFxyXG4gICAgfSxcclxuICAgIGNsZWFyU29ydE9yZGVyICgpIHtcclxuICAgICAgdGhpcy5zb3J0T3JkZXIucHVzaCh7XHJcbiAgICAgICAgZmllbGQ6ICcnLFxyXG4gICAgICAgIHNvcnRGaWVsZDogJycsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnYXNjJ1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzb3J0Q2xhc3MgKGZpZWxkKSB7XHJcbiAgICAgIGxldCBjbHMgPSAnJ1xyXG4gICAgICBsZXQgaSA9IHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKVxyXG5cclxuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgY2xzID0gKHRoaXMuc29ydE9yZGVyW2ldLmRpcmVjdGlvbiA9PSAnYXNjJykgPyB0aGlzLmNzcy5hc2NlbmRpbmdDbGFzcyA6IHRoaXMuY3NzLmRlc2NlbmRpbmdDbGFzc1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xzXHJcbiAgICB9LFxyXG4gICAgc29ydEljb24gKGZpZWxkKSB7XHJcbiAgICAgIGxldCBjbHMgPSB0aGlzLmNzcy5zb3J0YWJsZUljb25cclxuICAgICAgbGV0IGkgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcclxuXHJcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGNscyA9ICh0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT0gJ2FzYycpID8gdGhpcy5jc3MuYXNjZW5kaW5nSWNvbiA6IHRoaXMuY3NzLmRlc2NlbmRpbmdJY29uXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbHM7XHJcbiAgICB9LFxyXG4gICAgc29ydEljb25PcGFjaXR5IChmaWVsZCkge1xyXG4gICAgICAvKlxyXG4gICAgICAgKiBmaWVsZHMgd2l0aCBzdHJvbmdlciBwcmVjZWRlbmNlIGhhdmUgZGFya2VyIGNvbG9yXHJcbiAgICAgICAqXHJcbiAgICAgICAqIGlmIHRoZXJlIGFyZSBmZXcgZmllbGRzLCB3ZSBnbyBkb3duIGJ5IDAuM1xyXG4gICAgICAgKiBleC4gMiBmaWVsZHMgYXJlIHNlbGVjdGVkOiAxLjAsIDAuN1xyXG4gICAgICAgKlxyXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgbW9yZSB3ZSBnbyBkb3duIGV2ZW5seSBvbiB0aGUgZ2l2ZW4gc3BlY3RydW1cclxuICAgICAgICogZXguIDYgZmllbGRzIGFyZSBzZWxlY3RlZDogMS4wLCAwLjg2LCAwLjcyLCAwLjU4LCAwLjQ0LCAwLjNcclxuICAgICAgICovXHJcbiAgICAgIGxldCBtYXggPSAxLjAsXHJcbiAgICAgICAgICBtaW4gPSAwLjMsXHJcbiAgICAgICAgICBzdGVwID0gMC4zXHJcblxyXG4gICAgICBsZXQgY291bnQgPSB0aGlzLnNvcnRPcmRlci5sZW5ndGg7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXHJcblxyXG5cclxuICAgICAgaWYobWF4IC0gY291bnQgKiBzdGVwIDwgbWluKSB7XHJcbiAgICAgICAgc3RlcCA9IChtYXggLSBtaW4pIC8gKGNvdW50LTEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBvcGFjaXR5ID0gbWF4IC0gY3VycmVudCAqIHN0ZXBcclxuXHJcbiAgICAgIHJldHVybiBvcGFjaXR5XHJcbiAgICB9LFxyXG4gICAgaGFzQ2FsbGJhY2sgKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uY2FsbGJhY2sgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjYWxsQ2FsbGJhY2sgKGZpZWxkLCBpdGVtKSB7XHJcbiAgICAgIGlmICggISB0aGlzLmhhc0NhbGxiYWNrKGZpZWxkKSkgcmV0dXJuXHJcblxyXG4gICAgICBpZih0eXBlb2YoZmllbGQuY2FsbGJhY2spID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgIHJldHVybiBmaWVsZC5jYWxsYmFjayh0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgYXJncyA9IGZpZWxkLmNhbGxiYWNrLnNwbGl0KCd8JylcclxuICAgICAgbGV0IGZ1bmMgPSBhcmdzLnNoaWZ0KClcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy4kcGFyZW50W2Z1bmNdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lKVxyXG5cclxuICAgICAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICAgID8gdGhpcy4kcGFyZW50W2Z1bmNdLmFwcGx5KHRoaXMuJHBhcmVudCwgW3ZhbHVlXS5jb25jYXQoYXJncykpXHJcbiAgICAgICAgICA6IHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgdmFsdWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9LFxyXG4gICAgZ2V0T2JqZWN0VmFsdWUgKG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICh0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAndW5kZWZpbmVkJykgPyBudWxsIDogZGVmYXVsdFZhbHVlXHJcblxyXG4gICAgICBsZXQgb2JqID0gb2JqZWN0XHJcbiAgICAgIGlmIChwYXRoLnRyaW0oKSAhPSAnJykge1xyXG4gICAgICAgIGxldCBrZXlzID0gcGF0aC5zcGxpdCgnLicpXHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnICYmIG9ialtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IG9ialtrZXldXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb2JqXHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ2hlY2tib3ggKGRhdGFJdGVtLCBmaWVsZE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGxldCBpc0NoZWNrZWQgPSBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuXHJcbiAgICAgIGlmIChkYXRhSXRlbVtpZENvbHVtbl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMud2FybignX19jaGVja2JveCBmaWVsZDogVGhlIFwiJyt0aGlzLnRyYWNrQnkrJ1wiIGZpZWxkIGRvZXMgbm90IGV4aXN0ISBNYWtlIHN1cmUgdGhlIGZpZWxkIHlvdSBzcGVjaWZ5IGluIFwidHJhY2stYnlcIiBwcm9wIGRvZXMgZXhpc3QuJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGtleSA9IGRhdGFJdGVtW2lkQ29sdW1uXVxyXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJZChrZXkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51bnNlbGVjdElkKGtleSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCd2dWV0YWJsZTpjaGVja2JveC10b2dnbGVkJywgaXNDaGVja2VkLCBkYXRhSXRlbSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3RJZCAoa2V5KSB7XHJcbiAgICAgIGlmICggISB0aGlzLmlzU2VsZWN0ZWRSb3coa2V5KSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUby5wdXNoKGtleSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVuc2VsZWN0SWQgKGtleSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkVG8gPSB0aGlzLnNlbGVjdGVkVG8uZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0ga2V5XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaXNTZWxlY3RlZFJvdyAoa2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVG8uaW5kZXhPZihrZXkpID49IDBcclxuICAgIH0sXHJcbiAgICByb3dTZWxlY3RlZCAoZGF0YUl0ZW0sIGZpZWxkTmFtZSl7XHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG4gICAgICBsZXQga2V5ID0gZGF0YUl0ZW1baWRDb2x1bW5dXHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkUm93KGtleSlcclxuICAgIH0sXHJcbiAgICBjaGVja0NoZWNrYm94ZXNTdGF0ZSAoZmllbGROYW1lKSB7XHJcbiAgICAgIGlmICghIHRoaXMudGFibGVEYXRhKSByZXR1cm5cclxuXHJcbiAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcclxuICAgICAgbGV0IHNlbGVjdG9yID0gJ3RoLnZ1ZXRhYmxlLXRoLWNoZWNrYm94LScgKyBpZENvbHVtbiArICcgaW5wdXRbdHlwZT1jaGVja2JveF0nXHJcbiAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxyXG5cclxuICAgICAgLy9maXhlZDpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsIHJldHVybiB0aGUgdHlwZW9mIG5vZGVMaXN0IG5vdCBhcnJheVxyXG4gICAgICBpZiAoZWxzLmZvckVhY2g9PT11bmRlZmluZWQpXHJcbiAgICAgICAgZWxzLmZvckVhY2g9ZnVuY3Rpb24oY2Ipe1xyXG4gICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVscywgY2IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIC8vIGNvdW50IGhvdyBtYW55IGNoZWNrYm94IHJvdyBpbiB0aGUgY3VycmVudCBwYWdlIGhhcyBiZWVuIGNoZWNrZWRcclxuICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy50YWJsZURhdGEuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5zZWxlY3RlZFRvLmluZGV4T2YoaXRlbVtpZENvbHVtbl0pID49IDBcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIGNvdW50ID09IDAsIGNsZWFyIHRoZSBjaGVja2JveFxyXG4gICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgICAvLyBjb3VudCA+IDAgYW5kIGNvdW50IDwgcGVyUGFnZSwgc2V0IGNoZWNrYm94IHN0YXRlIHRvICdpbmRldGVybWluYXRlJ1xyXG4gICAgICBlbHNlIGlmIChzZWxlY3RlZC5sZW5ndGggPCB0aGlzLnBlclBhZ2UpIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgLy8gY291bnQgPT0gcGVyUGFnZSwgc2V0IGNoZWNrYm94IHN0YXRlIHRvICdjaGVja2VkJ1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQWxsQ2hlY2tib3hlcyAoZmllbGROYW1lLCBldmVudCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcclxuICAgICAgbGV0IGlzQ2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxyXG5cclxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YUl0ZW0pIHtcclxuICAgICAgICAgIHNlbGYuc2VsZWN0SWQoZGF0YUl0ZW1baWRDb2x1bW5dKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhSXRlbSkge1xyXG4gICAgICAgICAgc2VsZi51bnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3Z1ZXRhYmxlOmNoZWNrYm94LXRvZ2dsZWQtYWxsJywgaXNDaGVja2VkKVxyXG4gICAgfSxcclxuICAgIGdvdG9QcmV2aW91c1BhZ2UgKCkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS1cclxuICAgICAgICB0aGlzLmxvYWREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdvdG9OZXh0UGFnZSAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSsrXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnb3RvUGFnZSAocGFnZSkge1xyXG4gICAgICBpZiAocGFnZSAhPSB0aGlzLmN1cnJlbnRQYWdlICYmIChwYWdlID4gMCAmJiBwYWdlIDw9IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSkpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNWaXNpYmxlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlRGV0YWlsUm93cy5pbmRleE9mKCByb3dJZCApID49IDBcclxuICAgIH0sXHJcbiAgICBzaG93RGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3MucHVzaChyb3dJZClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGVEZXRhaWxSb3cgKHJvd0lkKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnNwbGljZShcclxuICAgICAgICAgIHRoaXMudmlzaWJsZURldGFpbFJvd3MuaW5kZXhPZihyb3dJZCksXHJcbiAgICAgICAgICAxXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRGV0YWlsUm93IChyb3dJZCkge1xyXG4gICAgICBpZiAodGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGV0YWlsUm93KHJvd0lkKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbFJvdyhyb3dJZClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dGaWVsZCAoaW5kZXgpIHtcclxuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMudGFibGVGaWVsZHMubGVuZ3RoKSByZXR1cm5cclxuXHJcbiAgICAgIHRoaXMudGFibGVGaWVsZHNbaW5kZXhdLnZpc2libGUgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgaGlkZUZpZWxkIChpbmRleCkge1xyXG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy50YWJsZUZpZWxkcy5sZW5ndGgpIHJldHVyblxyXG5cclxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlRmllbGQgKGluZGV4KSB7XHJcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXHJcblxyXG4gICAgICB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlID0gISB0aGlzLnRhYmxlRmllbGRzW2luZGV4XS52aXNpYmxlXHJcbiAgICB9LFxyXG4gICAgcmVuZGVySWNvblRhZyAoY2xhc3Nlcywgb3B0aW9ucyA9ICcnKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YodGhpcy5jc3MucmVuZGVySWNvbikgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgPyBgPGkgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiICR7b3B0aW9uc30+PC9pPmBcclxuICAgICAgICA6IHRoaXMuY3NzLnJlbmRlckljb24oY2xhc3Nlcywgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBtYWtlUGFnaW5hdGlvbiAodG90YWwgPSBudWxsLCBwZXJQYWdlID0gbnVsbCwgY3VycmVudFBhZ2UgPSBudWxsKSB7XHJcbiAgICAgIGxldCBwYWdpbmF0aW9uID0ge31cclxuICAgICAgdG90YWwgPSB0b3RhbCA9PT0gbnVsbCA/IHRoaXMuZGF0YVRvdGFsIDogdG90YWxcclxuICAgICAgcGVyUGFnZSA9IHBlclBhZ2UgPT09IG51bGwgPyB0aGlzLnBlclBhZ2UgOiBwZXJQYWdlXHJcbiAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPT09IG51bGwgPyB0aGlzLmN1cnJlbnRQYWdlIDogY3VycmVudFBhZ2VcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3RvdGFsJzogdG90YWwsXHJcbiAgICAgICAgJ3Blcl9wYWdlJzogcGVyUGFnZSxcclxuICAgICAgICAnY3VycmVudF9wYWdlJzogY3VycmVudFBhZ2UsXHJcbiAgICAgICAgJ2xhc3RfcGFnZSc6IE1hdGguY2VpbCh0b3RhbCAvIHBlclBhZ2UpIHx8IDAsXHJcbiAgICAgICAgJ25leHRfcGFnZV91cmwnOiAnJyxcclxuICAgICAgICAncHJldl9wYWdlX3VybCc6ICcnLFxyXG4gICAgICAgICdmcm9tJzogKGN1cnJlbnRQYWdlIC0xKSAqIHBlclBhZ2UgKzEsXHJcbiAgICAgICAgJ3RvJzogTWF0aC5taW4oY3VycmVudFBhZ2UgKiBwZXJQYWdlLCB0b3RhbClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG5vcm1hbGl6ZVNvcnRPcmRlciAoKSB7XHJcbiAgICAgIHRoaXMuc29ydE9yZGVyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uc29ydEZpZWxkID0gaXRlbS5zb3J0RmllbGQgfHwgaXRlbS5maWVsZFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGNhbGxEYXRhTWFuYWdlciAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFNYW5hZ2VyID09PSBudWxsICYmIHRoaXMuZGF0YSA9PT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgbW9kZTogYXJyYXknKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmRhdGEpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxpemVTb3J0T3JkZXIoKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLmRhdGFNYW5hZ2VyKHRoaXMuc29ydE9yZGVyLCB0aGlzLm1ha2VQYWdpbmF0aW9uKCkpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Sb3dDbGFzcyAoZGF0YUl0ZW0sIGluZGV4KSB7XHJcbiAgICAgIGlmICh0aGlzLnJvd0NsYXNzQ2FsbGJhY2sgIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy53YXJuKCdcInJvdy1jbGFzcy1jYWxsYmFja1wiIHByb3AgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcInJvdy1jbGFzc1wiIHByb3AgaW5zdGVhZC4nKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mKHRoaXMucm93Q2xhc3MpID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm93Q2xhc3MoZGF0YUl0ZW0sIGluZGV4KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5yb3dDbGFzc1xyXG4gICAgfSxcclxuICAgIG9uUm93Q2hhbmdlZCAoZGF0YUl0ZW0pIHtcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ3Jvdy1jaGFuZ2VkJywgZGF0YUl0ZW0pXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG4gICAgb25Sb3dDbGlja2VkIChkYXRhSXRlbSwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ3Jvdy1jbGlja2VkJywgZGF0YUl0ZW0sIGV2ZW50KVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSxcclxuICAgIG9uUm93RG91YmxlQ2xpY2tlZCAoZGF0YUl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkRldGFpbFJvd0NsaWNrIChkYXRhSXRlbSwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2RldGFpbC1yb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcclxuICAgIH0sXHJcbiAgICBvbkNlbGxDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLWNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxyXG4gICAgfSxcclxuICAgIG9uQ2VsbERvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgb25DZWxsUmlnaHRDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLXJpZ2h0Y2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgICAqIEFQSSBmb3IgZXh0ZXJuYWxzXHJcbiAgICAgKi9cclxuICAgIGNoYW5nZVBhZ2UgKHBhZ2UpIHtcclxuICAgICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xyXG4gICAgICAgIHRoaXMuZ290b1ByZXZpb3VzUGFnZSgpXHJcbiAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgdGhpcy5nb3RvTmV4dFBhZ2UoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ290b1BhZ2UocGFnZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbG9hZCAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcclxuICAgIH0sXHJcbiAgICByZWZyZXNoICgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcclxuICAgICAgcmV0dXJuIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfSxcclxuICAgIHJlc2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMudGFibGVEYXRhID0gbnVsbFxyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IG51bGxcclxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2RhdGEtcmVzZXQnKVxyXG4gICAgfVxyXG4gIH0sIC8vIGVuZDogbWV0aG9kc1xyXG4gIHdhdGNoOiB7XHJcbiAgICAnbXVsdGlTb3J0JyAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKG5ld1ZhbCA9PT0gZmFsc2UgJiYgdGhpcy5zb3J0T3JkZXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnYXBpVXJsJyAgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIGlmKHRoaXMucmVhY3RpdmVBcGlVcmwgJiYgbmV3VmFsICE9PSBvbGRWYWwpXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgIH0sXHJcbiAgICAnZGF0YScgKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YShuZXdWYWwpXHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgW3YtY2xvYWtdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC52dWV0YWJsZSB0aC5zb3J0YWJsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzIxODVkMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWJvZHktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6YXV0bztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWhlYWQtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1hY3Rpb25zIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudnVldGFibGUtcGFnaW5hdGlvbi1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuICAudnVldGFibGUtZW1wdHktcmVzdWx0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLWNsaXAtdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnZ1ZXRhYmxlLXNlbWFudGljLW5vLXRvcCB7XHJcbiAgICBib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudnVldGFibGUtZml4ZWQtbGF5b3V0IHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgfVxyXG4gIC52dWV0YWJsZS1ndXR0ZXItY29sIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICAhaW1wb3J0YW50O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtc2hvdz1cInRhYmxlUGFnaW5hdGlvbiAmJiB0YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlID4gMVwiIDpjbGFzcz1cImNzcy53cmFwcGVyQ2xhc3NcIj5cclxuICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKDEpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkZpcnN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5maXJzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMuZmlyc3RdXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIHYtZWxzZT4mbGFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UoJ3ByZXYnKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25GaXJzdFBhZ2UgPyBjc3MuZGlzYWJsZWRDbGFzcyA6ICcnXVwiPlxyXG4gICAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubmV4dCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMucHJldl1cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gdi1lbHNlPiZuYnNwOyZsc2FxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJub3RFbm91Z2hQYWdlc1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJuIGluIHRvdGFsUGFnZVwiPlxyXG4gICAgICAgIDxhIEBjbGljaz1cImxvYWRQYWdlKG4pXCJcclxuICAgICAgICAgIDpjbGFzcz1cIltjc3MucGFnZUNsYXNzLCBpc0N1cnJlbnRQYWdlKG4pID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIm5cIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwibiBpbiB3aW5kb3dTaXplXCI+XHJcbiAgICAgICAgPGEgQGNsaWNrPVwibG9hZFBhZ2Uod2luZG93U3RhcnQrbi0xKVwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbY3NzLnBhZ2VDbGFzcywgaXNDdXJyZW50UGFnZSh3aW5kb3dTdGFydCtuLTEpID8gY3NzLmFjdGl2ZUNsYXNzIDogJyddXCJcclxuICAgICAgICAgIHYtaHRtbD1cIndpbmRvd1N0YXJ0K24tMVwiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8YSBAY2xpY2s9XCJsb2FkUGFnZSgnbmV4dCcpXCJcclxuICAgICAgOmNsYXNzPVwiWydidG4tbmF2JywgY3NzLmxpbmtDbGFzcywgaXNPbkxhc3RQYWdlID8gY3NzLmRpc2FibGVkQ2xhc3MgOiAnJ11cIj5cclxuICAgICAgPGkgdi1pZj1cImNzcy5pY29ucy5uZXh0ICE9ICcnXCIgOmNsYXNzPVwiW2Nzcy5pY29ucy5uZXh0XVwiPjwvaT5cclxuICAgICAgPHNwYW4gdi1lbHNlPiZyc2FxdW87Jm5ic3A7PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgQGNsaWNrPVwibG9hZFBhZ2UodG90YWxQYWdlKVwiXHJcbiAgICAgIDpjbGFzcz1cIlsnYnRuLW5hdicsIGNzcy5saW5rQ2xhc3MsIGlzT25MYXN0UGFnZSA/IGNzcy5kaXNhYmxlZENsYXNzIDogJyddXCI+XHJcbiAgICAgIDxpIHYtaWY9XCJjc3MuaWNvbnMubGFzdCAhPSAnJ1wiIDpjbGFzcz1cIltjc3MuaWNvbnMubGFzdF1cIj48L2k+XHJcbiAgICAgIDxzcGFuIHYtZWxzZT4mcmFxdW87PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFBhZ2luYXRpb25NaXhpbiBmcm9tICcuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaXhpbnM6IFtQYWdpbmF0aW9uTWl4aW5dLFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIlsndnVldGFibGUtcGFnaW5hdGlvbi1pbmZvJywgY3NzLmluZm9DbGFzc11cIlxyXG4gICAgdi1odG1sPVwicGFnaW5hdGlvbkluZm9cIj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBQYWdpbmF0aW9uSW5mb01peGluIGZyb20gJy4vVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaXhpbnM6IFtQYWdpbmF0aW9uSW5mb01peGluXSxcclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlIiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBjc3M6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpbmZvQ2xhc3M6ICdsZWZ0IGZsb2F0ZWQgbGVmdCBhbGlnbmVkIHNpeCB3aWRlIGNvbHVtbidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbmZvVGVtcGxhdGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0KCkge1xyXG4gICAgICAgIHJldHVybiBcIkRpc3BsYXlpbmcge2Zyb219IHRvIHt0b30gb2Yge3RvdGFsfSBpdGVtc1wiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBub0RhdGFUZW1wbGF0ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdObyByZWxldmFudCBkYXRhJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0YWJsZVBhZ2luYXRpb246IG51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwYWdpbmF0aW9uSW5mbyAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhYmxlUGFnaW5hdGlvbiA9PSBudWxsIHx8IHRoaXMudGFibGVQYWdpbmF0aW9uLnRvdGFsID09IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub0RhdGFUZW1wbGF0ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5pbmZvVGVtcGxhdGVcclxuICAgICAgICAucmVwbGFjZSgne2Zyb219JywgdGhpcy50YWJsZVBhZ2luYXRpb24uZnJvbSB8fCAwKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7dG99JywgdGhpcy50YWJsZVBhZ2luYXRpb24udG8gfHwgMClcclxuICAgICAgICAucmVwbGFjZSgne3RvdGFsfScsIHRoaXMudGFibGVQYWdpbmF0aW9uLnRvdGFsIHx8IDApXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0UGFnaW5hdGlvbkRhdGEgKHRhYmxlUGFnaW5hdGlvbikge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRhYmxlUGFnaW5hdGlvblxyXG4gICAgfSxcclxuICAgIHJlc2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvTWl4aW4udnVlIiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBjc3M6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0ICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgd3JhcHBlckNsYXNzOiAndWkgcmlnaHQgZmxvYXRlZCBwYWdpbmF0aW9uIG1lbnUnLFxyXG4gICAgICAgICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUgbGFyZ2UnLFxyXG4gICAgICAgICAgZGlzYWJsZWRDbGFzczogJ2Rpc2FibGVkJyxcclxuICAgICAgICAgIHBhZ2VDbGFzczogJ2l0ZW0nLFxyXG4gICAgICAgICAgbGlua0NsYXNzOiAnaWNvbiBpdGVtJyxcclxuICAgICAgICAgIHBhZ2luYXRpb25DbGFzczogJ3VpIGJvdHRvbSBhdHRhY2hlZCBzZWdtZW50IGdyaWQnLFxyXG4gICAgICAgICAgcGFnaW5hdGlvbkluZm9DbGFzczogJ2xlZnQgZmxvYXRlZCBsZWZ0IGFsaWduZWQgc2l4IHdpZGUgY29sdW1uJyxcclxuICAgICAgICAgIGRyb3Bkb3duQ2xhc3M6ICd1aSBzZWFyY2ggZHJvcGRvd24nLFxyXG4gICAgICAgICAgaWNvbnM6IHtcclxuICAgICAgICAgICAgZmlyc3Q6ICdhbmdsZSBkb3VibGUgbGVmdCBpY29uJyxcclxuICAgICAgICAgICAgcHJldjogJ2xlZnQgY2hldnJvbiBpY29uJyxcclxuICAgICAgICAgICAgbmV4dDogJ3JpZ2h0IGNoZXZyb24gaWNvbicsXHJcbiAgICAgICAgICAgIGxhc3Q6ICdhbmdsZSBkb3VibGUgcmlnaHQgaWNvbicsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25FYWNoU2lkZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQgKCkge1xyXG4gICAgICAgIHJldHVybiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV2ZW50UHJlZml4OiAndnVldGFibGUtcGFnaW5hdGlvbjonLFxyXG4gICAgICB0YWJsZVBhZ2luYXRpb246IG51bGxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICB0b3RhbFBhZ2UgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGxcclxuICAgICAgICA/IDBcclxuICAgICAgICA6IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZVxyXG4gICAgfSxcclxuICAgIGlzT25GaXJzdFBhZ2UgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGxcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPT09IDFcclxuICAgIH0sXHJcbiAgICBpc09uTGFzdFBhZ2UgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGxcclxuICAgICAgICA/IGZhbHNlXHJcbiAgICAgICAgOiB0aGlzLnRhYmxlUGFnaW5hdGlvbi5jdXJyZW50X3BhZ2UgPT09IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZVxyXG4gICAgfSxcclxuICAgIG5vdEVub3VnaFBhZ2VzICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG90YWxQYWdlIDwgKHRoaXMub25FYWNoU2lkZSAqIDIpICsgNFxyXG4gICAgfSxcclxuICAgIHdpbmRvd1NpemUgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vbkVhY2hTaWRlICogMiArMTtcclxuICAgIH0sXHJcbiAgICB3aW5kb3dTdGFydCAoKSB7XHJcbiAgICAgIGlmICghdGhpcy50YWJsZVBhZ2luYXRpb24gfHwgdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlIDw9IHRoaXMub25FYWNoU2lkZSkge1xyXG4gICAgICAgIHJldHVybiAxXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlID49ICh0aGlzLnRvdGFsUGFnZSAtIHRoaXMub25FYWNoU2lkZSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3RhbFBhZ2UgLSB0aGlzLm9uRWFjaFNpZGUqMlxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlIC0gdGhpcy5vbkVhY2hTaWRlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbG9hZFBhZ2UgKHBhZ2UpIHtcclxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4KydjaGFuZ2UtcGFnZScsIHBhZ2UpXHJcbiAgICB9LFxyXG4gICAgaXNDdXJyZW50UGFnZSAocGFnZSkge1xyXG4gICAgICByZXR1cm4gcGFnZSA9PT0gdGhpcy50YWJsZVBhZ2luYXRpb24uY3VycmVudF9wYWdlXHJcbiAgICB9LFxyXG4gICAgc2V0UGFnaW5hdGlvbkRhdGEgKHRhYmxlUGFnaW5hdGlvbikge1xyXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRhYmxlUGFnaW5hdGlvblxyXG4gICAgfSxcclxuICAgIHJlc2V0RGF0YSAoKSB7XHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmF0aW9uID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8c3Bhbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICB2LW9uOmNsaWNrPVwiY2xpY2tIYW5kbGVyKGRlbGV0ZVVybClcIiBcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi14cyByZWRcIlxuICAgICAgICAgICAgdi1zaG93PVwic2hvd0J1dHRvblwiXG4gICAgICAgICAgICB2LWh0bWw9XCJkZWxldGVMYWJlbFwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBWdWVTd2VldEFsZXJ0IGZyb20gJ3Z1ZS1zd2VldGFsZXJ0JztcblZ1ZS51c2UoVnVlU3dlZXRBbGVydCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydwcm9wc1Blcm1pc3Npb24nLCdwcm9wc0RlbGV0ZVVybCcsJ3Byb3BzTGFiZWwnLCdwcm9wc0FsZXJ0TGFiZWwnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd0J1dHRvbjogdGhpcy5wcm9wc1Blcm1pc3Npb24sXG4gICAgICAgICAgICBkZWxldGVVcmw6IHRoaXMucHJvcHNEZWxldGVVcmwsXG4gICAgICAgICAgICBkZWxldGVMYWJlbDogdGhpcy5wcm9wc0xhYmVsLFxuICAgICAgICAgICAgYWxlcnRMYWJlbDogdGhpcy5wcm9wc0FsZXJ0TGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGNsaWNrSGFuZGxlcih1cmwpIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xuICAgICAgICAgICAgYmFzZS4kc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGJhc2UuYWxlcnRMYWJlbC50aXRsZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBiYXNlLmFsZXJ0TGFiZWwubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogYmFzZS5hbGVydExhYmVsLmJ1dHRvblllcyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBiYXNlLmFsZXJ0TGFiZWwuYnV0dG9uTm9cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHVybCwge30pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3dOb3RpZmljYXRpb24oJ2FsZXJ0LScrcmVzcG9uc2UuZGF0YS5mbGFzaCwgcmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuJHJvb3QuJGVtaXQoJ3JlZnJlc2gtbGlzdC1ldmVudCcsMSk7IC8vIE9wZW4gQ3JlYXRlIHBhbmVsIGlmIGRhdGEgaXMgYXZhaWxibGUgaW4gRWRpdFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnLW5vdGlmeScse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlc3BvbnNlLmRhdGEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2ctbm90aWZ5Jyx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZXNwb25zZS5kYXRhLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZXJyb3JzLnJlc3BvbnNlLnN0YXR1cyA9PSA0MjIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnLW5vdGlmeScseyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IGVycm9ycy5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzdWx0KT0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXN1bHQgPT0gJ2NhbmNlbCcpe1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdnLW5vdGlmeScseyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogZXJyb3JzLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBwcm9wc0RlbGV0ZVVybDogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVXJsID0gbmV3VmFsO1xuICAgICAgICB9LCAgXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjE4cHg7XCIgIHYtc2hvdz1cInR5cGUgPT0gJ2RhbmdlcidcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB2LW9uOmNsaWNrLnByZXZlbnQuc3RvcD1cInR5cGU9bnVsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzIGZhZGUgaW4gYWxlcnQtZGlzbWlzc2libGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MThweDtcIiAgdi1zaG93PVwidHlwZSA9PSAnc3VjY2VzcydcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB2LW9uOmNsaWNrLnByZXZlbnQuc3RvcD1cInR5cGU9bnVsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nIGZhZGUgaW4gYWxlcnQtZGlzbWlzc2libGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MThweDtcIiAgdi1zaG93PVwidHlwZSA9PSAnd2FybmluZydcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB2LW9uOmNsaWNrLnByZXZlbnQuc3RvcD1cInR5cGU9bnVsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1pbmZvIGZhZGUgaW4gYWxlcnQtZGlzbWlzc2libGVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MThweDtcIiAgdi1zaG93PVwidHlwZSA9PSAnaW5mbydcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB2LW9uOmNsaWNrLnByZXZlbnQuc3RvcD1cInR5cGU9bnVsbFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAge3ttZXNzYWdlfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbXSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGxldCBiYXNlID0gdGhpcztcbiAgICAgICAgYmFzZS4kcm9vdC4kb24oJ2ctbm90aWZ5JyxmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBiYXNlLnNob3dOb3RpZmljYXRpb24odmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgbWVzc2FnZTogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHZhbHVlLnR5cGU7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1zaG93PVwibGlzdFBhbmVsU3RhdHVzXCIgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLWRlbW8gYW5pbWF0ZWQgZmFkZUluXCIgdi1zaG93PVwibFNlYXJjaFBhbmVsU3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tZGVtb19fcHJldmlldyBnLXNlYXJjaC1wYW5lbFwiPiA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx2dWV0YWJsZSByZWY9XCJ2dWV0YWJsZVwiXG4gICAgICAgICAgICAgICAgOmFwaS11cmw9XCJ1cmxzLmluZGV4XCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6Y3NzPVwiY3NzXCIgIFxuICAgICAgICAgICAgICAgIDphcHBlbmQtcGFyYW1zPVwiZXh0ZXJuYWxQYXJhbXNcIiBcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6Y2VsbC1jbGlja2VkPVwib25DZWxsQ2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOnBhZ2luYXRpb24tZGF0YT1cIm9uUGFnaW5hdGlvbkRhdGFcIlxuICAgICAgICAgICAgICAgIEB2dWV0YWJsZTpsb2FkaW5nPVwic2V0TG9hZGVyXCJcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6bG9hZGVkPVwic2V0TG9hZGVyXCJcbiAgICAgICAgICAgICAgICBAdnVldGFibGU6bG9hZC1lcnJvcj1cImhhbmRsZUxvYWRFcnJvclwiXG4gICAgICAgICAgICAgICAgQHZ1ZXRhYmxlOmxvYWQtc3VjY2Vzcz1cInNob3dKb2luQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlIGctdGFibGVcIlxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24tcGF0aD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwidXJscy5zdGFydF9jbGFzcy5yZXBsYWNlQXQodXJscy5zdGFydF9jbGFzcy5sZW5ndGgtMSxwcm9wcy5yb3dEYXRhLnV1aWQpXCIgOmNsYXNzPVwiWydnLWpvaW4tYnV0dG9uJywnYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbScscHJvcHMucm93RGF0YS51dWlkXVwiIHYtc2hvdz1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0cmFucy5jb21tb24uam9pbn19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tc20gZy1idG5cIiB2LW9uOmNsaWNrPVwib3Blbk1vZGFsKHByb3BzLnJvd0RhdGEubm90ZXMpO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zLmNvbW1vbi5ub3RlcyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC92dWV0YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBnLXJlc3BvbnNpdmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInYtbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGVyIFBhZ2U6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIG0taW5wdXQgbS1pbnB1dC0tc29saWQgZy1zZWxlY3QtY29udHJvbFwiIHYtbW9kZWw9XCJlbnRpdHkucGVyUGFnZVwiIEBjaGFuZ2U9XCJzaG93TW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+MjA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE1MFwiPjE1MDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzAwXCI+MzAwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1MDBcIj41MDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVldGFibGUtcGFnaW5hdGlvbi1pbmZvIHJlZj1cInBhZ2luYXRpb25JbmZvXCIgaW5mby10ZW1wbGF0ZT1cIlNob3dpbmcge3RvfSBGcm9tIHt0b3RhbH0gUmVjb3Jkcy5cIiBpbmZvLWNsYXNzPVwicGFnaW5hdGlvbi1pbmZvXCI+PC92dWV0YWJsZS1wYWdpbmF0aW9uLWluZm8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidi1taWRkbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnLXNtLXB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZXRhYmxlLXBhZ2luYXRpb24gcmVmPVwicGFnaW5hdGlvblwiIDpjc3M9XCJjc3MucGFnaW5hdGlvblwiIEB2dWV0YWJsZS1wYWdpbmF0aW9uOmNoYW5nZS1wYWdlPVwib25DaGFuZ2VQYWdlXCIgPjwvdnVldGFibGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFZ1ZXRhYmxlIGZyb20gJ3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUnO1xuaW1wb3J0IFZ1ZXRhYmxlUGFnaW5hdGlvbiBmcm9tICd2dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbic7XG5pbXBvcnQgVnVldGFibGVQYWdpbmF0aW9uSW5mbyBmcm9tICd2dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8nO1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi9jb21tb24vRGVsZXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ3Byb3BzVHJhbnMnLCdwcm9wc1BhbmVsJywgJ3Byb3BzVXJscycsICdwcm9wc1Blcm1pc3Npb25zJ10sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBWdWV0YWJsZSxcbiAgICAgICAgVnVldGFibGVQYWdpbmF0aW9uLFxuICAgICAgICBWdWV0YWJsZVBhZ2luYXRpb25JbmZvLFxuICAgICAgICBEZWxldGVcbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkgeyB0aGlzLnBhbmVsU3RhdHVzKHRoaXMucHJvcHNQYW5lbCk7IH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgbGV0IGJhc2UgPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbFNlYXJjaFBhbmVsU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIHVybHM6IHRoaXMucHJvcHNVcmxzLFxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRoaXMucHJvcHNQZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIGxpc3RQYW5lbFN0YXR1czogYmFzZS5wcm9wc1BhbmVsLFxuICAgICAgICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zOiBiYXNlLnByb3BzVHJhbnMsXG4gICAgICAgICAgICBlbnRpdHk6eyBwZXJQYWdlOiAxMCwgam9pbkJ1dHRvbnM6W10gfSxcbiAgICAgICAgICAgIGV4dGVybmFsUGFyYW1zOnt9LFxuICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnX19zZXF1ZW5jZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnNyX25vLFxuICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICdpZCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTBweCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCkgPT4gYmFzZS50cmFucy5jb2x1bW5faGVhZGluZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzb3J0RmllbGQ6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ19zdHVkZW50cycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnN0dWRlbnRzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ3N0dWRlbnRGb3JtYXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhcnRfdGltZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnN0YXJ0X3RpbWUsXG4gICAgICAgICAgICAgICAgICAgIHNvcnRGaWVsZDogJ3N0YXJ0X3RpbWUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZXN0aW1hdGVkX3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogKCkgPT4gYmFzZS50cmFucy5jb2x1bW5faGVhZGluZy5lc3RpbWF0ZWRfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydEZpZWxkOiAnZXN0aW1hdGVkX3RpbWUnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogJ2hvdXJGb3JtYXQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnX3N0YXR1cycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICdsYWJlbFN0YXR1cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdfX3Nsb3Q6YWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKSA9PiBiYXNlLnRyYW5zLmNvbHVtbl9oZWFkaW5nLmFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ2xhc3M6J3RleHQtY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YUNsYXNzOid0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIGFzY2VuZGluZ0ljb246XCJmYSBmYS1hcnJvdy11cFwiLFxuICAgICAgICAgICAgICAgIGRlc2NlbmRpbmdJY29uOlwiZmEgZmEtYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRDbGFzczogJ2Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNsYXNzOiAncGFnZScsXG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdDogJ2ZhIGZhLWFuZ2xlLWRvdWJsZS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXY6ICdmYSBmYS1hbmdsZS1sZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1hbmdsZS1yaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiAnZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIGxldCBiYXNlID0gdGhpcztcbiAgICAgICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHBhcmVudDogXCIjZy1wcm9ncmVzc1wiIH0pO1xuICAgICAgICBiYXNlLiRyb290LiRvbigncmVmcmVzaC1saXN0LWV2ZW50JyxmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBiYXNlLnNob3dNb3JlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNzZWFyY2gtYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgYmFzZS5zZWFyY2hQYW5lbFN0YXR1cygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcGFuZWxTdGF0dXM6IGZ1bmN0aW9uKHN0YXRlKXt0aGlzLmxpc3RQYW5lbFN0YXR1cyA9IHN0YXRlfSxcbiAgICAgICAgc2VhcmNoUGFuZWxTdGF0dXM6IGZ1bmN0aW9uKHN0YXRlKXtcbiAgICAgICAgICAgIHRoaXMubFNlYXJjaFBhbmVsU3RhdHVzID0gIXRoaXMubFNlYXJjaFBhbmVsU3RhdHVzXG4gICAgICAgICAgICBpZih0aGlzLmxTZWFyY2hQYW5lbFN0YXR1cyl7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1idXR0b24nKS5wYXJlbnQoKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCcjZjRmNWY4Jyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcjc2VhcmNoLWJ1dHRvbicpLnBhcmVudCgpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsJ2luaGVyaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0RXZlbnQoaWQpIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpOyAgIC8vIHdpbGwgc3RvcCBpbiBjcmVhdGVlZGl0IGNvbXBvbmVudCBcbiAgICAgICAgICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2VkaXQtZXZlbnQnLCBpZCk7IC8vIGxpc3RlbiBvbiBDcmVhdGVFZGl0IENvbXBvbmVudCB2dWUganNcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TG9hZGVyKCl7XG4gICAgICAgICAgICBpZih0aGlzLmxvYWRpbmcpXG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmc7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmxvYWRpbmcpXG4gICAgICAgICAgICAgICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DZWxsQ2xpY2tlZCAoZGF0YSwgZmllbGQsIGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnZ1ZXRhYmxlLnRvZ2dsZURldGFpbFJvdyhkYXRhLmlkKVxuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZVBhZ2UgKHBhZ2UpIHtcbiAgICAgICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy52dWV0YWJsZS5jaGFuZ2VQYWdlKHBhZ2UpXG4gICAgICAgIH0sXG4gICAgICAgIG9uUGFnaW5hdGlvbkRhdGEgKHBhZ2luYXRpb25EYXRhKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLnBhZ2luYXRpb24uc2V0UGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbkRhdGEpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5wYWdpbmF0aW9uSW5mby5zZXRQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uRGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNb3JlKCkge1xuICAgICAgICAgICAgdGhpcy5leHRlcm5hbFBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAncGVyUGFnZSc6IHRoaXMuZW50aXR5LnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgJ3NlYXJjaCcgOiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayggKCkgPT4gdGhpcy4kcmVmcy52dWV0YWJsZS5yZWZyZXNoKCkpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVMb2FkRXJyb3IocmVzcG9uc2Upe1xuICAgICAgICAgICAgdGhpcy4kcm9vdC4kZW1pdCgnZy1ub3RpZnknLHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6IHRoaXMudHJhbnMuY29tbW9uLnVuYXV0aG9yaXplZCB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29sdW1uIE1vZGlmaWVkXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFN0YXR1czogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicrdGhpcy50cmFucy5zdGF0dXNfY29sb3JbdmFsdWVdKydcIj4nK3RoaXMudHJhbnMuc3RhdHVzW3ZhbHVlXSsnPHNwYW4+JztcbiAgICAgICAgfSxcbiAgICAgICAgZGF0ZUZvcm1hdDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZSAhPSAnJykgPyBtb21lbnQodmFsdWUpLmZvcm1hdCgnREQtTU0tWVlZWSBISDptbScpIDogJzxlbT4tPC9lbT4nO1xuICAgICAgICB9LFxuICAgICAgICBob3VyRm9ybWF0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlICE9ICcnKSA/IHZhbHVlICsgJyAnICsgdGhpcy50cmFucy5jb21tb24uaG91cnMgOiAnPGVtPi08L2VtPic7XG4gICAgICAgIH0sXG4gICAgICAgIHN0dWRlbnRGb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSl7XG4gICAgICAgICAgICAgICAgbGV0IGZ1bGxfbmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsLCBpbngpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsLnN0dWRlbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsX25hbWUgKz0gdmFsLnN0dWRlbnQuZmlyc3RfbmFtZSArJyAnK3ZhbC5zdHVkZW50Lmxhc3RfbmFtZSArJywgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdWxsX25hbWUuc2xpY2UoMCwgLTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICc8ZW0+LTwvZW0+JztcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0pvaW5CdXR0b246IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIGxldCBiYXNlID0gdGhpcztcbiAgICAgICAgICAgIGlmKHZhbHVlLmRhdGEgJiYgdmFsdWUuZGF0YS5kYXRhLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZUhvbGRlciA9IFtdOyAvLyBUbyBFdmVyeXRpbWUgdXBkYXRlIGN1cnJlbnQgdGltZV9zdGFtcCBvZiBldmVyeSByZWNvbmQuIFRoaXMgaXMgaG9sZGVyLlxuICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaCh2YWx1ZS5kYXRhLmRhdGEsZnVuY3Rpb24oaWR4LHZhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgY3VycmVudFRpbWVIb2xkZXJbdmFsLnV1aWRdID09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZUhvbGRlclt2YWwudXVpZF0gPSBtb21lbnQodmFsLl9jdXJyZW50X3RpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlSG9sZGVkVGltZSA9IG1vbWVudChjdXJyZW50VGltZUhvbGRlclt2YWwudXVpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVIb2xkZXJbdmFsLnV1aWRdID0gdXBkYXRlSG9sZGVkVGltZS5hZGQoNSwgJ3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHZhbC51dWlkID09ICc3M2U0M2EzYy0xOTRjLTExZTgtOGE1Zi0wMjQyZDA1MjlkNTMtMTU5MzI3NzM0MDY2MTM4NScpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHVwZGF0ZUhvbGRlZFRpbWUuYWRkKDUsICdzJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kVGltZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfdGltZSA9IG1vbWVudChjdXJyZW50VGltZUhvbGRlclt2YWwudXVpZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0X3RpbWUgPSBtb21lbnQodmFsLl9zdGFydF90aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihjdXJyZW50X3RpbWUuZGlmZihzdGFydF90aW1lKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbC5fZW5kICE9ICcnICYmIHZhbC5fZW5kICE9IG51bGwgJiYgdmFsLl9lbmQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kVGltZSA9IG1vbWVudCh2YWwuX2VuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKGR1cmF0aW9uLmFzTWludXRlcygpID4gMCAmJiBkdXJhdGlvbi5hc01pbnV0ZXMoKSA8PSAxMCkgfHwgKGVuZFRpbWUgIT0gJycgJiYgKGVuZFRpbWUuaXNTYW1lKGN1cnJlbnRfdGltZSkgIHx8IGVuZFRpbWUuaXNBZnRlcihjdXJyZW50X3RpbWUpKSkgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5nLWpvaW4tYnV0dG9uLicrdmFsLnV1aWQpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5nLWpvaW4tYnV0dG9uLicrdmFsLnV1aWQpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3Blbk1vZGFsKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAkKCcjbm90ZUluZm9Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnI25vdGVJbmZvTW9kYWwnKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIHByb3BzUGFuZWw6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsU3RhdHVzKG5ld1ZhbCk7XG4gICAgICAgICAgICBpZihuZXdWYWwpe1xuICAgICAgICAgICAgICAgIFZ1ZS5uZXh0VGljayggKCkgPT4gdGhpcy4kcmVmcy52dWV0YWJsZS5yZWZyZXNoKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAgXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL0xpc3QudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtLXBvcnRsZXRfX2JvZHlcIiBpZD1cInVzZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgPG5vdGlmaWNhdGlvbj48L25vdGlmaWNhdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImFsbF90dXRvcl9jbGFzc2VzXCIgcm9sZT1cInRhYnBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGxpc3RcbiAgICAgICAgICAgICAgICAgICAgOnByb3BzLXBhbmVsPVwibGlzdFBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgOnByb3BzLXVybHM9XCJ1cmxzXCJcbiAgICAgICAgICAgICAgICAgICAgOnByb3BzLXBlcm1pc3Npb25zPVwicGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICA6cHJvcHMtdHJhbnM9XCJ0cmFuc1wiPlxuICAgICAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG4gICAgaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9jb21tb24vTm90aWZpY2F0aW9uJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsncHJvcHNUcmFucycsICdwcm9wc1Blcm1pc3Npb25zJywgJ3Byb3BzVXJscycsICdwcm9wc0RhdGEnXSxcbiAgICAgICAgY29tcG9uZW50czp7XG4gICAgICAgICAgICBMaXN0OiBMaXN0LFxuICAgICAgICAgICAgTm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdFBhbmVsOiB0cnVlLCAvLyBpZiB0aGlzIGlzIGZhbHNlIExJU1Qgd2lsbCBub3QgZ29pbmcgdG8gZGlzcGxheVxuICAgICAgICAgICAgICAgIGNyZWF0ZUVkaXRQYW5lbDogdHJ1ZSwgLy8gaWYgdGhpcyBpcyBmYWxzZSBGb3JtIHdpbGwgbm90IGdvaW5nIHRvIGRpc3BsYXlcbiAgICAgICAgICAgICAgICB0cmFuczogSlNPTi5wYXJzZSh0aGlzLnByb3BzVHJhbnMpLFxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiBKU09OLnBhcnNlKHRoaXMucHJvcHNQZXJtaXNzaW9ucyksXG4gICAgICAgICAgICAgICAgdXJsczogSlNPTi5wYXJzZSh0aGlzLnByb3BzVXJscyksXG4gICAgICAgICAgICAgICAgbW9kdWxlRGF0YTogSlNPTi5wYXJzZSh0aGlzLnByb3BzRGF0YSksXG4gICAgICAgICAgICAgICAgZm9ybVJlc2V0OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgYmFzZSA9IHRoaXM7IC8vIFRvIEF2b2lkIHRoaXMga2V5d29yZCBjb25mbGljdFxuICAgICAgICAgICAgYmFzZS4kcm9vdC4kb24oJ3Jlc2V0LXBhbmVscycsZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgICAgIGJhc2UucmVzZXRQYW5lbFN0YXR1cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gMikgLy8gTm8gcmVhY3QgaWYgZWRpdCB0aW1lXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuJHJvb3QuJGVtaXQoJ3JlZnJlc2gtbGlzdC1ldmVudCcsMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kcyA6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogdG8gcmVzZXQgcGFuZWwgYW5kIGFjdGl2ZSBsaXN0IHBhbmVsIGRlZmF1bHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVzZXRQYW5lbFN0YXR1cyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZm9ybVJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBpZih2YWx1ZSA9PSAxIHx8IHZhbHVlID09IDIpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYodmFsdWUgPT0gMil7IC8vIGVkaXQgdGltZSBEbyBub3QgcmVzZXQgZm9ybVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5mb3JtUmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAkKCdhW2hyZWY9XCIjYWRkX2VkaXRfY2xhc3NcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCgnYVtocmVmPVwiI2FsbF90dXRvcl9jbGFzc2VzXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICBcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9NYXN0ZXIudnVlIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5bdi1jbG9ha11bZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4udnVldGFibGUgdGguc29ydGFibGVbZGF0YS12LTE1OTY1ZTNiXTpob3ZlciB7XFxuICBjb2xvcjogIzIxODVkMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnZ1ZXRhYmxlLWJvZHktd3JhcHBlcltkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteTphdXRvO1xcbn1cXG4udnVldGFibGUtaGVhZC13cmFwcGVyW2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4udnVldGFibGUtYWN0aW9uc1tkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIHdpZHRoOiAxNSU7XFxuICBwYWRkaW5nOiAxMnB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZ1ZXRhYmxlLXBhZ2luYXRpb25bZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmYWZiICFpbXBvcnRhbnQ7XFxufVxcbi52dWV0YWJsZS1wYWdpbmF0aW9uLWluZm9bZGF0YS12LTE1OTY1ZTNiXSB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuLnZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFtkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnZ1ZXRhYmxlLWNsaXAtdGV4dFtkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udnVldGFibGUtc2VtYW50aWMtbm8tdG9wW2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgYm9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOjAgIWltcG9ydGFudDtcXG59XFxuLnZ1ZXRhYmxlLWZpeGVkLWxheW91dFtkYXRhLXYtMTU5NjVlM2JdIHtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcbi52dWV0YWJsZS1ndXR0ZXItY29sW2RhdGEtdi0xNTk2NWUzYl0ge1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmlnaHQ6IG5vbmUgICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9tbWFtZWxkaS9KYXlBbWJlL2NvZGUvdHV0b3ItYmFuay9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTh3Q0E7RUFDQSxjQUFBO0NBQ0E7QUFDQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0NBQ0E7QUFDQTtFQUNBLG1CQUFBO0NBQ0E7QUFDQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NBQ0E7QUFDQTtFQUNBLCtCQUFBO0NBQ0E7QUFDQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7Q0FDQTtBQUNBO0VBQ0EsbUJBQUE7Q0FDQTtBQUNBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtDQUNBO0FBQ0E7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0NBQ0E7QUFDQTtFQUNBLG9CQUFBO0NBQ0E7QUFDQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWV0YWJsZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbjxkaXYgdi1pZj1cXFwiaXNGaXhlZEhlYWRlclxcXCI+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ2dWV0YWJsZS1oZWFkLXdyYXBwZXJcXFwiPlxcclxcbiAgICA8dGFibGUgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlJywgY3NzLnRhYmxlQ2xhc3MsIGNzcy50YWJsZUhlYWRlckNsYXNzXVxcXCI+XFxyXFxuICAgICAgPHRoZWFkIDpjbGFzcz1cXFwiW2Nzcy5nVGFibGVUaGVhZENsYXNzXVxcXCI+XFxyXFxuICAgICAgICA8dHIgOmNsYXNzPVxcXCJbY3NzLmdUYWJsZVRoZWFkVHJDbGFzc11cXFwiPlxcclxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJmaWVsZC52aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJpc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBAY2hhbmdlPVxcXCJ0b2dnbGVBbGxDaGVja2JveGVzKGZpZWxkLm5hbWUsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cXFwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L3RoPlxcclxcbiAgICAgICAgICAgICAgICA8dGggdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY29tcG9uZW50J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLWNvbXBvbmVudC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zbG90J1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLXNsb3QtJytleHRyYWN0QXJncyhmaWVsZC5uYW1lKSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLXNlcXVlbmNlJywgZmllbGQudGl0bGVDbGFzcyB8fCAnJ11cXFwiIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC90aD5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIHYtaWY9XFxcIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJyddXFxcIiB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXHJcXG4gICAgICAgICAgICAgICAgPHRoIEBjbGljaz1cXFwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDppZD1cXFwiJ18nICsgZmllbGQubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MsIHNvcnRDbGFzcyhmaWVsZCksIHsnc29ydGFibGUnOiBpc1NvcnRhYmxlKGZpZWxkKX1dXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgPHRoIHYtaWY9XFxcInNjcm9sbFZpc2libGVcXFwiIDpzdHlsZT1cXFwie3dpZHRoOiBzY3JvbGxCYXJXaWR0aH1cXFwiIGNsYXNzPVxcXCJ2dWV0YWJsZS1ndXR0ZXItY29sXFxcIj48L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgICA8L3RoZWFkPlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJ2dWV0YWJsZS1ib2R5LXdyYXBwZXJcXFwiIDpzdHlsZT1cXFwie2hlaWdodDogdGFibGVIZWlnaHR9XFxcIj5cXHJcXG4gICAgPHRhYmxlIDpjbGFzcz1cXFwiWyd2dWV0YWJsZScsIGNzcy50YWJsZUNsYXNzLCBjc3MudGFibGVCb2R5Q2xhc3NdXFxcIj5cXHJcXG4gICAgICA8Y29sZ3JvdXA+XFxyXFxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiZmllbGQudmlzaWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGNvbFxcclxcbiAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgIDppZD1cXFwiJ19jb2xfJyArIGZpZWxkLm5hbWVcXFwiXFxyXFxuICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLScrZmllbGQubmFtZSwgZmllbGQudGl0bGVDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgLz5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC9jb2xncm91cD5cXHJcXG4gICAgICA8dGJvZHkgdi1jbG9hayA6Y2xhc3M9XFxcIlsndnVldGFibGUtYm9keScsIGNzcy5nVGFibGVCb2R5Q2xhc3NdXFxcIj5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGl0ZW0sIGl0ZW1JbmRleCkgaW4gdGFibGVEYXRhXFxcIj5cXHJcXG4gICAgICAgICAgPHRyIFxcclxcbiAgICAgICAgICAgIDprZXk9XFxcIml0ZW1JbmRleFxcXCJcXHJcXG4gICAgICAgICAgICA6aXRlbS1pbmRleD1cXFwiaXRlbUluZGV4XFxcIiBcXHJcXG4gICAgICAgICAgICA6cmVuZGVyPVxcXCJvblJvd0NoYW5nZWQoaXRlbSlcXFwiIFxcclxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwib25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpXFxcIlxcclxcbiAgICAgICAgICAgIEBjbGljaz1cXFwib25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcXFwiIFxcclxcbiAgICAgICAgICAgIEBkYmxjbGljaz1cXFwib25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcXFwiIFxcclxcbiAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJmaWVsZC52aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtc2VxdWVuY2UnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJTZXF1ZW5jZShpdGVtSW5kZXgpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19oYW5kbGUnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVySWNvblRhZyhbJ2hhbmRsZS1pY29uJywgY3NzLmhhbmRsZUljb25dKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtY2hlY2tib3hlcycsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ0b2dnbGVDaGVja2JveChpdGVtLCBmaWVsZC5uYW1lLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cXFwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PSAnX19jb21wb25lbnQnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtY29tcG9uZW50JywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIDpyb3ctZGF0YT1cXFwiaXRlbVxcXCIgOnJvdy1pbmRleD1cXFwiaXRlbUluZGV4XFxcIiA6cm93LWZpZWxkPVxcXCJmaWVsZC5zb3J0RmllbGRcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA+PC9jb21wb25lbnQ+XFxyXFxuICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT09ICdfX3Nsb3QnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtc2xvdCcsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XFxcImV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XFxcIml0ZW1cXFwiIDpyb3ctaW5kZXg9XFxcIml0ZW1JbmRleFxcXCIgOnJvdy1maWVsZD1cXFwiZmllbGQuc29ydEZpZWxkXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgPjwvc2xvdD5cXHJcXG4gICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxcclxcbiAgICAgICAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XFxcImZpZWxkLmRhdGFDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlck5vcm1hbEZpZWxkKGZpZWxkLCBpdGVtKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBkYmxjbGljaz1cXFwib25DZWxsRG91YmxlQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cXFwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwidXNlRGV0YWlsUm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cXFwiZGV0YWlsUm93VHJhbnNpdGlvblxcXCIgOmtleT1cXFwiaXRlbUluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDx0ciB2LWlmPVxcXCJpc1Zpc2libGVEZXRhaWxSb3coaXRlbVt0cmFja0J5XSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiW2Nzcy5kZXRhaWxSb3dDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICA8dGQgOmNvbHNwYW49XFxcImNvdW50VmlzaWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XFxcImRldGFpbFJvd0NvbXBvbmVudFxcXCIgOnJvdy1kYXRhPVxcXCJpdGVtXFxcIiA6cm93LWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiPjwvY29tcG9uZW50PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImRpc3BsYXlFbXB0eURhdGFSb3dcXFwiPlxcclxcbiAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVxcXCJjb3VudFZpc2libGVGaWVsZHNcXFwiIGNsYXNzPVxcXCJ2dWV0YWJsZS1lbXB0eS1yZXN1bHRcXFwiIHYtaHRtbD1cXFwibm9EYXRhVGVtcGxhdGVcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImxlc3NUaGFuTWluUm93c1xcXCI+XFxyXFxuICAgICAgICAgIDx0ciB2LWZvcj1cXFwiaSBpbiBibGFua1Jvd3NcXFwiIGNsYXNzPVxcXCJibGFuay1yb3dcXFwiIDprZXk9XFxcImlcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZmllbGQudmlzaWJsZVxcXCIgOmtleT1cXFwiZmllbGRJbmRleFxcXCI+Jm5ic3A7PC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICA8L3Rib2R5PlxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHRhYmxlIHYtZWxzZSA6Y2xhc3M9XFxcIlsndnVldGFibGUnLCBjc3MudGFibGVDbGFzc11cXFwiPiA8IS0tIG5vIGZpeGVkIGhlYWRlciAtIHJlZ3VsYXIgdGFibGUgLS0+XFxyXFxuICA8dGhlYWQgOmNsYXNzPVxcXCJbY3NzLmdUYWJsZVRoZWFkQ2xhc3NdXFxcIj5cXHJcXG4gICAgPHRyIDpjbGFzcz1cXFwiW2Nzcy5nVGFibGVUaGVhZFRyQ2xhc3NdXFxcIj5cXHJcXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihmaWVsZCwgZmllbGRJbmRleCkgaW4gdGFibGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImZpZWxkLnZpc2libGVcXFwiPlxcclxcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19jaGVja2JveCdcXFwiXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC1jaGVja2JveC0nK3RyYWNrQnksIGZpZWxkLnRpdGxlQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgQGNoYW5nZT1cXFwidG9nZ2xlQWxsQ2hlY2tib3hlcyhmaWVsZC5uYW1lLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cXFwiY2hlY2tDaGVja2JveGVzU3RhdGUoZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2NvbXBvbmVudCdcXFwiXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC1jb21wb25lbnQtJyt0cmFja0J5LCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCB7J3NvcnRhYmxlJzogaXNTb3J0YWJsZShmaWVsZCl9XVxcXCJcXHJcXG4gICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyVGl0bGUoZmllbGQpXFxcIlxcclxcbiAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgID48L3RoPlxcclxcbiAgICAgICAgICAgIDx0aCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSAnX19zbG90J1xcXCJcXHJcXG4gICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICA6c3R5bGU9XFxcInt3aWR0aDogZmllbGQud2lkdGh9XFxcIlxcclxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLXRoLXNsb3QtJytleHRyYWN0QXJncyhmaWVsZC5uYW1lKSwgZmllbGQudGl0bGVDbGFzcywgc29ydENsYXNzKGZpZWxkKSwgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cXFwiXFxyXFxuICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICAgIEBjbGljaz1cXFwib3JkZXJCeShmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgICA8dGggdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fc2VxdWVuY2UnXFxcIlxcclxcbiAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtc2VxdWVuY2UnLCBmaWVsZC50aXRsZUNsYXNzIHx8ICcnLCBzb3J0Q2xhc3MoZmllbGQpXVxcXCIgdi1odG1sPVxcXCJyZW5kZXJUaXRsZShmaWVsZClcXFwiXFxyXFxuICAgICAgICAgICAgPjwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoIHYtaWY9XFxcIm5vdEluKGV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpLCBbJ19fc2VxdWVuY2UnLCAnX19jaGVja2JveCcsICdfX2NvbXBvbmVudCcsICdfX3Nsb3QnXSlcXFwiXFxyXFxuICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgOnN0eWxlPVxcXCJ7d2lkdGg6IGZpZWxkLndpZHRofVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS10aC0nK2ZpZWxkLm5hbWUsIGZpZWxkLnRpdGxlQ2xhc3MgfHwgJycsIHNvcnRDbGFzcyhmaWVsZCldXFxcIiB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cXHJcXG4gICAgICAgICAgICA8dGggQGNsaWNrPVxcXCJvcmRlckJ5KGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgIDppZD1cXFwiJ18nICsgZmllbGQubmFtZVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpzdHlsZT1cXFwie3dpZHRoOiBmaWVsZC53aWR0aH1cXFwiXFxyXFxuICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtdGgtJytmaWVsZC5uYW1lLCBmaWVsZC50aXRsZUNsYXNzLCBzb3J0Q2xhc3MoZmllbGQpLCAgeydzb3J0YWJsZSc6IGlzU29ydGFibGUoZmllbGQpfV1cXFwiXFxyXFxuICAgICAgICAgICAgICB2LWh0bWw9XFxcInJlbmRlclRpdGxlKGZpZWxkKVxcXCJcXHJcXG4gICAgICAgICAgICA+PC90aD5cXHJcXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC90cj5cXHJcXG4gIDwvdGhlYWQ+XFxyXFxuICA8dGJvZHkgdi1jbG9hayA6Y2xhc3M9XFxcIlsndnVldGFibGUtYm9keScsIGNzcy5nVGFibGVCb2R5Q2xhc3NdXFxcIj5cXHJcXG4gICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoaXRlbSwgaXRlbUluZGV4KSBpbiB0YWJsZURhdGFcXFwiPlxcclxcbiAgICAgIDx0ciBAZGJsY2xpY2s9XFxcIm9uUm93RG91YmxlQ2xpY2tlZChpdGVtLCAkZXZlbnQpXFxcIiBcXHJcXG4gICAgICAgIDprZXk9XFxcIml0ZW1JbmRleFxcXCJcXHJcXG4gICAgICAgIDppdGVtLWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiIFxcclxcbiAgICAgICAgOnJlbmRlcj1cXFwib25Sb3dDaGFuZ2VkKGl0ZW0pXFxcIiBcXHJcXG4gICAgICAgIDpjbGFzcz1cXFwiWyhpdGVtSW5kZXglMj09MCA/ICdldmVuJyA6ICdvZGQnKSwgb25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpXVxcXCJcXHJcXG4gICAgICAgIEBjbGljaz1cXFwib25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcXFwiIFxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cXFwiKGZpZWxkLCBmaWVsZEluZGV4KSBpbiB0YWJsZUZpZWxkc1xcXCI+XFxyXFxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJmaWVsZC52aXNpYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cXFwiaXNTcGVjaWFsRmllbGQoZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX3NlcXVlbmNlJ1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1zZXF1ZW5jZScsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwicmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVxcXCJcXHJcXG4gICAgICAgICAgICAgID48L3RkPlxcclxcbiAgICAgICAgICAgICAgPHRkIHYtaWY9XFxcImV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09ICdfX2hhbmRsZSdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtaGFuZGxlJywgZmllbGQuZGF0YUNsYXNzXVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyZW5kZXJJY29uVGFnKFsnaGFuZGxlLWljb24nLCBjc3MuaGFuZGxlSWNvbl0pXFxcIlxcclxcbiAgICAgICAgICAgICAgPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gJ19fY2hlY2tib3gnXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbJ3Z1ZXRhYmxlLWNoZWNrYm94ZXMnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwidG9nZ2xlQ2hlY2tib3goaXRlbSwgZmllbGQubmFtZSwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cXFwicm93U2VsZWN0ZWQoaXRlbSwgZmllbGQubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fY29tcG9uZW50J1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiXFxyXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiWyd2dWV0YWJsZS1jb21wb25lbnQnLCBmaWVsZC5kYXRhQ2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgICAgPlxcclxcbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cXFwiZXh0cmFjdEFyZ3MoZmllbGQubmFtZSlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgOnJvdy1kYXRhPVxcXCJpdGVtXFxcIiA6cm93LWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiIDpyb3ctZmllbGQ9XFxcImZpZWxkLnNvcnRGaWVsZFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgPjwvY29tcG9uZW50PlxcclxcbiAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB2LWlmPVxcXCJleHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gJ19fc2xvdCdcXFwiIFxcclxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIlsndnVldGFibGUtc2xvdCcsIGZpZWxkLmRhdGFDbGFzc11cXFwiXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVxcXCJleHRyYWN0QXJncyhmaWVsZC5uYW1lKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA6cm93LWRhdGE9XFxcIml0ZW1cXFwiIDpyb3ctaW5kZXg9XFxcIml0ZW1JbmRleFxcXCIgOnJvdy1maWVsZD1cXFwiZmllbGQuc29ydEZpZWxkXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+PC9zbG90PlxcclxcbiAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1pZj1cXFwiaGFzQ2FsbGJhY2soZmllbGQpXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGRJbmRleFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJmaWVsZC5kYXRhQ2xhc3NcXFwiXFxyXFxuICAgICAgICAgICAgICAgIHYtaHRtbD1cXFwiY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkNlbGxDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBAZGJsY2xpY2s9XFxcIm9uQ2VsbERvdWJsZUNsaWNrZWQoaXRlbSwgZmllbGQsICRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudT1cXFwib25DZWxsUmlnaHRDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgdi1lbHNlIFxcclxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJmaWVsZEluZGV4XFxcIlxcclxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImZpZWxkLmRhdGFDbGFzc1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgdi1odG1sPVxcXCJnZXRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZC5uYW1lLCAnJylcXFwiXFxyXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25DZWxsQ2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgQGRibGNsaWNrPVxcXCJvbkNlbGxEb3VibGVDbGlja2VkKGl0ZW0sIGZpZWxkLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICBAY29udGV4dG1lbnU9XFxcIm9uQ2VsbFJpZ2h0Q2xpY2tlZChpdGVtLCBmaWVsZCwgJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgID48L3RkPlxcclxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDwvdHI+XFxyXFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcInVzZURldGFpbFJvd1xcXCI+XFxyXFxuICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cXFwiZGV0YWlsUm93VHJhbnNpdGlvblxcXCIgOmtleT1cXFwiaXRlbUluZGV4XFxcIj5cXHJcXG4gICAgICAgICAgPHRyIHYtaWY9XFxcImlzVmlzaWJsZURldGFpbFJvdyhpdGVtW3RyYWNrQnldKVxcXCJcXHJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcIltjc3MuZGV0YWlsUm93Q2xhc3NdXFxcIlxcclxcbiAgICAgICAgICAgIEBjbGljaz1cXFwib25EZXRhaWxSb3dDbGljayhpdGVtLCAkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVxcXCJjb3VudFZpc2libGVGaWVsZHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XFxcImRldGFpbFJvd0NvbXBvbmVudFxcXCIgOnJvdy1kYXRhPVxcXCJpdGVtXFxcIiA6cm93LWluZGV4PVxcXCJpdGVtSW5kZXhcXFwiPjwvY29tcG9uZW50PlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RyYW5zaXRpb24+XFxyXFxuICAgICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPC90ZW1wbGF0ZT5cXHJcXG4gICAgPHRlbXBsYXRlIHYtaWY9XFxcImRpc3BsYXlFbXB0eURhdGFSb3dcXFwiPlxcclxcbiAgICAgIDx0cj5cXHJcXG4gICAgICAgIDx0ZCA6Y29sc3Bhbj1cXFwiY291bnRWaXNpYmxlRmllbGRzXFxcIiBjbGFzcz1cXFwidnVldGFibGUtZW1wdHktcmVzdWx0XFxcIiB2LWh0bWw9XFxcIm5vRGF0YVRlbXBsYXRlXFxcIj48L3RkPlxcclxcbiAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJsZXNzVGhhbk1pblJvd3NcXFwiPlxcclxcbiAgICAgIDx0ciB2LWZvcj1cXFwiaSBpbiBibGFua1Jvd3NcXFwiIGNsYXNzPVxcXCJibGFuay1yb3dcXFwiIDprZXk9XFxcImlcXFwiPlxcclxcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVxcXCIoZmllbGQsIGZpZWxkSW5kZXgpIGluIHRhYmxlRmllbGRzXFxcIj5cXHJcXG4gICAgICAgICAgPHRkIHYtaWY9XFxcImZpZWxkLnZpc2libGVcXFwiIDprZXk9XFxcImZpZWxkSW5kZXhcXFwiPiZuYnNwOzwvdGQ+XFxyXFxuICAgICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGVtcGxhdGU+XFxyXFxuICA8L3Rib2R5PlxcclxcbjwvdGFibGU+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICBwcm9wczoge1xcclxcbiAgICBmaWVsZHM6IHtcXHJcXG4gICAgICB0eXBlOiBBcnJheSxcXHJcXG4gICAgICByZXF1aXJlZDogdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBsb2FkT25TdGFydDoge1xcclxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBhcGlVcmw6IHtcXHJcXG4gICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgIGRlZmF1bHQ6ICcnXFxyXFxuICAgIH0sXFxyXFxuICAgIGh0dHBNZXRob2Q6IHtcXHJcXG4gICAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICAgIGRlZmF1bHQ6ICdnZXQnLFxcclxcbiAgICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHtcXHJcXG4gICAgICAgICAgcmV0dXJuIFsnZ2V0JywgJ3Bvc3QnXS5pbmRleE9mKHZhbHVlKSA+IC0xXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHJlYWN0aXZlQXBpVXJsOiB7XFxyXFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBhcGlNb2RlOiB7XFxyXFxuICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICBkZWZhdWx0OiB0cnVlXFxyXFxuICAgIH0sXFxyXFxuICAgIGRhdGE6IHtcXHJcXG4gICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXFxyXFxuICAgICAgZGVmYXVsdCAoKSB7XFxyXFxuICAgICAgICByZXR1cm4gbnVsbFxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YVRvdGFsOiB7XFxyXFxuICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgIGRlZmF1bHQ6IDBcXHJcXG4gICAgfSxcXHJcXG4gICAgZGF0YU1hbmFnZXI6IHtcXHJcXG4gICAgICB0eXBlOiBGdW5jdGlvbixcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBudWxsXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBkYXRhUGF0aDoge1xcclxcbiAgICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgICAgZGVmYXVsdDogJ2RhdGEnXFxyXFxuICAgIH0sXFxyXFxuICAgIHBhZ2luYXRpb25QYXRoOiB7XFxyXFxuICAgICAgICB0eXBlOiBbU3RyaW5nXSxcXHJcXG4gICAgICAgIGRlZmF1bHQ6ICdsaW5rcy5wYWdpbmF0aW9uJ1xcclxcbiAgICB9LFxcclxcbiAgICBxdWVyeVBhcmFtczoge1xcclxcbiAgICAgIHR5cGU6IFtPYmplY3QsIEZ1bmN0aW9uXSxcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgIHNvcnQ6ICdzb3J0JyxcXHJcXG4gICAgICAgICAgcGFnZTogJ3BhZ2UnLFxcclxcbiAgICAgICAgICBwZXJQYWdlOiAncGVyX3BhZ2UnXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBhcHBlbmRQYXJhbXM6IHtcXHJcXG4gICAgICB0eXBlOiBPYmplY3QsXFxyXFxuICAgICAgZGVmYXVsdCAoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge31cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGh0dHBPcHRpb25zOiB7XFxyXFxuICAgICAgdHlwZTogT2JqZWN0LFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHt9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBodHRwRmV0Y2g6IHtcXHJcXG4gICAgICB0eXBlOiBGdW5jdGlvbixcXHJcXG4gICAgICBkZWZhdWx0OiBudWxsXFxyXFxuICAgIH0sXFxyXFxuICAgIHBlclBhZ2U6IHtcXHJcXG4gICAgICAgIHR5cGU6IE51bWJlcixcXHJcXG4gICAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiAxMFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBpbml0aWFsUGFnZToge1xcclxcbiAgICAgIHR5cGU6IE51bWJlcixcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiAxXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBzb3J0T3JkZXI6IHtcXHJcXG4gICAgICB0eXBlOiBBcnJheSxcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBbXVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbXVsdGlTb3J0OiB7XFxyXFxuICAgICAgdHlwZTogQm9vbGVhbixcXHJcXG4gICAgICBkZWZhdWx0ICgpIHtcXHJcXG4gICAgICAgIHJldHVybiBmYWxzZVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgdGFibGVIZWlnaHQ6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogbnVsbFxcclxcbiAgICB9LFxcclxcbiAgICAvKlxcclxcbiAgICAgKiBwaHlzaWNhbCBrZXkgdGhhdCB3aWxsIHRyaWdnZXIgbXVsdGktc29ydCBvcHRpb25cXHJcXG4gICAgICogcG9zc2libGUgdmFsdWVzOiAnYWx0JywgJ2N0cmwnLCAnbWV0YScsICdzaGlmdCdcXHJcXG4gICAgICogJ2N0cmwnIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIE1hY1xcclxcbiAgICAgKi9cXHJcXG4gICAgbXVsdGlTb3J0S2V5OiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQ6ICdhbHQnXFxyXFxuICAgIH0sXFxyXFxuICAgIC8qIGRlcHJlY2F0ZWQgKi9cXHJcXG4gICAgcm93Q2xhc3NDYWxsYmFjazoge1xcclxcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcXHJcXG4gICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICB9LFxcclxcbiAgICByb3dDbGFzczoge1xcclxcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcXHJcXG4gICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICB9LFxcclxcbiAgICBkZXRhaWxSb3dDb21wb25lbnQ6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogJydcXHJcXG4gICAgfSxcXHJcXG4gICAgZGV0YWlsUm93VHJhbnNpdGlvbjoge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiAnJ1xcclxcbiAgICB9LFxcclxcbiAgICB0cmFja0J5OiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQ6ICdpZCdcXHJcXG4gICAgfSxcXHJcXG4gICAgY3NzOiB7XFxyXFxuICAgICAgdHlwZTogT2JqZWN0LFxcclxcbiAgICAgIGRlZmF1bHQgKCkge1xcclxcbiAgICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgICAgdGFibGVDbGFzczogJ3VpIGJsdWUgc2VsZWN0YWJsZSBjZWxsZWQgc3RhY2thYmxlIGF0dGFjaGVkIHRhYmxlJyxcXHJcXG4gICAgICAgICAgbG9hZGluZ0NsYXNzOiAnbG9hZGluZycsXFxyXFxuICAgICAgICAgIGFzY2VuZGluZ0ljb246ICdibHVlIGNoZXZyb24gdXAgaWNvbicsXFxyXFxuICAgICAgICAgIGRlc2NlbmRpbmdJY29uOiAnYmx1ZSBjaGV2cm9uIGRvd24gaWNvbicsXFxyXFxuICAgICAgICAgIGFzY2VuZGluZ0NsYXNzOiAnc29ydGVkLWFzYycsXFxyXFxuICAgICAgICAgIGRlc2NlbmRpbmdDbGFzczogJ3NvcnRlZC1kZXNjJyxcXHJcXG4gICAgICAgICAgc29ydGFibGVJY29uOiAnJyxcXHJcXG4gICAgICAgICAgZGV0YWlsUm93Q2xhc3M6ICd2dWV0YWJsZS1kZXRhaWwtcm93JyxcXHJcXG4gICAgICAgICAgaGFuZGxlSWNvbjogJ2dyZXkgc2lkZWJhciBpY29uJyxcXHJcXG4gICAgICAgICAgdGFibGVCb2R5Q2xhc3M6ICd2dWV0YWJsZS1zZW1hbnRpYy1uby10b3AgdnVldGFibGUtZml4ZWQtbGF5b3V0JyxcXHJcXG4gICAgICAgICAgdGFibGVIZWFkZXJDbGFzczogJ3Z1ZXRhYmxlLWZpeGVkLWxheW91dCdcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIG1pblJvd3M6IHtcXHJcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgZGVmYXVsdDogMFxcclxcbiAgICB9LFxcclxcbiAgICBzaWxlbnQ6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXFxyXFxuICAgIH0sXFxyXFxuICAgIG5vRGF0YVRlbXBsYXRlOiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQoKSB7XFxyXFxuICAgICAgICByZXR1cm4gJ05vIERhdGEgQXZhaWxhYmxlJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgc2hvd1NvcnRJY29uczoge1xcclxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXFxyXFxuICAgICAgZGVmYXVsdDogdHJ1ZVxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgZGF0YSAoKSB7XFxyXFxuICAgIHJldHVybiB7XFxyXFxuICAgICAgZXZlbnRQcmVmaXg6ICd2dWV0YWJsZTonLFxcclxcbiAgICAgIHRhYmxlRmllbGRzOiBbXSxcXHJcXG4gICAgICB0YWJsZURhdGE6IG51bGwsXFxyXFxuICAgICAgdGFibGVQYWdpbmF0aW9uOiBudWxsLFxcclxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmluaXRpYWxQYWdlLFxcclxcbiAgICAgIHNlbGVjdGVkVG86IFtdLFxcclxcbiAgICAgIHZpc2libGVEZXRhaWxSb3dzOiBbXSxcXHJcXG4gICAgICBsYXN0U2Nyb2xsUG9zaXRpb246IDAsXFxyXFxuICAgICAgc2Nyb2xsQmFyV2lkdGg6ICcxN3B4JywgLy9jaHJvbWUgZGVmYXVsdFxcclxcbiAgICAgIHNjcm9sbFZpc2libGU6IGZhbHNlLFxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgbW91bnRlZCAoKSB7XFxyXFxuICAgIHRoaXMubm9ybWFsaXplRmllbGRzKClcXHJcXG4gICAgdGhpcy5ub3JtYWxpemVTb3J0T3JkZXIoKVxcclxcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XFxyXFxuICAgICAgdGhpcy5zY3JvbGxCYXJXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArICdweCc7XFxyXFxuICAgIH1cXHJcXG4gICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XFxyXFxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2luaXRpYWxpemVkJywgdGhpcy50YWJsZUZpZWxkcylcXHJcXG4gICAgfSlcXHJcXG5cXHJcXG4gICAgaWYgKHRoaXMubG9hZE9uU3RhcnQpIHtcXHJcXG4gICAgICB0aGlzLmxvYWREYXRhKClcXHJcXG4gICAgfVxcclxcbiAgICBpZiAodGhpcy5pc0ZpeGVkSGVhZGVyKSB7XFxyXFxuICAgICAgbGV0IGVsZW0gPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1ib2R5LXdyYXBwZXInKVswXTtcXHJcXG4gICAgICBpZiAoZWxlbSAhPSBudWxsKSB7XFxyXFxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBkZXN0cm95ZWQgKCkge1xcclxcbiAgICBsZXQgZWxlbSA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWJvZHktd3JhcHBlcicpWzBdO1xcclxcbiAgICBpZiAoZWxlbSAhPSBudWxsKSB7XFxyXFxuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBjb21wdXRlZDoge1xcclxcbiAgICB1c2VEZXRhaWxSb3cgKCkge1xcclxcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSAmJiB0aGlzLnRhYmxlRGF0YVswXSAmJiB0aGlzLmRldGFpbFJvd0NvbXBvbmVudCAhPT0gJycgJiYgdHlwZW9mIHRoaXMudGFibGVEYXRhWzBdW3RoaXMudHJhY2tCeV0gPT09ICd1bmRlZmluZWQnKSB7XFxyXFxuICAgICAgICB0aGlzLndhcm4oJ1lvdSBuZWVkIHRvIGRlZmluZSB1bmlxdWUgcm93IGlkZW50aWZpZXIgaW4gb3JkZXIgZm9yIGRldGFpbC1yb3cgZmVhdHVyZSB0byB3b3JrLiBVc2UgYHRyYWNrLWJ5YCBwcm9wIHRvIGRlZmluZSBvbmUhJylcXHJcXG4gICAgICAgIHJldHVybiBmYWxzZVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGhpcy5kZXRhaWxSb3dDb21wb25lbnQgIT09ICcnXFxyXFxuICAgIH0sXFxyXFxuICAgIGNvdW50VmlzaWJsZUZpZWxkcyAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMudGFibGVGaWVsZHMuZmlsdGVyKGZ1bmN0aW9uKGZpZWxkKSB7XFxyXFxuICAgICAgICByZXR1cm4gZmllbGQudmlzaWJsZVxcclxcbiAgICAgIH0pLmxlbmd0aFxcclxcbiAgICB9LFxcclxcbiAgICBjb3VudFRhYmxlRGF0YSAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMudGFibGVEYXRhID09PSBudWxsKSB7XFxyXFxuICAgICAgICByZXR1cm4gMFxcclxcbiAgICAgIH1cXHJcXG4gICAgICByZXR1cm4gdGhpcy50YWJsZURhdGEubGVuZ3RoXFxyXFxuICAgIH0sXFxyXFxuICAgIGRpc3BsYXlFbXB0eURhdGFSb3cgKCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLmNvdW50VGFibGVEYXRhID09PSAwICYmIHRoaXMubm9EYXRhVGVtcGxhdGUubGVuZ3RoID4gMFxcclxcbiAgICB9LFxcclxcbiAgICBsZXNzVGhhbk1pblJvd3MgKCkge1xcclxcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YSA9PT0gbnVsbCB8fCB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT09IDApIHtcXHJcXG4gICAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgICAgfVxcclxcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPCB0aGlzLm1pblJvd3NcXHJcXG4gICAgfSxcXHJcXG4gICAgYmxhbmtSb3dzICgpIHtcXHJcXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEgPT09IG51bGwgfHwgdGhpcy50YWJsZURhdGEubGVuZ3RoID09PSAwKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5taW5Sb3dzXFxyXFxuICAgICAgfVxcclxcbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5sZW5ndGggPj0gdGhpcy5taW5Sb3dzKSB7XFxyXFxuICAgICAgICByZXR1cm4gMFxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGhpcy5taW5Sb3dzIC0gdGhpcy50YWJsZURhdGEubGVuZ3RoXFxyXFxuICAgIH0sXFxyXFxuICAgIGlzQXBpTW9kZSAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuYXBpTW9kZVxcclxcbiAgICB9LFxcclxcbiAgICBpc0RhdGFNb2RlICgpIHtcXHJcXG4gICAgICByZXR1cm4gISB0aGlzLmFwaU1vZGVcXHJcXG4gICAgfSxcXHJcXG4gICAgaXNGaXhlZEhlYWRlciAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMudGFibGVIZWlnaHQgIT0gbnVsbFxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczoge1xcclxcbiAgICBnZXRTY3JvbGxCYXJXaWR0aCAoKSB7XFxyXFxuICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcXHJcXG4gICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xcclxcblxcclxcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcXHJcXG4gICAgICBvdXRlci5zdHlsZS53aWR0aCA9ICcxMDBweCc7XFxyXFxuXFxyXFxuICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xcclxcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xcclxcblxcclxcblxcclxcbiAgICAgIGNvbnN0IHdpZHRoV2l0aG91dFNjcm9sbGJhciA9IG91dGVyLm9mZnNldFdpZHRoO1xcclxcblxcclxcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XFxyXFxuXFxyXFxuICAgICAgY29uc3Qgd2lkdGhXaXRoU2Nyb2xsYmFyID0gaW5uZXIub2Zmc2V0V2lkdGg7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgcmV0dXJuICh3aWR0aFdpdGhvdXRTY3JvbGxiYXIgLSB3aWR0aFdpdGhTY3JvbGxiYXIpO1xcclxcbiAgICB9LFxcclxcbiAgICBoYW5kbGVTY3JvbGwgKGUpIHsgLy9tYWtlIHN1cmUgdGhhdCB0aGUgaGVhZGVyIGFuZCB0aGUgYm9keSBhcmUgYWxpZ25lZCB3aGVuIHNjcm9sbGluZyBob3Jpem9udGFsbHkgb24gYSB0YWJsZSB0aGF0IGlzIHdpZGVyIHRoYW4gdGhlIHZpZXdwb3J0XFxyXFxuICAgICAgbGV0IGhvcml6b250YWwgPSBlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdDtcXHJcXG4gICAgICBpZiAoaG9yaXpvbnRhbCAhPSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbikgeyAvL2Rvbid0IG1vZGlmeSBoZWFkZXIgc2Nyb2xsIGlmIHdlIGFyZSBzY3JvbGxpbmcgdmVydGljYWxseVxcclxcbiAgICAgICAgbGV0IGhlYWRlciA9IHRoaXMuJGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Z1ZXRhYmxlLWhlYWQtd3JhcHBlcicpWzBdXFxyXFxuICAgICAgICBpZiAoaGVhZGVyICE9IG51bGwpIHtcXHJcXG4gICAgICAgICAgaGVhZGVyLnNjcm9sbExlZnQgPSBob3Jpem9udGFsO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBob3Jpem9udGFsO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgfSxcXHJcXG4gICAgbm9ybWFsaXplRmllbGRzICgpIHtcXHJcXG4gICAgICBpZiAodHlwZW9mKHRoaXMuZmllbGRzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcXHJcXG4gICAgICAgIHRoaXMud2FybignWW91IG5lZWQgdG8gcHJvdmlkZSBcXFwiZmllbGRzXFxcIiBwcm9wLicpXFxyXFxuICAgICAgICByZXR1cm5cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGhpcy50YWJsZUZpZWxkcyA9IFtdXFxyXFxuICAgICAgbGV0IHNlbGYgPSB0aGlzXFxyXFxuICAgICAgbGV0IG9ialxcclxcbiAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZnVuY3Rpb24oZmllbGQsIGkpIHtcXHJcXG4gICAgICAgIGlmICh0eXBlb2YgKGZpZWxkKSA9PT0gJ3N0cmluZycpIHtcXHJcXG4gICAgICAgICAgb2JqID0ge1xcclxcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLFxcclxcbiAgICAgICAgICAgIHRpdGxlOiBzZWxmLnNldFRpdGxlKGZpZWxkKSxcXHJcXG4gICAgICAgICAgICB0aXRsZUNsYXNzOiAnJyxcXHJcXG4gICAgICAgICAgICBkYXRhQ2xhc3M6ICcnLFxcclxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBudWxsLFxcclxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICAgIG9iaiA9IHtcXHJcXG4gICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxcclxcbiAgICAgICAgICAgIHdpZHRoOiBmaWVsZC53aWR0aCxcXHJcXG4gICAgICAgICAgICB0aXRsZTogKGZpZWxkLnRpdGxlID09PSB1bmRlZmluZWQpID8gc2VsZi5zZXRUaXRsZShmaWVsZC5uYW1lKSA6IGZpZWxkLnRpdGxlLFxcclxcbiAgICAgICAgICAgIHNvcnRGaWVsZDogZmllbGQuc29ydEZpZWxkLFxcclxcbiAgICAgICAgICAgIHRpdGxlQ2xhc3M6IChmaWVsZC50aXRsZUNsYXNzID09PSB1bmRlZmluZWQpID8gJycgOiBmaWVsZC50aXRsZUNsYXNzLFxcclxcbiAgICAgICAgICAgIGRhdGFDbGFzczogKGZpZWxkLmRhdGFDbGFzcyA9PT0gdW5kZWZpbmVkKSA/ICcnIDogZmllbGQuZGF0YUNsYXNzLFxcclxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoZmllbGQuY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkgPyAnJyA6IGZpZWxkLmNhbGxiYWNrLFxcclxcbiAgICAgICAgICAgIHZpc2libGU6IChmaWVsZC52aXNpYmxlID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IGZpZWxkLnZpc2libGUsXFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHNlbGYudGFibGVGaWVsZHMucHVzaChvYmopXFxyXFxuICAgICAgfSlcXHJcXG4gICAgfSxcXHJcXG4gICAgc2V0RGF0YSAoZGF0YSkge1xcclxcbiAgICAgIC8vIHRoaXMuYXBpTW9kZSA9IGZhbHNlXFxyXFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcXHJcXG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gZGF0YVxcclxcbiAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkaW5nJylcXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoZGF0YSwgdGhpcy5kYXRhUGF0aCwgbnVsbClcXHJcXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoZGF0YSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcXHJcXG5cXHJcXG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpIHtcXHJcXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdwYWdpbmF0aW9uLWRhdGEnLCB0aGlzLnRhYmxlUGFnaW5hdGlvbilcXHJcXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIHNldFRpdGxlIChzdHIpIHtcXHJcXG4gICAgICBpZiAodGhpcy5pc1NwZWNpYWxGaWVsZChzdHIpKSB7XFxyXFxuICAgICAgICByZXR1cm4gJydcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHRoaXMudGl0bGVDYXNlKHN0cilcXHJcXG4gICAgfSxcXHJcXG4gICAgZ2V0VGl0bGUgKGZpZWxkKSB7XFxyXFxuICAgICAgaWYgKHR5cGVvZihmaWVsZC50aXRsZSkgPT09ICdmdW5jdGlvbicpIHJldHVybiBmaWVsZC50aXRsZSgpXFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHR5cGVvZihmaWVsZC50aXRsZSkgPT09ICd1bmRlZmluZWQnXFxyXFxuICAgICAgICA/IGZpZWxkLm5hbWUucmVwbGFjZSgnLicsICcgJylcXHJcXG4gICAgICAgIDogZmllbGQudGl0bGVcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVuZGVyVGl0bGUgKGZpZWxkKSB7XFxyXFxuICAgICAgbGV0IHRpdGxlID0gdGhpcy5nZXRUaXRsZShmaWVsZClcXHJcXG5cXHJcXG4gICAgICBpZiAodGl0bGUubGVuZ3RoID4gMCAmJiB0aGlzLmlzSW5DdXJyZW50U29ydEdyb3VwKGZpZWxkKSB8fCB0aGlzLmhhc1NvcnRhYmxlSWNvbihmaWVsZCkpIHtcXHJcXG4gICAgICAgIGxldCBzdHlsZSA9IGBvcGFjaXR5OiR7dGhpcy5zb3J0SWNvbk9wYWNpdHkoZmllbGQpfTtwb3NpdGlvbjpyZWxhdGl2ZTtmbG9hdDpyaWdodGBcXHJcXG4gICAgICAgIGxldCBpY29uVGFnID0gdGhpcy5zaG93U29ydEljb25zID8gdGhpcy5yZW5kZXJJY29uVGFnKFsnc29ydC1pY29uJywgdGhpcy5zb3J0SWNvbihmaWVsZCldLCBgc3R5bGU9XFxcIiR7c3R5bGV9XFxcImApIDogJydcXHJcXG4gICAgICAgIHJldHVybiB0aXRsZSArICcgJyArIGljb25UYWdcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIHRpdGxlXFxyXFxuICAgIH0sXFxyXFxuICAgIHJlbmRlclNlcXVlbmNlIChpbmRleCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLnRhYmxlUGFnaW5hdGlvblxcclxcbiAgICAgICAgPyB0aGlzLnRhYmxlUGFnaW5hdGlvbi5mcm9tICsgaW5kZXhcXHJcXG4gICAgICAgIDogaW5kZXhcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVuZGVyTm9ybWFsRmllbGQgKGZpZWxkLCBpdGVtKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuaGFzQ2FsbGJhY2soZmllbGQpXFxyXFxuICAgICAgICA/IHRoaXMuY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVxcclxcbiAgICAgICAgOiB0aGlzLmdldE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkLm5hbWUsICcnKVxcclxcbiAgICB9LFxcclxcbiAgICBpc1NwZWNpYWxGaWVsZCAoZmllbGROYW1lKSB7XFxyXFxuICAgICAgcmV0dXJuIGZpZWxkTmFtZS5zbGljZSgwLCAyKSA9PT0gJ19fJ1xcclxcbiAgICB9LFxcclxcbiAgICB0aXRsZUNhc2UgKHN0cikge1xcclxcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxcXHcrL2csIGZ1bmN0aW9uKHR4dCkge1xcclxcbiAgICAgICAgcmV0dXJuIHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIGNhbWVsQ2FzZSAoc3RyLCBkZWxpbWl0ZXIgPSAnXycpIHtcXHJcXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcXHJcXG4gICAgICByZXR1cm4gc3RyLnNwbGl0KGRlbGltaXRlcikubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcXHJcXG4gICAgICAgIHJldHVybiBzZWxmLnRpdGxlQ2FzZShpdGVtKVxcclxcbiAgICAgIH0pLmpvaW4oJycpXFxyXFxuICAgIH0sXFxyXFxuICAgIG5vdEluIChzdHIsIGFycikge1xcclxcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihzdHIpID09PSAtMVxcclxcbiAgICB9LFxcclxcbiAgICBsb2FkRGF0YSAoc3VjY2VzcyA9IHRoaXMubG9hZFN1Y2Nlc3MsIGZhaWxlZCA9IHRoaXMubG9hZEZhaWxlZCkge1xcclxcbiAgICAgIGlmICh0aGlzLmlzRGF0YU1vZGUpIHtcXHJcXG4gICAgICAgIHRoaXMuY2FsbERhdGFNYW5hZ2VyKClcXHJcXG4gICAgICAgIHJldHVyblxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGluZycpXFxyXFxuXFxyXFxuICAgICAgdGhpcy5odHRwT3B0aW9uc1sncGFyYW1zJ10gPSB0aGlzLmdldEFwcGVuZFBhcmFtcyggdGhpcy5nZXRBbGxRdWVyeVBhcmFtcygpIClcXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGhpcy5mZXRjaCh0aGlzLmFwaVVybCwgdGhpcy5odHRwT3B0aW9ucykudGhlbihcXHJcXG4gICAgICAgICAgc3VjY2VzcyxcXHJcXG4gICAgICAgICAgZmFpbGVkXFxyXFxuICAgICAgKS5jYXRjaCgoKSA9PiBmYWlsZWQoKSlcXHJcXG4gICAgfSxcXHJcXG4gICAgZmV0Y2ggKGFwaVVybCwgaHR0cE9wdGlvbnMpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy5odHRwRmV0Y2hcXHJcXG4gICAgICAgICAgPyB0aGlzLmh0dHBGZXRjaChhcGlVcmwsIGh0dHBPcHRpb25zKVxcclxcbiAgICAgICAgICA6IGF4aW9zW3RoaXMuaHR0cE1ldGhvZF0oYXBpVXJsLCBodHRwT3B0aW9ucylcXHJcXG4gICAgfSxcXHJcXG4gICAgbG9hZFN1Y2Nlc3MgKHJlc3BvbnNlKSB7XFxyXFxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2xvYWQtc3VjY2VzcycsIHJlc3BvbnNlKVxcclxcblxcclxcbiAgICAgIGxldCBib2R5ID0gdGhpcy50cmFuc2Zvcm0ocmVzcG9uc2UuZGF0YSlcXHJcXG5cXHJcXG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5kYXRhUGF0aCwgbnVsbClcXHJcXG4gICAgICB0aGlzLnRhYmxlUGFnaW5hdGlvbiA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoYm9keSwgdGhpcy5wYWdpbmF0aW9uUGF0aCwgbnVsbClcXHJcXG5cXHJcXG4gICAgICBpZiAodGhpcy50YWJsZVBhZ2luYXRpb24gPT09IG51bGwpIHtcXHJcXG4gICAgICAgIHRoaXMud2FybigndnVldGFibGU6IHBhZ2luYXRpb24tcGF0aCBcXFwiJyArIHRoaXMucGFnaW5hdGlvblBhdGggKyAnXFxcIiBub3QgZm91bmQuICdcXHJcXG4gICAgICAgICAgKyAnSXQgbG9va3MgbGlrZSB0aGUgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBzZXZlciBkb2VzIG5vdCBoYXZlIHBhZ2luYXRpb24gaW5mb3JtYXRpb24gJ1xcclxcbiAgICAgICAgICArIFxcXCJvciB5b3UgbWF5IGhhdmUgc2V0IGl0IGluY29ycmVjdGx5LlxcXFxuXFxcIlxcclxcbiAgICAgICAgICArICdZb3UgY2FuIGV4cGxpY2l0bHkgc3VwcHJlc3MgdGhpcyB3YXJuaW5nIGJ5IHNldHRpbmcgcGFnaW5hdGlvbi1wYXRoPVxcXCJcXFwiLidcXHJcXG4gICAgICAgIClcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XFxyXFxuICAgICAgICB0aGlzLmZpeEhlYWRlcigpXFxyXFxuICAgICAgICB0aGlzLmZpcmVFdmVudCgncGFnaW5hdGlvbi1kYXRhJywgdGhpcy50YWJsZVBhZ2luYXRpb24pXFxyXFxuICAgICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZGVkJylcXHJcXG4gICAgICB9KVxcclxcbiAgICB9LFxcclxcbiAgICBmaXhIZWFkZXIoKSB7XFxyXFxuICAgICAgaWYgKCF0aGlzLmlzRml4ZWRIZWFkZXIpIHtcXHJcXG4gICAgICAgIHJldHVybjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgbGV0IGVsZW0gPSB0aGlzLiRlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2dWV0YWJsZS1ib2R5LXdyYXBwZXInKVswXVxcclxcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcXHJcXG4gICAgICAgIGlmIChlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KSB7XFxyXFxuICAgICAgICAgIHRoaXMuc2Nyb2xsVmlzaWJsZSA9IHRydWU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBlbHNlIHtcXHJcXG4gICAgICAgICAgdGhpcy5zY3JvbGxWaXNpYmxlID0gZmFsc2U7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBsb2FkRmFpbGVkIChyZXNwb25zZSkge1xcclxcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWQtZXJyb3InLCByZXNwb25zZSlcXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgnbG9hZC1lcnJvcicsIHJlc3BvbnNlKVxcclxcbiAgICAgIHRoaXMuZmlyZUV2ZW50KCdsb2FkZWQnKVxcclxcbiAgICB9LFxcclxcbiAgICB0cmFuc2Zvcm0gKGRhdGEpIHtcXHJcXG4gICAgICBsZXQgZnVuYyA9ICd0cmFuc2Zvcm0nXFxyXFxuXFxyXFxuICAgICAgaWYgKHRoaXMucGFyZW50RnVuY3Rpb25FeGlzdHMoZnVuYykpIHtcXHJcXG4gICAgICAgICAgcmV0dXJuIHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgZGF0YSlcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIGRhdGFcXHJcXG4gICAgfSxcXHJcXG4gICAgcGFyZW50RnVuY3Rpb25FeGlzdHMgKGZ1bmMpIHtcXHJcXG4gICAgICByZXR1cm4gKGZ1bmMgIT09ICcnICYmIHR5cGVvZiB0aGlzLiRwYXJlbnRbZnVuY10gPT09ICdmdW5jdGlvbicpXFxyXFxuICAgIH0sXFxyXFxuICAgIGNhbGxQYXJlbnRGdW5jdGlvbiAoZnVuYywgYXJncywgZGVmYXVsdFZhbHVlID0gbnVsbCkge1xcclxcbiAgICAgIGlmICh0aGlzLnBhcmVudEZ1bmN0aW9uRXhpc3RzKGZ1bmMpKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50W2Z1bmNdLmNhbGwodGhpcy4kcGFyZW50LCBhcmdzKVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXFxyXFxuICAgIH0sXFxyXFxuICAgIGZpcmVFdmVudCAoZXZlbnROYW1lLCBhcmdzKSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgZXZlbnROYW1lLCBhcmdzKVxcclxcbiAgICB9LFxcclxcbiAgICB3YXJuIChtc2cpIHtcXHJcXG4gICAgICBpZiAoIXRoaXMuc2lsZW50KSB7XFxyXFxuICAgICAgICBjb25zb2xlLndhcm4obXNnKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgZ2V0QWxsUXVlcnlQYXJhbXMgKCkge1xcclxcbiAgICAgIGxldCBwYXJhbXMgPSB7fVxcclxcblxcclxcbiAgICAgIGlmICh0eXBlb2YodGhpcy5xdWVyeVBhcmFtcykgPT09ICdmdW5jdGlvbicpIHtcXHJcXG4gICAgICAgIHBhcmFtcyA9IHRoaXMucXVlcnlQYXJhbXModGhpcy5zb3J0T3JkZXIsIHRoaXMuY3VycmVudFBhZ2UsIHRoaXMucGVyUGFnZSlcXHJcXG4gICAgICAgIHJldHVybiB0eXBlb2YocGFyYW1zKSAhPT0gJ29iamVjdCcgPyB7fSA6IHBhcmFtc1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5zb3J0XSA9IHRoaXMuZ2V0U29ydFBhcmFtKClcXHJcXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5wYWdlXSA9IHRoaXMuY3VycmVudFBhZ2VcXHJcXG4gICAgICBwYXJhbXNbdGhpcy5xdWVyeVBhcmFtcy5wZXJQYWdlXSA9IHRoaXMucGVyUGFnZVxcclxcblxcclxcbiAgICAgIHJldHVybiBwYXJhbXNcXHJcXG4gICAgfSxcXHJcXG4gICAgZ2V0U29ydFBhcmFtICgpIHtcXHJcXG4gICAgICBpZiAoIXRoaXMuc29ydE9yZGVyIHx8IHRoaXMuc29ydE9yZGVyLmZpZWxkID09ICcnKSB7XFxyXFxuICAgICAgICByZXR1cm4gJydcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRwYXJlbnRbJ2dldFNvcnRQYXJhbSddID09PSAnZnVuY3Rpb24nKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy4kcGFyZW50WydnZXRTb3J0UGFyYW0nXS5jYWxsKHRoaXMuJHBhcmVudCwgdGhpcy5zb3J0T3JkZXIpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRTb3J0UGFyYW0oKVxcclxcbiAgICB9LFxcclxcbiAgICBnZXREZWZhdWx0U29ydFBhcmFtICgpIHtcXHJcXG4gICAgICBsZXQgcmVzdWx0ID0gJyc7XFxyXFxuXFxyXFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xcclxcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICh0eXBlb2YgdGhpcy5zb3J0T3JkZXJbaV0uc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcXHJcXG4gICAgICAgICAgPyB0aGlzLnNvcnRPcmRlcltpXS5maWVsZFxcclxcbiAgICAgICAgICA6IHRoaXMuc29ydE9yZGVyW2ldLnNvcnRGaWVsZDtcXHJcXG5cXHJcXG4gICAgICAgIHJlc3VsdCArPSBmaWVsZE5hbWUgKyAnfCcgKyB0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gKyAoKGkrMSkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGggPyAnLCcgOiAnJyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIGNvbnNvbGUubG9nKCdnZXREZWZhdWx0U29ydFBhcmFtOiAnLCByZXN1bHQpXFxyXFxuICAgICAgcmV0dXJuIHJlc3VsdDtcXHJcXG4gICAgfSxcXHJcXG4gICAgZ2V0QXBwZW5kUGFyYW1zIChwYXJhbXMpIHtcXHJcXG4gICAgICBmb3IgKGxldCB4IGluIHRoaXMuYXBwZW5kUGFyYW1zKSB7XFxyXFxuICAgICAgICBwYXJhbXNbeF0gPSB0aGlzLmFwcGVuZFBhcmFtc1t4XVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gcGFyYW1zXFxyXFxuICAgIH0sXFxyXFxuICAgIGV4dHJhY3ROYW1lIChzdHJpbmcpIHtcXHJcXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMF0udHJpbSgpXFxyXFxuICAgIH0sXFxyXFxuICAgIGV4dHJhY3RBcmdzIChzdHJpbmcpIHtcXHJcXG4gICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KCc6JylbMV1cXHJcXG4gICAgfSxcXHJcXG4gICAgaXNTb3J0YWJsZSAoZmllbGQpIHtcXHJcXG4gICAgICByZXR1cm4gISh0eXBlb2YgZmllbGQuc29ydEZpZWxkID09PSAndW5kZWZpbmVkJylcXHJcXG4gICAgfSxcXHJcXG4gICAgaXNJbkN1cnJlbnRTb3J0R3JvdXAgKGZpZWxkKSB7XFxyXFxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNvcnRPcmRlclBvc2l0aW9uKGZpZWxkKSAhPT0gZmFsc2U7XFxyXFxuICAgIH0sXFxyXFxuICAgIGhhc1NvcnRhYmxlSWNvbiAoZmllbGQpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSAmJiB0aGlzLmNzcy5zb3J0YWJsZUljb24gIT0gJydcXHJcXG4gICAgfSxcXHJcXG4gICAgY3VycmVudFNvcnRPcmRlclBvc2l0aW9uIChmaWVsZCkge1xcclxcbiAgICAgIGlmICggISB0aGlzLmlzU29ydGFibGUoZmllbGQpKSB7XFxyXFxuICAgICAgICByZXR1cm4gZmFsc2VcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRPcmRlci5sZW5ndGg7IGkrKykge1xcclxcbiAgICAgICAgaWYgKHRoaXMuZmllbGRJc0luU29ydE9yZGVyUG9zaXRpb24oZmllbGQsIGkpKSB7XFxyXFxuICAgICAgICAgIHJldHVybiBpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gZmFsc2U7XFxyXFxuICAgIH0sXFxyXFxuICAgIGZpZWxkSXNJblNvcnRPcmRlclBvc2l0aW9uIChmaWVsZCwgaSkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLnNvcnRPcmRlcltpXS5maWVsZCA9PT0gZmllbGQubmFtZSAmJiB0aGlzLnNvcnRPcmRlcltpXS5zb3J0RmllbGQgPT09IGZpZWxkLnNvcnRGaWVsZFxcclxcbiAgICB9LFxcclxcbiAgICBvcmRlckJ5IChmaWVsZCwgZXZlbnQpIHtcXHJcXG4gICAgICBpZiAoICEgdGhpcy5pc1NvcnRhYmxlKGZpZWxkKSApIHJldHVyblxcclxcblxcclxcbiAgICAgIGxldCBrZXkgPSB0aGlzLm11bHRpU29ydEtleS50b0xvd2VyQ2FzZSgpICsgJ0tleSdcXHJcXG5cXHJcXG4gICAgICBpZiAodGhpcy5tdWx0aVNvcnQgJiYgZXZlbnRba2V5XSkgeyAvL2FkZGluZyBjb2x1bW4gdG8gbXVsdGlzb3J0XFxyXFxuICAgICAgICB0aGlzLm11bHRpQ29sdW1uU29ydChmaWVsZClcXHJcXG4gICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgLy9ubyBtdWx0aXNvcnQsIG9yIHJlc2V0dGluZyBzb3J0XFxyXFxuICAgICAgICB0aGlzLnNpbmdsZUNvbHVtblNvcnQoZmllbGQpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAxICAgIC8vIHJlc2V0IHBhZ2UgaW5kZXhcXHJcXG4gICAgICBpZiAodGhpcy5hcGlNb2RlIHx8IHRoaXMuZGF0YU1hbmFnZXIpIHtcXHJcXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbXVsdGlDb2x1bW5Tb3J0IChmaWVsZCkge1xcclxcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpO1xcclxcblxcclxcbiAgICAgIGlmKGkgPT09IGZhbHNlKSB7IC8vdGhpcyBmaWVsZCBpcyBub3QgaW4gdGhlIHNvcnQgYXJyYXkgeWV0XFxyXFxuICAgICAgICB0aGlzLnNvcnRPcmRlci5wdXNoKHtcXHJcXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLm5hbWUsXFxyXFxuICAgICAgICAgIHNvcnRGaWVsZDogZmllbGQuc29ydEZpZWxkLFxcclxcbiAgICAgICAgICBkaXJlY3Rpb246ICdhc2MnXFxyXFxuICAgICAgICB9KTtcXHJcXG4gICAgICB9IGVsc2UgeyAvL3RoaXMgZmllbGQgaXMgaW4gdGhlIHNvcnQgYXJyYXksIG5vdyB3ZSBjaGFuZ2UgaXRzIHN0YXRlXFxyXFxuICAgICAgICBpZih0aGlzLnNvcnRPcmRlcltpXS5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XFxyXFxuICAgICAgICAgIC8vIHN3aXRjaCBkaXJlY3Rpb25cXHJcXG4gICAgICAgICAgdGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID0gJ2Rlc2MnXFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAvL3JlbW92ZSBzb3J0IGNvbmRpdGlvblxcclxcbiAgICAgICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoaSwgMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBzaW5nbGVDb2x1bW5Tb3J0IChmaWVsZCkge1xcclxcbiAgICAgIGlmICh0aGlzLnNvcnRPcmRlci5sZW5ndGggPT09IDApIHtcXHJcXG4gICAgICAgIHRoaXMuY2xlYXJTb3J0T3JkZXIoKVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aGlzLnNvcnRPcmRlci5zcGxpY2UoMSk7IC8vcmVtb3ZlcyBhZGRpdGlvbmFsIGNvbHVtbnNcXHJcXG5cXHJcXG4gICAgICBpZiAodGhpcy5maWVsZElzSW5Tb3J0T3JkZXJQb3NpdGlvbihmaWVsZCwgMCkpIHtcXHJcXG4gICAgICAgIC8vIGNoYW5nZSBzb3J0IGRpcmVjdGlvblxcclxcbiAgICAgICAgdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID0gdGhpcy5zb3J0T3JkZXJbMF0uZGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnXFxyXFxuICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgIC8vIHJlc2V0IHNvcnQgZGlyZWN0aW9uXFxyXFxuICAgICAgICB0aGlzLnNvcnRPcmRlclswXS5kaXJlY3Rpb24gPSAnYXNjJ1xcclxcbiAgICAgIH1cXHJcXG4gICAgICB0aGlzLnNvcnRPcmRlclswXS5maWVsZCA9IGZpZWxkLm5hbWVcXHJcXG4gICAgICB0aGlzLnNvcnRPcmRlclswXS5zb3J0RmllbGQgPSBmaWVsZC5zb3J0RmllbGRcXHJcXG4gICAgfSxcXHJcXG4gICAgY2xlYXJTb3J0T3JkZXIgKCkge1xcclxcbiAgICAgIHRoaXMuc29ydE9yZGVyLnB1c2goe1xcclxcbiAgICAgICAgZmllbGQ6ICcnLFxcclxcbiAgICAgICAgc29ydEZpZWxkOiAnJyxcXHJcXG4gICAgICAgIGRpcmVjdGlvbjogJ2FzYydcXHJcXG4gICAgICB9KTtcXHJcXG4gICAgfSxcXHJcXG4gICAgc29ydENsYXNzIChmaWVsZCkge1xcclxcbiAgICAgIGxldCBjbHMgPSAnJ1xcclxcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXFxyXFxuXFxyXFxuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XFxyXFxuICAgICAgICBjbHMgPSAodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09ICdhc2MnKSA/IHRoaXMuY3NzLmFzY2VuZGluZ0NsYXNzIDogdGhpcy5jc3MuZGVzY2VuZGluZ0NsYXNzXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBjbHNcXHJcXG4gICAgfSxcXHJcXG4gICAgc29ydEljb24gKGZpZWxkKSB7XFxyXFxuICAgICAgbGV0IGNscyA9IHRoaXMuY3NzLnNvcnRhYmxlSWNvblxcclxcbiAgICAgIGxldCBpID0gdGhpcy5jdXJyZW50U29ydE9yZGVyUG9zaXRpb24oZmllbGQpXFxyXFxuXFxyXFxuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XFxyXFxuICAgICAgICBjbHMgPSAodGhpcy5zb3J0T3JkZXJbaV0uZGlyZWN0aW9uID09ICdhc2MnKSA/IHRoaXMuY3NzLmFzY2VuZGluZ0ljb24gOiB0aGlzLmNzcy5kZXNjZW5kaW5nSWNvblxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gY2xzO1xcclxcbiAgICB9LFxcclxcbiAgICBzb3J0SWNvbk9wYWNpdHkgKGZpZWxkKSB7XFxyXFxuICAgICAgLypcXHJcXG4gICAgICAgKiBmaWVsZHMgd2l0aCBzdHJvbmdlciBwcmVjZWRlbmNlIGhhdmUgZGFya2VyIGNvbG9yXFxyXFxuICAgICAgICpcXHJcXG4gICAgICAgKiBpZiB0aGVyZSBhcmUgZmV3IGZpZWxkcywgd2UgZ28gZG93biBieSAwLjNcXHJcXG4gICAgICAgKiBleC4gMiBmaWVsZHMgYXJlIHNlbGVjdGVkOiAxLjAsIDAuN1xcclxcbiAgICAgICAqXFxyXFxuICAgICAgICogaWYgdGhlcmUgYXJlIG1vcmUgd2UgZ28gZG93biBldmVubHkgb24gdGhlIGdpdmVuIHNwZWN0cnVtXFxyXFxuICAgICAgICogZXguIDYgZmllbGRzIGFyZSBzZWxlY3RlZDogMS4wLCAwLjg2LCAwLjcyLCAwLjU4LCAwLjQ0LCAwLjNcXHJcXG4gICAgICAgKi9cXHJcXG4gICAgICBsZXQgbWF4ID0gMS4wLFxcclxcbiAgICAgICAgICBtaW4gPSAwLjMsXFxyXFxuICAgICAgICAgIHN0ZXAgPSAwLjNcXHJcXG5cXHJcXG4gICAgICBsZXQgY291bnQgPSB0aGlzLnNvcnRPcmRlci5sZW5ndGg7XFxyXFxuICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRTb3J0T3JkZXJQb3NpdGlvbihmaWVsZClcXHJcXG5cXHJcXG5cXHJcXG4gICAgICBpZihtYXggLSBjb3VudCAqIHN0ZXAgPCBtaW4pIHtcXHJcXG4gICAgICAgIHN0ZXAgPSAobWF4IC0gbWluKSAvIChjb3VudC0xKVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBsZXQgb3BhY2l0eSA9IG1heCAtIGN1cnJlbnQgKiBzdGVwXFxyXFxuXFxyXFxuICAgICAgcmV0dXJuIG9wYWNpdHlcXHJcXG4gICAgfSxcXHJcXG4gICAgaGFzQ2FsbGJhY2sgKGl0ZW0pIHtcXHJcXG4gICAgICByZXR1cm4gaXRlbS5jYWxsYmFjayA/IHRydWUgOiBmYWxzZVxcclxcbiAgICB9LFxcclxcbiAgICBjYWxsQ2FsbGJhY2sgKGZpZWxkLCBpdGVtKSB7XFxyXFxuICAgICAgaWYgKCAhIHRoaXMuaGFzQ2FsbGJhY2soZmllbGQpKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICBpZih0eXBlb2YoZmllbGQuY2FsbGJhY2spID09ICdmdW5jdGlvbicpIHtcXHJcXG4gICAgICAgcmV0dXJuIGZpZWxkLmNhbGxiYWNrKHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSkpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGxldCBhcmdzID0gZmllbGQuY2FsbGJhY2suc3BsaXQoJ3wnKVxcclxcbiAgICAgIGxldCBmdW5jID0gYXJncy5zaGlmdCgpXFxyXFxuXFxyXFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLiRwYXJlbnRbZnVuY10gPT09ICdmdW5jdGlvbicpIHtcXHJcXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0T2JqZWN0VmFsdWUoaXRlbSwgZmllbGQubmFtZSlcXHJcXG5cXHJcXG4gICAgICAgIHJldHVybiAoYXJncy5sZW5ndGggPiAwKVxcclxcbiAgICAgICAgICA/IHRoaXMuJHBhcmVudFtmdW5jXS5hcHBseSh0aGlzLiRwYXJlbnQsIFt2YWx1ZV0uY29uY2F0KGFyZ3MpKVxcclxcbiAgICAgICAgICA6IHRoaXMuJHBhcmVudFtmdW5jXS5jYWxsKHRoaXMuJHBhcmVudCwgdmFsdWUpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiBudWxsXFxyXFxuICAgIH0sXFxyXFxuICAgIGdldE9iamVjdFZhbHVlIChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xcclxcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICh0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAndW5kZWZpbmVkJykgPyBudWxsIDogZGVmYXVsdFZhbHVlXFxyXFxuXFxyXFxuICAgICAgbGV0IG9iaiA9IG9iamVjdFxcclxcbiAgICAgIGlmIChwYXRoLnRyaW0oKSAhPSAnJykge1xcclxcbiAgICAgICAgbGV0IGtleXMgPSBwYXRoLnNwbGl0KCcuJylcXHJcXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcXHJcXG4gICAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqW2tleV0gIT09ICd1bmRlZmluZWQnICYmIG9ialtrZXldICE9PSBudWxsKSB7XFxyXFxuICAgICAgICAgICAgb2JqID0gb2JqW2tleV1cXHJcXG4gICAgICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgICAgICBvYmogPSBkZWZhdWx0VmFsdWVcXHJcXG4gICAgICAgICAgICByZXR1cm5cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICB9XFxyXFxuICAgICAgcmV0dXJuIG9ialxcclxcbiAgICB9LFxcclxcbiAgICB0b2dnbGVDaGVja2JveCAoZGF0YUl0ZW0sIGZpZWxkTmFtZSwgZXZlbnQpIHtcXHJcXG4gICAgICBsZXQgaXNDaGVja2VkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWRcXHJcXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcXHJcXG5cXHJcXG4gICAgICBpZiAoZGF0YUl0ZW1baWRDb2x1bW5dID09PSB1bmRlZmluZWQpIHtcXHJcXG4gICAgICAgIHRoaXMud2FybignX19jaGVja2JveCBmaWVsZDogVGhlIFxcXCInK3RoaXMudHJhY2tCeSsnXFxcIiBmaWVsZCBkb2VzIG5vdCBleGlzdCEgTWFrZSBzdXJlIHRoZSBmaWVsZCB5b3Ugc3BlY2lmeSBpbiBcXFwidHJhY2stYnlcXFwiIHByb3AgZG9lcyBleGlzdC4nKVxcclxcbiAgICAgICAgcmV0dXJuXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIGxldCBrZXkgPSBkYXRhSXRlbVtpZENvbHVtbl1cXHJcXG4gICAgICBpZiAoaXNDaGVja2VkKSB7XFxyXFxuICAgICAgICB0aGlzLnNlbGVjdElkKGtleSlcXHJcXG4gICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgdGhpcy51bnNlbGVjdElkKGtleSlcXHJcXG4gICAgICB9XFxyXFxuICAgICAgdGhpcy4kZW1pdCgndnVldGFibGU6Y2hlY2tib3gtdG9nZ2xlZCcsIGlzQ2hlY2tlZCwgZGF0YUl0ZW0pXFxyXFxuICAgIH0sXFxyXFxuICAgIHNlbGVjdElkIChrZXkpIHtcXHJcXG4gICAgICBpZiAoICEgdGhpcy5pc1NlbGVjdGVkUm93KGtleSkpIHtcXHJcXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUby5wdXNoKGtleSlcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIHVuc2VsZWN0SWQgKGtleSkge1xcclxcbiAgICAgIHRoaXMuc2VsZWN0ZWRUbyA9IHRoaXMuc2VsZWN0ZWRUby5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xcclxcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGtleVxcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIGlzU2VsZWN0ZWRSb3cgKGtleSkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVG8uaW5kZXhPZihrZXkpID49IDBcXHJcXG4gICAgfSxcXHJcXG4gICAgcm93U2VsZWN0ZWQgKGRhdGFJdGVtLCBmaWVsZE5hbWUpe1xcclxcbiAgICAgIGxldCBpZENvbHVtbiA9IHRoaXMudHJhY2tCeVxcclxcbiAgICAgIGxldCBrZXkgPSBkYXRhSXRlbVtpZENvbHVtbl1cXHJcXG5cXHJcXG4gICAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkUm93KGtleSlcXHJcXG4gICAgfSxcXHJcXG4gICAgY2hlY2tDaGVja2JveGVzU3RhdGUgKGZpZWxkTmFtZSkge1xcclxcbiAgICAgIGlmICghIHRoaXMudGFibGVEYXRhKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcXHJcXG4gICAgICBsZXQgaWRDb2x1bW4gPSB0aGlzLnRyYWNrQnlcXHJcXG4gICAgICBsZXQgc2VsZWN0b3IgPSAndGgudnVldGFibGUtdGgtY2hlY2tib3gtJyArIGlkQ29sdW1uICsgJyBpbnB1dFt0eXBlPWNoZWNrYm94XSdcXHJcXG4gICAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcXHJcXG5cXHJcXG4gICAgICAvL2ZpeGVkOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgcmV0dXJuIHRoZSB0eXBlb2Ygbm9kZUxpc3Qgbm90IGFycmF5XFxyXFxuICAgICAgaWYgKGVscy5mb3JFYWNoPT09dW5kZWZpbmVkKVxcclxcbiAgICAgICAgZWxzLmZvckVhY2g9ZnVuY3Rpb24oY2Ipe1xcclxcbiAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxzLCBjYik7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gY291bnQgaG93IG1hbnkgY2hlY2tib3ggcm93IGluIHRoZSBjdXJyZW50IHBhZ2UgaGFzIGJlZW4gY2hlY2tlZFxcclxcbiAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XFxyXFxuICAgICAgICByZXR1cm4gc2VsZi5zZWxlY3RlZFRvLmluZGV4T2YoaXRlbVtpZENvbHVtbl0pID49IDBcXHJcXG4gICAgICB9KVxcclxcblxcclxcbiAgICAgIC8vIGNvdW50ID09IDAsIGNsZWFyIHRoZSBjaGVja2JveFxcclxcbiAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPD0gMCkge1xcclxcbiAgICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcXHJcXG4gICAgICAgICAgZWwuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlXFxyXFxuICAgICAgICB9KVxcclxcbiAgICAgICAgcmV0dXJuIGZhbHNlXFxyXFxuICAgICAgfVxcclxcbiAgICAgIC8vIGNvdW50ID4gMCBhbmQgY291bnQgPCBwZXJQYWdlLCBzZXQgY2hlY2tib3ggc3RhdGUgdG8gJ2luZGV0ZXJtaW5hdGUnXFxyXFxuICAgICAgZWxzZSBpZiAoc2VsZWN0ZWQubGVuZ3RoIDwgdGhpcy5wZXJQYWdlKSB7XFxyXFxuICAgICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xcclxcbiAgICAgICAgICBlbC5pbmRldGVybWluYXRlID0gdHJ1ZVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgICAgfVxcclxcbiAgICAgIC8vIGNvdW50ID09IHBlclBhZ2UsIHNldCBjaGVja2JveCBzdGF0ZSB0byAnY2hlY2tlZCdcXHJcXG4gICAgICBlbHNlIHtcXHJcXG4gICAgICAgIGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XFxyXFxuICAgICAgICAgIGVsLmluZGV0ZXJtaW5hdGUgPSBmYWxzZVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICB0b2dnbGVBbGxDaGVja2JveGVzIChmaWVsZE5hbWUsIGV2ZW50KSB7XFxyXFxuICAgICAgbGV0IHNlbGYgPSB0aGlzXFxyXFxuICAgICAgbGV0IGlzQ2hlY2tlZCA9IGV2ZW50LnRhcmdldC5jaGVja2VkXFxyXFxuICAgICAgbGV0IGlkQ29sdW1uID0gdGhpcy50cmFja0J5XFxyXFxuXFxyXFxuICAgICAgaWYgKGlzQ2hlY2tlZCkge1xcclxcbiAgICAgICAgdGhpcy50YWJsZURhdGEuZm9yRWFjaChmdW5jdGlvbihkYXRhSXRlbSkge1xcclxcbiAgICAgICAgICBzZWxmLnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgfSBlbHNlIHtcXHJcXG4gICAgICAgIHRoaXMudGFibGVEYXRhLmZvckVhY2goZnVuY3Rpb24oZGF0YUl0ZW0pIHtcXHJcXG4gICAgICAgICAgc2VsZi51bnNlbGVjdElkKGRhdGFJdGVtW2lkQ29sdW1uXSlcXHJcXG4gICAgICAgIH0pXFxyXFxuICAgICAgfVxcclxcbiAgICAgIHRoaXMuJGVtaXQoJ3Z1ZXRhYmxlOmNoZWNrYm94LXRvZ2dsZWQtYWxsJywgaXNDaGVja2VkKVxcclxcbiAgICB9LFxcclxcbiAgICBnb3RvUHJldmlvdXNQYWdlICgpIHtcXHJcXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDEpIHtcXHJcXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UtLVxcclxcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBnb3RvTmV4dFBhZ2UgKCkge1xcclxcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlKSB7XFxyXFxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlKytcXHJcXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgZ290b1BhZ2UgKHBhZ2UpIHtcXHJcXG4gICAgICBpZiAocGFnZSAhPSB0aGlzLmN1cnJlbnRQYWdlICYmIChwYWdlID4gMCAmJiBwYWdlIDw9IHRoaXMudGFibGVQYWdpbmF0aW9uLmxhc3RfcGFnZSkpIHtcXHJcXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlXFxyXFxuICAgICAgICB0aGlzLmxvYWREYXRhKClcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGlzVmlzaWJsZURldGFpbFJvdyAocm93SWQpIHtcXHJcXG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlRGV0YWlsUm93cy5pbmRleE9mKCByb3dJZCApID49IDBcXHJcXG4gICAgfSxcXHJcXG4gICAgc2hvd0RldGFpbFJvdyAocm93SWQpIHtcXHJcXG4gICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlRGV0YWlsUm93KHJvd0lkKSkge1xcclxcbiAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5wdXNoKHJvd0lkKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgaGlkZURldGFpbFJvdyAocm93SWQpIHtcXHJcXG4gICAgICBpZiAodGhpcy5pc1Zpc2libGVEZXRhaWxSb3cocm93SWQpKSB7XFxyXFxuICAgICAgICB0aGlzLnZpc2libGVEZXRhaWxSb3dzLnNwbGljZShcXHJcXG4gICAgICAgICAgdGhpcy52aXNpYmxlRGV0YWlsUm93cy5pbmRleE9mKHJvd0lkKSxcXHJcXG4gICAgICAgICAgMVxcclxcbiAgICAgICAgKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgdG9nZ2xlRGV0YWlsUm93IChyb3dJZCkge1xcclxcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZURldGFpbFJvdyhyb3dJZCkpIHtcXHJcXG4gICAgICAgIHRoaXMuaGlkZURldGFpbFJvdyhyb3dJZClcXHJcXG4gICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsUm93KHJvd0lkKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgc2hvd0ZpZWxkIChpbmRleCkge1xcclxcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXFxyXFxuXFxyXFxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9IHRydWVcXHJcXG4gICAgfSxcXHJcXG4gICAgaGlkZUZpZWxkIChpbmRleCkge1xcclxcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXFxyXFxuXFxyXFxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9IGZhbHNlXFxyXFxuICAgIH0sXFxyXFxuICAgIHRvZ2dsZUZpZWxkIChpbmRleCkge1xcclxcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLnRhYmxlRmllbGRzLmxlbmd0aCkgcmV0dXJuXFxyXFxuXFxyXFxuICAgICAgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZSA9ICEgdGhpcy50YWJsZUZpZWxkc1tpbmRleF0udmlzaWJsZVxcclxcbiAgICB9LFxcclxcbiAgICByZW5kZXJJY29uVGFnIChjbGFzc2VzLCBvcHRpb25zID0gJycpIHtcXHJcXG4gICAgICByZXR1cm4gdHlwZW9mKHRoaXMuY3NzLnJlbmRlckljb24pID09PSAndW5kZWZpbmVkJ1xcclxcbiAgICAgICAgPyBgPGkgY2xhc3M9XFxcIiR7Y2xhc3Nlcy5qb2luKCcgJyl9XFxcIiAke29wdGlvbnN9PjwvaT5gXFxyXFxuICAgICAgICA6IHRoaXMuY3NzLnJlbmRlckljb24oY2xhc3Nlcywgb3B0aW9ucylcXHJcXG4gICAgfSxcXHJcXG4gICAgbWFrZVBhZ2luYXRpb24gKHRvdGFsID0gbnVsbCwgcGVyUGFnZSA9IG51bGwsIGN1cnJlbnRQYWdlID0gbnVsbCkge1xcclxcbiAgICAgIGxldCBwYWdpbmF0aW9uID0ge31cXHJcXG4gICAgICB0b3RhbCA9IHRvdGFsID09PSBudWxsID8gdGhpcy5kYXRhVG90YWwgOiB0b3RhbFxcclxcbiAgICAgIHBlclBhZ2UgPSBwZXJQYWdlID09PSBudWxsID8gdGhpcy5wZXJQYWdlIDogcGVyUGFnZVxcclxcbiAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UgPT09IG51bGwgPyB0aGlzLmN1cnJlbnRQYWdlIDogY3VycmVudFBhZ2VcXHJcXG5cXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgJ3RvdGFsJzogdG90YWwsXFxyXFxuICAgICAgICAncGVyX3BhZ2UnOiBwZXJQYWdlLFxcclxcbiAgICAgICAgJ2N1cnJlbnRfcGFnZSc6IGN1cnJlbnRQYWdlLFxcclxcbiAgICAgICAgJ2xhc3RfcGFnZSc6IE1hdGguY2VpbCh0b3RhbCAvIHBlclBhZ2UpIHx8IDAsXFxyXFxuICAgICAgICAnbmV4dF9wYWdlX3VybCc6ICcnLFxcclxcbiAgICAgICAgJ3ByZXZfcGFnZV91cmwnOiAnJyxcXHJcXG4gICAgICAgICdmcm9tJzogKGN1cnJlbnRQYWdlIC0xKSAqIHBlclBhZ2UgKzEsXFxyXFxuICAgICAgICAndG8nOiBNYXRoLm1pbihjdXJyZW50UGFnZSAqIHBlclBhZ2UsIHRvdGFsKVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbm9ybWFsaXplU29ydE9yZGVyICgpIHtcXHJcXG4gICAgICB0aGlzLnNvcnRPcmRlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcXHJcXG4gICAgICAgIGl0ZW0uc29ydEZpZWxkID0gaXRlbS5zb3J0RmllbGQgfHwgaXRlbS5maWVsZFxcclxcbiAgICAgIH0pXFxyXFxuICAgIH0sXFxyXFxuICAgIGNhbGxEYXRhTWFuYWdlciAoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuZGF0YU1hbmFnZXIgPT09IG51bGwgJiYgdGhpcy5kYXRhID09PSBudWxsKSByZXR1cm5cXHJcXG5cXHJcXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmRhdGEpKSB7XFxyXFxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBtb2RlOiBhcnJheScpXFxyXFxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5kYXRhKVxcclxcbiAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICB0aGlzLm5vcm1hbGl6ZVNvcnRPcmRlcigpXFxyXFxuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5kYXRhTWFuYWdlcih0aGlzLnNvcnRPcmRlciwgdGhpcy5tYWtlUGFnaW5hdGlvbigpKSlcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIG9uUm93Q2xhc3MgKGRhdGFJdGVtLCBpbmRleCkge1xcclxcbiAgICAgIGlmICh0aGlzLnJvd0NsYXNzQ2FsbGJhY2sgIT09ICcnKSB7XFxyXFxuICAgICAgICB0aGlzLndhcm4oJ1xcXCJyb3ctY2xhc3MtY2FsbGJhY2tcXFwiIHByb3AgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBcXFwicm93LWNsYXNzXFxcIiBwcm9wIGluc3RlYWQuJylcXHJcXG4gICAgICAgIHJldHVyblxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICBpZiAodHlwZW9mKHRoaXMucm93Q2xhc3MpID09PSAnZnVuY3Rpb24nKSB7XFxyXFxuICAgICAgICByZXR1cm4gdGhpcy5yb3dDbGFzcyhkYXRhSXRlbSwgaW5kZXgpXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIHJldHVybiB0aGlzLnJvd0NsYXNzXFxyXFxuICAgIH0sXFxyXFxuICAgIG9uUm93Q2hhbmdlZCAoZGF0YUl0ZW0pIHtcXHJcXG4gICAgICB0aGlzLmZpcmVFdmVudCgncm93LWNoYW5nZWQnLCBkYXRhSXRlbSlcXHJcXG4gICAgICByZXR1cm4gdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBvblJvd0NsaWNrZWQgKGRhdGFJdGVtLCBldmVudCkge1xcclxcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcXHJcXG4gICAgICByZXR1cm4gdHJ1ZVxcclxcbiAgICB9LFxcclxcbiAgICBvblJvd0RvdWJsZUNsaWNrZWQgKGRhdGFJdGVtLCBldmVudCkge1xcclxcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdyb3ctZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcXHJcXG4gICAgfSxcXHJcXG4gICAgb25EZXRhaWxSb3dDbGljayAoZGF0YUl0ZW0sIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2RldGFpbC1yb3ctY2xpY2tlZCcsIGRhdGFJdGVtLCBldmVudClcXHJcXG4gICAgfSxcXHJcXG4gICAgb25DZWxsQ2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xcclxcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLWNsaWNrZWQnLCBkYXRhSXRlbSwgZmllbGQsIGV2ZW50KVxcclxcbiAgICB9LFxcclxcbiAgICBvbkNlbGxEb3VibGVDbGlja2VkIChkYXRhSXRlbSwgZmllbGQsIGV2ZW50KSB7XFxyXFxuICAgICAgdGhpcy4kZW1pdCh0aGlzLmV2ZW50UHJlZml4ICsgJ2NlbGwtZGJsY2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXFxyXFxuICAgIH0sXFxyXFxuICAgIG9uQ2VsbFJpZ2h0Q2xpY2tlZCAoZGF0YUl0ZW0sIGZpZWxkLCBldmVudCkge1xcclxcbiAgICAgIHRoaXMuJGVtaXQodGhpcy5ldmVudFByZWZpeCArICdjZWxsLXJpZ2h0Y2xpY2tlZCcsIGRhdGFJdGVtLCBmaWVsZCwgZXZlbnQpXFxyXFxuICAgIH0sXFxyXFxuICAgIC8qXFxyXFxuICAgICAqIEFQSSBmb3IgZXh0ZXJuYWxzXFxyXFxuICAgICAqL1xcclxcbiAgICBjaGFuZ2VQYWdlIChwYWdlKSB7XFxyXFxuICAgICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xcclxcbiAgICAgICAgdGhpcy5nb3RvUHJldmlvdXNQYWdlKClcXHJcXG4gICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xcclxcbiAgICAgICAgdGhpcy5nb3RvTmV4dFBhZ2UoKVxcclxcbiAgICAgIH0gZWxzZSB7XFxyXFxuICAgICAgICB0aGlzLmdvdG9QYWdlKHBhZ2UpXFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICByZWxvYWQgKCkge1xcclxcbiAgICAgIHJldHVybiB0aGlzLmxvYWREYXRhKClcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVmcmVzaCAoKSB7XFxyXFxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDFcXHJcXG4gICAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpXFxyXFxuICAgIH0sXFxyXFxuICAgIHJlc2V0RGF0YSAoKSB7XFxyXFxuICAgICAgdGhpcy50YWJsZURhdGEgPSBudWxsXFxyXFxuICAgICAgdGhpcy50YWJsZVBhZ2luYXRpb24gPSBudWxsXFxyXFxuICAgICAgdGhpcy5maXJlRXZlbnQoJ2RhdGEtcmVzZXQnKVxcclxcbiAgICB9XFxyXFxuICB9LCAvLyBlbmQ6IG1ldGhvZHNcXHJcXG4gIHdhdGNoOiB7XFxyXFxuICAgICdtdWx0aVNvcnQnIChuZXdWYWwsIG9sZFZhbCkge1xcclxcbiAgICAgIGlmIChuZXdWYWwgPT09IGZhbHNlICYmIHRoaXMuc29ydE9yZGVyLmxlbmd0aCA+IDEpIHtcXHJcXG4gICAgICAgIHRoaXMuc29ydE9yZGVyLnNwbGljZSgxKTtcXHJcXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgICdhcGlVcmwnICAobmV3VmFsLCBvbGRWYWwpIHtcXHJcXG4gICAgICBpZih0aGlzLnJlYWN0aXZlQXBpVXJsICYmIG5ld1ZhbCAhPT0gb2xkVmFsKVxcclxcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcXHJcXG4gICAgfSxcXHJcXG4gICAgJ2RhdGEnIChuZXdWYWwsIG9sZFZhbCkge1xcclxcbiAgICAgIHRoaXMuc2V0RGF0YShuZXdWYWwpXFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICBbdi1jbG9ha10ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlIHRoLnNvcnRhYmxlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICMyMTg1ZDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC52dWV0YWJsZS1ib2R5LXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWhlYWQtd3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIC52dWV0YWJsZS1hY3Rpb25zIHtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgcGFkZGluZzogMTJweCAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC52dWV0YWJsZS1wYWdpbmF0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y5ZmFmYiAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mbyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxuICB9XFxyXFxuICAudnVldGFibGUtZW1wdHktcmVzdWx0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWNsaXAtdGV4dCB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLXNlbWFudGljLW5vLXRvcCB7XFxyXFxuICAgIGJvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOjAgIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG4gIC52dWV0YWJsZS1maXhlZC1sYXlvdXQge1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgfVxcclxcbiAgLnZ1ZXRhYmxlLWd1dHRlci1jb2wge1xcclxcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lICAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTU5NjVlM2JcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDciLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pc0ZpeGVkSGVhZGVyXG4gICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtaGVhZC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzLCBfdm0uY3NzLnRhYmxlSGVhZGVyQ2xhc3NdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmdUYWJsZVRoZWFkQ2xhc3NdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IFtfdm0uY3NzLmdUYWJsZVRoZWFkVHJDbGFzc10gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jaGVja2JveC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udHJhY2tCeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLmNoZWNrQ2hlY2tib3hlc1N0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUFsbENoZWNrYm94ZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1jb21wb25lbnQtXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50cmFja0J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zbG90LVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclRpdGxlKGZpZWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdEluKF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW5kZXJUaXRsZShmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfXCIgKyBmaWVsZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyVGl0bGUoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc2Nyb2xsVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWd1dHRlci1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF92bS5zY3JvbGxCYXJXaWR0aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtYm9keS13cmFwcGVyXCIsXG4gICAgICAgICAgICBzdHlsZTogeyBoZWlnaHQ6IF92bS50YWJsZUhlaWdodCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFtcInZ1ZXRhYmxlXCIsIF92bS5jc3MudGFibGVDbGFzcywgX3ZtLmNzcy50YWJsZUJvZHlDbGFzc11cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJjb2xncm91cFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjb2xcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1cIiArIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiX2NvbF9cIiArIGZpZWxkLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IFtcInZ1ZXRhYmxlLWJvZHlcIiwgX3ZtLmNzcy5nVGFibGVCb2R5Q2xhc3NdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbihpdGVtLCBpdGVtSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ub25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0taW5kZXhcIjogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBfdm0ub25Sb3dDaGFuZ2VkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0RvdWJsZUNsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVGaWVsZHMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3NlcXVlbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlclNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbmRlckljb25UYWcoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRsZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jc3MuaGFuZGxlSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNoZWNrYm94ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLnJvd1NlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUNoZWNrYm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZmllbGRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2xvdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXNsb3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0QXJncyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGE6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpdGVtSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0ZpZWxkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyTm9ybWFsRmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsUmlnaHRDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZURldGFpbFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5kZXRhaWxSb3dUcmFuc2l0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1Zpc2libGVEZXRhaWxSb3coaXRlbVtfdm0udHJhY2tCeV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5jc3MuZGV0YWlsUm93Q2xhc3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuOiBfdm0uY291bnRWaXNpYmxlRmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLmRldGFpbFJvd0NvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3ctZGF0YVwiOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheUVtcHR5RGF0YVJvd1xuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZXRhYmxlLWVtcHR5LXJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vRGF0YVRlbXBsYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxlc3NUaGFuTWluUm93c1xuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9sKF92bS5ibGFua1Jvd3MsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiYmxhbmstcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGtleTogZmllbGRJbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF9jKFwidGFibGVcIiwgeyBjbGFzczogW1widnVldGFibGVcIiwgX3ZtLmNzcy50YWJsZUNsYXNzXSB9LCBbXG4gICAgICAgIF9jKFwidGhlYWRcIiwgeyBjbGFzczogW192bS5jc3MuZ1RhYmxlVGhlYWRDbGFzc10gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgeyBjbGFzczogW192bS5jc3MuZ1RhYmxlVGhlYWRUckNsYXNzXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBmaWVsZC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU3BlY2lhbEZpZWxkKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLWNoZWNrYm94LVwiICsgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudGl0bGVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5jaGVja0NoZWNrYm94ZXNTdGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVBbGxDaGVja2JveGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtY29tcG9uZW50LVwiICsgX3ZtLnRyYWNrQnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnRpdGxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNvcnRhYmxlOiBfdm0uaXNTb3J0YWJsZShmaWVsZCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkoZmllbGQsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09IFwiX19zbG90XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtc2xvdC1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3RBcmdzKGZpZWxkLm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc29ydENsYXNzKGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzb3J0YWJsZTogX3ZtLmlzU29ydGFibGUoZmllbGQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogZmllbGQud2lkdGggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5yZW5kZXJUaXRsZShmaWVsZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlckJ5KGZpZWxkLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS10aC1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdEluKF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl9fc2VxdWVuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX19jb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtdGgtXCIgKyBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGZpZWxkLndpZHRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0ucmVuZGVyVGl0bGUoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLXRoLVwiICsgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50aXRsZUNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zb3J0Q2xhc3MoZmllbGQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc29ydGFibGU6IF92bS5pc1NvcnRhYmxlKGZpZWxkKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBmaWVsZC53aWR0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJfXCIgKyBmaWVsZC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJlbmRlclRpdGxlKGZpZWxkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXJCeShmaWVsZCwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgeyBjbGFzczogW1widnVldGFibGUtYm9keVwiLCBfdm0uY3NzLmdUYWJsZUJvZHlDbGFzc10gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRGF0YSwgZnVuY3Rpb24oaXRlbSwgaXRlbUluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JbmRleCAlIDIgPT0gMCA/IFwiZXZlblwiIDogXCJvZGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dDbGFzcyhpdGVtLCBpdGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6IF92bS5vblJvd0NoYW5nZWQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25Sb3dEb3VibGVDbGlja2VkKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblJvd0NsaWNrZWQoaXRlbSwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NwZWNpYWxGaWVsZChmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PSBcIl9fc2VxdWVuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zZXF1ZW5jZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVyU2VxdWVuY2UoaXRlbUluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2hhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kYXRhQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVuZGVySWNvblRhZyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhbmRsZS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLmhhbmRsZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdE5hbWUoZmllbGQubmFtZSkgPT0gXCJfX2NoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidnVldGFibGUtY2hlY2tib3hlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLnJvd1NlbGVjdGVkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUNoZWNrYm94KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dHJhY3ROYW1lKGZpZWxkLm5hbWUpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2NvbXBvbmVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZ1ZXRhYmxlLWNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRhdGFDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWRhdGFcIjogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWluZGV4XCI6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93LWZpZWxkXCI6IGZpZWxkLnNvcnRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHRyYWN0TmFtZShmaWVsZC5uYW1lKSA9PT0gXCJfX3Nsb3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1zbG90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZGF0YUNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0cmFjdEFyZ3MoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dEYXRhOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SW5kZXg6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0ZpZWxkOiBmaWVsZC5zb3J0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNDYWxsYmFjayhmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FsbENhbGxiYWNrKGZpZWxkLCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbERvdWJsZUNsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRtZW51OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsUmlnaHRDbGlja2VkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmllbGRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBmaWVsZC5kYXRhQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0T2JqZWN0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2VsbENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub25DZWxsRG91YmxlQ2xpY2tlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dG1lbnU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkNlbGxSaWdodENsaWNrZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udXNlRGV0YWlsUm93XG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1JbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLmRldGFpbFJvd1RyYW5zaXRpb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVmlzaWJsZURldGFpbFJvdyhpdGVtW192bS50cmFja0J5XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW192bS5jc3MuZGV0YWlsUm93Q2xhc3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vbkRldGFpbFJvd0NsaWNrKGl0ZW0sICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uZGV0YWlsUm93Q29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1kYXRhXCI6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdy1pbmRleFwiOiBpdGVtSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmRpc3BsYXlFbXB0eURhdGFSb3dcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidnVldGFibGUtZW1wdHktcmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmNvdW50VmlzaWJsZUZpZWxkcyB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5ub0RhdGFUZW1wbGF0ZSkgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmxlc3NUaGFuTWluUm93c1xuICAgICAgICAgICAgICA/IF92bS5fbChfdm0uYmxhbmtSb3dzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGksIHN0YXRpY0NsYXNzOiBcImJsYW5rLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGtleTogZmllbGRJbmRleCB9LCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xNTk2NWUzYlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTU5NjVlM2JcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIGNsYXNzOiBbXCJ2dWV0YWJsZS1wYWdpbmF0aW9uLWluZm9cIiwgX3ZtLmNzcy5pbmZvQ2xhc3NdLFxuICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wYWdpbmF0aW9uSW5mbykgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xNzcyNDA4M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTc3MjQwODNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xNzcyNDA4M1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm8udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIFtcbiAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0J1dHRvbixcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dCdXR0b25cIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi14cyByZWRcIixcbiAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5kZWxldGVMYWJlbCkgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uY2xpY2tIYW5kbGVyKF92bS5kZWxldGVVcmwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYzdmNjI2OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmM3ZjYyNjhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMmM3ZjYyNjhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tcG9ydGxldF9fYm9keVwiLCBhdHRyczogeyBpZDogXCJ1c2Vyc1wiIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm5vdGlmaWNhdGlvblwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBhY3RpdmVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFsbF90dXRvcl9jbGFzc2VzXCIsIHJvbGU6IFwidGFicGFuZWxcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImxpc3RcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwicHJvcHMtcGFuZWxcIjogX3ZtLmxpc3RQYW5lbCxcbiAgICAgICAgICAgICAgICBcInByb3BzLXVybHNcIjogX3ZtLnVybHMsXG4gICAgICAgICAgICAgICAgXCJwcm9wcy1wZXJtaXNzaW9uc1wiOiBfdm0ucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgXCJwcm9wcy10cmFuc1wiOiBfdm0udHJhbnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTM4M2JmOTk5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zODNiZjk5OVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL01hc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMzgzYmY5OTlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9NYXN0ZXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVQYWdpbmF0aW9uICYmIF92bS50YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlID4gMSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlUGFnaW5hdGlvbiAmJiB0YWJsZVBhZ2luYXRpb24ubGFzdF9wYWdlID4gMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjbGFzczogX3ZtLmNzcy53cmFwcGVyQ2xhc3NcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25GaXJzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY3NzLmljb25zLmZpcnN0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLmZpcnN0XSB9KVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIsKrXCIpXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uRmlyc3RQYWdlID8gX3ZtLmNzcy5kaXNhYmxlZENsYXNzIDogXCJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKFwicHJldlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMubmV4dCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5wcmV2XSB9KVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIsKg4oC5XCIpXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubm90RW5vdWdoUGFnZXNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRvdGFsUGFnZSwgZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3NzLnBhZ2VDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzQ3VycmVudFBhZ2UobikgPyBfdm0uY3NzLmFjdGl2ZUNsYXNzIDogXCJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKG4pIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRQYWdlKG4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLndpbmRvd1NpemUsIGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNzcy5wYWdlQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0N1cnJlbnRQYWdlKF92bS53aW5kb3dTdGFydCArIG4gLSAxKVxuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmNzcy5hY3RpdmVDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS53aW5kb3dTdGFydCArIG4gLSAxKSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkUGFnZShfdm0ud2luZG93U3RhcnQgKyBuIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgXCJidG4tbmF2XCIsXG4gICAgICAgICAgICBfdm0uY3NzLmxpbmtDbGFzcyxcbiAgICAgICAgICAgIF92bS5pc09uTGFzdFBhZ2UgPyBfdm0uY3NzLmRpc2FibGVkQ2xhc3MgOiBcIlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ubG9hZFBhZ2UoXCJuZXh0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLmNzcy5pY29ucy5uZXh0ICE9IFwiXCJcbiAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgY2xhc3M6IFtfdm0uY3NzLmljb25zLm5leHRdIH0pXG4gICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwi4oC6wqBcIildKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICBcImJ0bi1uYXZcIixcbiAgICAgICAgICAgIF92bS5jc3MubGlua0NsYXNzLFxuICAgICAgICAgICAgX3ZtLmlzT25MYXN0UGFnZSA/IF92bS5jc3MuZGlzYWJsZWRDbGFzcyA6IFwiXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5sb2FkUGFnZShfdm0udG90YWxQYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5jc3MuaWNvbnMubGFzdCAhPSBcIlwiXG4gICAgICAgICAgICA/IF9jKFwiaVwiLCB7IGNsYXNzOiBbX3ZtLmNzcy5pY29ucy5sYXN0XSB9KVxuICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIsK7XCIpXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNlZmRkNTk2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zZWZkZDU5NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2VmZGQ1OTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udHlwZSA9PSBcImRhbmdlclwiLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0eXBlID09ICdkYW5nZXInXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlciBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjE4cHhcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIF92bS50eXBlID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgXCIpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udHlwZSA9PSBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZSA9PSAnc3VjY2VzcydcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtc3VjY2VzcyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjE4cHhcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIF92bS50eXBlID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgXCIpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udHlwZSA9PSBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZSA9PSAnd2FybmluZydcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtd2FybmluZyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjE4cHhcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIF92bS50eXBlID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgXCIpXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udHlwZSA9PSBcImluZm9cIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZSA9PSAnaW5mbydcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtaW5mbyBmYWRlIGluIGFsZXJ0LWRpc21pc3NpYmxlXCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjE4cHhcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgIF92bS50eXBlID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCJcXG4gICAgXCIpXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi02NTIyOTQzMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjUyMjk0MzBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjUyMjk0MzBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ubGlzdFBhbmVsU3RhdHVzLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwibGlzdFBhbmVsU3RhdHVzXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxTZWFyY2hQYW5lbFN0YXR1cyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxTZWFyY2hQYW5lbFN0YXR1c1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWRlbW8gYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tZGVtb19fcHJldmlldyBnLXNlYXJjaC1wYW5lbFwiIH0pXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidnVldGFibGVcIiwge1xuICAgICAgICAgICAgcmVmOiBcInZ1ZXRhYmxlXCIsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSBnLXRhYmxlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImFwaS11cmxcIjogX3ZtLnVybHMuaW5kZXgsXG4gICAgICAgICAgICAgIGZpZWxkczogX3ZtLmZpZWxkcyxcbiAgICAgICAgICAgICAgY3NzOiBfdm0uY3NzLFxuICAgICAgICAgICAgICBcImFwcGVuZC1wYXJhbXNcIjogX3ZtLmV4dGVybmFsUGFyYW1zLFxuICAgICAgICAgICAgICBcInBhZ2luYXRpb24tcGF0aFwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ2dWV0YWJsZTpjZWxsLWNsaWNrZWRcIjogX3ZtLm9uQ2VsbENsaWNrZWQsXG4gICAgICAgICAgICAgIFwidnVldGFibGU6cGFnaW5hdGlvbi1kYXRhXCI6IF92bS5vblBhZ2luYXRpb25EYXRhLFxuICAgICAgICAgICAgICBcInZ1ZXRhYmxlOmxvYWRpbmdcIjogX3ZtLnNldExvYWRlcixcbiAgICAgICAgICAgICAgXCJ2dWV0YWJsZTpsb2FkZWRcIjogX3ZtLnNldExvYWRlcixcbiAgICAgICAgICAgICAgXCJ2dWV0YWJsZTpsb2FkLWVycm9yXCI6IF92bS5oYW5kbGVMb2FkRXJyb3IsXG4gICAgICAgICAgICAgIFwidnVldGFibGU6bG9hZC1zdWNjZXNzXCI6IF92bS5zaG93Sm9pbkJ1dHRvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnLWpvaW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5yb3dEYXRhLnV1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0udXJscy5zdGFydF9jbGFzcy5yZXBsYWNlQXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVybHMuc3RhcnRfY2xhc3MubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5yb3dEYXRhLnV1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRyYW5zLmNvbW1vbi5qb2luKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm8gYnRuLXNtIGctYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5Nb2RhbChwcm9wcy5yb3dEYXRhLm5vdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udHJhbnMuY29tbW9uLm5vdGVzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgZy1yZXNwb25zaXZlLXRhYmxlXCIgfSwgW1xuICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInYtbWlkZGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtLWZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlBlciBQYWdlOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVudGl0eS5wZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVudGl0eS5wZXJQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgbS1pbnB1dCBtLWlucHV0LS1zb2xpZCBnLXNlbGVjdC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93TW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW192bS5fdihcIjNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTBcIiB9IH0sIFtfdm0uX3YoXCIxMFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyMFwiIH0gfSwgW192bS5fdihcIjIwXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTUwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxNTBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMzAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIzMDBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCI1MDBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMTAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIxMDAwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb24taW5mb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYWdpbmF0aW9uSW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiaW5mby10ZW1wbGF0ZVwiOiBcIlNob3dpbmcge3RvfSBGcm9tIHt0b3RhbH0gUmVjb3Jkcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImluZm8tY2xhc3NcIjogXCJwYWdpbmF0aW9uLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidi1taWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2xlYXJmaXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnLXNtLXB1bGwtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZ1ZXRhYmxlLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY3NzOiBfdm0uY3NzLnBhZ2luYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2dWV0YWJsZS1wYWdpbmF0aW9uOmNoYW5nZS1wYWdlXCI6IF92bS5vbkNoYW5nZVBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTZiNTY0NGQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02YjU2NDRkNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL0xpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZiNTY0NGQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3R1dG9yLWNsYXNzZXMvTGlzdC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTk2NWUzYlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVldGFibGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjZlZTVkMjRjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTU5NjVlM2JcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTU5NjVlM2JcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xNTk2NWUzYlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMTU5NjVlM2JcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxudmFyIGxpc3RUb1N0eWxlcyA9IHJlcXVpcmUoJy4vbGlzdFRvU3R5bGVzJylcblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDcgOCA5IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IDggOSIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlU3dlZXRBbGVydD10KCk6ZS5WdWVTd2VldEFsZXJ0PXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgYT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGEuZXhwb3J0cyxhLGEuZXhwb3J0cyx0KSxhLmxvYWRlZD0hMCxhLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cIi9idWlsZC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPW4oMSkscj1vKGEpO3QuZGVmYXVsdD1yLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT1uKDYpLHI9byhhKTtuKDUpO3ZhciBpPXt9O2kuaW5zdGFsbD1mdW5jdGlvbihlKXtlLnByb3RvdHlwZS4kc3dhbD1yLmRlZmF1bHR9LHQuZGVmYXVsdD1pfSxmdW5jdGlvbihlLHQsbil7dD1lLmV4cG9ydHM9bigzKSgpLHQucHVzaChbZS5pZCwnYm9keS5zd2FsMi1zaG93bntvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItY29udGFpbmVyLGJvZHkuc3dhbDItaW9zZml4e3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtyaWdodDowfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt0b3A6MDtib3R0b206MDtwYWRkaW5nOjEwcHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt6LWluZGV4OjEwNjB9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRle3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXN9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1tb2RhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Zm9udC1mYW1pbHk6SGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Ym9yZGVyLXJhZGl1czo1cHg7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjphdXRvO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCV9LnN3YWwyLW1vZGFsOmZvY3Vze291dGxpbmU6bm9uZX0uc3dhbDItbW9kYWwuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItbW9kYWwgLnN3YWwyLXRpdGxle2NvbG9yOiM1OTU5NTk7Zm9udC1zaXplOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC13ZWlnaHQ6NjAwO3RleHQtdHJhbnNmb3JtOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXJ7bWFyZ2luLXRvcDoxNXB4fS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXI6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXXtvcGFjaXR5Oi40O2N1cnNvcjpuby1kcm9wfS5zd2FsMi1tb2RhbCAuc3dhbDItYnV0dG9uc3dyYXBwZXIuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjo0cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7cGFkZGluZzowO21hcmdpbjo3LjVweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Y29sb3I6dHJhbnNwYXJlbnQ7Y3Vyc29yOmRlZmF1bHQ7Ym9yZGVyLXJhZGl1czoxMDAlOy13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246cm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItbW9kYWwgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jYW5jZWx7bWFyZ2luLWxlZnQ6MzBweDttYXJnaW4tcmlnaHQ6MzBweH0uc3dhbDItbW9kYWwgLnN3YWwyLWJ1dHRvbnN3cmFwcGVyLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOmFmdGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2NvbnRlbnQ6XCJcIjttYXJnaW4tbGVmdDo1cHggMCAxNXB4O3ZlcnRpY2FsLWFsaWduOi0xcHg7aGVpZ2h0OjE1cHg7d2lkdGg6MTVweDtib3JkZXI6M3B4IHNvbGlkICM5OTk7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LWFuaW1hdGlvbjpyb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7YW5pbWF0aW9uOnJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbH0uc3dhbDItbW9kYWwgLnN3YWwyLXN0eWxlZHtib3JkZXI6MDtib3JkZXItcmFkaXVzOjNweDtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTdweDtmb250LXdlaWdodDo1MDA7bWFyZ2luOjE1cHggNXB4IDA7cGFkZGluZzoxMHB4IDMycHh9LnN3YWwyLW1vZGFsIC5zd2FsMi1pbWFnZXttYXJnaW46MjBweCBhdXRvO21heC13aWR0aDoxMDAlfS5zd2FsMi1tb2RhbCAuc3dhbDItY2xvc2V7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MDttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MzhweDtoZWlnaHQ6NDBweDtmb250LXNpemU6MzZweDtsaW5lLWhlaWdodDo0MHB4O2ZvbnQtZmFtaWx5OnNlcmlmO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6OHB4O2N1cnNvcjpwb2ludGVyO2NvbG9yOiNjY2M7dHJhbnNpdGlvbjpjb2xvciAuMXMgZWFzZX0uc3dhbDItbW9kYWwgLnN3YWwyLWNsb3NlOmhvdmVye2NvbG9yOiNkNTV9LnN3YWwyLW1vZGFsPi5zd2FsMi1jaGVja2JveCwuc3dhbDItbW9kYWw+LnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsPi5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWw+LnN3YWwyLXJhZGlvLC5zd2FsMi1tb2RhbD4uc3dhbDItc2VsZWN0LC5zd2FsMi1tb2RhbD4uc3dhbDItdGV4dGFyZWF7ZGlzcGxheTpub25lfS5zd2FsMi1tb2RhbCAuc3dhbDItY29udGVudHtmb250LXNpemU6MThweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXdlaWdodDozMDA7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7bGluZS1oZWlnaHQ6bm9ybWFsO2NvbG9yOiM1NDU0NTQ7d29yZC13cmFwOmJyZWFrLXdvcmR9LnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveCwuc3dhbDItbW9kYWwgLnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXJhZGlvLC5zd2FsMi1tb2RhbCAuc3dhbDItc2VsZWN0LC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWF7bWFyZ2luOjIwcHggYXV0b30uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGUsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhe3dpZHRoOjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZToxOHB4O2JvcmRlci1yYWRpdXM6M3B4O2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNik7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgYm94LXNoYWRvdyAuM3N9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQhaW1wb3J0YW50fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTpmb2N1cywuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0OmZvY3VzLC5zd2FsMi1tb2RhbCAuc3dhbDItdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTpub25lO2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtib3gtc2hhZG93OjAgMCAzcHggI2M0ZTZmNX0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGU6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye3RyYW5zaXRpb246b3BhY2l0eSAuM3MgZWFzZSAuMDNzO29wYWNpdHk6Ljh9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGVhc2UgLjAzcztvcGFjaXR5Oi44fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTpmb2N1czo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IC4zcyBlYXNlIC4wM3M7b3BhY2l0eTouOH0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNlNmU2ZTZ9LnN3YWwyLW1vZGFsIC5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItbW9kYWwgLnN3YWwyLXRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojZTZlNmU2fS5zd2FsMi1tb2RhbCAuc3dhbDItZmlsZTo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2U2ZTZlNn0uc3dhbDItbW9kYWwgLnN3YWwyLXJhbmdlIGlucHV0e2Zsb2F0OmxlZnQ7d2lkdGg6ODAlfS5zd2FsMi1tb2RhbCAuc3dhbDItcmFuZ2Ugb3V0cHV0e2Zsb2F0OnJpZ2h0O3dpZHRoOjIwJTtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLW1vZGFsIC5zd2FsMi1yYW5nZSBpbnB1dCwuc3dhbDItbW9kYWwgLnN3YWwyLXJhbmdlIG91dHB1dHtoZWlnaHQ6NDNweDtsaW5lLWhlaWdodDo0M3B4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXJnaW46MjBweCBhdXRvO3BhZGRpbmc6MH0uc3dhbDItbW9kYWwgLnN3YWwyLWlucHV0e2hlaWdodDo0M3B4O3BhZGRpbmc6MCAxMnB4fS5zd2FsMi1tb2RhbCAuc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxNTBweH0uc3dhbDItbW9kYWwgLnN3YWwyLWZpbGV7Zm9udC1zaXplOjIwcHh9LnN3YWwyLW1vZGFsIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6MTA4cHg7cGFkZGluZzoxMnB4fS5zd2FsMi1tb2RhbCAuc3dhbDItc2VsZWN0e2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOmluaGVyaXQ7cGFkZGluZzo1cHggMTBweDttaW4td2lkdGg6NDAlO21heC13aWR0aDoxMDAlfS5zd2FsMi1tb2RhbCAuc3dhbDItcmFkaW97Ym9yZGVyOjB9LnN3YWwyLW1vZGFsIC5zd2FsMi1yYWRpbyBsYWJlbDpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDoyMHB4fS5zd2FsMi1tb2RhbCAuc3dhbDItcmFkaW8gaW5wdXQsLnN3YWwyLW1vZGFsIC5zd2FsMi1yYWRpbyBzcGFue3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3dhbDItbW9kYWwgLnN3YWwyLXJhZGlvIGlucHV0e21hcmdpbjowIDNweCAwIDB9LnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveHtjb2xvcjojNTQ1NDU0fS5zd2FsMi1tb2RhbCAuc3dhbDItY2hlY2tib3ggaW5wdXQsLnN3YWwyLW1vZGFsIC5zd2FsMi1jaGVja2JveCBzcGFue3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uc3dhbDItbW9kYWwgLnN3YWwyLXZhbGlkYXRpb25lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOiNmMGYwZjA7bWFyZ2luOjAgLTIwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MTBweDtjb2xvcjpncmF5O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjMwMDtkaXNwbGF5Om5vbmV9LnN3YWwyLW1vZGFsIC5zd2FsMi12YWxpZGF0aW9uZXJyb3I6YmVmb3Jle2NvbnRlbnQ6XCIhXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOiNlYTdkN2Q7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyNHB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1yaWdodDoxMHB4fUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpLCgtbXMtaGlnaC1jb250cmFzdDpub25lKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fS5zd2FsMi1pY29ue3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7Ym9yZGVyOjRweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTttYXJnaW46MjBweCBhdXRvIDMwcHg7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1pY29uLnN3YWwyLWVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6NXB4O3dpZHRoOjQ3cHg7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2Rpc3BsYXk6YmxvY2s7dG9wOjM3cHg7Ym9yZGVyLXJhZGl1czoycHh9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRdey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7bGVmdDoxN3B4fS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3JpZ2h0OjE2cHh9LnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojZjhiYjg2O2JvcmRlci1jb2xvcjojZmFjZWE4fS5zd2FsMi1pY29uLnN3YWwyLWluZm8sLnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tmb250LXNpemU6NjBweDtsaW5lLWhlaWdodDo4MHB4O3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1pY29uLnN3YWwyLWluZm97Zm9udC1mYW1pbHk6T3BlbiBTYW5zLHNhbnMtc2VyaWY7Y29sb3I6IzNmYzNlZTtib3JkZXItY29sb3I6IzlkZTBmNn0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbntmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtjb2xvcjojODdhZGJkO2JvcmRlci1jb2xvcjojYzlkYWUxO2ZvbnQtc2l6ZTo2MHB4O2xpbmUtaGVpZ2h0OjgwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLWljb24uc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2MHB4O2hlaWdodDoxMjBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXtib3JkZXItcmFkaXVzOjEyMHB4IDAgMCAxMjBweDt0b3A6LTdweDtsZWZ0Oi0zM3B4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4O3RyYW5zZm9ybS1vcmlnaW46NjBweCA2MHB4fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17Ym9yZGVyLXJhZGl1czowIDEyMHB4IDEyMHB4IDA7dG9wOi0xMXB4O2xlZnQ6MzBweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgNjBweDt0cmFuc2Zvcm0tb3JpZ2luOjAgNjBweH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6NHB4IHNvbGlkIGhzbGEoOTgsNTUlLDY5JSwuMik7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNpemluZzpjb250ZW50LWJveDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi00cHg7dG9wOi00cHg7ei1pbmRleDoyfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3dpZHRoOjdweDtoZWlnaHQ6OTBweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjI4cHg7dG9wOjhweDt6LWluZGV4OjE7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDo1cHg7YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2O2Rpc3BsYXk6YmxvY2s7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3dpZHRoOjI1cHg7bGVmdDoxNHB4O3RvcDo0NnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItcHJvZ3Jlc3NzdGVwc3tmb250LXdlaWdodDo2MDA7bWFyZ2luOjAgMCAyMHB4O3BhZGRpbmc6MH0uc3dhbDItcHJvZ3Jlc3NzdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NjaXJjbGV7YmFja2dyb3VuZDojMzA4NWQ2O2JvcmRlci1yYWRpdXM6MmVtO2NvbG9yOiNmZmY7aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO3otaW5kZXg6MjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcHtiYWNrZ3JvdW5kOiMzMDg1ZDZ9LnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcH4uc3dhbDItcHJvZ3Jlc3NjaXJjbGUsLnN3YWwyLXByb2dyZXNzc3RlcHMgLnN3YWwyLXByb2dyZXNzY2lyY2xlLnN3YWwyLWFjdGl2ZXByb2dyZXNzc3RlcH4uc3dhbDItcHJvZ3Jlc3NsaW5le2JhY2tncm91bmQ6I2FkZDhlNn0uc3dhbDItcHJvZ3Jlc3NzdGVwcyAuc3dhbDItcHJvZ3Jlc3NsaW5le2JhY2tncm91bmQ6IzMwODVkNjtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O3otaW5kZXg6MTB9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fUAtd2Via2l0LWtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzaG93U3dlZXRBbGVydHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGhpZGVTd2VldEFsZXJ0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX0uc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzaG93U3dlZXRBbGVydCAuM3M7YW5pbWF0aW9uOnNob3dTd2VldEFsZXJ0IC4zc30uc3dhbDItc2hvdy5zd2FsMi1ub2FuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfS5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOmhpZGVTd2VldEFsZXJ0IC4xNXMgZm9yd2FyZHM7YW5pbWF0aW9uOmhpZGVTd2VldEFsZXJ0IC4xNXMgZm9yd2FyZHN9LnN3YWwyLWhpZGUuc3dhbDItbm9hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXRpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUBrZXlmcmFtZXMgYW5pbWF0ZS1zdWNjZXNzLXRpcHswJXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTU0JXt3aWR0aDowO2xlZnQ6MXB4O3RvcDoxOXB4fTcwJXt3aWR0aDo1MHB4O2xlZnQ6LThweDt0b3A6MzdweH04NCV7d2lkdGg6MTdweDtsZWZ0OjIxcHg7dG9wOjQ4cHh9dG97d2lkdGg6MjVweDtsZWZ0OjE0cHg7dG9wOjQ1cHh9fUAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLXN1Y2Nlc3MtbG9uZ3swJXt3aWR0aDowO3JpZ2h0OjQ2cHg7dG9wOjU0cHh9NjUle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH04NCV7d2lkdGg6NTVweDtyaWdodDowO3RvcDozNXB4fXRve3dpZHRoOjQ3cHg7cmlnaHQ6OHB4O3RvcDozOHB4fX1Aa2V5ZnJhbWVzIGFuaW1hdGUtc3VjY2Vzcy1sb25nezAle3dpZHRoOjA7cmlnaHQ6NDZweDt0b3A6NTRweH02NSV7d2lkdGg6MDtyaWdodDo0NnB4O3RvcDo1NHB4fTg0JXt3aWR0aDo1NXB4O3JpZ2h0OjA7dG9wOjM1cHh9dG97d2lkdGg6NDdweDtyaWdodDo4cHg7dG9wOjM4cHh9fUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyByb3RhdGVQbGFjZWhvbGRlcnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHstd2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtdGlwIC43NXM7YW5pbWF0aW9uOmFuaW1hdGUtc3VjY2Vzcy10aXAgLjc1c30uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzO2FuaW1hdGlvbjphbmltYXRlLXN1Y2Nlc3MtbG9uZyAuNzVzfS5zd2FsMi1zdWNjZXNzLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHR7LXdlYmtpdC1hbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbjthbmltYXRpb246cm90YXRlUGxhY2Vob2xkZXIgNC4yNXMgZWFzZS1pbn1ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS1lcnJvci1pY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBhbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMGRlZyk7b3BhY2l0eToxfX0uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uey13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUtZXJyb3ItaWNvbiAuNXM7YW5pbWF0aW9uOmFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9QC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUteC1tYXJrezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO21hcmdpbi10b3A6MjZweDtvcGFjaXR5OjB9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KTttYXJnaW4tdG9wOi02cHh9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO21hcmdpbi10b3A6MDtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYW5pbWF0ZS14LW1hcmt7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7bWFyZ2luLXRvcDoyNnB4O29wYWNpdHk6MH04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpO21hcmdpbi10b3A6LTZweH10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7bWFyZ2luLXRvcDowO29wYWNpdHk6MX19LnN3YWwyLWFuaW1hdGUteC1tYXJrey13ZWJraXQtYW5pbWF0aW9uOmFuaW1hdGUteC1tYXJrIC41czthbmltYXRpb246YW5pbWF0ZS14LW1hcmsgLjVzfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUtbG9hZGluZ3swJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIHJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fScsXCJcIl0pfSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG49dGhpc1t0XTtuWzJdP2UucHVzaChcIkBtZWRpYSBcIituWzJdK1wie1wiK25bMV0rXCJ9XCIpOmUucHVzaChuWzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG89e30sYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgcj10aGlzW2FdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiByJiYob1tyXT0hMCl9Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGk9dFthXTtcIm51bWJlclwiPT10eXBlb2YgaVswXSYmb1tpWzBdXXx8KG4mJiFpWzJdP2lbMl09bjpuJiYoaVsyXT1cIihcIitpWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChpKSl9fSxlfX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKyl7dmFyIG89ZVtuXSxhPWZbby5pZF07aWYoYSl7YS5yZWZzKys7Zm9yKHZhciByPTA7cjxhLnBhcnRzLmxlbmd0aDtyKyspYS5wYXJ0c1tyXShvLnBhcnRzW3JdKTtmb3IoO3I8by5wYXJ0cy5sZW5ndGg7cisrKWEucGFydHMucHVzaChjKG8ucGFydHNbcl0sdCkpfWVsc2V7Zm9yKHZhciBpPVtdLHI9MDtyPG8ucGFydHMubGVuZ3RoO3IrKylpLnB1c2goYyhvLnBhcnRzW3JdLHQpKTtmW28uaWRdPXtpZDpvLmlkLHJlZnM6MSxwYXJ0czppfX19fWZ1bmN0aW9uIGEoZSl7Zm9yKHZhciB0PVtdLG49e30sbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgYT1lW29dLHI9YVswXSxpPWFbMV0scz1hWzJdLGw9YVszXSxjPXtjc3M6aSxtZWRpYTpzLHNvdXJjZU1hcDpsfTtuW3JdP25bcl0ucGFydHMucHVzaChjKTp0LnB1c2gobltyXT17aWQ6cixwYXJ0czpbY119KX1yZXR1cm4gdH1mdW5jdGlvbiByKGUsdCl7dmFyIG49ZygpLG89eFt4Lmxlbmd0aC0xXTtpZihcInRvcFwiPT09ZS5pbnNlcnRBdClvP28ubmV4dFNpYmxpbmc/bi5pbnNlcnRCZWZvcmUodCxvLm5leHRTaWJsaW5nKTpuLmFwcGVuZENoaWxkKHQpOm4uaW5zZXJ0QmVmb3JlKHQsbi5maXJzdENoaWxkKSx4LnB1c2godCk7ZWxzZXtpZihcImJvdHRvbVwiIT09ZS5pbnNlcnRBdCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7bi5hcHBlbmRDaGlsZCh0KX19ZnVuY3Rpb24gaShlKXtlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSk7dmFyIHQ9eC5pbmRleE9mKGUpO3Q+PTAmJnguc3BsaWNlKHQsMSl9ZnVuY3Rpb24gcyhlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQudHlwZT1cInRleHQvY3NzXCIscihlLHQpLHR9ZnVuY3Rpb24gbChlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gdC5yZWw9XCJzdHlsZXNoZWV0XCIscihlLHQpLHR9ZnVuY3Rpb24gYyhlLHQpe3ZhciBuLG8sYTtpZih0LnNpbmdsZXRvbil7dmFyIHI9YisrO249aHx8KGg9cyh0KSksbz11LmJpbmQobnVsbCxuLHIsITEpLGE9dS5iaW5kKG51bGwsbixyLCEwKX1lbHNlIGUuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49bCh0KSxvPXAuYmluZChudWxsLG4pLGE9ZnVuY3Rpb24oKXtpKG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49cyh0KSxvPWQuYmluZChudWxsLG4pLGE9ZnVuY3Rpb24oKXtpKG4pfSk7cmV0dXJuIG8oZSksZnVuY3Rpb24odCl7aWYodCl7aWYodC5jc3M9PT1lLmNzcyYmdC5tZWRpYT09PWUubWVkaWEmJnQuc291cmNlTWFwPT09ZS5zb3VyY2VNYXApcmV0dXJuO28oZT10KX1lbHNlIGEoKX19ZnVuY3Rpb24gdShlLHQsbixvKXt2YXIgYT1uP1wiXCI6by5jc3M7aWYoZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXYodCxhKTtlbHNle3ZhciByPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGEpLGk9ZS5jaGlsZE5vZGVzO2lbdF0mJmUucmVtb3ZlQ2hpbGQoaVt0XSksaS5sZW5ndGg/ZS5pbnNlcnRCZWZvcmUocixpW3RdKTplLmFwcGVuZENoaWxkKHIpfX1mdW5jdGlvbiBkKGUsdCl7dmFyIG49dC5jc3Msbz10Lm1lZGlhO2lmKG8mJmUuc2V0QXR0cmlidXRlKFwibWVkaWFcIixvKSxlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fWZ1bmN0aW9uIHAoZSx0KXt2YXIgbj10LmNzcyxvPXQuc291cmNlTWFwO28mJihuKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSkrXCIgKi9cIik7dmFyIGE9bmV3IEJsb2IoW25dLHt0eXBlOlwidGV4dC9jc3NcIn0pLHI9ZS5ocmVmO2UuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGEpLHImJlVSTC5yZXZva2VPYmplY3RVUkwocil9dmFyIGY9e30sbT1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgdCYmKHQ9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpLHR9fSx3PW0oZnVuY3Rpb24oKXtyZXR1cm4vbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSl9KSxnPW0oZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuaGVhZHx8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdfSksaD1udWxsLGI9MCx4PVtdO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3Q9dHx8e30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQuc2luZ2xldG9uJiYodC5zaW5nbGV0b249dygpKSxcInVuZGVmaW5lZFwiPT10eXBlb2YgdC5pbnNlcnRBdCYmKHQuaW5zZXJ0QXQ9XCJib3R0b21cIik7dmFyIG49YShlKTtyZXR1cm4gbyhuLHQpLGZ1bmN0aW9uKGUpe2Zvcih2YXIgcj1bXSxpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBzPW5baV0sbD1mW3MuaWRdO2wucmVmcy0tLHIucHVzaChsKX1pZihlKXt2YXIgYz1hKGUpO28oYyx0KX1mb3IodmFyIGk9MDtpPHIubGVuZ3RoO2krKyl7dmFyIGw9cltpXTtpZigwPT09bC5yZWZzKXtmb3IodmFyIHU9MDt1PGwucGFydHMubGVuZ3RoO3UrKylsLnBhcnRzW3VdKCk7ZGVsZXRlIGZbbC5pZF19fX19O3ZhciB2PWZ1bmN0aW9uKCl7dmFyIGU9W107cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIGVbdF09bixlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfX0oKX0sZnVuY3Rpb24oZSx0LG4pe3ZhciBvPW4oMik7XCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPVtbZS5pZCxvLFwiXCJdXSk7big0KShvLHt9KTtvLmxvY2FscyYmKGUuZXhwb3J0cz1vLmxvY2Fscyl9LGZ1bmN0aW9uKGUsdCxuKXsvKiFcblx0ICogc3dlZXRhbGVydDIgdjYuNi42XG5cdCAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblx0ICovXG4hZnVuY3Rpb24odCxuKXtlLmV4cG9ydHM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e3RpdGxlOlwiXCIsdGl0bGVUZXh0OlwiXCIsdGV4dDpcIlwiLGh0bWw6XCJcIix0eXBlOm51bGwsY3VzdG9tQ2xhc3M6XCJcIix0YXJnZXQ6XCJib2R5XCIsYW5pbWF0aW9uOiEwLGFsbG93T3V0c2lkZUNsaWNrOiEwLGFsbG93RXNjYXBlS2V5OiEwLGFsbG93RW50ZXJLZXk6ITAsc2hvd0NvbmZpcm1CdXR0b246ITAsc2hvd0NhbmNlbEJ1dHRvbjohMSxwcmVDb25maXJtOm51bGwsY29uZmlybUJ1dHRvblRleHQ6XCJPS1wiLGNvbmZpcm1CdXR0b25Db2xvcjpcIiMzMDg1ZDZcIixjb25maXJtQnV0dG9uQ2xhc3M6bnVsbCxjYW5jZWxCdXR0b25UZXh0OlwiQ2FuY2VsXCIsY2FuY2VsQnV0dG9uQ29sb3I6XCIjYWFhXCIsY2FuY2VsQnV0dG9uQ2xhc3M6bnVsbCxidXR0b25zU3R5bGluZzohMCxyZXZlcnNlQnV0dG9uczohMSxmb2N1c0NhbmNlbDohMSxzaG93Q2xvc2VCdXR0b246ITEsc2hvd0xvYWRlck9uQ29uZmlybTohMSxpbWFnZVVybDpudWxsLGltYWdlV2lkdGg6bnVsbCxpbWFnZUhlaWdodDpudWxsLGltYWdlQ2xhc3M6bnVsbCx0aW1lcjpudWxsLHdpZHRoOjUwMCxwYWRkaW5nOjIwLGJhY2tncm91bmQ6XCIjZmZmXCIsaW5wdXQ6bnVsbCxpbnB1dFBsYWNlaG9sZGVyOlwiXCIsaW5wdXRWYWx1ZTpcIlwiLGlucHV0T3B0aW9uczp7fSxpbnB1dEF1dG9UcmltOiEwLGlucHV0Q2xhc3M6bnVsbCxpbnB1dEF0dHJpYnV0ZXM6e30saW5wdXRWYWxpZGF0b3I6bnVsbCxwcm9ncmVzc1N0ZXBzOltdLGN1cnJlbnRQcm9ncmVzc1N0ZXA6bnVsbCxwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6XCI0MHB4XCIsb25PcGVuOm51bGwsb25DbG9zZTpudWxsLHVzZVJlamVjdGlvbnM6ITB9LHQ9XCJzd2FsMi1cIixuPWZ1bmN0aW9uKGUpe3ZhciBuPXt9O2Zvcih2YXIgbyBpbiBlKW5bZVtvXV09dCtlW29dO3JldHVybiBufSxvPW4oW1wiY29udGFpbmVyXCIsXCJzaG93blwiLFwiaW9zZml4XCIsXCJtb2RhbFwiLFwib3ZlcmxheVwiLFwiZmFkZVwiLFwic2hvd1wiLFwiaGlkZVwiLFwibm9hbmltYXRpb25cIixcImNsb3NlXCIsXCJ0aXRsZVwiLFwiY29udGVudFwiLFwiYnV0dG9uc3dyYXBwZXJcIixcImNvbmZpcm1cIixcImNhbmNlbFwiLFwiaWNvblwiLFwiaW1hZ2VcIixcImlucHV0XCIsXCJmaWxlXCIsXCJyYW5nZVwiLFwic2VsZWN0XCIsXCJyYWRpb1wiLFwiY2hlY2tib3hcIixcInRleHRhcmVhXCIsXCJpbnB1dGVycm9yXCIsXCJ2YWxpZGF0aW9uZXJyb3JcIixcInByb2dyZXNzc3RlcHNcIixcImFjdGl2ZXByb2dyZXNzc3RlcFwiLFwicHJvZ3Jlc3NjaXJjbGVcIixcInByb2dyZXNzbGluZVwiLFwibG9hZGluZ1wiLFwic3R5bGVkXCJdKSxhPW4oW1wic3VjY2Vzc1wiLFwid2FybmluZ1wiLFwiaW5mb1wiLFwicXVlc3Rpb25cIixcImVycm9yXCJdKSxyPWZ1bmN0aW9uKGUsdCl7ZT1TdHJpbmcoZSkucmVwbGFjZSgvW14wLTlhLWZdL2dpLFwiXCIpLGUubGVuZ3RoPDYmJihlPWVbMF0rZVswXStlWzFdK2VbMV0rZVsyXStlWzJdKSx0PXR8fDA7Zm9yKHZhciBuPVwiI1wiLG89MDtvPDM7bysrKXt2YXIgYT1wYXJzZUludChlLnN1YnN0cigyKm8sMiksMTYpO2E9TWF0aC5yb3VuZChNYXRoLm1pbihNYXRoLm1heCgwLGErYSp0KSwyNTUpKS50b1N0cmluZygxNiksbis9KFwiMDBcIithKS5zdWJzdHIoYS5sZW5ndGgpfXJldHVybiBufSxpPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQuaW5kZXhPZihlW25dKT09PS0xJiZ0LnB1c2goZVtuXSk7cmV0dXJuIHR9LHM9e3ByZXZpb3VzV2luZG93S2V5RG93bjpudWxsLHByZXZpb3VzQWN0aXZlRWxlbWVudDpudWxsLHByZXZpb3VzQm9keVBhZGRpbmc6bnVsbH0sbD1mdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgZG9jdW1lbnQpcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemVcIik7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt0LmNsYXNzTmFtZT1vLmNvbnRhaW5lcix0LmlubmVySFRNTD1jO3ZhciBuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS50YXJnZXQpO258fChjb25zb2xlLndhcm4oXCJTd2VldEFsZXJ0MjogQ2FuJ3QgZmluZCB0aGUgdGFyZ2V0IFxcXCJcIitlLnRhcmdldCsnXCInKSxuPWRvY3VtZW50LmJvZHkpLG4uYXBwZW5kQ2hpbGQodCk7dmFyIGE9ZCgpLHI9UChhLG8uaW5wdXQpLGk9UChhLG8uZmlsZSkscz1hLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5yYW5nZStcIiBpbnB1dFwiKSxsPWEucXVlcnlTZWxlY3RvcihcIi5cIitvLnJhbmdlK1wiIG91dHB1dFwiKSx1PVAoYSxvLnNlbGVjdCkscD1hLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5jaGVja2JveCtcIiBpbnB1dFwiKSxmPVAoYSxvLnRleHRhcmVhKTtyZXR1cm4gci5vbmlucHV0PWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpfSxyLm9ua2V5ZG93bj1mdW5jdGlvbih0KXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7MTM9PT10LmtleUNvZGUmJmUuYWxsb3dFbnRlcktleSYmKHQuc3RvcFByb3BhZ2F0aW9uKCksWS5jbGlja0NvbmZpcm0oKSl9LDApfSxpLm9uY2hhbmdlPWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpfSxzLm9uaW5wdXQ9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCksbC52YWx1ZT1zLnZhbHVlfSxzLm9uY2hhbmdlPWZ1bmN0aW9uKCl7WS5yZXNldFZhbGlkYXRpb25FcnJvcigpLHMucHJldmlvdXNTaWJsaW5nLnZhbHVlPXMudmFsdWV9LHUub25jaGFuZ2U9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCl9LHAub25jaGFuZ2U9ZnVuY3Rpb24oKXtZLnJlc2V0VmFsaWRhdGlvbkVycm9yKCl9LGYub25pbnB1dD1mdW5jdGlvbigpe1kucmVzZXRWYWxpZGF0aW9uRXJyb3IoKX0sYX0sYz0oJ1xcbiA8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCInK28udGl0bGUrJ1wiIGFyaWEtZGVzY3JpYmVkYnk9XCInK28uY29udGVudCsnXCIgY2xhc3M9XCInK28ubW9kYWwrJ1wiIHRhYmluZGV4PVwiLTFcIj5cXG4gICA8dWwgY2xhc3M9XCInK28ucHJvZ3Jlc3NzdGVwcysnXCI+PC91bD5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5lcnJvcisnXCI+XFxuICAgICA8c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFya1wiPjxzcGFuIGNsYXNzPVwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XCI+PC9zcGFuPjwvc3Bhbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5xdWVzdGlvbisnXCI+PzwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XCInK28uaWNvbitcIiBcIithLndhcm5pbmcrJ1wiPiE8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmljb24rXCIgXCIrYS5pbmZvKydcIj5pPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cIicrby5pY29uK1wiIFwiK2Euc3VjY2VzcysnXCI+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcIj48L2Rpdj5cXG4gICAgIDxzcGFuIGNsYXNzPVwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ1wiPjwvc3Bhbj5cXG4gICAgIDxkaXYgY2xhc3M9XCJzd2FsMi1zdWNjZXNzLXJpbmdcIj48L2Rpdj4gPGRpdiBjbGFzcz1cInN3YWwyLXN1Y2Nlc3MtZml4XCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGltZyBjbGFzcz1cIicrby5pbWFnZSsnXCIgLz5cXG4gICA8aDIgY2xhc3M9XCInK28udGl0bGUrJ1wiIGlkPVwiJytvLnRpdGxlKydcIj48L2gyPlxcbiAgIDxkaXYgaWQ9XCInK28uY29udGVudCsnXCIgY2xhc3M9XCInK28uY29udGVudCsnXCI+PC9kaXY+XFxuICAgPGlucHV0IGNsYXNzPVwiJytvLmlucHV0KydcIiAvPlxcbiAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiJytvLmZpbGUrJ1wiIC8+XFxuICAgPGRpdiBjbGFzcz1cIicrby5yYW5nZSsnXCI+XFxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIC8+XFxuICAgPC9kaXY+XFxuICAgPHNlbGVjdCBjbGFzcz1cIicrby5zZWxlY3QrJ1wiPjwvc2VsZWN0PlxcbiAgIDxkaXYgY2xhc3M9XCInK28ucmFkaW8rJ1wiPjwvZGl2PlxcbiAgIDxsYWJlbCBmb3I9XCInK28uY2hlY2tib3grJ1wiIGNsYXNzPVwiJytvLmNoZWNrYm94KydcIj5cXG4gICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxcbiAgIDwvbGFiZWw+XFxuICAgPHRleHRhcmVhIGNsYXNzPVwiJytvLnRleHRhcmVhKydcIj48L3RleHRhcmVhPlxcbiAgIDxkaXYgY2xhc3M9XCInK28udmFsaWRhdGlvbmVycm9yKydcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVwiJytvLmJ1dHRvbnN3cmFwcGVyKydcIj5cXG4gICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJytvLmNvbmZpcm0rJ1wiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicrby5jYW5jZWwrJ1wiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJytvLmNsb3NlKydcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgdGhpcyBkaWFsb2dcIj7DlzwvYnV0dG9uPlxcbiA8L2Rpdj5cXG4nKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLFwiXCIpLHU9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiK28uY29udGFpbmVyKX0sZD1mdW5jdGlvbigpe3JldHVybiB1KCk/dSgpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIrby5tb2RhbCk6bnVsbH0scD1mdW5jdGlvbigpe3ZhciBlPWQoKTtyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK28uaWNvbil9LGY9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoKT91KCkucXVlcnlTZWxlY3RvcihcIi5cIitlKTpudWxsfSxtPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby50aXRsZSl9LHc9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmNvbnRlbnQpfSxnPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5pbWFnZSl9LGg9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmJ1dHRvbnN3cmFwcGVyKX0sYj1mdW5jdGlvbigpe3JldHVybiBmKG8ucHJvZ3Jlc3NzdGVwcyl9LHg9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLnZhbGlkYXRpb25lcnJvcil9LHY9ZnVuY3Rpb24oKXtyZXR1cm4gZihvLmNvbmZpcm0pfSx5PWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5jYW5jZWwpfSxrPWZ1bmN0aW9uKCl7cmV0dXJuIGYoby5jbG9zZSl9LEM9ZnVuY3Rpb24oZSl7dmFyIHQ9W3YoKSx5KCldO2UmJnQucmV2ZXJzZSgpO3ZhciBuPXQuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGQoKS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24sIGlucHV0Om5vdChbdHlwZT1oaWRkZW5dKSwgdGV4dGFyZWEsIHNlbGVjdCwgYSwgKlt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKScpKSk7cmV0dXJuIGkobil9LFM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4hIWUuY2xhc3NMaXN0JiZlLmNsYXNzTGlzdC5jb250YWlucyh0KX0sQT1mdW5jdGlvbihlKXtpZihlLmZvY3VzKCksXCJmaWxlXCIhPT1lLnR5cGUpe3ZhciB0PWUudmFsdWU7ZS52YWx1ZT1cIlwiLGUudmFsdWU9dH19LEU9ZnVuY3Rpb24oZSx0KXtpZihlJiZ0KXt2YXIgbj10LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO24uZm9yRWFjaChmdW5jdGlvbih0KXtlLmNsYXNzTGlzdC5hZGQodCl9KX19LEI9ZnVuY3Rpb24oZSx0KXtpZihlJiZ0KXt2YXIgbj10LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO24uZm9yRWFjaChmdW5jdGlvbih0KXtlLmNsYXNzTGlzdC5yZW1vdmUodCl9KX19LFA9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPGUuY2hpbGROb2Rlcy5sZW5ndGg7bisrKWlmKFMoZS5jaGlsZE5vZGVzW25dLHQpKXJldHVybiBlLmNoaWxkTm9kZXNbbl19LEw9ZnVuY3Rpb24oZSx0KXt0fHwodD1cImJsb2NrXCIpLGUuc3R5bGUub3BhY2l0eT1cIlwiLGUuc3R5bGUuZGlzcGxheT10fSxNPWZ1bmN0aW9uKGUpe2Uuc3R5bGUub3BhY2l0eT1cIlwiLGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn0sVD1mdW5jdGlvbihlKXtmb3IoO2UuZmlyc3RDaGlsZDspZS5yZW1vdmVDaGlsZChlLmZpcnN0Q2hpbGQpfSxPPWZ1bmN0aW9uKGUpe3JldHVybiBlLm9mZnNldFdpZHRofHxlLm9mZnNldEhlaWdodHx8ZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aH0scT1mdW5jdGlvbihlLHQpe2Uuc3R5bGUucmVtb3ZlUHJvcGVydHk/ZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh0KTplLnN0eWxlLnJlbW92ZUF0dHJpYnV0ZSh0KX0sSD1mdW5jdGlvbihlKXtpZighTyhlKSlyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBNb3VzZUV2ZW50KXt2YXIgdD1uZXcgTW91c2VFdmVudChcImNsaWNrXCIse3ZpZXc6d2luZG93LGJ1YmJsZXM6ITEsY2FuY2VsYWJsZTohMH0pO2UuZGlzcGF0Y2hFdmVudCh0KX1lbHNlIGlmKGRvY3VtZW50LmNyZWF0ZUV2ZW50KXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO24uaW5pdEV2ZW50KFwiY2xpY2tcIiwhMSwhMSksZS5kaXNwYXRjaEV2ZW50KG4pfWVsc2UgZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3Q/ZS5maXJlRXZlbnQoXCJvbmNsaWNrXCIpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub25jbGljayYmZS5vbmNsaWNrKCl9LFY9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9e1dlYmtpdEFuaW1hdGlvbjpcIndlYmtpdEFuaW1hdGlvbkVuZFwiLE9BbmltYXRpb246XCJvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIixtc0FuaW1hdGlvbjpcIk1TQW5pbWF0aW9uRW5kXCIsYW5pbWF0aW9uOlwiYW5pbWF0aW9uZW5kXCJ9O2Zvcih2YXIgbiBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkobikmJnZvaWQgMCE9PWUuc3R5bGVbbl0pcmV0dXJuIHRbbl07cmV0dXJuITF9KCksaj1mdW5jdGlvbigpe2lmKHdpbmRvdy5vbmtleWRvd249cy5wcmV2aW91c1dpbmRvd0tleURvd24scy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQmJnMucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKXt2YXIgZT13aW5kb3cuc2Nyb2xsWCx0PXdpbmRvdy5zY3JvbGxZO3MucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCksZSYmdCYmd2luZG93LnNjcm9sbFRvKGUsdCl9fSx6PWZ1bmN0aW9uKCl7dmFyIGU9XCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7aWYoZSlyZXR1cm4gMDt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3Quc3R5bGUud2lkdGg9XCI1MHB4XCIsdC5zdHlsZS5oZWlnaHQ9XCI1MHB4XCIsdC5zdHlsZS5vdmVyZmxvdz1cInNjcm9sbFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCk7dmFyIG49dC5vZmZzZXRXaWR0aC10LmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpLG59LE49ZnVuY3Rpb24oZSx0KXt2YXIgbj12b2lkIDA7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG89ZnVuY3Rpb24oKXtuPW51bGwsZSgpfTtjbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KG8sdCl9fSxSPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0sST1VKHt9LGUpLEs9W10sRD12b2lkIDAsVz1mdW5jdGlvbih0KXt2YXIgbj1kKCl8fGwodCk7Zm9yKHZhciByIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShyKXx8XCJleHRyYVBhcmFtc1wiPT09cnx8Y29uc29sZS53YXJuKCdTd2VldEFsZXJ0MjogVW5rbm93biBwYXJhbWV0ZXIgXCInK3IrJ1wiJyk7bi5zdHlsZS53aWR0aD1cIm51bWJlclwiPT10eXBlb2YgdC53aWR0aD90LndpZHRoK1wicHhcIjp0LndpZHRoLG4uc3R5bGUucGFkZGluZz10LnBhZGRpbmcrXCJweFwiLG4uc3R5bGUuYmFja2dyb3VuZD10LmJhY2tncm91bmQ7Zm9yKHZhciBpPW4ucXVlcnlTZWxlY3RvckFsbChcIltjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4XCIpLHM9MDtzPGkubGVuZ3RoO3MrKylpW3NdLnN0eWxlLmJhY2tncm91bmQ9dC5iYWNrZ3JvdW5kO3ZhciBjPW0oKSx1PXcoKSxmPWgoKSx4PXYoKSxDPXkoKSxTPWsoKTtpZih0LnRpdGxlVGV4dD9jLmlubmVyVGV4dD10LnRpdGxlVGV4dDpjLmlubmVySFRNTD10LnRpdGxlLnNwbGl0KFwiXFxuXCIpLmpvaW4oXCI8YnIgLz5cIiksdC50ZXh0fHx0Lmh0bWwpe2lmKFwib2JqZWN0XCI9PT1SKHQuaHRtbCkpaWYodS5pbm5lckhUTUw9XCJcIiwwIGluIHQuaHRtbClmb3IodmFyIEE9MDtBIGluIHQuaHRtbDtBKyspdS5hcHBlbmRDaGlsZCh0Lmh0bWxbQV0uY2xvbmVOb2RlKCEwKSk7ZWxzZSB1LmFwcGVuZENoaWxkKHQuaHRtbC5jbG9uZU5vZGUoITApKTtlbHNlIHQuaHRtbD91LmlubmVySFRNTD10Lmh0bWw6dC50ZXh0JiYodS50ZXh0Q29udGVudD10LnRleHQpO0wodSl9ZWxzZSBNKHUpO3Quc2hvd0Nsb3NlQnV0dG9uP0woUyk6TShTKSxuLmNsYXNzTmFtZT1vLm1vZGFsLHQuY3VzdG9tQ2xhc3MmJkUobix0LmN1c3RvbUNsYXNzKTt2YXIgUD1iKCksTz1wYXJzZUludChudWxsPT09dC5jdXJyZW50UHJvZ3Jlc3NTdGVwP1kuZ2V0UXVldWVTdGVwKCk6dC5jdXJyZW50UHJvZ3Jlc3NTdGVwLDEwKTt0LnByb2dyZXNzU3RlcHMubGVuZ3RoPyhMKFApLFQoUCksTz49dC5wcm9ncmVzc1N0ZXBzLmxlbmd0aCYmY29uc29sZS53YXJuKFwiU3dlZXRBbGVydDI6IEludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMClcIiksdC5wcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24oZSxuKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7aWYoRShhLG8ucHJvZ3Jlc3NjaXJjbGUpLGEuaW5uZXJIVE1MPWUsbj09PU8mJkUoYSxvLmFjdGl2ZXByb2dyZXNzc3RlcCksUC5hcHBlbmRDaGlsZChhKSxuIT09dC5wcm9ncmVzc1N0ZXBzLmxlbmd0aC0xKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7RShyLG8ucHJvZ3Jlc3NsaW5lKSxyLnN0eWxlLndpZHRoPXQucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlLFAuYXBwZW5kQ2hpbGQocil9fSkpOk0oUCk7Zm9yKHZhciBIPXAoKSxWPTA7VjxILmxlbmd0aDtWKyspTShIW1ZdKTtpZih0LnR5cGUpe3ZhciBqPSExO2Zvcih2YXIgeiBpbiBhKWlmKHQudHlwZT09PXope2o9ITA7YnJlYWt9aWYoIWopcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJTd2VldEFsZXJ0MjogVW5rbm93biBhbGVydCB0eXBlOiBcIit0LnR5cGUpLCExO3ZhciBOPW4ucXVlcnlTZWxlY3RvcihcIi5cIitvLmljb24rXCIuXCIrYVt0LnR5cGVdKTtpZihMKE4pLHQuYW5pbWF0aW9uKXN3aXRjaCh0LnR5cGUpe2Nhc2VcInN1Y2Nlc3NcIjpFKE4sXCJzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvblwiKSxFKE4ucXVlcnlTZWxlY3RvcihcIi5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwXCIpLFwic3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwXCIpLEUoTi5xdWVyeVNlbGVjdG9yKFwiLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXCIpLFwic3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ1wiKTticmVhaztjYXNlXCJlcnJvclwiOkUoTixcInN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvblwiKSxFKE4ucXVlcnlTZWxlY3RvcihcIi5zd2FsMi14LW1hcmtcIiksXCJzd2FsMi1hbmltYXRlLXgtbWFya1wiKX19dmFyIFU9ZygpO3QuaW1hZ2VVcmw/KFUuc2V0QXR0cmlidXRlKFwic3JjXCIsdC5pbWFnZVVybCksTChVKSx0LmltYWdlV2lkdGg/VS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHQuaW1hZ2VXaWR0aCk6VS5yZW1vdmVBdHRyaWJ1dGUoXCJ3aWR0aFwiKSx0LmltYWdlSGVpZ2h0P1Uuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsdC5pbWFnZUhlaWdodCk6VS5yZW1vdmVBdHRyaWJ1dGUoXCJoZWlnaHRcIiksVS5jbGFzc05hbWU9by5pbWFnZSx0LmltYWdlQ2xhc3MmJkUoVSx0LmltYWdlQ2xhc3MpKTpNKFUpLHQuc2hvd0NhbmNlbEJ1dHRvbj9DLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIjpNKEMpLHQuc2hvd0NvbmZpcm1CdXR0b24/cSh4LFwiZGlzcGxheVwiKTpNKHgpLHQuc2hvd0NvbmZpcm1CdXR0b258fHQuc2hvd0NhbmNlbEJ1dHRvbj9MKGYpOk0oZikseC5pbm5lckhUTUw9dC5jb25maXJtQnV0dG9uVGV4dCxDLmlubmVySFRNTD10LmNhbmNlbEJ1dHRvblRleHQsdC5idXR0b25zU3R5bGluZyYmKHguc3R5bGUuYmFja2dyb3VuZENvbG9yPXQuY29uZmlybUJ1dHRvbkNvbG9yLEMuc3R5bGUuYmFja2dyb3VuZENvbG9yPXQuY2FuY2VsQnV0dG9uQ29sb3IpLHguY2xhc3NOYW1lPW8uY29uZmlybSxFKHgsdC5jb25maXJtQnV0dG9uQ2xhc3MpLEMuY2xhc3NOYW1lPW8uY2FuY2VsLEUoQyx0LmNhbmNlbEJ1dHRvbkNsYXNzKSx0LmJ1dHRvbnNTdHlsaW5nPyhFKHgsby5zdHlsZWQpLEUoQyxvLnN0eWxlZCkpOihCKHgsby5zdHlsZWQpLEIoQyxvLnN0eWxlZCkseC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9eC5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9eC5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIsQy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9Qy5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9Qy5zdHlsZS5ib3JkZXJSaWdodENvbG9yPVwiXCIpLHQuYW5pbWF0aW9uPT09ITA/QihuLG8ubm9hbmltYXRpb24pOkUobixvLm5vYW5pbWF0aW9uKX0sXz1mdW5jdGlvbihlLHQpe3ZhciBuPXUoKSxhPWQoKTtlPyhFKGEsby5zaG93KSxFKG4sby5mYWRlKSxCKGEsby5oaWRlKSk6QihhLG8uZmFkZSksTChhKSxuLnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLFYmJiFTKGEsby5ub2FuaW1hdGlvbik/YS5hZGRFdmVudExpc3RlbmVyKFYsZnVuY3Rpb24gZSgpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihWLGUpLG4uc3R5bGUub3ZlcmZsb3dZPVwiYXV0b1wifSk6bi5zdHlsZS5vdmVyZmxvd1k9XCJhdXRvXCIsRShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsby5zaG93biksRShkb2N1bWVudC5ib2R5LG8uc2hvd24pLEUobixvLnNob3duKSxYKCksWigpLHMucHJldmlvdXNBY3RpdmVFbGVtZW50PWRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsbnVsbCE9PXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGEpfSl9LFg9ZnVuY3Rpb24oKXtudWxsPT09cy5wcmV2aW91c0JvZHlQYWRkaW5nJiZkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodD53aW5kb3cuaW5uZXJIZWlnaHQmJihzLnByZXZpb3VzQm9keVBhZGRpbmc9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9eigpK1wicHhcIil9LCQ9ZnVuY3Rpb24oKXtudWxsIT09cy5wcmV2aW91c0JvZHlQYWRkaW5nJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9cy5wcmV2aW91c0JvZHlQYWRkaW5nLHMucHJldmlvdXNCb2R5UGFkZGluZz1udWxsKX0sWj1mdW5jdGlvbigpe3ZhciBlPS9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhd2luZG93Lk1TU3RyZWFtO2lmKGUmJiFTKGRvY3VtZW50LmJvZHksby5pb3NmaXgpKXt2YXIgdD1kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtkb2N1bWVudC5ib2R5LnN0eWxlLnRvcD10Ki0xK1wicHhcIixFKGRvY3VtZW50LmJvZHksby5pb3NmaXgpfX0sUT1mdW5jdGlvbigpe2lmKFMoZG9jdW1lbnQuYm9keSxvLmlvc2ZpeCkpe3ZhciBlPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLDEwKTtCKGRvY3VtZW50LmJvZHksby5pb3NmaXgpLGRvY3VtZW50LmJvZHkuc3R5bGUudG9wPVwiXCIsZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A9ZSotMX19LFk9ZnVuY3Rpb24gZSgpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49QXJyYXkodCksYT0wO2E8dDthKyspblthXT1hcmd1bWVudHNbYV07aWYodm9pZCAwPT09blswXSlyZXR1cm4gY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyIGV4cGVjdHMgYXQgbGVhc3QgMSBhdHRyaWJ1dGUhXCIpLCExO3ZhciBpPVUoe30sSSk7c3dpdGNoKFIoblswXSkpe2Nhc2VcInN0cmluZ1wiOmkudGl0bGU9blswXSxpLmh0bWw9blsxXSxpLnR5cGU9blsyXTticmVhaztjYXNlXCJvYmplY3RcIjpVKGksblswXSksaS5leHRyYVBhcmFtcz1uWzBdLmV4dHJhUGFyYW1zLFwiZW1haWxcIj09PWkuaW5wdXQmJm51bGw9PT1pLmlucHV0VmFsaWRhdG9yJiYoaS5pbnB1dFZhbGlkYXRvcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXt2YXIgbz0vXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLDZ9JC87by50ZXN0KGUpP3QoKTpuKFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzXCIpfSl9KSxcInVybFwiPT09aS5pbnB1dCYmbnVsbD09PWkuaW5wdXRWYWxpZGF0b3ImJihpLmlucHV0VmFsaWRhdG9yPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbih0LG4pe3ZhciBvPS9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDZ9XFxiKFstYS16QS1aMC05QDolXysufiM/JlxcL1xcLz1dKikkLztvLnRlc3QoZSk/dCgpOm4oXCJJbnZhbGlkIFVSTFwiKX0pfSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm4gY29uc29sZS5lcnJvcignU3dlZXRBbGVydDI6IFVuZXhwZWN0ZWQgdHlwZSBvZiBhcmd1bWVudCEgRXhwZWN0ZWQgXCJzdHJpbmdcIiBvciBcIm9iamVjdFwiLCBnb3QgJytSKG5bMF0pKSwhMX1XKGkpO3ZhciBsPXUoKSxjPWQoKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCxuKXtpLnRpbWVyJiYoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcInRpbWVyXCIpOnQoe2Rpc21pc3M6XCJ0aW1lclwifSl9LGkudGltZXIpKTt2YXIgYT1mdW5jdGlvbihlKXtpZihlPWV8fGkuaW5wdXQsIWUpcmV0dXJuIG51bGw7c3dpdGNoKGUpe2Nhc2VcInNlbGVjdFwiOmNhc2VcInRleHRhcmVhXCI6Y2FzZVwiZmlsZVwiOnJldHVybiBQKGMsb1tlXSk7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28uY2hlY2tib3grXCIgaW5wdXRcIik7Y2FzZVwicmFkaW9cIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFkaW8rXCIgaW5wdXQ6Y2hlY2tlZFwiKXx8Yy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFkaW8rXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIik7Y2FzZVwicmFuZ2VcIjpyZXR1cm4gYy5xdWVyeVNlbGVjdG9yKFwiLlwiK28ucmFuZ2UrXCIgaW5wdXRcIik7ZGVmYXVsdDpyZXR1cm4gUChjLG8uaW5wdXQpfX0scD1mdW5jdGlvbigpe3ZhciBlPWEoKTtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goaS5pbnB1dCl7Y2FzZVwiY2hlY2tib3hcIjpyZXR1cm4gZS5jaGVja2VkPzE6MDtjYXNlXCJyYWRpb1wiOnJldHVybiBlLmNoZWNrZWQ/ZS52YWx1ZTpudWxsO2Nhc2VcImZpbGVcIjpyZXR1cm4gZS5maWxlcy5sZW5ndGg/ZS5maWxlc1swXTpudWxsO2RlZmF1bHQ6cmV0dXJuIGkuaW5wdXRBdXRvVHJpbT9lLnZhbHVlLnRyaW0oKTplLnZhbHVlfX07aS5pbnB1dCYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBlPWEoKTtlJiZBKGUpfSwwKTtmb3IodmFyIGY9ZnVuY3Rpb24obil7aS5zaG93TG9hZGVyT25Db25maXJtJiZlLnNob3dMb2FkaW5nKCksaS5wcmVDb25maXJtP2kucHJlQ29uZmlybShuLGkuZXh0cmFQYXJhbXMpLnRoZW4oZnVuY3Rpb24obyl7ZS5jbG9zZU1vZGFsKGkub25DbG9zZSksdChvfHxuKX0sZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLHQmJmUuc2hvd1ZhbGlkYXRpb25FcnJvcih0KX0pOihlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSx0KGkudXNlUmVqZWN0aW9ucz9uOnt2YWx1ZTpufSkpfSxTPWZ1bmN0aW9uKG8pe3ZhciBhPW98fHdpbmRvdy5ldmVudCxzPWEudGFyZ2V0fHxhLnNyY0VsZW1lbnQsbD12KCksYz15KCksdT1sJiYobD09PXN8fGwuY29udGFpbnMocykpLGQ9YyYmKGM9PT1zfHxjLmNvbnRhaW5zKHMpKTtzd2l0Y2goYS50eXBlKXtjYXNlXCJtb3VzZW92ZXJcIjpjYXNlXCJtb3VzZXVwXCI6aS5idXR0b25zU3R5bGluZyYmKHU/bC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9cihpLmNvbmZpcm1CdXR0b25Db2xvciwtLjEpOmQmJihjLnN0eWxlLmJhY2tncm91bmRDb2xvcj1yKGkuY2FuY2VsQnV0dG9uQ29sb3IsLS4xKSkpO2JyZWFrO2Nhc2VcIm1vdXNlb3V0XCI6aS5idXR0b25zU3R5bGluZyYmKHU/bC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9aS5jb25maXJtQnV0dG9uQ29sb3I6ZCYmKGMuc3R5bGUuYmFja2dyb3VuZENvbG9yPWkuY2FuY2VsQnV0dG9uQ29sb3IpKTticmVhaztjYXNlXCJtb3VzZWRvd25cIjppLmJ1dHRvbnNTdHlsaW5nJiYodT9sLnN0eWxlLmJhY2tncm91bmRDb2xvcj1yKGkuY29uZmlybUJ1dHRvbkNvbG9yLC0uMik6ZCYmKGMuc3R5bGUuYmFja2dyb3VuZENvbG9yPXIoaS5jYW5jZWxCdXR0b25Db2xvciwtLjIpKSk7YnJlYWs7Y2FzZVwiY2xpY2tcIjppZih1JiZlLmlzVmlzaWJsZSgpKWlmKGUuZGlzYWJsZUJ1dHRvbnMoKSxpLmlucHV0KXt2YXIgbT1wKCk7aS5pbnB1dFZhbGlkYXRvcj8oZS5kaXNhYmxlSW5wdXQoKSxpLmlucHV0VmFsaWRhdG9yKG0saS5leHRyYVBhcmFtcykudGhlbihmdW5jdGlvbigpe2UuZW5hYmxlQnV0dG9ucygpLGUuZW5hYmxlSW5wdXQoKSxmKG0pfSxmdW5jdGlvbih0KXtlLmVuYWJsZUJ1dHRvbnMoKSxlLmVuYWJsZUlucHV0KCksdCYmZS5zaG93VmFsaWRhdGlvbkVycm9yKHQpfSkpOmYobSl9ZWxzZSBmKCEwKTtlbHNlIGQmJmUuaXNWaXNpYmxlKCkmJihlLmRpc2FibGVCdXR0b25zKCksZS5jbG9zZU1vZGFsKGkub25DbG9zZSksaS51c2VSZWplY3Rpb25zP24oXCJjYW5jZWxcIik6dCh7ZGlzbWlzczpcImNhbmNlbFwifSkpfX0sVD1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikscT0wO3E8VC5sZW5ndGg7cSsrKVRbcV0ub25jbGljaz1TLFRbcV0ub25tb3VzZW92ZXI9UyxUW3FdLm9ubW91c2VvdXQ9UyxUW3FdLm9ubW91c2Vkb3duPVM7aygpLm9uY2xpY2s9ZnVuY3Rpb24oKXtlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcImNsb3NlXCIpOnQoe2Rpc21pc3M6XCJjbG9zZVwifSl9LGwub25jbGljaz1mdW5jdGlvbihvKXtvLnRhcmdldD09PWwmJmkuYWxsb3dPdXRzaWRlQ2xpY2smJihlLmNsb3NlTW9kYWwoaS5vbkNsb3NlKSxpLnVzZVJlamVjdGlvbnM/bihcIm92ZXJsYXlcIik6dCh7ZGlzbWlzczpcIm92ZXJsYXlcIn0pKX07dmFyIFY9aCgpLGo9digpLHo9eSgpO2kucmV2ZXJzZUJ1dHRvbnM/ai5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh6LGopOmoucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaix6KTt2YXIgVT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1DKGkuZm9jdXNDYW5jZWwpLG89MDtvPG4ubGVuZ3RoO28rKyl7ZSs9dCxlPT09bi5sZW5ndGg/ZT0wOmU9PT0tMSYmKGU9bi5sZW5ndGgtMSk7dmFyIGE9bltlXTtpZihPKGEpKXJldHVybiBhLmZvY3VzKCl9fSxJPWZ1bmN0aW9uKG8pe3ZhciBhPW98fHdpbmRvdy5ldmVudCxyPWEua2V5Q29kZXx8YS53aGljaDtpZihbOSwxMywzMiwyNywzNywzOCwzOSw0MF0uaW5kZXhPZihyKSE9PS0xKXtmb3IodmFyIHM9YS50YXJnZXR8fGEuc3JjRWxlbWVudCxsPUMoaS5mb2N1c0NhbmNlbCksYz0tMSx1PTA7dTxsLmxlbmd0aDt1KyspaWYocz09PWxbdV0pe2M9dTticmVha305PT09cj8oYS5zaGlmdEtleT9VKGMsLTEpOlUoYywxKSxhLnN0b3BQcm9wYWdhdGlvbigpLGEucHJldmVudERlZmF1bHQoKSk6Mzc9PT1yfHwzOD09PXJ8fDM5PT09cnx8NDA9PT1yP2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQ9PT1qJiZPKHopP3ouZm9jdXMoKTpkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09eiYmTyhqKSYmai5mb2N1cygpOjEzPT09cnx8MzI9PT1yP2M9PT0tMSYmaS5hbGxvd0VudGVyS2V5JiYoaS5mb2N1c0NhbmNlbD9IKHosYSk6SChqLGEpLGEuc3RvcFByb3BhZ2F0aW9uKCksYS5wcmV2ZW50RGVmYXVsdCgpKToyNz09PXImJmkuYWxsb3dFc2NhcGVLZXk9PT0hMCYmKGUuY2xvc2VNb2RhbChpLm9uQ2xvc2UpLGkudXNlUmVqZWN0aW9ucz9uKFwiZXNjXCIpOnQoe2Rpc21pc3M6XCJlc2NcIn0pKX19O3dpbmRvdy5vbmtleWRvd24mJndpbmRvdy5vbmtleWRvd24udG9TdHJpbmcoKT09PUkudG9TdHJpbmcoKXx8KHMucHJldmlvdXNXaW5kb3dLZXlEb3duPXdpbmRvdy5vbmtleWRvd24sd2luZG93Lm9ua2V5ZG93bj1JKSxpLmJ1dHRvbnNTdHlsaW5nJiYoai5zdHlsZS5ib3JkZXJMZWZ0Q29sb3I9aS5jb25maXJtQnV0dG9uQ29sb3Isai5zdHlsZS5ib3JkZXJSaWdodENvbG9yPWkuY29uZmlybUJ1dHRvbkNvbG9yKSxlLmhpZGVMb2FkaW5nPWUuZGlzYWJsZUxvYWRpbmc9ZnVuY3Rpb24oKXtpLnNob3dDb25maXJtQnV0dG9ufHwoTShqKSxpLnNob3dDYW5jZWxCdXR0b258fE0oaCgpKSksQihWLG8ubG9hZGluZyksQihjLG8ubG9hZGluZyksai5kaXNhYmxlZD0hMSx6LmRpc2FibGVkPSExfSxlLmdldFRpdGxlPWZ1bmN0aW9uKCl7cmV0dXJuIG0oKX0sZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHcoKX0sZS5nZXRJbnB1dD1mdW5jdGlvbigpe3JldHVybiBhKCl9LGUuZ2V0SW1hZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gZygpfSxlLmdldEJ1dHRvbnNXcmFwcGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGgoKX0sZS5nZXRDb25maXJtQnV0dG9uPWZ1bmN0aW9uKCl7cmV0dXJuIHYoKX0sZS5nZXRDYW5jZWxCdXR0b249ZnVuY3Rpb24oKXtyZXR1cm4geSgpfSxlLmVuYWJsZUJ1dHRvbnM9ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSExLHouZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUJ1dHRvbnM9ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSEwLHouZGlzYWJsZWQ9ITB9LGUuZW5hYmxlQ29uZmlybUJ1dHRvbj1mdW5jdGlvbigpe2ouZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUNvbmZpcm1CdXR0b249ZnVuY3Rpb24oKXtqLmRpc2FibGVkPSEwfSxlLmVuYWJsZUlucHV0PWZ1bmN0aW9uKCl7dmFyIGU9YSgpO2lmKCFlKXJldHVybiExO2lmKFwicmFkaW9cIj09PWUudHlwZSlmb3IodmFyIHQ9ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUsbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD0hMTtlbHNlIGUuZGlzYWJsZWQ9ITF9LGUuZGlzYWJsZUlucHV0PWZ1bmN0aW9uKCl7dmFyIGU9YSgpO2lmKCFlKXJldHVybiExO2lmKGUmJlwicmFkaW9cIj09PWUudHlwZSlmb3IodmFyIHQ9ZS5wYXJlbnROb2RlLnBhcmVudE5vZGUsbj10LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspbltvXS5kaXNhYmxlZD0hMDtlbHNlIGUuZGlzYWJsZWQ9ITB9LGUucmVjYWxjdWxhdGVIZWlnaHQ9TihmdW5jdGlvbigpe3ZhciBlPWQoKTtpZihlKXt2YXIgdD1lLnN0eWxlLmRpc3BsYXk7ZS5zdHlsZS5taW5IZWlnaHQ9XCJcIixMKGUpLGUuc3R5bGUubWluSGVpZ2h0PWUuc2Nyb2xsSGVpZ2h0KzErXCJweFwiLGUuc3R5bGUuZGlzcGxheT10fX0sNTApLGUuc2hvd1ZhbGlkYXRpb25FcnJvcj1mdW5jdGlvbihlKXt2YXIgdD14KCk7dC5pbm5lckhUTUw9ZSxMKHQpO3ZhciBuPWEoKTtuJiYoQShuKSxFKG4sby5pbnB1dGVycm9yKSl9LGUucmVzZXRWYWxpZGF0aW9uRXJyb3I9ZnVuY3Rpb24oKXt2YXIgdD14KCk7TSh0KSxlLnJlY2FsY3VsYXRlSGVpZ2h0KCk7dmFyIG49YSgpO24mJkIobixvLmlucHV0ZXJyb3IpfSxlLmdldFByb2dyZXNzU3RlcHM9ZnVuY3Rpb24oKXtyZXR1cm4gaS5wcm9ncmVzc1N0ZXBzfSxlLnNldFByb2dyZXNzU3RlcHM9ZnVuY3Rpb24oZSl7aS5wcm9ncmVzc1N0ZXBzPWUsVyhpKX0sZS5zaG93UHJvZ3Jlc3NTdGVwcz1mdW5jdGlvbigpe0woYigpKX0sZS5oaWRlUHJvZ3Jlc3NTdGVwcz1mdW5jdGlvbigpe00oYigpKX0sZS5lbmFibGVCdXR0b25zKCksZS5oaWRlTG9hZGluZygpLGUucmVzZXRWYWxpZGF0aW9uRXJyb3IoKTtmb3IodmFyIEs9W1wiaW5wdXRcIixcImZpbGVcIixcInJhbmdlXCIsXCJzZWxlY3RcIixcInJhZGlvXCIsXCJjaGVja2JveFwiLFwidGV4dGFyZWFcIl0sWD12b2lkIDAsJD0wOyQ8Sy5sZW5ndGg7JCsrKXt2YXIgWj1vW0tbJF1dLFE9UChjLFopO2lmKFg9YShLWyRdKSl7Zm9yKHZhciBZIGluIFguYXR0cmlidXRlcylpZihYLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoWSkpe3ZhciBKPVguYXR0cmlidXRlc1tZXS5uYW1lO1widHlwZVwiIT09SiYmXCJ2YWx1ZVwiIT09SiYmWC5yZW1vdmVBdHRyaWJ1dGUoSil9Zm9yKHZhciBGIGluIGkuaW5wdXRBdHRyaWJ1dGVzKVguc2V0QXR0cmlidXRlKEYsaS5pbnB1dEF0dHJpYnV0ZXNbRl0pfVEuY2xhc3NOYW1lPVosaS5pbnB1dENsYXNzJiZFKFEsaS5pbnB1dENsYXNzKSxNKFEpfXZhciBHPXZvaWQgMDtzd2l0Y2goaS5pbnB1dCl7Y2FzZVwidGV4dFwiOmNhc2VcImVtYWlsXCI6Y2FzZVwicGFzc3dvcmRcIjpjYXNlXCJudW1iZXJcIjpjYXNlXCJ0ZWxcIjpjYXNlXCJ1cmxcIjpYPVAoYyxvLmlucHV0KSxYLnZhbHVlPWkuaW5wdXRWYWx1ZSxYLnBsYWNlaG9sZGVyPWkuaW5wdXRQbGFjZWhvbGRlcixYLnR5cGU9aS5pbnB1dCxMKFgpO2JyZWFrO2Nhc2VcImZpbGVcIjpYPVAoYyxvLmZpbGUpLFgucGxhY2Vob2xkZXI9aS5pbnB1dFBsYWNlaG9sZGVyLFgudHlwZT1pLmlucHV0LEwoWCk7YnJlYWs7Y2FzZVwicmFuZ2VcIjp2YXIgZWU9UChjLG8ucmFuZ2UpLHRlPWVlLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKSxuZT1lZS5xdWVyeVNlbGVjdG9yKFwib3V0cHV0XCIpO3RlLnZhbHVlPWkuaW5wdXRWYWx1ZSx0ZS50eXBlPWkuaW5wdXQsbmUudmFsdWU9aS5pbnB1dFZhbHVlLEwoZWUpO2JyZWFrO2Nhc2VcInNlbGVjdFwiOnZhciBvZT1QKGMsby5zZWxlY3QpO2lmKG9lLmlubmVySFRNTD1cIlwiLGkuaW5wdXRQbGFjZWhvbGRlcil7dmFyIGFlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7YWUuaW5uZXJIVE1MPWkuaW5wdXRQbGFjZWhvbGRlcixhZS52YWx1ZT1cIlwiLGFlLmRpc2FibGVkPSEwLGFlLnNlbGVjdGVkPSEwLG9lLmFwcGVuZENoaWxkKGFlKX1HPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO24udmFsdWU9dCxuLmlubmVySFRNTD1lW3RdLGkuaW5wdXRWYWx1ZT09PXQmJihuLnNlbGVjdGVkPSEwKSxvZS5hcHBlbmRDaGlsZChuKX1MKG9lKSxvZS5mb2N1cygpfTticmVhaztjYXNlXCJyYWRpb1wiOnZhciByZT1QKGMsby5yYWRpbyk7cmUuaW5uZXJIVE1MPVwiXCIsRz1mdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7bi50eXBlPVwicmFkaW9cIixuLm5hbWU9by5yYWRpbyxuLnZhbHVlPXQsaS5pbnB1dFZhbHVlPT09dCYmKG4uY2hlY2tlZD0hMCksci5pbm5lckhUTUw9ZVt0XSxhLmFwcGVuZENoaWxkKG4pLGEuYXBwZW5kQ2hpbGQociksYS5mb3I9bi5pZCxyZS5hcHBlbmRDaGlsZChhKX1MKHJlKTt2YXIgcz1yZS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7cy5sZW5ndGgmJnNbMF0uZm9jdXMoKX07YnJlYWs7Y2FzZVwiY2hlY2tib3hcIjp2YXIgaWU9UChjLG8uY2hlY2tib3gpLHNlPWEoXCJjaGVja2JveFwiKTtzZS50eXBlPVwiY2hlY2tib3hcIixzZS52YWx1ZT0xLHNlLmlkPW8uY2hlY2tib3gsc2UuY2hlY2tlZD1Cb29sZWFuKGkuaW5wdXRWYWx1ZSk7dmFyIGxlPWllLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3BhblwiKTtsZS5sZW5ndGgmJmllLnJlbW92ZUNoaWxkKGxlWzBdKSxsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxsZS5pbm5lckhUTUw9aS5pbnB1dFBsYWNlaG9sZGVyLGllLmFwcGVuZENoaWxkKGxlKSxMKGllKTticmVhaztjYXNlXCJ0ZXh0YXJlYVwiOnZhciBjZT1QKGMsby50ZXh0YXJlYSk7Y2UudmFsdWU9aS5pbnB1dFZhbHVlLGNlLnBsYWNlaG9sZGVyPWkuaW5wdXRQbGFjZWhvbGRlcixMKGNlKTticmVhaztjYXNlIG51bGw6YnJlYWs7ZGVmYXVsdDpjb25zb2xlLmVycm9yKCdTd2VldEFsZXJ0MjogVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcInRleHRcIiwgXCJlbWFpbFwiLCBcInBhc3N3b3JkXCIsIFwibnVtYmVyXCIsIFwidGVsXCIsIFwic2VsZWN0XCIsIFwicmFkaW9cIiwgXCJjaGVja2JveFwiLCBcInRleHRhcmVhXCIsIFwiZmlsZVwiIG9yIFwidXJsXCIsIGdvdCBcIicraS5pbnB1dCsnXCInKX1cInNlbGVjdFwiIT09aS5pbnB1dCYmXCJyYWRpb1wiIT09aS5pbnB1dHx8KGkuaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZT8oZS5zaG93TG9hZGluZygpLGkuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24odCl7ZS5oaWRlTG9hZGluZygpLEcodCl9KSk6XCJvYmplY3RcIj09PVIoaS5pbnB1dE9wdGlvbnMpP0coaS5pbnB1dE9wdGlvbnMpOmNvbnNvbGUuZXJyb3IoXCJTd2VldEFsZXJ0MjogVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0IG9yIFByb21pc2UsIGdvdCBcIitSKGkuaW5wdXRPcHRpb25zKSkpLF8oaS5hbmltYXRpb24saS5vbk9wZW4pLGkuYWxsb3dFbnRlcktleT9VKC0xLDEpOmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQmJmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpLHUoKS5zY3JvbGxUb3A9MCxcInVuZGVmaW5lZFwiPT10eXBlb2YgTXV0YXRpb25PYnNlcnZlcnx8RHx8KEQ9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZS5yZWNhbGN1bGF0ZUhlaWdodCksRC5vYnNlcnZlKGMse2NoaWxkTGlzdDohMCxjaGFyYWN0ZXJEYXRhOiEwLHN1YnRyZWU6ITB9KSl9KX07cmV0dXJuIFkuaXNWaXNpYmxlPWZ1bmN0aW9uKCl7cmV0dXJuISFkKCl9LFkucXVldWU9ZnVuY3Rpb24oZSl7Sz1lO3ZhciB0PWZ1bmN0aW9uKCl7Sz1bXSxkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc3dhbDItcXVldWUtc3RlcFwiKX0sbj1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSxvKXshZnVuY3Rpb24gYShyLGkpe3I8Sy5sZW5ndGg/KGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zd2FsMi1xdWV1ZS1zdGVwXCIsciksWShLW3JdKS50aGVuKGZ1bmN0aW9uKGUpe24ucHVzaChlKSxhKHIrMSxpKX0sZnVuY3Rpb24oZSl7dCgpLG8oZSl9KSk6KHQoKSxlKG4pKX0oMCl9KX0sWS5nZXRRdWV1ZVN0ZXA9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3YWwyLXF1ZXVlLXN0ZXBcIil9LFkuaW5zZXJ0UXVldWVTdGVwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQmJnQ8Sy5sZW5ndGg/Sy5zcGxpY2UodCwwLGUpOksucHVzaChlKX0sWS5kZWxldGVRdWV1ZVN0ZXA9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEtbZV0mJksuc3BsaWNlKGUsMSl9LFkuY2xvc2U9WS5jbG9zZU1vZGFsPWZ1bmN0aW9uKGUpe3ZhciB0PXUoKSxuPWQoKTtpZihuKXtCKG4sby5zaG93KSxFKG4sby5oaWRlKSxjbGVhclRpbWVvdXQobi50aW1lb3V0KSxqKCk7dmFyIGE9ZnVuY3Rpb24oKXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSxCKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxvLnNob3duKSxCKGRvY3VtZW50LmJvZHksby5zaG93biksJCgpLFEoKX07ViYmIVMobixvLm5vYW5pbWF0aW9uKT9uLmFkZEV2ZW50TGlzdGVuZXIoVixmdW5jdGlvbiBlKCl7bi5yZW1vdmVFdmVudExpc3RlbmVyKFYsZSksUyhuLG8uaGlkZSkmJmEoKX0pOmEoKSxudWxsIT09ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmc2V0VGltZW91dChmdW5jdGlvbigpe2Uobil9KX19LFkuY2xpY2tDb25maXJtPWZ1bmN0aW9uKCl7cmV0dXJuIHYoKS5jbGljaygpfSxZLmNsaWNrQ2FuY2VsPWZ1bmN0aW9uKCl7cmV0dXJuIHkoKS5jbGljaygpfSxZLnNob3dMb2FkaW5nPVkuZW5hYmxlTG9hZGluZz1mdW5jdGlvbigpe3ZhciBlPWQoKTtlfHxZKFwiXCIpO3ZhciB0PWgoKSxuPXYoKSxhPXkoKTtMKHQpLEwobixcImlubGluZS1ibG9ja1wiKSxFKHQsby5sb2FkaW5nKSxFKGUsby5sb2FkaW5nKSxuLmRpc2FibGVkPSEwLGEuZGlzYWJsZWQ9ITB9LFkuc2V0RGVmYXVsdHM9ZnVuY3Rpb24odCl7aWYoIXR8fFwib2JqZWN0XCIhPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpSKHQpKSlyZXR1cm4gY29uc29sZS5lcnJvcihcIlN3ZWV0QWxlcnQyOiB0aGUgYXJndW1lbnQgZm9yIHNldERlZmF1bHRzKCkgaXMgcmVxdWlyZWQgYW5kIGhhcyB0byBiZSBhIG9iamVjdFwiKTtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHxcImV4dHJhUGFyYW1zXCI9PT1ufHwoY29uc29sZS53YXJuKCdTd2VldEFsZXJ0MjogVW5rbm93biBwYXJhbWV0ZXIgXCInK24rJ1wiJyksZGVsZXRlIHRbbl0pO1UoSSx0KX0sWS5yZXNldERlZmF1bHRzPWZ1bmN0aW9uKCl7ST1VKHt9LGUpfSxZLm5vb3A9ZnVuY3Rpb24oKXt9LFkudmVyc2lvbj1cIjYuNi42XCIsWS5kZWZhdWx0PVksWX0pLHdpbmRvdy5Td2VldGFsZXJ0MiYmKHdpbmRvdy5zd2VldEFsZXJ0PXdpbmRvdy5zd2FsPXdpbmRvdy5Td2VldGFsZXJ0Mil9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1zd2VldGFsZXJ0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zd2VldGFsZXJ0L2J1aWxkL3Z1ZS1zd2VldGFsZXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtc3dlZXRhbGVydC9idWlsZC92dWUtc3dlZXRhbGVydC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnKSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnKSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gQCBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlc3BvbnNlKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gQCBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBQUk9URUNUSU9OX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YSA9IGRhdGEucmVwbGFjZShQUk9URUNUSU9OX1BSRUZJWCwgJycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWVodG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IC0+IHVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgIWlzQXJyYXkob2JqKSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE1OTY1ZTNiXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWV0YWJsZS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNTk2NWUzYlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWV0YWJsZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTE1OTY1ZTNiXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNTk2NWUzYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE1OTY1ZTNiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNlZmRkNTk2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2VmZGQ1OTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zZWZkZDU5NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWV0YWJsZVBhZ2luYXRpb25JbmZvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xNzcyNDA4M1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTc3MjQwODNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNzcyNDA4M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mby52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IG51bGxcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uSW5mb01peGluLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjA1YTM2ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmMDVhMzZlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25JbmZvTWl4aW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbkluZm9NaXhpbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gbnVsbFxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvdnVldGFibGUtMi9zcmMvY29tcG9uZW50cy9WdWV0YWJsZVBhZ2luYXRpb25NaXhpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWM0YzI0MDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YzRjMjQwOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZXRhYmxlLTIvc3JjL2NvbXBvbmVudHMvVnVldGFibGVQYWdpbmF0aW9uTWl4aW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWV0YWJsZS0yL3NyYy9jb21wb25lbnRzL1Z1ZXRhYmxlUGFnaW5hdGlvbk1peGluLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQgNSA2IDciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EZWxldGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yYzdmNjI2OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RlbGV0ZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9EZWxldGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjN2Y2MjY4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmM3ZjYyNjhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vRGVsZXRlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IDUgNiA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjUyMjk0MzBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb21tb24vTm90aWZpY2F0aW9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02NTIyOTQzMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY1MjI5NDMwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29tbW9uL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NvbW1vbi9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmI1NjQ0ZDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MaXN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9MaXN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02YjU2NDRkNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZiNTY0NGQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9MaXN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYXN0ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zODNiZjk5OVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01hc3Rlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3R1dG9yLWNsYXNzZXMvTWFzdGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zODNiZjk5OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM4M2JmOTk5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdHV0b3ItY2xhc3Nlcy9NYXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy90dXRvci1jbGFzc2VzL01hc3Rlci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiXG4vKlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnwgVHV0b3IgQ2xhc3NlcyBNb2R1bGVcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuY29uc3QgVHV0b3JDbGFzcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy90dXRvci1jbGFzc2VzL01hc3Rlci52dWUnKTtcblZ1ZS5jb21wb25lbnQoJ3R1dG9yLWNsYXNzZXMnLCBUdXRvckNsYXNzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdHV0b3ItY2xhc3MtYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==