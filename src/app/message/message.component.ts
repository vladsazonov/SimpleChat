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
  mess = '';
  editStatus: any;
  check: any;
  myMessage: boolean = false;

  constructor(
    private messagesService: MessagesService,
  ) {
  }

  editMessageForm = new FormGroup({
    editMessageInput: new FormControl(''),
  });

  @Input() sender: any;
  @Input() message: string;
  @Input() date: string;
  @Input() messId: string;
  @Input() deleteMessage: string;
  @Input() currUserId: number;
  @Input() fromUserId: number;

  handleDeleteMessage = (messId, currUserId) => {
    this.messagesService.deleteMessage(messId, currUserId);
  };

  handleEditMessage = (messId, currUserId, message, fromUserId) => {
    if (currUserId === fromUserId) {
      this.check = this.messagesService.stat
        .subscribe(status => this.editStatus = status);
      this.mess = message;
      this.messagesService.editMessage(messId, currUserId);
    }
  };

  handleSendEditedMess = (mess) => {
    if (mess.editMessageInput.length === 0) {
      mess.editMessageInput = this.mess;
      this.messagesService.sendEditedMess(this.mess);
      this.check.unsubscribe();
    } else {
      this.messagesService.sendEditedMess(mess.editMessageInput);
      this.check.unsubscribe();
    }
  };

  clearInput = () => {
    this.mess = '';
  };

  inputState = (data) => {
    this.mess = data.sendMessageInput;
  };

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
    if (this.currUserId === this.fromUserId) {
      this.myMessage = true;
    }
  }
}
