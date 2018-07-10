import { CourseHighlightDirective } from './course-highlight.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


@Component({
  template: `<div class="course" [appCourseHighlight]="today"></div>`
})
class TestComponent {
  public today: number = new Date().getTime();
}

describe('CourseHighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CourseHighlightDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('.course'));
  });

  it('check add class', () => {
    fixture.detectChanges();
    expect(divEl.nativeElement.classList).toContain('fresh');
  });

});
