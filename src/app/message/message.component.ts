import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {MessagesService} from '../service/messages.service';
import {AuthorizationService} from '../service/authorization.service';
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

  currentUserId: string;

  @Input() message: string;
  @Input() date: string;
  @Input() messId: string;
  @Input() deleteMessage: string;
  @Input() userId: string;
  @Input() senderName: string;

  container: HTMLElement;
  editStatus: boolean;
  check: Subscription;
  otherMess: boolean;
  messageText: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService
  ) {
  }

  editMessageForm = new FormGroup({
    editMessageInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.messagesService.stat.subscribe(status => this.otherMess = status);
    this.currentUserId = this.authorizationService.userId;
  }

  ngAfterViewInit(): void {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }

  handleEditMessage(messId: string, message: string): void {
    this.otherMess = true;
    this.check = this.messagesService.stat.subscribe(status => this.editStatus = status);
    this.messageText = message;
    this.messagesService.editMessage(messId);
  }

  handleSendEditedMess(inputData: IInputData): void {
    inputData.editMessageInput = this.messageText;
    if (typeof inputData.editMessageInput !== undefined &&
      inputData.editMessageInput !== '' && inputData.editMessageInput.match(/^\s+$/) === null) {
      this.messagesService.sendEditedMess(this.messageText);
      this.check.unsubscribe();
    } else {
      alert('Empty message');
    }
    this.otherMess = false;
  }

  clearInput(): void {
    this.messageText = '';
  }

  inputState(inputData: IInputData): void {
    this.messageText = inputData.editMessageInput;
  }
}
