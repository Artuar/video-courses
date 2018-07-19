import { Component } from '@angular/core';
import {Router} from '@angular/router';
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
    private router: Router,
    private userService: UserService
  ) { }

  login() {
    this.userService.login()
      .subscribe((data) => {
        this.router.navigateByUrl('');
      });
  }

}
