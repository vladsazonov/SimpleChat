import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

interface INewUsers {
  messId: string;
  sender: string;
  message: string;
  date: string;
  fromUser: string;
}

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  messIndex: number;
  newMessage: INewUsers;
  messages: INewUsers[];
  stat: Observable<boolean>;
  editableMess: string;

  constructor() {
    this.getMessagesData();
  }

  theBoolean = new BehaviorSubject<boolean>(false);

  getMessagesData = (): void => {
    this.stat = this.theBoolean.asObservable();
    this.messages = (JSON.parse(localStorage.getItem('messArr'))) || [];
  }

  sendMessage = (id: string, Sender: string, Message: string, Date: string, currUserId: string): void => {
    this.newMessage = {
      messId: id,
      sender: Sender,
      message: Message,
      date: Date,
      fromUser: currUserId,
    };
    this.messages.push(this.newMessage);
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  deleteMessage = (messId: string): void => {
    const del = this.messages.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const a = this.messages.findIndex(elem => elem.messId === del.messId && elem.fromUser === currentUserId);
    if (a > -1) {
      this.messages.splice(a, 1);
    }
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  sendEditedMess = (newMess: string): void => {
    this.messages[this.messIndex].message = newMess;
    localStorage.setItem('messArr', JSON.stringify(this.messages));
    this.messIndex = null;
    this.getTheBoolean(false);
  }

  getTheBoolean = (bool: boolean): void => {
    this.theBoolean.next(bool);
  }

  editMessage = (messId: string, currUserId: string): void => {
    const edit = this.messages.find(id => messId === id.messId);
    this.messIndex = this.messages.findIndex(elem => elem.messId === edit.messId && elem.fromUser === currUserId);
    if (this.messIndex > -1 && messId === edit.messId) {
      this.getTheBoolean(true);
      this.editableMess = edit.message;
    } else {
      this.getTheBoolean(false);
    }
  }
}
