import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit {

  public nombre:string;
  public apellido:string;
  public id:string;

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.nombre = data["nombre"];
      this.apellido = data["apellido"];
      this.id = data["id"];
    });
  }

  volver(nombre){
    this.router.navigate(["empleados",{"nombre":nombre}]);
  }

}
