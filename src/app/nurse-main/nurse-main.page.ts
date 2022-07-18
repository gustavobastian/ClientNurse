import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { PacientService } from '../services/pacient.service';
import { Storage } from '@capacitor/storage';
import { Note } from '../models/note';
import { MessageModel } from '../models/message-model';
import { Pacient } from '../models/pacient';



@Component({
  selector: 'app-nurse-main',
  templateUrl: './nurse-main.page.html',
  styleUrls: ['./nurse-main.page.scss'],
})
export class NurseMainPage implements OnInit {
  private bedId = 0;
  private nurseName=" ";
  private nurseId=0;
  notes: Array<Note> = new Array;
  public showNotes = false;
  public pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);
  public QRCapture = false;


  constructor(private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService) {
    this.bedId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    console.log("bedId:"+this.bedId);
   }

  ngOnInit() {
    this.getParams();
    this.getBedId();
  }
  async getParams() {
    let { value } = await Storage.get({ key: 'username' });      
    this.nurseName=value.toString();
    console.log(this.nurseName);    
  }

  async getBedId() {
    let { value } = await Storage.get({ key: 'bedId' });      
    this.bedId=parseInt(value.toString());
    console.log(this.nurseName);    
  }

  async onClick() {
    let local=this.bedId;
    this.pacientLocal.id=this.bedId;
    this.notes.splice(0);    
    console.log(local);
    var {value} = await Storage.get({ key: 'bedId' });      
    this.pacientLocal.id=parseInt(value.toString()); 
   // this.pacientLocal.id = local.pacientNumber;
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
  
      let a=new MessageModel(this.nurseName,JSON.stringify(this.pacientLocal.id),  0, "0",2);    
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
}
