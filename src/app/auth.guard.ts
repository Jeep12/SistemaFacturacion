import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, of, switchMap, take } from 'rxjs';
import { FirestoreUsersService } from './services/firestore-users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private afAuth: AngularFireAuth, private router: Router, private toastr: ToastrService, private fsUsers: FirestoreUsersService) {



  }
  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.fsUsers.getUser(user.uid).then(currentUser => {
            if (currentUser) {
              resolve(true); // Usuario autenticado, permite el acceso
            } else {
              // No se encontró el usuario en Firestore, redirige a una página de acceso denegado
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

