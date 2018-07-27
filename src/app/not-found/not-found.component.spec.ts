import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Router} from "@angular/router";

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ],
      providers: [
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
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
