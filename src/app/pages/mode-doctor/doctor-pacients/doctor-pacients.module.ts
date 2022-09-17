import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPacientsPageRoutingModule } from './doctor-pacients-routing.module';

import { DoctorPacientsPage } from './doctor-pacients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DoctorPacientsPageRoutingModule
  ],
  declarations: [DoctorPacientsPage]
})
export class DoctorPacientsPageModule {}
