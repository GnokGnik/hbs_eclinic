import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrmrecordComponent } from './drmrecord.component';

describe('DrmrecordComponent', () => {
  let component: DrmrecordComponent;
  let fixture: ComponentFixture<DrmrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrmrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrmrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
