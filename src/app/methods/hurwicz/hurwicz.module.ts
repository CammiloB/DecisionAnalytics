import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HurwiczPageRoutingModule } from './hurwicz-routing.module';

import { HurwiczPage } from './hurwicz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HurwiczPageRoutingModule
  ],
  declarations: [HurwiczPage]
})
export class HurwiczPageModule {}
