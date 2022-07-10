import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NurseMainPageRoutingModule } from './nurse-main-routing.module';

import { NurseMainPage } from './nurse-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NurseMainPageRoutingModule
  ],
  declarations: [NurseMainPage]
})
export class NurseMainPageModule {}
