import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { MqttService } from '../services/mqtt.service';
import { MessageModel } from '../models/message-model';
import { ActivatedRoute, Router } from '@angular/router';
import { json } from 'express';
import { UserService } from '../services/user.service';
import { BedsService } from '../services/beds.service';
import { User } from '../models/user';
import { Bed } from '../models/bed';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  localUser: User= new User(0,"","","","",0,"");
  localBed: Bed = new Bed(0,0,0,0);

  usernameLocal: string;
  bedId: number;
  question: string;
  messages: Array<MessageModel> = new Array;

  counts :number = 0;
  

  constructor(private activatedRoute: ActivatedRoute,
    public MQTTServ:MqttService,
    public localSto: LocalStorageService,
    public userServ: UserService,
    private router:Router,
    public bedlocal: BedsService
    ) { 
    
    //this.bedId=0;
  }

  ngOnInit() {
    this.getParams();
  //  this.bedId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.localBed.bedId= this.bedlocal.getBedId();
    this.bedId =this.localBed.bedId;
    console.log("cama ::::"+this.bedId);
    if(this.bedId === 0)
    {console.log("cama 0");    
    }    
    if(Number.isNaN(this.bedId)==true)
    {console.log("cama 0");    
    this.bedId=0;
    }    
    setTimeout(()=>{
      this.bedIdSubscription();
    },600);
    
    //
  }


  /**
   * Getting the parameters of the user from the local storage
   */
  async getParams() {
    /*let { value } = await Storage.get({ key: 'username' });      
    this.usernameLocal=value.toString();
    console.log(this.usernameLocal);*/
    this.localUser= this.userServ.getUser();
    this.localBed.bedId= this.bedlocal.getBedId();

  }


  /**
   * Sending the question to the system : command type 7
   */
  ask(question:string){
    //this.bedIdSubscription();
    this.counts++;
    console.log("counts tx:"+this.counts);
    
    var time= new Date();
    //let value2= (time.getHours()).toString+":"+ (time.getMinutes()).toString();
    let value= time.getFullYear()+"/"+time.getMonth()+"/"+time.getDay() +"-"+(time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    //console.log(value);
    //let value="12:24";
    let a=new MessageModel(this.localUser.username,question,  this.bedId, value,7);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/Beds/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);

    this.question="";
  }
  /**
   * Record and send a sound message : command type 2
   */
  record(){
    this.question="grabando audio";    
    var time= new Date();
    let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    let a=new MessageModel(this.localUser.username,this.question,  this.bedId, value,1);    
    let mqttmessage=JSON.stringify(a);
    let topic="/Beds/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.question="";    
  }

  /**
   * Closing the comunication : command type: 6
   */
  finish(){
    this.question="terminando";
    var time= new Date();
    let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();
    let a=new MessageModel(this.localUser.username,this.question,  this.bedId, value,6);    
    let mqttmessage=(a).toString();
    let topic="/Beds/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.question="";
    //this.MQTTServ.closingAll(topic);
    if(this.localUser.occupation == "Medical"){
    this.router.navigate(['/doctor-messages/']);        
    }
    else{
      this.router.navigate(['/waiting-event/']);        
    }
  }

  /**
   * Subscription for receiving messages
   */
  bedIdSubscription(){
    let topic="/Beds/"+this.bedId+"/chat/";
    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    let localMessage = JSON.parse(Message.string);      
      
    let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._time,localMessage._type);
    
    if((this.messages[this.messages.length - 1])!==receivedMessage){   
    this.messages.push(receivedMessage);    
    }
    //this.messages[0]=receivedMessage;
    
    });
  }
  

}
