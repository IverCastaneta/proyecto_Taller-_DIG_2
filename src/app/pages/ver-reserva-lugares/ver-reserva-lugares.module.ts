import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerReservaLugaresPageRoutingModule } from './ver-reserva-lugares-routing.module';

import { VerReservaLugaresPage } from './ver-reserva-lugares.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    VerReservaLugaresPageRoutingModule
  ],
  declarations: [VerReservaLugaresPage]
})
export class VerReservaLugaresPageModule {}
