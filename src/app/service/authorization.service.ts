import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authStatus = 'unAuthed';
  currentUser = localStorage.getItem('login');
  userId = +localStorage.getItem('id');
  users = [
    {id: 0, login: 'vlad', password: 'vlad'},
    {id: 1, login: 'masha', password: 'masha'},
    {id: 2, login: 'lol', password: 'lol'},
  ];

  constructor(
    private router: Router,
  ) {
  }

  pushAuthData = (login, password) => {
    console.log(login + ' ' + password);
    for (const user of this.users) {
      const userId = user.id;
      if (login === user.login && password === user.password) {
        localStorage.setItem('id', userId.toString());
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
        this.currentUser = localStorage.getItem('login');
        this.userId = +localStorage.getItem('id');
        this.router.navigateByUrl('/home');
      } else {
        console.log('Something went wrong');
      }
    }
  };

  unAuth = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.router.navigateByUrl('/login');
  };
}
