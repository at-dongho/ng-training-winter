(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-reactive/n-form-reactive.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formReactive\" (ngSubmit)=\"action()\">\n  <div class=\"form-group\">\n    <label for=\"\">Firstname</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"firstName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Lastname</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"lastName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Email</label>\n    <input class=\"form-control\" type=\"email\" formControlName=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Password</label>\n    <input class=\"form-control\" type=\"email\" formControlName=\"password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Confirm Password</label>\n    <input class=\"form-control\" type=\"email\" formControlName=\"confirmPassword\">\n    <ng-container *ngIf=\"formReactive.invalid && (formReactive.controls.confirmPassword.dirty || formReactive.controls.confirmPassword.touched)\">\n      <p>Confirm password not same with Password</p>\n    </ng-container>\n  </div>\n  <div class=\"form-group-parent row\" formGroupName=\"address\">\n    <div class=\"form-group col-md-4\">\n      <label for=\"\">House number</label>\n      <input class=\"form-control\" type=\"text\" formControlName=\"houseNumber\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"\">Street</label>\n      <input class=\"form-control\" type=\"text\" formControlName=\"street\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"\">City</label>\n      <input class=\"form-control\" type=\"email\" formControlName=\"city\">\n    </div>\n  </div>\n  <div class=\"form-group\" formArrayName=\"skills\">\n    <label for=\"\">Skills</label>\n    <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let skill of skills.controls; let i=index;\">\n        <input type=\"text\" class=\"form-control\" [formControlName]=\"i\">\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn btn-primary\" (click)=\"addMoreSkill()\">+ add more</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"buttons-set\">\n    <button class=\"btn btn-primary\">Register</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-reactive/n-form-reactive.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL24tZm9ybS9uLWZvcm0tcmVhY3RpdmUvbi1mb3JtLXJlYWN0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-reactive/n-form-reactive.component.ts ***!
  \******************************************************************************/
/*! exports provided: NFormReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormReactiveComponent", function() { return NFormReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_validatetion_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validatetion/validate */ "./src/app/core/validatetion/validate.ts");




let NFormReactiveComponent = class NFormReactiveComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.formReactive = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [''],
            email: [''],
            password: [''],
            confirmPassword: [''],
            address: this.fb.group({
                houseNumber: [''],
                street: [''],
                city: ['']
            }),
            skills: this.fb.array([
                this.fb.control(''),
                this.fb.control('')
            ])
        }, {
            validator: Object(src_app_core_validatetion_validate__WEBPACK_IMPORTED_MODULE_3__["matchPass"])('password', 'confirmPassword')
        });
    }
    action() {
        console.log(this.formReactive);
    }
    get skills() {
        return this.formReactive.controls.skills;
    }
    addMoreSkill() {
        this.skills.push(this.fb.control(''));
    }
};
NFormReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-n-form-reactive',
        template: __webpack_require__(/*! ./n-form-reactive.component.html */ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.html"),
        styles: [__webpack_require__(/*! ./n-form-reactive.component.scss */ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], NFormReactiveComponent);



/***/ }),

/***/ "./src/app/features/n-form/n-form-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/n-form/n-form-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: NFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormRoutingModule", function() { return NFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _n_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n-form.component */ "./src/app/features/n-form/n-form.component.ts");
/* harmony import */ var _n_form_template_n_form_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./n-form-template/n-form-template.component */ "./src/app/features/n-form/n-form-template/n-form-template.component.ts");
/* harmony import */ var _n_form_reactive_n_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./n-form-reactive/n-form-reactive.component */ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.ts");






const routes = [
    {
        path: '',
        component: _n_form_component__WEBPACK_IMPORTED_MODULE_3__["NFormComponent"],
        children: [
            {
                path: 'template',
                component: _n_form_template_n_form_template_component__WEBPACK_IMPORTED_MODULE_4__["NFormTemplateComponent"]
            },
            {
                path: 'reactive',
                component: _n_form_reactive_n_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__["NFormReactiveComponent"]
            }
        ]
    }
];
let NFormRoutingModule = class NFormRoutingModule {
};
NFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NFormRoutingModule);



/***/ }),

