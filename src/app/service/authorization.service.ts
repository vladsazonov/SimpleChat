import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authStatus = 'unAuthed';
  currentUser = localStorage.getItem('login') || 'null';
  userId = +localStorage.getItem('id');
  users = [
    {id: 0, login: 'Vlad', password: 'Vlad'},
    {id: 1, login: 'Masha', password: 'Masha'},
    {id: 2, login: 'Petya', password: 'Petya'},
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
