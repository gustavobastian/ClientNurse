import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { nurseSpec } from 'src/app/models/nurse-specs';
import { collapseTextChangeRangesAcrossMultipleVersions, ObjectFlags } from 'typescript';
import { Bed } from '../../../models/bed';
import { bedStats } from '../../../models/bed-status';
import { MessageModel } from '../../../models/message-model';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-waiting-event',
  templateUrl: './waiting-event.page.html',
  styleUrls: ['./waiting-event.page.scss'],
})
export class WaitingEventPage implements OnInit {
  localNurse: User= new User( 0,"","","","",0,"");
  usernameLocal: string;
  bed : Bed = new Bed( 0,0,0,0,);
  bedId: number;
  messages: Array<MessageModel> = new Array;
  messagesbeds: Array<bedStats> = new Array;  
  messagesbedsfiltered: Array<bedStats> = new Array;      
  calendarNotes : string;
  private nurseSpecs : Array<nurseSpec> = new Array;
  private nurseSpecsIds: Array<number> = new Array
  responseSpec=" ";

  constructor(private activatedRoute: ActivatedRoute,
    public MQTTServ:MqttService,
    public localSto: LocalStorageService,
    private router:Router,
    public localBed: BedsService,
    public userLogged:UserService) { }

  async ngOnInit() {
    this.localNurse= await this.userLogged.getUser();
    await this.getNurseSpec();
    setTimeout(()=>{
      this.eventsSubscription();      
    },600);
  }



  /**
   * Subscription for receiving messages
   * of the status of the beds   
   */
    eventsSubscription(){
    
    let topic="/Beds/status";
    let receivedMessage;
    console.log("status subscribed")
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(async Message=>{
    //  console.log("received")
    //  console.log(Message.string);            
    let localMessage = JSON.parse(Message.string);      
    let local2=Message.string;
    //console.log(localMessage[0].message);    
    this.messagesbeds=[];
    localMessage.forEach(element => {      
      {
       let localBedStatus= new bedStats(element.id,element.st,element.spec)
        this.nurseSpecsIds.forEach(localnurseSpec => {        
        if(element.spec==localnurseSpec)  {
          this.messagesbeds.push(localBedStatus);             
          }
       })
     }
    });

    
    });
  }

/**
   * getting nurse information
   */
 async getNurseSpec(){
  console.log("nurse:"+this.localNurse.userId );
  let responseInfoTopic="/User/"+this.localNurse.userId+"/Specs";  
  this.MQTTServ.MQTTClientLocal.subscribe(responseInfoTopic).on(Message=>{
      let localMessage = JSON.parse(Message.string);
      if(Message.toString()=="Error"){this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic);}      
      //console.log("respuestaSystem2:  "+localMessage[0].lastName);
      this.nurseSpecs=[]
      this.nurseSpecsIds=[]
      localMessage.forEach(element => {
        let localSpec= new nurseSpec(this.localNurse.userId, this.localNurse.userId, element.Name,element.specId);
        this.nurseSpecs.push(localSpec);
        this.nurseSpecsIds.push(element.specId)
      });
      console.log(JSON.stringify(localMessage));      
      this.MQTTServ.MQTTClientLocal.unsubscribe(responseInfoTopic)
    })  

   let a=new MessageModel(this.localNurse.username,JSON.stringify(this.localNurse.username),  0, 43);    
   console.log(a)
   let mqttmessage=JSON.stringify(a);
   console.log(mqttmessage);
   let topic="/User/general";
   await this.MQTTServ.sendMesagge(topic, mqttmessage);

   }   


  /**
   * Accepting a bed call... and moving to the bed
   * @param i beds number 
   */
  public async onClick(i:number){
    this.localBed.setBedId(i);
    this.bed.bedId = i;    
    this.router.navigate(['/nurse-main/:'+i]);
    let topic="/User/general";   
    let messageData=this.localNurse.userId
    let a=new MessageModel(this.localNurse.username,JSON.stringify(messageData),  this.bed.bedId, 12);    
    //console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);    
    await this.MQTTServ.sendMesagge(topic, mqttmessage);        
  }
  /**
   * asking for bed information
   * @param i beds number
   */
  onClick2(i:number){    
    this.localBed.setBedId(i);
   
    this.router.navigate(['/nurse-bed/:'+i]);        
  }
  /**
   * asking for Calendar Notes information
   * @param i beds number
   */
   onClick3(i:number){    
    /*this.localBed.setBedId(i);
   
    this.router.navigate(['/nurse-bed/:'+i]);        */
    console.log(i);
  }


  /**
   * logout
   */
  logout(){
    console.log("logging out");
    console.log("name:"+this.localNurse.username);
   let question="logout";
      
   let a=new MessageModel(this.localNurse.username, question, 0, 2);    
   console.log(JSON.stringify(a));
   let mqttmessage=(a).toString();
   console.log(mqttmessage);
   let topic="/User/general";
   this.MQTTServ.sendMesagge(topic, JSON.stringify(a));  
   topic="/Beds/status";   
   
   
   this.router.navigate(['/']);        

   
  }
/**
 * go to general chat
 */
  public goChat(){
    /*   this.router.navigate(['/chat/]);        */
    this.localBed.setBedId(0);
    this.router.navigate(['/chat/']);        
      }
}
