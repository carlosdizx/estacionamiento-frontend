import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-registros',
  templateUrl: './listado-registros.component.html',
  styleUrls: [],
})
export class ListadoRegistrosComponent implements OnInit {
  columnas: string[] = ['id', 'placa', 'propietario', 'inicio', 'fin'];
  filas = new MatTableDataSource([]);

  constructor() {}

  ngOnInit(): void {}
}
