import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface INewUser {
  id: string;
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  public $authStatus = new BehaviorSubject<boolean>(false);
  public authStatus: string;
  public currentUserName: string;
  public userId: string;
  public users: INewUser[];
  public newUser: INewUser;
  public $users = new BehaviorSubject<INewUser[]>([]);

  constructor(
    private router: Router,
  ) {
    this.getAuthorizationData();
  }

  public getAuthorizationData(): void {
    this.loadUsers();
    const auth = localStorage.getItem('authStatus');
    if (auth === 'authed') {
      this.$authStatus.next(true);
    }
    this.currentUserName = localStorage.getItem('login') || 'null';
    this.userId = localStorage.getItem('id') || 'null';
  }

  public addUser(user: INewUser[]): void {
    this.$users.next(user);
  }

  public currentUser(): Observable<INewUser> {
    return this.$users.pipe(map(users => {
      return users.find(user => user.login === this.currentUserName);
    }));
  }

  public loadUsers() {
    this.$users.next(JSON.parse(localStorage.getItem('users')) || []);
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
    if (this.$users.value.length > 0) {
      const isUserExists = this.$users.value.find(user => login === user.login && password === user.password);
      if (isUserExists) {
        localStorage.setItem('id', isUserExists.id);
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);
        localStorage.setItem('authStatus', 'authed');
        this.currentUserName = isUserExists.login;
        this.userId = isUserExists.id;
        this.$authStatus.next(true);
        this.router.navigate(['/home']);
      } else {
        alert('неверный логин или пароль');
      }
    } else {
      alert('Создайте пользователя');
    }
  }

  public pushRegData(Login: string, Password: string): void {
    if (this.$users.value.length === 0) {
      if (Login.match(/^\s+$/) === null && Password.match(/^\s+$/) === null) {
        this.updateUserList(this.generateUserId(), Login, Password);
        this.router.navigate(['/login']);
      } else {
        alert('Некорректный логин или пароль');
      }
    } else {
      const isUserExists = this.$users.value.find(user => user.login === Login);
      if (!isUserExists) {
        if (Login.match(/^\s+$/) === null && Password.match(/^\s+$/) === null) {
          this.updateUserList(this.generateUserId(), Login, Password);
          this.router.navigate(['/login']);
        } else {
          alert('Некорректный логин или пароль');
        }
      } else {
        alert('Имя пользователя занято');
      }
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
    const b = this.$users.value; // TODO overwrite this code part
    b.push(this.newUser);
    this.addUser(b);
    localStorage.setItem('users', JSON.stringify(b));

  }

  public unAuth(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.$authStatus.next(false);
    this.router.navigate(['/login']);
  }
}
