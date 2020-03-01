import {Component} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent {

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  public registerForm = new FormGroup({
    newLogin: new FormControl(''),
    newPassword: new FormControl(''),
  });
}
