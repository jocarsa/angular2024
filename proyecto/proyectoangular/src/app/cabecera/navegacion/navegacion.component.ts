import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  @Output() ejecutomostrar = new EventEmitter<void>();

  clickEnItem(pagina: string): void {
    console.log("Has hecho click en " + pagina);
    this.ejecutomostrar.emit(); // Emitir el evento
  }
}
