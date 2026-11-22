import { Component } from '@angular/core';
import { CalendarioMensual } from '../compartido/calendario-mensual/calendario-mensual';

@Component({
  imports: [CalendarioMensual],
  selector: 'app-agenda',
  styleUrl: './agenda.css',
  templateUrl: './agenda.html',
})
export class Agenda {}
