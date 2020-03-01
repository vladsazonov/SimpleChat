import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {AuthorizationService} from '../services/authorization.service';
import {IMessage} from '../models/message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {
  public messages: IMessage[];
  public currentUserName: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  public ngOnInit(): void {
    this.messages = this.messagesService.messages;
    this.currentUserName = this.authorizationService.currentUserName;
  }
}
