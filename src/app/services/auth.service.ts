import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { ErrorFirebaseService } from './error-firebase.service';
import { Router } from "@angular/router";
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private fbError: ErrorFirebaseService, private router: Router,
  ) {


  }
  async register(email: string, password: string): Promise<any> {
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {

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
        this.toastr.success("Bienvenido");
        this.router.navigate(['/home']);
        let email: any = user.user.email;
        let uid: string | any = user.user?.uid;
        //  let algo = this.dataService.getUser(uid);



      } else {
        this.router.navigate(['/verify-email'])
        this.toastr.info("Le enviamos un correo electronico para verificar su cuenta", "Verificar Correo");

      }
      return user;
    }).catch(error => {

      console.log(error);
      this.toastr.error(this.fbError.fireBaseError(error.code));
      return error;
    })
  }


  logout(): void {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

}
