import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/services/Puesto';
import { PuestosService } from '../../services/puestos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: [],
})
export class ListadoPuestosComponent implements OnInit {
  puestos: Puesto[] = [];

  constructor(private service: PuestosService, private router: Router) {}

  ngOnInit(): void {
    this.listarPuestos();
  }

  listarPuestos(): void {
    this.service
      .listarPuestos()
      .subscribe((puestos) => (this.puestos = puestos));
  }

  async actualizarPuesto(puesto: Puesto) {
    if (puesto.placa !== '1') {
      puesto.placa = '1';
      this.service.actualizarPuesto(puesto).subscribe();
    } else {
      await this.router.navigateByUrl(`/puestos/${puesto.id}`);
    }
  }
}
