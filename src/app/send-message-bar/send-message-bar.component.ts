import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../service/messages.service';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-send-message-bar',
  templateUrl: './send-message-bar.component.html',
  styleUrls: ['./send-message-bar.component.css']
})

export class SendMessageBarComponent implements OnInit {
  today = new Date().toISOString().slice(0, 10);
  sender = this.authorizationService.currentUser;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) { }

  handleSendMessage = (sender: string, text: string, date: string) => {
    this.messagesService.sendMessage(sender, text, date);
  }

  ngOnInit() {
  }

}
