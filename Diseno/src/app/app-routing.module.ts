import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Paginas
import { InicioComponent } from './inicio/inicio.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'categoria/software',component:SoftwareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
