import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrbookingComponent } from './drbooking.component';

describe('DrbookingComponent', () => {
  let component: DrbookingComponent;
  let fixture: ComponentFixture<DrbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
