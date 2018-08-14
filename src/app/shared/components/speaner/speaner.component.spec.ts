import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeanerComponent } from './speaner.component';

describe('SpeanerComponent', () => {
  let component: SpeanerComponent;
  let fixture: ComponentFixture<SpeanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
