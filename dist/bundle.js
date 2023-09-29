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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content {\n  display: grid;\n  grid-template-areas:\n    \"header\"\n    \"todos\";\n}\n\n#header {\n  grid-area: header;\n  display: flex;\n}\n\n#header h1 {\n  flex: 1;\n  text-align: center;\n}\n\n#sidebar {\n  grid-area: sidebar;\n}\n\n#todo-form {\n  display: grid;\n  grid-template-areas:\n    \"project project\"\n    \"title title\"\n    \"description description\"\n    \"date time\"\n    \"priority priority\"\n    \"submit submit\";\n}\n\n#submit-todo-bttn {\n  grid-area: submit;\n}\n\n#todo-form #todo-title {\n  grid-area: title;\n  width: 100%;\n}\n\n#title-input {\n  width: 100%;\n}\n\n#todo-description {\n  grid-area: description;\n  width: 100%;\n}\n\n#description-input {\n  width: 100%;\n}\n\n#todo-priority {\n  grid-area: priority;\n}\n\n#add-time-bttn {\n  grid-area: time;\n}\n\n#todo-time {\n  grid-area: time;\n}\n\n#todo-list-view {\n  grid-area: todos;\n}\n\n#todos {\n  grid-area: \"todos\";\n}\n\n#new-task-bttn {\n  width: 100%;\n}\n\n#todo-project {\n  grid-area: project;\n}\n\n#todo-project-input {\n  width: 100%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todos-app/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todos-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todos-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todos-app/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todos-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/controllers/TodoController.js":
/*!**********************************************!*\
  !*** ./src/js/controllers/TodoController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoController)\n/* harmony export */ });\n/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Todo */ \"./src/js/models/Todo.js\");\n/* harmony import */ var _views_TodoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/TodoView */ \"./src/js/views/TodoView.js\");\n\n\n\n// Controller class for the different app components\nclass TodoController {\n  constructor(todoFormView, todoListView) {\n    // a collection of todo tasks\n    this._todos = [];\n\n    this.todoFormView = todoFormView;\n    // overwrites the form view onAddTodo method to point to the controller's addTodo method\n    todoFormView.onAddTodo = (data) => {\n      this.addTodo(data);\n      todoFormView.cleanUp();\n    };\n\n    // passes the todos collection to the todoListView for rendering\n    this.todoListView = todoListView;\n    this.todoListView._todos = this._todos;\n\n    this.todoListView.newTodo = () => {\n      this.newTodo();\n    };\n  }\n\n  // takes the data for a new todo task and adds it to our this._todos collection\n  addTodo(data) {\n    let newTodo = new _models_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n      data.title,\n      data.description,\n      data.dueDate,\n      data.priority\n    );\n\n    let todoView = new _views_TodoView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newTodo);\n\n    this.todoListView.addTodo(todoView._content);\n  }\n\n  newTodo() {\n    this.todoFormView.form.reset();\n    this.todoFormView.form.style.display = \"grid\";\n  }\n}\n\n\n//# sourceURL=webpack://todos-app/./src/js/controllers/TodoController.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_TodoFormView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/TodoFormView */ \"./src/js/views/TodoFormView.js\");\n/* harmony import */ var _views_TodoListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/TodoListView */ \"./src/js/views/TodoListView.js\");\n/* harmony import */ var _controllers_TodoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/TodoController */ \"./src/js/controllers/TodoController.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n\n\n\n\n\n// Main script orchestrates the web app content\n(function () {\n  let body = document.querySelector(\"body\");\n  let content = document.createElement(\"div\");\n  content.id = \"content\";\n\n  content.innerHTML = `\n    <header id=\"header\">\n      <button id=\"projects-hamburger\">Projects</button>\n      <h1>Todos App</h1>\n    </header>\n  `;\n\n  body.appendChild(content);\n\n  let todosSection = document.createElement(\"div\");\n  todosSection.id = \"todos\";\n\n  // a view class which handles the rendering and interactions of form elements for a user's new todo task.\n  let todoForm = new _views_TodoFormView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  // a view class which handles the rendering and interactions of the elements in a collection of todo tasks.\n  let todoListView = new _views_TodoListView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n  todosSection.appendChild(todoForm.form);\n  todosSection.appendChild(todoListView.list);\n\n  // Controller class which handles interactions between different app components\n  let todoController = new _controllers_TodoController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](todoForm, todoListView);\n\n  content.appendChild(todosSection);\n})();\n\n\n//# sourceURL=webpack://todos-app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Todo.js":
