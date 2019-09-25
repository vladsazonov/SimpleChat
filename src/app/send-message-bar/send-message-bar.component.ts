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
  sendMessageForm = new FormGroup({
    sendMessageInput: new FormControl(''),
  });
  today = new Date().toISOString().slice(0, 10);
  sender = this.authorizationService.currentUser;
  send = '';

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  inputState = (data) => {
    this.send = data.sendMessageInput;
  };

  clearInput = () => {
    this.send = '';
  };

  handleSendMessage = (sender: string, text: any, date: string) => {
    if (text.sendMessageInput.length > 0 && text.sendMessageInput !== ' ') {
      this.messagesService.sendMessage(sender, text.sendMessageInput, date);
      this.clearInput();
    } else {
      alert('empty message');
    }
  };

  ngOnInit() {
  }

}
