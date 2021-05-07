import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { ListaDetalleEmpleadoComponent } from './components/lista-detalle-empleado/lista-detalle-empleado.component';

import { EmpleadoService } from './services/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ListaEmpleadoComponent,
    ListaDetalleEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
