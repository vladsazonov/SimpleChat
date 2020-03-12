import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';
import {Observable} from 'rxjs';
import {IUser} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class HomePage implements OnInit {

  public user$: Observable<IUser>;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  public ngOnInit(): void {
   this.user$ = this.authorizationService.currentUser();
  }
}
