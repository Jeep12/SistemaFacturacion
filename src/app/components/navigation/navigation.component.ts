import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as admin from 'firebase-admin';
import { Usuario } from 'src/app/Sistema/Usuario';
import { FirestoreUsersService } from 'src/app/services/firestore-users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean = false;
  user:Usuario;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router, private fsUser: FirestoreUsersService) {

    this.user= new Usuario();
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (user) {
        const uid: string | any = user?.uid;
        this.fsUser.getUser(uid).then(user => {
          this.user = user;
        });
      }
    });


  }




  logout(): void {
    this.authService.signOut()
      .then(() => {
        // Aquí puedes realizar alguna acción adicional después de cerrar sesión, si es necesario
        this.user= new Usuario();
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error.code)
      });
  }

}
