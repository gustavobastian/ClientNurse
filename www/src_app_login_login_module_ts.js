"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




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

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
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
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







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

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/message-model */ 6397);









let LoginPage = class LoginPage {
    constructor(MQTTServ, formBuilder, localSto, router) {
        this.MQTTServ = MQTTServ;
        this.formBuilder = formBuilder;
        this.localSto = localSto;
        this.router = router;
        this.ionicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl()
        });
        this.statusLogged = false;
        this.mode = "unknown";
        this.showIn = false;
    }
    ngOnInit() {
        //removing user name
        //this.MQTTServ.Reset();
    }
    onClickLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let local = (this.ionicForm.value);
            this.username = local.userName;
            this.password = local.password;
            console.log(this.username);
            console.log(this.password);
            this.number = yield this.MQTTServ.Connect(this.username, this.password);
            console.log(this.number);
            this.showIn = true;
            yield new Promise(f => setTimeout(f, 10000));
            this.Log_in();
        });
    }
    Log_in() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.GetUserLogKind();
            console.log("here");
            let question = "log in";
            var time = new Date();
            let value = (time.getHours()) + ":" + (time.getMinutes()) + ":" + time.getSeconds();
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_4__.MessageModel(this.username, question, 0, value, 1);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            this.MQTTServ.sendMesagge(topic, mqttmessage);
            yield new Promise(f => setTimeout(f, 1000));
            this.GetUserLogKind();
        });
    }
    GetUserLogKind() {
        console.log("wainting for response");
        let question = "";
        let topic = "/User/System/response";
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
                    this.localSto.saveValuesString('username', this.username);
                    this.localSto.saveValuesString('mode', this.mode);
                }
                else if (this.mode == "Médico") {
                    //received in /User/System 
                    //{"idNumber":1,"mode":"doctor"}
                    console.log("Doctor");
                    //this.mode="nurse";
                    this.router.navigate(['/doctor-main/' + this.number]);
                    this.localSto.saveValuesString('username', this.username);
                    this.localSto.saveValuesString('mode', this.mode);
                }
                else {
                    this.router.navigate(['/home/']);
                    this.localSto.saveValuesString('username', "");
                    this.localSto.saveValuesString('mode', "");
                }
                this.statusLogged = true;
            }
        });
    }
    ;
};
LoginPage.ctorParameters = () => [
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_2__.MqttService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 10%;\n  right: 0;\n  top: 20%;\n  transform: translateY(-50%);\n  width: 80%;\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwJTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuXG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n      <!-- Back button with a default href -->\n  \n      <ion-buttons slot=\"start\">\n        <ion-back-button  defaultHref=\"home\" [text]=\"\"></ion-back-button>        \n      </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div id=\"container\" collapse=\"condense\">\n  <p><strong>Acceso al sistema</strong></p>\n  <Form [formGroup]=\"ionicForm\" (ngSubmit)=\"onClickLogin()\" novalidate>  \n  <ion-item lines=\"full\">\n    <ion-label position=\"fixed\" >Usuario</ion-label>\n    <ion-input color=\"primary\" placeholder=\"{{userName}}\" value=\"{{userName}}\" formControlName=\"userName\" type=\"text\" required></ion-input>        \n  </ion-item>         \n  <ion-item lines=\"full\">\n    <ion-label position=\"fixed\">Contraseña</ion-label>\n    <ion-input  color=\"primary\" formControlName=\"password\" type=\"password\" required></ion-input>        \n  </ion-item>  \n  <br>\n  <br>\n  <br>\n\n    <ion-item>\n      \n    <ion-button style = \"position:absolute; left:12.5%;width:70%\" type=\"submit\"  expand=\"block\">Acceder</ion-button>\n    \n  \n    </ion-item>\n    </Form>\n    <div *ngIf=\"showIn == true\">\n    <ion-button style = \"position:absolute; left:30%;width:40%\"   expand=\"block\" (click)=\"Log_in()\">Go Main Page</ion-button>\n    \n    </div>\n  </div>\n\n  </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map