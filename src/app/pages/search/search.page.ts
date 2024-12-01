import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searched: any;
  lugares: any;
  lugaresFiltered: any;
  constructor(
    public db: DatabaseService
  ) { }

  ngOnInit() {
    console.log();
    this.loadLugares();
  }



  loadLugares() {
    this.db.fetchFirestoreCollection('lugares')
      .subscribe((res: any) => {
        this.lugares = res;
      })
  }
  buscar() {
    console.log('buscando...', this.searched)
    this.lugaresFiltered = [];
    this.lugares.forEach((e: any) => {
      // let name = e.name.toLowerCase();
      if (
        e.nombre.toLowerCase().includes(this.searched.toLowerCase()) ||
        e.lugares.indexOf(this.searched) >= 0
      ) {
        this.lugaresFiltered.push(e);
      }
    });
  }
}
