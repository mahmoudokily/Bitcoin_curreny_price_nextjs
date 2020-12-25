webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/mahmoudhassan/Desktop/course2021/nextjs/components/Prices.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Prices(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('USD'),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var bpi = props.bpi.bpi;\n  var list = '';\n\n  if (currency === \"USD\") {\n    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"list-group-item\",\n      children: [\"Bitcoin Rate For \", bpi.USD.description, \" : \", bpi.USD.rate, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"badge badge-primary\",\n        children: bpi.USD.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 70\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 20\n    }, this);\n  } else {\n    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: \"list-group-item\",\n      children: [\"Bitcoin Rate For \", bpi.currency.description, \" : \", bpi.currency.rate, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"badge badge-primary\",\n        children: bpi.currency.code\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 76\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Check current Bitcoin Rate \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), list]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Prices, \"IMt9glJKuY0gCtznVFnjeGsjS3E=\");\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/YmUyZCJdLCJuYW1lcyI6WyJQcmljZXMiLCJwcm9wcyIsInVzZVN0YXRlIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImJwaSIsImxpc3QiLCJVU0QiLCJkZXNjcmlwdGlvbiIsInJhdGUiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxLQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBQUEsTUFFWkMsR0FGWSxHQUVMSixLQUFLLENBQUNJLEdBRkQsQ0FFWkEsR0FGWTtBQUduQixNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFJSCxRQUFRLEtBQUssS0FBakIsRUFBd0I7QUFDaEJHLFFBQUksZ0JBQUc7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDV0QsR0FBRyxDQUFDRSxHQUFKLENBQVFDLFdBRG5CLFNBQ21DSCxHQUFHLENBQUNFLEdBQUosQ0FBUUUsSUFEM0Msb0JBQ2tEO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFBdUNKLEdBQUcsQ0FBQ0UsR0FBSixDQUFRRztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBR1AsR0FKRCxNQUtLO0FBQ0RKLFFBQUksZ0JBQUc7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDV0QsR0FBRyxDQUFDRixRQUFKLENBQWFLLFdBRHhCLFNBQ3dDSCxHQUFHLENBQUNGLFFBQUosQ0FBYU0sSUFEckQsb0JBQzREO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFBdUNKLEdBQUcsQ0FBQ0YsUUFBSixDQUFhTztBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBSUg7O0FBR0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUtKLElBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7R0ExQlFOLE07O0tBQUFBLE07QUEyQk1BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QcmljZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFByaWNlcyhwcm9wcykge1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoJ1VTRCcpIFxuICAgIGNvbnN0IHticGl9ID0gcHJvcHMuYnBpXG4gICAgbGV0IGxpc3QgPSAnJztcbiAgICBpZiAoY3VycmVuY3kgPT09IFwiVVNEXCIpIHtcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxuICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7YnBpLlVTRC5kZXNjcmlwdGlvbn0gOiB7YnBpLlVTRC5yYXRlIH0gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGkuVVNELmNvZGV9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XG4gICAgICAgIEJpdGNvaW4gUmF0ZSBGb3Ige2JwaS5jdXJyZW5jeS5kZXNjcmlwdGlvbn0gOiB7YnBpLmN1cnJlbmN5LnJhdGUgfSA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e2JwaS5jdXJyZW5jeS5jb2RlfTwvc3Bhbj5cbiAgICA8L2xpPlxuXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+Q2hlY2sgY3VycmVudCBCaXRjb2luIFJhdGUgPC9wPlxuICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICB7Lyoge3Byb3BzLmJwaS50aW1lLnVwZGF0ZWR9ICovfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})