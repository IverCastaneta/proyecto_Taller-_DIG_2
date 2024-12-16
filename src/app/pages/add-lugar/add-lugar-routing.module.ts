import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLugarPage } from './add-lugar.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AddLugarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class AddLugarPageRoutingModule {}
