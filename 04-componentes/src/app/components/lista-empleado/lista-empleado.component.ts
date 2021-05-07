import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  public empleados = [];
  errorMsg = "";

  constructor(private _empleadosServices:EmpleadoService) {
    this.empleados = this._empleadosServices.getEmpleados();
    // .subscribe(
    //   data => (this.empleados = data),
    //   error => {
    //     this.errorMsg = error.message
    //     console.log(error);
    //   }
    // );
  }

  ngOnInit() {
  }

}
