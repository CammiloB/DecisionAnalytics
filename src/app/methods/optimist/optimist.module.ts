import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { OptimistPageRoutingModule } from './optimist-routing.module';

import { OptimistPage } from './optimist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptimistPageRoutingModule
  ],
  declarations: [OptimistPage]
})
export class OptimistPageModule {}
