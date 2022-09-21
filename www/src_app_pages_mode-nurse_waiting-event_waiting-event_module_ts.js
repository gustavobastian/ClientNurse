"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mode-nurse_waiting-event_waiting-event_module_ts"],{

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

/***/ 1199:
/*!***************************************!*\
  !*** ./src/app/models/nurse-specs.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nurseSpec": () => (/* binding */ nurseSpec)
/* harmony export */ });
class nurseSpec {
    constructor(nurseId, userId, name, specId) {
        this._nurseSpecId = nurseId;
        this._userId = userId;
        this._name = name;
        this._specId = specId;
    }
    get nurseSpecId() {
        return this._nurseSpecId;
    }
    get userId() {
        return this._userId;
    }
    get name() {
        return this._name;
    }
    get specId() {
        return this._specId;
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

/***/ 2452:
/*!********************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/waiting-event/waiting-event-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingEventPageRoutingModule": () => (/* binding */ WaitingEventPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _waiting_event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event.page */ 5033);




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

/***/ 9955:
/*!************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/waiting-event/waiting-event.module.ts ***!
  \************************************************************************/
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
/* harmony import */ var _waiting_event_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event-routing.module */ 2452);
/* harmony import */ var _waiting_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-event.page */ 5033);







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

/***/ 5033:
/*!**********************************************************************!*\
  !*** ./src/app/pages/mode-nurse/waiting-event/waiting-event.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingEventPage": () => (/* binding */ WaitingEventPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _waiting_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waiting-event.page.html?ngResource */ 9377);
/* harmony import */ var _waiting_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waiting-event.page.scss?ngResource */ 7525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_models_nurse_specs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/nurse-specs */ 1199);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/bed */ 982);
/* harmony import */ var _models_bed_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/bed-status */ 6000);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/message-model */ 6397);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/beds.service */ 3082);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/user.service */ 3071);














let WaitingEventPage = class WaitingEventPage {
    constructor(activatedRoute, MQTTServ, localSto, router, localBed, userLogged) {
        this.activatedRoute = activatedRoute;
        this.MQTTServ = MQTTServ;
        this.localSto = localSto;
        this.router = router;
        this.localBed = localBed;
        this.userLogged = userLogged;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_6__.User(0, "", "", "", "", 0, "");
        this.bed = new _models_bed__WEBPACK_IMPORTED_MODULE_3__.Bed(0, 0, 0, 0);
        this.messages = new Array;
        this.messagesbeds = new Array;
        this.messagesbedsfiltered = new Array;
        this.nurseSpecs = new Array;
        this.nurseSpecsIds = new Array;
        this.responseSpec = " ";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.localNurse = yield this.userLogged.getUser();
            yield this.getNurseSpec();
            setTimeout(() => {
                this.eventsSubscription();
            }, 600);
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
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on((Message) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //  console.log("received")
            //  console.log(Message.string);            
            let localMessage = JSON.parse(Message.string);
            let local2 = Message.string;
            //console.log(localMessage[0].message);    
            this.messagesbeds = [];
            localMessage.forEach(element => {
                {
                    let localBedStatus = new _models_bed_status__WEBPACK_IMPORTED_MODULE_4__.bedStats(element.id, element.st, element.spec);
                    this.nurseSpecsIds.forEach(localnurseSpec => {
                        if (element.spec == localnurseSpec) {
                            this.messagesbeds.push(localBedStatus);
                        }
                    });
                }
            });
        }));
    }
    /**
       * getting nurse information
       */
    getNurseSpec() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log("nurse:" + this.localNurse.userId);
            let responseInfoTopic = "/User/" + this.localNurse.userId + "/Specs";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                if (Message.toString() == "Error") {
                    this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
                }
                //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                this.nurseSpecs = [];
                this.nurseSpecsIds = [];
                localMessage.forEach(element => {
                    let localSpec = new src_app_models_nurse_specs__WEBPACK_IMPORTED_MODULE_2__.nurseSpec(this.localNurse.userId, this.localNurse.userId, element.Name, element.specId);
                    this.nurseSpecs.push(localSpec);
                    this.nurseSpecsIds.push(element.specId);
                });
                console.log(JSON.stringify(localMessage));
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_5__.MessageModel(this.localNurse.username, JSON.stringify(this.localNurse.username), 0, 43);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * Accepting a bed call... and moving to the bed
     * @param i beds number
     */
    onClick(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.localBed.setBedId(i);
            this.bed.bedId = i;
            this.router.navigate(['/nurse-main/:' + i]);
            let topic = "/Beds/status";
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_5__.MessageModel(this.localNurse.username, "", this.bed.bedId, 12);
            //console.log(a)
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    /**
     * asking for bed information
     * @param i beds number
     */
    onClick2(i) {
        this.localBed.setBedId(i);
        this.router.navigate(['/nurse-bed/:' + i]);
    }
    /**
     * asking for Calendar Notes information
     * @param i beds number
     */
    onClick3(i) {
        /*this.localBed.setBedId(i);
       
        this.router.navigate(['/nurse-bed/:'+i]);        */
        console.log(i);
    }
    /**
     * logout
     */
    logout() {
        console.log("logging out");
        console.log("name:" + this.localNurse.username);
        let question = "logout";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_5__.MessageModel(this.localNurse.username, question, 0, 2);
        console.log(JSON.stringify(a));
        let mqttmessage = (a).toString();
        console.log(mqttmessage);
        let topic = "/User/general";
        this.MQTTServ.sendMesagge(topic, JSON.stringify(a));
        topic = "/Beds/status";
        this.router.navigate(['/']);
    }
    /**
     * go to general chat
     */
    goChat() {
        /*   this.router.navigate(['/chat/]);        */
        this.localBed.setBedId(0);
        this.router.navigate(['/chat/']);
    }
};
WaitingEventPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_9__.MqttService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_7__.BedsService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService }
];
WaitingEventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-waiting-event',
        template: _waiting_event_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_waiting_event_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WaitingEventPage);



