import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from '../models/message-model';
import { User } from '../models/user';
import { BedsService } from '../services/beds.service';
import { LocalStorageService } from '../services/local-storage.service';
import { MqttService } from '../services/mqtt.service';
import { UserService } from '../services/user.service';
import { Platform } from '@ionic/angular';

import { BarcodeScanner,  SupportedFormat} from '@capacitor-community/barcode-scanner';



@Component({
  selector: 'app-nurse-qr',
  templateUrl: './nurse-qr.page.html',
  styleUrls: ['./nurse-qr.page.scss'],
})
export class NurseQRPage implements OnInit {
  private localNurse: User= new User(0,"","","","",0,"");
  public bedId = 0;
  private nurseName=" ";
  private nurseId=0;  
  public showNotes = false;  
  public capturing = false;  
  public canCapture = false;  
  private Platform: Platform;

  public capturedQR :string ="Coloque aqui";
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public localSto: LocalStorageService,    
    public MQTTServ:MqttService,
    public userlogged: UserService,
    public bedlocal: BedsService,
    private router:Router,
    private platform: Platform

  ) {
    
    this.bedId = this.bedlocal.getBedId();
   
   }

  async ngOnInit() {
    console.log("on QR init")
    await this.platform.ready().then(() => {
      if (this.platform.is('android')) {
           console.log('android');
      } else if (this.platform.is('ios')) {
           console.log('ios');
      } else {
           //fallback to browser APIs or
           console.log('The platform is not supported');
             }
      });

      if(this.platform.is('android') || this.platform.is('ios'))
      {
        this.canCapture=true;
        console.log("puedo capturar")      
      }
      else{
        this.canCapture=false;
        console.log("no puedo capturar")
      }
    

    if(this.platform.is('android') || this.platform.is('ios'))
    {
      const state=await this.checkPermission();
      if((state)== true){
        console.log(" permisos correctos");
        return;}
      else{
        alert("Permission denied");
          }    
      }
    
  }

  

/****************************************************************************************************************** */
/* QR scanner functions
/****************************************************************************************************************** */

  //check permissions of the camera
  //from "https://github.com/capacitor-community/barcode-scanner"
   public async didUserGrantPermission() {
    // check if user already granted permission
    const status = await BarcodeScanner.checkPermission({ force: false });
  
    if (status.granted) {
      // user granted permission
      return true;
    }
  
    if (status.denied) {
      // user denied permission
      return false;
    }
  
    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
  
    if (status.neverAsked) {
      // user has not been requested this permission before
      // it is advised to show the user some sort of prompt
      // this way you will not waste your only chance to ask for the permission
      const c = confirm(
        'Necesitamos permisos de la camara para realizar el la busqueda de código qr',
      );
      if (!c) {
        return false;
      }
    }
  
    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      return false;
    }
    // user has not denied permission
  // but the user also has not yet granted the permission
  // so request it
  const statusRequest = await BarcodeScanner.checkPermission({ force: true });

  if (statusRequest.asked) {
    // system requested the user for permission during this call
    // only possible when force set to true
  }

  if (statusRequest.granted) {
    // the user did grant the permission now
    return true;
  }

  // user did not grant the permission, so he must have declined the request
  return false;
};

//checking permisions
/*public async checkPermission(): Promise<boolean>{
  const status = await BarcodeScanner.checkPermission();

  if (status.denied) {
    // the user denied permission for good
    // redirect user to app settings if they want to grant it anyway
    const c = confirm(
      'Si deseas utilizar el traductor de codigos QR debes permitir acceder a la camara en las opciones de la aplicación',
    );
    if (c) {
      BarcodeScanner.openAppSettings();
    }
  }
};*/
public async checkPermission() : Promise<boolean>{
  // check or request permission
  const status = await BarcodeScanner.checkPermission({ force: true });

  if (status.granted) {
    // the user granted permission
    return true;
  }

  return false;
};


public async startScan (){
  this.capturing=true;
  BarcodeScanner.hideBackground();
  const result = await BarcodeScanner.startScan();
  if (result.hasContent) {
    console.log(result.content);
    this.capturedQR=result.content;
    this.capturing=false;
  }
  else{
    this.capturing=false;
  }
};
public async prepare(){
    BarcodeScanner.prepare();
  };
public async stopScan (){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

/****************************************************************************************************************** */
/* Buttons functions
/****************************************************************************************************************** */
  /**
   * This function will start the look for for QR codes using the back camera
   */
   async startScanner(){  
    if(this.platform.is('android') || this.platform.is('ios'))
    {
        if((await this.didUserGrantPermission()) === true) {
          this.startScan()
        }
        
       /**
       * This function will stop the look for for QR codes using the back camera
       */
      await this.stopScan();
    }
    else{
      alert("no implementado en web browser")
    }    
  }  
  async stopScanner(){  
    if(this.platform.is('android') || this.platform.is('ios'))
    {
        if((await this.didUserGrantPermission()) === true) {
          this.startScan()
        }
        
       /**
       * This function will stop the look for for QR codes using the back camera
       */
      await this.stopScan();
    }    
  }  

  //sending qr information for system notification
  async sendQr(){
    console.log("QR:"+this.capturedQR)
    let a=new MessageModel(this.nurseName,JSON.stringify(this.capturedQR),  this.bedId, "0",11);    
      console.log(a)
      let mqttmessage=JSON.stringify(a);
      console.log(mqttmessage);
      let topic="/User/general";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);

  }
  // setting information 

}
