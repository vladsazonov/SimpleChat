import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {
  items: object[];
  user: string;
  userId: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  ngOnInit(): void {
    this.items = this.messagesService.messages;
    this.user = this.authorizationService.currentUser;
    this.userId = this.authorizationService.userId;
  }
}
