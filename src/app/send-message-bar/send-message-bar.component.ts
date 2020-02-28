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

  inputValue: string;
  id: string;
  date: Date;
  minutes: number;
  sendingDate: string;
  currentUserId: string;
  senderName: string;

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
    this.sendingDate = this.date.getHours() + ':' + (this.minutes > 9 ? this.minutes.toString() : '0' + this.minutes.toString());
    this.currentUserId = this.authorizationService.userId;
    this.senderName = this.authorizationService.currentUserName;
  }

  inputState(data: any): void {
    this.inputValue = data.sendMessageInput;
  }

  clearInput(): void {
    this.inputValue = '';
  }

  handleSendMessage(inputData: any, date: string, fromUserId: string, senderName: string): void {
    if (inputData.sendMessageInput.length > 0 && inputData.sendMessageInput.match(/^\s+$/) === null) {
      this.id = Date.now() + Math.random().toString(36).substr(2, 9);
      this.messagesService.sendMessage(this.id, inputData.sendMessageInput, date, fromUserId, senderName);
      this.clearInput();
      inputData.sendMessageInput = '';
    } else {
      alert('empty message');
    }
  }
}
