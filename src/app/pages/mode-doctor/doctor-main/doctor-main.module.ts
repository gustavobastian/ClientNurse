import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorMainPageRoutingModule } from './doctor-main-routing.module';

import { DoctorMainPage } from './doctor-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorMainPageRoutingModule
  ],
  declarations: [DoctorMainPage]
})
export class DoctorMainPageModule {}
