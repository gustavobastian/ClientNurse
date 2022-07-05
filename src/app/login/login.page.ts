import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userInfo } from 'os';
import { MqttService } from '../services/mqtt.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';


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

  constructor(public MQTTServ:MqttService,public formBuilder: FormBuilder ,public localSto: LocalStorageService, private router:Router) {   
    this.mode ="unknown";
  }

  ngOnInit() {
    //removing user name
    //this.MQTTServ.Reset();
  }

  async onClickLogin() {
    let number;
    let local=(this.ionicForm.value);    
    this.username=local.userName;
    this.password=local.password;
    console.log(this.username);    
    console.log(this.password);
    
    number= this.MQTTServ.Connect(this.username, this.password)
    console.log(number)
    if(number==0)
      {
        this.mode="nurse";
        this.router.navigate(['/waiting-event/']);        
        this.localSto.saveValuesString('username',this.username);
        this.localSto.saveValuesString('mode',this.username);
        this.localSto.saveValuesString('mode',this.mode);
       };
    }
  

}
