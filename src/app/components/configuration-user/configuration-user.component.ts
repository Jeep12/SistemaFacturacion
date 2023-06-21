import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/Sistema/Usuario';
import { FirestoreUsersService } from 'src/app/services/firestore-users.service';

@Component({
  selector: 'app-configuration-user',
  templateUrl: './configuration-user.component.html',
  styleUrls: ['./configuration-user.component.css']
})
export class ConfigurationUserComponent implements OnInit {
  user:Usuario;
  uploadUser:boolean = false;

  constructor(private afAuth: AngularFireAuth,private fsUser:FirestoreUsersService) {
    this.user= new Usuario();

   }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user=>{
      const uid: string | any = user?.uid;
      this.fsUser.getUser(uid).then(user => {
        this.user = user;
        this.uploadUser = true;
      });
    })
  }

}
