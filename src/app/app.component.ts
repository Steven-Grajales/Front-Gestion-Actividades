import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-Gestion-Actividades';

  constructor(private router: Router) { }

  Consultar() {
    this.router.navigate(['consultar']);
  }

  Registrar() {
    this.router.navigate(['registrar']);
}

}
