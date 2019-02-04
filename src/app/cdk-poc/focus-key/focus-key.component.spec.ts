import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusKeyComponent } from './focus-key.component';

describe('FocuskeyComponent', () => {
  let component: FocusKeyComponent;
  let fixture: ComponentFixture<FocusKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
