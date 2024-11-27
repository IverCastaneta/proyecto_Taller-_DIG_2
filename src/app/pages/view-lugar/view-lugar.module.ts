import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLugarPageRoutingModule } from './view-lugar-routing.module';

import { ViewLugarPage } from './view-lugar.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ViewLugarPageRoutingModule
  ],
  declarations: [ViewLugarPage]
})
export class ViewLugarPageModule {}
