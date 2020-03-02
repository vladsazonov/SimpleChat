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

  public authStatus: string;
  public currentUserName: string;
  public userId: string;
  public users: INewUser[];
  public newUser: INewUser;

  constructor(
    private router: Router,
  ) {
    this.getAuthorizationData();
  }

  public getAuthorizationData(): void {
    this.authStatus = localStorage.getItem('authStatus');
    console.log(this.authStatus);
    this.currentUserName = localStorage.getItem('login') || 'null';
    this.userId = localStorage.getItem('id');
    this.users = (JSON.parse(localStorage.getItem('users'))) || [];
  }

  public pushAuthData(login: string, password: string): void {
    for (const user of this.users) {
      if (login === user.login && password === user.password) {
        localStorage.setItem('id', user.id);
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
        this.currentUserName = localStorage.getItem('login');
        this.userId = localStorage.getItem('id');
        this.router.navigateByUrl('/');
      }
    }
  }

  public pushRegData(Login: string, Password: string): void {
    const isUserExists = this.users.find(user => user.login === Login);
    if (!isUserExists) {
      if (Login && Password) {
        const userId = Date.now() + Math.random().toString(36).substr(2, 9);
        this.newUser = {
          id: userId,
          login: Login,
          password: Password,
        };
        this.users.push(this.newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.router.navigateByUrl('/login');
      }
    } else {
      alert('Имя пользователя занято');
    }
  }

  public unAuth(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.router.navigateByUrl('/login');
  }
}
