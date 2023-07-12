import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Subscription } from 'rxjs';
import { Factura } from 'src/app/Sistema/Factura';
import { FacturaA } from 'src/app/Sistema/FacturaA';
import { Usuario } from 'src/app/Sistema/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreUsersService } from 'src/app/services/firestore-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  user!: Usuario;
  mostrar!: string;


  constructor(
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    private fsUser: FirestoreUsersService,
   ) {

  }

  ngOnInit(): void {


  }
  ngOnDestroy(): void {

  }
  logout() {
  }

  pruebaClases() {
    console.log(this.user.getFacturas());
  }
}
