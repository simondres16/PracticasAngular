import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento-lista',
  templateUrl: './departamento-lista.component.html',
  styleUrls: ['./departamento-lista.component.css']
})
export class DepartamentoListaComponent implements OnInit {

  public idSeleccionado:number;

  departamentos:any[] = [
    {"id": 1 , "nombre" : "Angular"},
    {"id": 2 , "nombre" : "Node"},
    {"id": 3 , "nombre" : "Mongo"},
    {"id": 4 , "nombre" : "Ruby"},
    {"id": 5 , "nombre" : "C#"}
  ]

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.idSeleccionado = parseInt(data["cod"]);
    });
  }

  navegar(id){
    // this.router.navigate(["departamento", id ]);
    this.router.navigate([id],{relativeTo:this.route});
  }

  estaSeleccionado(id){
    return this.idSeleccionado === id;
  }

}
