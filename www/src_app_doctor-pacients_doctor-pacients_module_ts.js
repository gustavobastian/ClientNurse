"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_doctor-pacients_doctor-pacients_module_ts"],{

/***/ 1614:
/*!*******************************************************************!*\
  !*** ./src/app/doctor-pacients/doctor-pacients-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorPacientsPageRoutingModule": () => (/* binding */ DoctorPacientsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _doctor_pacients_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-pacients.page */ 118);




const routes = [
    {
        path: '',
        component: _doctor_pacients_page__WEBPACK_IMPORTED_MODULE_0__.DoctorPacientsPage
    }
];
let DoctorPacientsPageRoutingModule = class DoctorPacientsPageRoutingModule {
};
DoctorPacientsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DoctorPacientsPageRoutingModule);



/***/ }),

/***/ 1689:
/*!***********************************************************!*\
  !*** ./src/app/doctor-pacients/doctor-pacients.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorPacientsPageModule": () => (/* binding */ DoctorPacientsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _doctor_pacients_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-pacients-routing.module */ 1614);
/* harmony import */ var _doctor_pacients_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-pacients.page */ 118);







let DoctorPacientsPageModule = class DoctorPacientsPageModule {
};
DoctorPacientsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _doctor_pacients_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorPacientsPageRoutingModule
        ],
        declarations: [_doctor_pacients_page__WEBPACK_IMPORTED_MODULE_1__.DoctorPacientsPage]
    })
], DoctorPacientsPageModule);



/***/ }),

/***/ 118:
/*!*********************************************************!*\
  !*** ./src/app/doctor-pacients/doctor-pacients.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoctorPacientsPage": () => (/* binding */ DoctorPacientsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_pacients_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-pacients.page.html?ngResource */ 3486);
/* harmony import */ var _doctor_pacients_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-pacients.page.scss?ngResource */ 4894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_pacient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pacient */ 7377);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pacient.service */ 2220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/note */ 5);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/user */ 5783);














