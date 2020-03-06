import {Component, Input} from '@angular/core';
import {AuthorizationService} from '../services/authorization.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})

export class ChatNavBarComponent {

  @Input() public avatarSymbol: string;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }
}
