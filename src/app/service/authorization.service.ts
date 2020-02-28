import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

interface INewUser {
  id: string;
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  authStatus: string;
  currentUser: string;
  userId: string;
  users: INewUser[];
  newUser: INewUser;

  constructor(
    private router: Router,
  ) {
    this.getAuthorizationData();
  }

  getAuthorizationData = (): void => {
    this.authStatus = 'unAuthed';
    this.currentUser = localStorage.getItem('login') || 'null';
    this.userId = localStorage.getItem('id');
    this.users = (JSON.parse(localStorage.getItem('users'))) || [];
  }

  pushAuthData = (login: string, password: string): void => {
    for (const user of this.users) {
      if (login === user.login && password === user.password) {
        localStorage.setItem('id', user.id);
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
        this.currentUser = localStorage.getItem('login');
        this.userId = localStorage.getItem('id');
        this.router.navigateByUrl('/home');
      }
    }
  }

  pushRegData = (log: string, pass: string): void => {
    const a = this.users.find(user => user.login === log);
    if (!a) {
      if (log && pass) {
        const userId = Date.now() + Math.random().toString(36).substr(2, 9);
        this.newUser = {
          id: userId,
          login: log,
          password: pass,
        };
        this.users.push(this.newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigateByUrl('/login');
      }
    } else {
      alert('Имя пользователя занято');
    }
  }

  unAuth = (): void => {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.router.navigateByUrl('/login');
  }
}
