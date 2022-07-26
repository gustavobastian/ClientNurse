import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from '../models/message-model';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nurse-qr',
  templateUrl: './nurse-qr.page.html',
  styleUrls: ['./nurse-qr.page.scss'],
})
export class NurseQRPage implements OnInit {
  private localNurse: User= new User(0,"","","","",0,"");
  public bedId = 0;
  private nurseName=" ";
  private nurseId=0;  
  public showNotes = false;  
  public capturedQR :string ="Coloque aqui";
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,    
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private router:Router,

  ) {
    this.bedId = this.bedlocal.getBedId();
   }

  ngOnInit() {
   
  }
  //sending qr information for system notification
  async sendQr(){
    console.log("QR:"+this.capturedQR)
    let a=new MessageModel(this.nurseName,JSON.stringify(this.capturedQR),  this.bedId, "0",11);    
      console.log(a)
      let mqttmessage=JSON.stringify(a);
      console.log(mqttmessage);
      let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);

  }
}
