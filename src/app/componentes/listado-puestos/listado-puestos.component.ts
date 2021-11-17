import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: [],
})
export class ListadoPuestosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.listarPuestos();
  }

  listarPuestos(): any {
    console.log('Nashe xd');
  }
}
