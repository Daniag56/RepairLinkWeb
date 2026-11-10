import { Component } from '@angular/core';
import { CitasHoy } from './citas-hoy/citas-hoy';
import { CochesTaller } from './coches-taller/coches-taller';

@Component({
  imports: [CitasHoy, CochesTaller],
  selector: 'app-panel',
  styleUrl: './panel.css',
  templateUrl: './panel.html',
})
export class Panel {}
