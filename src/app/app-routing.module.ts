import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {LoginPage} from './pages/login/login.page';
import {RegistrationPage} from './pages/registration/registration.page';
import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'registration',
    component: RegistrationPage,
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
