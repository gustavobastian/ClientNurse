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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main.page.html?ngResource */ 7357);
/* harmony import */ var _doctor_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-main.page.scss?ngResource */ 2722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/bed */ 982);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/app */ 3253);













let DoctorMainPage = class DoctorMainPage {
    constructor(router, activatedRoute, localSto, bedlocal, MQTTServ, userServ) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.bedlocal = bedlocal;
        this.MQTTServ = MQTTServ;
        this.userServ = userServ;
        this.localDoctor = new _models_user__WEBPACK_IMPORTED_MODULE_4__.User(0, "", "", "", "", 0, "");
        this.localBed = new _models_bed__WEBPACK_IMPORTED_MODULE_5__.Bed(0, 0, 0, 0);
        this.newMessage = false;
        this.messages = new Array;
        this.pacientTable = new Array;
        this.textResponse = "";
        //this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
        this.doctorName = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getParams();
            yield this.getBeds();
        });
    }
    onClickPacientNote(id) {
        this.router.navigate(['/doctor-pacients/' + this.pacientNumber]);
    }
    onClickMessages() {
        this.router.navigate(['/doctor-messages/' + this.doctorId]);
    }
    /**
     * Getting the parameters of the user from the local storage
     */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.localDoctor = this.userServ.getUser();
            this.doctorName = this.localDoctor.username;
        });
    }
    /***
     * getting list of pacients and beds
     */
    getBeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("Doctor logged:"+this.localDoctor.username)    
            // console.log("Doctor logged:"+this.localDoctor.userId) 
            let responseInfoTopic = "/User/" + this.localDoctor.userId + "/Beds";
            yield this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                else {
                    //console.log(localMessage);
                    /*localMessage.forEach(element => {
                      this.pacientTable.push(element);
                    });*/
                    this.pacientTable = localMessage;
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                    // console.log(JSON.stringify(this.pacientTable=localMessage));
                    this.listenMessages();
                }
            });
            // console.log("Doctor logged id:"+this.localDoctor.userId)  
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.localDoctor.username, JSON.stringify(this.localDoctor.userId), 0, "0", 9);
            // console.log(a)
            let mqttmessage = JSON.stringify(a);
            // console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * logout
     */
    logout() {
        console.log("logging out");
        console.log("name:" + this.localDoctor.username);
        let question = "logout";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.localDoctor.username, question, 0, "", 2);
        console.log(JSON.stringify(a));
        let mqttmessage = (a).toString();
        // console.log(mqttmessage);
        let topic = "/User/general";
        this.MQTTServ.sendMesagge(topic, JSON.stringify(a));
        _capacitor_app__WEBPACK_IMPORTED_MODULE_9__.App.exitApp(); //this will close all services
        //this.router.navigate(['/home/']);     
    }
    /**
   * go to general chat
   */
    goChat() {
        /*   this.router.navigate(['/chat/]);        */
        this.bedlocal.setBedId(0);
        this.router.navigate(['/chat/']);
    }
    /**
   *
   * @param topic this will subscribe to a general messaging stack
   */
    listenMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("El usuario es:"+this.localDoctor.userId)
            console.log("escuchando");
            console.log("aqui:" + this.pacientTable.length);
            let topic = "/User/" + this.localDoctor.userId + "/questions/";
            this.pacientTable.forEach(element => {
                //console.log(JSON.stringify(element)) ; 
                topic = "/User/" + this.localDoctor.userId + "/questions/" + element.pacientId;
                console.log("topic: " + topic);
                this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
                    let localMessage = JSON.parse(Message.string);
                    if (Message.toString() == "Error") {
                        this.MQTTServ.MQTTClientLocal.unsubscribe(topic + "#");
                    }
                    //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                    console.log("here doc listening");
                    let receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(localMessage._username, localMessage._content, localMessage._bedId, localMessage._time, localMessage._type);
                    console.log("Recibido por doc");
                    this.messages.push(receivedMessage);
                    this.newMessage = true;
                });
            });
        });
    }
    onChangeText(text) {
        this.textResponse = text;
        //console.log(this.textResponse);
    }
    sendResponseText(id) {
        //console.log((this.pacientTable[id].pacientId));
        let topic = "/User/" + this.localDoctor.userId + "/answers/" + this.pacientTable[id].pacientId;
        console.log(topic);
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.localDoctor.username, this.textResponse, this.pacientTable[id].bedId, "0", 7);
        let mqttmessage = JSON.stringify(a);
        console.log("sending:", mqttmessage);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.messages.splice(id, 1);
    }
    sendAudioText(response, id) {
        let topic = "/User/" + this.localDoctor.userId + "/answers/" + this.pacientTable[id].pacientId;
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.localDoctor.username, response, this.pacientTable[id].bedId, "0", 27);
        let mqttmessage = JSON.stringify(a);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
    }
    upgradingPacientNumber(id) {
        this.pacientNumber = id;
    }
};
DoctorMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_6__.BedsService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
DoctorMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-doctor-main',
        template: _doctor_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_doctor_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoctorMainPage);



