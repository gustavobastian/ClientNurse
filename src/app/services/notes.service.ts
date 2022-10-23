import { Injectable } from '@angular/core';

import { Note } from '../models/note';
import { MqttService } from './mqtt.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  doctorId: number;
  patientId: number;
  notes: Array<Note>= new Array;

  constructor(public MQTTServ: MqttService) { }
}
