module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/api/helloWorld.js":
/*!**********************************!*\
  !*** ./server/api/helloWorld.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (app, logger, serviceName) => {\n  app.get(`/${serviceName}/api/hello`, (req, res) => {\n    res.status(200).json({\n      success: true,\n      message: `Hello from service \"${serviceName}\"`\n    });\n    res.end(logger.info(`Hello from service \"${serviceName}\"`, {\n      status: res.statusCode\n    }));\n  });\n};\n\n//# sourceURL=webpack:///./server/api/helloWorld.js?");

/***/ }),

/***/ "./server/config/dbConfig.js":
/*!***********************************!*\
  !*** ./server/config/dbConfig.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nclass DBConfig {\n  constructor(db) {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(db, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      useFindAndModify: false\n    });\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\n  }\n\n  checkConnection() {\n    return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.readyState ? true : false;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DBConfig);\n\n//# sourceURL=webpack:///./server/config/dbConfig.js?");

/***/ }),

/***/ "./server/config/expressConfig.js":
/*!****************************************!*\
  !*** ./server/config/expressConfig.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nclass ExpressConfig {\n  constructor(app) {\n    app.use(__webpack_require__(/*! express */ \"express\").urlencoded({\n      extended: true\n    }));\n    app.use(__webpack_require__(/*! express */ \"express\").json());\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpressConfig);\n\n//# sourceURL=webpack:///./server/config/expressConfig.js?");

/***/ }),

/***/ "./server/config/loggerConfig.js":
/*!***************************************!*\
  !*** ./server/config/loggerConfig.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nconst loggerConfig = {\n  redis: {\n    host: \"redis\",\n    port: 6379,\n    container: \"logs\",\n    expire: 7 * 24 * 60 * 60\n  },\n  timestamp: {\n    format: \"YYYY-MM-DD hh:mm:ss a\"\n  },\n  meta: {\n    service: process.env.SERVICE_NAME\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (loggerConfig);\n\n//# sourceURL=webpack:///./server/config/loggerConfig.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var winston_redis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! winston-redis */ \"winston-redis\");\n/* harmony import */ var winston_redis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(winston_redis__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/example */ \"./server/utils/example.js\");\n/* harmony import */ var _utils_example__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_example__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _config_expressConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/expressConfig */ \"./server/config/expressConfig.js\");\n/* harmony import */ var _config_loggerConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/loggerConfig */ \"./server/config/loggerConfig.js\");\n/* harmony import */ var _config_dbConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/dbConfig */ \"./server/config/dbConfig.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass App {\n  constructor() {\n    this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    this.serviceName = Object(_utils_example__WEBPACK_IMPORTED_MODULE_5__[\"exampleFunction\"])();\n    this.servicePort = process.env.SERVICE_PORT || 3000;\n    this.database = process.env.DATABASE_URL || \"mongodb://mongo:27017/db\";\n    this.logger;\n  }\n\n  init() {\n    this.config();\n    this.apiRoutes();\n    this.start();\n  }\n\n  config() {\n    const expressConfig = new _config_expressConfig__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.app);\n    const dBConfig = new _config_dbConfig__WEBPACK_IMPORTED_MODULE_8__[\"default\"](this.database);\n    const loggerConfig = _config_loggerConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n    this.logger = winston__WEBPACK_IMPORTED_MODULE_3___default.a.createLogger({\n      format: winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.timestamp(),\n      defaultMeta: loggerConfig.meta,\n      transports: [new winston__WEBPACK_IMPORTED_MODULE_3___default.a.transports.Console({\n        format: winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.combine(winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.timestamp(loggerConfig.timestamp), winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.colorize(), winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.simple(), winston__WEBPACK_IMPORTED_MODULE_3___default.a.format.printf(info => `${info.timestamp} | ${info.level} | ${info.service} | ${info.message}`))\n      }), new winston_redis__WEBPACK_IMPORTED_MODULE_4___default.a(loggerConfig.redis)]\n    });\n  }\n\n  apiRoutes() {\n    __webpack_require__(/*! ./api/helloWorld */ \"./server/api/helloWorld.js\")(this.app, this.logger, this.serviceName);\n  }\n\n  start() {\n    this.app.listen(this.servicePort, () => {\n      this.logger.info(`Service \"${this.serviceName}\" listening on port ${this.servicePort}`);\n    });\n  }\n\n}\n\nconst application = new App();\napplication.init();\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/utils/example.js":
/*!*********************************!*\
  !*** ./server/utils/example.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst exampleFunction = () => {\n  return process.env.SERVICE_NAME || \"testService\";\n};\n\nmodule.exports = {\n  exampleFunction\n};\n\n//# sourceURL=webpack:///./server/utils/example.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /usr/src/app/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ }),

/***/ "winston-redis":
/*!********************************!*\
  !*** external "winston-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston-redis\");\n\n//# sourceURL=webpack:///external_%22winston-redis%22?");

/***/ })

/******/ });