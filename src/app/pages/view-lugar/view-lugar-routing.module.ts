import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLugarPage } from './view-lugar.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLugarPageRoutingModule {}
