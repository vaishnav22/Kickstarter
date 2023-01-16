"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kickstarter/kickstarterShow",{

/***/ "./pages/kickstarter/kickstarterShow.js":
/*!**********************************************!*\
  !*** ./pages/kickstarter/kickstarterShow.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Blueprint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Blueprint */ \"./components/Blueprint.js\");\n/* harmony import */ var _blockchain_kickstarter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blockchain/kickstarter */ \"./blockchain/kickstarter.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _css_kickstarterCard_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/kickstarterCard.module.css */ \"./css/kickstarterCard.module.css\");\n/* harmony import */ var _css_kickstarterCard_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_kickstarterCard_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar KickstarterShow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(KickstarterShow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(KickstarterShow);\n    function KickstarterShow(props) {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, KickstarterShow);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            name: props.name\n        };\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(KickstarterShow, [\n        {\n            key: \"cardGroup\",\n            value: function cardGroup() {\n                var _props = this.props, balance = _props.balance, admin = _props.admin, initialPool = _props.initialPool, petetions = _props.petetions, donersCount = _props.donersCount, name = _props.name;\n                var items = [\n                    {\n                        header: name,\n                        meta: admin,\n                        description: \"The manager create this project, check for contributers and also other important information\",\n                        style: {\n                            overflowWrap: \"break-word\"\n                        }\n                    }\n                ];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/pages/kickstarter/kickstarterShow.js\",\n                    lineNumber: 38,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blueprint__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_kickstarterCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Vaishnav\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/pages/kickstarter/kickstarterShow.js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, this),\n                            this.cardGroup()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/pages/kickstarter/kickstarterShow.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/pages/kickstarter/kickstarterShow.js\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(function() {\n                    var kickstarter, summary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                kickstarter = (0,_blockchain_kickstarter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.query.address);\n                                return [\n                                    4,\n                                    kickstarter.methods.getDetails().call()\n                                ];\n                            case 1:\n                                summary = _state.sent();\n                                // console.log(summary)\n                                return [\n                                    2,\n                                    {\n                                        initialPool: summary[0],\n                                        balance: summary[1],\n                                        petitions: summary[2],\n                                        donerCount: summary[3],\n                                        admin: summary[4],\n                                        name: summary[5]\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return KickstarterShow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (KickstarterShow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9raWNrc3RhcnRlci9raWNrc3RhcnRlclNob3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXdDO0FBQ1U7QUFDSTtBQUNIO0FBQ007QUFFekQsbUJBQXFCLGlCQThDbEI7OzhFQTlDR08sZUFBZTsrRkFBZkEsZUFBZTthQUFmQSxlQUFlLENBQ0xDLEtBQUs7Z0dBRGZELGVBQWU7O2tDQUVQQyxLQUFLLEVBQUM7UUFDWixNQUFLQyxLQUFLLEdBQUc7WUFBQ0MsSUFBSSxFQUFFRixLQUFLLENBQUNFLElBQUk7U0FBQzs7O2tGQUhqQ0gsZUFBZTs7WUFvQmpCSSxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDUixJQUFzRSxNQUFVLEdBQVYsSUFBSSxDQUFDSCxLQUFLLEVBQXhFSSxPQUFPLEdBQXVELE1BQVUsQ0FBeEVBLE9BQU8sRUFBRUMsS0FBSyxHQUFnRCxNQUFVLENBQS9EQSxLQUFLLEVBQUVDLFdBQVcsR0FBbUMsTUFBVSxDQUF4REEsV0FBVyxFQUFFQyxTQUFTLEdBQXdCLE1BQVUsQ0FBM0NBLFNBQVMsRUFBRUMsV0FBVyxHQUFXLE1BQVUsQ0FBaENBLFdBQVcsRUFBRU4sSUFBSSxHQUFLLE1BQVUsQ0FBbkJBLElBQUk7Z0JBQ2pFLElBQU1PLEtBQUssR0FBRztvQkFDVjt3QkFDSUMsTUFBTSxFQUFFUixJQUFJO3dCQUNaUyxJQUFJLEVBQUNOLEtBQUs7d0JBQ1ZPLFdBQVcsRUFBRSw4RkFBOEY7d0JBQzNHQyxLQUFLLEVBQUU7NEJBQUNDLFlBQVksRUFBQyxZQUFZO3lCQUFDO3FCQUNyQztpQkFDSjtnQkFFRCxxQkFBTyw4REFBQ2xCLHlEQUFVO29CQUFDYSxLQUFLLEVBQUVBLEtBQUs7Ozs7O3dCQUFJO1lBQ3ZDLENBQUM7OztZQUVETyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ3RCLDZEQUFTOzhCQUNOLDRFQUFDdUIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFcEIsNkVBQVc7OzBDQUMzQiw4REFBQ3NCLElBQUU7MENBQUMsVUFBUTs7Ozs7b0NBQUs7NEJBQ2hCLElBQUksQ0FBQ2pCLFNBQVMsRUFBRTs7Ozs7OzRCQUNYOzs7Ozt3QkFDRSxDQUNmO1lBQ0wsQ0FBQzs7OztZQXJDWWtCLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWUsQ0FBQ3JCLEtBQUs7dUJBQWxDLGdHQUFvQzt3QkFDMUJzQixXQUFXLEVBQ1hDLE9BQU87Ozs7Z0NBRFBELFdBQVcsR0FBRzNCLG1FQUFXLENBQUNLLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDO2dDQUNwQzs7b0NBQU1ILFdBQVcsQ0FBQ0ksT0FBTyxDQUFDQyxVQUFVLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFO2tDQUFBOztnQ0FBdkRMLE9BQU8sR0FBRyxhQUE2QztnQ0FDN0QsdUJBQXVCO2dDQUN2Qjs7b0NBQU87d0NBQ0hqQixXQUFXLEVBQUVpQixPQUFPLENBQUMsQ0FBQyxDQUFDO3dDQUN2Qm5CLE9BQU8sRUFBRW1CLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQ25CTSxTQUFTLEVBQUVOLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQ3JCTyxVQUFVLEVBQUVQLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQ3RCbEIsS0FBSyxFQUFFa0IsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDakJyQixJQUFJLEVBQUVxQixPQUFPLENBQUMsQ0FBQyxDQUFDO3FDQUNuQjtrQ0FBQTs7O2dCQUNMLENBQUM7YUFBQTs7O1dBbEJDeEIsZUFBZTtDQTRDcEIsQ0E1QzZCTiw0Q0FBUyxDQTRDdEM7QUFFRCwrREFBZU0sZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9raWNrc3RhcnRlci9raWNrc3RhcnRlclNob3cuanM/NjMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmx1ZXByaW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmx1ZXByaW50J1xuaW1wb3J0IEtpY2tzdGFydGVyIGZyb20gJy4uLy4uL2Jsb2NrY2hhaW4va2lja3N0YXJ0ZXInXG5pbXBvcnQgeyBDYXJkLCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vY3NzL2tpY2tzdGFydGVyQ2FyZC5tb2R1bGUuY3NzJ1xuXG5jbGFzcyBLaWNrc3RhcnRlclNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bmFtZTogcHJvcHMubmFtZX1cbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGtpY2tzdGFydGVyID0gS2lja3N0YXJ0ZXIocHJvcHMucXVlcnkuYWRkcmVzcylcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGtpY2tzdGFydGVyLm1ldGhvZHMuZ2V0RGV0YWlscygpLmNhbGwoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdW1tYXJ5KVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbFBvb2w6IHN1bW1hcnlbMF0sXG4gICAgICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgICAgICAgcGV0aXRpb25zOiBzdW1tYXJ5WzJdLFxuICAgICAgICAgICAgZG9uZXJDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgICAgIGFkbWluOiBzdW1tYXJ5WzRdLFxuICAgICAgICAgICAgbmFtZTogc3VtbWFyeVs1XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FyZEdyb3VwKCkge1xuICAgICAgICBjb25zdCB7IGJhbGFuY2UsIGFkbWluLCBpbml0aWFsUG9vbCwgcGV0ZXRpb25zLCBkb25lcnNDb3VudCwgbmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBuYW1lLFxuICAgICAgICAgICAgICAgIG1ldGE6YWRtaW4sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGUgdGhpcyBwcm9qZWN0LCBjaGVjayBmb3IgY29udHJpYnV0ZXJzIGFuZCBhbHNvIG90aGVyIGltcG9ydGFudCBpbmZvcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Qmx1ZXByaW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICAgICAgICAgICAgPGgxPlZhaXNobmF2PC9oMT5cbiAgICAgICAgICAgICAgICB7dGhpcy5jYXJkR3JvdXAoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmx1ZXByaW50PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLaWNrc3RhcnRlclNob3ciXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCbHVlcHJpbnQiLCJLaWNrc3RhcnRlciIsIkNhcmQiLCJDb250YWluZXIiLCJzdHlsZXMiLCJLaWNrc3RhcnRlclNob3ciLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsImNhcmRHcm91cCIsImJhbGFuY2UiLCJhZG1pbiIsImluaXRpYWxQb29sIiwicGV0ZXRpb25zIiwiZG9uZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwiaDEiLCJnZXRJbml0aWFsUHJvcHMiLCJraWNrc3RhcnRlciIsInN1bW1hcnkiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0RGV0YWlscyIsImNhbGwiLCJwZXRpdGlvbnMiLCJkb25lckNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/kickstarter/kickstarterShow.js\n"));

/***/ })

});