import { Injectable } from '@angular/core';

@Injectable()
export class EstudiantesService {

  private estudiantes = [
    {"id" : 1 , "nombre" : "simon" , "apellido" : "muñoz"},
    {"id" : 2 , "nombre" : "brian" , "apellido" : "beltran"},
    {"id" : 3 , "nombre" : "andres" , "apellido" : "diaz"},
    {"id" : 4 , "nombre" : "angie" , "apellido" : "martinez"},
    {"id" : 5 , "nombre" : "johan" , "apellido" : "suarez"},
    {"id" : 6 , "nombre" : "sebastian" , "apellido" : "ortiz"},
    {"id" : 7 , "nombre" : "daniel" , "apellido" : "saavedra"},
    {"id" : 8 , "nombre" : "oscar" , "apellido" : "reyes"}
  ]

  constructor() { }

  public getEstudiantes(){
    return this.estudiantes;
  }
}
