import { Component } from '@angular/core';
import {Buscador} from '../compartido/buscador/buscador';
@Component({
  imports: [Buscador],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes {}
