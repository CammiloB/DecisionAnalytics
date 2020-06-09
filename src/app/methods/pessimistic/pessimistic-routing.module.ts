import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessimisticPage } from './pessimistic.page';

const routes: Routes = [
  {
    path: '',
    component: PessimisticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessimisticPageRoutingModule {}
