import { Injectable } from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isLogin()) {
      this.router.navigateByUrl('login');
      return false;
    }
    return this.userService.getIsAuthenticated()
  }
}
