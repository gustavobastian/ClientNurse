import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NurseQRPage } from './nurse-qr.page';

const routes: Routes = [
  {
    path: '',
    component: NurseQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NurseQRPageRoutingModule {}
