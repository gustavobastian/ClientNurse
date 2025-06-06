import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { PacientService } from '../../../services/patient.service';
import { Storage } from '@capacitor/storage';
import { Note } from 'src/app/models/note';
import { MessageModel } from 'src/app/models/message-model';
import { Patient } from 'src/app/models/patient';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { MedicalTable } from 'src/app/models/MedicalTable';
import { Platform } from '@ionic/angular';
import { AudioRecording, Microphone } from '@mozartec/capacitor-microphone';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { nurseSpec } from 'src/app/models/nurse-specs';




@Component({
  selector: 'app-nurse-main',
  templateUrl: './nurse-main.page.html',
  styleUrls: ['./nurse-main.page.scss'],
})
export class NurseMainPage implements OnInit {
  private localNurse: User= new User(0,"","","","",0,"");
  public bedId = 0;
  public nurseName=" ";
  public notes: Array<Note> = new Array;
  private msg: Array<number> = new Array;
  private msgRx: Array<number> = new Array;
  private audio: Array<number> = new Array;  
  private textToSend: Array<string> = new Array;
  public RxText: Array<string> = new Array;
  public RxType: Array<number> = new Array;
  public MDT: Array<MedicalTable> = new Array;
  public nurseSpecs : Array<nurseSpec> = new Array;
  public Memoria=" ";
  public calendarNote=" ";
  
  public patientLocal: Patient= new Patient(0,"Gus","Bas",0,0,0);
  
  private inRoom =false;

  private showNotes = false;
  private showMedical = false;
  private showMemoria=false;
  public asking = false;
  
  private actionFinished= false;
  private recordingAudio=false;
  recording = false;
  private canRecord=false;
  duration=0;
  textQR="";
  
  platformLocal="none"
  manualQR= false;
  writeText=false;
  
  messages: Array<MessageModel> = new Array;
  
  


  constructor(private readonly activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private readonly pacientServ:PacientService,
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private readonly router:Router,
    private readonly platform: Platform
    ) {
    this.bedId = bedlocal.getBedId();
    this.actionFinished=false;
    this.recordingAudio=false;
    this.calendarNote=""
   
   }

