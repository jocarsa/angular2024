import { Component } from '@angular/core';
import { IdentidadComponent } from './identidad/identidad.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [IdentidadComponent,NavegacionComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
