/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/navigation.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/navigation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


// Displaying the child menu
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).parent('.sub-menu').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});

// Adding the JavaScript for the accessibility
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menuButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menuLink = menuButton.parent();
  var menuItem = menuLink.parent();
  if (menuItem.hasClass('open')) {
    menuItem.add(menuItem.find('.menu-item .open')).removeClass('open');
    menuLink.add(menuItem.find('a')).attr('aria-expanded', 'false');
    menuButton.find('.menu-button-show').attr('aria-hidden', 'false');
    menuButton.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menuItem.siblings('.open').find('>a>.menu-button').trigger('click');
    menuItem.addClass('open');
    menuLink.attr('aria-expanded', 'true');
    menuButton.find('.menu-button-show').attr('aria-hidden', 'true');
    menuButton.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/***/ (() => {

console.log('Hi Custom Theme');

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider.js */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation */ "./src/assets/js/components/navigation.js");
 // Using '$' instead of jquery


var x = 0;
console.log(x);

// Using '$' instead of jquery
// $('body').click(()=>{
//     alert('Hi');
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ZjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDOzs7Ozs7Ozs7OztBQ0E5Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnVCLENBQVM7QUFDQTtBQUNBO0FBRWhDLElBQUlDLENBQUMsR0FBRyxDQUFDO0FBQ1RGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFDLENBQUM7O0FBR2Q7QUFDQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2N1c3R0aGVtZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2N1c3R0aGVtZS8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vY3VzdHRoZW1lL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2N1c3R0aGVtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY3VzdHRoZW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jdXN0dGhlbWUvLi9zcmMvYXNzZXRzL2pzL2J1bmRsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBEaXNwbGF5aW5nIHRoZSBjaGlsZCBtZW51XG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAgIGlmKCEkKGUuY3VycmVudFRhcmdldCkucGFyZW50KCcuc3ViLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4nKS5maW5kKCc+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbn0pXG5cbi8vIEFkZGluZyB0aGUgSmF2YVNjcmlwdCBmb3IgdGhlIGFjY2Vzc2liaWxpdHlcbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgbWVudUJ1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBsZXQgbWVudUxpbmsgPSBtZW51QnV0dG9uLnBhcmVudCgpO1xuICAgIGxldCBtZW51SXRlbSA9IG1lbnVMaW5rLnBhcmVudCgpO1xuICAgIGlmKG1lbnVJdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgbWVudUl0ZW0uYWRkKG1lbnVJdGVtLmZpbmQoJy5tZW51LWl0ZW0gLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgbWVudUxpbmsuYWRkKG1lbnVJdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBtZW51QnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgbWVudUJ1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZW51SXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICBtZW51SXRlbS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICBtZW51TGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgbWVudUJ1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgbWVudUJ1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgfVxufSk7XG5cbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XG4gICAgaWYoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxufSk7IiwiY29uc29sZS5sb2coJ0hpIEN1c3RvbSBUaGVtZScpOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknOyAgICAgICAgIC8vIFVzaW5nICckJyBpbnN0ZWFkIG9mIGpxdWVyeVxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24nXG5cbmxldCB4ID0gMDtcbmNvbnNvbGUubG9nKHgpO1xuXG5cbi8vIFVzaW5nICckJyBpbnN0ZWFkIG9mIGpxdWVyeVxuLy8gJCgnYm9keScpLmNsaWNrKCgpPT57XG4vLyAgICAgYWxlcnQoJ0hpJyk7XG4vLyB9KSJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwiY3VycmVudFRhcmdldCIsInBhcmVudCIsImxlbmd0aCIsImZpbmQiLCJ0cmlnZ2VyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwibWVudUJ1dHRvbiIsIm1lbnVMaW5rIiwibWVudUl0ZW0iLCJoYXNDbGFzcyIsImFkZCIsImF0dHIiLCJzaWJsaW5ncyIsImRvY3VtZW50IiwiY2xpY2siLCJjb25zb2xlIiwibG9nIiwieCJdLCJzb3VyY2VSb290IjoiIn0=