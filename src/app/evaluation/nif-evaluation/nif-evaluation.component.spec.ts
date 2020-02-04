import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NifEvaluationComponent } from './nif-evaluation.component';

describe('NifEvaluationComponent', () => {
  let component: NifEvaluationComponent;
  let fixture: ComponentFixture<NifEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NifEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NifEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
