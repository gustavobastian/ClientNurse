import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userInfo } from 'os';
import { MqttService } from '../services/mqtt.service';
import { Router } from '@angular/router';


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
  
  username: string;
  password: string;

  constructor(public MQTTServ:MqttService,public formBuilder: FormBuilder , private router:Router) {   

  }

  ngOnInit() {
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
        this.router.navigate(['/chat']);
       };
    
    
    

    }
  


}
