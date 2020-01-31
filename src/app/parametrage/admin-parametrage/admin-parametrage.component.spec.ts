import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParametrageComponent } from './admin-parametrage.component';

describe('AdminParametrageComponent', () => {
  let component: AdminParametrageComponent;
  let fixture: ComponentFixture<AdminParametrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParametrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
