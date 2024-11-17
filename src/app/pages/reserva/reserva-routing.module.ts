import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaPage } from './reserva.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule, SharedModule],
})
export class ReservaPageRoutingModule {}
