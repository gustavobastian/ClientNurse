import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //port for api--> must be changed to a global variable
  
  //array of beds  
  private users: Array <User> = new Array<User>();

  constructor(private _http: HttpClient) { 
   
  }


  
}
