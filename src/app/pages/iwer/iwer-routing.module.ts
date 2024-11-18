import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IwerPage } from './iwer.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: IwerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, SharedModule],
})
export class IwerPageRoutingModule {}
