import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingEventPage } from './waiting-event.page';

const routes: Routes = [
  {
    path: '',
    component: WaitingEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingEventPageRoutingModule {}
