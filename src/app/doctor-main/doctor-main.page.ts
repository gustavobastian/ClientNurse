import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.page.html',
  styleUrls: ['./doctor-main.page.scss'],
})
export class DoctorMainPage implements OnInit {
  doctorId: number;
  doctorName: string;
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService) { 
    this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
    
  }

  ngOnInit() {
    this.getParams();
  }
  onClickPacientNote(id:number){
    console.log("here");
    this.router.navigate(['/doctor-pacients/'+this.doctorId]);        
  }
  onClickMessages(){
    this.router.navigate(['/doctor-messages/'+this.doctorId]);        
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
