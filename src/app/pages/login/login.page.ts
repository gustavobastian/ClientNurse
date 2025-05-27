import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userInfo } from 'os';
import { MqttService } from '../../services/mqtt.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { MessageModel } from '../../models/message-model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

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
  sessionId=0;

  constructor(public MQTTServ:MqttService,
    public formBuilder: FormBuilder ,
    public localSto: LocalStorageService, 
    public userServ: UserService,
    private readonly router:Router) {   
    this.mode ="unknown";
    this.showIn= false;
  }
  
  ionViewWillEnter() {
    let currDate=new Date();
    this.sessionId = currDate.getTime();    
  }

  async onClickLogin() {
    
    let local=(this.ionicForm.value);    
    this.username=local.userName;
    this.password=local.password;
    console.log(this.username);    
    console.log(this.password);
    
    this.number =  await this.MQTTServ.Connect(this.username, this.password);
    console.log(this.number);
    
    await new Promise(f => setTimeout(f, 1000));
    this.Log_in();
    }

  async Log_in() {
    this.GetUserLogKind(); 
    console.log("here")

    let question=this.password+"Ç"+this.sessionId;
    let a=new MessageModel(this.username,question,  0, 1);    
    console.log(a)
    let mqttmessage=JSON.stringify(a);
    console.log(mqttmessage);
    let topic="/User/general";
    this.MQTTServ.sendMesagge(topic, mqttmessage);
    await new Promise(f => setTimeout(f, 1000));
    
  }

  GetUserLogKind()  {
    console.log("wainting for response");
    let question="";    
    let topic="/Session/"+this.sessionId+"/response";    
    let localMessage;
    this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
      
    if(!this.statusLogged){  
    localMessage = JSON.parse(Message.string);      
    this.number=parseInt(localMessage.idNumber);
    this.mode=(localMessage.mode);
    if(this.mode=="Enfermero")
      { 
        this.router.navigate(['/waiting-event/']);        
        this.userServ.setUser(this.number,this.username,"","",this.mode);
        this.localSto.saveValuesString('username',this.username);        
        this.localSto.saveValuesString('mode',this.mode);
        this.showIn= true;
       }
    else if(this.mode=="Médico")
      {
        //received in /User/System                 
        this.router.navigate(['/doctor-main/'+this.number]);        
        this.userServ.setUser(this.number,this.username,"","",this.mode);
        this.localSto.saveValuesString('username',this.username);        
        this.localSto.saveValuesString('mode',this.mode);
        this.showIn= true;
       }
    else if(this.mode=="Administrador")
       {
         //received in /User/System                   
         this.router.navigate(['admin-main/'+this.number]);        
         this.userServ.setUser(this.number,this.username,"","",this.mode);
         this.localSto.saveValuesString('username',this.username);        
         this.localSto.saveValuesString('mode',this.mode);
         this.showIn= true;
        }   
    else{
      alert("Error al acceder! verificar usuario y contraseña")
      this.router.navigate(['/home/']);        
      this.userServ.setUser(0,"","","","");
      this.localSto.saveValuesString('username',"");        
      this.localSto.saveValuesString('mode',"");
      this.statusLogged=false;
      }     
    this.statusLogged=true;
    }
    })
  };

}
