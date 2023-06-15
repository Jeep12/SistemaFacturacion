import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }
  ,  {
    path:'login',
    component:LoginComponent
  }
  ,{
    path:'register',
    component:RegisterComponent
  }
  ,{
    path:'preload',
    component:PreLoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
