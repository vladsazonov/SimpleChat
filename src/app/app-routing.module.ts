import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {AuthGuard, LoginGuard, RegistrationGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    canActivate: [RegistrationGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
