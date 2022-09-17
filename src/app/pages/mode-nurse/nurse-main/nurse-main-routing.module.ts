import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NurseMainPage } from './nurse-main.page';

const routes: Routes = [
  {
    path: '',
    component: NurseMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NurseMainPageRoutingModule {}
