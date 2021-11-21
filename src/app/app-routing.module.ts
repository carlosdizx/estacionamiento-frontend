import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPuestosComponent } from './componentes/listado-puestos/listado-puestos.component';
import {EditarPuestoComponent} from "./componentes/editar-puesto/editar-puesto.component";

const routes: Routes = [
  { path: 'puestos', component: ListadoPuestosComponent },
  { path: 'puestos/:id', component: EditarPuestoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
