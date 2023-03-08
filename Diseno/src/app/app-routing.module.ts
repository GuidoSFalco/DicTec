import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Paginas
import { InicioComponent } from './inicio/inicio.component';
import { SoftwareComponent } from './software/software.component';
import { Softwarev2Component } from './softwarev2/softwarev2.component';
import { Softwarev3Component } from './softwarev3/softwarev3.component';

const routes: Routes = [
  {path:'fsfgsgseg',component:InicioComponent},
  {path:'',component:SoftwareComponent},
  {path:'v2',component:Softwarev2Component},
  {path:'v3',component:Softwarev3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
