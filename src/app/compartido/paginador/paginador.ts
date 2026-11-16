import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-paginador',
  styleUrl: './paginador.css',
  templateUrl: './paginador.html',
})
export class Paginador {
  paginaActual = input(1);
  totalPaginas = input(1);
}
