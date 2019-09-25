import { Component } from '@angular/core';
import {AppModule} from './app.module';
import { Router } from '@angular/router';
import { AuthorizationService } from './service/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private authorizationService: AuthorizationService,
  ) {
    if (localStorage.getItem('authStatus') === 'authed') {
      this.router.navigateByUrl('/home');
      this.status = true;
    } else if (localStorage.getItem('authStatus') === 'unAuthed') {
      this.router.navigateByUrl('/login');
      this.status = true;
    }
  }

  title = 'SimpleChat';
  status = false;
  kek = localStorage.getItem('authStatus');
}
