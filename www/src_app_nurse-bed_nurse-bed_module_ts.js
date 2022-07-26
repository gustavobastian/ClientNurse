"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nurse-bed_nurse-bed_module_ts"],{

/***/ 7551:
/*!*******************************************************!*\
  !*** ./src/app/nurse-bed/nurse-bed-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseBedPageRoutingModule": () => (/* binding */ NurseBedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_bed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed.page */ 1753);




const routes = [
    {
        path: '',
        component: _nurse_bed_page__WEBPACK_IMPORTED_MODULE_0__.NurseBedPage
    }
];
let NurseBedPageRoutingModule = class NurseBedPageRoutingModule {
};
NurseBedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NurseBedPageRoutingModule);



/***/ }),

/***/ 9588:
/*!***********************************************!*\
  !*** ./src/app/nurse-bed/nurse-bed.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseBedPageModule": () => (/* binding */ NurseBedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nurse_bed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed-routing.module */ 7551);
/* harmony import */ var _nurse_bed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-bed.page */ 1753);







let NurseBedPageModule = class NurseBedPageModule {
};
NurseBedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nurse_bed_routing_module__WEBPACK_IMPORTED_MODULE_0__.NurseBedPageRoutingModule
        ],
        declarations: [_nurse_bed_page__WEBPACK_IMPORTED_MODULE_1__.NurseBedPage]
    })
], NurseBedPageModule);



/***/ }),

/***/ 1753:
/*!*********************************************!*\
  !*** ./src/app/nurse-bed/nurse-bed.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseBedPage": () => (/* binding */ NurseBedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_bed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed.page.html?ngResource */ 4760);
/* harmony import */ var _nurse_bed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-bed.page.scss?ngResource */ 358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pacient.service */ 2220);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/bed */ 982);













let NurseBedPage = class NurseBedPage {
    constructor(activatedRoute, localSto, pacientServ, userLogged, bedLocal, MQTTServ) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.userLogged = userLogged;
        this.bedLocal = bedLocal;
        this.MQTTServ = MQTTServ;
        this.BedLocal2 = new _models_bed__WEBPACK_IMPORTED_MODULE_9__.Bed(0, 0, 0, 0);
        this.bedId = 0;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_7__.User(0, "", "", "", "", 0, "");
        let d = this.activatedRoute.snapshot.params['id'];
        this.bedId = this.bedLocal.getBedId();
        console.log("bedId " + d);
    }
    ngOnInit() {
        this.getParams();
        //this.getBedInfo();
    }
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = this.userLogged.getUser();
            this.nurseName = this.localNurse.username;
            this.bedId = this.bedLocal.getBedId();
            this.getBedInfo();
        });
    }
    getBedInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log("inside:" + this.nurseName);
            /** Preparing to get the response   *  */
            let responseInfoTopic = "/Beds/" + this.bedId + "/info";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                console.log("respuestaSystemBeds:  " + localMessage[0]);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                    this.floor = 0;
                    this.room = 0;
                    return;
                }
                else {
                    this.floor = localMessage[0].floorId;
                    this.room = localMessage[0].roomId;
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
            });
            /** Ask for information about the bed *  */
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_5__.MessageModel(this.nurseName, this.bedId.toString(), 0, "0", 8);
            //console.log(a)
            let mqttmessage = JSON.stringify(a);
            console.log("Mensaje:" + mqttmessage);
            let topic = "/Beds/" + this.bedId + "/messages";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
};
NurseBedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__.PacientService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_8__.BedsService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__.MqttService }
];
NurseBedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-nurse-bed',
        template: _nurse_bed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nurse_bed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NurseBedPage);



/***/ }),

/***/ 358:
/*!**********************************************************!*\
  !*** ./src/app/nurse-bed/nurse-bed.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzZS1iZWQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4760:
/*!**********************************************************!*\
  !*** ./src/app/nurse-bed/nurse-bed.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n  <!--    <ion-title>Enfermera:{{nurseName}}</ion-title>-->\n    </ion-item>\n   <ion-item>\n     \n      <ion-buttons slot=\"start\">\n        <ion-back-button  defaultHref=\"/waiting-event/\" [text]=\"\"></ion-back-button>        \n      </ion-buttons>\n      <ion-title>Cama:{{bedId}}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n  \n  \n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n    <ion-label>Piso: {{floor}}</ion-label>\n    </ion-item>\n    <ion-item>\n    <ion-label>Cuarto: {{room}}</ion-label>\n  </ion-item>\n  </ion-card>  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nurse-bed_nurse-bed_module_ts.js.map