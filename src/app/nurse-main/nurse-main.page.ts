import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { PacientService } from '../services/pacient.service';
import { Storage } from '@capacitor/storage';
import { Note } from '../models/note';
import { MessageModel } from '../models/message-model';
import { Pacient } from '../models/pacient';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';
import { MedicalTable } from '../models/MedicalTable';
import { Platform } from '@ionic/angular';
import { AudioRecording, Microphone } from '@mozartec/capacitor-microphone';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';



@Component({
  selector: 'app-nurse-main',
  templateUrl: './nurse-main.page.html',
  styleUrls: ['./nurse-main.page.scss'],
})
export class NurseMainPage implements OnInit {
  private localNurse: User= new User(0,"","","","",0,"");
  private bedId = 0;
  private nurseName=" ";
  private nurseId=0;
  private notes: Array<Note> = new Array;
  private msg: Array<number> = new Array;
  private msgRx: Array<number> = new Array;
  private audio: Array<number> = new Array;
  private audioRx: Array<number> = new Array;
  private textToSend: Array<string> = new Array;
  private RxText: Array<string> = new Array;
  private MDT: Array<MedicalTable> = new Array;
  
  private pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);
  private QRCapture = false;
  private inRoom =false;

  private showNotes = false;
  private showMedical = false;
  private asking = false;
  
  private actionFinished= false;
  private recordingAudio=false;
  recording = false;
  private canRecord=false;
  duration=0;
  
  messages: Array<MessageModel> = new Array;

  


  constructor(private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private router:Router,
    private platform: Platform
    ) {
    this.bedId = bedlocal.getBedId();
    this.actionFinished=false;
    this.recordingAudio=false;
   
   }

  async ngOnInit() {
    await this.getParams();
    console.log("pacientID onInit:"+this.pacientLocal.id)
    
    await this.eventsSubscription();//getting status of the bed
    

    //permissions for recording
    await this.platform.ready().then(() => {
      if (this.platform.is('android')) {
           console.log('android');
      } else if (this.platform.is('ios')) {
           console.log('ios');
      } else {
           //fallback to browser APIs or
           console.log('The platform is not supported');
             }
      });

      if(this.platform.is('android') || this.platform.is('ios'))
      {
        this.canRecord=true;
        console.log("puedo capturar")   
        console.log("check permisions on android")
      const state=await this.checkPermissions();
      if((state)== true){
        console.log(" permisos correctos");
        return;}
      else{
        alert("Permission denied");
          }    
         
      }
      else{
        this.canRecord=false;
        console.log("no puedo capturar")
      }
    
  


  }

  /**
   * Get the pacient id
   */
  async getParams() {    
    this.localNurse=this.userlogged.getUser();
    this.nurseName=this.localNurse.username;    
    let responseInfoTopic="/Beds/"+this.bedId+"/Pacient";  
    console.log("asking on pacient info:  "+responseInfoTopic.toString());
    //cleaning
    this.MDT=[];
    

    this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      console.log("SystemResponse on pacient info:  "+Message.toString());
      let localMessage = JSON.parse(Message.string);
      let pacient1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      //console.log("pacientId:"+ pacient1.pacientId);
      this.pacientLocal.id=pacient1.pacientId;
      console.log(JSON.stringify(this.pacientLocal))
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
      }      
      console.log("Pacient received")
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
    });
    
    let topic="/User/general";
    let b=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId, "0",10);
    let mqttmessage=JSON.stringify(b);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
    
  }

  /**
   * getting pacient information
   */
   async getPacientInformation(){
   console.log("Pacient:"+this.pacientLocal.id);
   let responseInfoTopic="/Pacient/"+this.pacientLocal.id+"/info";  
   this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
       let localMessage = JSON.parse(Message.string);
       if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}      
       //console.log("respuestaSystem2:  "+localMessage[0].lastName);
       this.pacientLocal.lastName = localMessage[0].lastName;
       this.pacientLocal.firstName = localMessage[0].firstName;      
       this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
     })  

    let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",4);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);

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

    /*asking for pacient's doctors */
    console.log("MDT bedId:"+this.bedId)
    let responseMDTTopic="/Beds/"+this.bedId+"/MDT";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseMDTTopic).on(Message=>{
      //console.log("SystemResponse:  "+Message.toString());
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
          this.audio.push(0); 
          this.audioRx.push(0);
          this.textToSend.push(""); 
          this.RxText.push(""); 
        });
        
      }      
      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      console.log("mdt received")
    });

    let topic="/User/general";    
    let c=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId, "0",17);
    let mqttmessage2=JSON.stringify(c);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage2);
    

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
    let local2=Message.string;
    console.log(localMessage[0].message);    
    this.messages=[];
    
    localMessage.forEach(element => {      
      {        
      receivedMessage = new MessageModel("","",element.id,"",element.st);
      console.log("element id:"+element.id+"| element st:"+element.st);        
       if(parseInt(element.id)==(this.bedId)){
        console.log("Here")
        if(element.st==4){this.inRoom=true;}
        else{this.inRoom=false}
      }
     }
    });
    
  //check status of this bed;
    });
  }

  /**
   * Get the pacient Notes 
   */
  async getNotes() {
    let local=this.bedId;
   
    this.notes.splice(0);    
    console.log("***********************************************************");
    console.log("***********gettin notes****************************");
    
  console.log("pacientID:"+this.pacientLocal.id)
   let responseNoteTopic="/Pacient/"+this.pacientLocal.id+"/notes";  
     await  this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
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
    let b=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",5);
    let mqttmessage=JSON.stringify(b);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  
    
  
   }