/***/ }),

/***/ 3082:
/*!******************************************!*\
  !*** ./src/app/services/beds.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BedsService": () => (/* binding */ BedsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/bed */ 982);



let BedsService = class BedsService {
    constructor() {
        this.localBed = new _models_bed__WEBPACK_IMPORTED_MODULE_0__.Bed(0, 0, 0, 0);
    }
    setBed(bed) {
        this.localBed = bed;
    }
    getBed() {
        return this.getBed();
    }
    setBedId(bedId) {
        this.localBed.bedId = bedId;
    }
    ;
    getBedId() {
        return this.localBed.bedId;
    }
    ;
};
BedsService.ctorParameters = () => [];
BedsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], BedsService);



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

/***/ 7525:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/waiting-event/waiting-event.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".card {\n  background-color: #d15050;\n  box-shadow: none;\n}\n\n* {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmctZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQUUsa0NBQUE7QUFFSiIsImZpbGUiOiJ3YWl0aW5nLWV2ZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCA4MCwgODApOyAvLyBibGFja1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAqe2JhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fSAgIl19 */";

/***/ }),

/***/ 9377:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/waiting-event/waiting-event.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Sala de espera</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"logout()\">Logout</ion-button>        <!-- href=\"home\" -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <ion-item>\n    <ion-item>\n      <label>Especialidades:</label> \n    </ion-item>\n    <div *ngFor=\"let item of nurseSpecs\">  \n      <ion-item>\n      <p>{{item._name}}</p>\n      </ion-item>\n    </div>  \n      \n  </ion-item>\n  <div class=\"msgbubble\" *ngFor=\"let msg of messagesbeds\">  \n    <!--<p>{{msg|json}}</p>-->\n    <div *ngIf=\"msg._st > 1\">  \n      \n      <ion-card >\n        <ion-icon name=\"bed\" slot=\"start\"></ion-icon>\n          <ion-item>\n          <ion-label>Habitación: {{ msg._bedId }}</ion-label>\n          </ion-item>\n          <ion-item>\n          <ion-label>Estado: {{ msg._st}}</ion-label>\n          <div *ngIf=\"msg.get_st()==6\">\n            <ion-label>AYUDA</ion-label>\n          </div>\n          </ion-item>\n         \n        <br>\n        <ion-item>\n          <div *ngIf=\"msg._st!=6\">\n          <ion-button (click)=\"onClick(msg._bedId)\"> Aceptar </ion-button>\n          </div>\n          <ion-button (click)=\"onClick2(msg._bedId)\"> Ubicacion </ion-button>\n          <div *ngIf=\"msg.type == 9\">  \n            <ion-button (click)=\"onClick3(msg._bedId)\"> Notas Calendario </ion-button>\n          </div>  \n        </ion-item>\n      </ion-card>\n    </div>  \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mode-nurse_waiting-event_waiting-event_module_ts.js.map