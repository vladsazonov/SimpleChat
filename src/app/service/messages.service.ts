import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  public theBoolean = new BehaviorSubject<boolean>(false);
  public changeBan = new BehaviorSubject<boolean>(false);
  stat = this.theBoolean.asObservable();
  otherMess = this.changeBan.asObservable();
  messIndex: number;
  messages = (JSON.parse(localStorage.getItem('messArr'))) || [];
  newMessage = {
    messId: '',
    sender: '',
    message: '',
    date: '',
    fromUser: null,
  };
  editableMess: string;

  constructor() {
  }

  sendMessage = (id: string, Sender: string, Message: string, Date: string, currUserId: number) => {
    this.newMessage = {
      messId: id,
      sender: Sender,
      message: Message,
      date: Date,
      fromUser: currUserId,
    };
    this.messages.push(this.newMessage);
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  };

  deleteMessage = (messId: string, currUserId: number) => {
    const del = this.messages.find(id => messId === id.messId);
    const currentUserId = localStorage.getItem('id');
    const a = this.messages.findIndex(elem => elem.messId === del.messId && elem.fromUser === currentUserId);
    if (a > -1) {
      this.messages.splice(a, 1);
    }
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  };

  sendEditedMess = (newMess) => {
    this.messages[this.messIndex].message = newMess;
    localStorage.setItem('messArr', JSON.stringify(this.messages));
    this.messIndex = null;
    this.getTheBoolean(false);
  };

  getTheBoolean = (bool) => {
    this.theBoolean.next(bool);
  };

  discardEdit = (bool) => {
    this.changeBan.next(bool);
  };

  editMessage = (messId: string, currUserId: string) => {
    const edit = this.messages.find(id => messId === id.messId);
    this.messIndex = this.messages.findIndex(elem => elem.messId === edit.messId && elem.fromUser === currUserId);
    if (this.messIndex > -1 && messId === edit.messId) {
      this.getTheBoolean(true);
      this.editableMess = edit.message;
    } else {
      this.getTheBoolean(false);
    }
  };
}
