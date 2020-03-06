import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {MessagesService} from '../services/messages.service';
import {AuthorizationService} from '../services/authorization.service';
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

  @Input() public message: string;
  @Input() public date: string;
  @Input() public messId: string;
  @Input() public deleteMessage: string;
  @Input() public userId: string;
  @Input() public senderName: string;

  public container: HTMLElement;
  public editStatus: boolean;
  public editStatusCheck: Subscription;
  public otherMess: boolean;
  public messageText: string;
  public currentUserId: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService
  ) {
  }

  public editMessageForm = new FormGroup({
    editMessageInput: new FormControl(''),
  });

  public ngOnInit(): void {
    this.messagesService.getEditStatus().subscribe(status => this.otherMess = status);
    this.currentUserId = this.authorizationService.userId;
  }

  public ngAfterViewInit(): void {
    this.container = document.getElementById('msgContainer');
    this.container.scrollTop = this.container.scrollHeight;
  }

  public handleEditMessage(messId: string, message: string): void {
    this.otherMess = true;
    this.editStatusCheck = this.messagesService.getEditStatus().subscribe(status => this.editStatus = status);
    this.messageText = message;
    this.messagesService.editMessage(messId);
  }

  public handleSendEditedMess(inputData: IInputData): void {
    inputData.editMessageInput = this.messageText;
    if (typeof inputData.editMessageInput !== undefined && inputData.editMessageInput !== '' &&
      inputData.editMessageInput.match(/^\s+$/) === null) {
      this.messagesService.sendEditedMess(this.messageText);
      this.editStatusCheck.unsubscribe();
    } else {
      alert('Empty message');
    }
    this.otherMess = false;
  }

  public clearInput(): void {
    this.messageText = '';
  }

  public inputState(inputData: IInputData): void {
    this.messageText = inputData.editMessageInput;
  }
}
