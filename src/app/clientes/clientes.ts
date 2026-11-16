import { Component } from '@angular/core';
import {Buscador} from '../compartido/buscador/buscador';
import { Paginador } from '../compartido/paginador/paginador';
@Component({
  imports: [Buscador, Paginador],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes {}
