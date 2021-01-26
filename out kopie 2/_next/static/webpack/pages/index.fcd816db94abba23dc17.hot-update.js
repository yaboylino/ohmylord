webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_video_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/video.mp4 */ \"./public/video.mp4\");\n/* harmony import */ var _public_video_mp4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_video_mp4__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/lionel/Documents/nextjs/ohmylord/components/Hero.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Hero() {\n  _s();\n\n  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      videoRef.current.play();\n    }, 5000);\n  }, []);\n  return __jsx(\"div\", {\n    className: \"hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute flex flex-col justify-center items-center w-full h-1/2 text-white uppercase\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute w-full h-full z-10 pt-48 bg-black opacity-50\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"h5\", {\n    className: \"text-2xl z-20 text-white uppercase mb-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"Welcome to\"), __jsx(\"h1\", {\n    className: \"text-6xl z-20 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Oh My Lord\")), __jsx(\"video\", {\n    className: \"cover\",\n    ref: videoRef,\n    width: \"3000\",\n    loop: true,\n    muted: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"source\", {\n    src: _public_video_mp4__WEBPACK_IMPORTED_MODULE_1___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Hero, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n\n_c = Hero;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzP2ZhNTMiXSwibmFtZXMiOlsiSGVybyIsInZpZGVvUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJwbGF5IiwiYmFja2dyb3VuZFZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVSxDQUFDLFlBQU07QUFDZkgsY0FBUSxDQUFDSSxPQUFULENBQWlCQyxJQUFqQjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQUdFO0FBQUksYUFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsQ0FERixFQU1FO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQXlCLE9BQUcsRUFBRUwsUUFBOUI7QUFBd0MsU0FBSyxFQUFDLE1BQTlDO0FBQXFELFFBQUksTUFBekQ7QUFBMEQsU0FBSyxNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxPQUFHLEVBQUVNLHdEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREY7QUFZRDs7R0FyQnVCUCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZXJvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBiYWNrZ3JvdW5kVmlkZW8gZnJvbSBcIi4uL3B1YmxpYy92aWRlby5tcDRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpXG4gICAgfSwgNTAwMClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtMS8yIHRleHQtd2hpdGUgdXBwZXJjYXNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTEwIHB0LTQ4IGJnLWJsYWNrIG9wYWNpdHktNTBcIj48L2Rpdj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtMnhsIHotMjAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgbWItNVwiPldlbGNvbWUgdG88L2g1PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgei0yMCB0ZXh0LXdoaXRlXCI+T2ggTXkgTG9yZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJjb3ZlclwiIHJlZj17dmlkZW9SZWZ9IHdpZHRoPVwiMzAwMFwiIGxvb3AgbXV0ZWQ+XG4gICAgICAgIDxzb3VyY2Ugc3JjPXtiYWNrZ3JvdW5kVmlkZW99IC8+XG4gICAgICA8L3ZpZGVvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.js\n");

/***/ })

})