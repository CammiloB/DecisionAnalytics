import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimistPage } from './optimist.page';

const routes: Routes = [
  {
    path: '',
    component: OptimistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptimistPageRoutingModule {}
