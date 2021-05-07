import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
