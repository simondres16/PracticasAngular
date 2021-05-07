import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoResumenComponent } from './departamento-resumen.component';

describe('DepartamentoResumenComponent', () => {
  let component: DepartamentoResumenComponent;
  let fixture: ComponentFixture<DepartamentoResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
