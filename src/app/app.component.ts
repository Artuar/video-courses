import {Component, OnInit} from '@angular/core';
import {User} from './shared/services/User';
import {UserService} from './shared/services/user.service';
import {Router} from '@angular/router';

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
  ) {}

  ngOnInit() {
    this.userService.getUserData()
      .subscribe(
        user => {
          this.user = user;
          if (!this.user.IsAuthenticated) {
            this.router.navigateByUrl('login');
          }
        },
        () =>  {
          this.router.navigateByUrl('login');
        });
  }

}
