(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/app/features/form-train/form-reactive/form-reactive.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/form-train/form-reactive/form-reactive.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form action=\"\" [formGroup]=\"formReactive\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n      <div *ngIf=\"formReactive.controls.firstName.invalid \n        && (formReactive.controls.firstName.dirty || formReactive.controls.firstName.touched)\">\n        <span *ngIf=\"formReactive.get('firstName').errors.required\">This field is required</span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n    </div>\n    <div class=\"form-group\" formGroupName=\"address\">\n      <label>Address</label>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"street\" placeholder=\"Street\">\n        </div>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"district\" placeholder=\"district\">\n        </div>\n        <div class=\"col-md-4\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"city\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <label>Confirm Password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n    </div>\n    <div formArrayName=\"moreInfo\">\n      <label class=\"mb-4\">More Info</label> <button type=\"button\" (click)=\"addMoreInfo()\" class=\"ml-3 btn btn-primary btn-sm\">Add Alias +</button>\n      <div class=\"row\">\n        <div class=\"col-md-3 mb-2\" *ngFor=\"let more of moreInfo.controls; let i=index\">\n          <input class=\"form-control\" type=\"text\" [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formReactive.invalid\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/features/form-train/form-reactive/form-reactive.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/form-train/form-reactive/form-reactive.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Zvcm0tdHJhaW4vZm9ybS1yZWFjdGl2ZS9mb3JtLXJlYWN0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/form-train/form-reactive/form-reactive.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/form-train/form-reactive/form-reactive.component.ts ***!
  \******************************************************************************/
/*! exports provided: FormReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormReactiveComponent", function() { return FormReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let FormReactiveComponent = class FormReactiveComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.formReactive = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)],
            email: [''],
            address: this.fb.group({
                street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)],
                district: [''],
                city: ['']
            }),
            password: [''],
            confirmPassword: [''],
            moreInfo: this.fb.array([
                this.fb.control(''),
                this.fb.control('')
            ])
        });
        this.formReactive.patchValue({
            firstName: 'abc',
            lastName: 'bcd'
        });
    }
    onSubmit() {
        console.log(this.formReactive);
    }
    addMoreInfo() {
        this.moreInfo.push(this.fb.control(''));
    }
    get moreInfo() {
        return this.formReactive.get('moreInfo');
    }
};
FormReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-reactive',
        template: __webpack_require__(/*! ./form-reactive.component.html */ "./src/app/features/form-train/form-reactive/form-reactive.component.html"),
        styles: [__webpack_require__(/*! ./form-reactive.component.scss */ "./src/app/features/form-train/form-reactive/form-reactive.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], FormReactiveComponent);



/***/ }),

/***/ "./src/app/features/form-train/form-train-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/form-train/form-train-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FormTrainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTrainRoutingModule", function() { return FormTrainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_train_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-train.component */ "./src/app/features/form-train/form-train.component.ts");
/* harmony import */ var _form_reactive_form_reactive_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-reactive/form-reactive.component */ "./src/app/features/form-train/form-reactive/form-reactive.component.ts");





const routes = [
    {
        path: '',
        component: _form_train_component__WEBPACK_IMPORTED_MODULE_3__["FormTrainComponent"],
        children: [
            {
                path: 'form-reactive',
                component: _form_reactive_form_reactive_component__WEBPACK_IMPORTED_MODULE_4__["FormReactiveComponent"]
            }
        ]
    }
];
let FormTrainRoutingModule = class FormTrainRoutingModule {
};
FormTrainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FormTrainRoutingModule);



/***/ }),

/***/ "./src/app/features/form-train/form-train.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/form-train/form-train.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a class=\"btn btn-primary\" routerLink=\"form-reactive\">Reactive Form</a>\n  <a class=\"btn btn-primary\" routerLink=\"form-template\">Template-Driven Form</a>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/features/form-train/form-train.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/form-train/form-train.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Zvcm0tdHJhaW4vZm9ybS10cmFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/form-train/form-train.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/form-train/form-train.component.ts ***!
  \*************************************************************/
/*! exports provided: FormTrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTrainComponent", function() { return FormTrainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormTrainComponent = class FormTrainComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormTrainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-train',
        template: __webpack_require__(/*! ./form-train.component.html */ "./src/app/features/form-train/form-train.component.html"),
        styles: [__webpack_require__(/*! ./form-train.component.scss */ "./src/app/features/form-train/form-train.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormTrainComponent);



/***/ }),

/***/ "./src/app/features/form-train/form-train.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/form-train/form-train.module.ts ***!
  \**********************************************************/
/*! exports provided: FormTrainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTrainModule", function() { return FormTrainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _form_train_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-train-routing.module */ "./src/app/features/form-train/form-train-routing.module.ts");
/* harmony import */ var _form_reactive_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-reactive/form-reactive.component */ "./src/app/features/form-train/form-reactive/form-reactive.component.ts");
/* harmony import */ var _form_train_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-train.component */ "./src/app/features/form-train/form-train.component.ts");







let FormTrainModule = class FormTrainModule {
};
FormTrainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_form_reactive_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__["FormReactiveComponent"], _form_train_component__WEBPACK_IMPORTED_MODULE_6__["FormTrainComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _form_train_routing_module__WEBPACK_IMPORTED_MODULE_4__["FormTrainRoutingModule"]
        ]
    })
], FormTrainModule);



/***/ })

}]);
//# sourceMappingURL=2.6acb423f899834b48d92.js.map