  async ngOnInit() {
    await this.getParams();
    console.log("patientID onInit:"+this.patientLocal.id)
    this.manualQR= false;
    await this.eventsSubscription();//getting status of the bed
    this.writeText=false;

    await  this.getCalendarNote();
    //permissions for recording
    await this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        console.log('android');
        this.platformLocal = "android"
      } else if (this.platform.is('ios')) {
        console.log('ios');
        this.platformLocal = "ios"
      } else {
           //fallback to browser APIs or
           console.log('The platform is not supported');
           this.platformLocal="none"
             }
      });

      if(this.platform.is('android') || this.platform.is('ios'))
      {
        this.canRecord=true;
        console.log("puedo capturar")   
        console.log("check permisions on android")
      const state=await this.checkPermissions();
      if(state){
        console.log(" permisos correctos");
        return;}
      else{        
        this.platformLocal="none"
          }    
         
      }
      else{
        this.canRecord=false;        
        this.platformLocal="none"
      }
    console.log(this.platformLocal)  
  }

  /**
   * Get the patient id
   */
  async getParams() {    
    this.localNurse=this.userlogged.getUser();
    this.nurseName=this.localNurse.username;    
    let responseInfoTopic="/Beds/"+this.bedId+"/Pacient";  
    console.log("asking on patient info:  "+responseInfoTopic.toString());
    //cleaning
    this.MDT=[];
    

    this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      console.log("SystemResponse on patient info:  "+Message.toString());
      let localMessage = JSON.parse(Message.string);
      let patient1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      
      this.patientLocal.id=patient1.patientId;
      console.log(JSON.stringify(this.patientLocal))
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
      }      
      console.log("Patient received")
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
    });    
    let topic="/User/general";
    let b=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId,10);
    let mqttmessage=JSON.stringify(b);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);    
  }

  /**
   * getting patient information
   */
   async getPatientInformation(){
   console.log("Patient:"+this.patientLocal.id);
   let responseInfoTopic="/Pacient/"+this.patientLocal.id+"/info";  
   this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
       let localMessage = JSON.parse(Message.string);
       if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}
       this.patientLocal.lastName = localMessage[0].lastName;
       this.patientLocal.firstName = localMessage[0].firstName;      
       this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
     })  

    let a=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),  0, 4);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
     this.MQTTServ.sendMesagge(topic, mqttmessage);
   }

  
  /**
   * getting Calendar event notes
   */
   async getCalendarNote(){
    console.log("Patient:"+this.patientLocal.id);
    let responseInfoTopic="/Beds/"+this.bedId +"/CalendarNote";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
        this.calendarNote=Message.toString();     
        console.log("Nota Calendario:"+Message.toString())
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
      })  
 
     let a=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),   this.bedId, 20);    
     console.log(a)
     let mqttmessage=JSON.stringify(a);
     console.log(mqttmessage);
     let topic="/User/general";
     this.MQTTServ.sendMesagge(topic, mqttmessage); 
     }     

  /**
   * getting medical table
   */
   async getMedicalTable() {    
    this.localNurse=this.userlogged.getUser();
    this.nurseName=this.localNurse.username;    
    let responseNoteTopic="/Beds/"+this.bedId+"/info";  

    //cleaning
    this.MDT=[];

    /*asking for patient's doctors */
    console.log("MDT bedId:"+this.bedId)
    let responseMDTTopic="/Beds/"+this.bedId+"/MDT";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseMDTTopic).on(Message=>{      
      let localMessage2 = JSON.parse(Message.string);
      let MDTLocal =  JSON.parse(JSON.stringify(localMessage2));     
      console.log("MDT:"+ JSON.stringify(MDTLocal));
      

      if(Message.toString()=="Error"){
        this.MDT=[];
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseMDTTopic);
      }
      else{

        MDTLocal.forEach(element => {
          console.log("************************")
          console.log(JSON.stringify(element));
          let MDTLocal2: MedicalTable= new MedicalTable(element.lastname,element.userId);
          console.log(JSON.stringify(MDTLocal2));
          this.MDT.push(MDTLocal2); 
          this.msg.push(0); 
          this.msgRx.push(0);
          this.RxType.push(0);          
          this.textToSend.push(""); 
          this.RxText.push(""); 
        });
        
      }      
      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      console.log("mdt received")
    });

    let topic="/User/general";    
    let c=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId, 17);
    let mqttmessage2=JSON.stringify(c);    
     this.MQTTServ.sendMesagge(topic, mqttmessage2);
   }


  /**
   * Subscription for receiving messages
   * of the status of the beds   
   */
   eventsSubscription(){
    
    let topic="/Beds/status";
    let receivedMessage;
    console.log("subscribed")
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
     console.log("received")    
    let localMessage = JSON.parse(Message.string);         
    console.log(localMessage[0].message);    
    this.messages=[];
    
    localMessage.forEach(element => {         
      receivedMessage = new MessageModel("","",element.id,element.st);
      console.log("element id:"+element.id+"| element st:"+element.st);        
       if(parseInt(element.id)==(this.bedId)){
        console.log("Here")
        if(element.st==4){this.inRoom=true;}
        else{this.inRoom=false}
      }
     }
    );    
  
    });
  }

  /**
   * Unsubscribe from events
   */
  eventsUnsubscription(){
    let topic="/Beds/status";    
    this.MQTTServ.MQTTClientLocal.unsubscribe(topic);
    console.log("unsubscribed to bed events");
  }
  /**
   * Get the pacient Notes 
   */
  async getNotes() {

    this.notes.splice(0);    
    console.log("***********************************************************");
    console.log("***********gettin notes****************************");
    
  console.log("patientID:"+this.patientLocal.id)
   let responseNoteTopic="/Pacient/"+this.patientLocal.id+"/notes";  
     this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
      console.log("respuestaSystem:  "+Message.toString());
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      }      
      console.log("recibo nota")
      //let localMessage = JSON.parse(Message[0].string);      
      let localMessage = JSON.parse(Message.string);
      let note1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      let note2 =  JSON.parse(JSON.stringify(localMessage[1]));     
      
      let notaLocal1: Note= new Note(note1.notesId,note1.note,note1.state);
      let notaLocal2: Note= new Note(note2.notesId,note2.note,note2.state);
      this.notes.push(notaLocal1);
      this.notes.push(notaLocal2);      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic)
    })
      
    let topic="/User/general";
    let b=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),  0, 5);
    let mqttmessage=JSON.stringify(b);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);
   }


