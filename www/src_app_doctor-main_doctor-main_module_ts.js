"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_doctor-main_doctor-main_module_ts"],{

/***/ 3325:
/*!***********************************************************!*\
  !*** ./src/app/doctor-main/doctor-main-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMainPageRoutingModule": () => (/* binding */ DoctorMainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _doctor_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main.page */ 9576);




const routes = [
    {
        path: '',
        component: _doctor_main_page__WEBPACK_IMPORTED_MODULE_0__.DoctorMainPage
    }
];
let DoctorMainPageRoutingModule = class DoctorMainPageRoutingModule {
};
DoctorMainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DoctorMainPageRoutingModule);



/***/ }),

/***/ 9921:
/*!***************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMainPageModule": () => (/* binding */ DoctorMainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _doctor_main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main-routing.module */ 3325);
/* harmony import */ var _doctor_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-main.page */ 9576);







let DoctorMainPageModule = class DoctorMainPageModule {
};
DoctorMainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _doctor_main_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorMainPageRoutingModule
        ],
        declarations: [_doctor_main_page__WEBPACK_IMPORTED_MODULE_1__.DoctorMainPage]
    })
], DoctorMainPageModule);



/***/ }),

/***/ 9576:
/*!*************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMainPage": () => (/* binding */ DoctorMainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main.page.html?ngResource */ 7357);
/* harmony import */ var _doctor_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-main.page.scss?ngResource */ 2722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);







let DoctorMainPage = class DoctorMainPage {
    constructor(router, activatedRoute, localSto) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
        this.doctorName = "";
    }
    ngOnInit() {
        this.getParams();
    }
    onClickPacientNote(id) {
        console.log("here");
        this.router.navigate(['/doctor-pacients/' + this.doctorId]);
    }
    onClickMessages() {
        this.router.navigate(['/doctor-messages/' + this.doctorId]);
    }
    /**
     * Getting the parameters of the user from the local storage
     */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'username' });
            this.doctorName = value.toString();
            console.log(this.doctorName);
        });
    }
};
DoctorMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
DoctorMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-doctor-main',
        template: _doctor_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_doctor_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoctorMainPage);



/***/ }),

/***/ 2722:
/*!**************************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItbWFpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7357:
/*!**************************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Doctor:</ion-title>\n    <ion-title>{{doctorName}}</ion-title>\n      <!-- Back button with a default href -->\n    <ion-buttons slot=\"start\">\n        <ion-back-button    defaultHref=\"/login\" [text]=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-card >\n      <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n        <ion-label>Cambiar notas de Pacientes </ion-label>\n      <br>\n      <ion-item>\n        <ion-button (click)=\"onClickPacientNote(1)\"> Ir </ion-button>        \n      </ion-item>\n    </ion-card>\n    <ion-card >\n      <ion-icon name=\"mailbox\" slot=\"start\"></ion-icon>\n        <ion-label>Leer Mensajes </ion-label>\n      <br>\n      <ion-item>\n        <ion-button (click)=\"onClickMessages()\"> Aceptar </ion-button>        \n      </ion-item>\n    </ion-card>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-main_doctor-main_module_ts.js.map