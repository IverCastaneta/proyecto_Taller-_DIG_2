import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogued = false;
  profile: any;

  constructor(
    //private auth: Auth,
    public auth: AngularFireAuth,
    //private firestore: Firestore,
    public firestore: AngularFirestore,
    public db: DatabaseService,
    public router: Router
  ) {
    this.verifyIsLogued();
    //////////////
    let storedProfile: any = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
    let stroedUser: any = localStorage.getItem('user');
    if (stroedUser) {
      let user = JSON.parse(stroedUser)
      this.getProfile(user?.uid);
    }
    //////////////
  }

  async registerUser(email: string, password: string, additionalData: { name: string; phone: string; username: string }) {
    try {
      const userCredential: any = await this.auth.createUserWithEmailAndPassword(email, password);
      const userId = userCredential.user.uid;
      const userDocRef: any = this.firestore.collection('users').doc(userId).set(additionalData)
      setTimeout(() => {
        this.router.navigateByUrl('/login')
      }, 2000)
      console.log('Usuario registrado y documento creado en Firestore');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const userCredential: any = await this.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', JSON.stringify(userCredential.user));
      console.log('Usuario autenticado:', userCredential.user);
      this.getProfile(userCredential.user.uid); ``
      this.router.navigateByUrl('/profile');
    } catch (error) {
      //alert('Error:' + error);
      console.error('Error al iniciar sesión:', error);
    }
  }

  verifyIsLogued() {
    let user = localStorage.getItem('user');
    this.isLogued = user ? true : false;
    return user ? true : false;
  }

  getProfile(uid: any) {
    this.db.getDocumentById('users', uid)
      .subscribe(
        (res: any) => {
          console.log('perfil desde firebase', res)
          localStorage.setItem('profile', JSON.stringify(res));
          this.profile = res;
        },
        (error: any) => { console.log(error) })
  }





  addToList(field: any, uid: any) {
    if (this.profile) {
      if (this.checkIsFavorite(field, uid) === false) {
        //agrega un favorito si la lista existe
        if (this.profile[field]) {

          this.profile[field].push(uid);
        }
        else {
          this.profile[field] = [];
          this.profile[field].push(uid)
        }
      }
      else {
        //quita un facvorito
        let lista: any = [];
        this.profile[field].forEach((e: any) => {
          if (e !== uid) lista.push(e);
        });
        this.profile[field] = lista;
      }
    }
    else {
      //agrega el primer favorito si la lista favoritos no existe
      this.profile[field] = [];
      this.profile[field].push(uid)
    }
    ////// actualizar el perfi
    let params: any = {}
    params[field] = this.profile[field]
    this.db.updateFireStoreDocument('users', this.profile.id, params)
      .then((res: any) => { console.log('actualizado') })
  }
  addToFavorites(uid: any) {
    if (this.profile?.favorites) {
      if (this.checkIsFavorite('favorites', uid) === false) {
        //agrega un favorito si la lista existe
        this.profile?.favorites.push(uid);
      }
      else {
        //quita un facvorito
        let lista: any = [];
        this.profile.favorites.forEach((e: any) => {
          if (e !== uid) lista.push(e);
        });
        this.profile.favorites = lista;
      }
    }
    else {
      //agrega el primer favorito si la lista favoritos no existe
      this.profile.favorites = [];
      this.profile.favorites.push(uid)
    }
    ////// actualizar el perfi
    this.db.updateFireStoreDocument('users', this.profile.id, { favorites: this.profile.favorites })
      .then((res: any) => { console.log('actualizado') })
  }

  checkIsFavorite(field: any, uid: any) {
    if (this.profile[field]) {
      return this.profile[field].indexOf(uid) >= 0;
    }
    else {
      return false;
    }
  }
  // para add antes de modificar algo

  async addLugar(lugarData: {
    nombre: string;
    descripcion: string;
    precio: number;
    direccion: string;
  }) {
    try {
      // Verificar si el usuario está autenticado
      const storedUser = localStorage.getItem('user');
      if (!storedUser) throw new Error('Usuario no autenticado');

      const user = JSON.parse(storedUser);

      // Crear un nuevo documento en la colección 'lugares'
      const lugarId = this.firestore.createId(); // Generar un ID único
      await this.firestore.collection('lugares').doc(lugarId).set({
        ...lugarData,
        userId: user.uid, // UID del usuario autenticado como propietario
        creadoEn: new Date() // Fecha de creación
      });

      console.log('Lugar añadido correctamente');
      this.router.navigateByUrl('/lugares'); // Redirigir al listado de lugares
    } catch (error) {
      console.error('Error al añadir el lugar:', error);
    }
  }

  // buscar reseva mas add

  
}
// por si acaso git add -1612