/*!*******************************!*\
  !*** ./src/js/models/Todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n// A model class representing a todo task\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this._title = title;\n    this._description = description;\n    this._dueDate = dueDate;\n    this._priority = priority;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  set title(title) {\n    this._title = title;\n  }\n\n  get description() {\n    return this._description;\n  }\n\n  set description(description) {\n    this._description = description;\n  }\n\n  get dueDate() {\n    return this._dueDate;\n  }\n\n  set dueDate(dueDate) {\n    this._dueDate = dueDate;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n\n  set priority(priority) {\n    this._priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://todos-app/./src/js/models/Todo.js?");

/***/ }),

/***/ "./src/js/views/TodoFormView.js":
/*!**************************************!*\
  !*** ./src/js/views/TodoFormView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFormView)\n/* harmony export */ });\n//  View class for the todo task form\nclass TodoFormView {\n  constructor() {\n    this._form = document.createElement(\"form\");\n    this._form.style.display = \"none\";\n    this._form.id = \"todo-form\";\n\n    this._form.innerHTML = `\n<label id=\"todo-title\">\n    Title:\n    <input type=\"text\" id=\"title-input\"/>\n</label>\n<label id=\"todo-description\">\n    Description:\n    <textarea id=\"description-input\"> </textarea>\n</label>\n<label>\n    Due Date:\n    <input type=\"date\" id=\"due-date\"/>\n</label>\n<fieldset id=\"todo-priority\">\n    <legend>Priority</legend>\n    <label>\n        <input name=\"priority\" value=\"chill\" type=\"radio\">\n        Chill\n    </label>\n    <label>\n        <input name=\"priority\" value=\"normal\" type=\"radio\" checked>\n        Normal\n    </label>\n    <label>\n        <input name=\"priority\" value=\"important\" type=\"radio\">\n        Important\n    </label>\n</fieldset>`;\n\n    this.setupTimeInput();\n    this.setupProjectsDropDown();\n\n    let submit = document.createElement(\"button\");\n    submit.id = \"submit-todo-bttn\";\n    submit.textContent = \"Add\";\n    submit.style.width = \"100%\";\n\n    this.form.appendChild(submit);\n\n    this.form.addEventListener(\"submit\", (e) => {\n      const titleInput = document.getElementById(\"title-input\");\n      const descriptionInput = document.getElementById(\"description-input\");\n      const dueDateInput = document.getElementById(\"due-date\");\n\n      e.preventDefault();\n\n      let todoData = {\n        title: titleInput.value,\n        description: descriptionInput.value,\n        dueDate: dueDateInput.value,\n        priority: document.querySelector(\"input[name=priority]:checked\").value,\n      };\n\n      this.onAddTodo(todoData);\n\n      this.form.reset();\n    });\n  }\n\n  get form() {\n    return this._form;\n  }\n\n  onAddTodo(data) {\n    // placeholder function to be overriden by controller class, a simple form of event handling\n  }\n\n  cleanUp() {\n    let addTimeBttn = document.querySelector(\"#add-time-bttn\");\n    addTimeBttn.style.display = \"block\";\n\n    let timeInput = document.querySelector(\"#todo-time\");\n    timeInput.style.display = \"none\";\n\n    this.form.style.display = \"none\";\n  }\n\n  setupTimeInput() {\n    let addTimeBttn = document.createElement(\"button\");\n    addTimeBttn.id = \"add-time-bttn\";\n    addTimeBttn.setAttribute(\"type\", \"button\");\n    addTimeBttn.textContent = \"Add Time\";\n\n    let timeInput = document.createElement(\"input\");\n    timeInput.setAttribute(\"type\", \"time\");\n    timeInput.id = \"time\";\n\n    let timeLabel = document.createElement(\"label\");\n    timeLabel.id = \"todo-time\";\n    timeLabel.style.display = \"none\";\n    timeLabel.textContent = \"Due Time:\";\n    timeLabel.appendChild(timeInput);\n\n    this.form.appendChild(addTimeBttn);\n    this.form.appendChild(timeLabel);\n\n    addTimeBttn.addEventListener(\"click\", (e) => {\n      timeLabel.style.display = \"inline-block\";\n      addTimeBttn.style.display = \"none\";\n    });\n  }\n\n  setupProjectsDropDown() {\n    let label = document.createElement(\"label\");\n    label.textContent = \"Project: \";\n    label.id = \"todo-project\";\n    label.width = \"100%\";\n\n    let selection = document.createElement(\"select\");\n    selection.id = \"todo-project-input\";\n    selection.setAttribute(\"name\", \"project\");\n    selection.innerHTML = `\n      <option>None</option>\n      <option>Add New Project</option>\n    `;\n\n    label.appendChild(selection);\n    this.form.appendChild(label);\n\n    selection.addEventListener(\"change\", (e) => {});\n  }\n}\n\n\n//# sourceURL=webpack://todos-app/./src/js/views/TodoFormView.js?");

