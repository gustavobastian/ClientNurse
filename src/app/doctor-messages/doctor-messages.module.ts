import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorMessagesPageRoutingModule } from './doctor-messages-routing.module';

import { DoctorMessagesPage } from './doctor-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorMessagesPageRoutingModule
  ],
  declarations: [DoctorMessagesPage]
})
export class DoctorMessagesPageModule {}
