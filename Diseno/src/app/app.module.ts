import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Paginas
import { InicioComponent } from './inicio/inicio.component';
import { SoftwareComponent } from './software/software.component';
import { Softwarev2Component } from './softwarev2/softwarev2.component';
import { Softwarev3Component } from './softwarev3/softwarev3.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SoftwareComponent,
    Softwarev2Component,
    Softwarev3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
