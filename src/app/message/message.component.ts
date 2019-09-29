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
  editStatus: any;
  check: any;
  myMessage: any;

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

  mess = '';
  otherMess: boolean = false;

  handleDeleteMessage = (messId, currUserId) => {
    this.messagesService.deleteMessage(messId, currUserId);
  };

  handleEditMessage = (messId, currUserId, message, fromUserId) => {
    this.otherMess = true;
    if (currUserId === fromUserId) {
      this.check = this.messagesService.stat
        .subscribe(status => this.editStatus = status);
      this.mess = message;
      this.messagesService.editMessage(messId, currUserId);
    } else {
      this.messagesService.discardEdit(true);
    }
  };

  handleSendEditedMess = (mess) => {
    if (mess.editMessageInput === '') {
      mess.editMessageInput = this.mess;
      if (mess.editMessageInput !== undefined && mess.editMessageInput !== '') {
        this.messagesService.sendEditedMess(this.mess);
        this.check.unsubscribe();
      } else {
        alert('Empty message');
      }
    } else if (mess.editMessageInput.match(/^\s+$/) === null && mess.editMessageInput !== undefined) {
      this.messagesService.sendEditedMess(mess.editMessageInput);
      this.check.unsubscribe();
    } else {
      alert('empty message');
    }
    this.otherMess = false;
  };

  clearInput = () => {
    this.mess = '';
  };

  inputState = (data) => {
    this.mess = data.editMessageInput;
  };

  ngOnInit() {
    this.editStatus = this.messagesService.theBoolean.getValue();
    this.messagesService.stat.subscribe(status => this.otherMess = status);
  }

  ngAfterViewInit() {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }
}
