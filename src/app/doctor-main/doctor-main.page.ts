import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Bed } from '../models/bed';
import { PacientsTable } from '../models/pacientsTable';
import { BedsService } from '../services/beds.service';
import { MessageModel } from '../models/message-model';
import { MqttService } from '../services/mqtt.service';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.page.html',
  styleUrls: ['./doctor-main.page.scss'],
})
export class DoctorMainPage implements OnInit {
  localDoctor: User= new User(0,"","","","",0,"");
  localBed: Bed = new Bed(0,0,0,0);
  doctorId: number;
  doctorName: string;
  pacientNumber: number;
  newMessage=false;
  messages: Array<MessageModel> = new Array;
  pacientTable: Array<PacientsTable> = new Array;
  textResponse: string=""  ;
  recording = false;
  duration= 0;
  pacientActivated=false
  storedFileNames=[];

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,
    public bedlocal: BedsService,
    public MQTTServ:MqttService,
    public userServ: UserService
    ) { 
    //this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
    
  }

  async ngOnInit() {
   VoiceRecorder.requestAudioRecordingPermission(); 

   await this.getParams();
   await this.getBeds();
   //subscription for audio
   //await this.subscribe();
   //await this.waiting(); 
   
   
  }
  onClickPacientNote(id:number){    
    this.router.navigate(['/doctor-pacients/'+this.pacientNumber]);        
  }
  onClickMessages(){    
    this.router.navigate(['/doctor-messages/'+this.doctorId]);        
  }
  /**
   * Getting the parameters of the user from the local storage
   */
   async getParams() {
    this.localDoctor=this.userServ.getUser();
    this.doctorName = this.localDoctor.username;
    
    
   }
   /***
    * for example
    */
  
  public async subscribe(){
  await this.MQTTServ.MQTTClientLocal.subscribe("/audio/recording");
  }
 
   /***
    * getting list of pacients and beds
    */
    
    async getBeds() {
    let  responseInfoTopic="/User/"+this.localDoctor.userId+"/Pacients";
    await this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}              
        else{
        //console.log(localMessage);
        localMessage.forEach(element => {
          this.pacientTable.push(element);
        });
        this.pacientTable=localMessage;
        console.log(JSON.stringify(this.pacientTable))
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
       // console.log(JSON.stringify(this.pacientTable=localMessage));
        this.MQTTServ.sendMesagge(responseInfoTopic, "");
       this.listenMessages();
      }
        
      })    

   // console.log("Doctor logged id:"+this.localDoctor.userId)  
    let a=new MessageModel(this.localDoctor.username,JSON.stringify(this.localDoctor.userId),  0, "0",9);    
   // console.log(a)
    let mqttmessage=JSON.stringify(a);
   // console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  }


  /**
   * logout
   */
   public logout(){
    console.log("logging out");
    console.log("name:"+this.localDoctor.username);
   let question="logout";
      
   let a=new MessageModel(this.localDoctor.username, question, 0, "",2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
  // console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   
   //App.exitApp();   //this will close all services
   this.router.navigate(['/home/']);     
   

   
  }

  

  /**
 * 
 * @param topic this will subscribe to a general messaging stack
 */
    public async listenMessages(){
   // console.log("El usuario es:"+this.localDoctor.userId)
    //
    //console.log("aqui:"+this.pacientTable.length)
    let topic="/User/"+this.localDoctor.userId+"/questions/";

    this.pacientTable.forEach(element => {
    //console.log(JSON.stringify(element)) ; 
    topic="/User/"+this.localDoctor.userId+"/questions/"+element.pacientId;
    console.log("topic: "+topic)    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(topic+"#");}      
        //console.log("respuestaSystem2:  "+localMessage[0].lastName);
        console.log("here doc listening");       
                    
        let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._time,localMessage._type);
          console.log("Recibido por doc");
          
          this.messages.push(receivedMessage);    
          this.newMessage=true;        
          this.MQTTServ.sendMesagge(topic, "");  
      })
      
    });
    
   
  }

  onChangeText(text:string){
    this.textResponse=text;
    //console.log(this.textResponse);
  }

  sendResponseText(id:number){
    //console.log((this.pacientTable[id].pacientId));
    let topic="/User/"+this.localDoctor.userId+"/answers/"+this.pacientTable[id].pacientId;
    console.log(topic);
    let a=new MessageModel(this.localDoctor.username,this.textResponse,  this.pacientTable[id].bedId, "0",7);    
    let mqttmessage=JSON.stringify(a);
    console.log("sending:",mqttmessage);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);  
    this.messages.splice(id,1);  
  }
  sendAudioText(response:string, id:number){
    let topic="/User/"+this.localDoctor.userId+"/answers/"+this.pacientTable[id].pacientId;
    let a=new MessageModel(this.localDoctor.username,response,  this.pacientTable[id].bedId, "0",27);    
    let mqttmessage=JSON.stringify(a);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);
  }

  upgradingPacientNumber(id:number){
    this.pacientNumber=id;
    this.pacientActivated=true;
  }


  async playFile(fileName: string){
    const audioFile= await Filesystem.readFile({
      path: 'audios/'+fileName,
      directory: Directory.Documents//Data
    })
    const base64Sound=audioFile.data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }

  async playString(data: string){
    
    const base64Sound=data;
    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }

/**
 * recording audio
 */
 startRecording() {
    
  if(this.recording){return;     }
  this.recording=true;
  VoiceRecorder.startRecording();
  this.calculateDuration();
}

calculateDuration(){
  if(!this.recording){this.duration=0;return;}  
  this.duration+=1;
  setTimeout(()=>{
  this.calculateDuration();
  },1000);
}  
stopRecording( id:number) {
  let topic="/User/"+this.localDoctor.userId+"/answers/"+this.pacientTable[id].pacientId;
  
  this.recording=false;
  VoiceRecorder.stopRecording().then(
    async (result: RecordingData) => {
      if(result.value&&result.value.recordDataBase64){
        const recorData = result.value.recordDataBase64;        
        let a=new MessageModel(this.localDoctor.username,result.value.recordDataBase64,  this.pacientTable[id].bedId, "0",27);    
          let mqttmessage=JSON.stringify(a);    
          this.MQTTServ.sendMesagge(topic, mqttmessage);
      };
           
        
      }
    
  );
}
}
