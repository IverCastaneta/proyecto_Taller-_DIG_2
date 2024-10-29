import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [CardComponent, TabsComponent],
  declarations: [CardComponent, TabsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ]
})
export class SharedModule { }
