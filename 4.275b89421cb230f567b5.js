(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-child/demo-lazy-child-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DemoLazyChildRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyChildRoutingModule", function() { return DemoLazyChildRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_lazy_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-lazy-child.component */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.ts");




const routes = [
    {
        path: '',
        component: _demo_lazy_child_component__WEBPACK_IMPORTED_MODULE_3__["DemoLazyChildComponent"]
    }
];
let DemoLazyChildRoutingModule = class DemoLazyChildRoutingModule {
};
DemoLazyChildRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DemoLazyChildRoutingModule);



/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  demo-lazy-child works!\n</p>\n"

/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8tbGF6eS9kZW1vLWxhenktY2hpbGQvZGVtby1sYXp5LWNoaWxkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.ts ***!
  \************************************************************************/
/*! exports provided: DemoLazyChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyChildComponent", function() { return DemoLazyChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoLazyChildComponent = class DemoLazyChildComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemoLazyChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-lazy-child',
        template: __webpack_require__(/*! ./demo-lazy-child.component.html */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.html"),
        styles: [__webpack_require__(/*! ./demo-lazy-child.component.scss */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DemoLazyChildComponent);



/***/ }),

/***/ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.module.ts ***!
  \*********************************************************************/
/*! exports provided: DemoLazyChildModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoLazyChildModule", function() { return DemoLazyChildModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _demo_lazy_child_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-lazy-child-routing.module */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child-routing.module.ts");
/* harmony import */ var _demo_lazy_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-lazy-child.component */ "./src/app/demo-lazy/demo-lazy-child/demo-lazy-child.component.ts");





let DemoLazyChildModule = class DemoLazyChildModule {
};
DemoLazyChildModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_demo_lazy_child_component__WEBPACK_IMPORTED_MODULE_4__["DemoLazyChildComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _demo_lazy_child_routing_module__WEBPACK_IMPORTED_MODULE_3__["DemoLazyChildRoutingModule"]
        ]
    })
], DemoLazyChildModule);



/***/ })

}]);
//# sourceMappingURL=4.275b89421cb230f567b5.js.map