import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesEvaluerComponent } from './tables-evaluer.component';

describe('TablesEvaluerComponent', () => {
  let component: TablesEvaluerComponent;
  let fixture: ComponentFixture<TablesEvaluerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesEvaluerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesEvaluerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
