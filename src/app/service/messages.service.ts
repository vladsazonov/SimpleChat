import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMessage} from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  messIndex: number;
  newMessage: IMessage;
  messages: IMessage[];
  stat: Observable<boolean>;

  constructor() {
    this.getMessagesData();
  }

  theBoolean = new BehaviorSubject<boolean>(false);

  getMessagesData(): void {
    this.stat = this.theBoolean.asObservable();
    this.messages = (JSON.parse(localStorage.getItem('messArr'))) || [];
  }

  sendMessage(id: string, Message: string, Date: string, currentUserId: string, SenderName: string): void {
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

  deleteMessage(messId: string): void {
    const deletedMessage = this.messages.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const deletedMessageIndex = this.messages.findIndex(elem => elem.messId === deletedMessage.messId && elem.userId === currentUserId);
    if (deletedMessageIndex > -1) {
      this.messages.splice(deletedMessageIndex, 1);
    }
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  getTheBoolean(bool: boolean): void {
    this.theBoolean.next(bool);
  }

  editMessage(messId: string): void {
    const findedMessage = this.messages.find(id => messId === id.messId);
    this.messIndex = this.messages.findIndex(elem => elem.messId === findedMessage.messId);
    if (this.messIndex > -1 && messId === findedMessage.messId) {
      this.getTheBoolean(true);
    } else {
      this.getTheBoolean(false);
    }
  }

  sendEditedMess(newMessage: string): void {
    this.messages[this.messIndex].message = newMessage;
    localStorage.setItem('messArr', JSON.stringify(this.messages));
    this.messIndex = null;
    this.getTheBoolean(false);
  }
}
