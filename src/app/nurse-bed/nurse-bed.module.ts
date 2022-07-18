import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NurseBedPageRoutingModule } from './nurse-bed-routing.module';

import { NurseBedPage } from './nurse-bed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NurseBedPageRoutingModule
  ],
  declarations: [NurseBedPage]
})
export class NurseBedPageModule {}
