"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_DeveloperForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/DeveloperForm.vue */ "./resources/js/components/DeveloperForm.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// import DeveloperForm from "../components/DeveloperForm.vue";

var DEFAULT_FORMDATA = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  avatar: "",
  skills: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "regular-modal",
  components: {
    DeveloperFormComponent: _components_DeveloperForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showModal: false,
      formData: _objectSpread({}, DEFAULT_FORMDATA),
      form: {
        submit_disabled: false,
        errors: []
      }
    };
  },
  methods: {
    handleFileObject: function handleFileObject(e) {
      //   this.formData.avatar = e.target.files[0];
      this.formData.avatar = this.$refs.file.files[0];
    },
    developerFormSubmit: function developerFormSubmit(e) {
      this.form.submit_disabled = true;
      console.log(this.formData);
      var formData = new FormData();
      formData.append("first_name", this.formData.first_name);
      formData.append("last_name", this.formData.last_name);
      formData.append("email", this.formData.email);
      formData.append("gender", this.formData.gender);
      formData.append("skills", this.formData.skills.join(","));
      formData.append("image", this.formData.avatar);
    },
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "developerFrom",
  props: {
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    skills: Array,
    submit_disabled: Boolean,
    errors: Array,
    formSubmit: Function,
    handleFileObject: Function // contactsPromise: Promise, // or any other constructor

  },
  data: function data() {
    return {
      form: {
        errors: this.errors,
        submit_disabled: this.submit_disabled
      },
      formData: {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        gender: this.gender,
        skills: this.skills
      },
      allSkills: [{
        name: "laravel",
        value: "Laravel",
        description: "Good at laravel"
      }, {
        name: "codeigniter",
        value: "Codeigniter",
        description: "Good at Codeigniter"
      }, {
        name: "ajax",
        value: "AJAX",
        description: "Good at AJAX"
      }, {
        name: "vue_js",
        value: "Vue JS",
        description: "Good at VUE "
      }, {
        name: "mysql",
        value: "MySQL",
        description: "Good at MySQL Database"
      }, {
        name: "api",
        value: "API",
        description: "Good at API Design"
      }]
    };
  },
  computed: {
    formData: function formData(value) {
      console.log("watch", value);
    }
  },
  updated: function updated() {// console.log("updated");
  },
  mounted: function mounted() {// console.log("Component mounted.");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DeveloperEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DeveloperEdit.vue */ "./resources/js/components/DeveloperEdit.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DeveloperEdit: _components_DeveloperEdit_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      table_column: [{
        name: "First name"
      }, {
        name: "Last name"
      }, {
        name: "Email"
      }, {
        name: "image"
      }, {
        name: "Gender"
      }, {
        name: "Skills"
      }, {
        name: "Action"
      }],
      developer_data: [],
      loading: true,
      error: false
    };
  },
  methods: {
    deleteData: function deleteData(id) {
      var _this = this;

      var isDelete = confirm("Are you sure?");

      if (!isDelete) {
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("http://localhost:8000/api/developer/" + id).then(function (response) {
        _this.getDeveloper();
      })["catch"](function (error) {
        alert(error.response.message);
      });
    },
    getDeveloper: function getDeveloper() {
      var _this2 = this;

      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/api/developer").then(function (response) {
        _this2.developer_data = response.data.data;
        _this2.loading = false;
      })["catch"](function (error) {
        _this2.error = true;
      });
    }
  },
  mounted: function mounted() {
    this.getDeveloper();
  }
});

/***/ }),

/***/ "./resources/js/components/DeveloperEdit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DeveloperEdit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeveloperEdit.vue?vue&type=template&id=454952ce& */ "./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce&");
/* harmony import */ var _DeveloperEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeveloperEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeveloperEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeveloperEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeveloperForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DeveloperForm.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeveloperForm.vue?vue&type=template&id=cbcbef5a& */ "./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a&");
/* harmony import */ var _DeveloperForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeveloperForm.vue?vue&type=script&lang=js& */ "./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeveloperForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeveloperForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/View.vue":
/*!*************************************!*\
  !*** ./resources/js/views/View.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=325b3fc4& */ "./resources/js/views/View.vue?vue&type=template&id=325b3fc4&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/View.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__.render,
  _View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/View.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeveloperEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeveloperForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/View.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/View.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperEdit_vue_vue_type_template_id_454952ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeveloperEdit.vue?vue&type=template&id=454952ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce&");


