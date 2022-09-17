import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NurseBedPage } from './nurse-bed.page';

const routes: Routes = [
  {
    path: '',
    component: NurseBedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NurseBedPageRoutingModule {}
