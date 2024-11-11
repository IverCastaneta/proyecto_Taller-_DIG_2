import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { CardpapuComponent } from 'src/app/components/cardpapu/cardpapu.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  exports: [CardComponent, TabsComponent, TabComponent, CardpapuComponent,  ToolbarComponent],
  declarations: [CardComponent, TabsComponent, TabComponent, CardpapuComponent, ToolbarComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ]
})
export class SharedModule { }