/***/ }),

/***/ "./src/js/views/TodoListView.js":
/*!**************************************!*\
  !*** ./src/js/views/TodoListView.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoListView)\n/* harmony export */ });\n// view class for a todo task list\nclass TodoListView {\n  constructor() {\n    this._content = document.createElement(\"div\");\n    this._content.id = \"todo-list-view\";\n    this._todosList = document.createElement(\"ul\");\n    this._todos = [];\n\n    let newTodoBttn = document.createElement(\"button\");\n    newTodoBttn.setAttribute(\"type\", \"button\");\n    newTodoBttn.textContent = \"New Task\";\n    newTodoBttn.id = \"new-task-bttn\";\n    this._content.appendChild(newTodoBttn);\n\n    let sectionHeader = document.createElement(\"h1\");\n    sectionHeader.textContent = \"ToDos\";\n    this._content.appendChild(sectionHeader);\n    sectionHeader.style.width = \"100%\";\n    sectionHeader.style.textAlign = \"center\";\n\n    this._content.appendChild(this._todosList);\n    newTodoBttn.addEventListener(\"click\", (e) => {\n      this.newTodo();\n    });\n  }\n\n  newTodo() {\n    // filler class to be overwritten by the controller class\n  }\n\n  // adds a new todo task for rendering.\n  addTodo(todo) {\n    this._todosList.appendChild(todo);\n  }\n\n  render() {\n    this._content.innerHTML = \"\";\n\n    for (let todo of this._todos) {\n      let li = document.createElement(\"li\");\n\n      let title = document.createElement(\"h1\");\n      title.textContent = todo.title;\n\n      let description = document.createElement(\"p\");\n      description.textContent = todo.description;\n\n      li.appendChild(title);\n      li.appendChild(description);\n\n      this._content.appendChild(li);\n    }\n  }\n\n  get list() {\n    return this._content;\n  }\n}\n\n\n//# sourceURL=webpack://todos-app/./src/js/views/TodoListView.js?");

/***/ }),

/***/ "./src/js/views/TodoView.js":
/*!**********************************!*\
  !*** ./src/js/views/TodoView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoView)\n/* harmony export */ });\n// View class for a single todo task\nclass TodoView {\n  constructor(todo) {\n    this._content = document.createElement(\"div\");\n    this._content.classList.add(\"todo\");\n    this._render(todo);\n  }\n\n  _render(todo) {\n    let title = document.createElement(\"h1\");\n    title.textContent = todo.title;\n\n    let description = document.createElement(\"p\");\n    description.textContent = todo.description;\n\n    let dueDate = document.createElement(\"span\");\n    dueDate.textContent = todo.dueDate;\n\n    console.log(todo);\n\n    switch (todo.priority) {\n      case \"chill\":\n        console.log(\"inside chill case\");\n        this._content.style.borderLeft = \"8px solid #9E9E9E\";\n        break;\n      case \"normal\":\n        this._content.style.borderLeft = \"8px solid #4CAF50\";\n        break;\n      case \"important\":\n        this._content.style.borderLeft = \"8px solid #F44336\";\n        break;\n    }\n\n    this._content.style.borderRadius = \"16px\";\n    this._content.appendChild(title);\n    this._content.appendChild(description);\n    this._content.appendChild(dueDate);\n  }\n}\n\n\n//# sourceURL=webpack://todos-app/./src/js/views/TodoView.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;