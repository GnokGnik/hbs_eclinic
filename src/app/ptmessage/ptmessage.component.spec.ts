import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtmessageComponent } from './ptmessage.component';

describe('PtmessageComponent', () => {
  let component: PtmessageComponent;
  let fixture: ComponentFixture<PtmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
