import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})

export class ChatNavBarComponent implements OnInit {
  avatarSymbol: string;

  constructor(
    private authorizationService: AuthorizationService
  ) {
  }

  ngOnInit(): void {
    this.avatarSymbol = this.authorizationService.currentUserName[0].toUpperCase();
  }
}


