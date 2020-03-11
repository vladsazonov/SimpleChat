import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {IMessage} from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  public messIndex: number;
  public $messages = new BehaviorSubject<IMessage[]>([]);
  public $editStatus = new BehaviorSubject<boolean>(false);
  public messagesSubscription$: Subscription;

  constructor() {
    this.$messages.next(JSON.parse(localStorage.getItem('messArr')) || []);
    this.messagesSubscription$ = this.$messages.subscribe(messages => {
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
    const deletedMessage = this.$messages.value.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const deletedMessageIndex = this.$messages.value.findIndex(
      elem => elem.messId === deletedMessage.messId && elem.userId === currentUserId);
    if (deletedMessageIndex > -1) {
      const messages = this.$messages.value;
      messages.splice(deletedMessageIndex, 1);
      this.$messages.next(messages);
    }
  }

  public editMessage(messId: string): void {
    const findedMessage = this.$messages.value.find(id => messId === id.messId);
    this.messIndex = this.$messages.value.findIndex(elem => elem.messId === findedMessage.messId);
    if (this.messIndex > -1 && messId === findedMessage.messId) {
      this.$editStatus.next(true);
    } else {
      this.$editStatus.next(false);
    }
  }

  public sendEditedMess(newMessage: string): void {
    const messages = this.$messages.value;
    messages[this.messIndex].message = newMessage;
    this.$messages.next(messages);
    this.messIndex = null;
    this.$editStatus.next(false);
  }
}
