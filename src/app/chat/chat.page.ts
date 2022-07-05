import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { MqttService } from '../services/mqtt.service';
import { MessageModel } from '../models/message-model';
import { ActivatedRoute } from '@angular/router';
import { json } from 'express';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  usernameLocal: string;
  bedId: number;
  question: string;
  messages: Array<MessageModel> = new Array;

  counts :number = 0;
  

  constructor(private activatedRoute: ActivatedRoute,public MQTTServ:MqttService,public localSto: LocalStorageService) { 
    
    this.bedId=0;
  }

  ngOnInit() {
    this.getParams();
    this.bedId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    console.log(this.bedId);
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
    let { value } = await Storage.get({ key: 'username' });      
    this.usernameLocal=value.toString();
    console.log(this.usernameLocal);
  }


  /**
   * Sending the question to the system
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
    let a=new MessageModel(this.usernameLocal,question,  this.bedId, value);
    
    let mqttmessage=JSON.stringify(a);
    let topic="/bed/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);

    this.question="";
  }
  /**
   * Record and send a sound message
   */
  record(){
    this.question="grabando audio";    
    var time= new Date();
    let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();;
    let a=new MessageModel(this.usernameLocal,this.question,  this.bedId, value);    
    let mqttmessage=JSON.stringify(a);
    let topic="/bed/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.question="";
    
  }

  /**
   * Closing the comunication
   */
  finish(){
    this.question="terminando";
    var time= new Date();
    let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();
    let a=new MessageModel(this.usernameLocal,this.question,  this.bedId, value);    
    let mqttmessage=(a).toString();
    let topic="/bed/"+this.bedId+"/chat/";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.question="";
    this.MQTTServ.closingAll(topic);

  }

  /**
   * Subscription for receiving messages
   */
  bedIdSubscription(){
    let topic="/bed/"+this.bedId+"/chat/";
    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    let localMessage = JSON.parse(Message.string);      
      
    let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._time);
    
    if((this.messages[this.messages.length - 1])!==receivedMessage){   
    this.messages.push(receivedMessage);    
    }
    //this.messages[0]=receivedMessage;
    
    });
  }
  

}
