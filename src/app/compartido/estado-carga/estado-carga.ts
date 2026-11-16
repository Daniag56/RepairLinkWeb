import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-estado-carga',
  styleUrl: './estado-carga.css',
  templateUrl: './estado-carga.html',
})
export class EstadoCarga {
  texto = input('Cargando...');
}
