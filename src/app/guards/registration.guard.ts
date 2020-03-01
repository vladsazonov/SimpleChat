import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

 public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authorizationService.isUserAuthenticated()) {
      this.router.navigate(['/home']);
      return false;
    }
   return true;
 }
}
