"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mqtt-config_mqtt-config_module_ts"],{

/***/ 4365:
/*!***********************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageRoutingModule": () => (/* binding */ MqttConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);




const routes = [
    {
        path: '',
        component: _mqtt_config_page__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPage
    }
];
let MqttConfigPageRoutingModule = class MqttConfigPageRoutingModule {
};
MqttConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MqttConfigPageRoutingModule);



/***/ }),

/***/ 4670:
/*!***************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPageModule": () => (/* binding */ MqttConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config-routing.module */ 4365);
/* harmony import */ var _mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page */ 3644);







let MqttConfigPageModule = class MqttConfigPageModule {
};
MqttConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mqtt_config_routing_module__WEBPACK_IMPORTED_MODULE_0__.MqttConfigPageRoutingModule
        ],
        declarations: [_mqtt_config_page__WEBPACK_IMPORTED_MODULE_1__.MqttConfigPage]
    })
], MqttConfigPageModule);



/***/ }),

/***/ 3644:
/*!*************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MqttConfigPage": () => (/* binding */ MqttConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt-config.page.html?ngResource */ 1218);
/* harmony import */ var _mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mqtt-config.page.scss?ngResource */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var rsup_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rsup-mqtt */ 9829);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);








let MqttConfigPage = class MqttConfigPage {
    constructor(localSto) {
        this.localSto = localSto;
        this.MQTTSERVER = "192.168.1.100";
        this.MQTTPORT = 9001;
        /**
         * Saving port values to localStorage
         */
        this.saveValues = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.writeSecretFile();
            this.localSto.saveValuesString('MQTTSERVER', this.MQTTSERVER);
            this.localSto.saveValuesNumber('MQTTPORT', this.MQTTPORT);
            this.readSecretFile();
        });
        /**
         * Get the server ip from the local storage
         */
        this.getServer = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTSERVER' });
            let server = value;
            this.MQTTSERVER = server;
            console.log('MQTTSERVER:' + this.MQTTSERVER);
        });
        /**
         * Get the broker port from the local storage
         */
        this.getPort = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'MQTTPORT' });
            let port = parseInt(value);
            this.MQTTPORT = port;
            console.log('MQTTPORT:' + this.MQTTPORT);
        });
        /**
         * Read the server IP from the filesystem
         */
        this.writeSecretFile = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const test = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Filesystem.writeFile({
                    path: 'mqtt.txt',
                    data: 'MQTTSERVER:' + this.MQTTSERVER + '\nMQTTPort: ' + this.MQTTPORT,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Directory.Documents,
                    encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Encoding.UTF8,
                });
                console.log(test);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.readSecretFile = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Filesystem.readFile({
                    path: 'mqtt.txt',
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Directory.Documents,
                    encoding: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Encoding.UTF8,
                });
                console.log('secrets:', contents);
                this.general_data = contents.data.toString();
            }
            catch (e) {
                console.log(e);
            }
        });
        this.deleteSecretFile = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Filesystem.deleteFile({
                path: 'mqtt.txt',
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Directory.Documents,
            });
        });
        this.readFilePath = () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Here's an example of reading a file with a full file path. Use this to
            // read binary data (base64 encoded) from plugins that return File URIs, such as
            // the Camera.
            const contents = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_5__.Filesystem.readFile({
                path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
            });
            console.log('data:', contents);
        });
        this.number = 0;
        this.connected = 0;
    }
    ngOnInit() {
        /*  connect({host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false,path:'/test/'})
          .then(client => { this.MQTTClientLocal = client; });*/
    }
    saveClick() {
        //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
        this.saveValues();
    }
    Reset() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
            //this.getServer();
            //this.getPort();  
            this.connected = 0;
            /*if(this.MQTTClientLocal!==null){
            
            this.MQTTClientLocal.disconnect();
            console.log("here");
            this.MQTTClientLocal= null;
            }*/
            //this.MQTTClientLocal= NULL;
            const client = yield (0,rsup_mqtt__WEBPACK_IMPORTED_MODULE_4__.connect)({ host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false, path: '/test/' })
                //connect({host: "192.168.1.100", port: 9001, username:"Laura", password:"123123", ssl: false,path:'/test/'})
                .then(client => {
                console.log(client);
                console.log("**************************************************************");
                console.log("*******************************************************************************");
                console.log("**************************************************************");
                if (client.isConnected()) {
                    this.connected = 1;
                    this.MQTTClientLocal = client;
                    console.log("status: connected");
                }
            })
                .catch(function (json) {
                console.log("Error:" + json.errorCode);
                console.log("*******************************************************************************");
                console.log("**************************************************************");
                console.log("*******************************************************************************");
                if (json.errorCode == 7) {
                    alert("error: mala configuracion broker");
                }
                return this.connected = 0;
            })
                .finally(function () { return this.connected = 0; });
        });
    }
    pruebaClick() {
        this.number++;
        this.MQTTClientLocal.publish('/mensajes', 'hello');
    }
};
MqttConfigPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService }
];
MqttConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mqtt-config',
        template: _mqtt_config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mqtt_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MqttConfigPage);



/***/ }),

/***/ 3882:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".item .item-content {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1xdHQtY29uZmlnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0FBQ0oiLCJmaWxlIjoibXF0dC1jb25maWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0gLml0ZW0tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9Il19 */";

/***/ }),

/***/ 1218:
/*!**************************************************************!*\
  !*** ./src/app/mqtt-config/mqtt-config.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Configuración </ion-title>\n    \n      <!-- Back button with a default href -->\n      <ion-buttons slot=\"start\">\n        <ion-back-button    defaultHref=\"home\" [text]=\"\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content >\n    <div  >    \n      <br>\n      <div class = \"list\">\n        <label class = \"item item-input\">\n          \n           <ion-label color=\"primary\" class = \"input-label\">MQTT SERVER IP:</ion-label>\n           <input type = \"text\" color=\"primary\"  [(ngModel)]=this.MQTTSERVER placeholder = {{MQTTSERVER}} />\n          <!-- <input type=\"ipaddress\"  class=\"form-control\"  [(ngModel)]=this.MQTTSERVER  placeholder = {{MQTTSERVER}}  formControlName=\"ipaddress\"  required pattern=\"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\">-->\n        </label>\n      <br>\n      \n      <label class = \"item item-input \">\n           <ion-label color =\"primary\" class = \"input-label\">MQTT SERVER PORT:</ion-label>\n           <input  color=\"primary\" type = \"text\" [(ngModel)]= this.MQTTPORT placeholder = {{MQTTPORT}} />\n      </label>\n\n      <br>\n    \n            \n      <br>\n      <ion-button color=\"primary\" (click)=\"saveClick()\">Guardar</ion-button>\n      <ion-button color=\"primary\" (click)=\"Reset()\">Reset</ion-button>\n      <br>\n      <div *ngIf=\"connected==1\">\n        <ion-button color=\"primary\" disabled=\"false\" (click)=\"pruebaClick()\">Probar</ion-button>\n        </div>\n        <div *ngIf=\"connected==0\">\n          <ion-button color=\"primary\" disabled=\"true\" (click)=\"pruebaClick()\">Probar</ion-button>\n        </div>\n       </div>\n       <ion-item> \n        <ion-label color=\"secondary\" class = \"input-label\">{{general_data}} </ion-label>\n        <br>\n        \n      </ion-item>   \n      <ion-item> \n        <pre>Cliente: {{this.MQTTClientLocal | json}} </pre>\n      </ion-item>   \n    </div>\n  \n\n\n    \n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mqtt-config_mqtt-config_module_ts.js.map