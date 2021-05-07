import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmpleadoService {

  private _url:string = "../assets/data/empleados.json";

  // private empleados:any = [
  //   {"id":1,"nombre":"Juana","edad":25},
  //   {"id":2,"nombre":"Maria","edad":32},
  //   {"id":3,"nombre":"Pedro","edad":21},
  //   {"id":4,"nombre":"Andres","edad":27}
  // ];

  constructor(private _http: HttpClient) {

  }

  public getEmpleados(){
    let empleados:any;

    this._http.get(this._url).subscribe(
      data => {
        empleados = data
        console.log(data);
      },
      error => {
        empleados = error.message
        console.log(error);

      }
    );
    console.log(empleados);

    return empleados;
  }

  // errorHandler(error: HttpErrorResponse){
  //   return throwError(error.message || "Error del Servidor");
  // }

}

export interface IEmpleado {
  "id" : number;
  "nombre" : string;
  "edad" : number;
}
