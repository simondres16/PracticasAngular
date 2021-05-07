import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../class/usuario';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {

  public url:string = 'http://localhost:3000/vinculacion';

  constructor(private _http:HttpClient) { }

  guardar(usuario:Usuario){
    return this._http.post<any>(this.url,usuario)
    .pipe(catchError(this.error));
  }

  error(er:HttpErrorResponse){
    console.log(er)
    return throwError("Error: " + er);
  }

}
