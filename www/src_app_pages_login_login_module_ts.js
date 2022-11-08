"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

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

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mqtt.service */ 3112);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ 17);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/message-model */ 6397);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 3071);










let LoginPage = class LoginPage {
    constructor(MQTTServ, formBuilder, localSto, userServ, router) {
        this.MQTTServ = MQTTServ;
        this.formBuilder = formBuilder;
        this.localSto = localSto;
        this.userServ = userServ;
        this.router = router;
        this.ionicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl()
        });
        this.statusLogged = false;
        this.sessionId = 0;
        this.mode = "unknown";
        this.showIn = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //
            //this.number =  await this.MQTTServ.Connect("cliente", "asdf");
        });
    }
    ionViewWillEnter() {
        let currDate = new Date();
        this.sessionId = currDate.getTime();
    }
    onClickLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let local = (this.ionicForm.value);
            this.username = local.userName;
            this.password = local.password;
            console.log(this.username);
            console.log(this.password);
            this.number = yield this.MQTTServ.Connect(this.username, this.password);
            console.log(this.number);
            yield new Promise(f => setTimeout(f, 1000));
            this.Log_in();
        });
    }
    Log_in() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.GetUserLogKind();
            console.log("here");
            let question = this.password + "Ç" + this.sessionId;
            var time = new Date();
            //let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.username, question, 0, 1);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            this.MQTTServ.sendMesagge(topic, mqttmessage);
            yield new Promise(f => setTimeout(f, 1000));
        });
    }
    GetUserLogKind() {
        console.log("wainting for response");
        let question = "";
        //let topic="/User/"+this.username+"/response";    
        let topic = "/Session/" + this.sessionId + "/response";
        let localMessage;
        this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
            console.log("respuestaSystem:  " + Message.toString());
            if (this.statusLogged == false) {
                localMessage = JSON.parse(Message.string);
                this.number = parseInt(localMessage.idNumber);
                this.mode = (localMessage.mode);
                if (this.mode == "Enfermero") {
                    console.log("here2");
                    //this.mode="nurse";
                    this.router.navigate(['/waiting-event/']);
                    this.userServ.setUser(this.number, this.username, "", "", this.mode);
                    this.localSto.saveValuesString('username', this.username);
                    this.localSto.saveValuesString('mode', this.mode);
                    this.showIn = true;
                }
                else if (this.mode == "Médico") {
                    //received in /User/System         
                    console.log("Médico");
                    //this.mode="nurse";
                    this.router.navigate(['/doctor-main/' + this.number]);
                    this.userServ.setUser(this.number, this.username, "", "", this.mode);
                    this.localSto.saveValuesString('username', this.username);
                    this.localSto.saveValuesString('mode', this.mode);
                    this.showIn = true;
                }
                else if (this.mode == "Administrador") {
                    //received in /User/System          
                    console.log("Administrador");
                    //this.mode="nurse";
                    this.router.navigate(['admin-main/' + this.number]);
                    this.userServ.setUser(this.number, this.username, "", "", this.mode);
                    this.localSto.saveValuesString('username', this.username);
                    this.localSto.saveValuesString('mode', this.mode);
                    this.showIn = true;
                }
                else {
                    alert("Error al acceder! verificar usuario y contraseña");
                    this.router.navigate(['/home/']);
                    this.userServ.setUser(0, "", "", "", "");
                    this.localSto.saveValuesString('username', "");
                    this.localSto.saveValuesString('mode', "");
                    this.statusLogged = false;
                }
                this.statusLogged = true;
            }
        });
    }
    ;
};
LoginPage.ctorParameters = () => [
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_2__.MqttService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 40%;\n  transform: translateY(-50%);\n  width: 90%;\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQURGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlOy8vYWJzb2x1dGVcbiAgICBsZWZ0OiAwJTtcbiAgICByaWdodDogMCU7XG4gICAgdG9wOiA0MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAyMHB4OyAgICBcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG5cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header collapse=\"false\">\n  \n    <ion-toolbar>      \n        <!-- Back button with a default href -->\n    \n        <ion-buttons slot=\"start\">\n          <ion-back-button  defaultHref=\"home\" text=\"Volver\"></ion-back-button>        \n        </ion-buttons>\n    \n    </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n  \n  <div id=\"container\" collapse=\"false\" >\n  <p><strong>Acceso al sistema</strong></p>\n  <Form [formGroup]=\"ionicForm\" (ngSubmit)=\"onClickLogin()\" novalidate>  \n  <ion-item     [style.--background]=\"blue\"  lines=\"full\">\n    <ion-label position=\"fixed\" >Usuario</ion-label>\n    <ion-input color=\"secondary\" placeholder=\"{{userName}}\" value=\"{{userName}}\" formControlName=\"userName\" type=\"text\" required></ion-input>        \n  </ion-item>         \n  <ion-item [style.--background]=\"blue\" lines=\"full\">\n    <ion-label position=\"fixed\">Contraseña</ion-label>\n    <ion-input  color=\"secondary\" formControlName=\"password\" type=\"password\" required></ion-input>        \n  </ion-item>  \n  <br>\n  <br>\n  <br>\n\n    <ion-item >\n      \n    <ion-button color=\"secondary\" style = \"position:absolute; left:12.5%;width:70%\" type=\"submit\"  expand=\"block\">Acceder</ion-button>    \n  \n    </ion-item>\n    </Form>\n    <div *ngIf=\"showIn == true\">\n    <ion-button color=\"secondary\" style = \"position:absolute; left:30%;width:40%\"   expand=\"block\" (click)=\"Log_in()\">Go Main Page</ion-button>\n    \n    </div>\n  </div>\n\n  </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map