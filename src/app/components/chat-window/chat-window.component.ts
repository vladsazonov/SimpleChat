import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {IMessage} from '../../models/message';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})

export class ChatWindowComponent implements OnInit {

  public messages$: Observable<IMessage[]>;

  @Input() public userName: string;

  constructor(
    private messagesService: MessagesService,
  ) {
  }

  public ngOnInit(): void {
    this.messages$ = this.messagesService.getMessages();
  }
}
