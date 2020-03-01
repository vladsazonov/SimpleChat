import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title = 'SimpleChat';

  constructor(
    private router: Router,
  ) {
    if (localStorage.getItem('authStatus') === 'authed') {
      this.router.navigateByUrl('/');
    }
  }

  public ngOnInit(): void {
    if (localStorage.login === undefined) {
      localStorage.setItem('login', '');
      if (localStorage.password === undefined) {
        localStorage.setItem('password', '');
        if (localStorage.id === undefined) {
          localStorage.setItem('id', 'null');
          if (localStorage.authStatus === undefined) {
            localStorage.setItem('authStatus', 'unAuthed');
            if (localStorage.messArr === undefined) {
              localStorage.setItem('messArr', 'null');
              if (localStorage.users === undefined) {
                localStorage.setItem('users', '[]');
              }
            }
          }
        }
      }
    }
  }
}
