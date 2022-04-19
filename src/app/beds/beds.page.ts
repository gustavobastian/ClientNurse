import { Component, OnInit } from '@angular/core';
import { Bed } from '../models/bed';
import { BedsInfoService } from '../services/beds-info.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.page.html',
  styleUrls: ['./beds.page.scss'],
})
export class BedsPage {
  public beds:Array<Bed> = new Array<Bed>();

  constructor( private bedServ: BedsInfoService) { 

    this.callBedsInfo();
  }

  async callBedsInfo(){
    console.log("calling information from bed");
    let local=await this.bedServ.getAllbed();
    this.beds=local;
    console.log(local);
    }

}
