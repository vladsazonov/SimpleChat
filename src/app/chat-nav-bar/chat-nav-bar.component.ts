import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  user = this.authorizationService.currentUser;
  avatarSymbol = this.user[0].toUpperCase();

    constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  handleUnLogin = () => {
    this.authorizationService.unAuth();
    this.router.navigate(['/login']);
  };

  ngOnInit() {
  }
}
