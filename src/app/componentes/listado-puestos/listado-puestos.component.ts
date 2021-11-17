import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/services/Puesto';
import { PuestosService } from '../../services/puestos.service';

@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: [],
})
export class ListadoPuestosComponent implements OnInit {
  puestos: Puesto[] = [];

  constructor(private service: PuestosService) {}

  ngOnInit(): void {
    this.listarPuestos();
  }

  listarPuestos(): void {
    this.service
      .listarPuestos()
      .subscribe((puestos) => (this.puestos = puestos));
  }
}
