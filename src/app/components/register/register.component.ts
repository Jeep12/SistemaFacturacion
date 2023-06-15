import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
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
  registerUser: FormGroup;
  constructor(
    private toastService: ToastrService,
    private loadScript: LoadScriptsService,
    private fb: FormBuilder,
    private auth: AuthService)
  //Constructor init
  {
    this.registerUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
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
  register() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const repeatPassword = this.registerUser.value.repeatPassword;
    if (password != repeatPassword) {
      this.toastService.error("Las contraseñas no coinciden")
    } else {
      this.auth.register(email, password);
    }

  }
}
