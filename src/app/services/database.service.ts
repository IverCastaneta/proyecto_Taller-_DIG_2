
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DocumentData } from 'firebase/firestore'; // Asegúrate de importar DocumentData


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public http: HttpClient,
    public firestore: AngularFirestore
  ) { }


  // Lee un archivo json en la carpeta /assets/db/ NOMBRE
  fetchLocalCollection(collection: string) {
    return this.http.get('assets/db/' + collection + '.json')
  }

  // Lee todos los registros de una colección en Fire Store
  fetchFirestoreCollection(collection: any): Observable<any[]> {
    return this.firestore.collection(collection).valueChanges({ idField: 'id' });
  }

  // Guardar un documento en firestore, si no existe la colección la crea
  addFirestoreDocument(collectionName: string, collectionData: any) {
    return this.firestore.collection(collectionName).add(collectionData);
  }

  // actualiza la información de un documento o registro
  updateFireStoreDocument(collection: string, uid: string, data: any) {
    return this.firestore.collection(collection).doc(uid).update(data);
  }

  deleteFireStoreDocument(collection: string, id: string): Promise<void> {
    return this.firestore.collection(collection).doc(id).delete();
  }

  // Recupera un documento o registro por su UID
  getDocumentById(collection: string, uid: string): Observable<any> {
    return this.firestore.collection(collection).doc(uid).valueChanges({ idField: 'id' });
  }

  // Busca todos los registros o documentos de una colección que coincidan  con los parametros buscados
  // Requiere collection (nombre de la colección), customParam (campo para buscar) y searched (valor buscado)
  getCollectionByCustomparam(collection: string, customParam: string, searched: string): Observable<any> {
    return this.firestore.collection(collection, ref => ref.where(customParam, '==', searched))
      .valueChanges({ idField: 'id' });
  }

}
