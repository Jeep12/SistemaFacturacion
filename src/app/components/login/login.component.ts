import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputType: string = 'password';
  showPassword: boolean = false;
  iconSrc: string = '../../../assets/images/eyeopen.png';
  loginUser!: FormGroup;

  constructor(
    private toastService: ToastrService,
    private fb: FormBuilder,
    private auth: AuthService) {
    this.loginUser = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
  login() {
    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;
    this.auth.login(email,password);
  }
}
