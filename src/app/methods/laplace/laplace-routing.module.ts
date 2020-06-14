import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaplacePage } from './laplace.page';

const routes: Routes = [
  {
    path: '',
    component: LaplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaplacePageRoutingModule {}
