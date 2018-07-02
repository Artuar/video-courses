import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSearch should be called', () => {
    spyOn(component, 'onSearch');

    let button = fixture.debugElement.nativeElement.querySelector('.search_button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSearch).toHaveBeenCalled();
    })
  });

  it('addCourse should be called', () => {
    spyOn(component, 'addCourse');

    let button = fixture.debugElement.nativeElement.querySelector('.add_course');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addCourse).toHaveBeenCalled();
    })
  });

});