let DoctorPacientsPage = class DoctorPacientsPage {
    constructor(activatedRoute, formBuilder, localSto, pacientServ, userServ, MQTTServ) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.userServ = userServ;
        this.MQTTServ = MQTTServ;
        this.notes = new Array;
        this.localDoctor = new _models_user__WEBPACK_IMPORTED_MODULE_9__.User(0, "", "", "", "", 0, "");
        this.showNotes = false;
        this.showNotesForm = false;
        this.showAsk = true;
        this.pacientNumber2 = 1;
        this.pacientLocal = new _models_pacient__WEBPACK_IMPORTED_MODULE_2__.Pacient(0, "Gus", "Bas", 0, 0, 0);
        this.numberId = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            pacientNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        });
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            noteFormString: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(),
        });
    }
    ngOnInit() {
        console.log(JSON.stringify(this.pacientLocal));
        this.pacientLocal.firstName = "Gus";
        this.pacientLocal.lastName = "Bas";
        this.pacientLocal.id = 0;
        this.localDoctor = this.userServ.getUser();
        this.doctorId = this.localDoctor.userId;
        this.doctorName = this.localDoctor.username;
        let d = this.activatedRoute.snapshot.params['id'];
        this.pacientNumber2 = d;
        this.pacientLocal.id = d;
    }
    /**
     * asking for pacient notes
     */
    onClickNotes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.notes = [];
            let userBad = 0;
            let local = (this.numberId.value);
            this.notes.splice(0);
            console.log(local);
            this.pacientLocal.id = this.pacientNumber2;
            console.log("nro de paciente:", this.pacientLocal.id);
            let responseNoteTopic = "/Pacient/" + this.pacientNumber2 + "/notes";
            //console.log(responseNoteTopic);
            yield this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                // console.log("respuestaSystem:  "+Message.toString());
                if (Message.toString() === '"Error"') {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
                    alert("Error");
                    userBad = 1;
                }
                else {
                    //console.log("recibo nota")
                    let localMessage = JSON.parse(Message.toString());
                    //let localMessage = JSON.parse(JSON.stringify(Message));
                    let notaLocal1 = new _models_note__WEBPACK_IMPORTED_MODULE_5__.Note(0, "", "");
                    /* localMessage.forEach(element => {
                         
                         let  note1=    JSON.parse(JSON.stringify(element));
                             
                         console.log(JSON.stringify(note1));
                         notaLocal1.noteId=note1.notesId;
                         notaLocal1.note=note1.note;
                         console.log(note1.note);
                         notaLocal1.state="1";
                         console.log(JSON.stringify(notaLocal1));
                         this.notes.append(notaLocal1);
                     });*/
                    this.notes = localMessage;
                    console.log(JSON.stringify(this.notes));
                }
            });
            let topic = "/User/general";
            let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.doctorName, (this.pacientLocal.id).toString(), 0, "0", 5);
            let mqttmessage = JSON.stringify(b);
            this.MQTTServ.sendMesagge(topic, mqttmessage);
            userBad = 0;
            //this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic)
        });
    }
    ;
    onClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.showNotes = true;
            let userBad = 0;
            let local = (this.numberId.value);
            this.notes.splice(0);
            console.log(local);
            this.pacientLocal.id = this.pacientNumber2;
            console.log("nro de paciente:", this.pacientLocal.id);
            let responseInfoTopic = "/Pacient/" + this.pacientLocal.id + "/info";
            yield this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                    this.pacientLocal.lastName = "Error";
                    this.pacientLocal.firstName = "Error";
                    return;
                }
                else {
                    this.pacientLocal.lastName = localMessage[0].lastName;
                    this.pacientLocal.firstName = localMessage[0].firstName;
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
            });
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.doctorName, (this.pacientLocal.id).toString(), 0, "0", 4);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.showNotes = true;
        });
    }
    /**
     * Adding a note
     */
    onClickAdd() {
        let local = (this.numberId.value);
        console.log(local);
        this.showNotes = false;
        this.showNotesForm = true;
        this.pacientLocal.id = local.pacientNumber;
        this.showAsk = false;
    }
    onClickReturn() {
        let local = (this.numberId.value);
        console.log(local);
        this.showNotes = false;
        this.showNotesForm = false;
        this.pacientLocal.id = local.pacientNumber;
        this.showAsk = false;
    }
    onClickSend() {
        let local = (this.noteForm.value);
        console.log("envío nota:" + this.pacientLocal.id);
        console.log(local.noteFormString);
        let nota = JSON.stringify(local.noteFormString);
        let topic = "/Pacient/" + this.pacientNumber2 + "/newNote";
        let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.doctorName, nota, 0, "0", 3);
        let mqttmessage = JSON.stringify(b);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.showAsk = false;
        this.showNotesForm = false;
        /*let local=(this.numberId.value);
        console.log(local);
        this.showNotes = false;
        this.showNotesForm = true;
        this.pacientLocal.id = local.pacientNumber;  */
    }
    deleteNote(i) {
        console.log("borrando nota:", i);
        let data = JSON.parse(JSON.stringify(this.notes[i]));
        console.log("borrando notaId:", data.notesId);
        //let topic="/Pacient/"+this.pacientNumber2+"/";
        let topic = "/User/general";
        let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_6__.MessageModel(this.doctorName, JSON.stringify(data.notesId), 0, "0", 18);
        let mqttmessage = JSON.stringify(b);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
    }
};
DoctorPacientsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__.PacientService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_7__.MqttService }
];
DoctorPacientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-doctor-pacients',
        template: _doctor_pacients_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_doctor_pacients_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoctorPacientsPage);



/***/ }),

/***/ 6397:
/*!*****************************************!*\
  !*** ./src/app/models/message-model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageModel": () => (/* binding */ MessageModel)
/* harmony export */ });
class MessageModel {
    constructor(userName, content, bedId, time, type) {
        this._username = userName;
        this._content = content;
        this._bedId = bedId;
        this._time = time;
        this._type = type;
    }
    get username() {
        return this._username;
    }
    get content() {
        return this._content;
    }
    get bedId() {
        return this._bedId;
    }
    get time() {
        return this._time;
    }
    get type() {
        return this._type;
    }
    set username(username) {
        this._username = username;
    }
    set content(content) {
        this._content = content;
    }
    set bedId(bedId) {
        this._bedId = bedId;
    }
    set time(time) {
        this._time = time;
    }
    set type(type) {
        this._type = type;
    }
}


