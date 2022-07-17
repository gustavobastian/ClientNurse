import { Injectable } from '@angular/core';
import { Pacient } from '../models/pacient';
import { MqttService } from './mqtt.service';
import {Client, connect} from 'rsup-mqtt'



@Injectable({
  providedIn: 'root'
})
export class PacientService {
  doctorId: number;
  pacients: Array<Pacient>= new Array;
  pacient: Pacient;

  constructor(public MQTTServ: MqttService) { 
    
    
  }
  //not used
  getAllPacients(): Array<Pacient> {
    return ;
  }
  

  oneAsk(i:number){
    
    console.log("asking");
    let topic="general2";
    console.log
    this.MQTTServ.sendMesagge(topic, "aqui estamos"+i);
  }
  getPacientInfo(i:number): Promise<Pacient> {
    return ;
  }

}