/***/ "./src/app/features/n-form/n-form-template/n-form-template.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-template/n-form-template.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #login=\"ngForm\" (ngSubmit)=\"submit(login)\">\n  <div class=\"form-group\">\n    <label for=\"\">Username</label>\n    <input name=\"user\" class=\"form-control\" #user=\"ngModel\" type=\"text\" [(ngModel)]=\"username\" required autocomplete=\"off\" minlength=\"10\" (ngModelChange)=\"change()\">\n    {{ user.valid }}\n    <div *ngIf=\"user.invalid && (user.dirty || user.touched)\">\n      <p *ngIf=\"user.errors.required\">\n        This field is required\n      </p>\n      <p *ngIf=\"user.errors.minlength\">\n        This field is required minlength more than 10\n      </p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Password</label>\n    <input name=\"pass\" class=\"form-control\" type=\"password\" [(ngModel)]=\"password\">\n  </div>\n  <div class=\"form-group-parent\" ngModelGroup=\"address\">\n    <label for=\"\">Address</label>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <input type=\"text\" name=\"houseNumber\" [(ngModel)]=\"houseNumber\">\n      </div>\n      <div class=\"col-md-4\">\n        <input type=\"text\" name=\"city\" [(ngModel)]=\"city\">\n      </div>\n    </div>\n  </div>\n  <div class=\"buttons-set\">\n    <button class=\"btn btn-primary\">Submit</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/n-form/n-form-template/n-form-template.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-template/n-form-template.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL24tZm9ybS9uLWZvcm0tdGVtcGxhdGUvbi1mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/n-form/n-form-template/n-form-template.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/n-form/n-form-template/n-form-template.component.ts ***!
  \******************************************************************************/
/*! exports provided: NFormTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormTemplateComponent", function() { return NFormTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NFormTemplateComponent = class NFormTemplateComponent {
    constructor() {
        this.username = '';
        this.password = '';
        this.city = '';
        this.houseNumber = '';
    }
    ngOnInit() {
    }
    submit(form) {
        console.log(this.username);
        console.log(this.password);
        console.log(form);
    }
    change() {
        console.log('asdasd');
    }
};
NFormTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-n-form-template',
        template: __webpack_require__(/*! ./n-form-template.component.html */ "./src/app/features/n-form/n-form-template/n-form-template.component.html"),
        styles: [__webpack_require__(/*! ./n-form-template.component.scss */ "./src/app/features/n-form/n-form-template/n-form-template.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NFormTemplateComponent);



/***/ }),

/***/ "./src/app/features/n-form/n-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/features/n-form/n-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a class=\"btn btn-primary\" routerLink=\"/n-form/template\">Template Driven form</a>\n  <a class=\"btn btn-primary\" routerLink=\"/n-form/reactive\">Template Driven form</a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/features/n-form/n-form.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/features/n-form/n-form.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL24tZm9ybS9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/n-form/n-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/n-form/n-form.component.ts ***!
  \*****************************************************/
/*! exports provided: NFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormComponent", function() { return NFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NFormComponent = class NFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
NFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-n-form',
        template: __webpack_require__(/*! ./n-form.component.html */ "./src/app/features/n-form/n-form.component.html"),
        styles: [__webpack_require__(/*! ./n-form.component.scss */ "./src/app/features/n-form/n-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NFormComponent);



/***/ }),

/***/ "./src/app/features/n-form/n-form.module.ts":
/*!**************************************************!*\
  !*** ./src/app/features/n-form/n-form.module.ts ***!
  \**************************************************/
/*! exports provided: NFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NFormModule", function() { return NFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _n_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./n-form-routing.module */ "./src/app/features/n-form/n-form-routing.module.ts");
/* harmony import */ var _n_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./n-form.component */ "./src/app/features/n-form/n-form.component.ts");
/* harmony import */ var _n_form_template_n_form_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./n-form-template/n-form-template.component */ "./src/app/features/n-form/n-form-template/n-form-template.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _n_form_reactive_n_form_reactive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./n-form-reactive/n-form-reactive.component */ "./src/app/features/n-form/n-form-reactive/n-form-reactive.component.ts");








let NFormModule = class NFormModule {
};
NFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_n_form_component__WEBPACK_IMPORTED_MODULE_4__["NFormComponent"], _n_form_template_n_form_template_component__WEBPACK_IMPORTED_MODULE_5__["NFormTemplateComponent"], _n_form_reactive_n_form_reactive_component__WEBPACK_IMPORTED_MODULE_7__["NFormReactiveComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _n_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["NFormRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], NFormModule);



/***/ })

}]);
//# sourceMappingURL=1.c4ae746e35013d01cd88.js.map