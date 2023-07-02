import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoadScriptsService } from './services/load-script.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { environment } from 'src/environments/environment';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';

import {AngularFireModule} from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorFirebaseService } from './services/error-firebase.service';
import { HomeComponent } from './components/home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoticesComponent } from './components/notices/notices.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirestoreUsersService } from './services/firestore-users.service';
import { ConfigurationUserComponent } from './components/configuration-user/configuration-user.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { UpdateDateComponent } from './components/update-date/update-date.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PanelNoticeComponent } from './components/panel-notice/panel-notice.component';
import { PanelClientsComponent } from './components/panel-clients/panel-clients.component';
import { PanelTicketsComponent } from './components/panel-tickets/panel-tickets.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FirestoreNoticesService } from './services/firestore-notices.service';
import { CarrouselHomeComponent } from './components/carrousel-home/carrousel-home.component';
import { CardViesaComponent } from './components/cards/card-viesa/card-viesa.component';
import { CardVigiaComponent } from './components/cards/card-vigia/card-vigia.component';
import { CardVigiaGomasComponent } from './components/cards/card-vigia-gomas/card-vigia-gomas.component';
import { CardAirComponent } from './components/cards/card-air/card-air.component';
import { UploadArchComponent } from './components/upload-arch/upload-arch.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CommonModule } from '@angular/common';

//environment.firebaseConfig
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegisterComponent,
    HomeComponent,
    VerifyEmailComponent,
    NavigationComponent,
    NoticesComponent,
    TicketsComponent,
    ConfigurationUserComponent,
    DetailsUserComponent,
    UpdateDateComponent,
    PanelAdminComponent,
    PanelNoticeComponent,
    PanelClientsComponent,
    PanelTicketsComponent,
    CarrouselHomeComponent,
    CardViesaComponent,
    CardVigiaComponent,
    CardVigiaGomasComponent,
    CardAirComponent,
    UploadArchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, //  toastr required animations module
    ToastrModule.forRoot(),
    EditorModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),



  ],
  providers: [
    AuthService,
    FirestoreUsersService,
    FirestoreNoticesService,
    ErrorFirebaseService,
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideStorage(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

