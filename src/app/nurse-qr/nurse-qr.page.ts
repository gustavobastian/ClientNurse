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
  public scanActive: boolean = false;  
  private Platform: Platform;

  public capturedQR :string ="Coloque aqui";
  data=" "
  

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
    this.capturing=false;
   
   }

  async ngOnInit() {
    const state=await this.checkPermission();
    if((state)== true){return;}
    else{
      alert("Permission denied");
    }
    
  }

  ngAfterViewInit(){
    BarcodeScanner.prepare();
  }

  ngOnDestroy(){
    BarcodeScanner.stopScan();
  }

  public async startScan() {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    document.body.style.opacity="0.2";

    document.body.style.background = "transparent"; 
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
    // if the result has content
    if (result.hasContent) {
      document.body.style.background = "";
      document.body.style.opacity="1";

      console.log(result.content); // log the raw scanned content
      this.data=result.content;
    }
  };


  public async checkPermission() {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });
  
    if (status.granted) {
      // the user granted permission
      return true;
    }
  
    return false;
  };
}
