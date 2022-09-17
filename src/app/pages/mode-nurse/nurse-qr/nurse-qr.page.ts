import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModel } from '../../../models/message-model';
import { User } from '../../../models/user';
import { BedsService } from '../../../services/beds.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { MqttService } from '../../../services/mqtt.service';
import { UserService } from '../../../services/user.service';
import { AlertController, Platform } from '@ionic/angular';

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
    private alertController: AlertController,
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
    this.BedQrSubscription(this.bedId);
    
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
      this.capturedQR=result.content;;

    }
  };

  public async cancelScan() {
    document.body.style.background = "";
    document.body.style.opacity="1";
    BarcodeScanner.stopScan();
  }

  //sending qr information for system notification
  async sendQr(){
    console.log("QR:"+this.capturedQR)
    let a=new MessageModel(this.nurseName,JSON.stringify(this.capturedQR),  this.bedId, "0",11);    
      console.log(a)
      let mqttmessage=JSON.stringify(a);
      console.log(mqttmessage);
      let topic="/Beds/"+this.bedId+"/QR";
    await this.MQTTServ.sendMesagge(topic, mqttmessage);
  }
  //Checking permissions
  public async checkPermission() {
    // check or request permission
    const status = await BarcodeScanner.checkPermission({ force: true });
  
    if (status.granted) {
      // the user granted permission
      return true;
    }
  
    return false;
  };

  //
  /**
   * Subscription for receiving messages
   */
   async BedQrSubscription(i: number){
    
                let topic="/Beds/"+this.bedId+"/QRresponse/";
              
                this.MQTTServ.MQTTClientLocal.subscribe(topic).on(Message=>{
                //console.log("recibido:"+JSON.stringify(Message.string))  
                let localMessage= JSON.stringify(Message.string);
                console.log("recibido:"+localMessage);
                  if (localMessage==="Error"){
                    console.log("habitacion no encontrada en base de datos");
                    this.presentAlert("habitacion no encontrada en base de datos");
                  }
                  else if (localMessage==='QR invalid'){
                    console.log("QR equivocado");
                    this.presentAlert("QR equivocado");
                  }    
                  else {
                    console.log("habilitado");
                    this.presentAlert("Perfecto");
                  }
              });
    }

  /**
   * ERROR ALERTS MESSAGES
   *  */  

   async presentAlert(text: string) {
    const alert = await this.alertController.create({
      header: text,      
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }
  goBack(){
    this.router.navigate(['/nurse-main/{{this.bedId}}']);        
  }
}
