import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorMessagesPage } from './doctor-messages.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorMessagesPageRoutingModule {}
