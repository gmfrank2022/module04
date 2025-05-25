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

/***/ "./src/EmployeeAdd.jsx":
/*!*****************************!*\
  !*** ./src/EmployeeAdd.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeAdd)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _callSuper(_this, derived, args) {\n  function isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    } catch (e) {\n      return false;\n    }\n  }\n  derived = _getPrototypeOf(derived);\n  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));\n}\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nvar EmployeeAdd = /*#__PURE__*/function (_React$Component) {\n  function EmployeeAdd() {\n    var _this2;\n    _classCallCheck(this, EmployeeAdd);\n    _this2 = _callSuper(this, EmployeeAdd);\n    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);\n    return _this2;\n  }\n  _inherits(EmployeeAdd, _React$Component);\n  return _createClass(EmployeeAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.employeeAdd;\n      var employee = {\n        name: form.name.value,\n        ext: form.ext.value,\n        email: form.email.value,\n        title: form.title.value,\n        dateHired: new Date(),\n        isEmployed: true\n      };\n      this.props.createEmployee(employee);\n      form.name.value = '';\n      form.ext.value = '';\n      form.email.value = '';\n      form.title.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", {\n        name: \"employeeAdd\",\n        onSubmit: this.handleSubmit\n      }, \"Name: \", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\"\n      }), /*#__PURE__*/React.createElement(\"br\", null), \"Extension: \", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"ext\"\n      }), /*#__PURE__*/React.createElement(\"br\", null), \"Email: \", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"email\"\n      }), /*#__PURE__*/React.createElement(\"br\", null), \"Title: \", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\"\n      }), /*#__PURE__*/React.createElement(\"br\", null), /*#__PURE__*/React.createElement(\"button\", null, \"Add\"));\n    }\n  }]);\n}(React.Component);\n\n\n//# sourceURL=webpack://module01/./src/EmployeeAdd.jsx?");

/***/ }),

/***/ "./src/EmployeeFilter.jsx":
/*!********************************!*\
  !*** ./src/EmployeeFilter.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeFilter)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _callSuper(_this, derived, args) {\n  function isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    } catch (e) {\n      return false;\n    }\n  }\n  derived = _getPrototypeOf(derived);\n  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));\n}\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nvar EmployeeFilter = /*#__PURE__*/function (_React$Component) {\n  function EmployeeFilter() {\n    _classCallCheck(this, EmployeeFilter);\n    return _callSuper(this, EmployeeFilter, arguments);\n  }\n  _inherits(EmployeeFilter, _React$Component);\n  return _createClass(EmployeeFilter, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the employee filter.\");\n    }\n  }]);\n}(React.Component);\n\n\n//# sourceURL=webpack://module01/./src/EmployeeFilter.jsx?");

/***/ }),

/***/ "./src/EmployeeList.jsx":
/*!******************************!*\
  !*** ./src/EmployeeList.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EmployeeList)\n/* harmony export */ });\n/* harmony import */ var _EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeFilter.jsx */ \"./src/EmployeeFilter.jsx\");\n/* harmony import */ var _EmployeeAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeAdd.jsx */ \"./src/EmployeeAdd.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _callSuper(_this, derived, args) {\n  function isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    } catch (e) {\n      return false;\n    }\n  }\n  derived = _getPrototypeOf(derived);\n  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));\n}\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar initialEmployees = [{\n  id: 1,\n  name: 'Zak Ruvalcaba',\n  ext: 1124,\n  email: 'zak@vectacorp.com',\n  title: 'Chief Executive Officer',\n  dateHired: new Date('2018-08-15'),\n  isEmployed: true\n}, {\n  id: 2,\n  name: 'Sally Smith',\n  ext: 1125,\n  email: 'sally@vectacorp.com',\n  title: 'Director of Sales',\n  dateHired: new Date('2015-01-03'),\n  isEmployed: true\n}];\nfunction EmployeeRow(props) {\n  var employee = props.employee;\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, employee.id), /*#__PURE__*/React.createElement(\"td\", null, employee.name), /*#__PURE__*/React.createElement(\"td\", null, employee.ext), /*#__PURE__*/React.createElement(\"td\", null, employee.email), /*#__PURE__*/React.createElement(\"td\", null, employee.title), /*#__PURE__*/React.createElement(\"td\", null, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, employee.isEmployed ? 'Yes' : 'No'));\n}\nfunction EmployeeTable(props) {\n  var employeeRows = props.employees.map(function (employee) {\n    return /*#__PURE__*/React.createElement(EmployeeRow, {\n      key: employee.id,\n      employee: employee\n    });\n  });\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"ID\"), /*#__PURE__*/React.createElement(\"th\", null, \"Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Extension\"), /*#__PURE__*/React.createElement(\"th\", null, \"Email\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"), /*#__PURE__*/React.createElement(\"th\", null, \"Date Hired\"), /*#__PURE__*/React.createElement(\"th\", null, \"Currently Employed?\"))), /*#__PURE__*/React.createElement(\"tbody\", null, employeeRows));\n}\nvar EmployeeList = /*#__PURE__*/function (_React$Component) {\n  function EmployeeList() {\n    var _this2;\n    _classCallCheck(this, EmployeeList);\n    _this2 = _callSuper(this, EmployeeList);\n    _this2.state = {\n      employees: []\n    };\n    _this2.createEmployee = _this2.createEmployee.bind(_this2);\n    return _this2;\n  }\n  _inherits(EmployeeList, _React$Component);\n  return _createClass(EmployeeList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function loadData() {\n      var _this3 = this;\n      setTimeout(function () {\n        _this3.setState({\n          employees: initialEmployees\n        });\n      }, 500);\n    }\n  }, {\n    key: \"createEmployee\",\n    value: function createEmployee(employee) {\n      employee.id = this.state.employees.length + 1;\n      var newEmployeeList = this.state.employees.slice();\n      newEmployeeList.push(employee);\n      this.setState({\n        employees: newEmployeeList\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Employee Management Application\"), /*#__PURE__*/React.createElement(_EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(EmployeeTable, {\n        employees: this.state.employees\n      }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_EmployeeAdd_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        createEmployee: this.createEmployee\n      }));\n    }\n  }]);\n}(React.Component);\n\n\n//# sourceURL=webpack://module01/./src/EmployeeList.jsx?");

/***/ }),

/***/ "./src/employees.jsx":
/*!***************************!*\
  !*** ./src/employees.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeList.jsx */ \"./src/EmployeeList.jsx\");\n\nReactDOM.render(/*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(_EmployeeList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), document.getElementById('content'));\n\n//# sourceURL=webpack://module01/./src/employees.jsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/employees.jsx");
/******/ 	
/******/ })()
;