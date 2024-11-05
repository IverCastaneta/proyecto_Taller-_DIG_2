import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Inicio';
  categories = [
    'Ropa Deportiva',
    'Ropa Casual',
    'Gadgets',
    'Smartphones',
    'Herramientas',
    'Smartwtch',
  ];
  products = [
    {
      name: 'producto 1',
      price: 100,
      descrption: 'llala',
      photo: 'https://fairplaybo.vtexassets.com/arquivos/ids/218102/dx0687-010.1.jpg?v=638217678084400000'
    },
    {
      name: 'producto 2',
      price: 100,
      descrption: 'llala',
      photo: 'https://runastore.pe/media/catalog/product/cache/1ad426beaceeac5935cd76675f3d6a1f/d/j/dj6095-063_1.jpg'
    }
  ]
  constructor(
    public database: DatabaseService
  ) {
    console.log('products', this.products)
    console.log('product', this.products[1].name)
    this.products.forEach((item) => {
      console.log(item.name)
    });
    database.fetchFirestoreCollection('products')
    .subscribe(
      //respuesta en success
      (res: any)=>{
        console.log('salida firebase', res)
        this.products = res;
      },
      //respuesta en error
      (error: any)=>{},
    )
    /*  console.log(this.title);
    console.log('hola chicos')
    this.saludarDoble() */
  }

  loadData(){

  }

  saludarUnaVez() {
    return 'Hola chicos, una vez';
  }

  saludarDoble() {
    console.log('hola')
    console.log('chau')
  }

}
