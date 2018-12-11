(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* export interface userData{
  fcaid : string
} */
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.nodeServicesEndpoint1 = 'http://localhost:5005';
        //nodeServicesEndpoint = "https://p2cevo-webapp-webservices.azurewebsites.net";
        this.nodeServicesEndpoint = "http://p2c-webservices.azurewebsites.net";
        this.webServicesEndpoint = "http://p2cevo.azurewebsites.net";
    }
    ApiService.prototype.createHashapi = function (fcaId) {
        return this.httpClient.post(this.nodeServicesEndpoint + '/helper/createHash', { 'fcaid': fcaId });
    };
    ApiService.prototype.userCheck = function (userId) {
        return this.httpClient.get(this.webServicesEndpoint + '/api/UserInfoes/' + userId);
    };
    ApiService.prototype.addNewUser = function (userDetails) {
        return this.httpClient.post(this.webServicesEndpoint + '/api/UserInfoes', userDetails);
    };
    ApiService.prototype.generateTicketApi = function (ticketDetails) {
        return this.httpClient.post(this.nodeServicesEndpoint + '/jira/createUpdateCanvasTicket', ticketDetails);
    };
    /*  generateTicketapi(ticketObj) {
       return this.httpClient.post(this.nodeServicesEndpoint + '/generatedummyticket',{'dataset':ticketObj });
     } */
    /* generateJSONFile(dataSetArr,fileName) {
    return this.httpClient.post(this.nodeServicesEndpoint + '/helper/createJsonFile',{'dataset': dataSetArr, 'fileName' : fileName});
   }
 */
    ApiService.prototype.generateJSONFile = function (dataSetArr, fileName) {
        return this.httpClient.post(this.nodeServicesEndpoint1 + '/createJsonFile', { 'dataset': dataSetArr, 'fileName': fileName });
    };
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-home></app-home>-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'P2c-webapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _breakpoints_breakpoints_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./breakpoints/breakpoints.component */ "./src/app/breakpoints/breakpoints.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _mainiframe_mainiframe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mainiframe/mainiframe.component */ "./src/app/mainiframe/mainiframe.component.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _virtual_assistant_virtual_assistant_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./virtual-assistant/virtual-assistant.component */ "./src/app/virtual-assistant/virtual-assistant.component.ts");
/* harmony import */ var _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./text-editor/text-editor.component */ "./src/app/text-editor/text-editor.component.ts");
/* harmony import */ var _richtext_editor_richtext_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./richtext-editor/richtext-editor.component */ "./src/app/richtext-editor/richtext-editor.component.ts");
/* harmony import */ var _cta_editor_cta_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cta-editor/cta-editor.component */ "./src/app/cta-editor/cta-editor.component.ts");
/* harmony import */ var _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./image-editor/image-editor.component */ "./src/app/image-editor/image-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'edit', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _mainiframe_mainiframe_component__WEBPACK_IMPORTED_MODULE_12__["SafePipe"],
                _breakpoints_breakpoints_component__WEBPACK_IMPORTED_MODULE_10__["BreakpointsComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"],
                _mainiframe_mainiframe_component__WEBPACK_IMPORTED_MODULE_12__["MainiframeComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _virtual_assistant_virtual_assistant_component__WEBPACK_IMPORTED_MODULE_15__["VirtualAssistantComponent"],
                _text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_16__["TextEditorComponent"],
                _richtext_editor_richtext_editor_component__WEBPACK_IMPORTED_MODULE_17__["RichtextEditorComponent"],
                _cta_editor_cta_editor_component__WEBPACK_IMPORTED_MODULE_18__["CtaEditorComponent"],
                _image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_19__["ImageEditorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_13__["FroalaViewModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/breakpoints/breakpoints.component.css":
/*!*******************************************************!*\
  !*** ./src/app/breakpoints/breakpoints.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFrcG9pbnRzL2JyZWFrcG9pbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/breakpoints/breakpoints.component.html":
/*!********************************************************!*\
  !*** ./src/app/breakpoints/breakpoints.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"nav-breakpoint-desktop-icon\" (click)=\"changeToDesktop()\" src=\"{{desktop}}\"/>\n<img class=\"nav-breakpoint-portriat-icon\" (click)=\"changeToTabletPortriat()\" src=\"{{portriat}}\"/>\n<img class=\"nav-breakpoint-landscape-icon\" (click)=\"changeToTabletLandscape()\" src=\"{{landscape}}\"/>\n<img class=\"nav-breakpoint-mobile-icon\" (click)=\"changeToMobile()\" src=\"{{mobile}}\"/>\n\n\n"

/***/ }),

/***/ "./src/app/breakpoints/breakpoints.component.ts":
/*!******************************************************!*\
  !*** ./src/app/breakpoints/breakpoints.component.ts ***!
  \******************************************************/
