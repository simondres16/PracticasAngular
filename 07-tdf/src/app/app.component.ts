import { Component } from '@angular/core';
import { Usuario } from "./class/usuario";
import { VinculacionService } from './services/vinculacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _vinculacion:VinculacionService){}

  title = 'tdf';
  topicos = ["Angular","React","Java"];
  usuario = new Usuario('','','','vacio',' ',false);
  errorInteres:boolean = true;
  envio:boolean = false;
  errorMsg:string = '';

  validarItem(topico){
    if (topico === 'vacio') {
      this.errorInteres = true;
    } else {
      this.errorInteres = false;
    }
  }

  onSubmit(userForm){
    console.log(userForm);
    console.log(this.usuario);
    this.envio = true;
    this._vinculacion.guardar(this.usuario).subscribe(data => {
      console.log("Exito :3",data);
    } , error => {
      this.errorMsg = error.statusText;
    });
  }
}
