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
  private textToSend: Array<string> = new Array;
  private RxText: Array<string> = new Array;
  private MDT: Array<MedicalTable> = new Array;
  private showNotes = false;
  private pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);
  private QRCapture = false;
  private inRoom =false;
  private asking = false;
  private actionFinished= false;
  private recordingAudio=false;
  private canRecord=false;
  messages: Array<MessageModel> = new Array;

  recording: AudioRecording;
  webPaths = [];
  dataUrls = [];


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
    this.getParams();
    this.eventsSubscription();//getting status of the bed

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
   * Get the pacient information 
   */
  async getParams() {    
    this.localNurse=this.userlogged.getUser();
    this.nurseName=this.localNurse.username;    
    let responseNoteTopic="/Beds/"+this.bedId+"/Pacient";  

    //cleaning
    this.MDT=[];
    

    this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
      //console.log("SystemResponse:  "+Message.toString());
      let localMessage = JSON.parse(Message.string);
      let pacient1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      //console.log("pacientId:"+ pacient1.pacientId);
      this.pacientLocal.id=pacient1.pacientId;

      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      }      
      //console.log("Pacient received")
    });
    

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
          console.log(JSON.stringify(element));
          let MDTLocal2: MedicalTable= new MedicalTable(element.lastname,element.userId);
          this.MDT.push(MDTLocal2); 
          this.msg.push(0); 
          this.msgRx.push(0);
          this.textToSend.push(""); 
          this.RxText.push(""); 
        });
        
      }      
      console.log("mdt received")
    });

    let topic="/User/general";
    let b=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId, "0",10);
    let mqttmessage=JSON.stringify(b);    
    let c=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  this.bedId, "0",17);
    let mqttmessage2=JSON.stringify(c);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage2);
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.MQTTServ.MQTTClientLocal.unsubscribe(responseMDTTopic);
    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);

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
    //console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    console.log(localMessage[0].message);    
    this.messages=[];
    
    localMessage.forEach(element => {      
      {        
      receivedMessage = new MessageModel("","",element.id,"",element.st);
      console.log("element id:"+element.id+"| element st:"+element.st);  
      //console.log("here Id:"+this.bedlocal.getBedId())          ;
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
  async onClick() {
    let local=this.bedId;
   // this.pacientLocal.id=this.bedId;
    this.notes.splice(0);    
    console.log(local);
    
    //this.showNotes = true;
    //this.pacientServ.oneAsk(local.pacientNumber);
  
   let responseNoteTopic="/Pacient/"+this.pacientLocal.id+"/notes";  
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
    let b=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",5);
    mqttmessage=JSON.stringify(b);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  
    this.showNotes=true;    
  
   }
/**
 * Got to pacient char for asking aditional information
 */

   public async goChat(){
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
    /*   this.router.navigate(['/chat/]);        */
     this.router.navigate(['/nurse-qr']);        
      }
 /**
 * Ending notification
 */
  public async goEnd(){
    /*   this.router.navigate(['/chat/]);        */
    let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",13);    
    console.log(a)
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
    //this.bedIdSubscription();
    
    var time= new Date();
    //let value2= (time.getHours()).toString+":"+ (time.getMinutes()).toString();
    let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    //console.log(value);
    //let value="12:24";
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
    if(this.canRecord){
      this.startRecording();
    }
  }

  async recordingAudioStop(i:number){
    this.recordingAudio=false;
    this.stopRecording();
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
      const startRecordingResult = await Microphone.startRecording();
      console.log('startRecordingResult: ' + JSON.stringify(startRecordingResult));
    } catch (error) {
      console.error('startRecordingResult Error: ' + JSON.stringify(error));
    }

  }

  async stopRecording() {
    try {
      this.recording = await Microphone.stopRecording();
      console.log('recording: ' + JSON.stringify(this.recording));
      console.log('recording.dataUrl: ' + JSON.stringify(this.recording.dataUrl));
      console.log('recording.duration: ' + JSON.stringify(this.recording.duration));
      console.log('recording.format: ' + JSON.stringify(this.recording.format));
      console.log('recording.mimeType: ' + JSON.stringify(this.recording.mimeType));
      console.log('recording.path: ' + JSON.stringify(this.recording.path));
      console.log('recording.webPath: ' + JSON.stringify(this.recording.webPath));
      this.webPaths.push(this.recording.webPath);
      this.dataUrls.push(this.recording.dataUrl);
    } catch (error) {
      console.error('recordingResult Error: ' + JSON.stringify(error));
    }
  
  }


}
