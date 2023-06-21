import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Sistema/Usuario';
import { FirestoreUsersService } from 'src/app/services/firestore-users.service';

@Component({
  selector: 'app-update-date',
  templateUrl: './update-date.component.html',
  styleUrls: ['./update-date.component.css']
})
export class UpdateDateComponent implements OnInit {
  dates: FormGroup;
  user: Usuario;
  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private fsUser: FirestoreUsersService) {
    this.user = new Usuario();
    this.dates = this.fb.group({
      displayName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      direction: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      const uid: string | any = user?.uid;
      this.fsUser.getUser(uid).then(user => {
        this.user = user;
      });
    })
  }

  updateDates(): void {
    const displayName = this.dates.value.displayName;
    const phoneNumber = this.dates.value.phoneNumber;
    const direction = this.dates.value.direction;
    const birthdate = this.dates.value.birthDate;


    console.log(displayName);
    console.log(phoneNumber);
    console.log(direction);
    console.log(birthdate);

    this.fsUser.updateUserData(this.user.getUid(), { displayName, phoneNumber, direction, birthdate })
      .then(() => {
        console.log('Datos actualizados correctamente en Firestore');
      })
      .catch((error) => {
        console.log('Error al actualizar los datos en Firestore:', error);
      });


  }
}
