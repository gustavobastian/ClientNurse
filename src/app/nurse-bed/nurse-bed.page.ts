import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { PacientService } from '../services/pacient.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-nurse-bed',
  templateUrl: './nurse-bed.page.html',
  styleUrls: ['./nurse-bed.page.scss'],
})
export class NurseBedPage implements OnInit {
  private bedId: number = 0;
  private nurseName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService, 
    private pacientServ:PacientService,
    public MQTTServ:MqttService) {

    let d = (this.activatedRoute.snapshot.params['id']);
    this.bedId=d;
    console.log("bedId "+d);

  }

  ngOnInit() {
  }
  async getParams() {
    let { value } = await Storage.get({ key: 'username' });      
    this.nurseName=value.toString();
    console.log(this.nurseName);    
  }

  async getBedId() {
    let { value } = await Storage.get({ key: 'bedId' });      
    this.bedId=parseInt(value.toString());
    console.log(this.nurseName);    
  }
}
