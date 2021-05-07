import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalleEmpleadoComponent } from './lista-detalle-empleado.component';

describe('ListaDetalleEmpleadoComponent', () => {
  let component: ListaDetalleEmpleadoComponent;
  let fixture: ComponentFixture<ListaDetalleEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDetalleEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetalleEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
