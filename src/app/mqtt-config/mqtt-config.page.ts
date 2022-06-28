import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Storage } from '@capacitor/storage';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-mqtt-config',
  templateUrl: './mqtt-config.page.html',
  styleUrls: ['./mqtt-config.page.scss'],
})
export class MqttConfigPage implements OnInit {
  MQTTSERVER:string="127.0.0.1";
  MQTTPORT:string="1883";

  constructor(public localSto: LocalStorageService) { }

  ngOnInit() {
  }

  public saveClick(){
    //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
    this.saveValues();
  }
  public pruebaClick(){
    
    this.getServer();
    this.getPort();  

    console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
  }
  /**
   * Saving port values to localStorage
   */
  public saveValues = async () => {  
    this.localSto.saveValuesString('MQTTSERVER',this.MQTTSERVER);
    this.localSto.saveValuesString('MQTTPORT',this.MQTTPORT);
  };

  /**
   * Get the server ip from the local storage
   */
  public getServer = async () => {
    let { value } = await Storage.get({ key: 'MQTTSERVER' });    
    let server=value;    
    
  };

  /**
   * Get the broker port from the local storage
   */
  public getPort = async () => {
    
    let { value}  = await Storage.get({ key: 'MQTTPORT' });    
    let port=value;    
  };

}
