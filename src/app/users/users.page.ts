import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public users:Array<User> = new Array<User>();
  public userLocal: User = new User(0,"","","","",0,"");

  public showList:boolean = false;
  public showForm:boolean = false;
  

  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.callUsersInfo();
  }



  async callUsersInfo(){
    console.log("calling information from bed");
    let local=await this.userServ.getAllUser();
    this.users=local;
    console.log(local);
    }
    
    public onSend(){
      this.showForm=true;  
      this.showList = false;  
      console.log("new");
      this.sendNewUser(this.userLocal);

    }
   
    async sendNewUser(newUser:User){
       console.log("send user");
       console.log(newUser);
       //let local=await this.bedServ.sendNewBed(newBed);      
       }

    
    public onShow(){
      
        this.showList = true;
        this.showForm=false;  
        console.log("mostrar");
      } 
    public offShow(){
        this.showForm=false;  
        this.showList = false;
      } 
    public onEdit(index: number){
      this.showForm=true;  
      this.showList = false;  
      console.log(index);
        
      }   
    public onDelete(index: number){
        
      console.log("asking for deleting:"+index);
        
    }   
       
}
