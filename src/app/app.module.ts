import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoadScriptsService } from './services/load-script.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    PreLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
