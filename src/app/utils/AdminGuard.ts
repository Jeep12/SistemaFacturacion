import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreUsersService } from '../services/firestore-users.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router, private fsUsers: FirestoreUsersService,private toastr:ToastrService) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.fsUsers.getUser(user.uid).then(currentUser => {
            if (currentUser && currentUser.isAdmin()) {
              resolve(true); // Usuario administrador, permite el acceso
            } else {
              // No es un usuario administrador, redirige a una página de acceso denegado
              this.router.navigate(['/access-denied']);
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
