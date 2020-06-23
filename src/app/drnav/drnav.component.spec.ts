import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrnavComponent } from './drnav.component';

describe('DrnavComponent', () => {
  let component: DrnavComponent;
  let fixture: ComponentFixture<DrnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
