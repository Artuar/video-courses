import {Component, Input} from '@angular/core';
import {User} from '../shared/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() user: User;

  logOff() {
    console.log('Click on LogOff button.');
  }

}
