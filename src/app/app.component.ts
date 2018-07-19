import {Component, OnInit} from '@angular/core';
import {User} from './shared/services/User';
import {UserService} from './shared/services/user.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        if (!this.userService.isLogin()) {
          this.user = null;
        } else if (!this.user) {
          this.userService.getUserData()
            .subscribe(
              user => {
                this.user = user;
              });
        }
      }
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(() => {
        this.router.navigateByUrl('login');
      });
  }

}
