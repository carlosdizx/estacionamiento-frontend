import { Component, OnInit } from '@angular/core';
import { PuestosService } from '../../services/puestos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Puesto } from '../../services/Puesto';

@Component({
  selector: 'app-editar-puesto',
  templateUrl: './editar-puesto.component.html',
  styleUrls: [],
})
export class EditarPuestoComponent implements OnInit {
  puesto: Puesto = new Puesto();

  constructor(
    private service: PuestosService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params['id'];
    this.service
      .encontrarPuesto(id)
      .subscribe((puesto) => (this.puesto = puesto));
  }
}
