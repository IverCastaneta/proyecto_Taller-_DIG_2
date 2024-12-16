import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.page.html',
  styleUrls: ['./add-lugar.page.scss'],
})
export class AddLugarPage implements OnInit {
  lugar = {
    nombre: '',
    descripcion: '',
    precio: 0,
    direccion: ''
  };
  constructor(public authService: AuthService) { }
  async submitLugar() {
    try {
      await this.authService.addLugar(this.lugar);
      console.log('Lugar añadido con éxito');
    } catch (error) {
      console.error('Error al subir el lugar:', error);
    }
  }
  ngOnInit() {
  }

}
