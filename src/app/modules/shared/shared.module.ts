import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { TabComponent } from 'src/app/components/tab/tab.component';
@NgModule({
  exports: [CardComponent, TabsComponent, TabComponent],
  declarations: [CardComponent, TabsComponent, TabComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ]
})
export class SharedModule { }
