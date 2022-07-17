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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _doctor_pacients_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctor-pacients.page.html?ngResource */ 3486);
/* harmony import */ var _doctor_pacients_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctor-pacients.page.scss?ngResource */ 4894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_pacient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/pacient */ 7377);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ 17);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/storage */ 460);
/* harmony import */ var _services_pacient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/pacient.service */ 2220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/note */ 5);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/message-model */ 6397);
/* harmony import */ var _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/mqtt.service */ 3112);













let DoctorPacientsPage = class DoctorPacientsPage {
    constructor(activatedRoute, formBuilder, localSto, pacientServ, MQTTServ) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.localSto = localSto;
        this.pacientServ = pacientServ;
        this.MQTTServ = MQTTServ;
        this.notes = new Array;
        this.showNotes = false;
        this.showNotesForm = false;
        this.pacientLocal = new _models_pacient__WEBPACK_IMPORTED_MODULE_2__.Pacient(0, "Gus", "Bas", 0, 0, 0);
        this.numberId = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            pacientNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
        });
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            noteFormString: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(),
        });
        this.doctorId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
        this.doctorName = "";
    }
    ngOnInit() {
        this.getParams();
        console.log(JSON.stringify(this.pacientLocal));
        this.pacientLocal.firstName = "Gus";
        this.pacientLocal.lastName = "Bas";
        this.pacientLocal.id = 0;
        //making 2 notes
        let nota1 = new _models_note__WEBPACK_IMPORTED_MODULE_6__.Note(1, "ahora me despierto", "active");
        let nota2 = new _models_note__WEBPACK_IMPORTED_MODULE_6__.Note(2, "ahora me acuesto", "active");
        //this.pacientServ.oneAsk(this.doctorId);
    }
    /**
       * Getting the parameters of the user from the local storage
       */
    getParams() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let { value } = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_4__.Storage.get({ key: 'username' });
            this.doctorName = value.toString();
            console.log(this.doctorName);
        });
    }
    onClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let local = (this.numberId.value);
            console.log(local);
            this.pacientLocal.id = local.pacientNumber;
            this.showNotes = true;
            this.pacientServ.oneAsk(local.pacientNumber);
            let responseNoteTopic = "/Pacient/" + this.pacientLocal.id + "/notes";
            this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message => {
                console.log("respuestaSystem:  " + Message.toString());
                console.log("recibo nota");
                //let localMessage = JSON.parse(Message[0].string);      
                let localMessage = JSON.parse(Message.string);
                let note1 = JSON.parse(JSON.stringify(localMessage[0]));
                let note2 = JSON.parse(JSON.stringify(localMessage[1]));
                let notaLocal1 = new _models_note__WEBPACK_IMPORTED_MODULE_6__.Note(note1.notesId, note1.note, note1.state);
                let notaLocal2 = new _models_note__WEBPACK_IMPORTED_MODULE_6__.Note(note2.notesId, note2.note, note2.state);
                this.notes.push(notaLocal1);
                this.notes.push(notaLocal2);
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
            });
            let responseInfoTopic = "/Pacient/" + this.pacientLocal.id + "/info";
            this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message => {
                let localMessage = JSON.parse(Message.string);
                //console.log("respuestaSystem2:  "+localMessage[0].lastName);
                this.pacientLocal.lastName = localMessage[0].lastName;
                this.pacientLocal.firstName = localMessage[0].firstName;
                this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
            });
            let a = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.doctorName, JSON.stringify(this.pacientLocal.id), 0, "0", 2);
            console.log(a);
            let mqttmessage = JSON.stringify(a);
            console.log(mqttmessage);
            let topic = "/User/general";
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
            let b = new _models_message_model__WEBPACK_IMPORTED_MODULE_7__.MessageModel(this.doctorName, JSON.stringify(this.pacientLocal.id), 0, "0", 5);
            mqttmessage = JSON.stringify(b);
            yield this.MQTTServ.sendMesagge(topic, mqttmessage);
        });
    }
    onClickAdd() {
        let local = (this.numberId.value);
        console.log(local);
        this.showNotes = false;
        this.showNotesForm = true;
        this.pacientLocal.id = local.pacientNumber;
    }
    onClickVolver() {
        let local = (this.numberId.value);
        console.log(local);
        this.showNotes = true;
        this.showNotesForm = false;
        this.pacientLocal.id = local.pacientNumber;
    }
    onClickEnviar() {
        let local = (this.noteForm.value);
        console.log(local.noteFormString);
        /*let local=(this.numberId.value);
        console.log(local);
        this.showNotes = false;
        this.showNotesForm = true;
        this.pacientLocal.id = local.pacientNumber;  */
    }
};
DoctorPacientsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService },
    { type: _services_pacient_service__WEBPACK_IMPORTED_MODULE_5__.PacientService },
    { type: _services_mqtt_service__WEBPACK_IMPORTED_MODULE_8__.MqttService }
];
DoctorPacientsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-doctor-pacients',
        template: _doctor_pacients_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_doctor_pacients_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoctorPacientsPage);



