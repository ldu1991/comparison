/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sp_form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sp-form-data */ \"./node_modules/sp-form-data/dist/sp-form-data.min.js\");\n/* harmony import */ var sp_form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sp_form_data__WEBPACK_IMPORTED_MODULE_0__);\n\nvar comparing = document.querySelector('.comparing');\nif (!!comparing) {\n  var repeaterAdd = comparing.querySelector('.comparing__repeater-add');\n  repeaterAdd.addEventListener('click', function () {\n    var container = document.createElement('div');\n    container.classList.add('comparing__query');\n    var input = document.createElement('input');\n    input.type = 'text';\n    input.name = 'query_text';\n    input.placeholder = 'Параметр сравнения';\n    var deleteButton = document.createElement('button');\n    deleteButton.innerHTML = '<svg width=\"36\" height=\"35\" viewBox=\"0 0 36 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.7344 10.9766L24.481 23.6832\" stroke=\"#FF0000\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M11.3789 24.0353L24.1255 11.3286\" stroke=\"#FF0000\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M34.3013 17.5C34.3013 26.7497 26.7916 34.25 17.5257 34.25C8.25968 34.25 0.75 26.7497 0.75 17.5C0.75 8.25027 8.25968 0.75 17.5257 0.75C26.7916 0.75 34.3013 8.25027 34.3013 17.5Z\" stroke=\"#FF0000\" stroke-width=\"1.5\"/></svg>';\n    deleteButton.addEventListener('click', function () {\n      container.remove();\n    });\n    container.appendChild(input);\n    container.appendChild(deleteButton);\n    var wrapper = document.querySelector('.comparing__repeater-wrap');\n    wrapper.appendChild(container);\n  });\n  comparing.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var formData = new FormData(comparing);\n    var queryTextArr = formData.getAll('query_text');\n    formData.delete('query_text');\n    formData.append('query_text', queryTextArr);\n    var xhr = new XMLHttpRequest();\n    xhr.open('POST', './upload.php', true);\n    xhr.onload = function (message) {\n      if (xhr.status >= 200 && xhr.status < 300) {\n        //console.log('Файл успешно загружен:', xhr.responseText);\n        alert(xhr.responseText);\n      } else {\n        console.error('Произошла ошибка при загрузке файла:', xhr.statusText);\n      }\n    };\n    xhr.onerror = function () {\n      console.error('Произошла ошибка при загрузке файла.');\n    };\n    xhr.send(formData);\n  });\n}\n\n// ------------ Deleting placeholder focus ------------ //\nfunction focusFnInput(target) {\n  if (target.getAttribute('placeholder') !== null) {\n    target.setAttribute('data-placeholder', target.getAttribute('placeholder'));\n    target.setAttribute('placeholder', '');\n  }\n}\ndocument.addEventListener('focus', function (event) {\n  for (var target = event.target; target && target !== this; target = target.parentNode) {\n    if (target.matches('input, textarea')) {\n      focusFnInput.call(this, target, event);\n      break;\n    }\n  }\n}, true);\nfunction blurFnInput(target) {\n  if (target.getAttribute('data-placeholder') !== null) {\n    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));\n  }\n}\ndocument.addEventListener('blur', function (event) {\n  for (var target = event.target; target && target !== this; target = target.parentNode) {\n    if (target.matches('input, textarea')) {\n      blurFnInput.call(this, target, event);\n      break;\n    }\n  }\n}, true);\n// ---------- End Deleting placeholder focus ---------- //\n\n//# sourceURL=webpack://start/./js/script.js?");

/***/ }),

/***/ "./node_modules/sp-form-data/dist/sp-form-data.min.js":
/*!************************************************************!*\
  !*** ./node_modules/sp-form-data/dist/sp-form-data.min.js ***!
  \************************************************************/
