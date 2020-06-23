import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtnavComponent } from './ptnav.component';

describe('PtnavComponent', () => {
  let component: PtnavComponent;
  let fixture: ComponentFixture<PtnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
