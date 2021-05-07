import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { AppRoutingModule , routingComponents} from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
