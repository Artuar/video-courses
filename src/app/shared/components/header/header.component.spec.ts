import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    expect(title.textContent).toContain('Video courses');
  }));

  it('logOff should be called', () => {
    spyOn(component, 'logOff');

    const loadButton = fixture.debugElement.nativeElement.querySelector('.logOff');
    loadButton.click();

    fixture.whenStable().then(() => {
      expect(component.logOff).toHaveBeenCalled();
    });
  });

});
