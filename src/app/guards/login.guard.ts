import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    return this.authorizationService.$authStatus.pipe(map(
      status => {
        if (status) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      }));
  }
}
