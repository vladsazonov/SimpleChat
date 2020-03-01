import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMessage} from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  public messIndex: number;
  public newMessage: IMessage;
  public messages: IMessage[];
  public stat: Observable<boolean>;

  constructor() {
    this.getMessagesData();
  }

  public theBoolean = new BehaviorSubject<boolean>(false);

  public getMessagesData(): void {
    this.stat = this.theBoolean.asObservable();
    this.messages = (JSON.parse(localStorage.getItem('messArr'))) || [];
  }

  public sendMessage(id: string, Message: string, Date: string, currentUserId: string, SenderName: string): void {
    this.newMessage = {
      messId: id,
      message: Message,
      date: Date,
      userId: currentUserId,
      senderName: SenderName,
    };
    this.messages.push(this.newMessage);
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  public deleteMessage(messId: string): void {
    const deletedMessage = this.messages.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const deletedMessageIndex = this.messages.findIndex(elem => elem.messId === deletedMessage.messId && elem.userId === currentUserId);
    if (deletedMessageIndex > -1) {
      this.messages.splice(deletedMessageIndex, 1);
    }
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  public getTheBoolean(bool: boolean): void {
    this.theBoolean.next(bool);
  }

  public editMessage(messId: string): void {
    const findedMessage = this.messages.find(id => messId === id.messId);
    this.messIndex = this.messages.findIndex(elem => elem.messId === findedMessage.messId);
    if (this.messIndex > -1 && messId === findedMessage.messId) {
      this.getTheBoolean(true);
    } else {
      this.getTheBoolean(false);
    }
  }

  public sendEditedMess(newMessage: string): void {
    this.messages[this.messIndex].message = newMessage;
    localStorage.setItem('messArr', JSON.stringify(this.messages));
    this.messIndex = null;
    this.getTheBoolean(false);
  }
}
