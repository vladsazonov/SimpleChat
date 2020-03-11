import {Component} from '@angular/core';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public title = 'SimpleChat';

  constructor(
    private authorizationService: AuthorizationService
  ) {
    this.authorizationService.checkLocalstorage();
  }
}