/***/ }),

/***/ "./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeveloperForm_vue_vue_type_template_id_cbcbef5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeveloperForm.vue?vue&type=template&id=cbcbef5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a&");


/***/ }),

/***/ "./resources/js/views/View.vue?vue&type=template&id=325b3fc4&":
/*!********************************************************************!*\
  !*** ./resources/js/views/View.vue?vue&type=template&id=325b3fc4& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_325b3fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./View.vue?vue&type=template&id=325b3fc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=template&id=325b3fc4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperEdit.vue?vue&type=template&id=454952ce& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass:
          "\n      bg-pink-500\n      text-white\n      active:bg-pink-600\n      font-bold\n      uppercase\n      text-sm\n      px-6\n      py-3\n      rounded\n      shadow\n      hover:shadow-lg\n      outline-none\n      focus:outline-none\n      mr-1\n      mb-1\n      ease-linear\n      transition-all\n      duration-150\n    ",
        attrs: { type: "button" },
        on: {
          click: function ($event) {
            return _vm.toggleModal()
          },
        },
      },
      [_vm._v("\n    Open regular modal\n  ")]
    ),
    _vm._v(" "),
    _vm.showModal
      ? _c(
          "div",
          {
            staticClass:
              "\n      overflow-x-hidden overflow-y-auto\n      fixed\n      inset-0\n      z-50\n      outline-none\n      focus:outline-none\n      justify-center\n      items-center\n      flex\n    ",
          },
          [
            _c(
              "div",
              { staticClass: "relative w-auto my-6 mx-auto max-w-3xl" },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n          border-0\n          rounded-lg\n          shadow-lg\n          relative\n          flex flex-col\n          w-full\n          bg-white\n          outline-none\n          focus:outline-none\n        ",
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n            flex\n            items-start\n            justify-between\n            p-5\n            border-b border-solid border-blueGray-200\n            rounded-t\n          ",
                      },
                      [
                        _c("h3", { staticClass: "text-3xl font-semibold" }, [
                          _vm._v("Modal Title"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "\n              p-1\n              ml-auto\n              bg-transparent\n              border-0\n              text-black\n              opacity-5\n              float-right\n              text-3xl\n              leading-none\n              font-semibold\n              outline-none\n              focus:outline-none\n            ",
                            on: {
                              click: function ($event) {
                                return _vm.toggleModal()
                              },
                            },
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "\n                bg-transparent\n                text-black\n                opacity-5\n                h-6\n                w-6\n                text-2xl\n                block\n                outline-none\n                focus:outline-none\n              ",
                              },
                              [_vm._v("\n              ×\n            ")]
                            ),
                          ]
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "relative p-6 flex-auto" },
                      [
                        _c("DeveloperFormComponent", {
                          attrs: {
                            first_name: _vm.formData.first_name,
                            last_name: _vm.formData.last_name,
                            email: _vm.formData.email,
                            gender: _vm.formData.gender,
                            skills: _vm.formData.skills,
                            submit_disabled: _vm.form.submit_disabled,
                            errors: _vm.form.errors,
                            formSubmit: _vm.developerFormSubmit,
                            handleFileObject: _vm.handleFileObject,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "\n            flex\n            items-center\n            justify-end\n            p-6\n            border-t border-solid border-blueGray-200\n            rounded-b\n          ",
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "\n              text-red-500\n              bg-transparent\n              border border-solid border-red-500\n              hover:bg-red-500 hover:text-white\n              active:bg-red-600\n              font-bold\n              uppercase\n              text-sm\n              px-6\n              py-3\n              rounded\n              outline-none\n              focus:outline-none\n              mr-1\n              mb-1\n              ease-linear\n              transition-all\n              duration-150\n            ",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.toggleModal()
                              },
                            },
                          },
                          [_vm._v("\n            Close\n          ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "\n              text-red-500\n              background-transparent\n              font-bold\n              uppercase\n              px-6\n              py-2\n              text-sm\n              outline-none\n              focus:outline-none\n              mr-1\n              mb-1\n              ease-linear\n              transition-all\n              duration-150\n            ",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                return _vm.toggleModal()
                              },
                            },
                          },
                          [_vm._v("\n            Save Changes\n          ")]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showModal
      ? _c("div", { staticClass: "opacity-25 fixed inset-0 z-40 bg-black" })
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeveloperForm.vue?vue&type=template&id=cbcbef5a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "w-full max-w-xl mt-10 mx-auto",
        attrs: { action: "javascript:void(0)" },
        on: { submit: _vm.formSubmit },
      },
      [
        _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
          _c("div", { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" }, [
            _c(
              "label",
              {
                staticClass:
                  "\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",
                attrs: { for: "grid-first-name" },
              },
              [_vm._v("\n          First Name\n        ")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.first_name,
                  expression: "formData.first_name",
                },
              ],
              staticClass:
                "\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-red-500\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white\n          ",
              attrs: {
                name: "first_name",
                id: "grid-first-name",
                type: "text",
                disabled: _vm.form.submit_disabled,
                placeholder: "Jon",
              },
              domProps: { value: _vm.formData.first_name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "first_name", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors.first_name
              ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.first_name[0]) +
                      "\n        "
                  ),
                ])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/2 px-3" }, [
            _c(
              "label",
              {
                staticClass:
                  "\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",
                attrs: { for: "grid-last-name" },
              },
              [_vm._v("\n          Last Name\n        ")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.last_name,
                  expression: "formData.last_name",
                },
              ],
              staticClass:
                "\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",
              attrs: {
                name: "last_name",
                id: "grid-last-name",
                type: "text",
                disabled: _vm.form.submit_disabled,
                placeholder: "Doe",
              },
              domProps: { value: _vm.formData.last_name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "last_name", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors.last_name
              ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.errors.last_name[0]) +
                      "\n        "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
          _c("div", { staticClass: "w-full px-3" }, [
            _c(
              "label",
              {
                staticClass:
                  "\n            block\n            uppercase\n            tracking-wide\n            text-gray-700 text-xs\n            font-bold\n            mb-2\n          ",
                attrs: { for: "grid-password" },
              },
              [_vm._v("\n          Email\n        ")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.email,
                  expression: "formData.email",
                },
              ],
              staticClass:
                "\n            appearance-none\n            block\n            w-full\n            text-gray-700\n            border border-gray-200\n            rounded\n            py-3\n            px-4\n            mb-3\n            leading-tight\n            focus:outline-none focus:bg-white focus:border-gray-500\n          ",
              attrs: {
                name: "email",
                id: "grid-password",
                type: "email",
                disabled: _vm.form.submit_disabled,
                placeholder: "example@mail.com",
              },
              domProps: { value: _vm.formData.email },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.formData, "email", $event.target.value)
                },
              },
            }),
            _vm._v(" "),
            _vm.errors.email
              ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                  _vm._v(
                    "\n          " + _vm._s(_vm.errors.email[0]) + "\n        "
                  ),
                ])
              : _vm._e(),
          ]),
        ]),
        _vm._v(" "),
        _c("div", {}, [
          _c(
            "label",
            { staticClass: "block text-sm font-medium text-gray-700" },
            [_vm._v(" Photo ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "\n          mt-1\n          flex\n          justify-center\n          px-6\n          pt-5\n          pb-6\n          border-2 border-gray-300 border-dashed\n          rounded-md\n        ",
            },
            [
              _c("div", { staticClass: "space-y-1 text-center" }, [
                _c(
                  "svg",
                  {
                    staticClass: "mx-auto h-12 w-12 text-gray-400",
                    attrs: {
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 48 48",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    _c("path", {
                      attrs: {
                        d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "flex text-sm text-gray-600" }, [
                  _c(
                    "label",
                    {
                      staticClass:
                        "\n                relative\n                cursor-pointer\n                bg-white\n                rounded-md\n                font-medium\n                text-indigo-600\n                hover:text-indigo-500\n                focus-within:outline-none\n                focus-within:ring-2\n                focus-within:ring-offset-2\n                focus-within:ring-indigo-500\n              ",
                      attrs: { for: "file-upload" },
                    },
                    [
                      _c("span", [_vm._v("Upload a file")]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "file",
                        staticClass: "sr-only",
                        attrs: {
                          id: "file-upload",
                          name: "image",
                          accept: ".jpg,.png,.jpeg",
                          type: "file",
                          disabled: _vm.form.submit_disabled,
                        },
                        on: { change: _vm.handleFileObject },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "pl-1" }, [
                    _vm._v("or drag and drop"),
                  ]),
                ]),
                _vm._v(" "),
                _vm.errors.image
                  ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.errors.image[0]) +
                          "\n          "
                      ),
                    ])
                  : _vm._e(),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 space-y-4" }, [
          _vm.errors.gender
            ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                _vm._v(
                  "\n        " + _vm._s(_vm.errors.gender[0]) + "\n      "
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.gender,
                  expression: "formData.gender",
                },
              ],
              staticClass:
                "\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",
              attrs: {
                id: "push-everything",
                name: "gender",
                value: "male",
                type: "radio",
              },
              domProps: { checked: _vm._q(_vm.formData.gender, "male") },
              on: {
                change: function ($event) {
                  return _vm.$set(_vm.formData, "gender", "male")
                },
              },
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "ml-3 block text-sm font-medium text-gray-700",
                attrs: { for: "push-everything" },
              },
              [_vm._v("\n          Male\n        ")]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.gender,
                  expression: "formData.gender",
                },
              ],
              staticClass:
                "\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",
              attrs: {
                id: "push-email",
                name: "gender",
                type: "radio",
                value: "female",
              },
              domProps: { checked: _vm._q(_vm.formData.gender, "female") },
              on: {
                change: function ($event) {
                  return _vm.$set(_vm.formData, "gender", "female")
                },
              },
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "ml-3 block text-sm font-medium text-gray-700",
                attrs: { for: "push-email" },
              },
              [_vm._v("\n          Female\n        ")]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-center" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.formData.gender,
                  expression: "formData.gender",
                },
              ],
              staticClass:
                "\n            focus:ring-indigo-500\n            h-4\n            w-4\n            text-indigo-600\n            border-gray-300\n          ",
              attrs: {
                id: "push-nothing",
                name: "gender",
                type: "radio",
                value: "other",
              },
              domProps: { checked: _vm._q(_vm.formData.gender, "other") },
              on: {
                change: function ($event) {
                  return _vm.$set(_vm.formData, "gender", "other")
                },
              },
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "ml-3 block text-sm font-medium text-gray-700",
                attrs: { for: "push-nothing" },
              },
              [_vm._v("\n          Other\n        ")]
            ),
          ]),
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap -mx-3 mb-6" },
          [
            _vm.errors.skills
              ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                  _vm._v(
                    "\n        " + _vm._s(_vm.errors.skills[0]) + "\n      "
                  ),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.allSkills, function (skill, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0",
                },
                [
                  _c("div", { staticClass: "flex items-start my-2" }, [
                    _c("div", { staticClass: "flex items-center h-5" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.formData.skills,
                            expression: "formData.skills",
                          },
                        ],
                        staticClass:
                          "\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n                rounded\n              ",
                        attrs: {
                          id: [skill.value],
                          name: "skills",
                          type: "checkbox",
                        },
                        domProps: {
                          value: [skill.name],
                          checked: Array.isArray(_vm.formData.skills)
                            ? _vm._i(_vm.formData.skills, [skill.name]) > -1
                            : _vm.formData.skills,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = _vm.formData.skills,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = [skill.name],
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.formData,
                                    "skills",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.formData,
                                    "skills",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.formData, "skills", $$c)
                            }
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-3 text-sm" }, [
                      _c(
                        "label",
                        {
                          staticClass: "font-medium text-gray-700",
                          attrs: { for: [skill.value] },
                        },
                        [_vm._v(_vm._s(skill.value))]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-gray-500" }, [
                        _vm._v(_vm._s(skill.description)),
                      ]),
                    ]),
                  ]),
                ]
              )
            }),
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "shadow overflow-hidden sm:rounded-md" }, [
          _c(
            "div",
            { staticClass: "px-4 py-3 bg-gray-50 text-right sm:px-6" },
            [
              !_vm.form.submit_disabled
                ? _c(
                    "button",
                    {
                      staticClass:
                        "\n            inline-flex\n            justify-center\n            py-2\n            px-4\n            border border-transparent\n            shadow-sm\n            text-sm\n            font-medium\n            rounded-md\n            text-white\n            bg-indigo-600\n            hover:bg-indigo-700\n            focus:outline-none\n            focus:ring-2\n            focus:ring-offset-2\n            focus:ring-indigo-500\n          ",
                      attrs: {
                        type: "submit",
                        disabled: _vm.form.submit_disabled,
                      },
                    },
                    [_vm._v("\n          Save\n        ")]
                  )
                : _vm._e(),
            ]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-5" }, [
      _c("legend", { staticClass: "text-base font-medium text-gray-900" }, [
        _vm._v("Gender"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm text-gray-500" }, [
        _vm._v("Please select your gender"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "my-5" }, [
      _c("legend", { staticClass: "text-base font-medium text-gray-900" }, [
        _vm._v("Skills"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-sm text-gray-500" }, [
        _vm._v("Please select your skills"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=template&id=325b3fc4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/View.vue?vue&type=template&id=325b3fc4& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "block w-full overflow-x-auto" }, [
    _c("h1", { staticClass: "text-3xl font-bold my-10 text-center" }, [
      _vm._v("\n    View All Developer Information\n  "),
    ]),
    _vm._v(" "),
    _vm.error
      ? _c("section", [
          _c("p", [
            _vm._v(
              "\n      We're sorry, we're not able to retrieve this information at the moment,\n      please try back later\n    "
            ),
          ]),
        ])
      : _c("section", [
          _vm.loading
            ? _c("div", { staticClass: "text-center" }, [_vm._v("Loading...")])
            : _c("div", [
                _c(
                  "table",
                  {
                    staticClass:
                      "items-center w-full bg-transparent border-collapse",
                  },
                  [
                    _c("thead", [
                      _c(
                        "tr",
                        _vm._l(_vm.table_column, function (column, index) {
                          return _c(
                            "th",
                            {
                              key: index,
                              staticClass:
                                "\n                px-6\n                bg-blueGray-50\n                text-blueGray-500\n                align-middle\n                border border-solid border-blueGray-100\n                py-3\n                text-xs\n                uppercase\n                border-l-0 border-r-0\n                whitespace-nowrap\n                font-semibold\n                text-left\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(column.name) +
                                  "\n            "
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.developer_data, function (developer, index) {
                        return _c("tr", { key: index }, [
                          _c(
                            "th",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n                text-left\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(developer.first_name) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(developer.last_name) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(developer.email) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "fas fa-arrow-up text-emerald-500 mr-4",
                              }),
                              _vm._v(" "),
                              _c("img", {
                                attrs: { src: [developer.image_url] },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(developer.gender) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(developer.skills) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "\n                border-t-0\n                px-6\n                align-middle\n                border-l-0 border-r-0\n                text-xs\n                whitespace-nowrap\n                p-4\n              ",
                            },
                            [
                              _c(
                                "button",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass:
                                        "\n                    text-purple-500\n                    bg-transparent\n                    border border-solid border-purple-500\n                    hover:bg-purple-500 hover:text-white\n                    active:bg-purple-600\n                    font-bold\n                    uppercase\n                    text-xs\n                    px-4\n                    py-2\n                    rounded\n                    outline-none\n                    focus:outline-none\n                    mr-1\n                    mb-1\n                    ease-linear\n                    transition-all\n                    duration-150\n                  ",
                                      attrs: {
                                        to: {
                                          name: "edit",
                                          params: { id: developer.id },
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Edit\n                "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "\n                  text-purple-500\n                  bg-transparent\n                  border border-solid border-purple-500\n                  hover:bg-purple-500 hover:text-white\n                  active:bg-purple-600\n                  font-bold\n                  uppercase\n                  text-xs\n                  px-4\n                  py-2\n                  rounded\n                  outline-none\n                  focus:outline-none\n                  mr-1\n                  mb-1\n                  ease-linear\n                  transition-all\n                  duration-150\n                ",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteData(developer.id)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                Delete\n              "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ]),
        ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);