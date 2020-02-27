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
  constructor(
    private router: Router,
  ) {
  }

  authStatus = 'unAuthed';
  currentUser = localStorage.getItem('login') || 'null';
  userId = localStorage.getItem('id');
  users = (JSON.parse(localStorage.getItem('users'))) || [];
  newUser: INewUser = {
    id: '',
    login: '',
    password: '',
  };

  pushAuthData = (login, password) => {
    for (const user of this.users) {
      if (login === user.login && password === user.password) {
        localStorage.setItem('id', user.id.toString());
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
        this.currentUser = localStorage.getItem('login');
        this.userId = localStorage.getItem('id');
        this.router.navigateByUrl('/home');
      } else {
        console.log('Something went wrong');
      }
    }
  };

  pushRegData = (log: string, pass: string) => {
    console.log(this.users);
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
  };

  unAuth = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.router.navigateByUrl('/login');
  };
}
