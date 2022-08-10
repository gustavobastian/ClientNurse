"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nurse-main_nurse-main_module_ts"],{

/***/ 4377:
/*!****************************************!*\
  !*** ./src/app/models/MedicalTable.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicalTable": () => (/* binding */ MedicalTable)
/* harmony export */ });
class MedicalTable {
    constructor(username, userID) {
        this._username = username;
        this._userID = userID;
    }
    get username() {
        return this._username;
    }
    get userID() {
        return this._userID;
    }
    set username(username) {
        this._username = username;
    }
    set userID(userID) {
        this._userID = userID;
    }
}


/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page.html?ngResource */ 2489);
/* harmony import */ var _nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page.scss?ngResource */ 6181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pacient.service */ 2220);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ 5);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _models_pacient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/pacient */ 7377);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _models_MedicalTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/MedicalTable */ 4377);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mozartec/capacitor-microphone */ 9528);

















let NurseMainPage = class NurseMainPage {
    constructor(activatedRoute, localSto, pacientServ, MQTTServ, userlogged, bedlocal, router, platform) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.MQTTServ = MQTTServ;
        this.userlogged = userlogged;
        this.bedlocal = bedlocal;
        this.router = router;
        this.platform = platform;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_9__.User(0, "", "", "", "", 0, "");
        this.bedId = 0;
        this.nurseName = " ";
        this.nurseId = 0;
        this.notes = new Array;
        this.msg = new Array;
        this.msgRx = new Array;
        this.textToSend = new Array;
        this.RxText = new Array;
        this.MDT = new Array;
        this.showNotes = false;
        this.pacientLocal = new _models_pacient__WEBPACK_IMPORTED_MODULE_7__.Pacient(0, "Gus", "Bas", 0, 0, 0);
        this.QRCapture = false;
        this.inRoom = false;
        this.asking = false;
        this.actionFinished = false;
        this.recordingAudio = false;
        this.canRecord = false;
        this.messages = new Array;
        this.webPaths = [];
        this.dataUrls = [];
        this.bedId = bedlocal.getBedId();
        this.actionFinished = false;
        this.recordingAudio = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.getParams();
            this.eventsSubscription(); //getting status of the bed
            //permissions for recording
            yield this.platform.ready().then(() => {
                if (this.platform.is('android')) {
                    console.log('android');
                }
                else if (this.platform.is('ios')) {
                    console.log('ios');
                }
                else {
                    //fallback to browser APIs or
                    console.log('The platform is not supported');
                }
            });
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.canRecord = true;
                console.log("puedo capturar");
                console.log("check permisions on android");
                const state = yield this.checkPermissions();
                if ((state) == true) {
                    console.log(" permisos correctos");
                    return;
                }
                else {
                    alert("Permission denied");
                }
            }
            else {
                this.canRecord = false;
                console.log("no puedo capturar");
            }
        });
    }
    /**
     * Get the pacient information
     */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = this.userlogged.getUser();
            this.nurseName = this.localNurse.username;
            let responseNoteTopic = "/Beds/" + this.bedId + "/Pacient";
            //cleaning
            this.MDT = [];
            this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                //console.log("SystemResponse:  "+Message.toString());
                let localMessage = JSON.parse(Message.string);
                let pacient1 = JSON.parse(JSON.stringify(localMessage[0]));
                //console.log("pacientId:"+ pacient1.pacientId);
                this.pacientLocal.id = pacient1.pacientId;
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                }
                //console.log("Pacient received")
            });
            /*asking for pacient's doctors */
            console.log("MDT bedId:" + this.bedId);
            let responseMDTTopic = "/Beds/" + this.bedId + "/MDT";
            this.MQTTServ.MQTTClientLocal.subscribe(responseMDTTopic).on(Message => {
                //console.log("SystemResponse:  "+Message.toString());
                let localMessage2 = JSON.parse(Message.string);
                let MDTLocal = JSON.parse(JSON.stringify(localMessage2));
                console.log("MDT:" + JSON.stringify(MDTLocal));
                if (Message.toString() == "Error") {
                    this.MDT = [];
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseMDTTopic);
                }
                else {
                    MDTLocal.forEach(element => {
                        console.log(JSON.stringify(element));
                        let MDTLocal2 = new _models_MedicalTable__WEBPACK_IMPORTED_MODULE_11__.MedicalTable(element.lastname, element.userId);
                        this.MDT.push(MDTLocal2);
                        this.msg.push(0);
                        this.msgRx.push(0);
                        this.textToSend.push("");
                        this.RxText.push("");
                    });
                }
                console.log("mdt received");
            });
            let topic = "/User/general";
            let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.bedId), this.bedId, "0", 10);
            let mqttmessage = JSON.stringify(b);
            let c = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.bedId), this.bedId, "0", 17);
            let mqttmessage2 = JSON.stringify(c);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage2);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.MQTTServ.MQTTClientLocal.unsubscribe(responseMDTTopic);
            this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
        });
    }
    /**
     * Subscription for receiving messages
     * of the status of the beds
     */
    eventsSubscription() {
        let topic = "/Beds/status";
        let receivedMessage;
        console.log("subscribed");
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            console.log("received");
            //console.log(Message.string);            
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            console.log(localMessage[0].message);
            this.messages = [];
            localMessage.forEach(element => {
                {
                    receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel("", "", element.id, "", element.st);
                    console.log("element id:" + element.id + "| element st:" + element.st);
                    //console.log("here Id:"+this.bedlocal.getBedId())          ;
                    if (parseInt(element.id) == (this.bedId)) {
                        console.log("Here");
                        if (element.st == 4) {
                            this.inRoom = true;
                        }
                        else {
                            this.inRoom = false;
                        }
                    }
                }
            });
            //check status of this bed;
        });
    }
    /**
     * Get the pacient Notes
     */
    onClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
    /**
     * Got to pacient char for asking aditional information
     */
    goChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            /*   this.router.navigate(['/chat/]);        */
            /*
              let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",14);
             console.log(a)
             let mqttmessage=JSON.stringify(a);
             console.log(mqttmessage);
             let topic="/User/general";
             await this.MQTTServ.sendMesagge(topic, mqttmessage);
           
             this.router.navigate(['/chat/']);        */
            console.log(JSON.stringify(this.MDT));
        });
    }
    /**
     * Got to QR capture page
     */
    goQR() {
        /*   this.router.navigate(['/chat/]);        */
        this.router.navigate(['/nurse-qr']);
    }
    /**
    * Ending notification
    */
    goEnd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            /*   this.router.navigate(['/chat/]);        */
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.pacientLocal.id), this.bedId, "0", 13);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.router.navigate(['/waiting-event/']);
            this.inRoom = false;
            this.actionFinished = true;
        });
    }
    /**
     * Sending the question to the system : command type 17
     */
    askToDoctor(question, doctorId) {
        //this.bedIdSubscription();
        var time = new Date();
        //let value2= (time.getHours()).toString+":"+ (time.getMinutes()).toString();
        let value = time.getFullYear() + "/" + time.getMonth() + "/" + time.getDay() + "-" + (time.getHours()) + ":" + (time.getMinutes()) + ":" + time.getSeconds();
        ;
        //console.log(value);
        //let value="12:24";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localNurse.username, question, this.bedId, value, 7);
        let mqttmessage = JSON.stringify(a);
        let topic = "/User/" + doctorId + "/questions/" + this.pacientLocal.pacientId;
        this.MQTTServ.sendMesagge(topic, mqttmessage);
    }
    //opening closing msg dialog
    openMsg(i) {
        this.msg[i] = 1;
    }
    closeMsg(i) {
        this.msg[i] = 0;
    }
    // sending msg dialog
    sendMsg(i) {
        console.log("sending to:" + this.MDT[i].userID);
        console.log("MSG send:" + this.textToSend[i]);
        this.bedIdSubscription(i);
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localNurse.username, this.textToSend[i], this.bedId, "0", 7);
        let mqttmessage = JSON.stringify(a);
        let topic = "/User/" + this.MDT[i].userID + "/questions/" + this.bedId;
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        // this.msg[i]=0;
    }
    updatingText(i, s) {
        this.textToSend[i] = s;
        //   console.log("MSG new:"+this.textToSend[i])
    }
    /**
     * Subscription for receiving messages
     */
    bedIdSubscription(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let topic = "/User/" + this.MDT[i].userID + "/answers/" + this.bedId;
            this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
                //console.log("recibido:"+JSON.stringify(Message.string))  
                let localMessage = JSON.stringify(Message.string);
                let parsedMessage = JSON.parse(Message.string);
                console.log("recibido1:" + JSON.stringify(parsedMessage._content));
                console.log("recibido:" + parsedMessage._content);
                this.RxText[i] = (parsedMessage._content);
                this.msgRx[i] = 1;
            });
        });
    }
    recordingAudioStart(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            if (this.recordingAudio == true) {
                return;
            }
            this.recordingAudio = true;
            if (this.canRecord) {
                this.startRecording();
            }
        });
    }
    recordingAudioStop(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.recordingAudio = false;
            this.stopRecording();
        });
    }
    checkPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const checkPermissionsResult = yield _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__.Microphone.checkPermissions();
                console.log('checkPermissionsResult: ' + JSON.stringify(checkPermissionsResult));
                return true;
            }
            catch (error) {
                console.error('checkPermissions Error: ' + JSON.stringify(error));
            }
        });
    }
    requestPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const requestPermissionsResult = yield _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__.Microphone.requestPermissions();
                console.log('requestPermissionsResult: ' + JSON.stringify(requestPermissionsResult));
            }
            catch (error) {
                console.error('requestPermissions Error: ' + JSON.stringify(error));
            }
        });
    }
    startRecording() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const startRecordingResult = yield _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__.Microphone.startRecording();
                console.log('startRecordingResult: ' + JSON.stringify(startRecordingResult));
            }
            catch (error) {
                console.error('startRecordingResult Error: ' + JSON.stringify(error));
            }
        });
    }
    stopRecording() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.recording = yield _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__.Microphone.stopRecording();
                console.log('recording: ' + JSON.stringify(this.recording));
                console.log('recording.dataUrl: ' + JSON.stringify(this.recording.dataUrl));
                console.log('recording.duration: ' + JSON.stringify(this.recording.duration));
                console.log('recording.format: ' + JSON.stringify(this.recording.format));
                console.log('recording.mimeType: ' + JSON.stringify(this.recording.mimeType));
                console.log('recording.path: ' + JSON.stringify(this.recording.path));
                console.log('recording.webPath: ' + JSON.stringify(this.recording.webPath));
                this.webPaths.push(this.recording.webPath);
                this.dataUrls.push(this.recording.dataUrl);
            }
            catch (error) {
                console.error('recordingResult Error: ' + JSON.stringify(error));
            }
        });
    }
};
NurseMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__.PacientService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_10__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform }
];
NurseMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-nurse-main',
        template: _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NurseMainPage);



