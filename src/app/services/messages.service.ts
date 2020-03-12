import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMessage} from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  public messIndex: number;
  public $messages = new BehaviorSubject<IMessage[]>([]);
  public $editStatus = new BehaviorSubject<boolean>(false);

  constructor() {
    this.$messages.next(JSON.parse(localStorage.getItem('messArr')) || []);
    this.$messages.subscribe(messages => {
      localStorage.setItem('messArr', JSON.stringify(messages));
    });
  }

  public getEditStatus(): Observable<boolean> {
    return this.$editStatus.asObservable();
  }

  public getMessages(): Observable<IMessage[]> {
    return this.$messages.asObservable();
  }

  public sendMessage(messId: string, message: string, date: string, userId: string, senderName: string): void {
    const messages = [...this.$messages.value, {messId, message, date, userId, senderName}];
    this.$messages.next(messages);
  }

  public deleteMessage(messId: string): void {
    const messages = this.$messages.value.filter(message => message.messId !== messId);
    this.$messages.next(messages);
  }

  public editMessage(messId: string): void {
    this.messIndex = this.$messages.value.findIndex(elem => elem.messId === messId);
    if (this.messIndex > -1) {
      this.$editStatus.next(true);
    } else {
      this.$editStatus.next(false);
    }
  }

  public sendEditedMess(newMessage: string): void {
    const messages = this.$messages.value;
    messages[this.messIndex].message = newMessage;
    this.$messages.next(messages);
    this.$editStatus.next(false);
  }
}
