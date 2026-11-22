import { Component } from '@angular/core';
import { Tarjeta } from '../../compartido/tarjeta/tarjeta';
import { TarjetaCita } from '../../compartido/tarjeta-cita/tarjeta-cita';

@Component({
  imports: [Tarjeta, TarjetaCita],
  selector: 'app-citas-hoy',
  styleUrl: './citas-hoy.css',
  templateUrl: './citas-hoy.html',
})
export class CitasHoy {}
