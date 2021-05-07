import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoContactoComponent } from './departamento-contacto.component';

describe('DepartamentoContactoComponent', () => {
  let component: DepartamentoContactoComponent;
  let fixture: ComponentFixture<DepartamentoContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
