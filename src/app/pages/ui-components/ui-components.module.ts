import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiComponentsPageRoutingModule } from './ui-components-routing.module';

import { UiComponentsPage } from './ui-components.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiComponentsPageRoutingModule,
    SharedModule
  ],
  declarations: [UiComponentsPage]
})
export class UiComponentsPageModule {}
