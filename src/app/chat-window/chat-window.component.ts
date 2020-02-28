import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {
  messages: object[];
  currentUserId: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
    this.messages = this.messagesService.messages;
    this.currentUserId = this.authorizationService.userId;
  }
}
