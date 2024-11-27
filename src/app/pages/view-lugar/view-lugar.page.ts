import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-view-lugar',
  templateUrl: './view-lugar.page.html',
  styleUrls: ['./view-lugar.page.scss'],
})
export class ViewLugarPage implements OnInit {

  id: any;
  lugar: any;
  constructor(
    public db: DatabaseService,
    public activatedRoute: ActivatedRoute
  ) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('idLugar');
    console.log('id lugar', this.id)
  }

  ngOnInit() {
    this.db.getDocumentById('lugares', this.id)
    .subscribe((res: any)=>{
      this.lugar = res;
    })
  }

}
