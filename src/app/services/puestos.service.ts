import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puesto } from './Puesto';
@Injectable({
  providedIn: 'root',
})
export class PuestosService {
  API: string = 'http://127.0.0.1:8000/api/puestos';

  constructor(private http: HttpClient) {}

  listarPuestos(): Observable<Puesto[]> {
    return this.http.get<Puesto[]>(this.API);
  }

  actualizarPuesto(puesto: Puesto): Observable<Puesto> {
    return this.http.put<Puesto>(this.API + `/${puesto.id}`, puesto);
  }
}
