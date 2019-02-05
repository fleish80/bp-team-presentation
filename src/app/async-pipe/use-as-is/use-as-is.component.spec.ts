import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAsIsComponent } from './use-as-is.component';

describe('UseAsIsComponent', () => {
  let component: UseAsIsComponent;
  let fixture: ComponentFixture<UseAsIsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseAsIsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAsIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
