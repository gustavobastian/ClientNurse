import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userInfo } from 'os';
import { MqttService } from '../services/mqtt.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MessageModel } from '../models/message-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ionicForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()    
  });
  
  mode : string;
  username: string;
  password: string;
  number:number;
  showIn: boolean;
  statusLogged=false;

  constructor(public MQTTServ:MqttService,public formBuilder: FormBuilder ,public localSto: LocalStorageService, private router:Router) {   
    this.mode ="unknown";
    this.showIn= false;
  }

  ngOnInit() {
    //removing user name
    //this.MQTTServ.Reset();
  }

  async onClickLogin() {
    
    let local=(this.ionicForm.value);    
    this.username=local.userName;
    this.password=local.password;
    console.log(this.username);    
    console.log(this.password);
    
    this.number =  await this.MQTTServ.Connect(this.username, this.password);
    console.log(this.number);
    this.showIn= true;
    await new Promise(f => setTimeout(f, 10000));
    this.Log_in();
    }

  async Log_in() {
    this.GetUserLogKind(); 
    console.log("here")
    let question="log in";
    var time= new Date();
    let value= (time.getHours())+":"+ (time.getMinutes())+":"+time.getSeconds();
    let a=new MessageModel(this.username,question,  0, value,1);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    await new Promise(f => setTimeout(f, 1000));
    this.GetUserLogKind(); 
  }

  GetUserLogKind()  {
    console.log("wainting for response");
    let question="";
    let topic="/User/System";    
    let localMessage;
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
      console.log("respuestaSystem:  "+Message.toString());
    if(this.statusLogged==false){  
    localMessage = JSON.parse(Message.string);      
    this.number=parseInt(localMessage.idNumber);
    this.mode=(localMessage.mode);
    if(this.mode=="enfermero")
      {
        console.log("here2");
        //this.mode="nurse";
        this.router.navigate(['/waiting-event/']);        
        this.localSto.saveValuesString('username',this.username);        
        this.localSto.saveValuesString('mode',this.mode);
       }
    else if(this.mode=="Médico")
      {
        //received in /User/System 
        //{"idNumber":1,"mode":"doctor"}
        console.log("Doctor");
        //this.mode="nurse";
        this.router.navigate(['/doctor-main/'+this.number]);        
        this.localSto.saveValuesString('username',this.username);        
        this.localSto.saveValuesString('mode',this.mode);
       }
    else{
      this.router.navigate(['/home/']);        
      this.localSto.saveValuesString('username',"");        
      this.localSto.saveValuesString('mode',"");
      }     
    this.statusLogged=true;
    }
    })
  };

}
