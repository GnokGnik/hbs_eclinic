import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PthistoryComponent } from './pthistory.component';

describe('PthistoryComponent', () => {
  let component: PthistoryComponent;
  let fixture: ComponentFixture<PthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
