"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_models_bed_ts-src_app_pages_mode-admin_admin-main_admin-main_module_ts"],{

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

/***/ 225:
/*!***************************************!*\
  !*** ./src/app/models/user-status.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userStats": () => (/* binding */ userStats)
/* harmony export */ });
class userStats {
    constructor(userId, st) {
        this._userId = userId;
        this._st = st;
    }
    get_userId() {
        return this._userId;
    }
    get_st() {
        return this._st;
    }
    set_userId(num) {
        this._userId = num;
    }
    set_st(num) {
        this._st = num;
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

/***/ 9493:
/*!**************************************************************************!*\
  !*** ./src/app/pages/mode-admin/admin-main/admin-main-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMainPageRoutingModule": () => (/* binding */ AdminMainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-main.page */ 4156);




const routes = [
    {
        path: '',
        component: _admin_main_page__WEBPACK_IMPORTED_MODULE_0__.AdminMainPage
    }
];
let AdminMainPageRoutingModule = class AdminMainPageRoutingModule {
};
AdminMainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminMainPageRoutingModule);



/***/ }),

/***/ 5671:
/*!******************************************************************!*\
  !*** ./src/app/pages/mode-admin/admin-main/admin-main.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMainPageModule": () => (/* binding */ AdminMainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-main-routing.module */ 9493);
/* harmony import */ var _admin_main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-main.page */ 4156);







let AdminMainPageModule = class AdminMainPageModule {
};
AdminMainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_main_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminMainPageRoutingModule
        ],
        declarations: [_admin_main_page__WEBPACK_IMPORTED_MODULE_1__.AdminMainPage]
    })
], AdminMainPageModule);



/***/ }),

/***/ 4156:
/*!****************************************************************!*\
  !*** ./src/app/pages/mode-admin/admin-main/admin-main.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMainPage": () => (/* binding */ AdminMainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-main.page.html?ngResource */ 1564);
/* harmony import */ var _admin_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-main.page.scss?ngResource */ 4053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_bed_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bed-status */ 6000);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/message-model */ 6397);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _models_user_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/user-status */ 225);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/beds.service */ 3082);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _services_patient_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/patient.service */ 7672);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/user.service */ 3071);















let AdminMainPage = class AdminMainPage {
    constructor(activatedRoute, localSto, pacientServ, MQTTServ, userlogged, bedlocal, router, userServ, platform) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.MQTTServ = MQTTServ;
        this.userlogged = userlogged;
        this.bedlocal = bedlocal;
        this.router = router;
        this.userServ = userServ;
        this.platform = platform;
        this.userLocal = new _models_user__WEBPACK_IMPORTED_MODULE_4__.User(0, "", "", "", "", 0, "");
        this.userLocalName = " ";
        this.messagesBeds2 = new Array;
        this.messagesUsers = new Array;
        this.bedstates = ["Desocupada", "Ocupada", "Llamando", "Por ser atendida", "Siendo atendida", "Llamada programada", "Solicita Ayuda"];
        this.userstates = ["no Logeado", "Logeado", "Atendiendo"];
        this.showing = "Users";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getParams();
            setTimeout(() => {
                this.eventsSubscription();
                this.usersSubscription();
            }, 600);
        });
    }
    /**
       * Getting the parameters of the user from the local storage
       */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.userLocal = this.userServ.getUser();
            this.userLocalName = this.userLocal.get_username();
            console.log(JSON.stringify(this.userLocal));
        });
    }
    onClickUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("clicked Users");
            this.showing = "Users";
        });
    }
    onClickBeds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("clicked Beds");
            this.showing = "Beds";
        });
    }
    onClickEvents() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("clicked Events");
            this.showing = "Events";
        });
    }
    onClickCalendar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("clicked calendar");
            this.showing = "Calendar";
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
            //  console.log("received")
            //  console.log(Message.string);            
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            //console.log(localMessage[0].message);    
            this.messagesBeds2 = [];
            localMessage.forEach(element => {
                {
                    let bedStatsLocal = new _models_bed_status__WEBPACK_IMPORTED_MODULE_2__.bedStats(element.id, element.st, element.spec);
                    this.messagesBeds2.push(bedStatsLocal);
                }
            });
        });
    }
    usersSubscription() {
        let topic = "/User/status";
        let receivedMessage;
        console.log("user subscribed");
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            console.log(localMessage[0].message);
            this.messagesUsers = [];
            localMessage.forEach(element => {
                {
                    let userStatsLocal = new _models_user_status__WEBPACK_IMPORTED_MODULE_5__.userStats(element.id, element.st);
                    this.messagesUsers.push(userStatsLocal);
                    console.log(JSON.stringify(userStatsLocal));
                }
            });
        });
    }
    /**
     * logout
     */
    logout() {
        console.log("logging out");
        console.log("name:" + this.userLocal.username);
        let question = "logout";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_3__.MessageModel(this.userLocal.username, question, 0, 2);
        console.log(JSON.stringify(a));
        let mqttmessage = (a).toString();
        // console.log(mqttmessage);
        let topic = "/User/general";
        this.MQTTServ.sendMesagge(topic, JSON.stringify(a));
        //App.exitApp();   //this will close all services
        this.router.navigate(['/home/']);
    }
};
AdminMainPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService },
    { type: _services_patient_service__WEBPACK_IMPORTED_MODULE_9__.PacientService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_6__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform }
];
AdminMainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-admin-main',
        template: _admin_main_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_main_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMainPage);



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
            //last will message
            let value = { topic: "/User/Disconnection", payload: { _user: usernameP } };
            yield (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_0__.connect)({ host: this.MQTTSERVER, port: this.MQTTPORT, username: usernameP, password: passwordP, ssl: false, path: '/test/', will: value })
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
                if (json.errorCode == 7)
                    // {alert("error: mala configuracion broker");}
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

