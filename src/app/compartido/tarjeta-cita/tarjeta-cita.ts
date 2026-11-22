import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta-cita',
  styleUrl: './tarjeta-cita.css',
  templateUrl: './tarjeta-cita.html',
})
export class TarjetaCita {
  hora = input.required<string>();
  cliente = input.required<string>();
  vehiculo = input.required<string>();
  motivo = input.required<string>();
  estado = input.required<string>();
}
