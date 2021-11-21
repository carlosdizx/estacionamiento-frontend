import { Component, OnInit } from '@angular/core';
import { Puesto } from 'src/app/services/Puesto';
import { Registro } from 'src/app/services/Registro';
import { PuestosService } from '../../services/puestos.service';
import { RegistrosService } from '../../services/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: [],
})
export class ListadoPuestosComponent implements OnInit {
  puestos: Puesto[] = [];

  constructor(
    private service: PuestosService,
    private serviceAux: RegistrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarPuestos();
  }

  listarPuestos(): void {
    this.service
      .listarPuestos()
      .subscribe((puestos) => (this.puestos = puestos));
  }

  async actualizarPuesto(puesto: Puesto) {
    const actual = new Date();
    if (puesto.placa !== '1') {
      const registro: Registro = new Registro();
      registro.placa = puesto.placa;
      registro.propietario = puesto.propietario;
      registro.inicio = puesto.inicio;
      registro.fin =
        actual.getFullYear() +
        '-' +
        (actual.getMonth() + 1) +
        '-' +
        actual.getDate() +
        '-' +
        actual.toLocaleTimeString().split(' ')[0];
      console.log(registro);
      puesto.placa = '1';
      puesto.propietario = '';
      this.service.actualizarPuesto(puesto).subscribe();
    } else {
      await this.router.navigateByUrl(`/puestos/${puesto.id}`);
    }
  }
}
