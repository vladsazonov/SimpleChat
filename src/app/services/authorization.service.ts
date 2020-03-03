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
    this.currentUserName = localStorage.getItem('login') || 'null';
    this.userId = localStorage.getItem('id') || 'null';
    this.users = (JSON.parse(localStorage.getItem('users'))) || [];
  }

  public isUserAuthenticated() {
    return this.authStatus === 'authed';
  }

  public checkLocalstorage() {
    if (localStorage.login === undefined) {
      localStorage.setItem('login', '');
      if (localStorage.password === undefined) {
        localStorage.setItem('password', '');
        if (localStorage.id === undefined) {
          localStorage.setItem('id', '');
          if (localStorage.authStatus === undefined) {
            localStorage.setItem('authStatus', 'unAuthed');
            if (localStorage.messArr === undefined) {
              localStorage.setItem('messArr', '[]');
              if (localStorage.users === undefined) {
                localStorage.setItem('users', '[]');
              }
            }
          }
        }
      }
    }
  }

  public pushAuthData(login: string, password: string): void {
    const isUserExists = this.users.find(user => login === user.login && password === user.password);
    if (isUserExists && this.users.length > 0) {
      localStorage.setItem('id', isUserExists.id);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('authStatus', 'authed');
      this.currentUserName = localStorage.getItem('login');
      this.userId = localStorage.getItem('id');
      this.users = (JSON.parse(localStorage.getItem('users')));
      this.authStatus = localStorage.getItem('authStatus');
      this.router.navigate(['/home']);
    } else {
      alert('неверный логин или пароль');
    }
  }

  public pushRegData(Login: string, Password: string): void {
    const isUserExists = this.users.find(user => user.login === Login);
    if (!isUserExists) {
      if (Login.match(/^\s+$/) === null && Password.match(/^\s+$/) === null) {
        this.updateUserList(this.generateUserId(), Login, Password);
        this.router.navigate(['/login']);
      } else { alert('Некорректный логин или пароль'); }
    } else {
      alert('Имя пользователя занято');
    }
  }

  public generateUserId(): string {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }

  public updateUserList(userId: string, Login: string, Password: string): void {
    this.newUser = {
      id: userId,
      login: Login,
      password: Password,
    };
    this.users.push(this.newUser);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  public unAuth(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.authStatus = localStorage.getItem('authStatus');
    this.router.navigate(['/login']);
  }
}
