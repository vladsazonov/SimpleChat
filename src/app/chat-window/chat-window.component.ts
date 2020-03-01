import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {AuthorizationService} from '../service/authorization.service';
import {IMessage} from '../models/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {
  messages: IMessage[];
  currentUserName: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
    this.messages = this.messagesService.messages;
    this.currentUserName = this.authorizationService.currentUserName;
  }
}