/**
 * Got to pacient char for asking aditional information
 */

   public async goChat(i: number){
    this.router.navigate(['/chat/']);
    
 /*   this.router.navigate(['/chat/]);        */
 /*
   let a=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),  this.bedId, "0",14);    
  console.log(a)
  let mqttmessage=JSON.stringify(a);
  console.log(mqttmessage);
  let topic="/User/general";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);       

  this.router.navigate(['/chat/']);        */
  console.log(JSON.stringify(this.MDT))
   }

/**
 * Got to QR capture page
 */
   public goQR(){    
     this.router.navigate(['/nurse-qr/{{this.bedId}}']);        
      }
 
 /**
 * Got to Cancelling the response to call
 */
  public async Quit(){
    let a=new MessageModel(this.nurseName,JSON.stringify(this.patientLocal.id),  this.bedId, 19);    
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.router.navigate(['/waiting-event/']);        
    this.inRoom=false;  
    this.actionFinished=true;

    console.log("quitting")
}     

 /** 
 * Ending notification
 */
  public async goEnd(){
    /*   this.router.navigate(['/chat/]);        */
    let data= {"Memoria":this.Memoria}
    let a=new MessageModel(this.nurseName,JSON.stringify(data),  this.bedId, 13);    
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    this.eventsSubscription();
    let topic="/User/general";
    
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.router.navigate(['/waiting-event/']);        
    this.inRoom=false;  
    this.actionFinished=true;
    }
  
  
  /**
   * Sending the question to the system : command type 17
   */
   askToDoctor(question:string, doctorId: number){
    let time= new Date();
    
    //let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    
    let a=new MessageModel(this.localNurse.username,question,  this.bedId, 7);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/User/"+doctorId+"/questions/"+this.patientLocal.patientId;
    this.MQTTServ.sendMesagge(topic, mqttmessage);    
  }  


  //opening closing msg dialog
  openMsg(i:number){
    this.msg[i]=1;
  }
  closeMsg(i:number){
    this.msg[i]=0;
  }
  //opening closing Audio dialog
  openAudio(i:number){
    this.audio[i]=1;
  }
  closeAudio(i:number){
    this.audio[i]=0;
  }
  // sending msg dialog
  sendMsg(i:number){
    console.log("sending to:"+this.MDT[i].userID);
    console.log("MSG send:"+this.textToSend[i]);
    this.bedIdSubscription(i);
    let a= new MessageModel(this.localNurse.username,this.textToSend[i],  this.bedId, 7);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/User/"+this.MDT[i].userID+"/questions/"+this.bedId;
    this.MQTTServ.sendMesagge(topic, mqttmessage);

  }
  updatingText(i:number,s:string){
    this.textToSend[i]=s;

  }

  /**
   * Subscription for receiving messages
   */
   async bedIdSubscription(i: number){
    
    let topic="/User/"+this.MDT[i].userID+"/answers/"+this.bedId;
    console.log(topic);
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    //console.log("recibido:"+JSON.stringify(Message.string))
    let parsedMessage = JSON.parse(Message.string);      
    console.log("recibido1:"+ JSON.stringify(parsedMessage._content)) ;
    console.log("recibido:"+parsedMessage._content) ;
    console.log("recibido Tipo:"+parsedMessage._type) ;
    
        
    this.RxText[i]= (parsedMessage._content);
    if(parsedMessage._type==7)
        this.RxType[i]=1;           
    else    
        this.RxType[i]=2;

    this.msgRx[i] = 1;     
    });
  }
  
  async recordingAudioStart(i: number){
    if(this.recordingAudio){return;}
    this.recordingAudio=true;
    this.startRecording();
   
  }

  async recordingAudioStop(i:number){
    this.recordingAudio=false;
    this.stopRecording(i);
  }

  async checkPermissions() :Promise<boolean> {
    try {
      const checkPermissionsResult = await Microphone.checkPermissions();
      console.log('checkPermissionsResult: ' + JSON.stringify(checkPermissionsResult));
      return true;
    } catch (error) {
      console.error('checkPermissions Error: ' + JSON.stringify(error));
    }
  }

  async requestPermissions() {
    try {
      const requestPermissionsResult = await Microphone.requestPermissions();
      console.log('requestPermissionsResult: ' + JSON.stringify(requestPermissionsResult));
    } catch (error) {
      console.error('requestPermissions Error: ' + JSON.stringify(error));
    }
  }

  async startRecording() {
    try {
      this.duration=0;
      const startRecordingResult = " ";
      if(this.recording){return;     }
        this.recording=true;
        VoiceRecorder.startRecording();
        this.calculateDuration();
      console.log('startRecordingResult: ' + JSON.stringify(startRecordingResult));
    } catch (error) {
      console.error('startRecordingResult Error: ' + JSON.stringify(error));
    }

  }

  async stopRecording(i: number) {
    await this.bedIdSubscription(i);
    try {
      let recordedMessage="";
      this.recording=false;
      VoiceRecorder.stopRecording().then(
      async (result: RecordingData) => {
        if(result.value&&result.value.recordDataBase64){
          recordedMessage = result.value.recordDataBase64;  
          let a= new MessageModel(this.localNurse.username,(recordedMessage),  this.bedId, 22);                
          let mqttmessage=JSON.stringify(a);          
          let topic="/User/"+this.MDT[i].userID+"/questions/"+this.bedId;
          this.MQTTServ.sendMesagge(topic, mqttmessage);
          
        };})         
      
     console.log("*************************************************************************************************************"); 

    } catch (error) {
      console.error('recordingResult Error: ' + JSON.stringify(error));
    }
  
  }

  

