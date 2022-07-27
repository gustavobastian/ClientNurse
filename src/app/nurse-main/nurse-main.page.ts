import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { PacientService } from '../services/pacient.service';
import { Storage } from '@capacitor/storage';
import { Note } from '../models/note';
import { MessageModel } from '../models/message-model';
import { Pacient } from '../models/pacient';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';



@Component({
  selector: 'app-nurse-main',
  templateUrl: './nurse-main.page.html',
  styleUrls: ['./nurse-main.page.scss'],
})
export class NurseMainPage implements OnInit {
  private localNurse: User= new User(0,"","","","",0,"");
  private bedId = 0;
  private nurseName=" ";
  private nurseId=0;
  notes: Array<Note> = new Array;
  public showNotes = false;
  public pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);
  public QRCapture = false;
  public inRoom =false;
  messages: Array<MessageModel> = new Array;


  constructor(private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private router:Router,
    ) {
    this.bedId = bedlocal.getBedId();
   
   }

  ngOnInit() {
    this.getParams();
    this.eventsSubscription();//getting status of the bed
  }

  /**
   * Get the pacient information 
   */
  async getParams() {
    
    this.localNurse=this.userlogged.getUser();
    this.nurseName=this.localNurse.username;    
    let responseNoteTopic="/Beds/"+this.bedId+"/Pacient";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
      //console.log("SystemResponse:  "+Message.toString());
      let localMessage = JSON.parse(Message.string);
      let pacient1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      //console.log("pacientId:"+ pacient1.pacientId);
      this.pacientLocal.id=pacient1.pacientId;

      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      }      
      console.log("Pacient received")
    });
    let topic="/User/general";
    let b=new MessageModel(this.nurseName,JSON.stringify(this.bedId),  0, "0",10);
    let mqttmessage=JSON.stringify(b);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
    this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);


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
     console.log("received")
    //console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    console.log(localMessage[0].message);    
    this.messages=[];
    
    localMessage.forEach(element => {      
      {        
      receivedMessage = new MessageModel("","",element.id,"",element.st);
      console.log("element id:"+element.id+"| element st:"+element.st);  
      //console.log("here Id:"+this.bedlocal.getBedId())          ;
       if(parseInt(element.id)==(this.bedId)){
        console.log("Here")
        if(element.st==4){this.inRoom=true;}
        else{this.inRoom=false}
      }
     }
    });
    
  //check status of this bed;
    });
  }

  /**
   * Get the pacient Notes 
   */
  async onClick() {
    let local=this.bedId;
   // this.pacientLocal.id=this.bedId;
    this.notes.splice(0);    
    console.log(local);
    
    //this.showNotes = true;
    //this.pacientServ.oneAsk(local.pacientNumber);
  
   let responseNoteTopic="/Pacient/"+this.pacientLocal.id+"/notes";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
      console.log("respuestaSystem:  "+Message.toString());
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      }      
      console.log("recibo nota")
      //let localMessage = JSON.parse(Message[0].string);      
      let localMessage = JSON.parse(Message.string);
      let note1 =  JSON.parse(JSON.stringify(localMessage[0]));     
      let note2 =  JSON.parse(JSON.stringify(localMessage[1]));     
      
      let notaLocal1: Note= new Note(note1.notesId,note1.note,note1.state);
      let notaLocal2: Note= new Note(note2.notesId,note2.note,note2.state);
      this.notes.push(notaLocal1);
      this.notes.push(notaLocal2);
      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic)
    })
    

    console.log("Pacient:"+this.pacientLocal.id);
    let responseInfoTopic="/Pacient/"+this.pacientLocal.id+"/info";  
    this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
        let localMessage = JSON.parse(Message.string);
        if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}      
        //console.log("respuestaSystem2:  "+localMessage[0].lastName);
        this.pacientLocal.lastName = localMessage[0].lastName;
        this.pacientLocal.firstName = localMessage[0].firstName;      
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
      })  
  
      let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",4);    
      console.log(a)
      let mqttmessage=JSON.stringify(a);
      console.log(mqttmessage);
      let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
    let b=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",5);
    mqttmessage=JSON.stringify(b);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  
    this.showNotes=true;    
  
   }
/**
 * Got to pacient char for asking aditional information
 */

   public async goChat(){
 /*   this.router.navigate(['/chat/]);        */
   let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",14);    
  console.log(a)
  let mqttmessage=JSON.stringify(a);
  console.log(mqttmessage);
  let topic="/User/general";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);       

  this.router.navigate(['/chat/']);        
   }

/**
 * Got to QR capture page
 */
   public goQR(){
    /*   this.router.navigate(['/chat/]);        */
     this.router.navigate(['/nurse-qr']);        
      }
 /**
 * Ending notification
 */
  public async goEnd(){
    /*   this.router.navigate(['/chat/]);        */
    let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  this.bedId, "0",13);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
     this.router.navigate(['/waiting-event/']);        
     this.inRoom=false;  
    
    }
           

}
