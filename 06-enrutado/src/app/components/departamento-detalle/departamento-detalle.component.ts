import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent implements OnInit {

  idDepartamento = 0;
  constructor(private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.idDepartamento = parseInt(data["id"]);
    });
    // this.idDepartamento = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  irAnterior(){
    let idAnterior:number = this.idDepartamento - 1;
    this.router.navigate(["departamentos" , idAnterior]);
    this.router.navigate(['../',idAnterior],{relativeTo:this.route});
  }

  irSiguiente(){
    let idSiguiente:number =this.idDepartamento + 1;
    this.router.navigate(["departamentos" , idSiguiente]);
    this.router.navigate(['../',idSiguiente],{relativeTo:this.route});
  }

  irLista(){
    let idSeleccionado = this.idDepartamento ? this.idDepartamento : null;
    this.router.navigate(["departamentos",{cod:idSeleccionado}]);
  }

  mostrarResumen(){
    this.router.navigate(['resumen'], {relativeTo:this.route} );
  }

  mostrarContacto(){
    this.router.navigate(['contacto'], {relativeTo:this.route} );
  }

}
