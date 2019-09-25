import {EventEmitter, Injectable} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authStatus = 'unAuthed';
  currentUser = localStorage.getItem('login');
  users = [
    {id: 0, login: 'vlad', password: 'vlad'},
    {id: 1, login: 'masha', password: 'masha'},
    {id: 1, login: 'lol', password: 'lol'},
  ];

  pushAuthData = (login: string, password: string) => {
    console.log(login + ' ' + password);
    for (const user of this.users) {
      if (login === user.login && password === user.password) {
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
      } else {
        console.log('Something went wrong');
      }
    }
  };

  unAuth = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
  };

  constructor() {
  }
}
