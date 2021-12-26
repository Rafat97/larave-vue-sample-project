"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Edit_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DeveloperForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/DeveloperForm.vue */ "./resources/js/components/DeveloperForm.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var DEFAULT_FORMDATA = _defineProperty({
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  avatar: "",
  skills: []
}, "avatar", null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DeveloperFormComponent: _components_DeveloperForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
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
      }],
      formData: _objectSpread({}, DEFAULT_FORMDATA),
      edited_id: this.$route.params.id,
      form: {
        submit_disabled: false,
        errors: []
      },
      loading: true,
      error: false
    };
  },
  mounted: function mounted() {
    this.getSingleDeveloper(this.edited_id);
  },
  methods: {
    getSingleDeveloper: function getSingleDeveloper(id) {
      var _this = this;

      this.loading = true;
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/api/developer/" + id).then(function (response) {
        //   this.developer_data = response.data.data;
        //   console.log(response.data);
        var all_skills = [];
        console.log(response.data.skills);

        if (response.data.skills !== null) {
          response.data.skills.split(",").map(function (val) {
            all_skills.push([val]);
          });
        }

        _this.formData = _objectSpread(_objectSpread({}, _this.formData), {}, {
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          gender: response.data.gender,
          image_path: response.data.image_path,
          skills: [].concat(all_skills)
        }); //   this.formData = { ...response.data.data };

        _this.loading = false;
      })["catch"](function (error) {
        //   this.error = true;
        alert(error.response.message);
      });
    },
    handleFileObject: function handleFileObject(e) {
      //   this.formData.avatar = e.target.files[0];
      this.formData.avatar = this.$refs.file.files[0];
    },
    developerFormSubmit: function developerFormSubmit(e) {
      var _this2 = this;

      this.form.submit_disabled = true;
      console.log(this.formData);
      var formData = new FormData();
      formData.append("_method", "put");
      formData.append("first_name", this.formData.first_name);
      formData.append("last_name", this.formData.last_name);
      formData.append("email", this.formData.email);
      formData.append("gender", this.formData.gender);
      formData.append("skills", this.formData.skills.join(","));

      if (this.formData.avatar) {
        formData.append("image", this.formData.avatar);
      }

      var url = "http://localhost:8000/api/developer/" + this.edited_id;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this2.form.submit_disabled = false;
        _this2.form.errors = []; //   console.log(response);

        alert("Data Edited successfully");

        _this2.previousCLick();
      })["catch"](function (err) {
        _this2.form.submit_disabled = false; //   console.log(err);
        //   console.log(err.response);

        _this2.form.errors = err.response.data.errors;
        console.log(err.response);
        alert(err.response.data.message);
      });
    },
    previousCLick: function previousCLick() {
      this.$router.push({
        name: "view"
      });
    }
  }
});

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

