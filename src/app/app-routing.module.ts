import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NoticesComponent } from './components/notices/notices.component';
import { AuthGuard } from './auth.guard';
import { TicketsComponent } from './components/tickets/tickets.component';
import { ConfigurationUserComponent } from './components/configuration-user/configuration-user.component';
import { DetailsUserComponent } from './components/details-user/details-user.component';
import { UpdateDateComponent } from './components/update-date/update-date.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { AdminGuard } from './utils/AdminGuard';
import { VerifiedGuard } from './utils/VerifiedGuard';
import { PanelNoticeComponent } from './components/panel-notice/panel-notice.component';
import { PanelClientsComponent } from './components/panel-clients/panel-clients.component';
import { PanelTicketsComponent } from './components/panel-tickets/panel-tickets.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  , {
    path: 'home',
    component: HomeComponent
  }
  , {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'myaccount',
    component: TicketsComponent, canActivate: [AuthGuard,VerifiedGuard]
  }, {
    path:'panelAdmin',
    component:PanelAdminComponent,canActivate: [AuthGuard, AdminGuard],
    children:[
      {
        path: '',
        component: PanelNoticeComponent
      },
      {
        path: 'panelNotices',
        component: PanelNoticeComponent
      },{
        path:'panelClients',
        component:PanelClientsComponent
      },{
        path:'panelTickets',
        component:PanelTicketsComponent
      }
    ]
  },
  {
    path: 'configuration',
    component: ConfigurationUserComponent, canActivate: [AuthGuard,VerifiedGuard],
    children: [
      {
        path: '',
        component: DetailsUserComponent
      },
      {
        path: 'details',
        component: DetailsUserComponent
      },
      {
        path: 'update',
        component: UpdateDateComponent
      }
    ]
  },
  {
    path: 'notices',
    component: NoticesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
