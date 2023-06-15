import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NoticesComponent } from './components/notices/notices.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,  {
    path:'home',
    component:HomeComponent
  }
  ,{
    path:'register',
    component:RegisterComponent
  },
  {
    path:'verify-email',
    component:VerifyEmailComponent
  },
  {
    path:'notices',
    component:NoticesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
