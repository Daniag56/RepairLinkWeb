import { Component, input, output } from '@angular/core';
import {DatePipe} from '@angular/common';
import { Coche, ESTADOS_REPARACION } from '../coche';
@Component({
  imports: [DatePipe],
  selector: 'app-fila-coche',
  styleUrl: './fila-coche.css',
  templateUrl: './fila-coche.html',
})
export class FilaCoche {
  coche = input.required<Coche>();
  seleccionar = output<Coche>();

  estados = ESTADOS_REPARACION;

  onClickFila(): void {
    this.seleccionar.emit(this.coche());
  }
}
