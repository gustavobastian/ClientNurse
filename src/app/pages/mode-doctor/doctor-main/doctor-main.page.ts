import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { Bed } from '../../../models/bed';
import { PatientsTable } from '../../../models/patientsTable';
import { BedsService } from '../../../services/beds.service';
import { MessageModel } from '../../../models/message-model';
import { MqttService } from '../../../services/mqtt.service';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { BedStats } from 'src/app/models/bed-status';
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-doctor-main",
  templateUrl: "./doctor-main.page.html",
  styleUrls: ["./doctor-main.page.scss"],
})
export class DoctorMainPage implements OnInit {
  private localDoctor: User = new User(0, "", "", "", "", 0, "");
  private bedlocal: Bed = new Bed(0, 0, 0, 0);
  private readonly doctorId: number;
  public doctorName: string;
  public patientNumber: number;
  public newMessage = false;
  public messages: Array<MessageModel> = new Array();
  messagesbeds: Array<BedStats> = new Array();
  messagesbedsfiltered: Array<any> = new Array();
  public patientTable: Array<PatientsTable> = new Array();
  private textResponse: string = "";
  private recording = false;
  private duration = 0;
  private patientActivated = false;
  private viewMode = 0;

  updatePass = false;
  showPass1 = "password";
  showPass2 = "password";
  newPass1 = "";
  newPass2 = "";
  MinCaracterPass = 4;
  pageTitle = "";

