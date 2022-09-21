import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { PacientService } from '../../../services/pacient.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Note } from '../../../models/note';
import { MessageModel } from '../../../models/message-model';
import { MqttService } from '../../../services/mqtt.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

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
  patientNumber2= 1;

  public patientLocal: Patient= new Patient(0,"Gus","Bas",0,0,0);

  numberId: FormGroup = new FormGroup({
    patientNumber: new FormControl(),    
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
  
    console.log(JSON.stringify(this.patientLocal));
    this.patientLocal.firstName= "Gus";
    this.patientLocal.lastName= "Bas";    
    this.patientLocal.id = 0;
    this.localDoctor= this.userServ.getUser();  
    this.doctorId = this.localDoctor.userId;
    this.doctorName=this.localDoctor.username;
    let d = this.activatedRoute.snapshot.params['id'];
    this.patientNumber2=d;
    this.patientLocal.id=d;
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
  this.patientLocal.id = this.patientNumber2;
  console.log("nro de paciente:", this.patientLocal.id);

  let responseNoteTopic="/Pacient/"+this.patientNumber2+"/notes";  
  //console.log(responseNoteTopic);
  await this.MQTTServ.MQTTClientLocal.subscribe(responseNoteTopic).on(Message=>{
   // console.log("respuestaSystem:  "+Message.toString());
    if(Message.toString()=== '"Error"'){
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseNoteTopic);
      alert("Error");
      userBad=1;
    }
    else{
//console.log("recibo nota")
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
  
    let b=new MessageModel(this.doctorName,(this.patientLocal.id).toString(),  0, 5);
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
    this.patientLocal.id = this.patientNumber2;
    console.log("nro de paciente:", this.patientLocal.id);

  let responseInfoTopic="/Pacient/"+this.patientLocal.id+"/info";  
  await this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);      
      //console.log("respuestaSystem2:  "+localMessage[0].lastName);
      if(Message.toString()=="Error"){
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
        this.patientLocal.lastName = "Error";
        this.patientLocal.firstName = "Error";      
        return;
      }
      else{
      this.patientLocal.lastName = localMessage[0].lastName;
      this.patientLocal.firstName = localMessage[0].firstName;      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
    }
    })  

    let a=new MessageModel(this.doctorName,(this.patientLocal.id).toString(),  0, 4);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);
 
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
  this.patientLocal.id = local.patientNumber;  
  this.showAsk=false;    
 }
 onClickReturn() {
  let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = false;
  this.patientLocal.id = local.patientNumber; 
  this.showAsk=false;    
 }
 onClickSend() {
  let local=(this.noteForm.value);    
  console.log("envío nota:"+this.patientLocal.id)
  console.log(local.noteFormString);
  let nota=JSON.stringify(local.noteFormString);
  let topic="/Pacient/"+this.patientNumber2+"/newNote";
  let b=new MessageModel(this.doctorName,nota,  0, 3);
  let mqttmessage=JSON.stringify(b);    
  this.MQTTServ.sendMesagge(topic, mqttmessage);
  this.showAsk=false;
  this.showNotesForm = false;    
  /*let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = true;
  this.patientLocal.id = local.patientNumber;  */
 }

 deleteNote(i:number){
  console.log("borrando nota:", i)
  let data=JSON.parse(JSON.stringify(this.notes[i]))
  
  console.log("borrando notaId:", data.notesId)
  //let topic="/Pacient/"+this.patientNumber2+"/";
  let topic="/User/general";
  let b=new MessageModel(this.doctorName,JSON.stringify(data.notesId),  0, 18);
  let mqttmessage=JSON.stringify(b);    
  this.MQTTServ.sendMesagge(topic, mqttmessage);
 }
}
