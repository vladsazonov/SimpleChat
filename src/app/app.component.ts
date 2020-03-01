import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title = 'SimpleChat';

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  public ngOnInit(): void {
    this.authorizationService.checkLocalstorage();
  }
}
