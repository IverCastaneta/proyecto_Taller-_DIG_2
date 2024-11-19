import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { TabComponent } from 'src/app/components/tab/tab.component';
import { CardpapuComponent } from 'src/app/components/cardpapu/cardpapu.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { ActionCalendarComponent } from 'src/app/components/action-calendar/action-calendar.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { DescripcionComponent } from 'src/app/components/descripcion/descripcion.component';
import { CardReservaComponent } from 'src/app/components/card-reserva/card-reserva.component';
import { BackComponent } from 'src/app/components/back/back.component';

@NgModule({
  exports: [CardComponent, TabsComponent, TabComponent, CardpapuComponent,  ToolbarComponent, ActionCalendarComponent, SearchBarComponent, DescripcionComponent, CardReservaComponent,BackComponent],
  declarations: [CardComponent, TabsComponent, TabComponent, CardpapuComponent, ToolbarComponent, ActionCalendarComponent, SearchBarComponent, DescripcionComponent, CardReservaComponent,BackComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ]
})
export class SharedModule { }
