import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    return this.authorizationService.$authStatus.pipe(map(
      status => {
        if (!status) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
    ));
  }
}
