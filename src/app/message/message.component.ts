import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements AfterViewInit {
  container: HTMLElement;

  constructor(
    private messagesService: MessagesService,
  ) { }

  @Input() sender: string;
  @Input() message: string;
  @Input() date: string;

  /*ngOnInit() {
  }*/

  ngAfterViewInit() {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }

}
