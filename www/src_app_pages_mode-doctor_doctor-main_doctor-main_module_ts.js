"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mode-doctor_doctor-main_doctor-main_module_ts"],{

/***/ 8556:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mode-doctor/doctor-main/doctor-main-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMainPageRoutingModule": () => (/* binding */ DoctorMainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _doctor_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main.page */ 9194);




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

/***/ 4351:
/*!*********************************************************************!*\
  !*** ./src/app/pages/mode-doctor/doctor-main/doctor-main.module.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _doctor_main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main-routing.module */ 8556);
/* harmony import */ var _doctor_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-main.page */ 9194);







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

/***/ 9194:
/*!*******************************************************************!*\
  !*** ./src/app/pages/mode-doctor/doctor-main/doctor-main.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorMainPage": () => (/* binding */ DoctorMainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-main.page.html?ngResource */ 4494);
/* harmony import */ var _doctor_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-main.page.scss?ngResource */ 1354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/bed */ 982);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/message-model */ 6397);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! capacitor-voice-recorder */ 8782);













let DoctorMainPage = class DoctorMainPage {
    constructor(router, activatedRoute, localSto, MQTTServ, userServ) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.MQTTServ = MQTTServ;
        this.userServ = userServ;
        this.localDoctor = new _models_user__WEBPACK_IMPORTED_MODULE_4__.User(0, "", "", "", "", 0, "");
        this.bedlocal = new _models_bed__WEBPACK_IMPORTED_MODULE_5__.Bed(0, 0, 0, 0);
        this.newMessage = false;
        this.messages = new Array;
        this.messagesbeds = new Array;
        this.messagesbedsfiltered = new Array;
        this.patientTable = new Array;
        this.textResponse = "";
        this.recording = false;
        this.duration = 0;
        this.patientActivated = false;
        this.viewMode = 0;
        //storedFileNames=[];
        this.bedstates = ["Desocupada", "Ocupada", "Llamando", "Por ser atendida", "Siendo atendida", "Llamada programada", "Solicita Ayuda"];
        //this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
        this.doctorName = "";
        this.newMessage == false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_9__.VoiceRecorder.requestAudioRecordingPermission();
            this.newMessage == false;
            yield this.getParams();
            yield this.getBeds();
            //subscription for audio
            //await this.subscribe();
            //await this.waiting(); 
            yield this.eventsSubscription();
        });
    }
    onClickPatientNote(id) {
        this.router.navigate(['/doctor-patients/' + this.patientNumber]);
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
     * for example
     */
    subscribe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            yield this.MQTTServ.MQTTClientLocal.subscribe("/audio/recording");
        });
    }
    /***
     * getting list of pacients and beds
     */
    getBeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let responseInfoTopic = "/User/" + this.localDoctor.userId + "/Pacients";
            yield this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                else {
                    //console.log(localMessage);
                    localMessage.forEach(element => {
                        this.patientTable.push(element);
                    });
                    //this.patientTable=localMessage;
                    console.log(JSON.stringify(this.patientTable));
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                    // console.log(JSON.stringify(this.pacientTable=localMessage));
                    this.MQTTServ.sendMesagge(responseInfoTopic, "");
                    this.listenMessages();
                }
            });
            // console.log("Doctor logged id:"+this.localDoctor.userId)  
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localDoctor.username, JSON.stringify(this.localDoctor.userId), 0, 9);
            // console.log(a)
            let mqttmessage = JSON.stringify(a);
            // console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
       * Subscription for receiving messages
       * of the status of the beds
       */
    eventsSubscription() {
        let topic = "/Beds/status";
        let receivedMessage;
        console.log("status subscribed");
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on((Message) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //  console.log("received")
            //  console.log(Message.string);            
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            //console.log(localMessage[0].message);    
            this.messagesbeds = [];
            this.messagesbedsfiltered = [];
            if (this.viewMode == 2) {
                yield localMessage.forEach(element => {
                    {
                        this.patientTable.forEach(patientT => {
                            if (element.id == patientT.bedId) {
                                console.log("find");
                                let local = { 'bedId': patientT.bedId, 'pacientId': patientT.pacientId, 'st': element.st };
                                let localj = JSON.parse((JSON.stringify(local)));
                                this.messagesbedsfiltered.push(localj);
                            }
                        });
                    }
                });
            }
        }));
    }
    /**
     * logout
     */
    logout() {
        console.log("logging out");
        console.log("name:" + this.localDoctor.username);
        let question = "logout";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localDoctor.username, question, 0, 2);
        console.log(JSON.stringify(a));
        let mqttmessage = (a).toString();
        // console.log(mqttmessage);
        let topic = "/User/general";
        this.MQTTServ.sendMesagge(topic, JSON.stringify(a));
        //App.exitApp();   //this will close all services
        this.router.navigate(['/home/']);
    }
    /**
   *
   * @param
   */
    listenMessages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("El usuario es:"+this.localDoctor.userId)
            //
            //console.log("aqui:"+this.pacientTable.length)
            let topic = "/User/" + this.localDoctor.userId + "/questions/";
            this.patientTable.forEach(element => {
                //console.log(JSON.stringify(element)) ; 
                topic = "/User/" + this.localDoctor.userId + "/questions/" + element.bedId;
                console.log("topic: " + topic);
                this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
                    let localMessage = JSON.parse(Message.string);
                    if (Message.toString() == "Error") {
                        this.MQTTServ.MQTTClientLocal.unsubscribe(topic + "#");
                    }
                    //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                    console.log("here doc listening");
                    let receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(localMessage._username, localMessage._content, localMessage._bedId, localMessage._type);
                    console.log("Recibido por doc");
                    this.messages.push(receivedMessage);
                    this.newMessage = true;
                    //this.MQTTServ.sendMesagge(topic, " ");  
                });
            });
        });
    }
    onChangeText(text) {
        this.textResponse = text;
        //console.log(this.textResponse);
    }
    sendResponseText(id) {
        //console.log((this.patientTable[id].pacientId));
        let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;
        console.log(topic);
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localDoctor.username, this.textResponse, id, 7);
        let mqttmessage = JSON.stringify(a);
        console.log("sending:", mqttmessage);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.messages.splice(id, 1);
    }
    sendAudioText(response, id) {
        let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localDoctor.username, response, this.patientTable[id].bedId, 27);
        let mqttmessage = JSON.stringify(a);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
    }
    upgradingPatientNumber(id) {
        this.patientNumber = id;
        this.patientActivated = true;
    }
    playFile(fileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const audioFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__.Filesystem.readFile({
                path: 'audios/' + fileName,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_8__.Directory.Documents //Data
            });
            const base64Sound = audioFile.data;
            const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
            audioRef.oncanplaythrough = () => audioRef.play();
            audioRef.load();
        });
    }
    playString(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const base64Sound = data;
            const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
            audioRef.oncanplaythrough = () => audioRef.play();
            audioRef.load();
        });
    }
    /**
     * recording audio
     */
    startRecording() {
        console.log("startin recording");
        if (this.recording) {
            return;
        }
        this.recording = true;
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_9__.VoiceRecorder.startRecording();
        this.calculateDuration();
    }
    calculateDuration() {
        if (!this.recording) {
            this.duration = 0;
            return;
        }
        this.duration += 1;
        setTimeout(() => {
            this.calculateDuration();
        }, 1000);
    }
    stopRecording(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log("stopping recording");
            let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;
            this.recording = false;
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_9__.VoiceRecorder.stopRecording().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                if (result.value && result.value.recordDataBase64) {
                    console.log("sending recording");
                    const recorData = result.value.recordDataBase64;
                    let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localDoctor.username, result.value.recordDataBase64, this.patientTable[id].bedId, 22);
                    let mqttmessage = JSON.stringify(a);
                    yield this.MQTTServ.sendMesagge(topic, mqttmessage);
                    console.log("recording sent");
                }
                ;
            }));
        });
    }
    enablingPatientMonitoring() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.viewMode = 2;
        });
    }
    enablingNotes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.viewMode = 1;
        });
    }
    enablingListen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.viewMode = 3;
        });
    }
    deleteMsg(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.messages.splice(id, 1);
            //console.log("mensajes:"+this.messages.length);
            if (this.messages.length < 1) {
                console.log("no hay mensajes para responder");
                this.newMessage = false;
            }
        });
    }
};
DoctorMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__.MqttService },
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

