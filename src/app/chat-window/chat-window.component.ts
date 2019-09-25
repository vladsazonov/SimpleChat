import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  constructor(
    private messagesService: MessagesService
  ) {
  }

  items = this.messagesService.messages;

  test = () => {
    console.log(this.messagesService.messages.length);
  };

  ngOnInit() {
  }

}
