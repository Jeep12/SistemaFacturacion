import { Injectable } from '@angular/core';
import { QuerySnapshot, addDoc, collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Usuario } from '../Sistema/Usuario';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUsersService {
  private usersCollection: AngularFirestoreCollection<any>;
  public users: Observable<any[]>;
  constructor(private firestore: Firestore,private AngFirestore: AngularFirestore) {
    this.usersCollection = this.AngFirestore.collection('usuarios', (ref) => {

      // Ordenar las noticias por la fecha de agregado en orden descendente
      return ref;
    });

    this.users = this.usersCollection.valueChanges();

  }




  async addUser(user: any) {
    const uid: string | any = user.user?.uid;
    const email: string | any = user.user?.email;
    const isVerify: boolean | any = user.user?.emailVerified;
    const displayName: string | any = user.user?.displayName;
    const direction: string | "" = "";
    const phoneNumber: number | any = user.user?.phoneNumber;
    const birthdate: Date | any = "";

    const usuario = new Usuario(uid, isVerify, displayName, email, "cliente", direction, birthdate, phoneNumber);
    const convertJson = usuario.toJSON();

    const userDocRef = doc(this.firestore, 'usuarios', uid);
    await setDoc(userDocRef, convertJson);
  }

  async getUser(uid: string): Promise<Usuario> {
    const queryRef = query(collection(this.firestore, 'usuarios'), where('uid', '==', uid));
    const querySnapshot: QuerySnapshot<Usuario> | any = await getDocs(queryRef);
    if (querySnapshot.empty) {
      throw new Error(`No se encontró el usuario con el UID: ${uid}`);
    }
    const docSnapshot = querySnapshot.docs[0];
    const usuarioData = docSnapshot.data();

    // Aquí se crea la instancia de la clase Usuario y se le pasan los datos del documento
    const usuario = new Usuario(
      usuarioData.uid,
      usuarioData.isVerify,
      usuarioData.displayName,
      usuarioData.email,
      usuarioData.rol,
      usuarioData.direction,
      usuarioData.birthdate,
      usuarioData.phoneNumber
    );

    return usuario;
  }
  async updateVerificationStatus(uid: string, isVerified: boolean): Promise<void> {
    const userDocRef = doc(this.firestore, 'usuarios', uid);
    console.log('Ruta del documento:', userDocRef.path);
    await updateDoc(userDocRef, { isVerify: isVerified });
  }

  async updateUserData(uid: string, userData: any): Promise<void> {
    const userDocRef = doc(this.firestore, 'usuarios', uid);
    await updateDoc(userDocRef, userData);
  }
 getAllusers(): Observable<any[]> {
  return this.users;
  }
}


