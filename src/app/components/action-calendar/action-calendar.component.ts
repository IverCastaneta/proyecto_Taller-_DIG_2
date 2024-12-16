import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReservationModalComponent } from '../reservation-modal/reservation-modal.component';

@Component({
  selector: 'app-action-calendar',
  templateUrl: './action-calendar.component.html',
  styleUrls: ['./action-calendar.component.scss'],
})
export class ActionCalendarComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  async presentReservationModal() {
    const modal = await this.modalCtrl.create({
      component: ReservationModalComponent,
    });
    return await modal.present();
  }

  onActionClick() {
    // Aquí puedes añadir lógica adicional si es necesario
    this.presentReservationModal();
  }
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  ngOnInit() {}

}
