import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavagePage } from './savage.page';

const routes: Routes = [
  {
    path: '',
    component: SavagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavagePageRoutingModule {}
