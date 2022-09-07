import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bed } from '../models/bed';
import { bedStats } from '../models/bed-status';
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
  bed : Bed = new Bed( 0,0,0,0,);
  bedId: number;
  messages: Array<MessageModel> = new Array;
  messagesbeds: Array<bedStats> = new Array;
  calendarNotes : string;
  

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
   * of the status of the beds   
   */
   eventsSubscription(){
    
    let topic="/Beds/status";
    let receivedMessage;
    console.log("subscribed")
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
    //  console.log("received")
    //  console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    //console.log(localMessage[0].message);    
    this.messages=[];
    localMessage.forEach(element => {      
      {
       let localBedStatus= new bedStats(element.id,element.st)        
       this.messagesbeds.push(localBedStatus);
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
  public async onClick(i:number){
    this.localBed.setBedId(i);
    this.bed.bedId = i;    
    this.router.navigate(['/nurse-main/:'+i]);
    let topic="/Beds/status";   
    
    
    let a=new MessageModel(this.localNurse.username,"",  this.bed.bedId, "0",12);    
    //console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);        
  }
  /**
   * asking for bed information
   * @param i beds number
   */
  onClick2(i:number){    
    this.localBed.setBedId(i);
   
    this.router.navigate(['/nurse-bed/:'+i]);        
  }
  /**
   * asking for Calendar Notes information
   * @param i beds number
   */
   onClick3(i:number){    
    /*this.localBed.setBedId(i);
   
    this.router.navigate(['/nurse-bed/:'+i]);        */
    console.log(i);
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
   topic="/Beds/status";   
   
   
   this.router.navigate(['/home/']);        

   
  }
/**
 * go to general chat
 */
  public goChat(){
    /*   this.router.navigate(['/chat/]);        */
    this.localBed.setBedId(0);
    this.router.navigate(['/chat/']);        
      }
}
