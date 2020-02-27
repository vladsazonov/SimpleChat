import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})

export class ChatNavBarComponent implements OnInit {
  user: string;
  avatarSymbol: string;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authorizationService.currentUser;
    this.avatarSymbol = this.user[0].toUpperCase();
  }
}


