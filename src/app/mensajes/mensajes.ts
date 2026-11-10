import { Component } from '@angular/core';
import { Conversacion } from './conversacion/conversacion';
import { ListaConversaciones } from './lista-conversaciones/lista-conversaciones';

@Component({
  imports: [Conversacion, ListaConversaciones],
  selector: 'app-mensajes',
  styleUrl: './mensajes.css',
  templateUrl: './mensajes.html',
})
export class Mensajes {}
