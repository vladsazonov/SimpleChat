import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  items = this.messagesService.messages;
  user = this.authorizationService.currentUser;
  userId = this.authorizationService.userId;

  ngOnInit() {
  }

}