/***/ }),

/***/ 5783:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(userId, username, firstName, lastName, occupation, state, password) {
        this._userId = userId;
        this._username = username;
        this._firstname = firstName;
        this._lastname = lastName;
        this._occupation = occupation;
        this._state = state;
        this._password = password;
    }
    set userId(value) {
        this._userId = value;
    }
    set username(value) {
        this._username = value;
    }
    set firstname(value) {
        this._firstname = value;
    }
    set lastname(value) {
        this._lastname = value;
    }
    set occupation(value) {
        this._occupation = value;
    }
    set state(state) {
        this._state = state;
    }
    set password(password) {
        this._password = password;
    }
    get userId() {
        return this._userId;
    }
    get username() {
        return this._username;
    }
    get_username() {
        return this._username;
    }
    get firstName() {
        return this._firstname;
    }
    get lastName() {
        return this._lastname;
    }
    get occupation() {
        return this._occupation;
    }
    get state() {
        return this._state;
    }
    get password() {
        return this._password;
    }
}


/***/ }),

/***/ 3112:
/*!******************************************!*\
  !*** ./src/app/services/mqtt.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttService": () => (/* binding */ MqttService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rsup_mqtt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rsup-mqtt */ 9829);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);





let MqttService = class MqttService {
    constructor(localSto) {
        this.localSto = localSto;
        this.MQTTSERVER = "127.0.0.2";
        this.MQTTPORT = 9001;
        /**
         * Saving port values to localStorage
         */
        this.saveValues = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.localSto.saveValuesString('MQTTSERVER', this.MQTTSERVER);
            this.localSto.saveValuesNumber('MQTTPORT', this.MQTTPORT);
        });
        /**
         * Get the server ip from the local storage
         */
        this.getServer = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTSERVER' });
            let server = value;
            this.MQTTSERVER = server;
            console.log('MQTTSERVER:' + this.MQTTSERVER);
        });
        /**
         * Get the broker port from the local storage
         */
        this.getPort = () => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTPORT' });
            let port = parseInt(value);
            this.MQTTPORT = port;
            console.log('MQTTPORT:' + this.MQTTPORT);
        });
    }
    ngOnInit() {
        (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_0__.connect)({ host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false, path: '/test/' })
            .then(client => { this.MQTTClientLocal = client; });
    }
    Reset() {
        //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
        this.getServer();
        this.getPort();
        this.connected = 0;
        if (this.MQTTClientLocal !== null) {
            this.MQTTClientLocal.disconnect();
            console.log("here");
            this.MQTTClientLocal = null;
        }
        //this.MQTTClientLocal= NULL;
        (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_0__.connect)({ host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false, path: '/test/' })
            .then(client => {
            console.log(client);
            if (client.isConnected()) {
                this.connected = 1;
                this.MQTTClientLocal = client;
                console.log("status: connected");
            }
        });
    }
    sendMesagge(topic, message) {
        this.MQTTClientLocal.publish(topic, message);
    }
    sendMesaggeRetain(topic, message) {
        this.MQTTClientLocal.publish(topic, message, { retain: true });
    }
    Connect(usernameP, passwordP) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let connected = 0;
            //this.client=Mqtt.Client("myclient");
            this.getServer();
            this.getPort();
            console.log("here:" + this.MQTTSERVER);
            yield (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_0__.connect)({ host: this.MQTTSERVER, port: this.MQTTPORT, username: usernameP, password: passwordP, ssl: false, path: '/test/' })
                //connect({host: "192.168.1.100", port: 9001, username: usernameP, password: passwordP, ssl: false,path:'/test/'})
                .then(client => {
                console.log(client);
                if (client.isConnected()) {
                    connected = 1;
                    this.MQTTClientLocal = client;
                    console.log("status: connected");
                    return 1;
                }
                throw new TypeError("No connection");
            })
                .catch(function (json) {
                console.log(json);
                connected = 0;
                if (json.errorCode == 7) {
                    alert("error: mala configuracion broker");
                }
                return connected;
            })
                .finally(function () { return connected; });
            return connected;
        });
    }
    listenToTopic(topic) {
        console.log("here");
        //this.MQTTClientLocal.onMessage(topic, message=>console.log(message.string));
        //   this.MQTTClientLocal.subscribe(topic).on(Message=>console.log(Message.string));
    }
    closingAll(topic) {
        this.MQTTClientLocal.removeMessageListener(topic, message => console.log(message.string));
    }
};
MqttService.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService }
];
MqttService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], MqttService);



