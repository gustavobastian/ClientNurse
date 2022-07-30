"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nurse-qr_nurse-qr_module_ts"],{

/***/ 9260:
/*!*****************************************************!*\
  !*** ./src/app/nurse-qr/nurse-qr-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseQRPageRoutingModule": () => (/* binding */ NurseQRPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nurse_qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr.page */ 3185);




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

/***/ 3652:
/*!*********************************************!*\
  !*** ./src/app/nurse-qr/nurse-qr.module.ts ***!
  \*********************************************/
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
/* harmony import */ var _nurse_qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr-routing.module */ 9260);
/* harmony import */ var _nurse_qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-qr.page */ 3185);







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

/***/ 3185:
/*!*******************************************!*\
  !*** ./src/app/nurse-qr/nurse-qr.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseQRPage": () => (/* binding */ NurseQRPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nurse_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurse-qr.page.html?ngResource */ 9035);
/* harmony import */ var _nurse_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurse-qr.page.scss?ngResource */ 1461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ 5783);
/* harmony import */ var _services_beds_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/beds.service */ 3082);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 8353);












let NurseQRPage = class NurseQRPage {
    constructor(activatedRoute, localSto, MQTTServ, userlogged, bedlocal, router) {
        this.activatedRoute = activatedRoute;
        this.localSto = localSto;
        this.MQTTServ = MQTTServ;
        this.userlogged = userlogged;
        this.bedlocal = bedlocal;
        this.router = router;
        this.localNurse = new _models_user__WEBPACK_IMPORTED_MODULE_3__.User(0, "", "", "", "", 0, "");
        this.bedId = 0;
        this.nurseName = " ";
        this.nurseId = 0;
        this.showNotes = false;
        this.capturing = false;
        this.capturedQR = "Coloque aqui";
        this.bedId = this.bedlocal.getBedId();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("on QR init");
            const state = yield this.checkPermission();
            if ((state) == true) {
                console.log(" permisos correctos");
                return;
            }
            else {
                alert("Permission denied");
            }
        });
    }
    /****************************************************************************************************************** */
    /* QR scanner functions
    /****************************************************************************************************************** */
    //check permissions of the camera
    //from "https://github.com/capacitor-community/barcode-scanner"
    didUserGrantPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // check if user already granted permission
            const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.checkPermission({ force: false });
            if (status.granted) {
                // user granted permission
                return true;
            }
            if (status.denied) {
                // user denied permission
                return false;
            }
            if (status.asked) {
                // system requested the user for permission during this call
                // only possible when force set to true
            }
            if (status.neverAsked) {
                // user has not been requested this permission before
                // it is advised to show the user some sort of prompt
                // this way you will not waste your only chance to ask for the permission
                const c = confirm('Necesitamos permisos de la camara para realizar el la busqueda de código qr');
                if (!c) {
                    return false;
                }
            }
            if (status.restricted || status.unknown) {
                // ios only
                // probably means the permission has been denied
                return false;
            }
            // user has not denied permission
            // but the user also has not yet granted the permission
            // so request it
            const statusRequest = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.checkPermission({ force: true });
            if (statusRequest.asked) {
                // system requested the user for permission during this call
                // only possible when force set to true
            }
            if (statusRequest.granted) {
                // the user did grant the permission now
                return true;
            }
            // user did not grant the permission, so he must have declined the request
            return false;
        });
    }
    ;
    //checking permisions
    /*public async checkPermission(): Promise<boolean>{
      const status = await BarcodeScanner.checkPermission();
    
      if (status.denied) {
        // the user denied permission for good
        // redirect user to app settings if they want to grant it anyway
        const c = confirm(
          'Si deseas utilizar el traductor de codigos QR debes permitir acceder a la camara en las opciones de la aplicación',
        );
        if (c) {
          BarcodeScanner.openAppSettings();
        }
      }
    };*/
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
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.capturing = true;
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.hideBackground();
            const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.startScan();
            if (result.hasContent) {
                console.log(result.content);
                this.capturedQR = result.content;
                this.capturing = false;
            }
            else {
                this.capturing = false;
            }
        });
    }
    ;
    prepare() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.prepare();
        });
    }
    ;
    stopScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.showBackground();
            _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_8__.BarcodeScanner.stopScan();
        });
    }
    ;
    /****************************************************************************************************************** */
    /* Buttons functions
    /****************************************************************************************************************** */
    /**
     * This function will start the look for for QR codes using the back camera
     */
    startScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.didUserGrantPermission()) === true) {
                this.startScan();
            }
        });
    }
    /**
     * This function will stop the look for for QR codes using the back camera
     */
    stopScanner() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.stopScan();
        });
    }
    //sending qr information for system notification
    sendQr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("QR:" + this.capturedQR);
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_2__.MessageModel(this.nurseName, JSON.stringify(this.capturedQR), this.bedId, "0", 11);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
};
NurseQRPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_6__.MqttService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _services_beds_service__WEBPACK_IMPORTED_MODULE_4__.BedsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
NurseQRPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-nurse-qr',
        template: _nurse_qr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nurse_qr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NurseQRPage);



/***/ }),

/***/ 1176:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedFormat": () => (/* binding */ SupportedFormat),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection)
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
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "SupportedFormat": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat),
/* harmony export */   "BarcodeScanner": () => (/* binding */ BarcodeScanner)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1176);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2041)).then(m => new m.BarcodeScannerWeb()),
});




/***/ }),

/***/ 1461:
/*!********************************************************!*\
  !*** ./src/app/nurse-qr/nurse-qr.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzZS1xci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9035:
/*!********************************************************!*\
  !*** ./src/app/nurse-qr/nurse-qr.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>nurse-QR</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button    defaultHref=\"/nurse-bed/:{{bedId}}\" [text]=\"\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"capturing==true\">\n<ion-item>\n  <ion-input [(ngModel)]=\"capturedQR\" placeholder=\"{{capturedQR}}\" type=\"text\"></ion-input>\n</ion-item>  \n<ion-item>\n  <ion-button (click)=\"sendQr()\">Enviar</ion-button>\n  <ion-button (click)=\"startScanner()\">Capturar</ion-button>\n  <ion-button (click)=\"stopScanner()\">Frenar captura</ion-button>\n</ion-item>\n</div>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_nurse-qr_nurse-qr_module_ts.js.map