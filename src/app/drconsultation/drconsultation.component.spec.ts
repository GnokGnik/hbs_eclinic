import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrconsultationComponent } from './drconsultation.component';

describe('DrconsultationComponent', () => {
  let component: DrconsultationComponent;
  let fixture: ComponentFixture<DrconsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrconsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
