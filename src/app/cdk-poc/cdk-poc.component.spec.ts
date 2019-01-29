import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPocComponent } from './cdk-poc.component';

describe('CdkPocComponent', () => {
  let component: CdkPocComponent;
  let fixture: ComponentFixture<CdkPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
