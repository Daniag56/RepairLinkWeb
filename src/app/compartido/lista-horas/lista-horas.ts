import { Component, input } from '@angular/core';

interface HoraCita {
  hora: string;
  ocupada: boolean;
  cliente?: string;
  motivo?: string;
}

@Component({
  imports: [],
  selector: 'app-lista-horas',
  styleUrl: './lista-horas.css',
  templateUrl: './lista-horas.html',
})
export class ListaHoras {
  fecha = input.required<Date>();

  horas: HoraCita[] = [
    { hora: '09:00', ocupada: true, cliente: 'Carlos Méndez', motivo: 'Neumáticos' },
    { hora: '10:00', ocupada: false },
    { hora: '11:00', ocupada: true, cliente: 'Laura Gómez', motivo: 'Revisión' },
    { hora: '12:00', ocupada: false },
    { hora: '13:00', ocupada: false },
    { hora: '16:00', ocupada: true, cliente: 'Marta López', motivo: 'Frenos' },
    { hora: '17:00', ocupada: false },
    { hora: '18:00', ocupada: true, cliente: 'Javier Ortega', motivo: 'Aceite' },
  ];

  get fechaFormateada(): string {
    return this.fecha().toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
