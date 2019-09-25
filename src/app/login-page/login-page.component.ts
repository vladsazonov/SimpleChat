import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
    if (localStorage.getItem('authStatus') === 'authed') {
      this.router.navigate(['/login']);
    }
  }

  handleLogin = (login, password) => {
    this.authorizationService.pushAuthData(login, password);
  };

  ngOnInit() {
  }

}
