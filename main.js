(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-dynamic-component-loader/src/lib/DynamicComponent.ts":
/*!***************************************************************************!*\
  !*** ./projects/ngx-dynamic-component-loader/src/lib/DynamicComponent.ts ***!
  \***************************************************************************/
/*! exports provided: DynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
var DynamicComponent = /** @class */ (function () {
    function DynamicComponent(component, view) {
        this.componentRef = component;
        this.componentView = view;
    }
    DynamicComponent.prototype.destroy = function () {
        this.componentRef.destroy();
    };
    return DynamicComponent;
}());



/***/ }),

/***/ "./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.module.ts":
/*!**********************************************************************************************!*\
  !*** ./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgxDynamicComponentLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDynamicComponentLoaderModule", function() { return NgxDynamicComponentLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-dynamic-component-loader.service */ "./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NgxDynamicComponentLoaderModule = /** @class */ (function () {
    function NgxDynamicComponentLoaderModule() {
    }
    NgxDynamicComponentLoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [],
            providers: [_ngx_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_1__["NgxDynamicComponentLoaderService"]],
            exports: []
        })
    ], NgxDynamicComponentLoaderModule);
    return NgxDynamicComponentLoaderModule;
}());



/***/ }),

/***/ "./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.service.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: NgxDynamicComponentLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDynamicComponentLoaderService", function() { return NgxDynamicComponentLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _DynamicComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicComponent */ "./projects/ngx-dynamic-component-loader/src/lib/DynamicComponent.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NgxDynamicComponentLoaderService = /** @class */ (function () {
    function NgxDynamicComponentLoaderService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    NgxDynamicComponentLoaderService.prototype.loadComponent = function (component) {
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component);
        return componentRef;
    };
    NgxDynamicComponentLoaderService.prototype.loadView = function (componentRef) {
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView
            .rootNodes[0];
        return domElem;
    };
    NgxDynamicComponentLoaderService.prototype.loadParams = function (component, params) {
        Object.keys(params).map(function (key) {
            component.instance[key] = params[key];
        });
    };
    NgxDynamicComponentLoaderService.prototype.getComponent = function (component, params) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var componentRef = _this.loadComponent(component).create(_this.injector);
                _this.loadParams(componentRef, params);
                var componentView = _this.loadView(componentRef);
                var res = new _DynamicComponent__WEBPACK_IMPORTED_MODULE_1__["DynamicComponent"](componentRef, componentView);
                resolve(res);
            });
        });
    };
    NgxDynamicComponentLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
    ], NgxDynamicComponentLoaderService);
    return NgxDynamicComponentLoaderService;
}());



/***/ }),

/***/ "./projects/ngx-dynamic-component-loader/src/public_api.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-dynamic-component-loader/src/public_api.ts ***!
  \*****************************************************************/
/*! exports provided: NgxDynamicComponentLoaderService, DynamicComponent, NgxDynamicComponentLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-dynamic-component-loader.service */ "./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDynamicComponentLoaderService", function() { return _lib_ngx_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_0__["NgxDynamicComponentLoaderService"]; });

/* harmony import */ var _lib_DynamicComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/DynamicComponent */ "./projects/ngx-dynamic-component-loader/src/lib/DynamicComponent.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return _lib_DynamicComponent__WEBPACK_IMPORTED_MODULE_1__["DynamicComponent"]; });

/* harmony import */ var _lib_ngx_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-dynamic-component-loader.module */ "./projects/ngx-dynamic-component-loader/src/lib/ngx-dynamic-component-loader.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxDynamicComponentLoaderModule", function() { return _lib_ngx_dynamic_component_loader_module__WEBPACK_IMPORTED_MODULE_2__["NgxDynamicComponentLoaderModule"]; });

/*
 * Public API Surface of ngx-dynamic-component-loader
 */





