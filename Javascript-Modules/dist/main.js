/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFailedFilms: () => (/* binding */ getFailedFilms),\n/* harmony export */   getPassedFilms: () => (/* binding */ getPassedFilms)\n/* harmony export */ });\n// api.js\r\n// \"use strict\";\r\n\r\nasync function getPassedFilms() {\r\n  const res = await fetch(\"https://bechdel.azurewebsites.net/api/films/passed\");\r\n  return await res.json();\r\n}\r\n\r\nasync function getFailedFilms() {\r\n  const res = await fetch(\"https://bechdel.azurewebsites.net/api/films/failed\");\r\n  return await res.json();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://base/./src/api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n// index.js\r\n// \"use strict\";\r\n\r\n\r\n\r\n\r\nconst loadButton = document.getElementById(\"loadButton\");\r\nconst busyMsg = document.getElementById(\"busyMsg\");\r\nconst results = document.getElementById(\"results\");\r\n\r\nloadButton.addEventListener(\"click\", async () => {\r\n  busyMsg.classList.remove(\"hidden\");\r\n  const data = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.getPassedFilms)();\r\n  createGrid(data);\r\n  busyMsg.classList.add(\"hidden\");\r\n});\r\n\r\nfunction createGrid(data) {\r\n  let html = \"\";\r\n  data.results.forEach((item) => {\r\n    html += (0,_template__WEBPACK_IMPORTED_MODULE_1__.generateFilm)(item);\r\n  });\r\n\r\n  results.innerHTML = html;\r\n}\r\n\n\n//# sourceURL=webpack://base/./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateFilm: () => (/* binding */ generateFilm)\n/* harmony export */ });\n// template.js\r\n// \"use strict\";\r\n\r\nfunction generateFilm(film) {\r\n  return `\r\n    <div class=\"flex rounded-lg  bg-white hover:bg-gray-200 h-60\">\r\n      <div class=\"flex-none w-40 relative\">\r\n      <img src=\"${film.posterUrl}\" alt=\"${film.title}\" class=\"inset-0 absolute w-full object-cover h-full rounded-l\" />\r\n      </div>\r\n      <div class=\"p-1 overflow-clip\">\r\n        <div class=\"text-lg font-bold\">${film.title} (${film.year})</div>\r\n        <div><strong>IMDB Rating</strong>: <a href=\"https://imdb.com/title/${film.imdbId}/\" class=\"text-amber-700 hover:text-amber-500\" target=\"_blank\">${film.rating}</a></div>\r\n        <div class=\"text-sm\">${film.overview}</div>\r\n\r\n      </div>\r\n    </div>\r\n    `;\r\n}\r\n\n\n//# sourceURL=webpack://base/./src/template.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;