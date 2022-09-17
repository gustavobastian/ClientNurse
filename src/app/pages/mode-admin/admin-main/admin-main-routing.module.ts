import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMainPage } from './admin-main.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMainPageRoutingModule {}
