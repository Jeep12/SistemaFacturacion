import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreNoticesService {
  private noticesCollection: AngularFirestoreCollection<any>;
  public notices: Observable<any[]>;
  constructor(private firestore: AngularFirestore, private toastr: ToastrService
  ) {
    this.noticesCollection = this.firestore.collection('noticias', (ref) => {
      // Ordenar las noticias por la fecha de agregado en orden descendente
      return ref.orderBy('date', 'asc');
    });

    this.notices = this.noticesCollection.valueChanges();
  }

  async saveNotice(titulo: string, descripcion: string, date: string) {
    this.firestore.collection('noticias').add({ titulo, descripcion, date })
      .then((docRef) => {
        this.toastr.success("Noticia agregada correctamente");
      })
      .catch((error) => {
        this.toastr.error('Error al agregar la noticia:', error);
      });
  }

  getNotices(): Observable<any[]> {
    return this.notices;
  }









}