/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <h1>{{title}}</h1>\n</header>\n\n<main>\n  <section>\n    <header>\n      <h2>Install</h2>\n      <pre><code>npm install ngx-dynamic-component-loader --save</code></pre>\n  </header>\n  </section>\n  <section>\n    <header>\n        <h2>Documentation</h2>\n        <p><a target=\"_blank\" href=\"https://github.com/kappys1/ngx-dynamic-component-loader\">here.</a></p>\n    </header>\n  </section>\n  <section>\n    <header>\n      <h2>Examples</h2>\n      <p><a target=\"_blank\" href=\"https://github.com/kappys1/ngx-dynamic-component-loader/blob/master/src/app/app.component.ts\">see code here.</a></p>\n    </header>\n  </section>\n  <article>\n    <h3>Sample Component Append</h3>\n    <button (click)=\"loadComponent1()\">Append Sample Component</button>\n    <div #content1></div>\n  </article>\n  <article>\n    <h3>Sample Component 2 Append with params</h3>\n    <input [(ngModel)]=\"inputValue\">\n    <button (click)=\"loadComponent2()\">Append Sample Component</button>\n    <div #content2></div>\n  </article>\n</main>\n<footer>\n  {{year}} © {{title}}\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  font-size: 2.3rem; }\n  header p {\n    font-size: 1.5rem; }\n  code {\n  background-color: #e6f2ff;\n  border: 1px solid #999;\n  display: block;\n  padding: 20px; }\n  pre {\n  max-width: 750px;\n  white-space: pre-wrap; }\n  footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  margin-top: 5%;\n  color: white;\n  background: #007bff;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: stretch;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L3Byb2plY3RzL3BydWViYXMvbmd4LWR5bmFtaWMtY29tcG9uZW50LWxvYWRlci1saWIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleC9wcm9qZWN0cy9wcnVlYmFzL25neC1keW5hbWljLWNvbXBvbmVudC1sb2FkZXItbGliL3NyYy90aGVtZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBaUIsRUFJbEI7RUFMRDtJQUdJLGtCQUFpQixFQUNsQjtFQUdIO0VBQ0UsMEJBQXVDO0VBQ3ZDLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsY0FBYSxFQUNkO0VBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCO0VBRUQ7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxRQUFPO0VBQ1AsZUFBYztFQUNkLGFBQVk7RUFDWixvQkMzQmU7RUQ0QmYsWUFBVztFQUNYLGFBQVk7RUFHWixjQUFhO0VBR2Isb0JBQW1CO0VBR25CLGtCQUFpQjtFQUdqQix3QkFBdUI7RUFHdkIsdUJBQXNCO0VBR3RCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi90aGVtZS92YXJpYWJsZXNcIjtcblxuaGVhZGVye1xuICBmb250LXNpemU6IDIuM3JlbTtcbiAgcHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSw0NSUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMjBweDtcbn1cblxucHJlIHtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICAtbXMtZmxleC1saW5lLXBhY2s6IHN0cmV0Y2g7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIiRwcmltYXJ5OiAjMDA3YmZmO1xuIl19 */"

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
/* harmony import */ var _components_example_second_component_example_second_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/example-second-component/example-second-component.component */ "./src/app/components/example-second-component/example-second-component.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_dynamic_component_loader_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-dynamic-component-loader/src/public_api */ "./projects/ngx-dynamic-component-loader/src/public_api.ts");
/* harmony import */ var _components_example_component_example_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/example-component/example-component.component */ "./src/app/components/example-component/example-component.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(dynamicComponentLoaderService) {
        this.dynamicComponentLoaderService = dynamicComponentLoaderService;
        this.title = 'ngx-dynamic-component-loader-lib';
        this.year = new Date().getFullYear();
        this.inputValue = '';
    }
    AppComponent.prototype.loadComponent1 = function () {
        var _this = this;
        var component = _components_example_component_example_component_component__WEBPACK_IMPORTED_MODULE_4__["ExampleComponentComponent"];
        var params = {}; // params for initialize this component.
        this.dynamicComponentLoaderService.getComponent(component, params).then(function (val) {
            val.componentRef.instance.removeComponent = function () { console.log('click'); val.destroy(); };
            _this.content.nativeElement.appendChild(val.componentView); // you have the DOM element and you can append in anywhere
        });
    };
    AppComponent.prototype.loadComponent2 = function () {
        var _this = this;
        var component = _components_example_second_component_example_second_component_component__WEBPACK_IMPORTED_MODULE_1__["ExampleSecondComponentComponent"];
        var params = { value: this.inputValue }; // params for initialize this component.
        this.dynamicComponentLoaderService.getComponent(component, params).then(function (val) {
            val.componentRef.instance.removeComponent = function () { console.log('click'); val.destroy(); }; // Add Value into component in hot.
            _this.content2.nativeElement.appendChild(val.componentView); // you have the DOM element and you can append in anywhere
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], AppComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], AppComponent.prototype, "content2", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ngx_dynamic_component_loader_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxDynamicComponentLoaderService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_ngx_dynamic_component_loader_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ngx-dynamic-component-loader/src/public_api */ "./projects/ngx-dynamic-component-loader/src/public_api.ts");
/* harmony import */ var _components_example_component_example_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/example-component/example-component.component */ "./src/app/components/example-component/example-component.component.ts");
/* harmony import */ var _components_example_second_component_example_second_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/example-second-component/example-second-component.component */ "./src/app/components/example-second-component/example-second-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_example_component_example_component_component__WEBPACK_IMPORTED_MODULE_5__["ExampleComponentComponent"],
                _components_example_second_component_example_second_component_component__WEBPACK_IMPORTED_MODULE_6__["ExampleSecondComponentComponent"]
            ],
            entryComponents: [
                _components_example_component_example_component_component__WEBPACK_IMPORTED_MODULE_5__["ExampleComponentComponent"],
                _components_example_second_component_example_second_component_component__WEBPACK_IMPORTED_MODULE_6__["ExampleSecondComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                projects_ngx_dynamic_component_loader_src_public_api__WEBPACK_IMPORTED_MODULE_4__["NgxDynamicComponentLoaderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/example-component/example-component.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/example-component/example-component.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  example-component works!\n  <button (click)=\"removeComponent()\">remove</button>\n</p>\n"

/***/ }),

