import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  lugaresPropios: any; // Lugares propios del usuario
  reservas: any[] = []; // Reservas del usuario

  constructor(
    public auth: AuthService,
    public db: DatabaseService
  ) {
    // Obtener todos los lugares
    this.db.fetchFirestoreCollection('lugares')
      .subscribe((res: any) => {
        console.log('todos los lugares', res);
      });

    // Obtener lugares propios del usuario autenticado
    this.db.getCollectionByCustomparam('lugares', 'userId', auth.profile?.id)
      .subscribe((res: any) => {
        console.log('lugares propios', res);
        this.lugaresPropios = res;
      });

    // Cargar las reservas del usuario
    this.cargarReservas();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  cargarReservas() {
    const userId = this.auth.profile?.id; // ID del usuario autenticado
    if (!userId) {
      console.error('Usuario no autenticado');
      return;
    }

    // Obtener el documento del usuario
    this.db.getDocumentById('users', userId).subscribe((userData: any) => {
      const reservas = userData?.reserva || [];
      if (reservas.length === 0) {
        console.log('No hay reservas para este usuario');
        return;
      }

      // Obtener detalles de cada lugar reservado
      this.reservas = [];
      reservas.forEach((lugarId: string) => {
        this.db.getDocumentById('lugares', lugarId).subscribe((lugarData: any) => {
          this.reservas.push(lugarData);
        });
      });
    });
  }
}
