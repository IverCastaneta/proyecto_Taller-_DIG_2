import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardpapu',
  templateUrl: './cardpapu.component.html',
  styleUrls: ['./cardpapu.component.scss'],
})
export class CardpapuComponent implements OnInit {
  @Input() data: any;
  constructor() {
  }

  ngOnInit(): void {
    console.log('Data desde card', this.data)

  }


}
