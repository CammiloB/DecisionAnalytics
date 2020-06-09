import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessimisticPageRoutingModule } from './pessimistic-routing.module';

import { PessimisticPage } from './pessimistic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessimisticPageRoutingModule
  ],
  declarations: [PessimisticPage]
})
export class PessimisticPageModule {}
