import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPuestosComponent } from './componentes/listado-puestos/listado-puestos.component';
import { EditarPuestoComponent } from './componentes/editar-puesto/editar-puesto.component';
import {ListadoRegistrosComponent} from "./componentes/listado-registros/listado-registros.component";

const routes: Routes = [
  { path: '', redirectTo: 'puestos', pathMatch: 'full' },
  { path: 'puestos', component: ListadoPuestosComponent },
  { path: 'puestos/:id', component: EditarPuestoComponent },
  { path: 'registros', component: ListadoRegistrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
