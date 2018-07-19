import {Component, OnInit} from '@angular/core';
import {User} from '../../services/User';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.isLogin()) {
      this.userService.getUserData()
        .subscribe(
          user => {
            this.user = user;
          });
    }
  }

  logOff() {
    this.userService.logout()
      .subscribe(() => {
        this.router.navigateByUrl('login');
      });
  }

}