  bedstates = [
    "Desocupada",
    "Descansando",
    "Llamando",
    "Por ser atendido",
    "Siendo atendido",
    "Llamada programada",
    "Solicito Ayuda",
  ];
  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,
    private readonly platform: Platform,
    public MQTTServ: MqttService,
    public userServ: UserService
  ) {
    this.doctorName = "";
    this.newMessage = false;
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log("Handler was called!");
    });
  }

  ngOnInit() {
    VoiceRecorder.requestAudioRecordingPermission();
    this.pageTitle = "";
    this.newMessage = false;
    this.getParams();
    this.getBeds();
    this.eventsSubscription();
  }
  onClickPatientNote(id: number) {
    this.router.navigate(["/doctor-patients/" + this.patientNumber]);
  }
  onClickMessages() {
    this.router.navigate(["/doctor-messages/" + this.doctorId]);
  }
  /**
   * Getting the parameters of the user from the local storage
   */
  async getParams() {
    this.localDoctor = this.userServ.getUser();
    this.doctorName = this.localDoctor.username;
  }
  /***
   * for example
   */

  public async subscribe() {
    await this.MQTTServ.MQTTClientLocal.subscribe("/audio/recording");
  }

  /***
   * getting list of pacients and beds
   */

  async getBeds() {
    let responseInfoTopic = "/User/" + this.localDoctor.userId + "/Pacients";
    this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on((Message) => {
      let localMessage = JSON.parse(Message.string);
      if (Message.toString() == "Error") {
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
      } else {
        localMessage.forEach((element) => {
          this.patientTable.push(element);
        });
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
        this.MQTTServ.sendMesagge(responseInfoTopic, "");
        this.listenMessages();
      }
    });

    let a = new MessageModel(
      this.localDoctor.username,
      JSON.stringify(this.localDoctor.userId),
      0,
      9
    );
    let mqttmessage = JSON.stringify(a);
    let topic = "/User/general";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
  }

  /**
   * Subscription for receiving messages
   * of the status of the beds
   */
  eventsSubscription() {
    let topic = "/Beds/status";
    let receivedMessage;
    console.log("status subscribed");
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(async (Message) => {
      let localMessage = JSON.parse(Message.string);
      this.messagesbeds = [];
      this.messagesbedsfiltered = [];
      if (this.viewMode == 2) {
        await localMessage.forEach((element) => {
          this.patientTable.forEach((patientT) => {
            if (element.id == patientT.bedId) {
              console.log(JSON.stringify(patientT));
              let local = {
                bedId: patientT.bedId as unknown as string,
                patientId: patientT.patientId as unknown as string,
                st: element.st as unknown as string,
              };
              let localj = JSON.parse(JSON.stringify(local));
              this.messagesbedsfiltered.push(localj);
            }
          });
        });
      }
    });
  }

  /**
   * logout
   */
  public logout() {
    console.log("logging out");
    console.log("name:" + this.localDoctor.username);
    let question = "logout";

    let a = new MessageModel(this.localDoctor.username, question, 0, 2);
    console.log(JSON.stringify(a));
    let mqttmessage = a.toString();
    // console.log(mqttmessage);
    let topic = "/User/general";
    this.MQTTServ.sendMesagge(topic, JSON.stringify(a));

    //App.exitApp();   //this will close all services
    this.router.navigate(["/home/"]);
  }

  /**
   *
   * @param
   */
  public async listenMessages() {
    let topic = "/User/" + this.localDoctor.userId + "/questions/";

    this.patientTable.forEach((element) => {
      topic =
        "/User/" + this.localDoctor.userId + "/questions/" + element.bedId;
      console.log("topic: " + topic);
      this.MQTTServ.MQTTClientLocal.subscribe(topic).on((Message) => {
        let localMessage = JSON.parse(Message.string);
        if (Message.toString() == "Error") {
          this.MQTTServ.MQTTClientLocal.unsubscribe(topic + "#");
        }
        console.log("here doc listening");

        let receivedMessage = new MessageModel(
          localMessage._username,
          localMessage._content,
          localMessage._bedId,
          localMessage._type
        );
        console.log("Recibido por doc");

        this.messages.push(receivedMessage);
        this.newMessage = true;
      });
    });
  }

  onChangeText(text: string) {
    this.textResponse = text;
  }

  sendResponseText(id: number) {
    let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;
    let a = new MessageModel(
      this.localDoctor.username,
      this.textResponse,
      id,
      7
    );
    let mqttmessage = JSON.stringify(a);
    console.log("sending:", mqttmessage);
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.messages.splice(id, 1);
  }
  sendAudioText(response: string, id: number) {
    let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;
    let a = new MessageModel(
      this.localDoctor.username,
      response,
      this.patientTable[id].bedId,
      27
    );
    let mqttmessage = JSON.stringify(a);
    this.MQTTServ.sendMesagge(topic, mqttmessage);
  }

  upgradingPatientNumber(id: number) {
    this.patientNumber = id;
    this.patientActivated = true;
  }

  async playFile(fileName: string) {
    const audioFile = await Filesystem.readFile({
      path: "audios/" + fileName,
      directory: Directory.Documents, //Data
    });
    const base64Sound = audioFile.data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }

  async playString(data: string) {
    const base64Sound = data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }

  /**
   * recording audio
   */
  startRecording() {
    console.log("startin recording");
    if (this.recording) {
      return;
    }
    this.recording = true;
    VoiceRecorder.startRecording();
    this.calculateDuration();
  }

  calculateDuration() {
    if (!this.recording) {
      this.duration = 0;
      return;
    }
    this.duration += 1;
    setTimeout(() => {
      this.calculateDuration();
    }, 1000);
  }
  async stopRecording(id: number) {
    console.log("stopping recording");
    let topic = "/User/" + this.localDoctor.userId + "/answers/" + id;

    this.recording = false;
    VoiceRecorder.stopRecording().then(async (result: RecordingData) => {
      if (result.value && result.value.recordDataBase64) {
        let a = new MessageModel(
          this.localDoctor.username,
          result.value.recordDataBase64,
          id,
          22
        );
        let mqttmessage = JSON.stringify(a);
        this.MQTTServ.sendMesagge(topic, mqttmessage);
      }
    });
  }

  async enablingPatientMonitoring() {
    this.viewMode = 2;
  }
  async enablingNotes() {
    this.viewMode = 1;
  }
  async enablingListen() {
    this.viewMode = 3;
  }

  async deleteMsg(id: number) {
    this.messages.splice(id, 1);
    if (this.messages.length < 1) {
      console.log("no hay mensajes para responder");
      this.newMessage = false;
    }
  }

  changePass() {
    if (this.updatePass == false) {
      this.updatePass = true;
      this.pageTitle = "Nueva Contraseña";
    } else {
      this.updatePass = false;
      this.pageTitle = "";
    }
  }
  showPassword1() {
    if (this.showPass1 == "password") {
      this.showPass1 = "text";
    } else {
      this.showPass1 = "password";
    }
    this.showPass2 = "password";
  }
  showPassword2() {
    if (this.showPass2 == "password") {
      this.showPass2 = "text";
    } else {
      this.showPass2 = "password";
    }
  }

  onChangeNewPass1(text: string) {
    this.newPass1 = text;
  }
  onChangeNewPass2(text: string) {
    this.newPass2 = text;
  }
  onSendNewPass() {
    let data = this.newPass1 + "Ç" + this.localDoctor.username;

    if (this.newPass1 == this.newPass2) {
      if (this.newPass1.length < this.MinCaracterPass) {
        alert("Error: Ingrese una contraseña con más caracteres");
        return;
      }
      console.log("Se puede enviar");
      let topic = "/User/general";
      let a = new MessageModel(this.localDoctor.username, data, 0, 23);
      console.log(JSON.stringify(a));
      let mqttmessage = a.toString();
      this.MQTTServ.sendMesagge(topic, JSON.stringify(a));
      this.updatePass = false;
    } else {
      console.log("NO se puede enviar");
      alert("Error: chequear contraseñas ingresadas");
    }
  }

  handleKey(event: KeyboardEvent, i: number) {
    if (event.key === "Enter" || event.key === " ") {
      this.deleteMsg(i);
    }
  }
}
