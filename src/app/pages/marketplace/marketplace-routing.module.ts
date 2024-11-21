import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketplacePage } from './marketplace.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MarketplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule],
})
export class MarketplacePageRoutingModule {}