/***/ }),

/***/ 5:
/*!********************************!*\
  !*** ./src/app/models/note.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
class Note {
    constructor(noteId, note, state) {
        this._noteId = noteId;
        this._note = note;
        this._state = state;
    }
    set noteId(noteId) {
        this._noteId = noteId;
    }
    set note(note) {
        this._note = note;
    }
    set state(state) {
        this._state = state;
    }
    get noteId() {
        return this._noteId;
    }
    ;
    get note() {
        return this._note;
    }
    ;
    get state() {
        return this._state;
    }
}


/***/ }),

/***/ 7377:
/*!***********************************!*\
  !*** ./src/app/models/pacient.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pacient": () => (/* binding */ Pacient)
/* harmony export */ });
class Pacient {
    constructor(pacientId, pacientFirstName, pacientLastName, bedId, notesTableId, userTableId) {
        this._id = pacientId;
        this._firstName = pacientFirstName;
        this._lastName = pacientLastName;
        this._bedId = bedId;
        this._notesTableId = notesTableId;
        this._userTableId = userTableId;
    }
    set id(pacient) {
        this._id = pacient;
    }
    get id() {
        return this._id;
    }
    set firstName(pacient) {
        this._firstName = pacient;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(pacient) {
        this._lastName = pacient;
    }
    get lastName() {
        return this._lastName;
    }
    set bedId(pacient) {
        this._bedId = pacient;
    }
    get bedId() {
        return this._bedId;
    }
    set notesTableId(number) {
        this._notesTableId = number;
    }
    get notesTableId() {
        return this._notesTableId;
    }
    set userTableId(number) {
        this._userTableId = number;
    }
    get userTableId() {
        return this._userTableId;
    }
}


/***/ }),

/***/ 2220:
/*!*********************************************!*\
  !*** ./src/app/services/pacient.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PacientService": () => (/* binding */ PacientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _mqtt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mqtt.service */ 3112);



let PacientService = class PacientService {
    constructor(MQTTServ) {
        this.MQTTServ = MQTTServ;
        this.pacients = new Array;
    }
    //not used
    getAllPacients() {
        return;
    }
    oneAsk(i) {
        console.log("asking");
        let topic = "general2";
        console.log;
        this.MQTTServ.sendMesagge(topic, "aqui estamos" + i);
    }
    getPacientInfo(i) {
        return;
    }
};
PacientService.ctorParameters = () => [
    { type: _mqtt_service__WEBPACK_IMPORTED_MODULE_0__.MqttService }
];
PacientService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PacientService);



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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Pacientes: {{doctorName}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button    defaultHref=\"/doctor-main/\" [text]=\"\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n    <ion-item>      \n     <div [formGroup]=\"numberId\"> \n    <ion-label>Numero Paciente:</ion-label>\n    <ion-input  type=\"number\" formControlName=\"pacientNumber\"  required></ion-input>\n     </div>\n    </ion-item>\n   <ion-button  (click)=\"onClick()\" >Consultar</ion-button>\n\n<div *ngIf=\"showNotes==true\">\n    <ion-card class=\"PacientDataCard\">\n    <!--Informacion del paciente-->\n      <ion-item>Apellido: {{pacientLocal.lastName}}</ion-item>\n      <ion-item>Nombre: {{pacientLocal.firstName}}</ion-item>\n      <ion-item>id: {{pacientLocal.id}}</ion-item>\n      \n\n    </ion-card>\n\n    <ion-button  (click)=\"onClickAdd()\" >Agregar</ion-button>\n    <!--Notas del paciente : limite 2-->\n    <div *ngFor=\"let Note of notes; let i=index\">\n      <ion-card>\n        <!--Informacion del paciente-->\n          <ion-item>ID: {{notes[i].noteId}}</ion-item>\n          <ion-item>Nota:{{notes[i].note}}</ion-item>\n        <!--  <ion-item>Estado:{{notes[i].state}}</ion-item>        -->\n        <ion-button>Desactivar</ion-button>\n       </ion-card>\n\n    </div>\n  </div>\n  <div *ngIf=\"showNotesForm==true\">\n\n    <div [formGroup]=\"noteForm\"> \n      <ion-label>Nota:</ion-label>\n      <ion-input  type=\"text\" formControlName=\"noteFormString\" required></ion-input>\n       </div>\n      \n     <ion-button ion-color=\"primary\" (click)=\"onClickEnviar()\" >enviar</ion-button>\n\n      <ion-button (click)=\"onClickVolver()\" >Volver</ion-button>\n  </div>\n\n\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_doctor-pacients_doctor-pacients_module_ts.js.map