/***/ 1354:
/*!********************************************************************************!*\
  !*** ./src/app/pages/mode-doctor/doctor-main/doctor-main.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  background-color: #4edad3;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6ImRvY3Rvci1tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzgsIDIxOCwgMjExKTsgLy8gYmxhY2tcbiAgICBjb2xvcjogcmVkOyAvLyBibGFja1xuICB9Il19 */";

/***/ }),

/***/ 4494:
/*!********************************************************************************!*\
  !*** ./src/app/pages/mode-doctor/doctor-main/doctor-main.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n        <ion-title>{{doctorName}}</ion-title>\n      <!-- Back button with a default href -->\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\" >Cerrar Sesión</ion-button>        <!--href=\"home\" -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-button style=\"width: 33%;\" (click)=\"enablingNotes()\" >Notas</ion-button>\n    <ion-button style=\"width: 33%;\" (click)=\"enablingPatientMonitoring()\">Pacientes</ion-button>\n    <ion-button style=\"width: 33%;\" (click)=\"enablingListen()\">Msjs</ion-button><!--(click)=\"enablingPatientMonitoring()\"-->\n  </ion-item>\n    <div *ngIf=\"newMessage == true\">\n      <ion-item>\n      <ion-button (click)=\"enablingListen()\">\n        <ion-icon ion-color=\"danger\" name=\"mail-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n      </ion-item>\n    </div>\n    \n  \n    <div *ngIf=\"viewMode==1\">\n      <ion-card >\n        <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n          <ion-label>Seleccionar numero paciente  </ion-label>\n        <br>\n        <ion-select interface=\"action-sheet\" #C (ionChange)=\"upgradingPatientNumber(C.value)\" type=\"number\" required>\n          <div *ngFor=\"let element of pacientTable; let i=index\">           \n          \n          <ion-select-option  value=\"{{pacientTable[i].pacientId}}\">{{pacientTable[i].pacientId}}</ion-select-option>                   \n          </div>\n        </ion-select>\n\n        <ion-item>\n          <div *ngIf=\"patientActivated==true\">\n            <ion-button (click)=\"onClickPatientNote(patientNumber)\"> Ir </ion-button>        \n          </div>\n        </ion-item>\n      </ion-card>\n    </div>\n    <div *ngIf=\"viewMode==2\">\n      <p>viendo llamados de los pacientes asignados</p>\n      <div *ngFor=\"let element of messagesbedsfiltered; let i=index\">\n        <!--{{element|json}}-->\n          <div *ngIf=\"element.st==1\">\n            <ion-card style=\"background-color: cyan;\">\n              <ion-card-content>\n                <ion-label>\n                  cama:{{element.bedId}} paciente:{{element.patientId}} estado:{{bedstates[element.st]}}\n                </ion-label>\n              </ion-card-content> \n            </ion-card>\n          </div>\n          <div *ngIf=\"element.st==2\">\n              <ion-card style=\"background-color: orange;\">\n                <ion-card-content>\n                  <ion-label>\n                    cama:{{element.bedId}} paciente:{{element.patientId}} estado:{{bedstates[element.st]}}\n                  </ion-label>\n                </ion-card-content> \n              </ion-card>            \n          </div>\n          <div *ngIf=\"element.st>2\">\n            <ion-card style=\"background-color: violet;\">\n              <ion-card-content>\n                <ion-label>\n                  cama:{{element.bedId}} paciente:{{element.patientId}} estado:{{bedstates[element.st]}}\n                </ion-label>\n              </ion-card-content> \n            </ion-card>            \n        </div>\n      </div>\n\n    </div>\n\n  <div *ngIf=\"viewMode==3\">  \n    <ion-card >    \n      <div *ngFor=\"let element of messages; let i=index\">\n\n          <ion-card ion-color=\"terciary\" >      \n            <ion-item>\n            <ion-label>Mensaje de : {{element._username}}</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label> cama:{{element._bedId}}</ion-label>\n              <ion-button (click)=\"deleteMsg(i)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-button>   \n            </ion-item>          \n            <div *ngIf=\"element._type === 7\">\n                <ion-item>\n                <ion-label>{{element._content}}</ion-label>                        \n                </ion-item>\n                               \n            </div>      \n            <div *ngIf=\"element._type != 7\">\n              <ion-item>\n              <ion-label>Audio</ion-label>      \n                <ion-button (click)=\"playString(element._content)\">\n                  <ion-icon name=\"play\" slot=\"icon-only\"></ion-icon>\n                </ion-button>                  \n              </ion-item>\n            </div>            \n            \n            <ion-item>\n            <ion-label position=\"stacked\">Respuesta:</ion-label>\n                <ion-textarea #A (ionChange)=\"onChangeText(A.value,i)\"  ></ion-textarea>\n                <ion-item>              \n                <ion-button (click)=\"sendResponseText(element._bedId)\" ><ion-icon name=\"arrow-forward\" end></ion-icon></ion-button> <!--(click)= \"sendMsg(i)\" -->\n                </ion-item>\n            </ion-item>   \n            <ion-item><ion-label>Responder Audio</ion-label></ion-item>\n            <ion-item>\n              <ion-button (click)=\"startRecording()\"><ion-icon name=\"mic\" ></ion-icon></ion-button>          \n              <div *ngIf=\"recording==true\">\n              <ion-button (click)=\"stopRecording(element._bedId)\" >\n                <ion-icon name=\"stop\" slot=\"icon-only\"></ion-icon>\n              </ion-button>                  \n\n            </div>\n            </ion-item>   \n            \n          </ion-card>\n        \n      </div>\n    </ion-card >    \n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mode-doctor_doctor-main_doctor-main_module_ts.js.map