/**
 * Got to pacient char for asking aditional information
 */

   public async goChat(i: number){
    this.router.navigate(['/chat/']);
    
 /*   this.router.navigate(['/chat/]);        */
 /*
   let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",14);    
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
     this.router.navigate(['/nurse-qr']);        
      }
 
 /**
 * Got to Cancelling the response to call
 */
  public async Quit(){
    let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",19);    
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
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
    let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",13);    
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
     this.router.navigate(['/waiting-event/']);        
     this.inRoom=false;  
     this.actionFinished=true;
    }
  
  
  /**
   * Sending the question to the system : command type 17
   */
   askToDoctor(question:string, doctorId: number){
    
    
    var time= new Date();
    
    let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    
    let a=new MessageModel(this.localNurse.username,question,  this.bedId, value,7);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/User/"+doctorId+"/questions/"+this.pacientLocal.pacientId;
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
    let a= new MessageModel(this.localNurse.username,this.textToSend[i],  this.bedId, "0",7);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/User/"+this.MDT[i].userID+"/questions/"+this.bedId;
    this.MQTTServ.sendMesagge(topic, mqttmessage);

   // this.msg[i]=0;
  }
  updatingText(i:number,s:string){
    this.textToSend[i]=s;
 //   console.log("MSG new:"+this.textToSend[i])
  }

  /**
   * Subscription for receiving messages
   */
   async bedIdSubscription(i: number){
    
    let topic="/User/"+this.MDT[i].userID+"/answers/"+this.bedId;
    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    //console.log("recibido:"+JSON.stringify(Message.string))  
    let localMessage= JSON.stringify(Message.string);
    let parsedMessage = JSON.parse(Message.string);      
    console.log("recibido1:"+ JSON.stringify(parsedMessage._content)) ;
    console.log("recibido:"+parsedMessage._content) ;
    
        
    this.RxText[i]= (parsedMessage._content);   
    this.msgRx[i] = 1;     
    });
  }
  
  async recordingAudioStart(i: number){
    if(this.recordingAudio==true){return;}
    this.recordingAudio=true;
   // if(this.canRecord){
      this.startRecording();
    //}
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
    try {
      let recordedMessage="";
      this.recording=false;
      VoiceRecorder.stopRecording().then(
      async (result: RecordingData) => {
        if(result.value&&result.value.recordDataBase64){
          recordedMessage = result.value.recordDataBase64;  
          let a= new MessageModel(this.localNurse.username,(recordedMessage),  this.bedId, "0",22);                
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
  }

  async openNotesTable(){    
    await this.getPacientInformation();
    if(this.notes.length==0){
    await this.getNotes();}
    this.showNotes=true;
    this.showMedical=false;
  }
}

