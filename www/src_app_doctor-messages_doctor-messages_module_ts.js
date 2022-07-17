"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_doctor-messages_doctor-messages_module_ts"],{

/***/ 6182:
/*!*******************************************************************!*\
  !*** ./src/app/doctor-messages/doctor-messages-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMessagesPageRoutingModule": () => (/* binding */ DoctorMessagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _doctor_messages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-messages.page */ 6527);




const routes = [
    {
        path: '',
        component: _doctor_messages_page__WEBPACK_IMPORTED_MODULE_0__.DoctorMessagesPage
    }
];
let DoctorMessagesPageRoutingModule = class DoctorMessagesPageRoutingModule {
};
DoctorMessagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DoctorMessagesPageRoutingModule);



/***/ }),

/***/ 1103:
/*!***********************************************************!*\
  !*** ./src/app/doctor-messages/doctor-messages.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMessagesPageModule": () => (/* binding */ DoctorMessagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _doctor_messages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-messages-routing.module */ 6182);
/* harmony import */ var _doctor_messages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-messages.page */ 6527);







let DoctorMessagesPageModule = class DoctorMessagesPageModule {
};
DoctorMessagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _doctor_messages_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorMessagesPageRoutingModule
        ],
        declarations: [_doctor_messages_page__WEBPACK_IMPORTED_MODULE_1__.DoctorMessagesPage]
    })
], DoctorMessagesPageModule);



/***/ }),

/***/ 6527:
/*!*********************************************************!*\
  !*** ./src/app/doctor-messages/doctor-messages.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMessagesPage": () => (/* binding */ DoctorMessagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-messages.page.html?ngResource */ 5042);
/* harmony import */ var _doctor_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-messages.page.scss?ngResource */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 460);







let DoctorMessagesPage = class DoctorMessagesPage {
    constructor(activatedRoute, localSto) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
        this.doctorName = "";
    }
    ngOnInit() {
        this.getParams();
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
DoctorMessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService }
];
DoctorMessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-doctor-messages',
        template: _doctor_messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_doctor_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoctorMessagesPage);



/***/ }),

/***/ 5508:
/*!**********************************************************************!*\
  !*** ./src/app/doctor-messages/doctor-messages.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItbWVzc2FnZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5042:
/*!**********************************************************************!*\
  !*** ./src/app/doctor-messages/doctor-messages.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Notificaciones: {{doctorName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button    defaultHref=\"/doctor-main/\" [text]=\"\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-messages_doctor-messages_module_ts.js.map