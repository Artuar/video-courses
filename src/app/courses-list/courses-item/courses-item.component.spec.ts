import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemComponent } from './courses-item.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {Course, CourseClass} from '../Course';
import {DurationFormatPipe} from '../../shared/pipes/duration-format.pipe';

@Component({
  selector: 'app-courses-item-spec',
  template: '<app-courses-item [course]="course"></app-courses-item>'
})
class CoursesItemSpecComponent {
  course = new CourseClass(0, 'First', 1527195600000, 1, 'description', false);
}

describe('CoursesItemComponent', () => {
  let component: CoursesItemComponent;
  let fixture: ComponentFixture<CoursesItemSpecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesItemSpecComponent,
        CoursesItemComponent,
        DurationFormatPipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemSpecComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('editCourse should be called', async(() => {
    spyOn(component, 'edit');

    const editButton = fixture.debugElement.nativeElement.querySelector('.edit');
    editButton.click();

    fixture.whenStable().then(() => {
      expect(component.edit).toHaveBeenCalled();
    });
  }));

  it('deleteCourse should be called', async(() => {
    spyOn(component, 'onDelete');

    const deleteButton = fixture.debugElement.nativeElement.querySelector('.delete');
    deleteButton.click();

    fixture.whenStable().then(() => {
      expect(component.onDelete).toHaveBeenCalled();
    });
  }));

});
