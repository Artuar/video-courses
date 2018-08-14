import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-speaner',
  templateUrl: './speaner.component.html',
  styleUrls: ['./speaner.component.scss']
})
export class SpeanerComponent implements OnInit {
  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
