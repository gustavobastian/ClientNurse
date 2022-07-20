import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from '../models/message-model';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-waiting-event',
  templateUrl: './waiting-event.page.html',
  styleUrls: ['./waiting-event.page.scss'],
})
export class WaitingEventPage implements OnInit {
  localNurse: User= new User( 0,"","","","",0,"");
  usernameLocal: string;
  bedId: number;
  messages: Array<MessageModel> = new Array;

  constructor(private activatedRoute: ActivatedRoute,
    public MQTTServ:MqttService,
    public localSto: LocalStorageService,
    private router:Router,
    public localBed: BedsService,
    public userLogged:UserService) { }

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
  /**
   * Accepting a bed call... and moving to the bed
   * @param i beds number 
   */
  onClick(i:number){
    this.localBed.setBedId(i);    
    this.router.navigate(['/nurse-main/:'+i]);        
  }
  /**
   * asking for bed information
   * @param i beds number
   */
  onClick2(i:number){    
    this.localBed.setBedId(i);
    //console.log("habitacion:"+i);        
    this.router.navigate(['/nurse-bed/:'+i]);        
  }

}
