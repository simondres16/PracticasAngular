import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

import { EstudiantesService } from '././services/estudiantes.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EstudiantesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
