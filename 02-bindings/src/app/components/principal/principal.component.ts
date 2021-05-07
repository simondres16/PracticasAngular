import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {



  constructor() { }

  public estadoTitulo:boolean = true;

  public claseTitulo = {
    "titulo-true" : this.estadoTitulo,
    "titulo-false" : !this.estadoTitulo
  };

  ngOnInit() {
  }

  cambiarEstado(){

    this.estadoTitulo = !this.estadoTitulo;

    this.claseTitulo = {
      "titulo-true" : this.estadoTitulo,
      "titulo-false" : !this.estadoTitulo
    }
  }

}
