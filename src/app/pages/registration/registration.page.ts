import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegistrationPage {

  constructor(
    public authorizationService: AuthorizationService
  ) { }

  public registerForm = new FormGroup({
    newLogin: new FormControl(''),
    newPassword: new FormControl(''),
  });
}
