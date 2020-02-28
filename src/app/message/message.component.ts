import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';

interface IInputData {
  editMessageInput: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements AfterViewInit, OnInit {
  @Input() sender: string;
  @Input() message: string;
  @Input() date: string;
  @Input() messId: string;
  @Input() deleteMessage: string;
  @Input() currUserId: string;
  @Input() fromUserId: string;

  container: HTMLElement;
  editStatus: boolean;
  check: Subscription;
  otherMess: boolean;
  mess: string;

  constructor(
    private messagesService: MessagesService,
  ) {
  }

  editMessageForm = new FormGroup({
    editMessageInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.messagesService.stat.subscribe(status => this.otherMess = status);
  }

  ngAfterViewInit(): void {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }

  handleEditMessage = (messId: string, currUserId: string, message: string): void => {
    this.otherMess = true;
    this.check = this.messagesService.stat.subscribe(status => this.editStatus = status);
    this.mess = message;
    this.messagesService.editMessage(messId, currUserId);
  }

  handleSendEditedMess = (inputData: IInputData): void => {
    inputData.editMessageInput = this.mess;
    if (typeof inputData.editMessageInput !== undefined &&
      inputData.editMessageInput !== '' && inputData.editMessageInput.match(/^\s+$/) === null) {
      this.messagesService.sendEditedMess(this.mess);
      this.check.unsubscribe();
    } else {
      alert('Empty message');
    }
    this.otherMess = false;
  }

  clearInput = (): void => {
    this.mess = '';
  }

  inputState = (inputData: IInputData): void => {
    console.log('data', inputData);
    this.mess = inputData.editMessageInput;
  }
}
