import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-script.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  inputType: string = 'password';
  showPassword: boolean = false;
  iconSrc: string = '../../../assets/images/eyeopen.png';
  constructor(loadScript: LoadScriptsService) {
   }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    // No se realiza ninguna operación específica aquí

  }
  toggleInputType(): void {
    this.inputType = (this.inputType === 'password') ? 'text' : 'password';
    this.showPassword = !this.showPassword;
    this.iconSrc = this.showPassword ? '../../../assets/images/eyeclose.png' : '../../../assets/images/eyeopen.png';

}
}
