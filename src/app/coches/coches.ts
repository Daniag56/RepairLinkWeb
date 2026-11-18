import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SinResultados } from '../compartido/sin-resultados/sin-resultados';
import { CocheApi } from './coche-api';
import { Coche, ESTADOS_REPARACION } from './coche';

@Component({
  imports: [DatePipe, SinResultados],
  selector: 'app-coches',
  styleUrl: './coches.css',
  templateUrl: './coches.html',
})
export class Coches implements OnInit {
  private cocheApi = inject(CocheApi);
  coches: Coche[] = [];
  estados = ESTADOS_REPARACION;
  ngOnInit(): void {
    this.cocheApi.getCoches().subscribe((data) => {
      this.coches = data;
    });
  }

  get listos(): number{
    return this.coches.filter(coche => coche.estado === 'listo').length;
  }
}
