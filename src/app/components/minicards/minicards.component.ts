import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicards',
  templateUrl: './minicards.component.html',
  styleUrls: ['./minicards.component.scss'],
})
export class MinicardsComponent implements OnInit {

  @Input() data: any;
  constructor() {
  }

  ngOnInit(): void {
    console.log('Data desde card', this.data)

  }


}
