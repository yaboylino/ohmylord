webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hero; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_video_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/video.mp4 */ \"./public/video.mp4\");\n/* harmony import */ var _public_video_mp4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_video_mp4__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/lionel/Documents/nextjs/ohmylord/components/Hero.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Hero() {\n  _s();\n\n  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTimeout(function () {\n      videoRef.current.play();\n    }, 5000);\n  }, []);\n  return __jsx(\"div\", {\n    className: \"hero h-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute flex flex-col justify-center items-center w-full h-1/2 text-white uppercase\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"absolute w-full h-full z-10 bg-black opacity-50\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"h5\", {\n    className: \"text-2xl z-20 text-white uppercase mb-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"Welcome to\"), __jsx(\"h1\", {\n    className: \"text-6xl z-20 text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"Oh My Lord\")), __jsx(\"video\", {\n    className: \"\",\n    ref: videoRef,\n    width: \"3000\",\n    loop: true,\n    muted: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"source\", {\n    src: _public_video_mp4__WEBPACK_IMPORTED_MODULE_1___default.a,\n    style: {\n      height: \"100vh\",\n      width: \"100vw\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(Hero, \"PdMsmLAy5JKU3vCrhAlqGYQfKuA=\");\n\n_c = Hero;\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzP2ZhNTMiXSwibmFtZXMiOlsiSGVybyIsInZpZGVvUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJwbGF5IiwiYmFja2dyb3VuZFZpZGVvIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVLENBQUMsWUFBTTtBQUNmSCxjQUFRLENBQUNJLE9BQVQsQ0FBaUJDLElBQWpCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyx5Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUMsMEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixDQURGLEVBTUU7QUFBTyxhQUFTLEVBQUMsRUFBakI7QUFBb0IsT0FBRyxFQUFFTCxRQUF6QjtBQUFtQyxTQUFLLEVBQUMsTUFBekM7QUFBZ0QsUUFBSSxNQUFwRDtBQUFxRCxTQUFLLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBRU0sd0RBQWI7QUFBOEIsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxPQUFWO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FERjtBQVlEOztHQXJCdUJULEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGJhY2tncm91bmRWaWRlbyBmcm9tIFwiLi4vcHVibGljL3ZpZGVvLm1wNFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5wbGF5KClcbiAgICB9LCA1MDAwKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtMS8yIHRleHQtd2hpdGUgdXBwZXJjYXNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTEwIGJnLWJsYWNrIG9wYWNpdHktNTBcIj48L2Rpdj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtMnhsIHotMjAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgbWItNVwiPldlbGNvbWUgdG88L2g1PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgei0yMCB0ZXh0LXdoaXRlXCI+T2ggTXkgTG9yZDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJcIiByZWY9e3ZpZGVvUmVmfSB3aWR0aD1cIjMwMDBcIiBsb29wIG11dGVkPlxuICAgICAgICA8c291cmNlIHNyYz17YmFja2dyb3VuZFZpZGVvfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwdndcIiB9fSAvPlxuICAgICAgPC92aWRlbz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hero.js\n");

/***/ })

})