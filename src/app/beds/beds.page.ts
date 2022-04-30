import { Component, OnInit } from '@angular/core';
import { Bed } from '../models/bed';
import { BedsInfoService } from '../services/beds-info.service';

@Component({
  selector: 'app-beds',
  templateUrl: './beds.page.html',
  styleUrls: ['./beds.page.scss'],
})
export class BedsPage implements OnInit {
  public beds:Array<Bed> = new Array<Bed>();

  constructor( private bedServ: BedsInfoService) { 
    
  }

  ngOnInit(): void {
    this.callBedsInfo();
  }

  async callBedsInfo(){
    console.log("calling information from bed");
    let local=await this.bedServ.getAllbed();
    this.beds=local;
    console.log(local);
    }
   
   public onSend(){
     let newBed = new Bed(2,3,4,5);
     this.sendNewBed(newBed);
   }
  
   async sendNewBed(newBed:Bed){
      console.log("send bed");
      let local=await this.bedServ.sendNewBed(newBed);      
      }
    
}
