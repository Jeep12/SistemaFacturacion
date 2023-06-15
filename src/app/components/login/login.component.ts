import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-script.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  showPreload: boolean = true;


  constructor(loadScript: LoadScriptsService) {

=======
  inputType: string = 'password';
  showPassword: boolean = false;
  iconSrc: string = '../../../assets/images/eyeopen.png';
  constructor(loadScript: LoadScriptsService) {
>>>>>>> ab378934a720672ca0b56378af1a4682093fbe93
   }

  ngOnInit(): void {
       // Simula una operación asincrónica que toma tiempo
       setTimeout(() => {
        this.showPreload = false; // Oculta el preloader después de 3 segundos (ajusta el tiempo según tus necesidades)
      }, 3000);
    }
  }
<<<<<<< HEAD


=======
  ngOnDestroy(): void {
    // No se realiza ninguna operación específica aquí
  }
  toggleInputType(): void {
    this.inputType = (this.inputType === 'password') ? 'text' : 'password';
    this.showPassword = !this.showPassword;
    this.iconSrc = this.showPassword ? '../../../assets/images/eyeclose.png' : '../../../assets/images/eyeopen.png';
}
}
>>>>>>> ab378934a720672ca0b56378af1a4682093fbe93
