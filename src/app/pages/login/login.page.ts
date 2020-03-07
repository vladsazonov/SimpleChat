import {Component} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage {

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {
  }

  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
}
