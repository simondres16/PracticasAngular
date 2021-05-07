import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-lista-detalle-empleado',
  templateUrl: './lista-detalle-empleado.component.html',
  styleUrls: ['./lista-detalle-empleado.component.css']
})
export class ListaDetalleEmpleadoComponent implements OnInit {

  public empleados = [];

  constructor(private _empleadosServices:EmpleadoService) {
    // this.empleados = this._empleadosServices.getEmpleados();
  }


  ngOnInit() {

  }

}
