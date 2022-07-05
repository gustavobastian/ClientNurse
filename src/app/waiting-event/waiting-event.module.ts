import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingEventPageRoutingModule } from './waiting-event-routing.module';

import { WaitingEventPage } from './waiting-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingEventPageRoutingModule
  ],
  declarations: [WaitingEventPage]
})
export class WaitingEventPageModule {}
