import {DatePipe} from '@angular/common';
import { Component,inject,OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {switchMap} from 'rxjs';
import {SinResultados} from '../../compartido/sin-resultados/sin-resultados';
import {CocheApi} from '../coche-api';
import {Coche, ESTADOS_REPARACION} from '../coche';

@Component({
  imports: [DatePipe, SinResultados, RouterLink],
  selector: 'app-detalle-reparacion',
  styleUrl: './detalle-reparacion.css',
  templateUrl: './detalle-reparacion.html',
})
export class DetalleReparacion implements OnInit {
  private  route = inject(ActivatedRoute);
  private cocheApi = inject(CocheApi);

  coche: Coche | undefined;
  estadosReparacion = ESTADOS_REPARACION;

  ngOnInit(): void {
    this.route.params.pipe(
        switchMap((params) => {
          return this.cocheApi.getCoche(Number(params['id']));
        }),
      ).subscribe((data) => {
        this.coche = data;
      });
  }
}
