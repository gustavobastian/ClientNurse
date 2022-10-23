import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { bedStats } from '../../../models/bed-status';
import { MessageModel } from '../../../models/message-model';
import { User } from '../../../models/user';
import { userStats } from '../../../models/user-status';
import { BedsService } from '../../../services/beds.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { PacientService } from '../../../services/patient.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.page.html',
  styleUrls: ['./admin-main.page.scss'],
})
export class AdminMainPage implements OnInit {
  userLocal: User= new User(0,"","","","",0,"");
  userLocalName=" ";

  
  messagesBeds2: Array<bedStats> = new Array;
  
  messagesUsers: Array<userStats> = new Array;

  bedstates = ["Desocupada","Ocupada","Llamando","Por ser atendida","Siendo atendida","Llamada programada","Solicita Ayuda"]
  userstates=["no Logeado","Logeado","Atendiendo"]
  showing="Users";

  constructor(
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private router:Router,
    public userServ: UserService,
    private platform: Platform
    ) { }

  async ngOnInit() {
    await this.getParams();
    setTimeout(()=>{
      this.eventsSubscription();
      this.usersSubscription();
    },600);
  }
/**
   * Getting the parameters of the user from the local storage
   */
 async getParams() {
  this.userLocal=this.userServ.getUser();
  this.userLocalName = this.userLocal.get_username();   
  console.log(JSON.stringify(this.userLocal))
 }

async onClickUsers(){
  console.log("clicked Users")
  this.showing="Users";
}

async onClickBeds(){
  console.log("clicked Beds")
  this.showing="Beds";
}
async onClickEvents(){
  console.log("clicked Events")
  this.showing="Events";
}

async onClickCalendar(){
  console.log("clicked calendar")
  this.showing="Calendar";
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
  
  this.messagesBeds2=[];
  localMessage.forEach(element => {      
    {        
    let bedStatsLocal=new bedStats(element.id,element.st,element.spec)  
    this.messagesBeds2.push(bedStatsLocal);
    
   }
  });
  

  });
}
usersSubscription(){
    
  let topic="/User/status";
  let receivedMessage;
  console.log("user subscribed")
  this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
   
  let localMessage = JSON.parse(Message.string);      
  let local2=Message.string;
  console.log(localMessage[0].message);    
  
  this.messagesUsers=[];
  localMessage.forEach(element => {      
    {        
    let userStatsLocal =  new userStats(element.id,element.st)
    this.messagesUsers.push(userStatsLocal);
    console.log(JSON.stringify(userStatsLocal))
  
   }
  });
  

  });
}


  /**
   * logout
   */
   public logout(){
    console.log("logging out");
    console.log("name:"+this.userLocal.username);
   let question="logout";
      
   let a=new MessageModel(this.userLocal.username, question, 0, 2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
  // console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   
   //App.exitApp();   //this will close all services
   this.router.navigate(['/home/']);     
   

   
  }


}
