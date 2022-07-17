import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPacientsPage } from './doctor-pacients.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorPacientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPacientsPageRoutingModule {}
