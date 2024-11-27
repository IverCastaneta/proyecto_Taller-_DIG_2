import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerReservaLugaresPage } from './ver-reserva-lugares.page';

const routes: Routes = [
  {
    path: '',
    component: VerReservaLugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerReservaLugaresPageRoutingModule {}
