(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/app/demo-lazy/demo-lazy-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DemoLazyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyRoutingModule", function() { return DemoLazyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_lazy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-lazy.component */ "./src/app/demo-lazy/demo-lazy.component.ts");




const routes = [
    {
        path: '',
        component: _demo_lazy_component__WEBPACK_IMPORTED_MODULE_3__["DemoLazyComponent"],
        children: [
            {
                path: 'child',
                loadChildren: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./demo-lazy-child/demo-lazy-child.module */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.module.ts")).then(m => m.DemoLazyChildModule)
            }
        ]
    }
];
let DemoLazyRoutingModule = class DemoLazyRoutingModule {
};
DemoLazyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DemoLazyRoutingModule);



/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy.component.html":
/*!****************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  demo-lazy works!\n</p>\n<div class=\"container\">\n  <a routerLink=\"/lazy/child\">Lazy child</a>\n  <ul>\n    <li *ngFor=\"let dt of events | slice:0:more\">\n      <p>Email: {{ dt?.title }}</p>\n    </li>\n    <button (click)=\"load()\">Load more</button>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy.component.scss":
/*!****************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tbGF6eS9kZW1vLWxhenkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy.component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy.component.ts ***!
  \**************************************************/
/*! exports provided: DemoLazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyComponent", function() { return DemoLazyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/api.service */ "./src/app/core/services/api.service.ts");



let DemoLazyComponent = class DemoLazyComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.more = 2;
    }
    ngOnInit() {
        this.apiService.get(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ENDPOINT"].users, { page: 2 }).subscribe(e => {
            this.data = e.data;
            console.log(e);
        }, err => {
            console.log(err);
        });
        this.apiService.getConfigResponse(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ENDPOINT"].users).subscribe(e => {
            console.log(e);
        }, err => {
            console.log(err);
        });
        this.apiService.getAssets('assets/events.json').subscribe(e => {
            console.log(e);
            this.events = e;
        });
    }
    load() {
        this.more += 2;
    }
};
DemoLazyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-lazy',
        template: __webpack_require__(/*! ./demo-lazy.component.html */ "./src/app/demo-lazy/demo-lazy.component.html"),
        styles: [__webpack_require__(/*! ./demo-lazy.component.scss */ "./src/app/demo-lazy/demo-lazy.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], DemoLazyComponent);



/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy.module.ts":
/*!***********************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy.module.ts ***!
  \***********************************************/
/*! exports provided: DemoLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyModule", function() { return DemoLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _demo_lazy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-lazy-routing.module */ "./src/app/demo-lazy/demo-lazy-routing.module.ts");
/* harmony import */ var _demo_lazy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-lazy.component */ "./src/app/demo-lazy/demo-lazy.component.ts");





let DemoLazyModule = class DemoLazyModule {
};
DemoLazyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_demo_lazy_component__WEBPACK_IMPORTED_MODULE_4__["DemoLazyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_lazy_routing_module__WEBPACK_IMPORTED_MODULE_3__["DemoLazyRoutingModule"]
        ]
    })
], DemoLazyModule);



/***/ })

}]);
//# sourceMappingURL=5.5774874a6dff0466e246.js.map