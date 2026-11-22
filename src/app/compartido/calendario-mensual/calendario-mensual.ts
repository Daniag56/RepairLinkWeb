import { Component, output } from '@angular/core';

interface DiaCalendario {
  fecha: Date;
  numero: number;
  esMesActual: boolean;
  estado: 'libre' | 'pocas' | 'completo';
}

@Component({
  imports: [],
  selector: 'app-calendario-mensual',
  styleUrl: './calendario-mensual.css',
  templateUrl: './calendario-mensual.html',
})
export class CalendarioMensual {
  mesActual = new Date();
  dias: DiaCalendario[] = [];
  fechaSeleccionada: Date | null = null;

  diaSeleccionado = output<Date>();

  diasSemana = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  constructor() {
    this.actualizarCalendario();
  }

  get nombreMes(): string {
    return this.mesActual.toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric',
    });
  }

  mesAnterior(): void {
    this.mesActual = new Date(
      this.mesActual.getFullYear(),
      this.mesActual.getMonth() - 1,
      1,
    );
    this.fechaSeleccionada = null;
    this.actualizarCalendario();
  }

  mesSiguiente(): void {
    this.mesActual = new Date(
      this.mesActual.getFullYear(),
      this.mesActual.getMonth() + 1,
      1,
    );
    this.fechaSeleccionada = null;
    this.actualizarCalendario();
  }

  seleccionarDia(dia: DiaCalendario): void {
    if (!dia.esMesActual) {
      return;
    }

    this.fechaSeleccionada = dia.fecha;
    this.diaSeleccionado.emit(dia.fecha);
  }

  esSeleccionado(dia: DiaCalendario): boolean {
    return (
      this.fechaSeleccionada !== null &&
      dia.fecha.getFullYear() === this.fechaSeleccionada.getFullYear() &&
      dia.fecha.getMonth() === this.fechaSeleccionada.getMonth() &&
      dia.fecha.getDate() === this.fechaSeleccionada.getDate()
    );
  }

  private actualizarCalendario(): void {
    const primerDia = new Date(
      this.mesActual.getFullYear(),
      this.mesActual.getMonth(),
      1,
    );

    const desplazamiento = (primerDia.getDay() + 6) % 7;

    const inicio = new Date(
      primerDia.getFullYear(),
      primerDia.getMonth(),
      1 - desplazamiento,
    );

    this.dias = Array.from({ length: 42 }, (_, indice) => {
      const fecha = new Date(
        inicio.getFullYear(),
        inicio.getMonth(),
        inicio.getDate() + indice,
      );

      return {
        fecha,
        numero: fecha.getDate(),
        esMesActual: fecha.getMonth() === this.mesActual.getMonth(),
        estado: this.obtenerEstado(fecha),
      };
    });
  }

  private obtenerEstado(fecha: Date): 'libre' | 'pocas' | 'completo' {
    const dia = fecha.getDate();

    if ([3, 8, 14, 21, 27].includes(dia)) {
      return 'completo';
    }

    if ([5, 10, 16, 23, 29].includes(dia)) {
      return 'pocas';
    }

    return 'libre';
  }
}
