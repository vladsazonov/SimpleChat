import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements AfterViewInit, OnInit {
  container: HTMLElement;
  editStatus: boolean;
  check: any;
  otherMess: boolean;
  mess: string;

  @Input() sender: string;
  @Input() message: string;
  @Input() date: string;
  @Input() messId: string;
  @Input() deleteMessage: string;
  @Input() currUserId: string;
  @Input() fromUserId: number;

  constructor(
    private messagesService: MessagesService,
  ) {
  }

  editMessageForm = new FormGroup({
    editMessageInput: new FormControl(''),
  });

  handleEditMessage = (messId: string, currUserId: string, message: string): void => {
    this.otherMess = true;
    this.check = this.messagesService.stat.subscribe(status => this.editStatus = status);
    this.mess = message;
    this.messagesService.editMessage(messId, currUserId);
  };

  handleSendEditedMess = (message: any): void => {
    message.editMessageInput = this.mess;
    if (typeof message.editMessageInput !== undefined && message.editMessageInput !== '' && message.editMessageInput.match(/^\s+$/) === null) {
      this.messagesService.sendEditedMess(this.mess);
      this.check.unsubscribe();
    } else {
      alert('Empty message');
    }
    this.otherMess = false;
  };

  clearInput = () => {
    this.mess = '';
  };

  inputState = (data: any) => {
    this.mess = data.editMessageInput;
  };

  ngOnInit() {
    this.messagesService.stat.subscribe(status => this.otherMess = status);
  }

  ngAfterViewInit() {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }
}
