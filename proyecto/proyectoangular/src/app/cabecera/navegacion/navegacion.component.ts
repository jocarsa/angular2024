import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
    clickEnItem(pagina:string):void{
        console.log("has hecho click en"+pagina);
    };
}
