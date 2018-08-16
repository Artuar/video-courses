import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';

import { CoursesListComponent } from './courses-list.component';
import {CoursesService} from '../courses.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {OrderByPipe} from '../../shared/pipes/order-by.pipe';
import {Router} from '@angular/router';
import {StoreModule} from "@ngrx/store";

const TEST_VALUE = [
  {
    id: 0,
    name: 'First',
    date: 1526763600000,
    duration: 1,
    description: 'description',
    isTopRated: false
  },
  {
    id: 1,
    name: 'Second',
    date: 1526763600000,
    duration: 62,
    description: 'without description',
    isTopRated: true
  }
];

describe('CoursesPageComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [
        CoursesListComponent,
        OrderByPipe
      ],
      providers: [
        CoursesService,
        HttpClient,
        HttpHandler,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('noData should be called', () => {
    spyOn(component, 'addCourse');

    component.courses = [];
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.not_found');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.addCourse).toHaveBeenCalled();
    });
  });

  it('loadMore should be called', () => {
    spyOn(component, 'loadMore');

    component.courses = TEST_VALUE;
    fixture.detectChanges();

    const loadButton = fixture.debugElement.nativeElement.querySelector('.load_more_button');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.loadMore).toHaveBeenCalled();
    });
  });

});
