import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilParametrageComponent } from './acceuil-parametrage.component';

describe('AcceuilParametrageComponent', () => {
  let component: AcceuilParametrageComponent;
  let fixture: ComponentFixture<AcceuilParametrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilParametrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
