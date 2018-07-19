import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../services/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter();

  constructor() { }

  logOff() {
    this.logout.emit();
  }

}