/***/ }),

/***/ 3553:
/*!*****************************************************************************!*\
  !*** ./node_modules/@mozartec/capacitor-microphone/dist/esm/definitions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicrophonePermissionStateValue": () => (/* binding */ MicrophonePermissionStateValue)
/* harmony export */ });
var MicrophonePermissionStateValue;
(function (MicrophonePermissionStateValue) {
    MicrophonePermissionStateValue["prompt"] = "prompt";
    MicrophonePermissionStateValue["promptWithRationale"] = "prompt-with-rationale";
    MicrophonePermissionStateValue["granted"] = "granted";
    MicrophonePermissionStateValue["denied"] = "denied";
    MicrophonePermissionStateValue["limited"] = "limited";
})(MicrophonePermissionStateValue || (MicrophonePermissionStateValue = {}));


/***/ }),

/***/ 9528:
/*!***********************************************************************!*\
  !*** ./node_modules/@mozartec/capacitor-microphone/dist/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Microphone": () => (/* binding */ Microphone),
/* harmony export */   "MicrophonePermissionStateValue": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.MicrophonePermissionStateValue)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3553);

const Microphone = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Microphone', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_mozartec_capacitor-microphone_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9362)).then(m => new m.MicrophoneWeb()),
});




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

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-item>\n    <ion-title>Enfermera:{{nurseName}}</ion-title>\n  </ion-item>\n  <ion-item>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"actionFinished==true\">\n      <ion-back-button  defaultHref=\"\" [text]=\"\"></ion-back-button>        \n      </div>\n    </ion-buttons>\n    <ion-title>Cama:{{bedId}}</ion-title>\n  </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n   <div *ngIf=\"inRoom===false\">   \n   <ion-button (click)=\"goQR()\">QR </ion-button> \n   </div>\n   <div *ngIf=\"inRoom===true\">\n<!--******************************************************Now in room options*****************************************************************************-->\n<ion-item>\n   <!--  <ion-button (click)=\"goChat()\">Chat </ion-button> -->\n     <ion-button (click)=\"goEnd()\">Listo </ion-button> \n</ion-item>     \n<!--******************************************Asking doctor **********************************************************************************************-->  \n<ion-item>\n    <ion-label>Lista de Médicos:</ion-label>\n    </ion-item>\n\n  \n  <div *ngFor=\"let item of MDT; let i = index\">\n    \n      <ion-card>\n        <ion-item >\n        <ion-label>{{item.userID}}:{{item.username}}</ion-label>           \n        <ion-icon name=\"arrow-down\" (click)= \"openMsg(i)\" end></ion-icon>\n        </ion-item>\n        <div *ngIf=\"msg[i]===1\">\n        <ion-item >\n          <ion-label position=\"stacked\">Mensaje:</ion-label>\n          <ion-input #A (ionChange)=\"updatingText(i,A.value)\" type=\"text\"></ion-input>\n\n        </ion-item>\n         <ion-item >\n         <ion-icon name=\"mic\" (click)= \"recordingAudioStart(i)\" begin></ion-icon>\n         <div *ngIf=\"recordingAudio==true\">\n          <ion-icon name=\"log-out\" (click)= \"recordingAudioStop(i)\" begin></ion-icon>\n         </div>\n\n\n         <ion-icon name=\"arrow-up\" (click)= \"closeMsg(i)\" middle></ion-icon>\n         <ion-icon name=\"arrow-forward\"  (click)= \"sendMsg(i)\" end></ion-icon>\n        </ion-item>\n        <!--- if there is a response from doctor show-->\n            <div *ngIf=\"msgRx[i]==1\">\n            <ion-item >\n              <ion-label position=\"stacked\">Respuesta:</ion-label>\n              <p>{{item.username}}:{{RxText}}</p>\n              <ion-icon name=\"play\" end></ion-icon> <!--(click)= \"sendMsg(i)\" -->\n            </ion-item>\n            </div>\n        </div>\n      </ion-card>  \n          \n  </div>\n \n\n\n</div>  \n</ion-item>\n  \n        <div *ngIf=\"showNotes==false\">\n          <ion-item>\n          <ion-button (click)=\"onClick()\">Consultar notas de Paciente</ion-button> \n          </ion-item>\n        </div>  \n  </ion-card>\n\n\n<!--******************************************Showing notes **********************************************************************************************-->\n  <div *ngIf=\"showNotes==true\">\n    <ion-card class=\"PacientDataCard\">\n    <!--Informacion del paciente-->\n      <ion-item>Apellido: {{pacientLocal.lastName}}</ion-item>\n      <ion-item>Nombre: {{pacientLocal.firstName}}</ion-item>\n      <ion-item>Id Paciente: {{pacientLocal.id}}</ion-item>\n      \n\n    </ion-card>\n\n    \n    <!--Notas del paciente : limite 2-->\n    <div *ngFor=\"let Note of notes; let i=index\">\n      <ion-card>\n        <!--Informacion del paciente-->\n          <ion-item>ID nota: {{notes[i].noteId}}</ion-item>\n          <ion-item>Nota:{{notes[i].note}}</ion-item>\n        <!--  <ion-item>Estado:{{notes[i].state}}</ion-item>        -->\n        \n       </ion-card>\n\n    </div>\n  </div>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nurse-main_nurse-main_module_ts.js.map