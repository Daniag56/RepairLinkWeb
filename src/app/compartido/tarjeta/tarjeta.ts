import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta',
  styleUrl: './tarjeta.css',
  templateUrl: './tarjeta.html',
})
export class Tarjeta {
  titulo = input('');
  enlace = input('');
}
