import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';
import {CoursesService} from './courses-page.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {OrderByPipe} from '../shared/pipes/order-by.pipe';

const TEST_VALUE = [
  {
    id: 0,
    title: 'First',
    creation_date: 1526763600000,
    duration: 1,
    description: 'description',
    top_rated: false
  },
  {
    id: 1,
    title: 'Second',
    creation_date: 1526763600000,
    duration: 62,
    description: 'without description',
    top_rated: true
  }
];

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        OrderByPipe
      ],
      providers: [
        CoursesService,
        HttpClient,
        HttpHandler
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

  it('noData should be called', () => {
    spyOn(component, 'addCourse');

    component.filteredCourses = [];
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.not_found');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.addCourse).toHaveBeenCalled();
    });
  });

  it('loadMore should be called', () => {
    spyOn(component, 'loadMore');

    component.filteredCourses = TEST_VALUE;
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.load_more_button');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.loadMore).toHaveBeenCalled();
    });
  });

});
