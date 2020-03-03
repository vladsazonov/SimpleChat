import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  public canActivate(): boolean {
    if (this.authorizationService.isUserAuthenticated()) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