/***/ }),

/***/ 5203:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3253:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 5203);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 731)).then(m => new m.AppWeb()),
});




/***/ }),

/***/ 2722:
/*!**************************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  background-color: #4edad3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImRvY3Rvci1tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDIxOCwgMjExKTsgLy8gYmxhY2tcbiAgICBjb2xvcjogcmVkOyAvLyBibGFja1xuICB9Il19 */";

/***/ }),

/***/ 7357:
/*!**************************************************************!*\
  !*** ./src/app/doctor-main/doctor-main.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-title>{{doctorName}}</ion-title>\n      <!-- Back button with a default href -->\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\" >Logout</ion-button>        <!--href=\"home\" -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-card >\n      <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n        <ion-label>Cambiar notas de Pacientes </ion-label>\n      <br>\n      <ion-select interface=\"action-sheet\" #C (ionChange)=\"upgradingPacientNumber(C.value)\" type=\"number\" required>\n        <div *ngFor=\"let element of pacientTable; let i=index\">           \n         \n         <ion-select-option  value=\"{{pacientTable[i].pacientId}}\">{{pacientTable[i].pacientId}}</ion-select-option>                   \n        </div>\n      </ion-select>\n\n      <ion-item>\n        <ion-button (click)=\"onClickPacientNote(pacientNmber)\"> Ir </ion-button>        \n      </ion-item>\n    </ion-card>\n    \n    <ion-card >      \n        <ion-label>Leer Mensajes </ion-label>\n      <br>\n      <ion-item>\n        <ion-button (click)=\"onClickMessages()\"> Aceptar </ion-button>        \n      </ion-item>\n    </ion-card>\n\n  <ion-card >    \n    <div *ngFor=\"let element of messages; let i=index\">\n      \n        <ion-card ion-color=\"terciary\" >      \n          <ion-item>\n          <ion-label>Mensaje de : {{element._username}}</ion-label>\n          </ion-item><ion-item>\n          <ion-label> cama:{{element._bedId}}</ion-label>\n          </ion-item>          \n          <div *ngIf=\"element._type === 7\">\n              <ion-item>\n              <ion-label>{{element._content}}</ion-label>                        \n              </ion-item>\n          </div>      \n          <ion-item>\n          <ion-label position=\"stacked\">Respuesta:</ion-label>\n              <ion-input type=\"text\" #A (ionChange)=\"onChangeText(A.value,i)\"  ></ion-input>\n              <ion-item>\n              <ion-button><ion-icon name=\"mic\" ></ion-icon></ion-button>\n              <ion-button (click)=\"sendResponseText(i)\" ><ion-icon name=\"arrow-forward\" end></ion-icon></ion-button> <!--(click)= \"sendMsg(i)\" -->\n              </ion-item>\n          </ion-item>      \n           <!--(click)= \"sendMsg(i)\" -->\n        </ion-card>\n      \n    </div>\n  </ion-card >    \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-main_doctor-main_module_ts.js.map