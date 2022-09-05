import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MessageModel } from '../models/message-model';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { PacientService } from '../services/pacient.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.page.html',
  styleUrls: ['./admin-main.page.scss'],
})
export class AdminMainPage implements OnInit {
  userLocal: User= new User(0,"","","","",0,"");
  userLocalName=" ";

  messages: Array<MessageModel> = new Array;
  bedstates = ["Desocupada","Ocupada","Llamando","Por ser atendida","Siendo atendida","Llamada programada"]
  userstates=["no Logeado","Logeado"]
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
