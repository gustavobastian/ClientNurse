import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bed } from '../models/bed';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BedsInfoService {
   postId;
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
  
  sendNewBed(newBed: Bed){
    console.log(newBed);
    let output = JSON.stringify(newBed);
    console.log(output);
     this._http.post<any>(this.urlApi+"/api/beds",newBed).subscribe(data => {this.postId = data.id;})
  }
}
