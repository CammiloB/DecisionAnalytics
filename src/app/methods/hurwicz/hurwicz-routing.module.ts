import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HurwiczPage } from './hurwicz.page';

const routes: Routes = [
  {
    path: '',
    component: HurwiczPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HurwiczPageRoutingModule {}
