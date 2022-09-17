import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { MqttService } from './mqtt.service';
import {Client, connect} from 'rsup-mqtt'



@Injectable({
  providedIn: 'root'
})
export class PacientService {
  doctorId: number;
  patients: Array<Patient>= new Array;
  patient: Patient;

  constructor(public MQTTServ: MqttService) { 
    
    
  }
  //not used
  getAllPatients(): Array<Patient> {
    return ;
  }
  

  oneAsk(i:number){
    
    console.log("asking");
    let topic="general2";
    console.log
    this.MQTTServ.sendMesagge(topic, "aqui estamos"+i);
  }
  getPatientInfo(i:number): Promise<Patient> {
    return ;
  }

}
