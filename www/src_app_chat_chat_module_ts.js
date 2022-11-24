"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat_chat_module_ts"],{

/***/ 4761:
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 4099);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 818:
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 4761);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 4099);







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 4099:
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page.html?ngResource */ 9910);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss?ngResource */ 6232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _models_bed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/bed */ 982);












let ChatPage = class ChatPage {
    constructor(activatedRoute, MQTTServ, localSto, userServ, router, bedlocal) {
        this.activatedRoute = activatedRoute;
        this.MQTTServ = MQTTServ;
        this.localSto = localSto;
        this.userServ = userServ;
        this.router = router;
        this.bedlocal = bedlocal;
        this.localUser = new _models_user__WEBPACK_IMPORTED_MODULE_7__.User(0, "", "", "", "", 0, "");
        this.localBed = new _models_bed__WEBPACK_IMPORTED_MODULE_8__.Bed(0, 0, 0, 0);
        this.mode = 0;
        this.messages = new Array;
        this.counts = 0;
        //this.bedId=0;
    }
    ngOnInit() {
        this.getParams();
        //  this.bedId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
        this.localBed.bedId = this.bedlocal.getBedId();
        this.bedId = this.localBed.bedId;
        console.log("cama ::::" + this.bedId);
        if (this.bedId === 0) {
            console.log("cama 0");
        }
        if (Number.isNaN(this.bedId) == true) {
            console.log("cama 0");
            this.bedId = 0;
        }
        setTimeout(() => {
            this.bedIdSubscription();
            this.startResponse();
        }, 600);
        //
    }
    /**
     * Getting the parameters of the user from the local storage
     */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            /*let { value } = await Storage.get({ key: 'username' });
            this.usernameLocal=value.toString();
            console.log(this.usernameLocal);*/
            this.localUser = this.userServ.getUser();
            this.localBed.bedId = this.bedlocal.getBedId();
            console.log("occuppation:" + this.localUser.occupation);
            if (this.localUser.occupation == "Médico") {
                this.mode = 1;
            }
            else if (this.localUser.occupation === "Enfermero") {
                this.mode = 2;
            }
        });
    }
    /**
     * Sending the question to the system : command type 7
     */
    ask(question) {
        //this.bedIdSubscription();
        var time = new Date();
        //let value2= (time.getHours()).toString+":"+ (time.getMinutes()).toString();
        //let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
        //console.log(value);
        //let value="12:24";
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.localUser.username, question, this.bedId, 7);
        let mqttmessage = JSON.stringify(a);
        let topic = "/Beds/" + this.bedId + "/chat/";
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.question = "";
    }
    /**
     * Record and send a sound message : command type 2
     */
    record() {
        this.question = "grabando audio";
        var time = new Date();
        //let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.localUser.username, this.question, this.bedId, 1);
        let mqttmessage = JSON.stringify(a);
        let topic = "/Beds/" + this.bedId + "/chat/";
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.question = "";
    }
    /**
     * Sending listenting message from doctor
     */
    startResponse() {
        if (this.mode == 1) {
            this.question = "conectado";
            var time = new Date();
            //let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.localUser.username, this.question, this.bedId, 1);
            let mqttmessage = JSON.stringify(a);
            let topic = "/Beds/" + this.bedId + "/chat/";
            this.MQTTServ.sendMesagge(topic, mqttmessage);
            this.question = "";
        }
    }
    /**
     * Closing the comunication : command type: 6
     */
    finish() {
        this.question = "terminando";
        var time = new Date();
        //let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();
        let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.localUser.username, this.question, this.bedId, 6);
        let mqttmessage = JSON.stringify(a).toString();
        let topic = "/Beds/" + this.bedId + "/chat/";
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.question = "";
        let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.localUser.username, this.question, this.bedId, 16);
        mqttmessage = JSON.stringify(b);
        topic = "/User/general";
        this.MQTTServ.sendMesagge(topic, mqttmessage);
        this.question = "";
        console.log("mode:" + this.mode);
        //this.MQTTServ.closingAll(topic);
        if (this.mode != 1) {
            if (this.bedId != 0) {
                this.router.navigate(['/nurse-main/:{{bedId}}/']);
            }
            else {
                this.router.navigate(['/waiting-event/']);
            }
        }
        else {
            this.router.navigate(['/doctor-main/{{localUser.userId}}/']);
        }
    }
    /**
     * Subscription for receiving messages
     */
    bedIdSubscription() {
        let topic = "/Beds/" + this.bedId + "/chat/";
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            let localMessage = JSON.parse(Message.string);
            let receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(localMessage._username, localMessage._content, localMessage._bedId, localMessage._type);
            if ((this.messages[this.messages.length - 1]) !== receivedMessage) {
                this.messages.push(receivedMessage);
            }
            //this.messages[0]=receivedMessage;
        });
    }
};
ChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_3__.MqttService },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_6__.BedsService }
];
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-chat',
        template: _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatPage);



/***/ }),

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

/***/ 6232:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9910:
/*!************************************************!*\
  !*** ./src/app/chat/chat.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <div *ngIf=\"localBed.bedId != 0\">\n    <ion-title>cama: {{localBed.bedId}}</ion-title>\n    </div>\n    <div *ngIf=\"localBed.bedId == 0\">\n      <ion-title>Chat general</ion-title>\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"msgbubble\" *ngFor=\"let msg of messages\">\n    <div style=\"font-size:10px; text-align:center;\">{{ msg.time }}</div>\n    <div class=\"innermsg\">\n      {{ msg.username }}: {{ msg.content }}\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item>\n    <ion-input placeholder=\"Escribir aqui\" [(ngModel)]=\"question\" type=\"text\"></ion-input>\n    <button ion-button clear icon-only id=\"sendicon\" (click)=\"ask(question)\">\n      <ion-icon name=\"send\"></ion-icon>\n    </button>\n    </ion-item>\n    <ion-buttons right>      \n      <button  ion-button clear icon-only id=\"record\" (click)=\"record()\">\n        <ion-icon name=\"mic\"></ion-icon>\n      </button>\n      <ion-button  style=\"font-size:20px;\"  id=\"finish\" (click)=\"finish()\"> Terminar</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_chat_chat_module_ts.js.map