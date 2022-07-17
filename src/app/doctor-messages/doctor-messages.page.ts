import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-doctor-messages',
  templateUrl: './doctor-messages.page.html',
  styleUrls: ['./doctor-messages.page.scss'],
})
export class DoctorMessagesPage implements OnInit {

  doctorId: number;
  doctorName: string;
  constructor(private activatedRoute: ActivatedRoute,public localSto: LocalStorageService) { 
    this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
  }

  ngOnInit() {
    this.getParams();
  }
/**
   * Getting the parameters of the user from the local storage
   */
 async getParams() {
  let { value } = await Storage.get({ key: 'username' });      
  this.doctorName=value.toString();
  console.log(this.doctorName);
  }
}
