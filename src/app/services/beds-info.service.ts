import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bed } from '../models/bed';

@Injectable({
  providedIn: 'root'
})
export class BedsInfoService {
  //array of beds
  private beds: Array <Bed> = new Array<Bed>();
  //port for api--> must be changed to a global variable
  urlApi='http://localhost:8000';
  constructor(private _http: HttpClient) {  }

  getAllbed(): Promise<Bed[]> {
    return this._http.get(this.urlApi+"/api/beds")
    .toPromise()
    .then((beds:Bed[])=>{
      return beds;
    });
  }
}
