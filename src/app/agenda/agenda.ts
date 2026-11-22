import { Component } from '@angular/core';
import { CalendarioMensual } from '../compartido/calendario-mensual/calendario-mensual';
import { ListaHoras } from '../compartido/lista-horas/lista-horas';

@Component({
  imports: [CalendarioMensual, ListaHoras],
  selector: 'app-agenda',
  styleUrl: './agenda.css',
  templateUrl: './agenda.html',
})
export class Agenda {
  fechaSeleccionada = new Date();

  seleccionarDia(fecha: Date): void {
    this.fechaSeleccionada = fecha;
  }
}
