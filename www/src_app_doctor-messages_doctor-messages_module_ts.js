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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_messages_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-messages.page.html?ngResource */ 5042);
/* harmony import */ var _doctor_messages_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-messages.page.scss?ngResource */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/bed */ 982);












let DoctorMessagesPage = class DoctorMessagesPage {
    constructor(activatedRoute, localSto, bedS, router, MQTTServ, userServ) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.bedS = bedS;
        this.router = router;
        this.MQTTServ = MQTTServ;
        this.userServ = userServ;
        this.localDoctor = new _models_user__WEBPACK_IMPORTED_MODULE_4__.User(0, "", "", "", "", 0, "");
        this.BedLocal2 = new _models_bed__WEBPACK_IMPORTED_MODULE_8__.Bed(0, 0, 0, 0);
        this.messages = new Array;
        this.doctorId = 0;
        this.doctorName = "";
    }
    ngOnInit() {
        this.localDoctor = this.userServ.getUser();
        this.doctorName = this.localDoctor.username;
        this.doctorId = this.localDoctor.userId;
        this.BedLocal2 = this.bedS.getBed();
        this.eventsSubscription();
    }
    goChat(i) {
        /*   this.router.navigate(['/chat/]);        */
        this.bedS.setBedId(i);
        this.router.navigate(['/chat/']);
    }
    /**
     * Subscription for receiving messages
     * kind of messages waiting for: {"_bedId":2,"_content":"alert","_time":"today","_username":"system"}
     * It is only used the bedId parameter
     */
    eventsSubscription() {
        //let topic="/Beds/caller-events";
        let topic = "/Beds/status";
        let receivedMessage;
        console.log("subscribed");
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            console.log("received");
            console.log(Message.string);
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            console.log(localMessage[0].message);
            this.messages = [];
            localMessage.forEach(element => {
                {
                    receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel("", "", element.id, "", element.st);
                    this.messages.push(receivedMessage);
                }
            });
        });
    }
};
DoctorMessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_5__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
DoctorMessagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{doctorName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button    defaultHref=\"/doctor-main/\" [text]=\"\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-content>\n    <div class=\"msgbubble\" *ngFor=\"let msg of messages\">  \n      <div *ngIf=\"msg.type !== 0\">  \n        <ion-card >\n          <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n            <ion-label>Habitacion: {{ msg.bedId }}</ion-label>\n            \n          <br>\n          <ion-item>\n            <ion-button (click)=\"goChat({{ msg.bedId }})\"> go Chat </ion-button>            \n          </ion-item>\n          <ion-item>\n            <ion-button > Ver Paciente </ion-button>            \n          </ion-item>\n        </ion-card>\n      </div>  \n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-messages_doctor-messages_module_ts.js.map