/***/ 4053:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mode-admin/admin-main/admin-main.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tYWluLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1564:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/mode-admin/admin-main/admin-main.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{userLocal.username}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\" >Salir</ion-button>        <!--href=\"home\" -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item>\n  <ion-button (click)=\"onClickUsers()\">Usuarios </ion-button>\n  <ion-button (click)=\"onClickBeds()\">Camas</ion-button>\n\n</ion-item>\n<!-- showing logged users**********************************************-->\n<div *ngIf=\"showing=='Users'\">\n    \n    <div *ngFor=\"let msg2 of messagesUsers\">  \n      <div *ngIf=\"msg2.get_userId()!=0\">\n       <ion-card >         \n           <ion-item>            \n           <ion-label>Usuario: {{ msg2.get_userId()}}</ion-label>                      \n           <!--<ion-button>  <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon></ion-button>-->\n           </ion-item>\n           <ion-item>\n           <ion-label>Estado: {{ userstates[msg2.get_st()] }}</ion-label>\n          </ion-item>\n       </ion-card>\n      </div> \n   </div>\n</div>\n<!-- showing beds status**********************************************-->\n<div *ngIf=\"showing=='Beds'\">\n    \n\n    <div  *ngFor=\"let msg of messagesBeds2\">  \n       <div *ngIf=\"msg.get_bedId()!=0\">\n        <ion-card color=\"success\">\n          <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n            <ion-item>\n            <ion-label>Cama: {{ msg.get_bedId() }}</ion-label>            \n             </ion-item>\n          <ion-item>\n            <ion-label>Estado: {{ bedstates[msg.get_st()] }}</ion-label>            \n            </ion-item>\n          \n        </ion-card>\n      </div> \n    </div>\n</div>\n<!-- showing Events status**********************************************-->\n<div *ngIf=\"showing=='Events'\">\n    <ion-item>\n      <p>events</p>\n    </ion-item>\n</div>\n<!-- showing Calendar **********************************************-->\n<div *ngIf=\"showing=='Calendar'\">\n    <ion-item>\n      <p>Calendario</p>\n    </ion-item>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_models_bed_ts-src_app_pages_mode-admin_admin-main_admin-main_module_ts.js.map