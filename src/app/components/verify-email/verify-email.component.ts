import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  email: string | any;
  isButtonDisabled = false;

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      console.log(user)
      this.email = user?.email;

    });
    this.disableButtonForSeconds(5); // Deshabilitar el botón durante 5 segundos después de iniciar el componente

  }

  resendVerificationEmail() {
    if (this.isButtonDisabled) {
      return; // Evitar que se haga clic en el botón mientras está deshabilitado
    }
    this.afAuth.currentUser.then(user => {
      user?.sendEmailVerification().then(response => {
        this.toastr.success('Correo de verificación enviado correctamente');

      }).catch(error => {
        this.toastr.error('Error al enviar el correo de verificación', error.message);

      }).finally(() => {
        this.disableButtonForSeconds(10); // Volver a habilitar el botón después de 10 segundos
      });
    })
  }
  private disableButtonForSeconds(seconds: number) {
    setTimeout(() => {
      this.isButtonDisabled = false; // Habilitar el botón después del tiempo especificado
    }, seconds * 1000);
  }
}
