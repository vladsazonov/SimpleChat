(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-nav-bar/chat-nav-bar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-nav-bar/chat-nav-bar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navBar\">\r\n  <div class=\"navArea\">\r\n    <div>\r\n      <mat-icon class=\"leftGroup\" style=\"color: white\" matSuffix>supervisor_account</mat-icon>\r\n      <mat-icon class=\"leftGroup\" matSuffix>menu</mat-icon>\r\n      <mat-icon class=\"leftGroup\" matSuffix>search</mat-icon>\r\n    </div>\r\n\r\n    <div class=\"rightBlock\">\r\n      <mat-icon class=\"rightGroup\" matSuffix>calendar_today</mat-icon>\r\n      <mat-icon class=\"rightGroup\" matSuffix>message</mat-icon>\r\n      <div class=\"userAvatar\" [matMenuTriggerFor]=\"menu\"><h1 class=\"mat-h2\">{{avatarSymbol}}</h1>\r\n        <mat-menu #menu=\"matMenu\" style=\"padding: 0\" >\r\n          <button mat-menu-item (click)=\"handleUnLogin()\"><mat-icon class=\"inputIcon\" matSuffix>exit_to_app</mat-icon>Выйти</button>\r\n        </mat-menu>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-window/chat-window.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-window/chat-window.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n  <div style=\"display: flex; align-items: center\">\r\n    <h1 class=\"mat-h1\">{{user}}</h1>\r\n    <div class=\"onlineIcon\"></div>\r\n    <h1 class=\"mat-caption online\">ONLINE</h1>\r\n  </div>\r\n  <div class=\"funcBlock\">\r\n    <div style=\"display: flex; align-items: center\">\r\n      <mat-icon class=\"funcIcon\" matSuffix>call</mat-icon>\r\n      <h2 class=\"mat-h3\">Call</h2>\r\n    </div>\r\n    <div style=\"display: flex; margin-left: 20px; align-items: center\">\r\n      <mat-icon class=\"funcIcon\" matSuffix>present_to_all</mat-icon>\r\n      <h2 class=\"mat-h3\">Share</h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"messageButton\">\r\n    <mat-icon class=\"messIcon\" matSuffix>chat_bubble_outlined</mat-icon>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"chatContent\">\r\n  <div class=\"content\" id=\"msgContainer\">\r\n    <app-message *ngFor=\"let item of items\" [fromUserId]=\"item.fromUser\" [currUserId]=\"userId\" [messId]=\"item.messId\" [sender]=\"item.sender\" [message]=\"item.message\"\r\n                 [date]=\"item.date\"></app-message>\r\n  </div>\r\n</div>\r\n<app-send-message-bar></app-send-message-bar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"root\">\n <app-chat-nav-bar></app-chat-nav-bar>\n  <div class=\"backElement\"></div>\n  <div class=\"homeContent\">\n      <app-chat-window class=\"paper\"></app-chat-window>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"root\">\n  <div class=\"backElement\"></div>\n  <div class=\"loginModal\">\n    <div class=\"paper\">\n\n      <div class=\"header\">\n        <h1 class=\"mat-h1 headerName\">Добро пожаловать</h1>\n      </div>\n\n      <div class=\"paperContent\">\n        <h1 class=\"mat-display-1\">Войти</h1>\n        <div class=\"loginInputs\">\n          <form  [formGroup]=\"loginForm\" (ngSubmit)=\"handleLogin(loginForm.value)\">\n            <mat-form-field class=\"fullWidth\" appearance=\"outline\">\n              <mat-label>Логин</mat-label>\n              <input formControlName=\"login\" matInput placeholder=\"Логин\">\n              <mat-icon class=\"inputIcon\" matSuffix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field class=\"fullWidth\"   appearance=\"outline\">\n              <mat-label>Пароль</mat-label>\n              <input formControlName=\"password\" type=\"password\"  matInput placeholder=\"Пароль\">\n              <mat-icon class=\"inputIcon\" matSuffix>lock</mat-icon>\n            </mat-form-field>\n            <button type=\"submit\" mat-raised-button class=\"signInButton\">войти</button>\n          </form>\n\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"messageRoot\">\r\n  <div class=\"avatar\">\r\n    <mat-icon class=\"avatarIco\" matSuffix>person</mat-icon>\r\n  </div>\r\n  <div class=\"messageContainer\">\r\n    <h1 class=\"mat-h3 author\">{{sender}}</h1>\r\n    <h2 *ngIf=\"editStatus !== true\" class=\"mat-h4 message\">{{message}}</h2>\r\n    <form *ngIf=\"editStatus === true\" class=\"editMessageForm\" [formGroup]=\"editMessageForm\" (keyup.enter)=\"clearInput()\">\r\n      <input value=\"{{mess}}\" (change)=\"inputState(editMessageForm.value)\" formControlName=\"editMessageInput\"\r\n             class=\"input\" placeholder=\"Введите сообщение...\">\r\n      <button class=\"sendButton\" (click)=\"handleSendEditedMess(editMessageForm.value)\">\r\n        <mat-icon class=\"sendIcon\" matSuffix>done</mat-icon>\r\n      </button>\r\n    </form>\r\n  </div>\r\n  <h1 class=\"mat-caption date\">{{date}}</h1>\r\n\r\n  <div style=\"margin-left: auto;\">\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"handleDeleteMessage(messId, currUserId)\">\r\n        <mat-icon>delete</mat-icon>\r\n        <span>Удалить</span>\r\n      </button>\r\n      <button mat-menu-item [disabled]=\"editStatus\" (click)=\"handleEditMessage(messId, currUserId, message, fromUserId)\">\r\n        <mat-icon>edit</mat-icon>\r\n        <span>Изменить</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<mat-divider style=\"margin: 0 0 0 80px\"></mat-divider>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-message-bar/send-message-bar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/send-message-bar/send-message-bar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"messageBarRoot\">\r\n  <form class=\"sendMessageForm\" [formGroup]=\"sendMessageForm\" (keyup.enter)=\"clearInput()\" >\r\n    <mat-icon class=\"inputIcon\" matSuffix>subdirectory_arrow_left</mat-icon>\r\n      <input value=\"{{send}}\"  (keyup)=\"inputState(sendMessageForm.value)\" formControlName=\"sendMessageInput\" class=\"input\" placeholder=\"Введите сообщение...\">\r\n    <button class=\"sendButton\" mat-button [disabled]=\"send.length === 0\" (click)=\"handleSendMessage(sender, sendMessageForm.value, today, currUserId)\">\r\n     SEND\r\n    </button>\r\n  </form>\r\n\r\n  <!--<mat-icon type=\"button\" class=\"sendButton\" matSuffix (click)=\"handleSendMessage('aaa', 'aaaaaaa', date)\">send</mat-icon>-->\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/MaterialModule.ts":
/*!***********************************!*\
  !*** ./src/app/MaterialModule.ts ***!
  \***********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");






const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'SimpleChat';
        if (localStorage.getItem('authStatus') === 'authed') {
            this.router.navigateByUrl('/home');
        }
        else if (localStorage.getItem('authStatus') === 'unAuthed') {
            this.router.navigateByUrl('/login');
        }
    }
    ngOnInit() {
        if (localStorage.login === undefined) {
            localStorage.setItem('login', '');
            if (localStorage.password === undefined) {
                localStorage.setItem('password', '');
                if (localStorage.id === undefined) {
                    localStorage.setItem('id', 'null');
                    if (localStorage.authStatus === undefined) {
                        localStorage.setItem('authStatus', 'unAuthed');
                        if (localStorage.messArr === undefined) {
                            localStorage.setItem('messArr', 'null');
                        }
                    }
                }
            }
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _MaterialModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialModule */ "./src/app/MaterialModule.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/authorization.service */ "./src/app/service/authorization.service.ts");
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chat_nav_bar_chat_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-nav-bar/chat-nav-bar.component */ "./src/app/chat-nav-bar/chat-nav-bar.component.ts");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _send_message_bar_send_message_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./send-message-bar/send-message-bar.component */ "./src/app/send-message-bar/send-message-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _chat_nav_bar_chat_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["ChatNavBarComponent"],
            _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_12__["ChatWindowComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
            _send_message_bar_send_message_bar_component__WEBPACK_IMPORTED_MODULE_14__["SendMessageBarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _MaterialModule__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        ],
        providers: [_service_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"], _service_messages_service__WEBPACK_IMPORTED_MODULE_8__["MessagesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat-nav-bar/chat-nav-bar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chat-nav-bar/chat-nav-bar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px) {\r\n  .navArea {\r\n    width: 1100px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .navArea {\r\n    width: 900px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .navArea {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navArea {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .navArea {\r\n    width: 95%;\r\n  }\r\n}\r\n\r\n.navBar {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  background-color: #1e89d0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.logOut {\r\n  margin: 0 110px 0 auto;\r\n  background-color: #0498ac;\r\n  color: #fff;\r\n}\r\n\r\n.navArea {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.userAvatar {\r\n  background-color: #0069ae;\r\n  margin: 10px 0 10px 10px;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.mat-h2.mat-h2 {\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n.mat-menu-content {\r\n  padding: 0;\r\n}\r\n\r\n.leftGroup {\r\n  color: #0e598b;\r\n  padding: 0 10px;\r\n}\r\n\r\n.rightGroup {\r\n  color: #0e598b;\r\n  padding: 0 10px;\r\n}\r\n\r\n.rightBlock {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1uYXYtYmFyL2NoYXQtbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0LW5hdi1iYXIvY2hhdC1uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLm5hdkFyZWEge1xyXG4gICAgd2lkdGg6IDExMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gIC5uYXZBcmVhIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5hdkFyZWEge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm5hdkFyZWEge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm5hdkFyZWEge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbn1cclxuLm5hdkJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODlkMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ091dCB7XHJcbiAgbWFyZ2luOiAwIDExMHB4IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ5OGFjO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXZBcmVhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnVzZXJBdmF0YXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5YWU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LWgyLm1hdC1oMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWF0LW1lbnUtY29udGVudCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubGVmdEdyb3VwIHtcclxuICBjb2xvcjogIzBlNTk4YjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuLnJpZ2h0R3JvdXAge1xyXG4gIGNvbG9yOiAjMGU1OThiO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ucmlnaHRCbG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/chat-nav-bar/chat-nav-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chat-nav-bar/chat-nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ChatNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNavBarComponent", function() { return ChatNavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authorization.service */ "./src/app/service/authorization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChatNavBarComponent = class ChatNavBarComponent {
    constructor(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
        this.user = this.authorizationService.currentUser;
        this.avatarSymbol = this.user[0].toUpperCase() || 'null';
        this.handleUnLogin = () => {
            this.authorizationService.unAuth();
            this.router.navigate(['/login']);
        };
    }
    ngOnInit() {
    }
};
ChatNavBarComponent.ctorParameters = () => [
    { type: _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChatNavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-nav-bar/chat-nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-nav-bar.component.css */ "./src/app/chat-nav-bar/chat-nav-bar.component.css")).default]
    })
], ChatNavBarComponent);



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n  background-color: #e9e9e9;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 13px 70px;\r\n}\r\n\r\n.mat-h1.mat-h1 {\r\n  margin: 0;\r\n  color: #636363;\r\n}\r\n\r\n.online {\r\n  margin: 0 0 0 10px;\r\n  color: #4d6a84;\r\n}\r\n\r\n.onlineIcon {\r\n  background-color: #48fa35;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin-left: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chatContent {\r\n  background-color: #fff;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 95px;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 79px;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.content {\r\n  padding: 0 70px;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n\r\n.mat-h3.mat-h3 {\r\n  margin: 0 0 0 5px;\r\n  color: #2f9ae1;\r\n  font: 500 16px/28px Roboto,\"Helvetica Neue\",sans-serif;\r\n}\r\n\r\n.funcIcon {\r\n  color: #2f9ae1;\r\n}\r\n\r\n.funcBlock {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto\r\n}\r\n\r\n.messageButton {\r\n  background-color: #69c836;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  right: 11px;\r\n  top: 59px;\r\n  z-index: 1;\r\n  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.34);\r\n}\r\n\r\n.messIcon {\r\n  padding: 20px;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzREFBc0Q7QUFDeEQ7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjtBQUNGOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkNBQTJDO0FBQzdDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEzcHggNzBweDtcclxufVxyXG5cclxuLm1hdC1oMS5tYXQtaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzYzNjM2MztcclxufVxyXG5cclxuLm9ubGluZSB7XHJcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gIGNvbG9yOiAjNGQ2YTg0O1xyXG59XHJcblxyXG4ub25saW5lSWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4ZmEzNTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2hhdENvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5NXB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA3OXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAwIDcwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG59XHJcbi5tYXQtaDMubWF0LWgzIHtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICBjb2xvcjogIzJmOWFlMTtcclxuICBmb250OiA1MDAgMTZweC8yOHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxufVxyXG4uZnVuY0ljb24ge1xyXG4gIGNvbG9yOiAjMmY5YWUxO1xyXG59XHJcbi5mdW5jQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcbi5tZXNzYWdlQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjljODM2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDExcHg7XHJcbiAgdG9wOiA1OXB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm94LXNoYWRvdzogMCAycHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjM0KTtcclxufVxyXG4ubWVzc0ljb24ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authorization.service */ "./src/app/service/authorization.service.ts");




let ChatWindowComponent = class ChatWindowComponent {
    constructor(messagesService, authorizationService) {
        this.messagesService = messagesService;
        this.authorizationService = authorizationService;
        this.items = this.messagesService.messages;
        this.user = this.authorizationService.currentUser;
        this.userId = this.authorizationService.userId;
    }
    ngOnInit() {
    }
};
ChatWindowComponent.ctorParameters = () => [
    { type: _service_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] },
    { type: _service_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] }
];
ChatWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-window',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-window.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-window/chat-window.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-window.component.css */ "./src/app/chat-window/chat-window.component.css")).default]
    })
], ChatWindowComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px) {\r\n  .paper {\r\n    width: 1100px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .paper {\r\n    width: 900px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .paper {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .paper {\r\n    width: 500px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n    .paper {\r\n      width: 95%;\r\n    }\r\n  }\r\n\r\n.root {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: #fafafa;\r\n  }\r\n\r\n.backElement {\r\n    height: 311px;\r\n    background-color: #2f9ae1;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n  }\r\n\r\n.homeContent {\r\n    position: absolute;\r\n    top: 311px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n.chatModal {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n  }\r\n\r\n.paper {\r\n    box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.17);\r\n    position: absolute;\r\n    top: -220px;\r\n    bottom: 30px;\r\n    overflow: auto;\r\n    /*border-radius: 10px;*/\r\n    background-color: #FFF;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVFO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnBhcGVyIHtcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAucGFwZXIge1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAucGFwZXIge1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnBhcGVyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbn1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAucGFwZXIge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG4gIH1cclxuICAucm9vdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB9XHJcblxyXG4gIC5iYWNrRWxlbWVudCB7XHJcbiAgICBoZWlnaHQ6IDMxMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmOWFlMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgLmhvbWVDb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzExcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2hhdE1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBhcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE3KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTIyMHB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvKmJvcmRlci1yYWRpdXM6IDEwcHg7Ki9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authorization.service */ "./src/app/service/authorization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(authorizationService, router) {
        this.authorizationService = authorizationService;
        this.router = router;
        this.handleUnAuth = () => {
            this.authorizationService.unAuth();
        };
    }
    ngOnInit() {
        if (localStorage.getItem('authStatus') === 'unAuthed') {
            this.router.navigate(['/login']);
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".root {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: #fafafa;\r\n}\r\n.backElement {\r\n  height: 311px;\r\n  background-color: #2f9ae1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n.loginModal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n}\r\n.paper {\r\n  position: absolute;\r\n  width: 600px;\r\n  height: 500px;\r\n  box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.17);\r\n  border-radius: 10px 10px 20px 20px;\r\n}\r\n.paperContent {\r\n  padding: 30px;\r\n  border-radius: 20px;\r\n  background-color: #fff;\r\n  top: 75px;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.header {\r\n  background-color: #0076c4;\r\n  border-radius: 10px 10px 0 0 ;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.headerName {\r\n  padding : 30px;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n.signInText {\r\n\r\n}\r\n.mat-display-1.mat-display-1 {\r\n  color: #545454;\r\n  font: 500 31px/40px Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin: 0;\r\n}\r\n.loginInputs {\r\n  margin-top: 40px;\r\n}\r\n.inputIcon {\r\n  color: #9e9e9e;\r\n}\r\n.fullWidth {\r\n  width: 100%;\r\n}\r\n.signInButton {\r\n  width: 100%;\r\n  margin-top: 50px;\r\n  background-color: #0076c4;\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtBQUNWO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBOztBQUVBO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0RBQXNEO0VBQ3RELFNBQVM7QUFDWDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG4uYmFja0VsZW1lbnQge1xyXG4gIGhlaWdodDogMzExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmOWFlMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLmxvZ2luTW9kYWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucGFwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMjJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDIwcHggMjBweDtcclxufVxyXG4ucGFwZXJDb250ZW50IHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0b3A6IDc1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc2YzQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMCA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5oZWFkZXJOYW1lIHtcclxuICBwYWRkaW5nIDogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnNpZ25JblRleHQge1xyXG5cclxufVxyXG4ubWF0LWRpc3BsYXktMS5tYXQtZGlzcGxheS0xIHtcclxuICBjb2xvcjogIzU0NTQ1NDtcclxuICBmb250OiA1MDAgMzFweC80MHB4IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxvZ2luSW5wdXRzIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5pbnB1dEljb24ge1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG59XHJcbi5mdWxsV2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zaWduSW5CdXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzZjNDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authorization.service */ "./src/app/service/authorization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginPageComponent = class LoginPageComponent {
    constructor(router, authorizationService) {
        this.router = router;
        this.authorizationService = authorizationService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.handleLogin = (loginData) => {
            this.authorizationService.pushAuthData(loginData.login, loginData.password);
        };
        if (localStorage.getItem('authStatus') === 'authed') {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        if (localStorage.getItem('authStatus') === 'authed') {
            this.router.navigate(['/home']);
        }
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_authorization_service__WEBPACK_IMPORTED_MODULE_2__["AuthorizationService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".messageRoot {\r\n  display: flex;\r\n  padding: 20px 0;\r\n  align-items: center;\r\n}\r\n.avatar {\r\n  border-radius: 0;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: rgb(98, 192, 255);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-right: 35px;\r\n}\r\n.avatarIco {\r\n  color: white;\r\n}\r\n.author {\r\n  margin-bottom: 7px;\r\n  font: 500 18px/28px Roboto,\"Helvetica Neue\",sans-serif;\r\n  color: #444444;\r\n}\r\n.date {\r\n  margin: 0 0 auto 80px;\r\n  color: #cdcdcd;\r\n}\r\n.message {\r\n  margin: 0;\r\n  color: #7e7e7e;\r\n  white-space: pre-wrap;\r\n  word-break: break-all;\r\n}\r\n.messageContainer {\r\n  max-width: 600px;\r\n}\r\n.closeIco {\r\n  color: #7e7e7e;\r\n}\r\n.deleteButton {\r\n  cursor: pointer;\r\n  width: 28px;\r\n  height: 28px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.deleteButton:hover {\r\n  background-color: rgba(2, 104, 118, 0.15);\r\n  transition-duration: 0.2s;\r\n  border-radius: 50%;;\r\n}\r\n.input {\r\n  background-color: #a4c9ce;\r\n  color: white;\r\n  border: 0;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n.input::-webkit-input-placeholder {\r\n  color: white;\r\n}\r\n.input::-moz-placeholder {\r\n  color: white;\r\n}\r\n.input::-ms-input-placeholder {\r\n  color: white;\r\n}\r\n.input::placeholder {\r\n  color: white;\r\n}\r\n.sendButton {\r\n  background-color: unset;\r\n  border: 0;\r\n  cursor: pointer;\r\n}\r\n.editMessageForm {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\ndiv[disabled]\r\n{\r\n  pointer-events: none;\r\n  opacity: 0.7;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0RBQXNEO0VBQ3RELGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFGQTtFQUNFLFlBQVk7QUFDZDtBQUZBO0VBQ0UsWUFBWTtBQUNkO0FBRkE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlUm9vdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXZhdGFyIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTgsIDE5MiwgMjU1KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG59XHJcbi5hdmF0YXJJY28ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXV0aG9yIHtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgZm9udDogNTAwIDE4cHgvMjhweCBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuLmRhdGUge1xyXG4gIG1hcmdpbjogMCAwIGF1dG8gODBweDtcclxuICBjb2xvcjogI2NkY2RjZDtcclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjN2U3ZTdlO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLm1lc3NhZ2VDb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuLmNsb3NlSWNvIHtcclxuICBjb2xvcjogIzdlN2U3ZTtcclxufVxyXG4uZGVsZXRlQnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZGVsZXRlQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDEwNCwgMTE4LCAwLjE1KTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTs7XHJcbn1cclxuLmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRjOWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2VuZEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZWRpdE1lc3NhZ2VGb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuZGl2W2Rpc2FibGVkXVxyXG57XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let MessageComponent = class MessageComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.mess = '';
        this.editMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            editMessageInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        this.handleDeleteMessage = (messId, currUserId) => {
            this.messagesService.deleteMessage(messId, currUserId);
        };
        this.handleEditMessage = (messId, currUserId, message, fromUserId) => {
            if (currUserId === fromUserId) {
                this.check = this.messagesService.stat
                    .subscribe(status => this.editStatus = status);
                this.mess = message;
                this.messagesService.editMessage(messId, currUserId);
            }
        };
        this.handleSendEditedMess = (mess) => {
            if (mess.editMessageInput.length === 0) {
                mess.editMessageInput = this.mess;
                this.messagesService.sendEditedMess(this.mess);
                this.check.unsubscribe();
            }
            else {
                this.messagesService.sendEditedMess(mess.editMessageInput);
                this.check.unsubscribe();
            }
        };
        this.clearInput = () => {
            this.mess = '';
        };
        this.inputState = (data) => {
            this.mess = data.sendMessageInput;
        };
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.container = document.getElementById('msgContainer');
        this.container.scrollTop = this.container.scrollHeight;
    }
};
MessageComponent.ctorParameters = () => [
    { type: _service_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "sender", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "date", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "messId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "deleteMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "currUserId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "fromUserId", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")).default]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/send-message-bar/send-message-bar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/send-message-bar/send-message-bar.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".messageBarRoot {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 80px;\r\n  background-color: #f4f4f4;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 50px;\r\n}\r\n.input {\r\n  resize: none;\r\n  overflow: auto;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border: 0;\r\n  padding: 10px 0 10px 10px;\r\n  border-radius: 10px;\r\n  outline: none;\r\n  font-size: 1.3rem;\r\n  width: 100%;\r\n}\r\n.input::-webkit-input-placeholder {\r\n  color: #b2b2b2;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-top: 10px;\r\n}\r\n.input::-moz-placeholder {\r\n  color: #b2b2b2;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-top: 10px;\r\n}\r\n.input::-ms-input-placeholder {\r\n  color: #b2b2b2;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-top: 10px;\r\n}\r\n.input::placeholder {\r\n  color: #b2b2b2;\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  margin-top: 10px;\r\n}\r\n:-ms-input-placeholder {\r\n  color: #8d8d8d;\r\n}\r\n::-ms-input-placeholder {\r\n  color: #8d8d8d;\r\n}\r\n.sendButton {\r\n  color: #ffffff;\r\n  margin-left: auto;\r\n  align-self: center;\r\n  background-color: #1e89d0;\r\n  width: 100px;\r\n  height: 40px;\r\n  padding: 0;\r\n  border-radius: 0;\r\n}\r\n.sendButton:hover {\r\n  background-color: #0b58d0;\r\n}\r\n.sendButton:disabled {\r\n  background-color: rgb(164, 164, 164);\r\n  cursor: not-allowed;\r\n}\r\n.fixButton {\r\n  padding: 0;\r\n}\r\n.sendMessageForm {\r\n  display: flex;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n.sendIcon {\r\n  font-size: 30px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n.inputIcon {\r\n  color: #d7d5d5;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZC1tZXNzYWdlLWJhci9zZW5kLW1lc3NhZ2UtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjtBQUpBO0VBQ0UsY0FBYztFQUNkLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7QUFKQTtFQUNFLGNBQWM7RUFDZCwrQ0FBK0M7RUFDL0MsZ0JBQWdCO0FBQ2xCO0FBSkE7RUFDRSxjQUFjO0VBQ2QsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlbmQtbWVzc2FnZS1iYXIvc2VuZC1tZXNzYWdlLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2VCYXJSb290IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxufVxyXG4uaW5wdXQge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2IyYjJiMjtcclxuICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOGQ4ZDhkO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM4ZDhkOGQ7XHJcbn1cclxuLnNlbmRCdXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OWQwO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5zZW5kQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGI1OGQwO1xyXG59XHJcbi5zZW5kQnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAxNjQsIDE2NCk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4uZml4QnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zZW5kTWVzc2FnZUZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2VuZEljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmlucHV0SWNvbiB7XHJcbiAgY29sb3I6ICNkN2Q1ZDU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/send-message-bar/send-message-bar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/send-message-bar/send-message-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: SendMessageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageBarComponent", function() { return SendMessageBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/messages.service */ "./src/app/service/messages.service.ts");
/* harmony import */ var _service_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authorization.service */ "./src/app/service/authorization.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SendMessageBarComponent = class SendMessageBarComponent {
    constructor(messagesService, authorizationService) {
        this.messagesService = messagesService;
        this.authorizationService = authorizationService;
        this.sendMessageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            sendMessageInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.date = new Date();
        this.today = this.date.getHours() + ':' + this.date.getMinutes();
        this.sender = this.authorizationService.currentUser;
        this.currUserId = this.authorizationService.userId;
        this.send = '';
        this.inputState = (data) => {
            this.send = data.sendMessageInput;
            console.log(this.send);
        };
        this.clearInput = () => {
            this.send = '';
        };
        this.handleSendMessage = (sender, text, date, fromUser) => {
            if (text.sendMessageInput.length > 0 && text.sendMessageInput !== ' ') {
                this.id = Date.now() + Math.random().toString(36).substr(2, 9);
                this.messagesService.sendMessage(this.id, sender, text.sendMessageInput, date, fromUser);
                this.clearInput();
            }
            else {
                alert('empty message');
            }
        };
    }
    ngOnInit() {
    }
};
SendMessageBarComponent.ctorParameters = () => [
    { type: _service_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] },
    { type: _service_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"] }
];
SendMessageBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-send-message-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./send-message-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/send-message-bar/send-message-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./send-message-bar.component.css */ "./src/app/send-message-bar/send-message-bar.component.css")).default]
    })
], SendMessageBarComponent);



