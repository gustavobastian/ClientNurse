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
    this.localNurse=this.userLogged.getUser();
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
    //let topic="/Beds/caller-events";
    let topic="/Beds/status";
    let receivedMessage;
    console.log("subscribed")
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
      console.log("received")
      console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    console.log(localMessage[0].message);    
    this.messages=[];
    localMessage.forEach(element => {      
      {        
      receivedMessage = new MessageModel("","",element.id,"",element.st);
      this.messages.push(receivedMessage);
     }
    });
    
  
    });
  }


  /**
   * Accepting a bed call... and moving to the bed
   * @param i beds number 
   */
  onClick(i:number){
    this.localBed.setBedId(i);    
    this.router.navigate(['/nurse-main/:'+i]);
    let topic="/Beds/status";   
    this.MQTTServ.MQTTClientLocal.unsubscribe(topic)        
  }
  /**
   * asking for bed information
   * @param i beds number
   */
  onClick2(i:number){    
    this.localBed.setBedId(i);
    //console.log("habitacion:"+i);   
    let topic="/Beds/status";   
    this.MQTTServ.MQTTClientLocal.unsubscribe(topic)  
    this.router.navigate(['/nurse-bed/:'+i]);        
  }


  /**
   * logout
   */
  logout(){
    console.log("logging out");
    console.log("name:"+this.localNurse.username);
   let question="logout";
      
   let a=new MessageModel(this.localNurse.username, question, 0, "",2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
   console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   
   
     this.router.navigate(['/home/']);        

   
  }
}
