import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  registerForm = new FormGroup({
    newLogin: new FormControl(''),
    newPassword: new FormControl(''),
  });

  constructor(
    private authorizationService: AuthorizationService
  ) { }

  handlePushRegData = (regData) => {
    this.authorizationService.pushRegData(regData.newLogin, regData.newPassword);
  }

  ngOnInit() {
  }

}
