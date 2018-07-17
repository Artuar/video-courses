import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {User} from '../../shared/services/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
      this.userService
        .getUserData()
        .subscribe(user => this.user = user);
  }

  logOff() {
    this.userService.logOut()
      .subscribe(data => {
        if (!data['IsAuthenticated']) {
          this.router.navigateByUrl('login');
        }
      });
  }

}