/***/ (function(module) {

eval("/*!\n * SPFormData 5.0.0\n * VanillaJS (pure JavaScript) plugin that reads form data and Change URL Query Parameters\n * https://github.com/ldu1991/sp-form-data/#readme\n *\n * Copyright 2022 Denis Lipatov <ldu2601@gmail.com>\n *\n * Released under the BSD License\n *\n * Released on: December 19, 2023\n */\n!function(e,t){ true?module.exports=t():0}(self,(function(){return function(){\"use strict\";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function r(e){return\"object\"==typeof e&&null!==e&&void 0!==e.nodeType&&void 0!==e.nodeName&&window.Node.prototype.isPrototypeOf(e)}function n(e){return/^[|,]+$/.test(e)}function a(e){return\"string\"!=typeof e||!e||!e.trim()}function i(e){return null!==e&&0===Object.getOwnPropertyNames(e).length&&Object.getPrototypeOf(e)===Object.prototype}e.d(t,{default:function(){return te}});var o=function(e){if(Array.isArray(e))return e.filter(r);if(r(e))return[e];if(t=e,n=Object.prototype.toString.call(t),\"object\"==typeof window.NodeList?t instanceof window.NodeList:null!==t&&\"object\"==typeof t&&\"number\"==typeof t.length&&/^\\[object (HTMLCollection|NodeList|Object)]$/.test(n)&&(0===t.length||r(t[0])))return Array.from(e);var t,n;if(\"string\"==typeof e){var a=document.querySelectorAll(e);return Array.from(a)}return[]},s=function(e){var t=new FormData(e),r=[];return t.forEach((function(t,n){a(t)?\"file\"===e.querySelector('[name=\"'.concat(n,'\"]')).type&&t.size>0&&\"\"!==t.name&&r.push({name:n,value:t}):r.push({name:n,value:t})})),r},c=function(e,t,r){var n={all_query:{},string_query:{}};return e.forEach((function(e){\"file\"===r.querySelector('[name=\"'.concat(e.name,'\"]')).type?n.all_query.hasOwnProperty(e.name)?n.all_query[e.name].elements.push(e.value):n.all_query[e.name]={type:\"file\",elements:[e.value]}:n.string_query.hasOwnProperty(e.name)?(n.all_query[e.name]+=t+encodeURIComponent(e.value.replace(/ /g,\"+\")),n.string_query[e.name]+=t+encodeURIComponent(e.value.replace(/ /g,\"+\"))):(n.all_query[e.name]=encodeURIComponent(e.value.replace(/ /g,\"+\")),n.string_query[e.name]=encodeURIComponent(e.value.replace(/ /g,\"+\")))})),n},l={init:!0,separator:\",\",delayBeforeSend:300,autoSubmit:!0,changeQueryParameters:!0,presetQueries:[],multipleArray:!0,secondForm:null};function u(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if(\"undefined\"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e[\"@@iterator\"])return Array.from(e)}(e)||function(e,t){if(!e)return;if(\"string\"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);\"Object\"===r&&e.constructor&&(r=e.constructor.name);if(\"Map\"===r||\"Set\"===r)return Array.from(e);if(\"Arguments\"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){b(e,t),t.add(e)}function w(e,t,r){b(e,t),t.set(e,r)}function b(e,t){if(t.has(e))throw new TypeError(\"Cannot initialize the same private elements twice on an object\")}function g(e,t,r){if(!t.has(e))throw new TypeError(\"attempted to get private field on non-instance\");return r}function O(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,E(e,t,\"get\"))}function S(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError(\"attempted to set read only private field\");t.value=r}}(e,E(e,t,\"set\"),r),r}function E(e,t,r){if(!t.has(e))throw new TypeError(\"attempted to \"+r+\" private field on non-instance\");return t.get(e)}var j=new WeakMap,P=new WeakMap,k=new WeakMap,q=new WeakMap,A=new WeakSet,W=new WeakSet,Q=new WeakSet,_=new WeakSet,x=new WeakSet,C=new WeakSet,I=new WeakSet,F=new WeakSet,R=new WeakSet,D=new WeakSet,T=new WeakSet,U=new WeakSet,L=new WeakSet,N=function(){function e(){var t,r,a=this;y(this,e),v(this,L),v(this,U),v(this,T),v(this,D),v(this,R),v(this,F),v(this,I),v(this,C),v(this,x),v(this,_),v(this,Q),v(this,W),v(this,A),w(this,j,{writable:!0,value:void 0}),w(this,P,{writable:!0,value:void 0}),w(this,k,{writable:!0,value:void 0}),w(this,q,{writable:!0,value:void 0}),S(this,j,!0),S(this,P,{}),S(this,k,[]),S(this,q,null);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];if(1===s.length&&s[0].constructor&&\"Object\"===Object.prototype.toString.call(s[0]).slice(8,-1)?r=s[0]:(t=s[0],r=s[1]),r||(r={}),this.params=p(p({},l),r),this.elements=o(t),this.elements.length){if(this.params.secondForm&&(S(this,q,o(this.params.secondForm)),this.elements=[].concat(u(o(t)),u(O(this,q)))),void 0!==this.params.presetQueries&&!Array.isArray(this.params.presetQueries))throw new Error('\"presetQueries\" parameter must be an Array');S(this,k,this.params.presetQueries),void 0!==O(this,k)&&O(this,k).length||(this.params.presetQueries=[],this.elements.forEach((function(e){if(\"FORM\"!==e.tagName)throw new Error(\"SPFormData constructor must be passed a FORM element\");e.querySelectorAll(\"[name]\").forEach((function(e){a.params.presetQueries.includes(e.name)||a.params.presetQueries.push(e.name)}))}))),n(this.params.separator)||(this.params.separator=l.separator),this.params&&this.params.on&&Object.keys(this.params.on).forEach((function(e){a.on(e,a.params.on[e])})),this.query=null,this.params.init&&this.init()}}var t,a,i;return t=e,(a=[{key:\"on\",value:function(e,t,r){var n=this;if(!O(n,P))return n;if(\"function\"!=typeof t)return n;var a=r?\"unshift\":\"push\";return e.split(\" \").forEach((function(e){O(n,P)[e]||(O(n,P)[e]=[]),O(n,P)[e][a](t)})),n}},{key:\"once\",value:function(e,t,r){var n=this;if(!O(n,P))return n;if(\"function\"!=typeof t)return n;function a(r){n.off(e,a),a.emitterProxy&&delete a.emitterProxy,t.call(n,r)}return a.emitterProxy=t,n.on(e,a,r)}},{key:\"off\",value:function(e,t){var r=this;return O(r,P)?(e.split(\" \").forEach((function(e){void 0===t?O(r,P)[e]=[]:O(r,P)[e]&&O(r,P)[e].forEach((function(n,a){(n===t||n.emitterProxy&&n.emitterProxy===t)&&O(r,P)[e].splice(a,1)}))})),r):r}},{key:\"update\",value:function(){this.elements.length&&(g(this,x,V).call(this),g(this,L,ee).call(this,\"update\"))}},{key:\"reset\",value:function(){this.elements.length&&(this.elements.forEach((function(e){e.reset()})),this.params.autoSubmit&&g(this,x,V).call(this),g(this,I,G).call(this),this.params.autoSubmit&&g(this,L,ee).call(this,\"reset\"))}},{key:\"setValue\",value:function(e,t){var n;if(this.elements.length&&(\"string\"==typeof e?this.elements.forEach((function(t){var r=t.querySelector('[name=\"'.concat(e,'\"]'));r&&(n=r)})):r(e)&&(n=e),n&&(\"checkbox\"!==n.type||\"radio\"!==n.type||\"file\"!==n.type))){if(g(this,F,J).call(this,n.form),\"\"===t)throw new Error('setValue(name, value) \"value\" is required!');n.value=t,this.update()}}},{key:\"setChecked\",value:function(e,t){var n;this.elements.length&&(\"string\"==typeof e?this.elements.forEach((function(r){var a;if(!t)throw new Error('setChecked(name, value) \"value\" is required if string name is used!');(a=r.querySelector('[name=\"'.concat(e,'\"][value=\"').concat(t,'\"]')))&&(n=a)})):r(e)&&(n=e),!n||\"checkbox\"!==n.type&&\"radio\"!==n.type||(g(this,F,J).call(this,n.form),n.checked=!0,this.update()))}},{key:\"init\",value:function(){this.elements.length&&(g(this,L,ee).call(this,\"beforeInit\",!1),g(this,R,K).call(this),this.params.autoSubmit&&g(this,D,X).call(this),g(this,T,Y).call(this),g(this,U,Z).call(this),g(this,L,ee).call(this,\"init\"),g(this,L,ee).call(this,\"afterInit\",!1))}}])&&d(t.prototype,a),i&&d(t,i),Object.defineProperty(t,\"prototype\",{writable:!1}),e}();function M(e){var t=this;if(i(e))g(this,I,G).call(this);else{var r={};Object.keys(e).forEach((function(n){void 0!==e[n].type&&\"file\"===e[n].type?r[n]=e[n].elements:a(e[n])||(t.params.multipleArray&&-1!==e[n].indexOf(t.params.separator)?r[n]=decodeURIComponent(e[n]).replace(/\\+/g,\" \").split(t.params.separator):r[n]=decodeURIComponent(e[n]).replace(/\\+/g,\" \"))})),this.query=r}}function $(){var e=this;if(this.params.changeQueryParameters){var t=new URLSearchParams(window.location.search),r={};t.forEach((function(t,n){var i=e.params,o=i.multipleArray,s=i.separator;a(t)||(o&&-1!==t.indexOf(s)?r[n]=t.replace(/\\+/g,\" \").split(s):r[n]=t.replace(/\\+/g,\" \"))})),this.query=i(r)?null:r}}function z(e){if(i(e))g(this,I,G).call(this);else{var t=new URL(window.location),r=this.params.presetQueries;Object.keys(e).forEach((function(e){t.searchParams.forEach((function(r,n){n!==e&&t.searchParams.delete(n)}))})),r.forEach((function(r){e.hasOwnProperty(r)&&t.searchParams.set(r,e[r])}));var n=decodeURIComponent(t.href);window.history.pushState({},\"\",n),g(this,W,$).call(this)}g(this,L,ee).call(this,\"change\")}function B(e){g(this,A,M).call(this,e),g(this,L,ee).call(this,\"change\")}function V(){var e=this,t={};this.elements.forEach((function(r){var n=s(r);n.length?t=e.params.changeQueryParameters?p(p({},t),c(n,e.params.separator,r).string_query):p(p({},t),c(n,e.params.separator,r).all_query):g(e,I,G).call(e)})),this.params.changeQueryParameters?g(this,Q,z).call(this,t):g(this,_,B).call(this,t)}function H(){var e=this,t={};this.elements.forEach((function(r){var n=s(r);n.length?t=e.params.changeQueryParameters?p(p({},t),c(n,e.params.separator,r).string_query):p(p({},t),c(n,e.params.separator,r).all_query):g(e,I,G).call(e)})),g(this,A,M).call(this,t)}function G(){this.params.changeQueryParameters&&window.history.pushState({},\"\",\".\"),this.query=null}function J(e){var t=this;t.params.secondForm&&!O(t,q).includes(e)&&O(t,q).forEach((function(e){e.reset()}))}function K(){var e=this,t=this;t.elements.forEach((function(r){r.addEventListener(\"submit\",(function(r){if(r.preventDefault(),!t.params.autoSubmit){for(var n=r.target;n&&n!==e;n=n.parentNode)g(e,F,J).call(e,n);g(t,x,V).call(t),g(t,L,ee).call(t,\"submit\")}}))}))}function X(){var e=this,t=this;t.elements.forEach((function(r){var n=\"[name]\";if(void 0!==O(t,k)){var a=t.params.presetQueries,i=[];a.forEach((function(e){i.push('[name=\"'.concat(e,'\"]'))})),n=i.join(\",\")}r.addEventListener(\"change\",(function(r){for(var a=r.target;a&&a!==e;a=a.parentNode)if(a.matches(n)){g(e,F,J).call(e,a.form),O(t,j)&&clearTimeout(O(t,j)),S(t,j,setTimeout((function(){g(t,x,V).call(t)}),t.params.delayBeforeSend));break}}),!0)}))}function Y(){var e=this;window.addEventListener(\"popstate\",(function(){a(window.location.search)?g(e,I,G).call(e):g(e,W,$).call(e),g(e,L,ee).call(e,\"popstate\")}))}function Z(){a(window.location.search)?g(this,C,H).call(this):g(this,W,$).call(this)}function ee(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this,n=t?r.query:\"\";if(!O(r,P))return r;var a=Array.isArray(e)?e:e.split(\" \");return a.forEach((function(e){O(r,P)&&O(r,P)[e]&&O(r,P)[e].forEach((function(e){e.call(r,n)}))})),r}var te=N;return t=t.default}()}));\n\n//# sourceURL=webpack://start/./node_modules/sp-form-data/dist/sp-form-data.min.js?");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;