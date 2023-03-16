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

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project__comments/./src/scss/base.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _js_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/comment.js */ \"./src/js/comment.js\");\n/* harmony import */ var _js_posts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/posts.js */ \"./src/js/posts.js\");\n/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utils.js */ \"./src/js/utils.js\");\n\n\n\n\n\nconst commentsContainer = document.querySelector('.comments');\nconst formAddComment = document.querySelector('#form-comment');\n\nlet comments = [];\n\n_js_posts_js__WEBPACK_IMPORTED_MODULE_2__.posts.forEach((post) => {\n  comments.push(post);\n});\n\nloadComments();\nsaveComments();\n\nformAddComment.addEventListener('submit', () => {\n  const elementsFormComment = [...formAddComment.elements];\n  const dataFromForm = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.serializeForm)(elementsFormComment);\n  comments.push(dataFromForm);\n  saveComments();\n  showComments();\n});\n\n\n\nfunction onClickToRemove(id) {\n  const index = comments.findIndex(n => n._id === id);\n  if (index !== -1) {\n    comments.splice(index, 1);\n  }\n  saveComments();\n  location.reload();\n}\n\n\nfunction saveComments() {\n  localStorage.setItem('comments', JSON.stringify(comments));\n}\n\nfunction loadComments() {\n  if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));\n  showComments();\n}\n\nfunction showComments() {\n  comments.forEach((post) => {\n    const commentInstance = new _js_comment_js__WEBPACK_IMPORTED_MODULE_1__.Comment(post, '#comment-template', onClickToRemove);\n    const newCommentElement = commentInstance.getElement();\n    commentsContainer.append(newCommentElement);\n  })\n}\n\n// function timeConverter(UNIX_timestamp){\n//     var a = new Date(UNIX_timestamp * 1000);\n//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];\n//     var year = a.getFullYear();\n//     var month = months[a.getMonth()];\n//     var date = a.getDate();\n//     var hour = a.getHours();\n//     var min = a.getMinutes();\n//     var sec = a.getSeconds();\n//     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;\n//     return time;\n//   }\n\n//# sourceURL=webpack://project__comments/./src/app.js?");

/***/ }),

/***/ "./src/js/comment.js":
/*!***************************!*\
  !*** ./src/js/comment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comment\": () => (/* binding */ Comment)\n/* harmony export */ });\nclass Comment {\n  constructor(dataComment, selectorTemplate, onClickToRemove = () => { }) {\n    this._data = dataComment;\n    this._selectorTemplate = selectorTemplate;\n    this.onClickToRemove = onClickToRemove;\n  }\n\n  _getTemplate() {\n    return document.querySelector(this._selectorTemplate).content.querySelector('.comment');\n  }\n\n  getElement() {\n    this.element = this._getTemplate().cloneNode(true);\n    const commentDelete = this.element.querySelector('.comment__delete');\n    let commentTitle = this.element.querySelector('.comment__name');\n    let commentText = this.element.querySelector('.comment__text');\n    let commentLike = this.element.querySelector('.comment__like');\n    let commentDate = this.element.querySelector('.comment__date');\n    let commentTime = this.element.querySelector('.comment__time');\n\n    commentDelete.addEventListener('click', (e) => {\n      if (confirm('Are you sure?')) {\n        this.onClickToRemove(this._data._id);\n      }\n    });\n\n    if (this._data.favourite) {\n      commentLike.classList.add('active');\n    }\n\n    commentLike.addEventListener('click', () => {\n      commentLike.classList.toggle('active');\n    });\n\n    commentTitle.textContent = this._data.name ?? 'NO_NAME';\n    commentText.textContent = this._data.text;\n    const equalDate1 = new Date().toLocaleDateString();\n    const equalDate2 = this._data.date;\n    const equalDate3 = new Date(Date.now()-86400000).toLocaleDateString();\n    if (equalDate1 === equalDate2){\n      commentDate.textContent = 'Сегодня';\n    } else if (equalDate3 === equalDate2){\n      commentDate.textContent = 'Вчера';\n    }\n    else{\n      commentDate.textContent = equalDate2;\n    }\n    commentTime.textContent = this._data.time;\n    return this.element;\n  }\n}\n\n//# sourceURL=webpack://project__comments/./src/js/comment.js?");

/***/ }),

/***/ "./src/js/posts.js":
/*!*************************!*\
  !*** ./src/js/posts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"posts\": () => (/* binding */ posts)\n/* harmony export */ });\nconst posts = [\n    {\n        \"_id\": 1,\n        \"name\": \"Tom\",\n        \"text\": \"Testing text for comments.\",\n        \"favourite\": false,\n        \"date\": \"15.03.2023\",\n        \"time\": '01:42',\n    },\n    {\n        \"_id\": 2,\n        \"name\": \"Alex\",\n        \"text\": \"Testing text for comments.\",\n        \"favourite\": false,\n        \"date\": '14.03.2023 г.',\n        \"time\": '01:42',\n    },\n    {\n        \"_id\": 3,\n        \"name\": \"Boris\",\n        \"text\": \"Testing text for comments.\",\n        \"favourite\": true,\n        \"date\": '13.03.2023 г.',\n        \"time\": '01:42',\n    },\n    {\n        \"_id\": 4,\n        \"name\": \"Tom\",\n        \"text\": \"Testing text for comments.\",\n        \"favourite\": false,\n        \"date\": '12.03.2023 г.',\n        \"time\": '01:42',\n    },\n];\n\n//# sourceURL=webpack://project__comments/./src/js/posts.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"serializeForm\": () => (/* binding */ serializeForm)\n/* harmony export */ });\n\nfunction serializeForm(elements) {\n    const formData = {};\n    elements.forEach((input) => {\n        formData._id = Math.floor(Math.random() * 100);\n        if (input.name === 'text') {\n            if (input.value === '') {\n                formData.text = input.value;\n            }\n        }\n        if (input.name === 'name') {\n            formData.name = input.value;\n        }\n        formData.favourite = false;\n        if (input.name === 'date') {\n            if (input.value === '' || input.valueAsNumber > Date.now()) {\n                let date = new Date();\n                formData.date = date.toLocaleDateString();\n                formData.time = date.toLocaleTimeString().slice(0,-3);\n            }else{\n                let date = new Date(input.valueAsNumber);\n                formData.date = date.toLocaleDateString();\n                formData.time = new Date().toLocaleTimeString().slice(0,-3);\n            }\n        }\n    });\n    return formData;\n}\n\n\n//# sourceURL=webpack://project__comments/./src/js/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;