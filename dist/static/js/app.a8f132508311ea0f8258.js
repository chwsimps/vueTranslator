webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(23);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'app',
    component: app
  }]
}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavBar__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_NavBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_NavBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TranslateForm__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TranslateForm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_TranslateForm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TranslateOutput__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_TranslateOutput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_TranslateOutput__);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_0__components_NavBar___default.a,
    TranslateForm: __WEBPACK_IMPORTED_MODULE_1__components_TranslateForm___default.a,
    TranslateOutput: __WEBPACK_IMPORTED_MODULE_2__components_TranslateOutput___default.a
  },
  data() {
    return {
      translatedText: '',
      selectedLang: 'Selected Language'
    };
  },
  methods: {
    translateText: function (text, language) {
      let langId = language.id || language;
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170507T184032Z.8de7dadfdb69d639.cb4d83404c405147a537b0c794b065da63a7ec34&lang=' + langId + '&text=' + text).then(response => {
        this.translatedText = response.body.text[0];

        if (langId == 'es') {
          this.selectedLang = "Spanish";
        } else if (langId == 'zh') {
          this.selectedLang = "Chinese";
        } else if (langId == 'ar') {
          this.selectedLang = "Arabic";
        } else {
          this.selectedLang = language.val;
        }
      });
    }
  }
});

/***/ }),
/* 7 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NavBar'
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'TranslateForm',
  data() {
    return {
      textToTranslate: '',
      language: '',
      languages: [],
      showDropdown: false
    };
  },
  created() {
    this.language = 'es';
    this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20170507T184032Z.8de7dadfdb69d639.cb4d83404c405147a537b0c794b065da63a7ec34&ui=en').then(response => {
      let lang = this.languages;

      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(response.body.langs, function (val, ind) {
        if (ind != 'es' && ind != 'zh' && ind != 'ar') {
          lang.push({ id: ind, val: val });
        }
      });
    });
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.$emit('formSubmit', this.textToTranslate, this.language);
    }
  }
});

/***/ }),
/* 9 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TranslateOutput',
  props: ['translatedText', 'selectedLang']
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(5);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "translated-text"
  }, [_c('p', {
    staticClass: "selected-lang"
  }, [_vm._v(_vm._s(_vm.selectedLang))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.translatedText))])])
},staticRenderFns: []}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-center",
    attrs: {
      "id": "app"
    }
  }, [_c('NavBar'), _vm._v(" "), _c('TranslateForm', {
    on: {
      "formSubmit": _vm.translateText
    }
  }), _vm._v(" "), _c('TranslateOutput', {
    attrs: {
      "translatedText": _vm.translatedText,
      "selectedLang": _vm.selectedLang
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar navbar-inverse"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('a', {
    staticClass: "navbar-brand"
  }, [_vm._v("Translator")])])])])
}]}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "translateForm"
    }
  }, [_c('form', {
    on: {
      "submit": _vm.formSubmit
    }
  }, [_c('div', {
    staticClass: "langRadioGroup"
  }, [_c('div', {
    staticClass: "btn btn-default langRadioBtn mostPopLang"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.language),
      expression: "language"
    }],
    attrs: {
      "type": "radio",
      "name": "langType",
      "id": "es",
      "value": "es"
    },
    domProps: {
      "checked": _vm._q(_vm.language, "es")
    },
    on: {
      "__c": function($event) {
        _vm.language = "es"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "es"
    }
  }, [_vm._v("Spanish")])]), _vm._v(" "), _c('div', {
    staticClass: "btn btn-default langRadioBtn mostPopLang"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.language),
      expression: "language"
    }],
    attrs: {
      "type": "radio",
      "name": "langType",
      "id": "zh",
      "value": "zh"
    },
    domProps: {
      "checked": _vm._q(_vm.language, "zh")
    },
    on: {
      "__c": function($event) {
        _vm.language = "zh"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "zh"
    }
  }, [_vm._v("Chinese")])]), _vm._v(" "), _c('div', {
    staticClass: "btn btn-default langRadioBtn mostPopLang"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.language),
      expression: "language"
    }],
    attrs: {
      "type": "radio",
      "name": "langType",
      "id": "ar",
      "value": "ar"
    },
    domProps: {
      "checked": _vm._q(_vm.language, "ar")
    },
    on: {
      "__c": function($event) {
        _vm.language = "ar"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "ar"
    }
  }, [_vm._v("Arabic")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group toggle-group"
  }, [_c('a', {
    staticClass: "btn dropdown-toggle",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function($event) {
        _vm.showDropdown = !_vm.showDropdown
      }
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    staticClass: "toggle-display"
  }, _vm._l((_vm.languages), function(lang) {
    return _c('div', {
      staticClass: "langRadioBtn toggleBtns"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.language),
        expression: "language"
      }],
      attrs: {
        "type": "radio",
        "name": "langType",
        "id": lang.id
      },
      domProps: {
        "value": lang,
        "checked": _vm._q(_vm.language, lang)
      },
      on: {
        "__c": function($event) {
          _vm.language = lang
        }
      }
    }), _vm._v(" "), _c('label', {
      attrs: {
        "for": lang.id
      }
    }, [_vm._v(_vm._s(lang.val))])])
  }))])]), _vm._v(" "), _c('input', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit",
      "value": "Translate"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "translateInput"
  }, [_c('p', {
    staticClass: "selected-lang"
  }, [_vm._v("English")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.textToTranslate),
      expression: "textToTranslate"
    }],
    attrs: {
      "type": "text",
      "placeholder": "Enter a word/phrase..."
    },
    domProps: {
      "value": (_vm.textToTranslate)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.textToTranslate = $event.target.value
      }
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[10]);
//# sourceMappingURL=app.a8f132508311ea0f8258.js.map