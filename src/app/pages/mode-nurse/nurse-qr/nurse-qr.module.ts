import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NurseQRPageRoutingModule } from './nurse-qr-routing.module';

import { NurseQRPage } from './nurse-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NurseQRPageRoutingModule
  ],
  declarations: [NurseQRPage]
})
export class NurseQRPageModule {}
