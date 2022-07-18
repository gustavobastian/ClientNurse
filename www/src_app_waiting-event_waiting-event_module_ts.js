"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_waiting-event_waiting-event_module_ts"],{

/***/ 6314:
/*!***************************************************************!*\
  !*** ./src/app/waiting-event/waiting-event-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingEventPageRoutingModule": () => (/* binding */ WaitingEventPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _waiting_event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event.page */ 3198);




const routes = [
    {
        path: '',
        component: _waiting_event_page__WEBPACK_IMPORTED_MODULE_0__.WaitingEventPage
    }
];
let WaitingEventPageRoutingModule = class WaitingEventPageRoutingModule {
};
WaitingEventPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WaitingEventPageRoutingModule);



/***/ }),

/***/ 6554:
/*!*******************************************************!*\
  !*** ./src/app/waiting-event/waiting-event.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingEventPageModule": () => (/* binding */ WaitingEventPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _waiting_event_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event-routing.module */ 6314);
/* harmony import */ var _waiting_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-event.page */ 3198);







let WaitingEventPageModule = class WaitingEventPageModule {
};
WaitingEventPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _waiting_event_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitingEventPageRoutingModule
        ],
        declarations: [_waiting_event_page__WEBPACK_IMPORTED_MODULE_1__.WaitingEventPage]
    })
], WaitingEventPageModule);



/***/ }),

/***/ 3198:
/*!*****************************************************!*\
  !*** ./src/app/waiting-event/waiting-event.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingEventPage": () => (/* binding */ WaitingEventPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _waiting_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event.page.html?ngResource */ 4862);
/* harmony import */ var _waiting_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-event.page.scss?ngResource */ 6576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);








let WaitingEventPage = class WaitingEventPage {
    constructor(activatedRoute, MQTTServ, localSto, router) {
        this.activatedRoute = activatedRoute;
        this.MQTTServ = MQTTServ;
        this.localSto = localSto;
        this.router = router;
        this.messages = new Array;
    }
    ngOnInit() {
        setTimeout(() => {
            this.eventsSubscription();
        }, 600);
    }
    /**
     * Subscription for receiving messages
     * kind of messages waiting for: {"_bedId":2,"_content":"alert","_time":"today","_username":"system"}
     * It is only used the bedId parameter
     */
    eventsSubscription() {
        let topic = "/Beds/caller-events";
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            let localMessage = JSON.parse(Message.string);
            let receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_2__.MessageModel(localMessage._username, localMessage._content, localMessage._bedId, localMessage._time, localMessage._type);
            this.messages.push(receivedMessage);
            console.log(receivedMessage);
            //this.messages[0]=receivedMessage;
        });
    }
    onClick(i) {
        //this.router.navigate(['/chat']);
        console.log("habitacion:" + i);
        this.router.navigate(['/nurse-main/:' + i]);
    }
};
WaitingEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_4__.MqttService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
WaitingEventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-waiting-event',
        template: _waiting_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_waiting_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WaitingEventPage);



/***/ }),

/***/ 6576:
/*!******************************************************************!*\
  !*** ./src/app/waiting-event/waiting-event.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  background-color: #d15050;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6IndhaXRpbmctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDgwLCA4MCk7IC8vIGJsYWNrXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 4862:
/*!******************************************************************!*\
  !*** ./src/app/waiting-event/waiting-event.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Esperando notificacion</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  href=\"home\">Logout</ion-button>        \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"msgbubble\" *ngFor=\"let msg of messages\">    \n    <ion-card >\n      <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n        <ion-label>Habitacion: {{ msg.bedId }}</ion-label>\n        \n      <br>\n      <ion-item>\n        <ion-button (click)=\"onClick(msg.bedId)\"> Aceptar </ion-button>\n        <ion-button > Ubicacion </ion-button>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_waiting-event_waiting-event_module_ts.js.map