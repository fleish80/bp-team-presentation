import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFocusComponent } from './list-item-focus.component';

describe('ListItemFocusComponent', () => {
  let component: ListItemFocusComponent;
  let fixture: ComponentFixture<ListItemFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
