import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  email:string | any ;
  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user=>{
      console.log(user)
      this.email=  user?.email;

    })
  }

}
