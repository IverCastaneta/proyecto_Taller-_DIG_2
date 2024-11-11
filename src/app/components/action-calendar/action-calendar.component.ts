import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-calendar',
  templateUrl: './action-calendar.component.html',
  styleUrls: ['./action-calendar.component.scss'],
})
export class ActionCalendarComponent  implements OnInit {

  constructor() { }

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
