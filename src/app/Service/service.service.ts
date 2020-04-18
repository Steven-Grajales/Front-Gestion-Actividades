import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Curso} from '../Modelo/Curso';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8000/registrar-api/cursos';

  getCursos() {
    return this.http.get<Curso[]>(this.Url);
  }

}
