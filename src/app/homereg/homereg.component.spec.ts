import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeregComponent } from './homereg.component';

describe('HomeregComponent', () => {
  let component: HomeregComponent;
  let fixture: ComponentFixture<HomeregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
