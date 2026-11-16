import { Component } from '@angular/core';
import { Tarjeta } from '../../compartido/tarjeta/tarjeta';

@Component({
  imports: [Tarjeta],
  selector: 'app-citas-hoy',
  styleUrl: './citas-hoy.css',
  templateUrl: './citas-hoy.html',
})
export class CitasHoy {}
