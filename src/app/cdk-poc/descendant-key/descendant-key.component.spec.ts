import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendantKeyComponent } from './descendant-key.component';

describe('DescendantKeyComponent', () => {
  let component: DescendantKeyComponent;
  let fixture: ComponentFixture<DescendantKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescendantKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendantKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
