import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  handleLogin = (login, password) => {
    this.authorizationService.pushAuthData(login, password);
  }
  handleUnLogin = () => {
    this.authorizationService.unAuth();
  }

  ngOnInit() {
  }

}
