import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pacient } from '../models/pacient';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { PacientService } from '../services/pacient.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Note } from '../models/note';

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


  public pacientLocal: Pacient= new Pacient(0,"Gus","Bas",0,0,0);

  numberId: FormGroup = new FormGroup({
    pacientNumber: new FormControl(),    
  });

  noteForm: FormGroup = new FormGroup({
    noteFormString: new FormControl(),    
  });


  
  
  constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder,public localSto: LocalStorageService, private pacientServ:PacientService) {
    this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
   }

  ngOnInit() {
    this.getParams();
    console.log(JSON.stringify(this.pacientLocal));
    this.pacientLocal.firstName= "Gus";
    this.pacientLocal.lastName= "Bas";    
    this.pacientLocal.id = 0;
    //making 2 notes
    let nota1: Note= new Note(1,"ahora me despierto","active");
    let nota2: Note= new Note(2,"ahora me acuesto","active");
    this.notes.push(nota1);
    this.notes.push(nota2);

    //this.pacientServ.oneAsk(this.doctorId);
  }
/**
   * Getting the parameters of the user from the local storage
   */
 async getParams() {
  let { value } = await Storage.get({ key: 'username' });      
  this.doctorName=value.toString();
  console.log(this.doctorName);
}
 onClick() {
  let local=(this.numberId.value);    
  console.log(local);
  this.pacientLocal.id = local.pacientNumber;
  this.showNotes = true;
  this.pacientServ.oneAsk(local.pacientNumber);
 }
 onClickAdd() {
  let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = true;
  this.pacientLocal.id = local.pacientNumber;  
 }
 onClickVolver() {
  let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = true;
  this.showNotesForm = false;
  this.pacientLocal.id = local.pacientNumber;  
 }
 onClickEnviar() {
  let local=(this.noteForm.value);    
  console.log(local);
  /*let local=(this.numberId.value);    
  console.log(local);
  this.showNotes = false;
  this.showNotesForm = true;
  this.pacientLocal.id = local.pacientNumber;  */
 }
}
