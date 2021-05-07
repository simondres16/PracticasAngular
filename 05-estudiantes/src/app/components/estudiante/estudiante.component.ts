import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../services/estudiantes.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  public estudiantes:any = [];

  constructor(private _estudiantesServices:EstudiantesService) {
    this.estudiantes = this._estudiantesServices.getEstudiantes();
  }

  ngOnInit() {
  }

}
