"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mode-nurse_nurse-qr_nurse-qr_module_ts"],{

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

/***/ 3064:
/*!**********************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-qr/nurse-qr-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseQRPageRoutingModule": () => (/* binding */ NurseQRPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr.page */ 4366);




const routes = [
    {
        path: '',
        component: _nurse_qr_page__WEBPACK_IMPORTED_MODULE_0__.NurseQRPage
    }
];
let NurseQRPageRoutingModule = class NurseQRPageRoutingModule {
};
NurseQRPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NurseQRPageRoutingModule);



/***/ }),

/***/ 5928:
/*!**************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-qr/nurse-qr.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseQRPageModule": () => (/* binding */ NurseQRPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nurse_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr-routing.module */ 3064);
/* harmony import */ var _nurse_qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-qr.page */ 4366);







let NurseQRPageModule = class NurseQRPageModule {
};
NurseQRPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _nurse_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.NurseQRPageRoutingModule
        ],
        declarations: [_nurse_qr_page__WEBPACK_IMPORTED_MODULE_1__.NurseQRPage]
    })
], NurseQRPageModule);



/***/ }),

/***/ 4366:
/*!************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-qr/nurse-qr.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseQRPage": () => (/* binding */ NurseQRPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr.page.html?ngResource */ 4875);
/* harmony import */ var _nurse_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-qr.page.scss?ngResource */ 8682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/message-model */ 6397);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/beds.service */ 3082);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/mqtt.service */ 3112);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ 3071);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 8353);













let NurseQRPage = class NurseQRPage {
    constructor(alertController, activatedRoute, localSto, MQTTServ, userlogged, bedlocal, router, platform) {
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.MQTTServ = MQTTServ;
        this.userlogged = userlogged;
        this.bedlocal = bedlocal;
        this.router = router;
        this.platform = platform;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_3__.User(0, "", "", "", "", 0, "");
        this.bedId = 0;
        this.nurseName = " ";
        this.nurseId = 0;
        this.showNotes = false;
        this.capturing = false;
        this.canCapture = false;
        this.scanActive = false;
        this.capturedQR = "Coloque aqui";
        this.data = " ";
        this.bedId = this.bedlocal.getBedId();
        this.capturing = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const state = yield this.checkPermission();
            if ((state) == true) {
                return;
            }
            else {
                alert("Permission denied");
            }
            this.BedQrSubscription(this.bedId);
        });
    }
    ngAfterViewInit() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.prepare();
    }
    ngOnDestroy() {
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.stopScan();
    }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.hideBackground(); // make background of WebView transparent
            document.body.style.opacity = "0.2";
            document.body.style.background = "transparent";
            const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.startScan(); // start scanning and wait for a result
            // if the result has content
            if (result.hasContent) {
                document.body.style.background = "";
                document.body.style.opacity = "1";
                console.log(result.content); // log the raw scanned content
                this.data = result.content;
                this.capturedQR = result.content;
                ;
            }
        });
    }
    ;
    cancelScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            document.body.style.background = "";
            document.body.style.opacity = "1";
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.stopScan();
        });
    }
    //sending qr information for system notification
    sendQr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("QR:" + this.capturedQR);
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_2__.MessageModel(this.nurseName, JSON.stringify(this.capturedQR), this.bedId, 11);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/Beds/" + this.bedId + "/QR";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    //Checking permissions
    checkPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // check or request permission
            const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.checkPermission({ force: true });
            if (status.granted) {
                // the user granted permission
                return true;
            }
            return false;
        });
    }
    ;
    //
    /**
     * Subscription for receiving messages
     */
    BedQrSubscription(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let topic = "/Beds/" + this.bedId + "/QRresponse/";
            this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message => {
                //console.log("recibido:"+JSON.stringify(Message.string))  
                let localMessage = JSON.stringify(Message.string);
                console.log("recibido:" + localMessage);
                if (localMessage === "Error") {
                    console.log("habitacion no encontrada en base de datos");
                    this.presentAlert("habitacion no encontrada en base de datos");
                }
                else if (localMessage === 'QR invalid') {
                    console.log("QR equivocado");
                    this.presentAlert("QR equivocado");
                }
                else {
                    console.log("habilitado");
                    this.presentAlert("Perfecto");
                }
            });
        });
    }
    /**
     * ERROR ALERTS MESSAGES
     *  */
    presentAlert(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: text,
                message: '',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    goBack() {
        this.router.navigate(['/nurse-main/{{this.bedId}}']);
    }
};
NurseQRPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_6__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_4__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform }
];
NurseQRPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-nurse-qr',
        template: _nurse_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nurse_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NurseQRPage);



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

/***/ 7604:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat)
/* harmony export */ });
var SupportedFormat;
(function (SupportedFormat) {
    // BEGIN 1D Product
    /**
     * Android only, UPC_A is part of EAN_13 according to Apple docs
     */
    SupportedFormat["UPC_A"] = "UPC_A";
    SupportedFormat["UPC_E"] = "UPC_E";
    /**
     * Android only
     */
    SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
    SupportedFormat["EAN_8"] = "EAN_8";
    SupportedFormat["EAN_13"] = "EAN_13";
    // END 1D Product
    // BEGIN 1D Industrial
    SupportedFormat["CODE_39"] = "CODE_39";
    /**
     * iOS only
     */
    SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
    SupportedFormat["CODE_93"] = "CODE_93";
    SupportedFormat["CODE_128"] = "CODE_128";
    /**
     * Android only
     */
    SupportedFormat["CODABAR"] = "CODABAR";
    SupportedFormat["ITF"] = "ITF";
    /**
     * iOS only
     */
    SupportedFormat["ITF_14"] = "ITF_14";
    // END 1D Industrial
    // BEGIN 2D
    SupportedFormat["AZTEC"] = "AZTEC";
    SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
    /**
     * Android only
     */
    SupportedFormat["MAXICODE"] = "MAXICODE";
    SupportedFormat["PDF_417"] = "PDF_417";
    SupportedFormat["QR_CODE"] = "QR_CODE";
    /**
     * Android only
     */
    SupportedFormat["RSS_14"] = "RSS_14";
    /**
     * Android only
     */
    SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
    // END 2D
})(SupportedFormat || (SupportedFormat = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["FRONT"] = "front";
    CameraDirection["BACK"] = "back";
})(CameraDirection || (CameraDirection = {}));


