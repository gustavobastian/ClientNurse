import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Storage } from '@capacitor/storage';
import { LocalStorageService } from '../services/local-storage.service';
import {Client, connect} from 'rsup-mqtt'




@Component({
  selector: 'app-mqtt-config',
  templateUrl: './mqtt-config.page.html',
  styleUrls: ['./mqtt-config.page.scss'],
})
export class MqttConfigPage implements OnInit {
  MQTTSERVER:string="127.0.0.2";
  MQTTPORT:number=9001;
  MQTTClientLocal: Client;
  number:number;
  connected: number;

  constructor(public localSto: LocalStorageService) { 
    this.number=0;
    this.connected=0;
  }

  ngOnInit() {
    connect({host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false,path:'/test/'})
    .then(client => { this.MQTTClientLocal = client; });
    
  }

  public saveClick(){
    //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);
    this.saveValues();
  }

  public Reset(){
    //console.log("clicked:", this.MQTTSERVER,":", this.MQTTPORT);

    this.getServer();
    this.getPort();  
    this.connected=0;
    
    if(this.MQTTClientLocal!==null){
    this.MQTTClientLocal.disconnect();
    console.log("here");
    this.MQTTClientLocal= null;
    }
    //this.MQTTClientLocal= NULL;
    
    connect({host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false,path:'/test/'})
    .then(client => { 
      console.log(client);
      if(client.isConnected())
        {this.connected=1;
          this.MQTTClientLocal = client; 
          console.log("status: connected");
        }    
    });
  }

  public pruebaClick(){
    
    this.number++;
    this.MQTTClientLocal.publish('/mensajes', 'hello')

  }
  /**
   * Saving port values to localStorage
   */
  public saveValues = async () => {  
    this.localSto.saveValuesString('MQTTSERVER',this.MQTTSERVER);
    this.localSto.saveValuesNumber('MQTTPORT',this.MQTTPORT);
  };

  /**
   * Get the server ip from the local storage
   */
  public getServer = async () => {
    let { value } = await Storage.get({ key: 'MQTTSERVER' });    
    let server=value;    
    this.MQTTSERVER=server;
    console.log('MQTTSERVER:'+this.MQTTSERVER);
  };

  /**
   * Get the broker port from the local storage
   */
  public getPort = async () => {
    
    let {value}  = await Storage.get({ key: 'MQTTPORT' });    
    let port=parseInt(value);  
    this.MQTTPORT=port;
    console.log('MQTTPORT:'+this.MQTTPORT);  
  };

}
