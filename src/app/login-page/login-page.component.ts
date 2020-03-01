import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

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
  }

  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  public ngOnInit(): void {
    if (localStorage.getItem('authStatus') === 'authed') {
      this.router.navigate(['/']);
    }
  }
}
