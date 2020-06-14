import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegretsPageRoutingModule } from './regrets-routing.module';

import { RegretsPage } from './regrets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegretsPageRoutingModule
  ],
  declarations: [RegretsPage]
})
export class RegretsPageModule {}
