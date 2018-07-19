import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLogin()) {
      console.log('login active');
      return true;
    } else {
      this.router.navigateByUrl('login');
      console.log('login active false');
      return false;
    }
  }
}
