import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLugarPageRoutingModule } from './add-lugar-routing.module';

import { AddLugarPage } from './add-lugar.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLugarPageRoutingModule, SharedModule
  ],
  declarations: [AddLugarPage]
})
export class AddLugarPageModule {}
