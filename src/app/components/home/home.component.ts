import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { Factura } from 'src/app/Sistema/Factura';
import { FacturaA } from 'src/app/Sistema/FacturaA';
import { Usuario } from 'src/app/Sistema/Usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  authSubscription: Subscription | undefined;
  user!:Usuario;
  mostrar!:string;
  facturasMock = [{


  }];


  constructor(private afAuth: AngularFireAuth, private auth: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.afAuth.authState.subscribe((user) => {
      this.currentUser = user;
      if (user) {
        const email: string = user.email || '';
        const name:string = user.displayName ||'Nombre no encontrado';
        const uid:string = user.uid;
        this.user = new Usuario(email,name,uid);

        this.mostrar = this.user.toString();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  logout() {
    this.auth.logout();
  }

  pruebaClases() {
    console.log (this.user.getFacturas());
  }
}
