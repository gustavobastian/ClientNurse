import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Client, connect} from 'rsup-mqtt'
import { LocalStorageService } from '../services/local-storage.service';
import { Storage } from '@capacitor/storage';
import { MessageModel } from '../models/message-model';


@Injectable({
  providedIn: 'root'
})
export class MqttService implements OnInit  {
  MQTTSERVER:string="127.0.0.2";
  MQTTPORT:number=9001;
  MQTTClientLocal: Client;
  number:number;
  connected: number;

  constructor(public localSto: LocalStorageService) { }

  
  ngOnInit() {
    connect({host: this.MQTTSERVER, port: this.MQTTPORT, ssl: false,path:'/test/'})
    .then(client => { this.MQTTClientLocal = client; });
    
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

  public Reset(){    

    this.getServer();
    this.getPort();  
    this.connected=0;
    
    if(this.MQTTClientLocal!==null){
    this.MQTTClientLocal.disconnect();    
    this.MQTTClientLocal= null;
    }    
    
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
  public sendMesagge(topic: string, message: string){
      
    this.MQTTClientLocal.publish(topic, message);
  }
  public sendMesaggeRetain(topic: string, message: string){
      
    this.MQTTClientLocal.publish(topic, message,{retain: true});
  }

   public async Connect(usernameP:string, passwordP:string): Promise<number>{
     let connected = 0;    
    this.getServer();
    this.getPort();
    //last will message
    let value={topic:"/User/Disconnection",payload:{_user:usernameP}};
    await connect({host: this.MQTTSERVER, port: this.MQTTPORT, username: usernameP, password: passwordP, ssl: false,path:'/test/',will:value})
    
    .then(client => { 
      console.log(client);
      if(client.isConnected())
        {connected=1;
          this.MQTTClientLocal = client; 
          console.log("status: connected");          
          return 1;
        }
        throw new TypeError("No connection")    
    })
    .catch (function(json) { 
      console.log(json); connected=0; 
      if(json.errorCode == 7)    
        return connected;
    })
    .finally(function(){return connected;}); 
  
  return connected;
    
  }

  public closingAll(topic: string){
    this.MQTTClientLocal.removeMessageListener(topic, message=>console.log(message.string));
    
  }

}
