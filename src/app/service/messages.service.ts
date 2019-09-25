import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  messages = JSON.parse(localStorage.getItem('messArr')) || [];
  newMessage = {
    sender: '',
    message: '',
    date: ''
  };

  sendMessage = (Sender: string, Message: string, Date: string) => {
    this.newMessage = {
      sender: Sender,
      message: Message,
      date: Date,
    };
    this.messages.push(this.newMessage);
    localStorage.setItem('messArr', JSON.stringify(this.messages));
  }

  getMessages = () => {

  }

  constructor() { }
}
