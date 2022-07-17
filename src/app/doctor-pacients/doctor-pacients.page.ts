import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pacient } from '../models/pacient';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { PacientService } from '../services/pacient.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Note } from '../models/note';
import { MessageModel } from '../models/message-model';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-doctor-pacients',
  templateUrl: './doctor-pacients.page.html',
  styleUrls: ['./doctor-pacients.page.scss'],
})
export class DoctorPacientsPage implements OnInit {
  notes: Array<Note> = new Array;
  doctorId: number;
  doctorName: string;
  showNotes: boolean = false;
  showNotesForm: boolean = false;
  showAsk: boolean = true;


  public pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);

  numberId: FormGroup = new FormGroup({
    pacientNumber: new FormControl(),    
  });

  noteForm: FormGroup = new FormGroup({
    noteFormString: new FormControl(),    
  });

  
  constructor(private activatedRoute: ActivatedRoute, 
    public formBuilder: FormBuilder,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService,
    ) {
    this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
   }

  ngOnInit() {
    this.getParams();
    console.log(JSON.stringify(this.pacientLocal));
    this.pacientLocal.firstName= "Gus";
    this.pacientLocal.lastName= "Bas";    
    this.pacientLocal.id = 0;
    
  }
/**
   * Getting the parameters of the user from the local storage
   */
 async getParams() {
  let { value } = await Storage.get({ key: 'username' });      
  this.doctorName=value.toString();
  console.log(this.doctorName);
}
 async onClick() {
  let local=(this.numberId.value);  
  this.notes.splice(0);    
  console.log(local);
  this.pacientLocal.id = local.pacientNumber;
  this.showNotes = true;
  this.pacientServ.oneAsk(local.pacientNumber);

  let responseNoteTopic="/Pacient/"+this.pacientLocal.id+"/notes";  
  this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
    console.log("respuestaSystem:  "+Message.toString());
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

  let responseInfoTopic="/Pacient/"+this.pacientLocal.id+"/info";  
  this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);      
      //console.log("respuestaSystem2:  "+localMessage[0].lastName);
      this.pacientLocal.lastName = localMessage[0].lastName;
      this.pacientLocal.firstName = localMessage[0].firstName;      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
    })  

    let a=new MessageModel(this.doctorName,JSON.stringify(this.pacientLocal.id),  0, "0",2);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);
  let b=new MessageModel(this.doctorName,JSON.stringify(this.pacientLocal.id),  0, "0",5);
  mqttmessage=JSON.stringify(b);    
  await this.MQTTServ.sendMesagge(topic, mqttmessage);

  this.showAsk=false;    

 }
 onClickAdd() {
  let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = true;
  this.pacientLocal.id = local.pacientNumber;  
  this.showAsk=false;    
 }
 onClickReturn() {
  let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = false;
  this.pacientLocal.id = local.pacientNumber; 
  this.showAsk=false;    
 }
 onClickSend() {
  let local=(this.noteForm.value);    
  console.log(local.noteFormString);
  let nota=JSON.stringify(local.noteFormString);
  let topic="/Pacient/"+this.pacientLocal.id+"/newNote";
  let b=new MessageModel(this.doctorName,nota,  0, "0",3);
  let mqttmessage=JSON.stringify(b);    
  this.MQTTServ.sendMesagge(topic, mqttmessage);
  this.showAsk=false;
  this.showNotesForm = false;    
  /*let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = true;
  this.pacientLocal.id = local.pacientNumber;  */
 }
}
