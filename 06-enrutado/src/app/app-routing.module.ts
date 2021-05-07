import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentoListaComponent } from './components/departamento-lista/departamento-lista.component';
import { EmpleadoListaComponent } from './components/empleado-lista/empleado-lista.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { DepartamentoDetalleComponent } from './components/departamento-detalle/departamento-detalle.component';
import { EmpleadoDetalleComponent } from './components/empleado-detalle/empleado-detalle.component';
import { DepartamentoResumenComponent } from './components/departamento-resumen/departamento-resumen.component';
import { DepartamentoContactoComponent } from './components/departamento-contacto/departamento-contacto.component';

const routes : Routes = [
  { path: '', redirectTo:'empleados', pathMatch:'full'},
  { path: 'departamentos', component: DepartamentoListaComponent },
  {
      path: 'departamentos/:id', component: DepartamentoDetalleComponent ,
      children:[
        {path:'resumen', component:DepartamentoResumenComponent},
        {path:'contacto', component:DepartamentoContactoComponent}
      ]
  },
  { path: 'empleados', component: EmpleadoListaComponent },
  { path: 'empleado/:id/:nombre/:apellido', component: EmpleadoDetalleComponent },
  { path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}

export const routingComponents = [
  DepartamentoListaComponent,
  EmpleadoListaComponent,
  DepartamentoDetalleComponent,
  EmpleadoDetalleComponent,
  NoEncontradoComponent,
  DepartamentoResumenComponent,
  DepartamentoContactoComponent
]