/***/ }),

/***/ 8353:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner),
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7604);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2041)).then(m => new m.BarcodeScannerWeb()),
});




/***/ }),

/***/ 8682:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-qr/nurse-qr.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n* {\n  box-sizing: border-box;\n}\n\np {\n  color: #fff;\n  font-family: sans-serif;\n  text-align: center;\n  font-weight: 600;\n}\n\nhtml,\nbody,\n.container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.container {\n  display: flex;\n}\n\n.relative {\n  position: relative;\n  z-index: 1;\n}\n\n.square {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  transition: 0.3s;\n}\n\n.square:after {\n  content: \"\";\n  top: 0;\n  display: block;\n  padding-bottom: 100%;\n}\n\n.square > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.surround-cover {\n  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.5);\n}\n\n.barcode-scanner--area--container {\n  width: 80%;\n  max-width: min(500px, 80vh);\n  margin: auto;\n}\n\n.barcode-scanner--area--outer {\n  display: flex;\n  border-radius: 1em;\n}\n\n.barcode-scanner--area--inner {\n  width: 100%;\n  margin: 1rem;\n  border: 2px solid #fff;\n  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.5), inset 0px 0px 2px 1px rgba(0, 0, 0, 0.5);\n  border-radius: 1rem;\n}\n\n.sample-background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(45deg, #673ab7, transparent);\n  background-position: 45% 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  animation: shake 5s infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n  }\n  20% {\n    transform: translate(5px, 5px) rotate(-1deg) scale(1.05);\n  }\n  40% {\n    transform: translate(5px, 5px) rotate(-2deg) scale(1.07);\n  }\n  60% {\n    transform: translate(2px, 2px) rotate(0deg) scale(1.04);\n  }\n  80% {\n    transform: translate(-1px, -1px) rotate(-2deg) scale(1.05);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg) scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51cnNlLXFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUtGOztBQUhBO0VBQ0UsNENBQUE7QUFNRjs7QUFKQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHdGQUFBO0VBRUEsbUJBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdEQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFPRjs7QUFMQTtFQUNFO0lBQ0UsZ0RBQUE7RUFRRjtFQU5BO0lBQ0Usd0RBQUE7RUFRRjtFQU5BO0lBQ0Usd0RBQUE7RUFRRjtFQU5BO0lBQ0UsdURBQUE7RUFRRjtFQU5BO0lBQ0UsMERBQUE7RUFRRjtFQU5BO0lBQ0UsZ0RBQUE7RUFRRjtBQUNGIiwiZmlsZSI6Im51cnNlLXFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbnAge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmh0bWwsXG5ib2R5LFxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5zcXVhcmUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnNxdWFyZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbn1cbi5zcXVhcmUgPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5zdXJyb3VuZC1jb3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDk5OTk5cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmJhcmNvZGUtc2Nhbm5lci0tYXJlYS0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiBtaW4oNTAwcHgsIDgwdmgpO1xuICBtYXJnaW46IGF1dG87XG59XG4uYmFyY29kZS1zY2FubmVyLS1hcmVhLS1vdXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbi5iYXJjb2RlLXNjYW5uZXItLWFyZWEtLWlubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4IHJnYigwIDAgMCAvIDAuNSksXG4gICAgaW5zZXQgMHB4IDBweCAycHggMXB4IHJnYigwIDAgMCAvIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5zYW1wbGUtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2NzNhYjcsIHRyYW5zcGFyZW50KTtcbiAgLy9iYWNrZ3JvdW5kOiB1cmwoLi9tb2NrdXAuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDUlIDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYW5pbWF0aW9uOiBzaGFrZSA1cyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA1cHgpIHJvdGF0ZSgtMWRlZykgc2NhbGUoMS4wNSk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDVweCkgcm90YXRlKC0yZGVnKSBzY2FsZSgxLjA3KTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KSByb3RhdGUoMGRlZykgc2NhbGUoMS4wNCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoLTJkZWcpIHNjYWxlKDEuMDUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 4875:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mode-nurse/nurse-qr/nurse-qr.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar>\n    <ion-title>\n      Lector\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<div class=\"sample-background\">\n  <!-- this background simulates the camera view -->\n</div>\n<div class=\"container\">\n  <div class=\"barcode-scanner--area--container\">\n    <div class=\"relative\">\n      <p>Focalizar barcode</p>\n    </div>\n    <div class=\"square surround-cover\">\n      <div class=\"barcode-scanner--area--outer surround-cover\">\n        <div class=\"barcode-scanner--area--inner\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<ion-item>\n  <ion-label>Captura:{{data}}</ion-label>\n  </ion-item> \n  <ion-item>\n  <ion-button style=\"width:25%;\" (click)=\"startScan()\">Empezar Captura</ion-button>\n  <ion-button style=\"width:25%;\"(click)=\"cancelScan()\">Cancelar Captura</ion-button>\n  <ion-button style=\"width:25%;\"(click)=\"sendQr()\">Enviar</ion-button>\n  <ion-button style=\"width:25%;\"(click)=\"goBack()\">Volver</ion-button>\n  </ion-item> \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mode-nurse_nurse-qr_nurse-qr_module_ts.js.map