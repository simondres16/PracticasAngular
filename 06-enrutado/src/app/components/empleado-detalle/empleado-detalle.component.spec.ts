import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDetalleComponent } from './empleado-detalle.component';

describe('EmpleadoDetalleComponent', () => {
  let component: EmpleadoDetalleComponent;
  let fixture: ComponentFixture<EmpleadoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
