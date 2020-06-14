import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaldPageRoutingModule } from './wald-routing.module';

import { WaldPage } from './wald.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaldPageRoutingModule
  ],
  declarations: [WaldPage]
})
export class WaldPageModule {}
