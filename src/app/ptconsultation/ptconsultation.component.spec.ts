import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtconsultationComponent } from './ptconsultation.component';

describe('PtconsultationComponent', () => {
  let component: PtconsultationComponent;
  let fixture: ComponentFixture<PtconsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtconsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
