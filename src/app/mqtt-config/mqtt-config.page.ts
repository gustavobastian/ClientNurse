import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-mqtt-config',
  templateUrl: './mqtt-config.page.html',
  styleUrls: ['./mqtt-config.page.scss'],
})
export class MqttConfigPage implements OnInit {
  MQTTSERVER:string="127.0.0.1";
  MQTTPORT:string="4080";

  constructor() { }

  ngOnInit() {
  }

  public saveClick(){
    console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
    
  }
  public pruebaClick(){
    console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
  }

}
