import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs';

interface INewUser {
  id: string;
  login: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public user$: Observable<INewUser>;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  public ngOnInit(): void {
   this.user$ = this.authorizationService.currentUser();
  }
}
