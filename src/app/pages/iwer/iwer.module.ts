import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IWERPageRoutingModule } from './iwer-routing.module';

import { IWERPage } from './iwer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IWERPageRoutingModule
  ],
  declarations: [IWERPage]
})
export class IWERPageModule {}