/*! exports provided: BreakpointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointsComponent", function() { return BreakpointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreakpointsComponent = /** @class */ (function () {
    function BreakpointsComponent() {
        this.breakpointsEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.desktop = "../assets/images/desktop_active.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    }
    BreakpointsComponent.prototype.ngOnInit = function () {
    };
    BreakpointsComponent.prototype.changeToDesktop = function () {
        this.breakpointsEvents.emit('100%');
        this.desktop = "../assets/images/desktop_active.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToTabletPortriat = function () {
        this.breakpointsEvents.emit('768px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_active.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToTabletLandscape = function () {
        this.breakpointsEvents.emit('1024px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_active.png";
        this.mobile = "../assets/images/mobile_inactive.png";
    };
    BreakpointsComponent.prototype.changeToMobile = function () {
        this.breakpointsEvents.emit('375px');
        this.desktop = "../assets/images/desktop_inactive.png";
        this.portriat = "../assets/images/portrait_inactive.png";
        this.landscape = "../assets/images/landscape_inactive.png";
        this.mobile = "../assets/images/mobile_active.png";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BreakpointsComponent.prototype, "breakpointsEvents", void 0);
    BreakpointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breakpoints',
            template: __webpack_require__(/*! ./breakpoints.component.html */ "./src/app/breakpoints/breakpoints.component.html"),
            styles: [__webpack_require__(/*! ./breakpoints.component.css */ "./src/app/breakpoints/breakpoints.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreakpointsComponent);
    return BreakpointsComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.dataSetArrForRPA = [];
        this.dataSetArrForDOM = [];
    }
    ConfigService.prototype.checkTypeOf = function (data) {
        return JSON.stringify(typeof data);
    };
    ConfigService.prototype.searchInDatasetArr = function (val1, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].p2cresource == val1) {
                return i;
            }
        }
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/cta-editor/cta-editor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cta-editor/cta-editor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N0YS1lZGl0b3IvY3RhLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cta-editor/cta-editor.component.html":
/*!******************************************************!*\
  !*** ./src/app/cta-editor/cta-editor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Edit Button Label</p>\n<input type=\"text\" class=\"floating-cta-label-editor\" [(ngModel)]=\"newbuttonLabel\" />\n<br><br>\n<p>Edit Button Link</p>\n<input type=\"text\" class=\"floating-cta-label-editor\" [(ngModel)]=\"newbuttonLink\"/>\n<br>\n<button type=\"submit\" class=\"floating-editor-submit-btn\" (click)=\"SubmitVal()\">Submit</button> "

/***/ }),

/***/ "./src/app/cta-editor/cta-editor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cta-editor/cta-editor.component.ts ***!
  \****************************************************/
/*! exports provided: CtaEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaEditorComponent", function() { return CtaEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CtaEditorComponent = /** @class */ (function () {
    function CtaEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CtaEditorComponent.prototype, "setValues", {
        set: function (ctaObject) {
            this.key = ctaObject.key;
            this.oldbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
            this.newbuttonLabel = $($.parseHTML(ctaObject.htmldata)).find("span:first").text();
            this.oldbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
            this.newbuttonLink = $($.parseHTML(ctaObject.htmldata)).attr("refhref");
            this.oldDOM = ctaObject.htmldata;
        },
        enumerable: true,
        configurable: true
    });
    CtaEditorComponent.prototype.ngOnInit = function () {
    };
    CtaEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = $($.parseHTML(this.oldDOM)).find("span:first").text(this.newbuttonLabel).prevObject[0].outerHTML;
        this.newDOM = $($.parseHTML(this.newDOM)).attr("refhref", this.newbuttonLink)[0].outerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var ctaEditorCompData = {
            "oldbuttonlabel": this.oldbuttonLabel,
            "newbuttonlabel": this.newbuttonLabel,
            "oldbuttonlink": this.oldbuttonLink,
            "newbuttonlink": this.newbuttonLink,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "button",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                ctaEditorCompData["oldbuttonlabel"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlabel"];
                ctaEditorCompData["oldbuttonlink"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldbuttonlink"];
                ctaEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                ctaEditorCompData["newbuttonlabel"] = this.newbuttonLabel;
                ctaEditorCompData["newbuttonlink"] = this.newbuttonLink;
                ctaEditorCompData["customobject"]["newDOM"] = this.newDOM;
            }
        }
        this.emitUpdateValue.emit(ctaEditorCompData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('ctaObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CtaEditorComponent.prototype, "setValues", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CtaEditorComponent.prototype, "emitUpdateValue", void 0);
    CtaEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cta-editor',
            template: __webpack_require__(/*! ./cta-editor.component.html */ "./src/app/cta-editor/cta-editor.component.html"),
            styles: [__webpack_require__(/*! ./cta-editor.component.css */ "./src/app/cta-editor/cta-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], CtaEditorComponent);
    return CtaEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floating-editor-container\">\n        <span class=\"floating-editor-heading\">P2C Editor</span>\n        <!-- <p>P2c Settings: <span style=\"font-weight: bolder;\">{{ p2cSettings }}</span></p>\n        <p>P2c Resource: <span style=\"font-weight: bolder;\">{{ p2cResource }}</span></p>\n        <p>P2c Data: <span style=\"font-weight: bolder;\">{{ p2cData }}</span></p> -->\n        <span class=\"floating-editor-subtitle\">Editing {{ editorTitle | titlecase }} : </span>\n        <div class=\"floating-editor-components\">\n                <app-text-editor [textObject]=\"compObject\"  (emitUpdateValue)=\"SubmitVal($event)\" *ngIf=\"editorType == 'text'\"></app-text-editor>\n                <app-richtext-editor [richTextObject]=\"compObject\"  (emitUpdateValue)=\"SubmitVal($event)\"  *ngIf=\"editorType == 'richtext'\"></app-richtext-editor>\n                <app-cta-editor [ctaObject]=\"compObject\"  (emitUpdateValue)=\"SubmitVal($event)\" *ngIf=\"editorType == 'p2c_label'\" ></app-cta-editor>\n                <app-image-editor  *ngIf=\"editorType == 'desktop'\"></app-image-editor>\n        </div>\n        \n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorComponent = /** @class */ (function () {
    function EditorComponent(config, externalApi) {
        this.config = config;
        this.externalApi = externalApi;
        this.getValueFlag = false;
        this.hideEditorDiv = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generateJSONFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditorComponent_1 = EditorComponent;
    Object.defineProperty(EditorComponent.prototype, "setValueToEditor", {
        set: function (compData) {
            EditorComponent_1.prototype.p2cData = this.config.metaDataFromIframe.p2cdata;
            EditorComponent_1.prototype.compDataNew = compData;
            EditorComponent_1.prototype.editorType = compData['type'];
            EditorComponent_1.prototype.editorTitle = this.p2cData.split('_')[1];
            console.log('Image comp: ', compData);
            if (Object.keys(compData).includes("type")) {
                if (compData['type'] == "text") {
                    EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key;
                    EditorComponent_1.prototype.editorType = compData['type'];
                    EditorComponent_1.prototype.compObject = {
                        "key": compData['type'],
                        "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                    };
                    console.log("Text Component");
                }
                else if (compData['type'] == "richtext") {
                    console.log("Richtext Component");
                    EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]].key;
                    EditorComponent_1.prototype.editorType = compData['type'];
                    EditorComponent_1.prototype.editorTitle = this.p2cData.split('_')[1];
                    EditorComponent_1.prototype.compObject = {
                        "key": compData['type'],
                        "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                    };
                    /*  document.getElementById('p2cdatahtml').innerHTML = compData['value'];
                     $('#p2cdatahtml').froalaEditor({
                       enter: $.FroalaEditor.ENTER_BR,
                       charCounterCount:false,
                       colorsText: ['#000000', '#ffffff'],
                       colorsBackground: ['none'],
                       toolbarButtons: ['bold', 'italic', 'underline','|', 'subscript', 'superscript', 'specialCharacters', '|','color','my_dropdown','|','html','|','fullscreen'],
                       toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
                       toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
                       toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
                       }); */
                }
            }
            else if (Object.keys(compData).includes("desktop")) {
                EditorComponent_1.prototype.editorType = "desktop";
                console.log("Image Component");
                console.log('Image comp: ', compData);
                // EditorComponent.editorType = compData['type'];
            }
            else if (Object.keys(compData).includes("p2c_label")) {
                EditorComponent_1.prototype.keyOfElement = this.config.metaDataFromIframe.p2cresourcemetadata[this.config.metaDataFromIframe["p2cdata"]]["p2c_label"].key;
                EditorComponent_1.prototype.editorType = "p2c_label";
                console.log('p2c_label: ', compData["p2c_label"]);
                EditorComponent_1.prototype.compObject = {
                    "key": compData['p2c_label']['type'],
                    "htmldata": this.config.metaDataFromIframe.p2cdatahtml
                };
                console.log("CTA Component");
            }
            /* this.p2cDataHtml = compData.p2cdatahtml
            this.p2cDataHtml = compData.p2cresourcemetadata */
            /* document.getElementById('p2cdatahtml').innerHTML = compData.p2cdatahtml;
            ;  */
            //EditorComponent.prototype.setValueToEditor(compData);
        },
        enumerable: true,
        configurable: true
    });
    ;
    EditorComponent.prototype.ngOnInit = function () {
        console.log('dataSetArrForRPA: ', this.config.dataSetArrForRPA);
    };
    EditorComponent.prototype.SubmitVal = function (dataFromComp) {
        console.log('EditorComponent.prototype.keyOfElement: ', EditorComponent_1.prototype.keyOfElement);
        //This will send data to iframe 
        var fullCustAttr = '[data-p2c-resource="' + this.config.metaDataFromIframe.p2cresource + '"] ' + '[data-p2c="' + this.config.metaDataFromIframe.p2cdata + '"]';
        var dataToSender = { fullcustattr: fullCustAttr, customobject: dataFromComp["customobject"] };
        //document.getElementsByTagName("iframe")[0]//[0].postMessage(JSON.stringify(dataToSender), '*');
        //window.frames[1].postMessage(JSON.stringify(dataToSender), '*');
        $.each(document.getElementsByTagName("iframe"), function (index, data) {
            if (data.id == "main-iframe-id") {
                window.frames[index].postMessage(JSON.stringify(dataToSender), '*');
            }
            else {
                console.log('Iframe not matched..!');
            }
        });
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = EditorComponent_1.prototype.keyOfElement;
        var dataSet = { pageurl: localStorage.getItem("p2c_url"), p2cresource: metaDataFromIframe["p2cresource"], jcrContent: metaDataFromIframe["p2cresourcemetadata"]["resource"], source: "aem", update: {} };
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        if (searchedIndex != undefined) {
            dataSetArrForRPA[searchedIndex]["update"][keyOfElement] = dataFromComp;
        }
        else {
            dataSet["update"][keyOfElement] = dataFromComp;
            dataSetArrForRPA.push(dataSet);
        }
        console.log("dataSetArrForRPA Editor Comp: ", dataSetArrForRPA);
        this.hideEditorDiv.emit(false);
        this.generateJSONFile.emit("send");
        //EditorComponent.prototype.updatedData  = $('#p2cdatahtml').froalaEditor('html.get');
        //let updatedDataNew = EditorComponent.prototype.updatedData;
        //console.log('Updated html: ',$('#p2cdatahtml').froalaEditor('html.get'));
        /*  console.log('updatedDataNew: ',updatedDataNew)
         let fullCustAttr = '[data-p2c-resource="'+this.p2cResource+'"] ' +'[data-p2c="'+this.p2cData+'"]';
         let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedDataNew }
         console.log("Data b4 sending to iframe: ",dataToSender);
         window.frames[0].postMessage(JSON.stringify(dataToSender), '*'); */
        /* var dataSetArrForRPA =  this.config.dataSetArrForRPA;
        //HomeComponent comp = new HomeComponent.prototype();
        //console.log(this.compDataNew);
        var metaDataFromIframe = this.config.metaDataFromIframe ;
        console.log('comp Smarty: ',metaDataFromIframe);
        var dataSet = { pageurl: "http://www.fiat.it", p2cresource : metaDataFromIframe["p2cresource"], jcrContent: metaDataFromIframe["p2cresourcemetadata"]["resource"],  source: "aem", update: {} }
        let arr1 = { oldvalue : metaDataFromIframe.p2cdatahtml, newvalue : dataFromComp["newvalue"] };
        var newDataObject = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        console.log('New Data Object: ',newDataObject);
        console.log('Data Set Object: ',dataSet);
        console.log('Searched Imdex: ',this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA));
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource,dataSetArrForRPA)
        if( searchedIndex != undefined )
        {
          if(dataSetArrForRPA[searchedIndex]["update"][newDataObject] != undefined){
            dataSetArrForRPA[searchedIndex]["update"][newDataObject]["newvalue"] =  dataFromComp["newvalue"]
          }
          else{
            dataSetArrForRPA[searchedIndex]["update"][newDataObject] = arr1 ;
            //dataSet["update"][newDataObject]
          }
          
        }
        else
        {
          dataSet["update"][newDataObject] = arr1;
          dataSetArrForRPA.push(dataSet);
        }
      //let fullCustAttr;
      let p2cResource =metaDataFromIframe.p2cresource
      let p2cData = metaDataFromIframe.p2cdata;
        fullCustAttr = '[data-p2c-resource="'+p2cResource+'"]';//[data-p2c="'+p2cData+'"]';
      let updatedData = $('#p2cdatahtml').froalaEditor('html.get');
      //let dataToSender = { fullcustattr : fullCustAttr , updateddata : updatedData }
      console.log('dataSetArr:  ',dataSetArrForRPA);
      window.frames[0].postMessage(JSON.stringify(dataToSender), '*');
      this.hideEditorDiv.emit(false);
      
      let fileName = $.now(); */
        /*   this.externalApi.generateJSONFile(dataSetArrForRPA,fileName).subscribe((data: {}) => {
           console.log('Data from API: ',data);
         });  */
    };
    var EditorComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('compData'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditorComponent.prototype, "setValueToEditor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "hideEditorDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "generateJSONFile", void 0);
    EditorComponent = EditorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-header{ height:50px; width:100%; background-color:#242A3A; float:left; }\r\n.content-wrapper{ height:auto; width:100%; float:left; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxZQUFZLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRTtBQUM3RSxrQkFBa0IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtaGVhZGVyeyBoZWlnaHQ6NTBweDsgd2lkdGg6MTAwJTsgYmFja2dyb3VuZC1jb2xvcjojMjQyQTNBOyBmbG9hdDpsZWZ0OyB9XHJcbi5jb250ZW50LXdyYXBwZXJ7IGhlaWdodDphdXRvOyB3aWR0aDoxMDAlOyBmbG9hdDpsZWZ0OyB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-header\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <img class=\"nav-profile-icon\" src=\"../assets/images/useravatar.png\"/>\r\n                    <p class=\"nav-profile-info\"><span>USER NAME</span><br/>\r\n                    <span>Fiat Italy</span></p>\r\n                </div>\r\n                <div class=\"col-md-6\" align=\"center\">\r\n                        <app-breakpoints (breakpointsEvents)=\"changeIframeWidth($event)\" (breakpointsEvents)=\"closeEditorDiv(false)\" ></app-breakpoints>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                        <img class=\"nav-cart-icon\"  src=\"../assets/images/Shopping_OFF.SVG\"/>\r\n                        <img (click)=\"generateTiciet('send')\" class=\"nav-jira-icon\" src=\"../assets/images/Dashboard_OFF.SVG\"/>\r\n                        <img class=\"nav-notification-icon\" src=\"../assets/images/Notification_OFF.SVG\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content-wrapper\" [style.width]=\"iframeSize\" >\r\n        <app-mainiframe [url]=\"url\" [iframeSize]=\"iframeSize\" (sendJsonToHome)=\"showEditorDiv($event)\"></app-mainiframe>\r\n    </div>\r\n      <div *ngIf=\"chatDivShow\" class=\"chatbot-frame-div\">\r\n          <!-- <iframe src=\"https://35.239.8.145/kfca/chat\" class=\"chatbot-frame\" frameborder=\"0\"></iframe> -->\r\n          <app-virtual-assistant ></app-virtual-assistant>\r\n    </div> \r\n    <!-- <div class=\"chat-div\">\r\n        <img class=\"nav-chat-icon\" (click)=\"showChatDiv()\"  src=\"../assets/images/chat.svg\"/>\r\n    </div> -->\r\n    <!-- <script src=\"\"></script> -->\r\n    <!-- <script src=\"https://13.94.175.214/kfca/chatbotFrameIntegration.js\"></script>  -->\r\n    <div *ngIf=\"editorDivShow\" class=\"floating-editor\">\r\n        <span class=\"floating-editor-close-btn\" (click)=\"closeEditorDiv(false)\" ></span>\r\n        <app-editor [compData]=\"compData\" (hideEditorDiv)=\"closeEditorDiv($event)\" (generateJSONFile)=\"generateJSONFile()\" ></app-editor>\r\n    </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(externalApi, router, config) {
        this.externalApi = externalApi;
        this.router = router;
        this.config = config;
        this.chatDivShow = false;
        this.editorDivShow = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorDivShow = false;
        if (localStorage.p2c_fcaHash == undefined) {
            this.router.navigate(['/login']);
        }
        //this.url = "https://auth-dev6b2c.emea.fcagroup.com/content/fiat/fiat-it/it/home.html?wcmmode=disabled";
        //this.url = "http://localhost:3000/pages/fiat_new.html";
        this.url = "https://test-webapp-basefile.azurewebsites.net/fiat.html";
        window.addEventListener('message', function (evt) {
            if (_this.config.checkTypeOf(evt.data).match('string')) {
                /*  if(evt.data.match('iFrameVASize'))
                 {
                   console.log('Iframe data got!');
                   this.sendMessageToVA();
                 }
                 else if(evt.data.match('closeiframe'))
                 {
                   this.chatDivShow = false;
                 } */
            }
            else if (_this.config.checkTypeOf(evt.data).match('object')) {
                //console.log('Object iframe: ',evt.data);
                var vaMessage = evt.data;
                if (Object.keys(vaMessage).includes("source")) {
                    if (vaMessage["source"] == "iframe") {
                        var waResponsetoVa = {
                            source: "WA",
                            event: "wa_init_response",
                            data: {
                                userInfo: {
                                    firstName: "John",
                                    lastName: "Smith",
                                    companyId: "123456",
                                    email: "john.smith@accenture.com"
                                },
                                brandDetails: {
                                    market: "IT",
                                    brand: "FIAT",
                                    language: "english"
                                }
                            }
                        };
                        waResponsetoVa.data["metadata"] = vaMessage.newCanvasMetadata;
                        console.log("waResponsetoVa", waResponsetoVa);
                        $.each(document.getElementsByTagName("iframe"), function (index, data) {
                            if (data.id == "chatbot-frame") {
                                window.frames[index].postMessage(waResponsetoVa, '*');
                            }
                        });
                    }
                    else if (vaMessage["source"] == "VA") {
                        console.log("vaMessage: ", vaMessage);
                        if (vaMessage["event"] == "va_init") {
                            $.each(document.getElementsByTagName("iframe"), function (index, data) {
                                if (data.id == "main-iframe-id") {
                                    window.frames[index].postMessage("getNewCanvas", '*');
                                }
                            });
                            //
                            /*   for (let index = 0; index < document.getElementsByTagName("iframe").length; index++) {
                                if(document.getElementsByTagName("iframe")[index].id == "chatbot-frame")
                                {
                                  console.log('Message Sent..!',index);
                                  window.frames[index].postMessage(waResponsetoVa, '*');
                                }
                                else{
                                  console.log('Iframe not matched..!');
                                }
                              }
                              console.log('document.getElementsByTagName("iframe")',document.getElementsByTagName("iframe"));
                               */
                        }
                    }
                }
            }
        });
    };
    HomeComponent.prototype.searchInDatasetArr = function (val1, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].p2cresource == val1) {
                return i;
            }
        }
    };
    HomeComponent.prototype.showEditorDiv = function (dataFromIframe) {
        //.split(':')[1].strip('{').strip('}')
        //.split(':')[1].strip('{').strip('}').match('richtext')
        //console.log('Element Identify: ', dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}',''))
        //console.log('Type of: ',this.config.checkTypeOf(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata]));
        if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('string')) { /*
          if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "richtext")
          {
            this.compData = dataFromIframe;
            this.editorDivShow = true;
          }
          else if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "text")
          {
            this.compData = dataFromIframe;
            this.editorDivShow = true;
          }
          else if(dataFromIframe["p2cresourceobject"][dataFromIframe.p2cdata].split(':')[1].replace('{','').replace('}','') == "richtext")
          {
            this.compData = dataFromIframe;
            this.editorDivShow = true;
          }
          else
          {
            console.log('Wrong Comp..!');
          } */
        }
        else if (this.config.checkTypeOf(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]).match('object')) {
            this.compData = dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata];
            console.log('Comp Data: ', this.compData);
            console.log("Key : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["key"]);
            console.log("Type : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["type"]);
            console.log("Value : ", dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]);
            this.config.metaDataFromIframe = dataFromIframe;
            //this.config.metaDataFromIframe = $($.parseHTML(dataFromIframe["p2cresourcemetadata"][dataFromIframe.p2cdata]["value"]));
            //console.log('Parsed HTML: ',this.config.metaDataFromIframe);
            //console.log(this.config.htmlFromIframe.find(dataFromIframe["p2cresourcemetadata"][dataFromIframe["p2cdata"]])[0].outerHTML);
            this.editorDivShow = true;
        }
    };
    HomeComponent.prototype.closeEditorDiv = function (boolVal) {
        this.editorDivShow = boolVal;
    };
    HomeComponent.prototype.showChatDiv = function () {
        this.chatDivShow = true;
    };
    HomeComponent.prototype.generateJSONFile = function () {
        var _this = this;
        /* this.config.dataSetArrForRPA.forEach(element => {
         console.log('element',element["update"]);
         Object.keys(element["update"]).forEach(keys => {
           delete element["update"][keys]["customobject"];
         });
        }); */
        var fileName = $.now();
        this.externalApi.generateJSONFile(this.config.dataSetArrForRPA, fileName).subscribe(function (data) {
            console.log('generate JOSN file: ', data);
            _this.externalApi.generateTicketApi({ data1: "string" }).subscribe(function (data2) {
                console.log('generate Ticket: ', data2);
            });
        });
        /*  var ticketData = { user_id: localStorage.p2c_fcaHash, ticket_num :'FCATK-123456', status: '2', notify:'1' }
         this.api.generateTicketapi(JSON.stringify(ticketData)).subscribe((data: {}) => {
          console.log('Ticket Generated .!',data);
          alert('Dummy Ticket Generated .!\n Ticket No.: '+ticketData.ticket_num);
         }); */
    };
    HomeComponent.prototype.sendMessageToVA = function () {
        /* var vaMessage = {
          userInfo:
          {
              firstName: "John",
              lastName: "Smith",
              companyId: "123456",
              email: "john.smith@accenture.com"
          },
          brandDetails:
          {
              market: "IT",
              brand: "FIAT",
              language: "IT"
          },
          iFrameVASize:
          {
              height: "500px",
              width: "500px",
              class: "vaclass"
          }
      }
        //receiver.postMessage('Hello VA!', '*');
            window.frames[1].postMessage(vaMessage, '*'); */
    };
    HomeComponent.prototype.changeIframeWidth = function (iframeSize) {
        this.iframeSize = iframeSize;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-editor/image-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWVkaXRvci9pbWFnZS1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/image-editor/image-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  image-editor works!\n</p>\n"

/***/ }),

/***/ "./src/app/image-editor/image-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-editor/image-editor.component.ts ***!
  \********************************************************/
/*! exports provided: ImageEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditorComponent", function() { return ImageEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageEditorComponent = /** @class */ (function () {
    function ImageEditorComponent() {
    }
    ImageEditorComponent.prototype.ngOnInit = function () {
    };
    ImageEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-editor',
            template: __webpack_require__(/*! ./image-editor.component.html */ "./src/app/image-editor/image-editor.component.html"),
            styles: [__webpack_require__(/*! ./image-editor.component.css */ "./src/app/image-editor/image-editor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageEditorComponent);
    return ImageEditorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-header\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                </div>\n                <div class=\"col-md-6\">\n                </div>\n                <div class=\"col-md-3\">\n                </div>\n            </div>\n        </div>\n    </div>\n<div class=\"login-div\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <div class=\"login-box\">\n                    <h2>FCA Login</h2>\n                    <form [formGroup]=\"lForm\" (ngSubmit)=\"submitValues(lForm.value)\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">User Name:</label>\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"username\" required autocomplete=\"off\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"password\">Password:</label>\n                          <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" required autocomplete=\"off\">\n                      </div>\n                      <div class=\"form-group\">\n                        <input type=\"submit\"  class=\"btn-primary\" />\n                      </div>\n                      </form>\n                </div>\n            </div>\n            <div class=\"col-md-6\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, http, api, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.api = api;
        this.router = router;
        this.lForm = formBuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.p2c_fcaHash != undefined) {
            this.router.navigate(['/edit']);
        }
    };
    LoginComponent.prototype.submitValues = function (post) {
        var _this = this;
        if (post.username != null && post.password != null) {
            var fcaval = post.username;
            this.api.createHashapi(fcaval).subscribe(function (data) {
                _this.api.userCheck(data["md5_val"]).subscribe(function (response) {
                    console.log('UserCheck success..!');
                    console.log('Response for the following: ', response);
                    localStorage.p2c_fcaHash = response["UserID"];
                    _this.router.navigate(['/edit']);
                }, function (err) {
                    console.log('UserCheck Failed..!');
                    console.log('Error for the following: ', err);
                    var userDetails = {
                        "UserID": data["md5_val"],
                        "status": "true"
                    };
                    _this.api.addNewUser(userDetails).subscribe(function (response) {
                        console.log('New User Added..!');
                        localStorage.p2c_fcaHash = response["UserID"];
                        _this.router.navigate(['/edit']);
                    });
                });
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;text-align: center\">\n  <h2>You are Sucessfully Logged out.!</h2>\n  </div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/mainiframe/mainiframe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainiframe/mainiframe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5pZnJhbWUvbWFpbmlmcmFtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mainiframe/mainiframe.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainiframe/mainiframe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe class=\"main-iframe\" id=\"main-iframe-id\" [src]=\"url | safe\" ></iframe>"

/***/ }),

/***/ "./src/app/mainiframe/mainiframe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainiframe/mainiframe.component.ts ***!
  \****************************************************/
/*! exports provided: SafePipe, MainiframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainiframeComponent", function() { return MainiframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SafePipe = /** @class */ (function () {
    function SafePipe(DomSanitizer) {
        this.DomSanitizer = DomSanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.DomSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var MainiframeComponent = /** @class */ (function () {
    function MainiframeComponent(config) {
        this.config = config;
        this.sendJsonToHome = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(MainiframeComponent.prototype, "changeIframeSize", {
        set: function (iframeSize) {
            if (iframeSize != undefined) {
                var iframe = document.getElementById('main-iframe-id');
                iframe.style.width = iframeSize;
                $('#main-iframe-id').attr('src', $('#main-iframe-id').attr('src'));
                // this.url += '';
                //iframe += '';
            }
        },
        enumerable: true,
        configurable: true
    });
    MainiframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('message', function (evt) {
            /*if(this.config.checkTypeOf(evt.data).match('string')){
             if(evt.data.match('p2csettings'))
           {
             console.log('Retrived Message: ',JSON.parse(evt.data));
             this.sendJsonToHome.emit(JSON.parse(evt.data));
           }
           }
         else*/
            if (_this.config.checkTypeOf(evt.data).match('object')) {
                if (Object.keys(evt.data).includes("source")) {
                    if (evt.data["source"] == "Iframe") {
                        _this.sendJsonToHome.emit(evt.data["data"]);
                    }
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('url'),
        __metadata("design:type", Object)
    ], MainiframeComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('iframeSize'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MainiframeComponent.prototype, "changeIframeSize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MainiframeComponent.prototype, "sendJsonToHome", void 0);
    MainiframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainiframe',
            template: __webpack_require__(/*! ./mainiframe.component.html */ "./src/app/mainiframe/mainiframe.component.html"),
            styles: [__webpack_require__(/*! ./mainiframe.component.css */ "./src/app/mainiframe/mainiframe.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], MainiframeComponent);
    return MainiframeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;text-align: center\"><h1>404</h1>\n<h2>Page Not Found</h2>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/richtext-editor/richtext-editor.component.css":
/*!***************************************************************!*\
  !*** ./src/app/richtext-editor/richtext-editor.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpY2h0ZXh0LWVkaXRvci9yaWNodGV4dC1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/richtext-editor/richtext-editor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/richtext-editor/richtext-editor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"p2cdatahtml\" style=\"font-weight: bolder;\"  [froalaEditor]></span>\r\n<button type=\"submit\" class=\"floating-editor-submit-btn\" (click)=\"SubmitVal()\">Submit</button> "

/***/ }),

/***/ "./src/app/richtext-editor/richtext-editor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/richtext-editor/richtext-editor.component.ts ***!
  \**************************************************************/
/*! exports provided: RichtextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichtextEditorComponent", function() { return RichtextEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RichtextEditorComponent = /** @class */ (function () {
    /*
    @Input('textObject')  textObject:any;
    @Output() public emitUpdateValue = new EventEmitter(); */
    /*  @Input('getvalue') set getUpdatedValue(updatedValue){
       console.log('Consoled: ',updatedValue);
       if(updatedValue)
       {
         RichtextEditorComponent.prototype.emitUpdateValue.emit($('#p2cdatahtml').froalaEditor('html.get'));
       }
       
     } */
    function RichtextEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(RichtextEditorComponent.prototype, "setValues", {
        set: function (richTextObject) {
            this.key = richTextObject.key;
            this.oldValue = $($.parseHTML(richTextObject.htmldata)).html();
            this.oldDOM = richTextObject.htmldata;
            document.getElementById('p2cdatahtml').innerHTML = $($.parseHTML(richTextObject.htmldata)).html();
        },
        enumerable: true,
        configurable: true
    });
    RichtextEditorComponent.prototype.ngOnInit = function () {
        $('#p2cdatahtml').froalaEditor({
            enter: $.FroalaEditor.ENTER_BR,
            charCounterCount: false,
            colorsText: ['#000000', '#ffffff'],
            colorsBackground: ['none'],
            toolbarButtons: ['bold', 'italic', 'underline', '|', 'subscript', 'superscript', 'specialCharacters', '|', 'color', 'my_dropdown', '|', 'html', '|', 'fullscreen'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat', 'html', 'fullscreen'],
        });
    };
    RichtextEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].outerHTML;
        this.newValue = ($($.parseHTML(this.oldDOM)).html($('#p2cdatahtml').froalaEditor('html.get')))[0].innerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var richTextEditorCompData = {
            "oldvalue": this.oldValue,
            "newvalue": this.newValue,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "richtext",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                richTextEditorCompData["oldvalue"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
                richTextEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                richTextEditorCompData["newvalue"] = $('#p2cdatahtml').froalaEditor('html.get');
                richTextEditorCompData["customobject"]["newDOM"] = this.newDOM;
            }
        }
        this.emitUpdateValue.emit(richTextEditorCompData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('richTextObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RichtextEditorComponent.prototype, "setValues", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RichtextEditorComponent.prototype, "emitUpdateValue", void 0);
    RichtextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-richtext-editor',
            template: __webpack_require__(/*! ./richtext-editor.component.html */ "./src/app/richtext-editor/richtext-editor.component.html"),
            styles: [__webpack_require__(/*! ./richtext-editor.component.css */ "./src/app/richtext-editor/richtext-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], RichtextEditorComponent);
    return RichtextEditorComponent;
}());



/***/ }),

/***/ "./src/app/text-editor/text-editor.component.css":
/*!*******************************************************!*\
  !*** ./src/app/text-editor/text-editor.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/text-editor/text-editor.component.html":
/*!********************************************************!*\
  !*** ./src/app/text-editor/text-editor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"floating-text-editor\" [(ngModel)]=\"newValue\" />\n<br>\n<button type=\"submit\" class=\"floating-editor-submit-btn\" (click)=\"SubmitVal()\">Submit</button> "

/***/ }),

/***/ "./src/app/text-editor/text-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/text-editor/text-editor.component.ts ***!
  \******************************************************/
/*! exports provided: TextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorComponent", function() { return TextEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextEditorComponent = /** @class */ (function () {
    function TextEditorComponent(config) {
        this.config = config;
        this.emitUpdateValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(TextEditorComponent.prototype, "setValues", {
        set: function (textObject) {
            this.key = textObject.key;
            this.oldValue = $($.parseHTML(textObject.htmldata)).text();
            this.newValue = $($.parseHTML(textObject.htmldata)).text();
            this.oldDOM = textObject.htmldata;
        },
        enumerable: true,
        configurable: true
    });
    TextEditorComponent.prototype.ngOnInit = function () {
    };
    TextEditorComponent.prototype.SubmitVal = function () {
        this.newDOM = ($($.parseHTML(this.oldDOM)).text(this.newValue))[0].outerHTML;
        var metaDataFromIframe = this.config.metaDataFromIframe;
        var dataSetArrForRPA = this.config.dataSetArrForRPA;
        var keyOfElement = metaDataFromIframe.p2cresourcemetadata[metaDataFromIframe["p2cdata"]].key;
        var searchedIndex = this.config.searchInDatasetArr(metaDataFromIframe.p2cresource, dataSetArrForRPA);
        var textEditorCompData = {
            "oldvalue": this.oldValue,
            "newvalue": this.newValue,
            "customobject": {
                "p2cdata": metaDataFromIframe["p2cdata"],
                "type": "text",
                "oldDOM": this.oldDOM,
                "newDOM": this.newDOM
            }
        };
        if (searchedIndex != undefined) {
            if (dataSetArrForRPA[searchedIndex]["update"][keyOfElement] != undefined) {
                textEditorCompData["oldvalue"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["oldvalue"];
                textEditorCompData["customobject"]["oldDOM"] = dataSetArrForRPA[searchedIndex]["update"][keyOfElement]["customobject"]["oldDOM"];
                textEditorCompData["newvalue"] = this.newValue;
                textEditorCompData["customobject"]["newDOM"] = this.newDOM;
            } /*
            else{
              dataSetArrForRPA[searchedIndex]["update"][keyOfElement] = textEditorCompData ;
            } */
        }
        /*  else
         {
           dataSet["update"][keyOfElement] = textEditorCompData;
           dataSetArrForRPA.push(dataSet);
         } */
        this.emitUpdateValue.emit(textEditorCompData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('textObject'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TextEditorComponent.prototype, "setValues", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TextEditorComponent.prototype, "emitUpdateValue", void 0);
    TextEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text-editor',
            template: __webpack_require__(/*! ./text-editor.component.html */ "./src/app/text-editor/text-editor.component.html"),
            styles: [__webpack_require__(/*! ./text-editor.component.css */ "./src/app/text-editor/text-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], TextEditorComponent);
    return TextEditorComponent;
}());



/***/ }),

/***/ "./src/app/virtual-assistant/virtual-assistant.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/virtual-assistant/virtual-assistant.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWwtYXNzaXN0YW50L3ZpcnR1YWwtYXNzaXN0YW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/virtual-assistant/virtual-assistant.component.html":
/*!********************************************************************!*\
  !*** ./src/app/virtual-assistant/virtual-assistant.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe src=\"http://13.94.175.214/demo/chat/?tpmi=true\" class=\"chatbot-frame\" frameborder=\"0\"></iframe>"

/***/ }),

/***/ "./src/app/virtual-assistant/virtual-assistant.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/virtual-assistant/virtual-assistant.component.ts ***!
  \******************************************************************/
/*! exports provided: VirtualAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAssistantComponent", function() { return VirtualAssistantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VirtualAssistantComponent = /** @class */ (function () {
    function VirtualAssistantComponent(config) {
        this.config = config;
    }
    VirtualAssistantComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('message', function (evt) {
            console.log('RAW Data: ', evt.data);
            /* if(evt.data.match("source"))
            { */
            var vaMessage = evt.data;
            if (_this.config.checkTypeOf(vaMessage).match('object')) {
                if (Object.keys(vaMessage).includes("source")) {
                    if (vaMessage["source"] == "VA") {
                        if (vaMessage["event"] == "va_init") {
                            var waResponsetoVa = {
                                source: "WA",
                                event: "wa_init_response",
                                data: {
                                    userInfo: {
                                        firstName: "John",
                                        lastName: "Smith",
                                        companyId: "123456",
                                        email: "john.smith@accenture.com"
                                    },
                                    brandDetails: {
                                        market: "IT",
                                        brand: "FIAT",
                                        language: "english"
                                    } /* ,
                                    iFrameVASize:
                                    {
                                        height: "500px",
                                        width: "500px",
                                        class: "vaclass"
                                    } */
                                }
                            };
                            console.log('Message Sent..!');
                            window.frames[1].postMessage(waResponsetoVa, '*');
                        }
                    }
                }
            }
            /* } */
        });
    };
    VirtualAssistantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtual-assistant',
            template: __webpack_require__(/*! ./virtual-assistant.component.html */ "./src/app/virtual-assistant/virtual-assistant.component.html"),
            styles: [__webpack_require__(/*! ./virtual-assistant.component.css */ "./src/app/virtual-assistant/virtual-assistant.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], VirtualAssistantComponent);
    return VirtualAssistantComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samran.adepu\Desktop\Smaran\dev\webApp\P2c-webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map