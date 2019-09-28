import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private  authorizationService: AuthorizationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('authStatus') === 'unAuthed') {
      this.router.navigate(['/login']);
    }
  }
}
