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

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  sendMessageForm = new FormGroup({
    sendMessageInput: new FormControl(''),
  });
  date = new Date();
  today = this.date.getHours() + ':' + this.date.getMinutes();
  sender = this.authorizationService.currentUser;
  currUserId = this.authorizationService.userId;
  send = '';
  id: string;

  inputState = (data) => {
    this.send = data.sendMessageInput;
    console.log(this.send);
  };

  clearInput = () => {
    this.send = '';
  };

  handleSendMessage = (sender, text, date, fromUser) => {
    if (text.sendMessageInput.length > 0 && text.sendMessageInput !== ' ') {
      this.id = Date.now() + Math.random().toString(36).substr(2, 9);
      this.messagesService.sendMessage(this.id, sender, text.sendMessageInput, date, fromUser);
      this.clearInput();
    } else {
      alert('empty message');
    }
  };

  ngOnInit() {
  }

}
