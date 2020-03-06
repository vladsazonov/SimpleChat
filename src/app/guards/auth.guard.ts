import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  public canActivate(): boolean {
    if (!this.authorizationService.isUserAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