/***/ "./src/app/components/example-component/example-component.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/example-component/example-component.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS1jb21wb25lbnQvZXhhbXBsZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example-component/example-component.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/example-component/example-component.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponentComponent", function() { return ExampleComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleComponentComponent = /** @class */ (function () {
    function ExampleComponentComponent() {
    }
    ExampleComponentComponent.prototype.ngOnInit = function () {
    };
    ExampleComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-component',
            template: __webpack_require__(/*! ./example-component.component.html */ "./src/app/components/example-component/example-component.component.html"),
            styles: [__webpack_require__(/*! ./example-component.component.scss */ "./src/app/components/example-component/example-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponentComponent);
    return ExampleComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/example-second-component/example-second-component.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/example-second-component/example-second-component.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  example-second-component works!\n  Dynamic Value is => {{value}}\n  <button (click)=\"removeComponent()\">remove</button>\n</p>\n"

/***/ }),

/***/ "./src/app/components/example-second-component/example-second-component.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/example-second-component/example-second-component.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS1zZWNvbmQtY29tcG9uZW50L2V4YW1wbGUtc2Vjb25kLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/example-second-component/example-second-component.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/example-second-component/example-second-component.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExampleSecondComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleSecondComponentComponent", function() { return ExampleSecondComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleSecondComponentComponent = /** @class */ (function () {
    function ExampleSecondComponentComponent() {
    }
    ExampleSecondComponentComponent.prototype.ngOnInit = function () {
    };
    ExampleSecondComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-second-component',
            template: __webpack_require__(/*! ./example-second-component.component.html */ "./src/app/components/example-second-component/example-second-component.component.html"),
            styles: [__webpack_require__(/*! ./example-second-component.component.scss */ "./src/app/components/example-second-component/example-second-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleSecondComponentComponent);
    return ExampleSecondComponentComponent;
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

module.exports = __webpack_require__(/*! /Users/alex/projects/pruebas/ngx-dynamic-component-loader-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map