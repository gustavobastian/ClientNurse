import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-doctor-messages',
  templateUrl: './doctor-messages.page.html',
  styleUrls: ['./doctor-messages.page.scss'],
})
export class DoctorMessagesPage implements OnInit {  
  localDoctor : User = new User(0,"","","","",0,"");
  doctorId: number;
  doctorName: string;
  constructor(private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,
    public userServ: UserService) { 
    this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
  }

  ngOnInit() {    
    this.localDoctor= this.userServ.getUser();
    this.doctorName=this.localDoctor.username;
    this.doctorId=this.localDoctor.userId;
  }

}
