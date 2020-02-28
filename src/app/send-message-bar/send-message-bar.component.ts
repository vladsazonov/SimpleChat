import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {AuthorizationService} from '../service/authorization.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-send-message-bar',
  templateUrl: './send-message-bar.component.html',
  styleUrls: ['./send-message-bar.component.css']
})

export class SendMessageBarComponent implements OnInit {

  send: string;
  id: string;
  date: Date;
  minutes: number | string;
  today: string;
  sender: string;
  currUserId: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  sendMessageForm = new FormGroup({
    sendMessageInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.date = new Date();
    this.minutes = this.date.getMinutes();
    this.minutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
    this.today = this.date.getHours() + ':' + this.minutes;
    this.sender = this.authorizationService.currentUser;
    this.currUserId = this.authorizationService.userId;
  }

  inputState = (data: any): void => {
    this.send = data.sendMessageInput;
  }

  clearInput = (): void => {
    this.send = '';
  }

  handleSendMessage = (sender: string, data: any, date: string, fromUser: string): void => {
    if (data.sendMessageInput.length > 0 && data.sendMessageInput.match(/^\s+$/) === null) {
      this.id = Date.now() + Math.random().toString(36).substr(2, 9);
      this.messagesService.sendMessage(this.id, sender, data.sendMessageInput, date, fromUser);
      this.clearInput();
      data.sendMessageInput = '';
    } else {
      alert('empty message');
    }
  }
}
