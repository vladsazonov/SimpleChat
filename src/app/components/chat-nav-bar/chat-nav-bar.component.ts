import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChatNavBarComponent {

  @Input() public avatarSymbol: string;

  constructor(
    public authorizationService: AuthorizationService
  ) {
  }
}