/***/ "./resources/js/views/Edit.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Edit.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4a9138a9& */ "./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/views/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4a9138a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=4a9138a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Edit.vue?vue&type=template&id=4a9138a9& ***!
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
  return _c("div", [
    _c("h1", { staticClass: "text-3xl font-bold my-10 text-center" }, [
      _vm._v("\n    Edit Developer Information\n  "),
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
                  "form",
                  {
                    staticClass: "w-full max-w-xl mt-10 mx-auto",
                    attrs: { action: "javascript:void(0)" },
                    on: { submit: _vm.developerFormSubmit },
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n            inline-flex\n            justify-center\n            py-2\n            px-4\n            border border-transparent\n            shadow-sm\n            text-sm\n            font-medium\n            rounded-md\n            text-white\n            bg-indigo-600\n            hover:bg-indigo-700\n            focus:outline-none focus:ring-2 focus:ring-offset-2\n            my-6\n            focus:ring-indigo-500\n          ",
                        attrs: { type: "button" },
                        on: { click: _vm.previousCLick },
                      },
                      [_vm._v("\n          Previous\n        ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                      _c(
                        "div",
                        { staticClass: "w-full md:w-1/2 px-3 mb-6 md:mb-0" },
                        [
                          _c(
                            "label",
                            {
                              staticClass:
                                "\n                block\n                uppercase\n                tracking-wide\n                text-gray-700 text-xs\n                font-bold\n                mb-2\n              ",
                              attrs: { for: "grid-first-name" },
                            },
                            [_vm._v("\n              First Name\n            ")]
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
                              "\n                appearance-none\n                block\n                w-full\n                text-gray-700\n                border border-red-500\n                rounded\n                py-3\n                px-4\n                leading-tight\n                focus:outline-none focus:bg-white\n              ",
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
                                _vm.$set(
                                  _vm.formData,
                                  "first_name",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.form.errors.first_name
                            ? _c(
                                "p",
                                { staticClass: "text-red-500 text-xs italic" },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(_vm.form.errors.first_name[0]) +
                                      "\n            "
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-full md:w-1/2 px-3" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "\n                block\n                uppercase\n                tracking-wide\n                text-gray-700 text-xs\n                font-bold\n                mb-2\n              ",
                            attrs: { for: "grid-last-name" },
                          },
                          [_vm._v("\n              Last Name\n            ")]
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
                            "\n                appearance-none\n                block\n                w-full\n                text-gray-700\n                border border-gray-200\n                rounded\n                py-3\n                px-4\n                leading-tight\n                focus:outline-none focus:bg-white focus:border-gray-500\n              ",
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
                              _vm.$set(
                                _vm.formData,
                                "last_name",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.form.errors.last_name
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.form.errors.last_name[0]) +
                                    "\n            "
                                ),
                              ]
                            )
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
                              "\n                block\n                uppercase\n                tracking-wide\n                text-gray-700 text-xs\n                font-bold\n                mb-2\n              ",
                            attrs: { for: "grid-password" },
                          },
                          [_vm._v("\n              Email\n            ")]
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
                            "\n                appearance-none\n                block\n                w-full\n                text-gray-700\n                border border-gray-200\n                rounded\n                py-3\n                px-4\n                mb-3\n                leading-tight\n                focus:outline-none focus:bg-white focus:border-gray-500\n              ",
                          attrs: {
                            name: "email",
                            id: "grid-password",
                            type: "email",
                            disabled: "true",
                            placeholder: "example@mail.com",
                          },
                          domProps: { value: _vm.formData.email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.formData,
                                "email",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.form.errors.email
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.form.errors.email[0]) +
                                    "\n            "
                                ),
                              ]
                            )
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-sm font-medium text-gray-700",
                        },
                        [_vm._v("\n            Photo\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "\n              mt-1\n              flex\n              justify-center\n              px-6\n              pt-5\n              pb-6\n              border-2 border-gray-300 border-dashed\n              rounded-md\n            ",
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
                            _c(
                              "div",
                              { staticClass: "flex text-sm text-gray-600" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "\n                    relative\n                    cursor-pointer\n                    bg-white\n                    rounded-md\n                    font-medium\n                    text-indigo-600\n                    hover:text-indigo-500\n                    focus-within:outline-none\n                    focus-within:ring-2\n                    focus-within:ring-offset-2\n                    focus-within:ring-indigo-500\n                  ",
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
                                      on: {
                                        change: function ($event) {
                                          return _vm.handleFileObject()
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "pl-1" }, [
                                  _vm._v("or drag and drop"),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _vm.form.errors.image
                              ? _c(
                                  "p",
                                  {
                                    staticClass: "text-red-500 text-xs italic",
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.form.errors.image[0]) +
                                        "\n              "
                                    ),
                                  ]
                                )
                              : _vm._e(),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-4 space-y-4" }, [
                      _vm.form.errors.gender
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.form.errors.gender[0]) +
                                  "\n          "
                              ),
                            ]
                          )
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
                            "\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n              ",
                          attrs: {
                            id: "push-everything",
                            name: "gender",
                            value: "male",
                            type: "radio",
                          },
                          domProps: {
                            checked: _vm._q(_vm.formData.gender, "male"),
                          },
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
                            staticClass:
                              "ml-3 block text-sm font-medium text-gray-700",
                            attrs: { for: "push-everything" },
                          },
                          [_vm._v("\n              Male\n            ")]
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
                            "\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n              ",
                          attrs: {
                            id: "push-email",
                            name: "gender",
                            type: "radio",
                            value: "female",
                          },
                          domProps: {
                            checked: _vm._q(_vm.formData.gender, "female"),
                          },
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
                            staticClass:
                              "ml-3 block text-sm font-medium text-gray-700",
                            attrs: { for: "push-email" },
                          },
                          [_vm._v("\n              Female\n            ")]
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
                            "\n                focus:ring-indigo-500\n                h-4\n                w-4\n                text-indigo-600\n                border-gray-300\n              ",
                          attrs: {
                            id: "push-nothing",
                            name: "gender",
                            type: "radio",
                            value: "other",
                          },
                          domProps: {
                            checked: _vm._q(_vm.formData.gender, "other"),
                          },
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
                            staticClass:
                              "ml-3 block text-sm font-medium text-gray-700",
                            attrs: { for: "push-nothing" },
                          },
                          [_vm._v("\n              Other\n            ")]
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
                        _vm.form.errors.skills
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(_vm.form.errors.skills[0]) +
                                    "\n          "
                                ),
                              ]
                            )
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
                              _c(
                                "div",
                                { staticClass: "flex items-start my-2" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center h-5" },
                                    [
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
                                          "\n                    focus:ring-indigo-500\n                    h-4\n                    w-4\n                    text-indigo-600\n                    border-gray-300\n                    rounded\n                  ",
                                        attrs: {
                                          id: [skill.value],
                                          name: "skills",
                                          type: "checkbox",
                                        },
                                        domProps: {
                                          value: [skill.name],
                                          checked: Array.isArray(
                                            _vm.formData.skills
                                          )
                                            ? _vm._i(_vm.formData.skills, [
                                                skill.name,
                                              ]) > -1
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
                                                    $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      )
                                                  )
                                              }
                                            } else {
                                              _vm.$set(
                                                _vm.formData,
                                                "skills",
                                                $$c
                                              )
                                            }
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "ml-3 text-sm" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "font-medium text-gray-700",
                                        attrs: { for: [skill.value] },
                                      },
                                      [_vm._v(_vm._s(skill.value))]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-gray-500" }, [
                                      _vm._v(_vm._s(skill.description)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "shadow overflow-hidden sm:rounded-md" },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "px-4 py-3 bg-gray-50 text-right sm:px-6",
                          },
                          [
                            !_vm.form.submit_disabled
                              ? _c(
                                  "button",
                                  {
                                    staticClass:
                                      "\n                inline-flex\n                justify-center\n                py-2\n                px-4\n                border border-transparent\n                shadow-sm\n                text-sm\n                font-medium\n                rounded-md\n                text-white\n                bg-indigo-600\n                hover:bg-indigo-700\n                focus:outline-none\n                focus:ring-2\n                focus:ring-offset-2\n                focus:ring-indigo-500\n              ",
                                    attrs: {
                                      type: "submit",
                                      disabled: _vm.form.submit_disabled,
                                    },
                                  },
                                  [_vm._v("\n              Save\n            ")]
                                )
                              : _vm._e(),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]),
        ]),
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



/***/ })

}]);