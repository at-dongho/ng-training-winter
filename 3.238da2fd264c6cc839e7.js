(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/api-working/api-working-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/api-working/api-working-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ApiWorkingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiWorkingRoutingModule", function() { return ApiWorkingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_working_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-working.component */ "./src/app/api-working/api-working.component.ts");




const routes = [
    {
        path: '',
        component: _api_working_component__WEBPACK_IMPORTED_MODULE_3__["ApiWorkingComponent"]
    }
];
let ApiWorkingRoutingModule = class ApiWorkingRoutingModule {
};
ApiWorkingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ApiWorkingRoutingModule);



/***/ }),

/***/ "./src/app/api-working/api-working.component.html":
/*!********************************************************!*\
  !*** ./src/app/api-working/api-working.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5 mt-5\">\nadasd\n</div>\n"

/***/ }),

/***/ "./src/app/api-working/api-working.component.scss":
/*!********************************************************!*\
  !*** ./src/app/api-working/api-working.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaS13b3JraW5nL2FwaS13b3JraW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/api-working/api-working.component.ts":
/*!******************************************************!*\
  !*** ./src/app/api-working/api-working.component.ts ***!
  \******************************************************/
/*! exports provided: ApiWorkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiWorkingComponent", function() { return ApiWorkingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ApiWorkingComponent = class ApiWorkingComponent {
    constructor(api, httpClient) {
        this.api = api;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.api.getAssets('assets/events.json').subscribe(e => {
            console.log(e);
        }, err => {
            console.log(err);
        });
        this.api.get(`${_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ENDPOINT"].users}/2`).subscribe(e => {
            console.log(e);
        }, err => {
            console.log(err);
        });
    }
};
ApiWorkingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-working',
        template: __webpack_require__(/*! ./api-working.component.html */ "./src/app/api-working/api-working.component.html"),
        styles: [__webpack_require__(/*! ./api-working.component.scss */ "./src/app/api-working/api-working.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ApiWorkingComponent);



/***/ }),

/***/ "./src/app/api-working/api-working.module.ts":
/*!***************************************************!*\
  !*** ./src/app/api-working/api-working.module.ts ***!
  \***************************************************/
/*! exports provided: ApiWorkingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiWorkingModule", function() { return ApiWorkingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _api_working_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-working-routing.module */ "./src/app/api-working/api-working-routing.module.ts");
/* harmony import */ var _api_working_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-working.component */ "./src/app/api-working/api-working.component.ts");





let ApiWorkingModule = class ApiWorkingModule {
};
ApiWorkingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_api_working_component__WEBPACK_IMPORTED_MODULE_4__["ApiWorkingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _api_working_routing_module__WEBPACK_IMPORTED_MODULE_3__["ApiWorkingRoutingModule"]
        ]
    })
], ApiWorkingModule);



/***/ })

}]);
//# sourceMappingURL=3.238da2fd264c6cc839e7.js.map