import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  newMessagesList: any;
  messages = JSON.parse(localStorage.getItem('messArr')) || [];
  newMessage = {
    messId: '',
    sender: '',
    message: '',
    date: '',
    fromUser: null,
  };

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
    const del = this.messages.find(a => messId === a.messId);
    const currentUserId = +localStorage.getItem('id');
    console.log(del.messId);
   /* this.messages.splice(this.messages.filter(elem => elem.messId === del.messId && elem.fromUser === currentUserId), 1);*/
    const a = this.messages.findIndex(elem => elem.messId === del.messId && elem.fromUser === currentUserId);
    console.log(a);
    if (a !== 0 && a > 0) {
      this.messages.splice(a, 1);
    }
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  };

  getMessages = () => {

  };

  constructor() {
  }
}
