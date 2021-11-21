import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Registro } from 'src/app/services/Registro';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-listado-registros',
  templateUrl: './listado-registros.component.html',
  styleUrls: [],
})
export class ListadoRegistrosComponent implements OnInit {
  columnas: string[] = ['id', 'placa', 'propietario', 'inicio', 'fin'];
  filas: Registro[] = [];

  constructor(private service: RegistrosService) {}

  ngOnInit(): void {
    this.listadoRegistros();
  }

  listadoRegistros(): void {
    this.service
      .listarRegistros()
      .subscribe((registros) => (this.filas = registros));
  }
}
