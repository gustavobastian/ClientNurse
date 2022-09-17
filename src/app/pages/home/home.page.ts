import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listData=[];

  constructor(private storageService: StorageService) {
    this.loadData();
  }

  async loadData(){
    //this.listData= await this.storageService.getData();
    this.storageService.getData().subscribe(res=>{
      this.listData=res;
    })
    console.log(this.listData);
  }
  
  async addData(){
    //await this.storageService.addData('Hola ${Math.floor(Math.random()*100)}');
    this.loadData();    
  }
  async removeItem(index){
    await this.storageService.removeData(index);
    this.listData.splice(index,1); 
  }
}