/***/ }),

/***/ "./src/app/service/authorization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/authorization.service.ts ***!
  \**************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthorizationService = class AuthorizationService {
    constructor(router) {
        this.router = router;
        this.authStatus = 'unAuthed';
        this.currentUser = localStorage.getItem('login') || 'null';
        this.userId = +localStorage.getItem('id');
        this.users = [
            { id: 0, login: 'vlad', password: 'vlad' },
            { id: 1, login: 'masha', password: 'masha' },
            { id: 2, login: 'lol', password: 'lol' },
        ];
        this.pushAuthData = (login, password) => {
            console.log(login + ' ' + password);
            for (const user of this.users) {
                const userId = user.id;
                if (login === user.login && password === user.password) {
                    localStorage.setItem('id', userId.toString());
                    localStorage.setItem('login', login);
                    localStorage.setItem('password', password);
                    localStorage.setItem('authStatus', 'authed');
                    this.currentUser = localStorage.getItem('login');
                    this.userId = +localStorage.getItem('id');
                    this.router.navigateByUrl('/home');
                }
                else {
                    console.log('Something went wrong');
                }
            }
        };
        this.unAuth = () => {
            localStorage.removeItem('id');
            localStorage.removeItem('login');
            localStorage.removeItem('password');
            localStorage.setItem('authStatus', 'unAuthed');
            this.router.navigateByUrl('/login');
        };
    }
};
AuthorizationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthorizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorizationService);



