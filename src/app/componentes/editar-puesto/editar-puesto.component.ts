import { Component, OnInit } from '@angular/core';
import { PuestosService } from '../../services/puestos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Puesto } from '../../services/Puesto';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-puesto',
  templateUrl: './editar-puesto.component.html',
  styleUrls: [],
})
export class EditarPuestoComponent implements OnInit {
  puesto: Puesto = new Puesto();
  edicion: boolean = false;
  formulario: FormGroup;

  constructor(
    private service: PuestosService,
    private rutaActiva: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      placa: [''],
      propietario: [''],
    });
  }

  async ngOnInit(): Promise<void> {
    const id = this.rutaActiva.snapshot.params['id'];
    await this.service.encontrarPuesto(id).subscribe((puesto) => {
      this.puesto = puesto;
      this.edicion = true;
    });
  }

  habilitarEdicion(): boolean {
    return this.puesto.placa === '1';
  }

  async actualizarPuesto() {
    const placa = this.formulario.value.placa;
    const propietario = this.formulario.value.propietario;
    if (placa === '' || propietario === '') {
      return alert('Complete todos los campos');
    }
    const actual = new Date();
    this.puesto.inicio =
      actual.getFullYear() +
      '-' +
      (actual.getMonth() + 1) +
      '-' +
      actual.getDate() +
      '-' +
      actual.toLocaleTimeString().split(' ')[0];
    this.puesto.placa = placa;
    this.puesto.propietario = propietario;
    this.service.actualizarPuesto(this.puesto).subscribe((puesto) => {
      this.puesto = puesto;
      this.router.navigateByUrl(`/`);
    });
  }
}
