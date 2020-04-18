import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ServiceService} from '../../Service/service.service';
import {Curso} from '../../Modelo/Curso';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  cursos: Curso[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

}
