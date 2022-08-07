import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Bed } from '../models/bed';
import { PacientsTable } from '../models/pacientsTable';
import { BedsService } from '../services/beds.service';
import { MessageModel } from '../models/message-model';
import { MqttService } from '../services/mqtt.service';
import { App } from '@capacitor/app';

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
  newMessage=false;
  messages: Array<MessageModel> = new Array;
  pacientTable: Array<PacientsTable> = new Array;

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
   await this.getParams();
   await this.getBeds();
   
    
  }
  onClickPacientNote(id:number){    
    this.router.navigate(['/doctor-pacients/'+this.doctorId]);        
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
    * getting list of pacients and beds
    */
    
    async getBeds() {
   // console.log("Doctor logged:"+this.localDoctor.username)    
   // console.log("Doctor logged:"+this.localDoctor.userId) 
    let  responseInfoTopic="/User/"+this.localDoctor.userId+"/Beds";
    await this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}              
        else{
        //console.log(localMessage);
        /*localMessage.forEach(element => {
          this.pacientTable.push(element);
        });*/
        this.pacientTable=localMessage;
        
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
       // console.log(JSON.stringify(this.pacientTable=localMessage));
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
   logout(){
    console.log("logging out");
    console.log("name:"+this.localDoctor.username);
   let question="logout";
      
   let a=new MessageModel(this.localDoctor.username, question, 0, "",2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
  // console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   
   App.exitApp();   //this will close all services
   //this.router.navigate(['/home/']);     
   

   
  }
  /**
 * go to general chat
 */
   public goChat(){
    /*   this.router.navigate(['/chat/]);        */
    this.bedlocal.setBedId(0);
    this.router.navigate(['/chat/']);        
      }

  

  /**
 * 
 * @param topic this will subscribe to a general messaging stack
 */
    public async listenMessages(){
   // console.log("El usuario es:"+this.localDoctor.userId)
    console.log("escuchando")
    console.log("aqui:"+this.pacientTable.length)
    let topic="/User/"+this.localDoctor.userId+"/questions/";

    this.pacientTable.forEach(element => {
    console.log(JSON.stringify(element)) ; 
    topic="/User/"+this.localDoctor.userId+"/questions/"+element.pacientId;
    console.log("topic: "+topic)    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(topic+"#");}      
        //console.log("respuestaSystem2:  "+localMessage[0].lastName);
        console.log("here doc listening");
        this.MQTTServ.MQTTClientLocal.onMessage(topic, Message=>{
          let localMessage = JSON.parse(Message.string);      
            
          let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._time,localMessage._type);
          console.log("Recibido por doc");
          
          this.messages.push(receivedMessage);    
          this.newMessage=true;          
      });})
      
    });
    
   
  }

}
