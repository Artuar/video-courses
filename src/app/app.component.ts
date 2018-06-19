import {Component, OnInit} from '@angular/core';
import {User} from './shared/User';
import {UserService} from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService
      .getUserData()
      .subscribe(user => this.user = user);
  }

}
