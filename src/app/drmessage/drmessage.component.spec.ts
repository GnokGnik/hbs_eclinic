import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrmessageComponent } from './drmessage.component';

describe('DrmessageComponent', () => {
  let component: DrmessageComponent;
  let fixture: ComponentFixture<DrmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
