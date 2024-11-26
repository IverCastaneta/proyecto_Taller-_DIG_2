import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPage } from './por.page';

const routes: Routes = [
  {
    path: '',
    component: PorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorPageRoutingModule {}
