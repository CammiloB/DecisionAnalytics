import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavagePageRoutingModule } from './savage-routing.module';

import { SavagePage } from './savage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavagePageRoutingModule
  ],
  declarations: [SavagePage]
})
export class SavagePageModule {}
