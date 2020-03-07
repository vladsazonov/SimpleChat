import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';
import {Observable} from 'rxjs';
import {IUser} from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public user$: Observable<IUser>;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  public ngOnInit(): void {
   this.user$ = this.authorizationService.currentUser();
  }
}
