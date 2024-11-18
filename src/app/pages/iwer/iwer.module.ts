import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IwerPageRoutingModule } from './iwer-routing.module';

import { IwerPage } from './iwer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IwerPageRoutingModule
  ],
  declarations: [IwerPage]
})
export class IwerPageModule {}
