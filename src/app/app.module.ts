import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Para hacer llamadas http
import { HttpClientModule } from '@angular/common/http';

// Para utlizar formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

// Para cargar Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// Para cargar Firebase

// Para ejecutar Swiper
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Para ejecutar Swiper

@NgModule({
  declarations: [AppComponent],
  // Para ejecutar Swiper
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    /////////
    HttpClientModule,
    ReactiveFormsModule,
    // Para cargar Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
