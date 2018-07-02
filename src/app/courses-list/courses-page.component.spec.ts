import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';
import {CoursesService} from './courses-page.service';

const TEST_VALUE = [
  {
    id: 0,
    title: 'First',
    creation_date: '12/01/2018',
    duration: '1m',
    description: 'description'
  },
  {
    id: 1,
    title: 'Second',
    creation_date: '12/02/2018',
    duration: '2m',
    description: 'without description'
  }
];

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ],
      providers: [
        { provide: CoursesService, useValue: TEST_VALUE }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loadMore should be called', () => {
    spyOn(component, 'loadMore');

    const loadButton = fixture.debugElement.nativeElement.querySelector('.load_more_button');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.loadMore).toHaveBeenCalled();
    });
  });

});
