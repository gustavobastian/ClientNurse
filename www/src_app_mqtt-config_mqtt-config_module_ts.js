"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mqtt-config_mqtt-config_module_ts"],{

/***/ 4365:
/*!***********************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageRoutingModule": () => (/* binding */ MqttConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);




const routes = [
    {
        path: '',
        component: _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPage
    }
];
let MqttConfigPageRoutingModule = class MqttConfigPageRoutingModule {
};
MqttConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MqttConfigPageRoutingModule);



/***/ }),

/***/ 4670:
/*!***************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageModule": () => (/* binding */ MqttConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config-routing.module */ 4365);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);







let MqttConfigPageModule = class MqttConfigPageModule {
};
MqttConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPageRoutingModule
        ],
        declarations: [_mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__.MqttConfigPage]
    })
], MqttConfigPageModule);



/***/ }),

/***/ 3644:
/*!*************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPage": () => (/* binding */ MqttConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page.html?ngResource */ 1218);
/* harmony import */ var _mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page.scss?ngResource */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MqttConfigPage = class MqttConfigPage {
    constructor() { }
    ngOnInit() {
    }
};
MqttConfigPage.ctorParameters = () => [];
MqttConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mqtt-config',
        template: _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MqttConfigPage);



/***/ }),

/***/ 3882:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcXR0LWNvbmZpZy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1218:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mqttConfig</ion-title>\n    \n      <!-- Back button with a default href -->\n      <ion-buttons slot=\"start\">\n        <ion-back-button    defaultHref=\"home\" [text]=\"\"></ion-back-button>\n      </ion-buttons>\n    \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    \n  <p>here you can set the Mqtt server settings</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mqtt-config_mqtt-config_module_ts.js.map