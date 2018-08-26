import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Course, CourseClass } from '../Course';
import { CoursesItemEditComponent } from './courses-item-edit.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {Observable} from 'rxjs/index';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorService} from '../author.service';

describe('CoursesItemEditComponent', () => {
  let component: CoursesItemEditComponent;
  let fixture: ComponentFixture<CoursesItemEditComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: { } },
    params: new Observable()
  } as ActivatedRoute;

  const fakeCoursesService = {
    getCoursesList: () => {},
    getCourseById: () => new Observable()
  };

  const fakeAuthorService = {
    getAuthorsList: () => {}
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ CoursesItemEditComponent ],
      providers: [
        {provide: CoursesService, useValue: fakeCoursesService},
        {provide: AuthorService, useValue: fakeAuthorService},
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesItemEditComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onCancel should be called', () => {
    spyOn(component, 'onCancel');
    component['id'] = 'new';
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('.cancel');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onCancel).toHaveBeenCalled();
    });
  });

  it('onSave should be called', () => {
    spyOn(component, 'onSave');
    component['id'] = 'new';
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('.save');
    button.disabled = false;
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSave).toHaveBeenCalled();
    });
  });

});
