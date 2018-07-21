import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemEditComponent } from './courses-item-edit.component';

describe('CoursesItemEditComponent', () => {
  let component: CoursesItemEditComponent;
  let fixture: ComponentFixture<CoursesItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
