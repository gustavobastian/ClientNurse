import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { PacientService } from '../../../services/pacient.service';
import { Storage } from '@capacitor/storage';
import { MessageModel } from '../../../models/message-model';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { Bed } from '../../../models/bed';

@Component({
  selector: 'app-nurse-bed',
  templateUrl: './nurse-bed.page.html',
  styleUrls: ['./nurse-bed.page.scss'],
})
export class NurseBedPage implements OnInit {
  public BedLocal2: Bed = new Bed(0,0,0,0);
  private bedId: number = 0;
  private nurseName: string;  
  private localNurse: User= new User(0,"","","","",0,"");
  public room: number;
  public floor: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public userLogged: UserService,
    public bedLocal: BedsService,
    public MQTTServ:MqttService) {

    let d = this.activatedRoute.snapshot.params['id'];
    this.bedId=this.bedLocal.getBedId();
    console.log("bedId "+d);

  }

  ngOnInit() {
    this.getParams();

    //this.getBedInfo();
  }
  async getParams() {
    this.localNurse= this.userLogged.getUser();    
    this.nurseName=this.localNurse.username;    
    this.bedId=this.bedLocal.getBedId();    
    this.getBedInfo();
  }

  

  async getBedInfo(){
  await console.log("inside:" + this.nurseName)  

  /** Preparing to get the response   *  */
  let responseInfoTopic="/Beds/"+this.bedId+"/info";  
  this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);      
      console.log("respuestaSystemBeds:  "+localMessage[0]);
      if(Message.toString()=="Error"){
        this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);
        this.floor = 0;
        this.room = 0;      
        return;
      }
      else{
      this.floor = localMessage[0].floorId;
      this.room = localMessage[0].roomId;      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)}
    })  

    

  /** Ask for information about the bed *  */

  let a=new MessageModel(this.nurseName,this.bedId.toString(),  0, "0",8);    
  //console.log(a)
  let mqttmessage=JSON.stringify(a);
  console.log("Mensaje:"+mqttmessage);
  let topic="/Beds/"+this.bedId+"/messages";
  await this.MQTTServ.sendMesagge(topic, mqttmessage);
  

  }


}
