import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  users: any;
  lugares: any;
  constructor(
    public db: DatabaseService,
    public auth: AuthService
  ) {
    this.loadUsers();
    this.loadLugares();
  }

  loadLugares(){
    this.db.fetchFirestoreCollection('lugares')
      .subscribe(
        (res: any) => {
          console.log('lugares ', res)
          this.lugares = res;
        }
      )
  }
  loadUsers() {
    this.db.fetchFirestoreCollection('users')
      .subscribe(
        (res: any) => {
          console.log('datos ', res)
          this.users = res;
        }
      )
  }
}
