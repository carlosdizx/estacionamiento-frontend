import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-registros',
  templateUrl: './listado-registros.component.html',
  styleUrls: [],
})
export class ListadoRegistrosComponent implements OnInit {
  columnas: string[] = ['id', 'placa', 'propietario', 'inicio', 'fin'];
  filas = [
    { id: 1, placa: 'Hydrogen', propietario: 1.0079, inicio: 'H', fin: 'H' },
    { id: 2, placa: 'Helium', propietario: 4.0026, inicio: 'He', fin: 'H' },
    { id: 3, placa: 'Lithium', propietario: 6.941, inicio: 'Li', fin: 'H' },
    { id: 4, placa: 'Beryllium', propietario: 9.0122, inicio: 'Be', fin: 'H' },
    { id: 5, placa: 'Boron', propietario: 10.811, inicio: 'B', fin: 'H' },
    { id: 6, placa: 'Carbon', propietario: 12.0107, inicio: 'C', fin: 'H' },
    { id: 7, placa: 'Nitrogen', propietario: 14.0067, inicio: 'N', fin: 'H' },
    { id: 8, placa: 'Oxygen', propietario: 15.9994, inicio: 'O', fin: 'H' },
    { id: 9, placa: 'Fluorine', propietario: 18.9984, inicio: 'F', fin: 'H' },
    { id: 10, placa: 'Neon', propietario: 20.1797, inicio: 'Ne', fin: 'H' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
