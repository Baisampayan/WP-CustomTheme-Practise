/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function strip_tags(str, allow) {
  // making sure the allow arg is a string containing only tags in lowercase (<a><b><c>)
  allow = (((allow || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return str.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allow.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strip_tags);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags */ "./src/assets/js/helpers/strip-tags.js");



// console.log(wp);
wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    // console.log(to);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html((0,_helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});
wp.customize('_themename_accent_color', function (value) {
  value.bind(function (to) {
    var inline_css = "";
    var inline_css_obj = _themename['inline-css'];
    for (var selectors in inline_css) {
      inline_css += "".concat(selectors, " {");
      for (var properties in inline_css_obj[selectors]) {
        var _value = inline_css_obj[selectors][properties];
        inline_css += "".concat(properties, ": ").concat(wp.customize(_value).get());
      }
      inline_css += "}";
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_themename-stylesheet-inline-css').html();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplLXByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFVLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFDO0VBQzNCO0VBQ0FBLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQ0EsS0FBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQzNCQyxXQUFXLEVBQUUsQ0FDYkMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUNoQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUVULElBQUlDLElBQUksR0FBRyxnQ0FBZ0M7RUFDM0MsSUFBSUMsa0JBQWtCLEdBQUcsMENBQTBDO0VBQ25FLE9BQU9OLEdBQUcsQ0FBQ08sT0FBTyxDQUFDRCxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FDekNDLE9BQU8sQ0FBQ0YsSUFBSSxFQUFFLFVBQVVHLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQzdCLE9BQU9SLEtBQUssQ0FBQ1MsT0FBTyxDQUFDLEdBQUcsR0FBR0QsRUFBRSxDQUFDUCxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR00sRUFBRSxHQUFFLEVBQUU7RUFDcEUsQ0FBQyxDQUFDO0FBQ047QUFFQSxpRUFBZVQsVUFBVTs7Ozs7Ozs7OztBQ2Z6Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnVCO0FBQ3VCOztBQUU5QztBQUNBYSxFQUFFLENBQUNDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDNUNBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLEVBQUUsRUFBSztJQUNmO0lBQ0FMLDZDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ00sSUFBSSxDQUFDbEIsK0RBQVUsQ0FBQ2lCLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztFQUN2RCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRkosRUFBRSxDQUFDQyxTQUFTLENBQUMseUJBQXlCLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQy9DQSxLQUFLLENBQUNDLElBQUksQ0FBQyxVQUFDQyxFQUFFLEVBQUs7SUFDZixJQUFJRSxVQUFVLEtBQUs7SUFDbkIsSUFBSUMsY0FBYyxHQUFHQyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQzdDLEtBQUksSUFBSUMsU0FBUyxJQUFJSCxVQUFVLEVBQUU7TUFDN0JBLFVBQVUsY0FBT0csU0FBUyxPQUFJO01BQzFCLEtBQUksSUFBSUMsVUFBVSxJQUFJSCxjQUFjLENBQUNFLFNBQVMsQ0FBQyxFQUFFO1FBQzdDLElBQUlQLE1BQUssR0FBR0ssY0FBYyxDQUFDRSxTQUFTLENBQUMsQ0FBQ0MsVUFBVSxDQUFDO1FBQ2pESixVQUFVLGNBQU9JLFVBQVUsZUFBS1YsRUFBRSxDQUFDQyxTQUFTLENBQUNDLE1BQUssQ0FBQyxDQUFDUyxHQUFHLEVBQUUsQ0FBRTtNQUMvRDtNQUNKTCxVQUFVLE9BQU87SUFDckI7SUFDQVAsNkNBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDTSxJQUFJLEVBRTFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0dGhlbWUvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vY3VzdHRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N1c3R0aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N1c3R0aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N1c3R0aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N1c3R0aGVtZS8uL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3RyaXBfdGFncyhzdHIsIGFsbG93KXtcbiAgICAvLyBtYWtpbmcgc3VyZSB0aGUgYWxsb3cgYXJnIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25seSB0YWdzIGluIGxvd2VyY2FzZSAoPGE+PGI+PGM+KVxuICAgIGFsbG93ID0gKCgoYWxsb3cgfHwgJycpICsgJycpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAubWF0Y2goLzxbYS16XVthLXowLTldKj4vZykgfHwgW10pXG4gICAgLmpvaW4oJycpO1xuICAgIFxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naTtcbiAgICB2YXIgY29tbWVudHNBbmRQaHBUYWdzID0gLzwhLS1bXFxzXFxTXSo/LS0+fDxcXD8oPzpwaHApP1tcXHNcXFNdKj9cXD8+L2dpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKVxuICAgIC5yZXBsYWNlKHRhZ3MsIGZ1bmN0aW9uICgkMCwgJDEpIHtcbiAgICAgICAgcmV0dXJuIGFsbG93LmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDonJztcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBfdGFnczsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzJztcblxuLy8gY29uc29sZS5sb2cod3ApO1xud3AuY3VzdG9taXplKCdfdGhlbWVuYW1lX3NpdGVfaW5mbycsICh2YWx1ZSkgPT4ge1xuICAgIHZhbHVlLmJpbmQoKHRvKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvKTtcbiAgICAgICAgJCgnLmMtc2l0ZS1pbmZvX190ZXh0JykuaHRtbChzdHJpcF90YWdzKHRvLCAnPGE+JykpO1xuICAgIH0pXG59KVxuXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfYWNjZW50X2NvbG9yJywgKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcbiAgICAgICAgbGV0IGlubGluZV9jc3MgPSBgYDtcbiAgICAgICAgbGV0IGlubGluZV9jc3Nfb2JqID0gX3RoZW1lbmFtZVsnaW5saW5lLWNzcyddO1xuICAgICAgICBmb3IobGV0IHNlbGVjdG9ycyBpbiBpbmxpbmVfY3NzKSB7XG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGAke3NlbGVjdG9yc30ge2A7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wZXJ0aWVzIGluIGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yc10pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JzXVtwcm9wZXJ0aWVzXTsgXG4gICAgICAgICAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7cHJvcGVydGllc306ICR7d3AuY3VzdG9taXplKHZhbHVlKS5nZXQoKX1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgfWA7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI190aGVtZW5hbWUtc3R5bGVzaGVldC1pbmxpbmUtY3NzJykuaHRtbChcbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJzdHJpcF90YWdzIiwic3RyIiwiYWxsb3ciLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCJjb21tZW50c0FuZFBocFRhZ3MiLCJyZXBsYWNlIiwiJDAiLCIkMSIsImluZGV4T2YiLCIkIiwid3AiLCJjdXN0b21pemUiLCJ2YWx1ZSIsImJpbmQiLCJ0byIsImh0bWwiLCJpbmxpbmVfY3NzIiwiaW5saW5lX2Nzc19vYmoiLCJfdGhlbWVuYW1lIiwic2VsZWN0b3JzIiwicHJvcGVydGllcyIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=