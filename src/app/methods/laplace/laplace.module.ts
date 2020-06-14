import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaplacePageRoutingModule } from './laplace-routing.module';

import { LaplacePage } from './laplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaplacePageRoutingModule
  ],
  declarations: [LaplacePage]
})
export class LaplacePageModule {}
