import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sin-resultados',
  styleUrl: './sin-resultados.css',
  templateUrl: './sin-resultados.html',
})
export class SinResultados {
  titulo = input('No hay resultados');
  descripcion = input('No se encontraron resultados para tu búsqueda. Intenta con otra palabra clave.');
}
