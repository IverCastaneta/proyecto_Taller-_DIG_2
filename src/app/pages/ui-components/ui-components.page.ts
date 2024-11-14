import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.page.html',
  styleUrls: ['./ui-components.page.scss'],
})
export class UiComponentsPage implements OnInit {

  constructor(
    public db: DatabaseService
  ) { 
    /*this.loadData();*/
  }

  ngOnInit() {
    console.log()
  }

  loadData() {
    this.db.fetchLocalCollection('lugares')
      .subscribe((res: any) => {
        console.log('salida lugares', res)
        //this.db.addFirestoreDocument()
        res.forEach((e: any) => {
          console.log(e);
          this.db.addFirestoreDocument('lugares', e)
        });
      })
  }
}
