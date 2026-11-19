import { Component, inject, OnInit } from '@angular/core';
import { SinResultados } from '../compartido/sin-resultados/sin-resultados';
import { CocheApi } from './coche-api';
import { Coche } from './coche';
import { FilaCoche } from './fila-coche/fila-coche';
import { Router } from '@angular/router';

@Component({
  imports: [SinResultados, FilaCoche],
  selector: 'app-coches',
  styleUrl: './coches.css',
  templateUrl: './coches.html',
})
export class Coches implements OnInit {
  private cocheApi = inject(CocheApi);
  private router = inject(Router);
  coches: Coche[] = [];

  ngOnInit(): void {
    this.cocheApi.getCoches().subscribe((data) => {
      this.coches = data;
    });
  }

  get listos(): number{
    return this.coches.filter(coche => coche.estado === 'listo').length;
  }

  onSeleccionarCoche(coche: Coche): void {
    this.router.navigate(['/coches', coche.id]);
  }
}
