import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusTrapComponent } from './focus-trap.component';

describe('FocusTrapComponent', () => {
  let component: FocusTrapComponent;
  let fixture: ComponentFixture<FocusTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
