import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { ErrorFirebaseService } from './error-firebase.service';
import { Router } from "@angular/router";
import { FirestoreUsersService } from './firestore-users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private fbError: ErrorFirebaseService,
    private router: Router,
    private fsUsers: FirestoreUsersService
  ) {


  }
  async register(email: string, password: string): Promise<any> {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(async (user) => {

      this.fsUsers.addUser(user);
      this.verifyMail();
      this.router.navigate(['/login']);
    }).catch((error) => {

      this.toastr.error(this.fbError.fireBaseError(error.code));
    });
  }


  //VERIFICAR MAIL
  verifyMail() {
    this.afAuth.currentUser.then(user => {
      user?.sendEmailVerification()
    })
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");
        this.router.navigate(['/verify-email']);
      })
  }






  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then((user) => {
      if (user.user?.emailVerified) {
        let uid: string | any = user.user?.uid;
        this.fsUsers.updateVerificationStatus(uid, true).then(() => {}).catch((error) => {});
        this.toastr.success("Bienvenido");
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/verify-email'])
        this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");

      }

    }).catch(error => {

      this.toastr.error(this.fbError.fireBaseError(error.code));

    })
  }






  signOut(): Promise<void> {

    return this.afAuth.signOut();
  }


}
