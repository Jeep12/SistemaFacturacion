import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreUsersService } from '../services/firestore-users.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class VerifiedGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router, private fsUsers: FirestoreUsersService,private toastr:ToastrService) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.fsUsers.getUser(user.uid).then(currentUser => {
            if (currentUser && currentUser.getVerify()) {
              resolve(true); // Usuario verificado, permite el acceso
            } else {
              // No es un usuario verificado, redirige a una página de acceso denegado
              this.toastr.warning("Debe verificar su cuenta");
              this.router.navigate(['/verify-email']);
              resolve(false);
            }
          });
        } else {
          // No hay usuario autenticado, redirige al inicio de sesión
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