calculateDuration(){
  if(!this.recording){this.duration=0;return;}  
  this.duration+=1;
  setTimeout(()=>{
  this.calculateDuration();
  },1000);
}  


  public async readFilePath (PATH: string ): Promise<string> {
    // Here's an example of reading a file with a full file path. Use this to
    // read binary data (base64 encoded) from plugins that return File URIs, such as
    // the Camera.
    const contents = await Filesystem.readFile({
      path: PATH
    });
  
    console.log('data:', contents);
    return contents.toString();
  };

  async openMedicalTable(){
    if(this.MDT.length==0){
    await this.getMedicalTable();}

    this.showNotes=false;
    this.showMedical=true;
    this.showMemoria=false;
  }

  async openNotesTable(){    
    await this.getPatientInformation();
    if(this.notes.length==0){
    await this.getNotes();}
    this.showNotes=true;
    this.showMedical=false;
    this.showMemoria=false;
  }

  async openMemoria(){    
    await this.getPatientInformation();
    if(this.notes.length==0){
    await this.getNotes();}
    this.showNotes=false;
    this.showMedical=false;
    this.showMemoria=true;
  }
/**
 * Functions that play a string in system
 * 
 */

  async playString(data: string){
    
    const base64Sound=data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }
/**
 * enabling manualQr
 */
  toggleManualQR(){
    if(!this.manualQR){
      this.manualQR=true;
    }
    else{this.manualQR=false}
  }


  //sending qr information for system notification
  async sendQr(){
    console.log("QR:"+this.textQR)
    let a=new MessageModel(this.nurseName,JSON.stringify(this.textQR),  this.bedId, 11);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/Beds/"+this.bedId+"/QR";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
  }
  updatingTextQR(i:string){
    this.textQR=i;
  }

  async Help(){
    this.eventsUnsubscription();        
    let a=new MessageModel(this.nurseName," ",  this.bedId, 14);    
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    this.MQTTServ.sendMesagge(topic, mqttmessage);              
    console.log("asking for help")    
  }

  writeToggle(){
    if(!this.writeText){
      this.writeText=true;
    }
    else{
      this.writeText=false;
    }
  }
}

