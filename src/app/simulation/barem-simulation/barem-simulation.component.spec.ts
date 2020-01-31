import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaremSimulationComponent } from './barem-simulation.component';

describe('BaremSimulationComponent', () => {
  let component: BaremSimulationComponent;
  let fixture: ComponentFixture<BaremSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaremSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaremSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
