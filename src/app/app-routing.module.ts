import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultarComponent} from './Cursos/consultar/consultar.component';
import {RegistrarComponent} from './Cursos/registrar/registrar.component';
import {EditarComponent} from './Cursos/editar/editar.component';


const routes: Routes = [
  {path: 'consultar', component: ConsultarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
