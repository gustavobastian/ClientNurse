import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { MessageModel } from '../../../models/message-model';
import { MqttService } from '../../../services/mqtt.service';
import { Bed } from '../../../models/bed';

@Component({
  selector: 'app-doctor-messages',
  templateUrl: './doctor-messages.page.html',
  styleUrls: ['./doctor-messages.page.scss'],
})
export class DoctorMessagesPage implements OnInit {  
  localDoctor : User = new User(0,"","","","",0,"");
  doctorId: number;
  doctorName: string;
  public BedLocal: Bed = new Bed(0,0,0,0);
  public messages: Array<MessageModel> = new Array;
  
  constructor(private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,    
    public bedlocal: BedsService,
    private router:Router,
    public MQTTServ:MqttService,
    public userServ: UserService
    ) { 
    this.doctorId = 0;
    this.doctorName="";
  }

  ngOnInit() {    
    this.localDoctor= this.userServ.getUser();
    this.doctorName=this.localDoctor.username;
    this.doctorId=this.localDoctor.userId;
    //this.BedLocal=this.bedS.getBed();
    this.eventsSubscription();
    
    }
    
    

  public goChat(i: string){
    /*   this.router.navigate(['/chat/]);        */
    console.log('cama:'+i);
    this.bedlocal.setBedId(parseInt(i));
    console.log('cama:'+i);
     this.router.navigate(['/chat/']);        
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
    
}