/***/ }),

/***/ "./src/app/service/messages.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/messages.service.ts ***!
  \*********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MessagesService = class MessagesService {
    constructor() {
        this.theBoolean = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.stat = this.theBoolean.asObservable();
        this.messages = (JSON.parse(localStorage.getItem('messArr'))) || [];
        this.newMessage = {
            messId: '',
            sender: '',
            message: '',
            date: '',
            fromUser: null,
        };
        this.sendMessage = (id, Sender, Message, Date, currUserId) => {
            this.newMessage = {
                messId: id,
                sender: Sender,
                message: Message,
                date: Date,
                fromUser: currUserId,
            };
            this.messages.push(this.newMessage);
            localStorage.setItem('messArr', JSON.stringify(this.messages));
        };
        this.deleteMessage = (messId, currUserId) => {
            const del = this.messages.find(id => messId === id.messId);
            const currentUserId = +localStorage.getItem('id');
            const a = this.messages.findIndex(elem => elem.messId === del.messId && elem.fromUser === currentUserId);
            if (a > -1) {
                this.messages.splice(a, 1);
            }
            localStorage.setItem('messArr', JSON.stringify(this.messages));
        };
        this.sendEditedMess = (newMess) => {
            this.messages[this.messIndex].message = newMess;
            localStorage.setItem('messArr', JSON.stringify(this.messages));
            this.messIndex = null;
            this.getTheBoolean(false);
        };
        this.getTheBoolean = (bool) => {
            this.theBoolean.next(bool);
        };
        this.editMessage = (messId, currUserId) => {
            const edit = this.messages.find(id => messId === id.messId);
            this.messIndex = this.messages.findIndex(elem => elem.messId === edit.messId && elem.fromUser === currUserId);
            if (this.messIndex > -1 && messId === edit.messId) {
                this.getTheBoolean(true);
                this.editableMess = edit.message;
            }
        };
    }
};
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\SimpleChat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map