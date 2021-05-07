import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {

  public nombre:string;

  empleados:any[] = [
    {"id":1,"nombre":"Simon","apellido":"Muñoz"},
    {"id":2,"nombre":"Jhonatan","apellido":"Diaz"},
    {"id":3,"nombre":"Brian","apellido":"Beltran"},
    {"id":4,"nombre":"Angie","apellido":"Martinez"},
    {"id":5,"nombre":"Sebastian","apellido":"Ortiz"},
    {"id":6,"nombre":"Daniel","apellido":"Saavedra"}
  ]
  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.nombre = this.validarH2(data["nombre"]);
    });
  }

  validarH2(dato){
    if(dato!=null){
      return "Usted selecciono " + dato;
    } else {
      return "No se selecciono nada o nadie D:";
    }
  }

  verMas(empleado){
    console.log(empleado)
    this.router.navigate(['empleado',empleado.id,empleado.nombre,empleado.apellido]);
  }

}
