import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorPageRoutingModule } from './por-routing.module';

import { PorPage } from './por.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorPageRoutingModule,
    SharedModule
  ],
  declarations: [PorPage]
})
export class PorPageModule {}
