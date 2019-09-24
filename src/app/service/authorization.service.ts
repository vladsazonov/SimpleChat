import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authStatus = 'unAuthed';
  users = [
    { id: 0, login: 'vlad', password: 'vlad'},
    { id: 1, login: 'masha', password: 'vlad'},
    { id: 1, login: 'lol', password: 'lol'},
  ];

  pushAuthData = (login: string, password: string) => {
    console.log(login + ' ' + password);
    for (const user of this.users) {
      if (login === user.login && password === user.password) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        this.authStatus = 'authed';
        localStorage.setItem('authStatus', 'authed');
      } else {
        console.log('хуйня');
        localStorage.setItem('authStatus', 'unAuthed');
      }
    }
  }

  unAuth = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
  }

  constructor() {
  }
}
