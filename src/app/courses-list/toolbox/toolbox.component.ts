import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  public searchString: string = '';

  constructor() { }

  search(){
    console.log(`Search for ${this.searchString}`);
    this.searchString = '';
  }

  addCourse(){
    console.log('Click on Add course');
  }
}
