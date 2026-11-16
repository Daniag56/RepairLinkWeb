import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-buscador',
  styleUrl: './buscador.css',
  templateUrl: './buscador.html',
})
export class Buscador {
  placeholder = input('Buscar');
}
