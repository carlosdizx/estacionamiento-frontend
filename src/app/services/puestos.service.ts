import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puesto } from './Puesto';
@Injectable({
  providedIn: 'root',
})
export class PuestosService {
  //const puestos : Puesto[] = new Puesto[];

  API: string = 'http://127.0.0.1:8000/api/puestos';

  constructor(private http: HttpClient) {

  }

  listarPuestos():Observable<any>{
    return this.http.get(this.API);
  }
}
