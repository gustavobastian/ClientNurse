import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { nurseSpec } from 'src/app/models/nurse-specs';

import { Bed } from '../../../models/bed';
import { BedStats } from '../../../models/bed-status';
import { MessageModel } from '../../../models/message-model';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { UserService } from '../../../services/user.service';


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
  messagesbeds: Array<BedStats> = new Array;  
  messagesbedsfiltered: Array<BedStats> = new Array;      
  calendarNotes : string;
  public nurseSpecs : Array<nurseSpec> = new Array;
  public nurseSpecsIds: Array<number> = new Array
  responseSpec=" ";
  bedstates = ["Desocupada","Descansando","Llamando","Por ser atendido","Siendo atendido","Llamada programada","Solicito Ayuda"]
  updatePass=false;
  showPass1="password";
  showPass2="password";
  newPass1="";
  newPass2="";
  MinCaracterPass=4;

  pageTitle="Sala de espera";

  constructor(private activatedRoute: ActivatedRoute,
    public MQTTServ:MqttService,
    public localSto: LocalStorageService,
    private router:Router,
    private platform: Platform,
    public localBed: BedsService,
    public userLogged:UserService) { 
      this.platform.backButton.subscribeWithPriority(10, () => {
        console.log('Handler was called!');
      });

    }

  async ngOnInit() {
    this.localNurse= await this.userLogged.getUser();
    this.updatePass=false;
    this.showPass1="password";
    this.showPass2="password";
    await this.getNurseSpec();
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
    console.log("status subscribed")
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(async Message=>{
    //  console.log("received")
    //  console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    //console.log(localMessage[0].message);    
    this.messagesbeds=[];
    localMessage.forEach(element => {      
      {
       let localBedStatus= new BedStats(element.id,element.st,element.spec)
        this.nurseSpecsIds.forEach(localnurseSpec => {        
        if(element.spec==localnurseSpec)  {
          this.messagesbeds.push(localBedStatus);             
          }
       })
     }
    });

    
    });
  }

/**
   * getting nurse information
   */
 async getNurseSpec(){
  console.log("nurse:"+this.localNurse.userId );
  let responseInfoTopic="/User/"+this.localNurse.userId+"/Specs";  
  this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}      
      //console.log("respuestaSystem2:  "+localMessage[0].lastName);
      this.nurseSpecs=[]
      this.nurseSpecsIds=[]
      localMessage.forEach(element => {
        let localSpec= new nurseSpec(this.localNurse.userId, this.localNurse.userId, element.Name,element.specId);
        this.nurseSpecs.push(localSpec);
        this.nurseSpecsIds.push(element.specId)
      });
      console.log(JSON.stringify(localMessage));      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
    })  

   let a=new MessageModel(this.localNurse.username,JSON.stringify(this.localNurse.username),  0, 16);    
   console.log(a)
   let mqttmessage=JSON.stringify(a);
   console.log(mqttmessage);
   let topic="/User/general";
   await this.MQTTServ.sendMesagge(topic, mqttmessage);

   }   


  /**
   * Accepting a bed call... and moving to the bed
   * @param i beds number 
   */
  public async onClick(i:number){
    this.localBed.setBedId(i);
    this.bed.bedId = i;    
    this.router.navigate(['/nurse-main/:'+i]);
    let topic="/User/general";   
    let messageData=this.localNurse.userId
    let a=new MessageModel(this.localNurse.username,JSON.stringify(messageData),  this.bed.bedId, 12);    
    //console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);    
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
      
   let a=new MessageModel(this.localNurse.username, question, 0, 2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
   console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   topic="/Beds/status";   
   
   
   this.router.navigate(['/']);        

   
  }
/**
 * go to general chat
 */
  public goChat(){
    /*   this.router.navigate(['/chat/]);        */
    this.localBed.setBedId(0);
    this.router.navigate(['/chat/']);        
      }

  changePass(){
    if(!this.updatePass){this.updatePass=true;this.pageTitle="Nueva Contraseña"}
    else{this.updatePass=false;this.pageTitle="Sala de espera";}
  }    
  showPassword1(){
    if(this.showPass1=="password"){this.showPass1="text";}
    else{this.showPass1="password";}
    this.showPass2="password";
  }
  showPassword2(){
    if(this.showPass2=="password"){this.showPass2="text";}
    else{this.showPass2="password";}    
  }

  onChangeNewPass1(text:string){
    this.newPass1 = text;
  }
  onChangeNewPass2(text:string){
    this.newPass2=text;
  }
  onSendNewPass(){
    let data=this.newPass1+"Ç"+this.localNurse.username;
   

    if(this.newPass1==this.newPass2){
      if(this.newPass1.length<this.MinCaracterPass){alert("Error: Ingrese una contraseña con más caracteres");return;}
      console.log("Se puede enviar");
      let topic="/User/general";
      let a=new MessageModel(this.localNurse.username,data, 0, 23);    
      console.log(JSON.stringify(a));
      let mqttmessage=(a).toString();
      this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
      this.updatePass=false;
    }
    else{
      console.log("NO se puede enviar")
      alert("Error: chequear contraseñas ingresadas")
    }
  }
}