/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user */ 5783);



let UserService = class UserService {
    constructor() {
        this.loggedUser = new _models_user__WEBPACK_IMPORTED_MODULE_0__.User(0, "", "", "", "", 0, "");
    }
    /**
     * Getting the current loged user
    */
    getUser() {
        return this.loggedUser;
    }
    /**
     * Setting the current loged user(after validation from server)
    */
    setUser(userId, userName, userFirstName, userLastName, usermode) {
        this.loggedUser.userId = userId;
        this.loggedUser.firstname = userFirstName;
        this.loggedUser.lastname = userLastName;
        this.loggedUser.occupation = usermode;
        this.loggedUser.username = userName;
        return this.loggedUser;
    }
};
UserService.ctorParameters = () => [];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 4894:
/*!**********************************************************************!*\
  !*** ./src/app/doctor-pacients/doctor-pacients.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".pacientDataCard {\n  background-color: bisque;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1wYWNpZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6ImRvY3Rvci1wYWNpZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFjaWVudERhdGFDYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbn0iXX0= */";

/***/ }),

/***/ 3486:
/*!**********************************************************************!*\
  !*** ./src/app/doctor-pacients/doctor-pacients.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pacientes: {{doctorName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button    defaultHref=\"/doctor-main/\" [text]=\"\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <div *ngIf=\"showAsk==true\">\n    <ion-item>      \n     <!--<div [formGroup]=\"numberId\"> -->\n        <ion-label>Numero Paciente: {{pacientNumber2}}</ion-label>\n    <!--<ion-input  type=\"number\" formControlName=\"pacientNumber\" placeholder=\"{{pacientNumber2}}\" required></ion-input>\n     </div>-->\n    </ion-item>\n   \n   <ion-button  (click)=\"onClick()\" >Consultar</ion-button>\n   <ion-button  (click)=\"onClickNotes()\" >Notas</ion-button>\n  \n  </div>\n\n<div *ngIf=\"showNotes==true\">\n    <ion-card class=\"PacientDataCard\">\n    <!--Informacion del paciente-->\n      <ion-item>Apellido: {{pacientLocal.lastName}}</ion-item>\n      <ion-item>Nombre: {{pacientLocal.firstName}}</ion-item>\n      <ion-item>Id Paciente: {{pacientLocal.id}}</ion-item>\n      \n\n    </ion-card>\n\n    <ion-button  (click)=\"onClickAdd()\" >Agregar Nota</ion-button>\n    <!--Notas del paciente : limite 2-->\n    <div *ngFor=\"let Note of notes; let i=index\">\n      <ion-card>\n        <!--Informacion del paciente-->\n          <ion-item>ID nota: {{Note.notesId}}</ion-item>\n          <ion-item>Nota:{{Note.note}}</ion-item>\n        <!--  <ion-item>Estado:{{notes[i].state}}</ion-item>        -->\n        <ion-button (click)=\"deleteNote(i)\">borrar</ion-button>\n       </ion-card>\n\n    </div>\n  </div>\n  <div *ngIf=\"showNotesForm==true\">\n\n    <div [formGroup]=\"noteForm\"> \n      <ion-label>Nota:</ion-label>\n      <ion-input  type=\"text\" formControlName=\"noteFormString\" required></ion-input>\n       </div>\n      \n     <ion-button ion-color=\"primary\" (click)=\"onClickSend()\" >enviar</ion-button>\n\n      <ion-button (click)=\"onClickReturn()\" >Volver</ion-button>\n  </div>\n\n\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-pacients_doctor-pacients_module_ts.js.map