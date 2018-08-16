import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/services/User';
import {UserService} from '../../../core/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppStore} from '../../../app.store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;
  public pageTitle: string;

  constructor(
    private store: Store<AppStore>,
    private userService: UserService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    if (store) {
      store.subscribe(reduxStore => {
        const str = reduxStore['store'];
        if (str && this.user !== null) {
          this.user = str.user;
        }
      }, () =>  {
        console.error('Error');
      });
    }
  }

  ngOnInit() {
    if (this.userService.isLogin()) {
      this.userService.getUserData();
    }
    this.activeRoute.data.subscribe(data => this.pageTitle = data.title);
  }

  logOff() {
    this.userService.logout()
      .subscribe(() => {
        this.store.dispatch({type: 'REMOVE_USER'});
        this.router.navigateByUrl('login');
      });
  }

}
