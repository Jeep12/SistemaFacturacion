import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreNoticesService {
  private noticesCollection: AngularFirestoreCollection<any>;
  private pageSize = 3;

  constructor(private firestore: AngularFirestore, private toastr: ToastrService) {
    this.noticesCollection = this.firestore.collection('noticias', (ref) => {
      return ref.orderBy('date', 'desc');
    });
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

  getNotices(page: number): Observable<any> {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    return this.noticesCollection.valueChanges().pipe(
      map((notices) => {
        const totalNotices = notices.length;
        const totalPages = Math.ceil(totalNotices / this.pageSize);
        const pagedNotices = notices.slice(startIndex, endIndex);

        return {
          notices: pagedNotices,
          totalPages: totalPages
        };
      })
    );
  }
}
