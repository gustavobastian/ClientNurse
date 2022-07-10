import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorMainPage } from './doctor-main.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorMainPageRoutingModule {}
