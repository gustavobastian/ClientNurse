"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mode-nurse_nurse-main_nurse-main_module_ts"],{

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

/***/ 9449:
/*!**************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-main/nurse-main-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseMainPageRoutingModule": () => (/* binding */ NurseMainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page */ 4180);




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

/***/ 5136:
/*!******************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-main/nurse-main.module.ts ***!
  \******************************************************************/
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
/* harmony import */ var _nurse_main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main-routing.module */ 9449);
/* harmony import */ var _nurse_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page */ 4180);







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

/***/ 4180:
/*!****************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-main/nurse-main.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseMainPage": () => (/* binding */ NurseMainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-main.page.html?ngResource */ 4445);
/* harmony import */ var _nurse_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-main.page.scss?ngResource */ 3117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pacient.service */ 2220);
/* harmony import */ var src_app_models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/note */ 5);
/* harmony import */ var src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/message-model */ 6397);
/* harmony import */ var src_app_models_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/patient */ 2709);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/beds.service */ 3082);
/* harmony import */ var src_app_models_MedicalTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/models/MedicalTable */ 4377);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mozartec_capacitor_microphone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mozartec/capacitor-microphone */ 9528);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! capacitor-voice-recorder */ 8782);



















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
        this.notes = new Array;
        this.msg = new Array;
        this.msgRx = new Array;
        this.audio = new Array;
        this.textToSend = new Array;
        this.RxText = new Array;
        this.RxType = new Array;
        this.MDT = new Array;
        this.nurseSpecs = new Array;
        this.Memoria = " ";
        this.calendarNote = " ";
        this.patientLocal = new src_app_models_patient__WEBPACK_IMPORTED_MODULE_7__.Patient(0, "Gus", "Bas", 0, 0, 0);
        this.inRoom = false;
        this.showNotes = false;
        this.showMedical = false;
        this.showMemoria = false;
        this.asking = false;
        this.actionFinished = false;
        this.recordingAudio = false;
        this.recording = false;
        this.canRecord = false;
        this.duration = 0;
        this.textQR = "";
        this.platformLocal = "none";
        this.manualQR = false;
        this.writeText = false;
        this.messages = new Array;
        this.bedId = bedlocal.getBedId();
        this.actionFinished = false;
        this.recordingAudio = false;
        this.calendarNote = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getParams();
            console.log("patientID onInit:" + this.patientLocal.id);
            this.manualQR = false;
            yield this.eventsSubscription(); //getting status of the bed
            this.writeText = false;
            yield this.getCalendarNote();
            //permissions for recording
            yield this.platform.ready().then(() => {
                if (this.platform.is('android')) {
                    console.log('android');
                    this.platformLocal = "android";
                }
                else if (this.platform.is('ios')) {
                    console.log('ios');
                    this.platformLocal = "ios";
                }
                else {
                    //fallback to browser APIs or
                    console.log('The platform is not supported');
                    this.platformLocal = "none";
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
                    //alert("Permission denied");
                    this.platformLocal = "none";
                }
            }
            else {
                this.canRecord = false;
                //console.log("no puedo capturar")
                this.platformLocal = "none";
            }
            console.log(this.platformLocal);
        });
    }
    /**
     * Get the patient id
     */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = this.userlogged.getUser();
            this.nurseName = this.localNurse.username;
            let responseInfoTopic = "/Beds/" + this.bedId + "/Pacient";
            console.log("asking on patient info:  " + responseInfoTopic.toString());
            //cleaning
            this.MDT = [];
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                console.log("SystemResponse on patient info:  " + Message.toString());
                let localMessage = JSON.parse(Message.string);
                let patient1 = JSON.parse(JSON.stringify(localMessage[0]));
                //console.log("patientId:"+ patient1.pacientId);
                this.patientLocal.id = patient1.pacientId;
                console.log(JSON.stringify(this.patientLocal));
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                console.log("Patient received");
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let topic = "/User/general";
            let b = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.bedId), this.bedId, 10);
            let mqttmessage = JSON.stringify(b);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * getting patient information
     */
    getPatientInformation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Patient:" + this.patientLocal.id);
            let responseInfoTopic = "/Pacient/" + this.patientLocal.id + "/info";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                this.patientLocal.lastName = localMessage[0].lastName;
                this.patientLocal.firstName = localMessage[0].firstName;
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.patientLocal.id), 0, 4);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * getting Calendar event notes
     */
    getCalendarNote() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Patient:" + this.patientLocal.id);
            let responseInfoTopic = "/Beds/" + this.bedId + "/CalendarNote";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                this.calendarNote = Message.toString();
                console.log("Nota Calendario:" + Message.toString());
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.patientLocal.id), this.bedId, 20);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * getting medical table
     */
    getMedicalTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = this.userlogged.getUser();
            this.nurseName = this.localNurse.username;
            let responseNoteTopic = "/Beds/" + this.bedId + "/info";
            //cleaning
            this.MDT = [];
            /*asking for patient's doctors */
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
                        console.log("************************");
                        console.log(JSON.stringify(element));
                        let MDTLocal2 = new src_app_models_MedicalTable__WEBPACK_IMPORTED_MODULE_11__.MedicalTable(element.lastname, element.userId);
                        console.log(JSON.stringify(MDTLocal2));
                        this.MDT.push(MDTLocal2);
                        this.msg.push(0);
                        this.msgRx.push(0);
                        this.RxType.push(0);
                        this.textToSend.push("");
                        this.RxText.push("");
                    });
                }
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                console.log("mdt received");
            });
            let topic = "/User/general";
            let c = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.bedId), this.bedId, 17);
            let mqttmessage2 = JSON.stringify(c);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage2);
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
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            console.log(localMessage[0].message);
            this.messages = [];
            localMessage.forEach(element => {
                {
                    receivedMessage = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel("", "", element.id, element.st);
                    console.log("element id:" + element.id + "| element st:" + element.st);
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
     * Unsubscribe from events
     */
    eventsUnsubscription() {
        let topic = "/Beds/status";
        this.MQTTServ.MQTTClientLocal.unsubscribe(topic);
        console.log("unsubscribed to bed events");
    }
    /**
     * Get the pacient Notes
     */
    getNotes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let local = this.bedId;
            this.notes.splice(0);
            console.log("***********************************************************");
            console.log("***********gettin notes****************************");
            console.log("patientID:" + this.patientLocal.id);
            let responseNoteTopic = "/Pacient/" + this.patientLocal.id + "/notes";
            yield this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                console.log("respuestaSystem:  " + Message.toString());
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                }
                console.log("recibo nota");
                //let localMessage = JSON.parse(Message[0].string);      
                let localMessage = JSON.parse(Message.string);
                let note1 = JSON.parse(JSON.stringify(localMessage[0]));
                let note2 = JSON.parse(JSON.stringify(localMessage[1]));
                let notaLocal1 = new src_app_models_note__WEBPACK_IMPORTED_MODULE_5__.Note(note1.notesId, note1.note, note1.state);
                let notaLocal2 = new src_app_models_note__WEBPACK_IMPORTED_MODULE_5__.Note(note2.notesId, note2.note, note2.state);
                this.notes.push(notaLocal1);
                this.notes.push(notaLocal2);
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
            });
            let topic = "/User/general";
            let b = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.patientLocal.id), 0, 5);
            let mqttmessage = JSON.stringify(b);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * Got to pacient char for asking aditional information
     */
    goChat(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/chat/']);
            /*   this.router.navigate(['/chat/]);        */
            /*
              let a=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),  this.bedId, "0",14);
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
        this.router.navigate(['/nurse-qr/{{this.bedId}}']);
    }
    /**
    * Got to Cancelling the response to call
    */
    Quit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.patientLocal.id), this.bedId, 19);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.router.navigate(['/waiting-event/']);
            this.inRoom = false;
            this.actionFinished = true;
            console.log("quitting");
        });
    }
    /**
    * Ending notification
    */
    goEnd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            /*   this.router.navigate(['/chat/]);        */
            let data = { "Memoria": this.Memoria };
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(data), this.bedId, 13);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            yield this.eventsSubscription();
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
        var time = new Date();
        //let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
        let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localNurse.username, question, this.bedId, 7);
        let mqttmessage = JSON.stringify(a);
        let topic = "/User/" + doctorId + "/questions/" + this.patientLocal.pacientId;
        this.MQTTServ.sendMesagge(topic, mqttmessage);
    }
    //opening closing msg dialog
    openMsg(i) {
        this.msg[i] = 1;
    }
    closeMsg(i) {
        this.msg[i] = 0;
    }
    //opening closing Audio dialog
    openAudio(i) {
        this.audio[i] = 1;
    }
    closeAudio(i) {
        this.audio[i] = 0;
    }
    // sending msg dialog
    sendMsg(i) {
        console.log("sending to:" + this.MDT[i].userID);
        console.log("MSG send:" + this.textToSend[i]);
        this.bedIdSubscription(i);
        let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localNurse.username, this.textToSend[i], this.bedId, 7);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let topic = "/User/" + this.MDT[i].userID + "/answers/" + this.bedId;
            console.log(topic);
            this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
                //console.log("recibido:"+JSON.stringify(Message.string))  
                let localMessage = JSON.stringify(Message.string);
                let parsedMessage = JSON.parse(Message.string);
                console.log("recibido1:" + JSON.stringify(parsedMessage._content));
                console.log("recibido:" + parsedMessage._content);
                console.log("recibido Tipo:" + parsedMessage._type);
                this.RxText[i] = (parsedMessage._content);
                if (parsedMessage._type == 7)
                    this.RxType[i] = 1;
                else
                    this.RxType[i] = 2;
                this.msgRx[i] = 1;
            });
        });
    }
    recordingAudioStart(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.recordingAudio == true) {
                return;
            }
            this.recordingAudio = true;
            // if(this.canRecord){
            this.startRecording();
            //}
        });
    }
    recordingAudioStop(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.recordingAudio = false;
            this.stopRecording(i);
        });
    }
    checkPermissions() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.duration = 0;
                const startRecordingResult = " ";
                if (this.recording) {
                    return;
                }
                this.recording = true;
                capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_14__.VoiceRecorder.startRecording();
                this.calculateDuration();
                console.log('startRecordingResult: ' + JSON.stringify(startRecordingResult));
            }
            catch (error) {
                console.error('startRecordingResult Error: ' + JSON.stringify(error));
            }
        });
    }
    stopRecording(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.bedIdSubscription(i);
            try {
                let recordedMessage = "";
                this.recording = false;
                capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_14__.VoiceRecorder.stopRecording().then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                    if (result.value && result.value.recordDataBase64) {
                        recordedMessage = result.value.recordDataBase64;
                        let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.localNurse.username, (recordedMessage), this.bedId, 22);
                        let mqttmessage = JSON.stringify(a);
                        let topic = "/User/" + this.MDT[i].userID + "/questions/" + this.bedId;
                        this.MQTTServ.sendMesagge(topic, mqttmessage);
                    }
                    ;
                }));
                console.log("*************************************************************************************************************");
            }
            catch (error) {
                console.error('recordingResult Error: ' + JSON.stringify(error));
            }
        });
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
    readFilePath(PATH) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // Here's an example of reading a file with a full file path. Use this to
            // read binary data (base64 encoded) from plugins that return File URIs, such as
            // the Camera.
            const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_13__.Filesystem.readFile({
                path: PATH
            });
            console.log('data:', contents);
            return contents.toString();
        });
    }
    ;
    openMedicalTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            if (this.MDT.length == 0) {
                yield this.getMedicalTable();
            }
            this.showNotes = false;
            this.showMedical = true;
            this.showMemoria = false;
        });
    }
    openNotesTable() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getPatientInformation();
            if (this.notes.length == 0) {
                yield this.getNotes();
            }
            this.showNotes = true;
            this.showMedical = false;
            this.showMemoria = false;
        });
    }
    openMemoria() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getPatientInformation();
            if (this.notes.length == 0) {
                yield this.getNotes();
            }
            this.showNotes = false;
            this.showMedical = false;
            this.showMemoria = true;
        });
    }
    /**
     * Functions that play a string in system
     *
     */
    playString(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const base64Sound = data;
            const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
            audioRef.oncanplaythrough = () => audioRef.play();
            audioRef.load();
        });
    }
    /**
     * enabling manualQr
     */
    toggleManualQR() {
        if (this.manualQR == false) {
            this.manualQR = true;
        }
        else {
            this.manualQR = false;
        }
    }
    //sending qr information for system notification
    sendQr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log("QR:" + this.textQR);
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, JSON.stringify(this.textQR), this.bedId, 11);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/Beds/" + this.bedId + "/QR";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    updatingTextQR(i) {
        this.textQR = i;
    }
    Help() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            yield this.eventsUnsubscription();
            let a = new src_app_models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.nurseName, " ", this.bedId, 14);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            console.log("asking for help");
            return;
        });
    }
    writeToggle(text) {
        if (this.writeText == false) {
            this.writeText = true;
        }
        else {
            this.writeText = false;
        }
    }
};
NurseMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__.PacientService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_10__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform }
];
NurseMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
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

