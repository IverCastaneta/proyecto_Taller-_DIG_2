import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {


  id: any;
  user: any;
  lugaresFiltrados: any;
  constructor(
    public db: DatabaseService,
    public activatedRoute: ActivatedRoute
  ) {
    console.log('uid desde url', this.activatedRoute.snapshot.paramMap.get('uid'))
    this.id = this.activatedRoute.snapshot.paramMap.get('uid');
  }

  ngOnInit() {
    this.db.getDocumentById('users', this.id)
      .subscribe((res: any) => {
        this.user = res;
        console.log('usuario buscado', this.user)
      })
    this.db.getCollectionByCustomparam('lugares', 'userId', this.id)
      .subscribe((res: any) => {
        this.lugaresFiltrados = res;
      })
  }

}
