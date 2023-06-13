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
  iconClass: string = 'fa-eye';
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
    if(this.inputType=='password'){
      this.iconClass = 'fa-eye';
    }else {
      this.iconClass = "fa-sharp fa-solid fa-eye-slash";
    }
}
}
