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
import { bedStats } from 'src/app/models/bed-status';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.page.html',
  styleUrls: ['./doctor-main.page.scss'],
})
export class DoctorMainPage implements OnInit {
  private  localDoctor: User= new User(0,"","","","",0,"");
  private bedlocal: Bed = new Bed(0,0,0,0);
  private doctorId: number;
  private doctorName: string;
  private patientNumber: number;
  private newMessage=false;
  private messages: Array<MessageModel> = new Array;
  messagesbeds: Array<bedStats> = new Array;
  messagesbedsfiltered: Array<string> = new Array;      
  private patientTable: Array<PatientsTable> = new Array;
  private textResponse: string=""  ;
  private recording = false;
  private duration= 0;
  private patientActivated=false
  private viewMode=0
  
  //storedFileNames=[];
  bedstates = ["Desocupada","Descansando","Llamando","Por ser atendido","Siendo atendido","Llamada programada","Solicito Ayuda"]
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,        
    public MQTTServ:MqttService,
    public userServ: UserService
    ) { 
    //this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
    this.newMessage==false;
    
  }

  async ngOnInit() {
   VoiceRecorder.requestAudioRecordingPermission(); 
   this.newMessage==false;
   await this.getParams();
   await this.getBeds();
   //subscription for audio
   //await this.subscribe();
   //await this.waiting(); 
   await this.eventsSubscription();
   
   
  }
  onClickPatientNote(id:number){    
    this.router.navigate(['/doctor-patients/'+this.patientNumber]);        
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
          this.patientTable.push(element);
        });
        //this.patientTable=localMessage;
        console.log(JSON.stringify(this.patientTable))
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
       // console.log(JSON.stringify(this.pacientTable=localMessage));
        this.MQTTServ.sendMesagge(responseInfoTopic, "");
       this.listenMessages();
      }
        
      })    

   // console.log("Doctor logged id:"+this.localDoctor.userId)  
    let a=new MessageModel(this.localDoctor.username,JSON.stringify(this.localDoctor.userId),  0, 9);    
   // console.log(a)
    let mqttmessage=JSON.stringify(a);
   // console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  }

/**
   * Subscription for receiving messages
   * of the status of the beds   
   */
 eventsSubscription(){
    
  let topic="/Beds/status";
  let receivedMessage;
  console.log("status subscribed")
  this.MQTTServ.MQTTClientLocal.subscribe(topic).on(async Message=>{
  //  console.log("received")
  //  console.log(Message.string);            
  let localMessage = JSON.parse(Message.string);      
  let local2=Message.string;
  //console.log(localMessage[0].message);    
  this.messagesbeds=[];
  this.messagesbedsfiltered=[];
  if(this.viewMode==2){
    await localMessage.forEach(element => {      
      {     
            this.patientTable.forEach(patientT => {          
              if(element.id==patientT.bedId)  {
                console.log("find")
                let local={'bedId':patientT.bedId,'pacientId':patientT.pacientId,'st':element.st}
                let localj=JSON.parse((JSON.stringify(local)))
                
                this.messagesbedsfiltered.push(localj);             
                }
                })
      
        }
      }
    );
   } 

  
  });
}

  /**
   * logout
   */
   public logout(){
    console.log("logging out");
    console.log("name:"+this.localDoctor.username);
   let question="logout";
      
   let a=new MessageModel(this.localDoctor.username, question, 0, 2);    
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
 * @param 
 */
    public async listenMessages(){
   // console.log("El usuario es:"+this.localDoctor.userId)
    //
    //console.log("aqui:"+this.pacientTable.length)
    let topic="/User/"+this.localDoctor.userId+"/questions/";

    this.patientTable.forEach(element => {
    //console.log(JSON.stringify(element)) ; 
    topic="/User/"+this.localDoctor.userId+"/questions/"+element.bedId;
    console.log("topic: "+topic)    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(topic+"#");}      
        //console.log("respuestaSystem2:  "+localMessage[0].lastName);
        console.log("here doc listening");       
                    
        let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._type);
          console.log("Recibido por doc");
          
          this.messages.push(receivedMessage);    
          this.newMessage=true;        
          //this.MQTTServ.sendMesagge(topic, " ");  
      })
      
    });
    
   
  }

  onChangeText(text:string){
    this.textResponse=text;
    //console.log(this.textResponse);
  }

  sendResponseText(id:number){
    //console.log((this.patientTable[id].pacientId));
    let topic="/User/"+this.localDoctor.userId+"/answers/"+id;
    console.log(topic);
    let a=new MessageModel(this.localDoctor.username,this.textResponse, id, 7);    
    let mqttmessage=JSON.stringify(a);
    console.log("sending:",mqttmessage);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);  
    this.messages.splice(id,1);  
  }
  sendAudioText(response:string, id:number){
    let topic="/User/"+this.localDoctor.userId+"/answers/"+id;
    let a=new MessageModel(this.localDoctor.username,response,  this.patientTable[id].bedId, 27);    
    let mqttmessage=JSON.stringify(a);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);
  }

  upgradingPatientNumber(id:number){
    this.patientNumber=id;
    this.patientActivated=true;
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
  console.log("startin recording")  
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
async stopRecording( id:number) {
  console.log("stopping recording")
  let topic="/User/"+this.localDoctor.userId+"/answers/"+id;
  
  this.recording=false;
  VoiceRecorder.stopRecording().then(
    async (result: RecordingData) => {
      if(result.value&&result.value.recordDataBase64){
        console.log("sending recording")
        const recorData = result.value.recordDataBase64;        
        let a=new MessageModel(this.localDoctor.username,result.value.recordDataBase64,  id, 22);    
          let mqttmessage=JSON.stringify(a);    
         await this.MQTTServ.sendMesagge(topic, mqttmessage);
          console.log("recording sent")
      };
      }
    
  );
}

async enablingPatientMonitoring(){
  this.viewMode=2;
}
async enablingNotes(){
  this.viewMode=1;
}
async enablingListen(){
  this.viewMode=3;
}
 
async deleteMsg(id:number){
  this.messages.splice(id, 1);
  //console.log("mensajes:"+this.messages.length);
  if(this.messages.length<1){
    console.log("no hay mensajes para responder")
    this.newMessage=false;
  }
}

}
