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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page.html?ngResource */ 2489);
/* harmony import */ var _nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page.scss?ngResource */ 6181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pacient.service */ 2220);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ 5);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _models_pacient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pacient */ 7377);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/beds.service */ 3082);














let NurseMainPage = class NurseMainPage {
    constructor(activatedRoute, localSto, pacientServ, MQTTServ, userlogged, bedlocal, router) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.MQTTServ = MQTTServ;
        this.userlogged = userlogged;
        this.bedlocal = bedlocal;
        this.router = router;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_9__.User(0, "", "", "", "", 0, "");
        this.bedId = 0;
        this.nurseName = " ";
        this.nurseId = 0;
        this.notes = new Array;
        this.showNotes = false;
        this.pacientLocal = new _models_pacient__WEBPACK_IMPORTED_MODULE_7__.Pacient(0, "Gus", "Bas", 0, 0, 0);
        this.QRCapture = false;
        this.bedId = bedlocal.getBedId();
    }
    ngOnInit() {
        this.getParams();
    }
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = this.userlogged.getUser();
            this.nurseName = this.localNurse.username;
            let responseNoteTopic = "/Beds/" + this.bedId + "/Pacient";
            this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                //console.log("SystemResponse:  "+Message.toString());
                let localMessage = JSON.parse(Message.string);
                let pacient1 = JSON.parse(JSON.stringify(localMessage[0]));
                //console.log("pacientId:"+ pacient1.pacientId);
                this.pacientLocal.id = pacient1.pacientId;
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                }
                console.log("Pacient received");
            });
            let topic = "/User/general";
            let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.bedId), 0, "0", 10);
            let mqttmessage = JSON.stringify(b);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
        });
    }
    onClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let local = this.bedId;
            // this.pacientLocal.id=this.bedId;
            this.notes.splice(0);
            console.log(local);
            //this.showNotes = true;
            //this.pacientServ.oneAsk(local.pacientNumber);
            let responseNoteTopic = "/Pacient/" + this.pacientLocal.id + "/notes";
            this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                console.log("respuestaSystem:  " + Message.toString());
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                }
                console.log("recibo nota");
                //let localMessage = JSON.parse(Message[0].string);      
                let localMessage = JSON.parse(Message.string);
                let note1 = JSON.parse(JSON.stringify(localMessage[0]));
                let note2 = JSON.parse(JSON.stringify(localMessage[1]));
                let notaLocal1 = new _models_note__WEBPACK_IMPORTED_MODULE_5__.Note(note1.notesId, note1.note, note1.state);
                let notaLocal2 = new _models_note__WEBPACK_IMPORTED_MODULE_5__.Note(note2.notesId, note2.note, note2.state);
                this.notes.push(notaLocal1);
                this.notes.push(notaLocal2);
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
            });
            console.log("Pacient:" + this.pacientLocal.id);
            let responseInfoTopic = "/Pacient/" + this.pacientLocal.id + "/info";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                this.pacientLocal.lastName = localMessage[0].lastName;
                this.pacientLocal.firstName = localMessage[0].firstName;
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.pacientLocal.id), 0, "0", 4);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.pacientLocal.id), 0, "0", 5);
            mqttmessage = JSON.stringify(b);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.showNotes = true;
        });
    }
    goChat() {
        /*   this.router.navigate(['/chat/]);        */
        this.router.navigate(['/chat/']);
    }
};
NurseMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__.PacientService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_10__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router }
];
NurseMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-item>\n    <ion-title>Enfermera:{{nurseName}}</ion-title>\n  </ion-item>\n  <ion-item>\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"\" [text]=\"\"></ion-back-button>        \n    </ion-buttons>\n    <ion-title>Cama:{{bedId}}</ion-title>\n  </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n   <ion-button>Capturar QR </ion-button> \n   <ion-button (click)=\"goChat()\">Chat </ion-button> \n  </ion-item>\n   <div *ngIf=\"showNotes==false\">\n    <ion-item>\n    <ion-button (click)=\"onClick()\">Consultar notas de Paciente</ion-button> \n    </ion-item>\n   </div>\n  \n  </ion-card>\n\n  <div *ngIf=\"showNotes==true\">\n    <ion-card class=\"PacientDataCard\">\n    <!--Informacion del paciente-->\n      <ion-item>Apellido: {{pacientLocal.lastName}}</ion-item>\n      <ion-item>Nombre: {{pacientLocal.firstName}}</ion-item>\n      <ion-item>Id Paciente: {{pacientLocal.id}}</ion-item>\n      \n\n    </ion-card>\n\n    \n    <!--Notas del paciente : limite 2-->\n    <div *ngFor=\"let Note of notes; let i=index\">\n      <ion-card>\n        <!--Informacion del paciente-->\n          <ion-item>ID nota: {{notes[i].noteId}}</ion-item>\n          <ion-item>Nota:{{notes[i].note}}</ion-item>\n        <!--  <ion-item>Estado:{{notes[i].state}}</ion-item>        -->\n        \n       </ion-card>\n\n    </div>\n  </div>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nurse-main_nurse-main_module_ts.js.map