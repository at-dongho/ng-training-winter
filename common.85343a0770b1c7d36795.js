(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/validatetion/validate.ts":
/*!***********************************************!*\
  !*** ./src/app/core/validatetion/validate.ts ***!
  \***********************************************/
/*! exports provided: matchPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPass", function() { return matchPass; });
function matchPass(pass, confirmPass) {
    return (control) => {
        if (control.controls[pass].value && control.controls[confirmPass].value) {
            if (control.controls[pass].value !== control.controls[confirmPass].value) {
                return { notMatchPass: true };
            }
        }
        return null;
    };
}


/***/ })

}]);
//# sourceMappingURL=common.85343a0770b1c7d36795.js.map