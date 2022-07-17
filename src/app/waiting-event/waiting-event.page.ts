import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from '../models/message-model';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-waiting-event',
  templateUrl: './waiting-event.page.html',
  styleUrls: ['./waiting-event.page.scss'],
})
export class WaitingEventPage implements OnInit {
  usernameLocal: string;
  bedId: number;
  messages: Array<MessageModel> = new Array;

  constructor(private activatedRoute: ActivatedRoute,public MQTTServ:MqttService,public localSto: LocalStorageService,private router:Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.eventsSubscription();
    },600);
  }

  /**
   * Subscription for receiving messages
   * kind of messages waiting for: {"_bedId":2,"_content":"alert","_time":"today","_username":"system"}
   * It is only used the bedId parameter
   */
   eventsSubscription(){
    let topic="/Beds/caller-events";
    
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    let localMessage = JSON.parse(Message.string);      
      
    let receivedMessage = new MessageModel(localMessage._username,localMessage._content,localMessage._bedId,localMessage._time,localMessage._type);
  
    
    this.messages.push(receivedMessage);    
    console.log(receivedMessage);  
    //this.messages[0]=receivedMessage;
  
    });
  }
  onClick(i:number){
    this.router.navigate(['/chat']);        
  }
}
