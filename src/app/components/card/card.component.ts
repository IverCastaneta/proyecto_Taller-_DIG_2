import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit   {


  @Input() data: any;
  constructor(
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
    console.log('Data desde card', this.data)
  }


}
