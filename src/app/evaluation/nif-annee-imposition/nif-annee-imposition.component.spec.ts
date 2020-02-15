import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NifAnneeImpositionComponent } from './nif-annee-imposition.component';

describe('NifAnneeImpositionComponent', () => {
  let component: NifAnneeImpositionComponent;
  let fixture: ComponentFixture<NifAnneeImpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NifAnneeImpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NifAnneeImpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
