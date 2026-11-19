import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { SinResultados } from '../../compartido/sin-resultados/sin-resultados';
import { CocheApi } from '../coche-api';
import { Coche, ESTADOS_REPARACION, EstadoReparacion } from '../coche';

@Component({
  imports: [DatePipe, SinResultados, RouterLink, ReactiveFormsModule],
  selector: 'app-detalle-reparacion',
  styleUrl: './detalle-reparacion.css',
  templateUrl: './detalle-reparacion.html',
})
export class DetalleReparacion implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cocheApi = inject(CocheApi);
  private builder = inject(FormBuilder);

  coche: Coche | undefined;
  estadosReparacion = ESTADOS_REPARACION;

  estadoForm = this.builder.nonNullable.group({
    estado: ['', Validators.required],
  });

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.cocheApi.getCoche(Number(params['id']));
        }),
      )
      .subscribe((data) => {
        this.coche = data;
        if (data) {
          this.estadoForm.setValue({ estado: data.estado });
        }
      });
  }

  guardarEstado(): void {
    if (!this.coche || this.estadoForm.invalid) {
      return;
    }

    const cocheActualizado: Coche = {
      ...this.coche,
      estado: this.estadoForm.controls.estado.value as EstadoReparacion,
    };

    this.cocheApi.updateCoche(cocheActualizado).subscribe(() => {
      this.router.navigate(['/coches']);
    });
  }
}
