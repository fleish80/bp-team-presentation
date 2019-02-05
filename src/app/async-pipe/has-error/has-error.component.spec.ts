import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasErrorComponent } from './has-error.component';

describe('HasErrorComponent', () => {
  let component: HasErrorComponent;
  let fixture: ComponentFixture<HasErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
