import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

const ONE_DAY = 24 * 60 * 60 * 1000;

@Directive({
  selector: '[appCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {
  @Input ('appCourseHighlight') courseDate: number;
  private currentDate: number = new Date().getTime();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.courseDate > this.currentDate) {
      this.renderer.addClass(this.el.nativeElement, 'upcoming');
    } else if (this.currentDate - this.courseDate < 14 * ONE_DAY) {
      this.renderer.addClass(this.el.nativeElement, 'fresh');
    }
  }

}
