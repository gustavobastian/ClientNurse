import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private loggedUser: User = new User(0,"","","","",0,"");

  constructor() { 
   
  }

  /**
   * Getting the current loged user
  */
  public getUser(): User {
    return this.loggedUser;
  }
  /**
   * Setting the current loged user(after validation from server)
  */

   public setUser(userId: number, userName: string, userFirstName: string, userLastName: string,usermode: string): User {
    this.loggedUser.firstname= userFirstName;
    this.loggedUser.lastname= userLastName;
    this.loggedUser.occupation= usermode;
    this.loggedUser.username= userName;
    return this.loggedUser;
  }
  
}
