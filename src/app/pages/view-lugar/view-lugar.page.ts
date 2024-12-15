import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-view-lugar',
  templateUrl: './view-lugar.page.html',
  styleUrls: ['./view-lugar.page.scss'],
})
export class ViewLugarPage implements OnInit {

  id: any;
  lugar: any;
  @Input() data: any;
  constructor(
    public db: DatabaseService,
    public activatedRoute: ActivatedRoute,
    public auth: AuthService
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('idLugar');
    console.log('id lugar', this.id)
  }

  ngOnInit() {
    this.db.getDocumentById('lugares', this.id)
    .subscribe((res: any)=>{
      this.lugar = res;
    })
    console.log('Data desde view-lugar', this.data)
  }

}
