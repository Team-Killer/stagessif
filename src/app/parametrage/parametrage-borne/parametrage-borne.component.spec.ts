import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrageBorneComponent } from './parametrage-borne.component';

describe('ParametrageBorneComponent', () => {
  let component: ParametrageBorneComponent;
  let fixture: ComponentFixture<ParametrageBorneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrageBorneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrageBorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
