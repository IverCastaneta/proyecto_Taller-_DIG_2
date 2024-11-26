import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPagePageRoutingModule } from './evento-page-routing.module';

import { EventoPagePage } from './evento-page.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPagePageRoutingModule,
    SharedModule
  ],
  declarations: [EventoPagePage]
})
export class EventoPagePageModule {}
