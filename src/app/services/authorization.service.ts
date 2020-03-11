import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {MessagesService} from './messages.service';
import {IUser} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  public $authStatus = new BehaviorSubject<boolean>(false);
  public $users = new BehaviorSubject<IUser[]>([]);
  public currentUserName: string;
  public userId: string;
  public usersSubscription$: Subscription;


  constructor(
    private router: Router,
    private messagesService: MessagesService
  ) {
    this.getAuthorizationData();
  }

  public getAuthorizationData(): void {
    if (localStorage.getItem('authStatus') === 'authed') {
      this.$authStatus.next(true);
    }
    this.$users.next(JSON.parse(localStorage.getItem('users')) || []);
    this.currentUserName = localStorage.getItem('login');
    this.userId = localStorage.getItem('id');
    this.usersSubscription$ = this.$users.subscribe(users => {
      localStorage.setItem('users', JSON.stringify(users));
    });

  }

  public currentUser(): Observable<IUser> {
    return this.$users.pipe(map(users => {
      return users.find(user => user.login === this.currentUserName);
    }));
  }

  public checkLocalstorage(): void {
    if (localStorage.users === undefined) {
      localStorage.setItem('users', '[]');
    }
    if (localStorage.messArr === undefined) {
      localStorage.setItem('messArr', '[]');
    }
    if (localStorage.authStatus === undefined) {
      localStorage.setItem('authStatus', 'unAuthed');
    }
  }

  public pushAuthData(login: string, password: string): void {
    const isUserExists = this.$users.value.find(user => login === user.login && password === user.password);
    if (isUserExists) {
      localStorage.setItem('id', isUserExists.id);
      localStorage.setItem('login', login);
      localStorage.setItem('password', password);
      localStorage.setItem('authStatus', 'authed');
      this.currentUserName = isUserExists.login;
      this.userId = isUserExists.id;
      this.$authStatus.next(true);
      this.usersSubscription$.unsubscribe();
      this.router.navigate(['/home']);
    } else {
      alert('неверный логин или пароль');
    }
  }

  public pushRegData(Login: string, Password: string): void {
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

  public generateUserId(): string {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  }

  public updateUserList(id: string, login: string, password: string): void {
    const users = [...this.$users.value, {id, login, password}];
    this.$users.next(users);
  }

  public unAuth(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.setItem('authStatus', 'unAuthed');
    this.$authStatus.next(false);
    this.messagesService.$editStatus.next(false);
    this.usersSubscription$ = this.$users.subscribe(users => {
      localStorage.setItem('users', JSON.stringify(users));
    });
    this.messagesService.messagesSubscription$.unsubscribe();
    this.router.navigate(['/login']);
  }
}
