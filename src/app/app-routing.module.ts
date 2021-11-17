import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPuestosComponent } from "./componentes/listado-puestos/listado-puestos.component";

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:"listado-puestos"},
  {path:"puestos", component: ListadoPuestosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
