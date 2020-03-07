import {Component} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {AuthorizationService} from '../../services/authorization.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-send-message-bar',
  templateUrl: './send-message-bar.component.html',
  styleUrls: ['./send-message-bar.component.css']
})

export class SendMessageBarComponent {

  public inputValue: string;

  constructor(
    private messagesService: MessagesService,
    private authorizationService: AuthorizationService,
  ) {
  }

  public sendMessageForm = new FormGroup({
    sendMessageInput: new FormControl(''),
  });

  public generateDate(): string {
    const date = new Date();
    const minutes = date.getMinutes();
    return date.getHours().toString() + ':' + (minutes > 9 ? minutes.toString() : '0' + minutes.toString());
  }

  public inputState(data: any): void {
    this.inputValue = data.sendMessageInput;
  }

  public clearInput(): void {
    this.inputValue = '';
  }

  public handleSendMessage(inputData: any): void {
    if (inputData.sendMessageInput.length > 0 && inputData.sendMessageInput.match(/^\s+$/) === null) {
      this.messagesService.sendMessage(
        this.authorizationService.generateUserId(),
        inputData.sendMessageInput,
        this.generateDate(),
        this.authorizationService.userId,
        this.authorizationService.currentUserName
      );
      this.clearInput();
      inputData.sendMessageInput = '';
    } else {
      alert('empty message');
    }
  }
}
