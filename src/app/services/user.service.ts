import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //port for api--> must be changed to a global variable
  urlApi='http://localhost:8000';
  postId;
  //array of beds  
  private users: Array <User> = new Array<User>();

  constructor(private _http: HttpClient) { 
   
  }
  
  public getAllUser(): Promise<User[]> {
    return this._http.get(this.urlApi+"/api/user")
    .toPromise()
    .then((users:User[])=>{
      return users;
    });
  }
  
  sendNewUser(newUser: User){
    console.log(newUser);
    let output = JSON.stringify(newUser);
    console.log(output);
     this._http.post<any>(this.urlApi+"/api/user",newUser).subscribe(data => {this.postId = data.id;})
  } 



  
}
