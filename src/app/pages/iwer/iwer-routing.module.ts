import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IWERPage } from './iwer.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: IWERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, SharedModule],
})
export class IWERPageRoutingModule {}
