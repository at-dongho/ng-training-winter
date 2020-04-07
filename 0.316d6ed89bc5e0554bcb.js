(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"register\" (ngSubmit)=\"action()\">\n  <div class=\"form-group\">\n    <label for=\"\">Fullname</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"fullname\">\n    <p *ngIf=\"fullname.invalid && (fullname.dirty || fullname.touched)\">\n      This is required!\n    </p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Email</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Password</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"pass\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Confirm Password</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"confirmPass\">\n  </div>\n\n  <div class=\"form-group\" formArrayName=\"skills\">\n    <label for=\"\">Skills</label>\n    <div class=\"row\">\n      <div *ngFor=\"let skill of skills.controls; let i=index;\" class=\"col-md-4\">\n        <input class=\"form-control\" type=\"text\" [formControlName]=\"i\">\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn btn-primary\" (click)=\"addSkill()\">\n          + Add more\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"buttons-set\">\n    <button>Register</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xlYXJuLWZvcm0vbGVhcm4tZm9ybS1yZWFjdGl2ZS9sZWFybi1mb3JtLXJlYWN0aXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LearnFormReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnFormReactiveComponent", function() { return LearnFormReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_validatetion_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/validatetion/validate */ "./src/app/core/validatetion/validate.ts");




let LearnFormReactiveComponent = class LearnFormReactiveComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.register = this.fb.group({
            fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [''],
            pass: [''],
            confirmPass: [''],
            add: this.fb.group({
                street: [''],
                city: ['']
            }),
            skills: this.fb.array([
                this.fb.control(''),
                this.fb.control('')
            ])
        }, {
            validator: Object(src_app_core_validatetion_validate__WEBPACK_IMPORTED_MODULE_3__["matchPass"])('pass', 'confirmPass')
        });
        setTimeout(() => {
            const results = {
                fullname: 'David DOng',
                email: 'hodong@gmail.com'
            };
        }, 2000);
        this.register.valueChanges.subscribe(e => {
            console.log(this.register);
        });
    }
    action() {
        console.log(this.register);
    }
    get skills() {
        return this.register.controls['skills'];
    }
    get fullname() {
        return this.register.controls['fullname'];
    }
    addSkill() {
        this.skills.push(this.fb.control(''));
    }
};
LearnFormReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-form-reactive',
        template: __webpack_require__(/*! ./learn-form-reactive.component.html */ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.html"),
        styles: [__webpack_require__(/*! ./learn-form-reactive.component.scss */ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], LearnFormReactiveComponent);



/***/ }),

/***/ "./src/app/features/learn-form/learn-form-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LearnFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnFormRoutingModule", function() { return LearnFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _learn_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learn-form.component */ "./src/app/features/learn-form/learn-form.component.ts");
/* harmony import */ var _learn_form_template_learn_form_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn-form-template/learn-form-template.component */ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.ts");
/* harmony import */ var _learn_form_reactive_learn_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learn-form-reactive/learn-form-reactive.component */ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.ts");






const routes = [
    {
        path: '',
        component: _learn_form_component__WEBPACK_IMPORTED_MODULE_3__["LearnFormComponent"],
        children: [
            {
                path: 'template',
                component: _learn_form_template_learn_form_template_component__WEBPACK_IMPORTED_MODULE_4__["LearnFormTemplateComponent"]
            },
            {
                path: 'reactive',
                component: _learn_form_reactive_learn_form_reactive_component__WEBPACK_IMPORTED_MODULE_5__["LearnFormReactiveComponent"]
            }
        ]
    }
];
let LearnFormRoutingModule = class LearnFormRoutingModule {
};
LearnFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LearnFormRoutingModule);



/***/ }),

/***/ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-template/learn-form-template.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n  <div class=\"form-group\">\n    <label for=\"\">Username</label>\n    <input class=\"form-control\" #user=\"ngModel\" type=\"text\" name=\"username\" [(ngModel)]=\"username\" required minlength=\"10\">\n    {{user.valid}}\n    <div *ngIf=\"!user.valid && (user.dirty || user.touched)\">\n      <p *ngIf=\"user.errors.required\">THis is required!</p>\n      <p *ngIf=\"user.errors.minlength\">THis is minlength more than 10!</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"\">Password</label>\n    <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n  </div>\n  <div ngModelGroup=\"address\" class=\"form-group-parent\">\n    <label>Address</label>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <input class=\"form-control\" type=\"text\" name=\"street\" [(ngModel)]=\"street\">\n      </div>\n      <div class=\"col-md-4\">\n        <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"city\">\n      </div>\n    </div>\n  </div>\n  <div class=\"buttons-set\">\n    <button class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-template/learn-form-template.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xlYXJuLWZvcm0vbGVhcm4tZm9ybS10ZW1wbGF0ZS9sZWFybi1mb3JtLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form-template/learn-form-template.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LearnFormTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnFormTemplateComponent", function() { return LearnFormTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearnFormTemplateComponent = class LearnFormTemplateComponent {
    constructor() {
        this.username = '';
        this.password = '';
        this.city = '';
        this.street = '';
    }
    ngOnInit() {
    }
    login(f) {
        console.log(f.value);
    }
};
LearnFormTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-form-template',
        template: __webpack_require__(/*! ./learn-form-template.component.html */ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.html"),
        styles: [__webpack_require__(/*! ./learn-form-template.component.scss */ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LearnFormTemplateComponent);



/***/ }),

/***/ "./src/app/features/learn-form/learn-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a class=\"btn btn-primary\" routerLink=\"/learn-form/template\">Template Driven Form</a>\n  <a class=\"btn btn-primary\" routerLink=\"/learn-form/reactive\">Reactive Form</a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xlYXJuLWZvcm0vbGVhcm4tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/learn-form/learn-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/learn-form/learn-form.component.ts ***!
  \*************************************************************/
/*! exports provided: LearnFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnFormComponent", function() { return LearnFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LearnFormComponent = class LearnFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
LearnFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-learn-form',
        template: __webpack_require__(/*! ./learn-form.component.html */ "./src/app/features/learn-form/learn-form.component.html"),
        styles: [__webpack_require__(/*! ./learn-form.component.scss */ "./src/app/features/learn-form/learn-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LearnFormComponent);



/***/ }),

/***/ "./src/app/features/learn-form/learn-form.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/learn-form/learn-form.module.ts ***!
  \**********************************************************/
/*! exports provided: LearnFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnFormModule", function() { return LearnFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _learn_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learn-form-routing.module */ "./src/app/features/learn-form/learn-form-routing.module.ts");
/* harmony import */ var _learn_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn-form.component */ "./src/app/features/learn-form/learn-form.component.ts");
/* harmony import */ var _learn_form_template_learn_form_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learn-form-template/learn-form-template.component */ "./src/app/features/learn-form/learn-form-template/learn-form-template.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _learn_form_reactive_learn_form_reactive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./learn-form-reactive/learn-form-reactive.component */ "./src/app/features/learn-form/learn-form-reactive/learn-form-reactive.component.ts");








let LearnFormModule = class LearnFormModule {
};
LearnFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_learn_form_component__WEBPACK_IMPORTED_MODULE_4__["LearnFormComponent"], _learn_form_template_learn_form_template_component__WEBPACK_IMPORTED_MODULE_5__["LearnFormTemplateComponent"], _learn_form_reactive_learn_form_reactive_component__WEBPACK_IMPORTED_MODULE_7__["LearnFormReactiveComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _learn_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["LearnFormRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], LearnFormModule);



/***/ })

}]);
//# sourceMappingURL=0.316d6ed89bc5e0554bcb.js.map