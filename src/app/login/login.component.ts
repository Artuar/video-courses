import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string;
  public email: string;
  public password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.data.subscribe(data => this.title = data.title);
  }

  login() {
    this.userService.login()
      .subscribe(data => {
        if (data['IsAuthenticated']) {
          this.router.navigateByUrl('');
        }
      });
  }

}
