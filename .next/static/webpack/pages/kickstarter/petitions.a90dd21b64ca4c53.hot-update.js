"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kickstarter/petitions",{

/***/ "./components/TablePetition.js":
/*!*************************************!*\
  !*** ./components/TablePetition.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\nvar TablePetition = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TablePetition, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TablePetition);\n    function TablePetition() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, TablePetition);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(TablePetition, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: this.props.id\n                        }, void 0, false, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 8,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: this.props.petition.description\n                        }, void 0, false, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 9,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: this.props.petition.price\n                        }, void 0, false, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 10,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: this.props.petition.recipient\n                        }, void 0, false, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: [\n                                this.props.petition.backerCount,\n                                \"/\",\n                                this.props.donersCount\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table.Cell, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                size: \"medium\",\n                                color: \"black\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button.Content, {\n                                    visible: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        name: \"check\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 53\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                                lineNumber: 14,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vaishnavbharadwaj/Documents/solidity/kickstarter/components/TablePetition.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return TablePetition;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablePetition);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhYmxlUGV0aXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztBQUFzQztBQUNlO0FBRXJELGlCQUFtQixpQkFtQmhCOzs4RUFuQkdLLGFBQWE7K0ZBQWJBLGFBQWE7YUFBYkEsYUFBYTtnR0FBYkEsYUFBYTs7O2tGQUFiQSxhQUFhOztZQUNmQyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDTCxxQkFDSSw4REFBQ0osd0RBQVM7O3NDQUNOLDhEQUFDQSx5REFBVTtzQ0FBRSxJQUFJLENBQUNPLEtBQUssQ0FBQ0MsRUFBRTs7Ozs7Z0NBQWM7c0NBQ3hDLDhEQUFDUix5REFBVTtzQ0FBRSxJQUFJLENBQUNPLEtBQUssQ0FBQ0UsUUFBUSxDQUFDQyxXQUFXOzs7OztnQ0FBYztzQ0FDMUQsOERBQUNWLHlEQUFVO3NDQUFFLElBQUksQ0FBQ08sS0FBSyxDQUFDRSxRQUFRLENBQUNFLEtBQUs7Ozs7O2dDQUFjO3NDQUNwRCw4REFBQ1gseURBQVU7c0NBQUUsSUFBSSxDQUFDTyxLQUFLLENBQUNFLFFBQVEsQ0FBQ0csU0FBUzs7Ozs7Z0NBQWM7c0NBQ3hELDhEQUFDWix5REFBVTs7Z0NBQUUsSUFBSSxDQUFDTyxLQUFLLENBQUNFLFFBQVEsQ0FBQ0ksV0FBVztnQ0FBQyxHQUFDO2dDQUFDLElBQUksQ0FBQ04sS0FBSyxDQUFDTyxXQUFXOzs7Ozs7Z0NBQWM7c0NBQ25GLDhEQUFDZCx5REFBVTtzQ0FDUCw0RUFBQ0MscURBQU07Z0NBQUNjLElBQUksRUFBQyxRQUFRO2dDQUFDQyxLQUFLLEVBQUMsT0FBTzswQ0FDM0IsNEVBQUNmLDZEQUFjO29DQUFDaUIsT0FBTzs4Q0FBQyw0RUFBQ2hCLG1EQUFJO3dDQUFDaUIsSUFBSSxFQUFDLE9BQU87Ozs7OzRDQUFHOzs7Ozt3Q0FBaUI7Ozs7O29DQUM3RDs7Ozs7Z0NBQ0E7Ozs7Ozt3QkFDTCxDQUNmO1lBQ0wsQ0FBQzs7O1dBaEJDaEIsYUFBYTtDQWlCbEIsQ0FqQjJCSiw0Q0FBUyxDQWlCcEM7QUFFRCwrREFBZUksYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhYmxlUGV0aXRpb24uanM/YmE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtUYWJsZSwgQnV0dG9uLCBJY29ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuY2xhc3MgVGFibGVQZXRpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD57dGhpcy5wcm9wcy5pZH08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e3RoaXMucHJvcHMucGV0aXRpb24uZGVzY3JpcHRpb259PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPnt0aGlzLnByb3BzLnBldGl0aW9uLnByaWNlfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD57dGhpcy5wcm9wcy5wZXRpdGlvbi5yZWNpcGllbnR9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPnt0aGlzLnByb3BzLnBldGl0aW9uLmJhY2tlckNvdW50fS97dGhpcy5wcm9wcy5kb25lcnNDb3VudH08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cIm1lZGl1bVwiIGNvbG9yPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgdmlzaWJsZT48SWNvbiBuYW1lPSdjaGVjaycgLz48L0J1dHRvbi5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVQZXRpdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiSWNvbiIsIlRhYmxlUGV0aXRpb24iLCJyZW5kZXIiLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInBldGl0aW9uIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInJlY2lwaWVudCIsImJhY2tlckNvdW50IiwiZG9uZXJzQ291bnQiLCJzaXplIiwiY29sb3IiLCJDb250ZW50IiwidmlzaWJsZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TablePetition.js\n"));

/***/ })

});