import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Registro } from './Registro';

@Injectable({
  providedIn: 'root',
})
export class RegistrosService {
  API: string = 'http://127.0.0.1:8000/api/registros';

  constructor(private http: HttpClient) {}

  listarRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.API);
  }
}