/***/ 3117:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-main/nurse-main.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51cnNlLW1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUUsa0NBQUE7QUFFRiIsImZpbGUiOiJudXJzZS1tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9Il19 */";

/***/ }),

/***/ 4445:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-main/nurse-main.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-item>\n    <ion-title>Enfermera:{{nurseName}}</ion-title>\n  </ion-item>\n  <ion-item>\n    <ion-buttons slot=\"start\">\n      <div *ngIf=\"actionFinished==true\">\n      <ion-back-button  defaultHref=\"\" text=\"Volver\"></ion-back-button>        \n      </div>\n    </ion-buttons>\n    <ion-title>Cama:{{bedId}}</ion-title>\n  </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n   <div *ngIf=\"inRoom===false\">   \n        \n        <ion-button (click)=\"goQR()\">QR </ion-button> \n        <ion-button (click)=\"toggleManualQR()\">Manual QR </ion-button> \n        \n        <ion-button (click)=\"Quit()\">Cancelar </ion-button> \n        \n        <div *ngIf=\"manualQR==true\">\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"EjemploQR\" #Q (ionChange)=\"updatingTextQR(Q.value)\"></ion-input>\n            <ion-button (click)=\"sendQr()\">enviar </ion-button> \n          </ion-item>\n        </div>\n\n   </div>\n   <div *ngIf=\"inRoom===true\">\n<!--******************************************************Now in room options*****************************************************************************-->\n<ion-item>\n   <!--  <ion-button (click)=\"goChat()\">Chat </ion-button> -->\n   <ion-button (click)=\"Quit()\">Cancelar </ion-button> \n   <ion-button (click)=\"goEnd()\">Listo </ion-button> \n   <ion-button (click)=\"openNotesTable()\">Notas</ion-button>\n   \n</ion-item>     \n<ion-item>\n  <ion-button (click)=\"openMedicalTable()\" >Mensajes</ion-button>\n  <ion-button (click)=\"Help()\">Ayuda</ion-button>\n  <ion-button (click)=\"openMemoria()\">Memoria</ion-button>\n</ion-item>\n<!--******************************************Asking doctor **********************************************************************************************-->  \n\n <div *ngIf=\"showMedical===true\">\n  <ion-item>\n   <ion-label>Lista de Médicos:</ion-label>\n  </ion-item>\n    \n  <ul>\n  <div *ngFor=\"let item of MDT; let i = index\">\n      <li>\n   \n        <ion-item >\n        <ion-label>{{item.userID}}:{{item.username}}</ion-label>           \n        <ion-button (click)= \"openMsg(i)\" end>Consultar</ion-button>\n        <ion-button  (click)= \"closeMsg(i)\" middle>Cerrar</ion-button>\n        </ion-item>\n\n        <div *ngIf=\"msg[i]===1\">\n              <ion-item >                \n                <div *ngIf=\"writeText==true\">\n                  <ion-item>Texto:   \n                  <ion-button (click)=\"writeToggle()\">\n                    <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n                  </ion-button> </ion-item>                  \n                  <ion-textarea #A (ionChange)=\"updatingText(i,A.value)\"></ion-textarea> <!--style=\"height: 200px;\" type=\"text\"></ion-input>-->\n                  <ion-button  (click)= \"sendMsg(i)\" end>Enviar</ion-button>        \n                </div>\n                <div *ngIf=\"writeText==false\">\n                  <ion-item>Texto:\n                  <ion-button (click)=\"writeToggle()\">\n                    <ion-icon name=\"arrow-down\" slot=\"icon-only\"></ion-icon>\n                  </ion-button>   </ion-item>           \n                </div>\n              </ion-item>\n\n              <ion-item >Audio:      \n              <ion-icon name=\"mic\" (click)= \"recordingAudioStart(i)\" begin></ion-icon>\n              <div *ngIf=\"recordingAudio==true\">\n                <ion-icon name=\"stop\" (click)= \"recordingAudioStop(i)\" begin></ion-icon>\n              </div>\n              </ion-item>          \n        <!--- if there is a response from doctor show-->\n            <div *ngIf=\"msgRx[i]==1\">\n                  <ion-label position=\"stacked\">Respuesta:</ion-label>\n                  <!--- Text-->\n                  <div *ngIf=\"RxType[i]==1\">\n                      <ion-item >              \n                        <p>{{item.username}}:{{RxText}}</p>             \n                      </ion-item>\n                  </div>\n                  <!--- Audio -->\n                  <div *ngIf=\"RxType[i]==2\">\n                    <ion-item>\n                    <ion-label>Audio</ion-label>      \n                    <ion-button (click)=\"playString(RxText[i])\">\n                      <ion-icon name=\"play\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>   \n                    </ion-item>\n                  \n                  </div>\n            </div>\n        </div>\n      \n      </li> \n        \n      </div>\n    </ul>   \n  </div>\n\n\n</div>  \n</ion-item>  \n       \n</ion-card>\n\n\n<!--******************************************Showing notes **********************************************************************************************-->\n  <div *ngIf=\"showNotes==true\">\n    \n    \n    <ion-card class=\"PacientDataCard\">\n    <ion-item>Tarea Programada: {{calendarNote}}</ion-item>\n    </ion-card>\n    \n    <ion-card class=\"PacientDataCard\">\n    <!--Informacion del paciente-->\n      <ion-item>Apellido: {{patientLocal.lastName}}</ion-item>\n      <ion-item>Nombre: {{patientLocal.firstName}}</ion-item>\n      <ion-item>Id Paciente: {{patientLocal.id}}</ion-item>\n      \n\n    </ion-card>\n\n    \n    <!--Notas del paciente : limite 2-->\n    <div *ngFor=\"let Note of notes; let i=index\">\n      <ion-card>\n        <!--Informacion del paciente-->\n          <ion-item>ID nota: {{notes[i].noteId}}</ion-item>\n          <ion-item>Nota:{{notes[i].note}}</ion-item>\n        <!--  <ion-item>Estado:{{notes[i].state}}</ion-item>        -->\n        \n       </ion-card>\n\n    </div>\n  </div>\n<!--******************************************Showing Memoria **********************************************************************************************-->\n  <div *ngIf=\"showMemoria==true\">\n    <p>Escribiendo memoria de lo realizado</p>\n    <ion-input type=\"text\" [(ngModel)]=\"Memoria\"></ion-input>\n  </div>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mode-nurse_nurse-main_nurse-main_module_ts.js.map