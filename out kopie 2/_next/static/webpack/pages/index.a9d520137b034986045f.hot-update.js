webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\nvar _jsxFileName = \"/Users/lionel/Documents/nextjs/ohmylord/components/Navbar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Navbar() {\n  _s();\n\n  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"])(),\n      theme = _useTheme.theme,\n      setTheme = _useTheme.setTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      darkmode = _useState[0],\n      setDarkmode = _useState[1];\n\n  return __jsx(\"nav\", {\n    className: \"w-screen grid grid-cols-6 navbar shadow bg-white dark:bg-gray-800 border-gray-100 sticky z-30 top-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex p-8 col-span-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    className: \"layout-header__mobile-action layout-header__mobile-action--menu\",\n    \"aria-label\": \"Menu openen\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"svg\", {\n    className: \"pr-1\",\n    fill: theme === \"dark\" ? \"white\" : \"black\",\n    width: \"32\",\n    height: \"32\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, __jsx(\"path\", {\n    fillRule: \"evenodd\",\n    strokeWidth: \"2\",\n    d: \"M4 9h25v.5H4V9zm0 7.2h25v.5H4v-.5zm.3 7.3H4v.5h25v-.5H4.3z\",\n    clipRule: \"evenodd\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  })))), __jsx(\"div\", {\n    className: \"flex md:w-full w-1/2 mx-auto col-span-4 items-center justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/logo-zay.jpg\",\n    width: \"200px\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"p-8 col-span-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"flex items-center justify-end\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: \"mr-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    \"aria-label\": \"Toggle Dark Mode\",\n    type: \"button\",\n    className: \"p-3 h-12 w-12 order-2 md:order-3\",\n    onClick: function onClick() {\n      return setTheme(theme === \"dark\" ? \"light\" : \"dark\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, \" \", __jsx(\"svg\", {\n    \"class\": \"w-6 h-6\",\n    fill: \"none\",\n    stroke: \"currentColor\",\n    viewBox: \"0 0 24 24\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, __jsx(\"path\", {\n    \"stroke-linecap\": \"round\",\n    \"stroke-linejoin\": \"round\",\n    \"stroke-width\": \"2\",\n    d: \"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  })))))));\n}\n\n_s(Navbar, \"JxsQ93XbBnPc527Dj6Bpwr3E2wc=\", false, function () {\n  return [next_themes__WEBPACK_IMPORTED_MODULE_2__[\"useTheme\"]];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/Y2Q4MiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VUaGVtZSIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VTdGF0ZSIsImRhcmttb2RlIiwic2V0RGFya21vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDWUMsNERBQVEsRUFEcEI7QUFBQSxNQUNSQyxLQURRLGFBQ1JBLEtBRFE7QUFBQSxNQUNEQyxRQURDLGFBQ0RBLFFBREM7O0FBQUEsa0JBRWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FGeEI7QUFBQSxNQUVUQyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFJaEIsU0FDRTtBQUFLLGFBQVMsRUFBQyxxR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGlFQUFsQjtBQUFvRixrQkFBVyxhQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixRQUFJLEVBQUVKLEtBQUssS0FBSyxNQUFWLEdBQW1CLE9BQW5CLEdBQTZCLE9BQXpEO0FBQWtFLFNBQUssRUFBQyxJQUF4RTtBQUE2RSxVQUFNLEVBQUMsSUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBVyxFQUFDLEdBQXJDO0FBQXlDLEtBQUMsRUFBQyw0REFBM0M7QUFBd0csWUFBUSxFQUFDLFNBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLHFFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBeUIsU0FBSyxFQUFDLE9BQS9CO0FBQXVDLE9BQUcsRUFBQyxFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQVJGLEVBYUU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGtCQUFXLGtCQUFuQjtBQUFzQyxRQUFJLEVBQUMsUUFBM0M7QUFBb0QsYUFBUyxFQUFDLGtDQUE5RDtBQUFpRyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxRQUFRLENBQUNELEtBQUssS0FBSyxNQUFWLEdBQW1CLE9BQW5CLEdBQTZCLE1BQTlCLENBQWQ7QUFBQSxLQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVFO0FBQUssYUFBTSxTQUFYO0FBQXFCLFFBQUksRUFBQyxNQUExQjtBQUFpQyxVQUFNLEVBQUMsY0FBeEM7QUFBdUQsV0FBTyxFQUFDLFdBQS9EO0FBQTJFLFNBQUssRUFBQyw0QkFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sc0JBQWUsT0FBckI7QUFBNkIsdUJBQWdCLE9BQTdDO0FBQXFELG9CQUFhLEdBQWxFO0FBQXNFLEtBQUMsRUFBQyx1RkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERixDQURGLENBREYsQ0FiRixDQURGO0FBNEJEOztHQWhDUUYsTTtVQUNxQkMsb0Q7OztLQURyQkQsTTtBQWtDTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiXG5cbmZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgW2Rhcmttb2RlLCBzZXREYXJrbW9kZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gZ3JpZCBncmlkLWNvbHMtNiBuYXZiYXIgc2hhZG93IGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgYm9yZGVyLWdyYXktMTAwIHN0aWNreSB6LTMwIHRvcC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC04IGNvbC1zcGFuLTFcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsYXlvdXQtaGVhZGVyX19tb2JpbGUtYWN0aW9uIGxheW91dC1oZWFkZXJfX21vYmlsZS1hY3Rpb24tLW1lbnVcIiBhcmlhLWxhYmVsPVwiTWVudSBvcGVuZW5cIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInByLTFcIiBmaWxsPXt0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJ9IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk00IDloMjV2LjVINFY5em0wIDcuMmgyNXYuNUg0di0uNXptLjMgNy4zSDR2LjVoMjV2LS41SDQuM3pcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6dy1mdWxsIHctMS8yIG14LWF1dG8gY29sLXNwYW4tNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLXpheS5qcGdcIiB3aWR0aD1cIjIwMHB4XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBjb2wtc3Bhbi0xXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJUb2dnbGUgRGFyayBNb2RlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInAtMyBoLTEyIHctMTIgb3JkZXItMiBtZDpvcmRlci0zXCIgb25DbGljaz17KCkgPT4gc2V0VGhlbWUodGhlbWUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCIpfT5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0yMC4zNTQgMTUuMzU0QTkgOSAwIDAxOC42NDYgMy42NDYgOS4wMDMgOS4wMDMgMCAwMDEyIDIxYTkuMDAzIDkuMDAzIDAgMDA4LjM1NC01LjY0NnpcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

})