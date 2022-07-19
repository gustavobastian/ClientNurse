import { Injectable } from '@angular/core';
import { Bed } from '../models/bed';

@Injectable({
  providedIn: 'root'
})
export class BedsService {
  private localBed: Bed= new Bed(0,0,0,0); 
  constructor() { }

  public setBed(bed: Bed) {
    this.localBed=bed;
  }
  public getBed(): Bed {
    return this.getBed();
  }
  public setBedId(bedId: number) {
    this.localBed.bedId=bedId;
  };
  public getBedId():number {
    return this.localBed.bedId;
  };
}
