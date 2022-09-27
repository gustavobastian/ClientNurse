"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mode-nurse_nurse-bed_nurse-bed_module_ts"],{

/***/ 982:
/*!*******************************!*\
  !*** ./src/app/models/bed.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bed": () => (/* binding */ Bed)
/* harmony export */ });
class Bed {
    constructor(bedId, roomId, callerId, floorId) {
        this._bedId = bedId;
        this._callerId = callerId;
        this._floorId = floorId;
        this._roomId = roomId;
    }
    get bedId() {
        return this._bedId;
    }
    get roomId() {
        return this._roomId;
    }
    get floorId() {
        return this._floorId;
    }
    get callerId() {
        return this._callerId;
    }
    set bedId(bedId) {
        this._bedId = bedId;
    }
    set callerId(callerId) {
        this._callerId = callerId;
    }
    set floorId(floorId) {
        this._floorId = floorId;
    }
    set roomId(roomId) {
        this._roomId = roomId;
    }
}


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
    constructor(userName, content, bedId, type) {
        this._username = userName;
        this._content = content;
        this._bedId = bedId;
        //this._time= time;
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
    /* public get time(){
         return this._time;
     }*/
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
    /* public set time(time: string){
         this._time = time;
     }*/
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

/***/ 9401:
/*!************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-bed/nurse-bed-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseBedPageRoutingModule": () => (/* binding */ NurseBedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_bed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed.page */ 5595);




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

/***/ 4096:
/*!****************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-bed/nurse-bed.module.ts ***!
  \****************************************************************/
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
/* harmony import */ var _nurse_bed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed-routing.module */ 9401);
/* harmony import */ var _nurse_bed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-bed.page */ 5595);







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

/***/ 5595:
/*!**************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-bed/nurse-bed.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseBedPage": () => (/* binding */ NurseBedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_bed_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-bed.page.html?ngResource */ 103);
/* harmony import */ var _nurse_bed_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-bed.page.scss?ngResource */ 9325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pacient.service */ 2220);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/message-model */ 6397);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ 3071);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/beds.service */ 3082);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/bed */ 982);













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
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_5__.MessageModel(this.nurseName, this.bedId.toString(), 0, 8);
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

/***/ 9325:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-bed/nurse-bed.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51cnNlLWJlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRSxrQ0FBQTtBQUVGIiwiZmlsZSI6Im51cnNlLWJlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe2JhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fSJdfQ== */";

/***/ }),

/***/ 103:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-bed/nurse-bed.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-item>\n  <!--    <ion-title>Enfermera:{{nurseName}}</ion-title>-->\n    </ion-item>\n   <ion-item>\n     \n      <ion-buttons slot=\"start\">\n        <ion-back-button  defaultHref=\"/waiting-event/\" [text]=\"\"></ion-back-button>        \n      </ion-buttons>\n      <ion-title>Cama:{{bedId}}</ion-title>\n    </ion-item>\n  </ion-toolbar>\n  \n  \n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n    <ion-label>Piso: {{floor}}</ion-label>\n    </ion-item>\n    <ion-item>\n    <ion-label>Cuarto: {{room}}</ion-label>\n  </ion-item>\n  </ion-card>  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mode-nurse_nurse-bed_nurse-bed_module_ts.js.map