import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlNameComponent } from './form-control-name.component';

describe('FormControlNameComponent', () => {
  let component: FormControlNameComponent;
  let fixture: ComponentFixture<FormControlNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
