import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  lugaresPropios: any;
  constructor(
    public auth: AuthService,
    public db: DatabaseService
  ) {
    this.db.fetchFirestoreCollection('lugares')
    .subscribe((res: any)=>{
      console.log('todos los lugares', res)
    })
    this.db.getCollectionByCustomparam('lugares', 'userId', auth.profile?.id)
    .subscribe((res: any)=>{
      console.log('lugares propios', res);
      this.lugaresPropios = res;
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}