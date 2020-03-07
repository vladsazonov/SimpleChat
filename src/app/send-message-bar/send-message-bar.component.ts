import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {AuthorizationService} from '../services/authorization.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-send-message-bar',
  templateUrl: './send-message-bar.component.html',
  styleUrls: ['./send-message-bar.component.css']
})

export class SendMessageBarComponent implements OnInit {

  public inputValue: string;
  public date: Date;
  public minutes: number;
  public sendingDate: string;
  public currentUserId: string;
  public senderName: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  public sendMessageForm = new FormGroup({
    sendMessageInput: new FormControl(''),
  });

  public ngOnInit(): void {
    this.date = new Date();
    this.minutes = this.date.getMinutes();
    this.sendingDate = this.date.getHours() + ':' + (this.minutes > 9 ? this.minutes.toString() : '0' + this.minutes.toString());
    this.currentUserId = this.authorizationService.userId;
    this.senderName = this.authorizationService.currentUserName;
  }

  public inputState(data: any): void {
    this.inputValue = data.sendMessageInput;
  }

  public clearInput(): void {
    this.inputValue = '';
  }

  public handleSendMessage(inputData: any, date: string, fromUserId: string, senderName: string): void {
    if (inputData.sendMessageInput.length > 0 && inputData.sendMessageInput.match(/^\s+$/) === null) {
      // tslint:disable-next-line:max-line-length
      this.messagesService.sendMessage(this.authorizationService.generateUserId(), inputData.sendMessageInput, date, fromUserId, senderName);
      this.clearInput();
      inputData.sendMessageInput = '';
    } else {
      alert('empty message');
    }
  }
}
