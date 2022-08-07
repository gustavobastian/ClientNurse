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
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-doctor-pacients',
  templateUrl: './doctor-pacients.page.html',
  styleUrls: ['./doctor-pacients.page.scss'],
})
export class DoctorPacientsPage implements OnInit {
  notes: Array<Note> = new Array;
  localDoctor: User= new User(0,"","","","",0,"");
  doctorId: number;
  doctorName: string;
  showNotes: boolean = false;
  showNotesForm: boolean = false;
  showAsk: boolean = true;
  pacientNumber2= 1;

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
    public userServ: UserService,
    public MQTTServ:MqttService,
    ) {
    
    
   }

  ngOnInit() {
  
    console.log(JSON.stringify(this.pacientLocal));
    this.pacientLocal.firstName= "Gus";
    this.pacientLocal.lastName= "Bas";    
    this.pacientLocal.id = 0;
    this.localDoctor= this.userServ.getUser();  
    this.doctorId = this.localDoctor.userId;
    this.doctorName=this.localDoctor.username;
    let d = this.activatedRoute.snapshot.params['id'];
    this.pacientNumber2=d;
    this.pacientLocal.id=d;
  }


/**
 * asking for pacient notes
 */
 async onClickNotes() {
  this.notes=[];
  let userBad=0;
  let local=(this.numberId.value);  
  this.notes.splice(0);    
  console.log(local);
  this.pacientLocal.id = this.pacientNumber2;
  console.log("nro de paciente:", this.pacientLocal.id);

  let responseNoteTopic="/Pacient/"+this.pacientNumber2+"/notes";  
  //console.log(responseNoteTopic);
  await this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
   // console.log("respuestaSystem:  "+Message.toString());
    if(Message.toString()=== '"Error"'){
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      alert("Error");
      userBad=1;
    }
    else{
    console.log("recibo nota")
    let localMessage = JSON.parse(Message.toString());      
    //let localMessage = JSON.parse(JSON.stringify(Message));
    
    let notaLocal1: Note= new Note(0,"","");
   /* localMessage.forEach(element => {
        
        let  note1=    JSON.parse(JSON.stringify(element)); 
            
        console.log(JSON.stringify(note1));
        notaLocal1.noteId=note1.notesId;
        notaLocal1.note=note1.note;
        console.log(note1.note);
        notaLocal1.state="1";
        console.log(JSON.stringify(notaLocal1));
        this.notes.append(notaLocal1);
    });*/
    this.notes=localMessage;
    console.log(JSON.stringify(this.notes));
    
    } 
    });
    let topic="/User/general";
  
    let b=new MessageModel(this.doctorName,(this.pacientLocal.id).toString(),  0, "0",5);
    let mqttmessage=JSON.stringify(b);    
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    
    
    userBad=0;
    //this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic)
   
  
};

  async onClick() {
    this.showNotes=true;
    let userBad=0;
    let local=(this.numberId.value);  
    this.notes.splice(0);    
    console.log(local);
    this.pacientLocal.id = this.pacientNumber2;
    console.log("nro de paciente:", this.pacientLocal.id);

  let responseInfoTopic="/Pacient/"+this.pacientLocal.id+"/info";  
  await this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);      
      //console.log("respuestaSystem2:  "+localMessage[0].lastName);
      if(Message.toString()=="Error"){
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
        this.pacientLocal.lastName = "Error";
        this.pacientLocal.firstName = "Error";      
        return;
      }
      else{
      this.pacientLocal.lastName = localMessage[0].lastName;
      this.pacientLocal.firstName = localMessage[0].firstName;      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
    }
    })  

    let a=new MessageModel(this.doctorName,(this.pacientLocal.id).toString(),  0, "0",4);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);
 /*
  if(userBad===0)  
    {this.showAsk=false; 
      this.showNotes = true;
     }
  else{
    this.showNotes = false;    
  }  

*/
  this.showNotes = true;
 }
/**
 * Adding a note
 */

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
  console.log("envío nota:"+this.pacientLocal.id)
  console.log(local.noteFormString);
  let nota=JSON.stringify(local.noteFormString);
  let topic="/Pacient/"+this.pacientNumber2+"/newNote";
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

 deleteNote(i:number){
  console.log("borrando nota:", i)
  let data=JSON.parse(JSON.stringify(this.notes[i]))
  
  console.log("borrando notaId:", data.notesId)
  //let topic="/Pacient/"+this.pacientNumber2+"/";
  let topic="/User/general";
  let b=new MessageModel(this.doctorName,JSON.stringify(data.notesId),  0, "0",18);
  let mqttmessage=JSON.stringify(b);    
  this.MQTTServ.sendMesagge(topic, mqttmessage);
 }
}
