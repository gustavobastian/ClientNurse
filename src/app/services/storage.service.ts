import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const STORAGE_KEY= 'mylist';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 
    this.init();

  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    console.log("DB INIT");
    const storage = await this.storage.create();
    console.log("DB INIT DONE");
    this._storage = storage;
  }
  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  getData(){
    console.log("GET DATA");
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(item){
    const storedData = await this.storage.get(STORAGE_KEY) || []; //
    storedData.push(item);
    return this.storage.set(STORAGE_KEY,storedData);
  }
  async removeData(index){
    const storedData = await this.storage.get(STORAGE_KEY) || []; //
    storedData.splice(index,1);
    return this.storage.set(STORAGE_KEY,storedData);
  }

  
}
