"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nurse-main_nurse-main_module_ts"],{

/***/ 8090:
/*!*********************************************************!*\
  !*** ./src/app/nurse-main/nurse-main-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseMainPageRoutingModule": () => (/* binding */ NurseMainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page */ 7393);




const routes = [
    {
        path: '',
        component: _nurse_main_page__WEBPACK_IMPORTED_MODULE_0__.NurseMainPage
    }
];
let NurseMainPageRoutingModule = class NurseMainPageRoutingModule {
};
NurseMainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NurseMainPageRoutingModule);



/***/ }),

/***/ 8265:
/*!*************************************************!*\
  !*** ./src/app/nurse-main/nurse-main.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseMainPageModule": () => (/* binding */ NurseMainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nurse_main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main-routing.module */ 8090);
/* harmony import */ var _nurse_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page */ 7393);







let NurseMainPageModule = class NurseMainPageModule {
};
NurseMainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nurse_main_routing_module__WEBPACK_IMPORTED_MODULE_0__.NurseMainPageRoutingModule
        ],
        declarations: [_nurse_main_page__WEBPACK_IMPORTED_MODULE_1__.NurseMainPage]
    })
], NurseMainPageModule);



/***/ }),

/***/ 7393:
/*!***********************************************!*\
  !*** ./src/app/nurse-main/nurse-main.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseMainPage": () => (/* binding */ NurseMainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page.html?ngResource */ 2489);
/* harmony import */ var _nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page.scss?ngResource */ 6181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let NurseMainPage = class NurseMainPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.bedId = 0;
        this.bedId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    }
    ngOnInit() {
    }
};
NurseMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
NurseMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-nurse-main',
        template: _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NurseMainPage);



/***/ }),

/***/ 6181:
/*!************************************************************!*\
  !*** ./src/app/nurse-main/nurse-main.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzZS1tYWluLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2489:
/*!************************************************************!*\
  !*** ./src/app/nurse-main/nurse-main.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>nurse-main</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n   <ion-button>Capturar QR </ion-button> \n   <ion-button>Consultar notas de Paciente</ion-button> \n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nurse-main_nurse-main_module_ts.js.map