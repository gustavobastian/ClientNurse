import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Bed } from '../models/bed';
import { BedsService } from '../services/beds.service';
import { MessageModel } from '../models/message-model';
import { MqttService } from '../services/mqtt.service';

@Component({
  selector: 'app-doctor-main',
  templateUrl: './doctor-main.page.html',
  styleUrls: ['./doctor-main.page.scss'],
})
export class DoctorMainPage implements OnInit {
  localDoctor: User= new User(0,"","","","",0,"");
  localBed: Bed = new Bed(0,0,0,0);
  doctorId: number;
  doctorName: string;
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,
    public bedlocal: BedsService,
    public MQTTServ:MqttService,
    public userServ: UserService
    ) { 
    //this.doctorId = parseInt( this.activatedRoute.snapshot.paramMap.get("id"));
    this.doctorName="";
    
  }

  ngOnInit() {
    this.getParams();
    this.getBeds();
    
  }
  onClickPacientNote(id:number){    
    this.router.navigate(['/doctor-pacients/'+this.doctorId]);        
  }
  onClickMessages(){    
    this.router.navigate(['/doctor-messages/'+this.doctorId]);        
  }
  /**
   * Getting the parameters of the user from the local storage
   */
   async getParams() {
    this.localDoctor=this.userServ.getUser();
    this.doctorName = this.localDoctor.username;
    console.log("Doctor logged:"+this.localDoctor.username)
    /*let { value } = await Storage.get({ key: 'username' });      
    this.doctorName=value.toString();
    console.log(this.doctorName);*/
   }
    //getting list of pacients and beds
    async getBeds() {
      console.log("Doctor logged id:"+this.localDoctor.userId)  
    let a=new MessageModel(this.doctorName,JSON.stringify(this.localDoctor.username),  0, "0",9);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);

  }

  /**
   * logout
   */
   logout(){
    console.log("logging out");
    console.log("name:"+this.localDoctor.username);
   let question="logout";
      
   let a=new MessageModel(this.localDoctor.username, question, 0, "",2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
   console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   
   
     this.router.navigate(['/home/']);        

   
  }
  /**
 * go to general chat
 */
   public goChat(){
    /*   this.router.navigate(['/chat/]);        */
    this.bedlocal.setBedId(0);
    this.router.navigate(['/chat/']);        
      }

}
