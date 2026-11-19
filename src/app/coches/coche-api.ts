import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coche } from './coche';

@Injectable({
  providedIn: 'root',
})
export class CocheApi {
  private coches: Coche[] = [
    { id: 1, marca: 'Renault', modelo: 'Clio 3', matricula: '4821 KLM', cliente: 'Laura Gómez', trabajo: 'Cambio de pastillas y discos', estado: 'en_reparacion', fechaEntrada: new Date('2026-10-05') },
    { id: 2, marca: 'SEAT', modelo: 'León', matricula: '7730 HPT', cliente: 'Marta López', trabajo: 'Revisión de frenos', estado: 'en_revision', fechaEntrada: new Date('2026-10-08') },
    { id: 3, marca: 'Peugeot', modelo: '208', matricula: '1596 MXC', cliente: 'Carlos Méndez', trabajo: 'Neumáticos', estado: 'listo', fechaEntrada: new Date('2026-10-08') },
    { id: 4, marca: 'Ford', modelo: 'Focus', matricula: '2245 JTR', cliente: 'Javier Ortega', trabajo: 'Cambio de aceite', estado: 'en_revision', fechaEntrada: new Date('2026-10-08') },
    { id: 5, marca: 'Toyota', modelo: 'Corolla', matricula: '3310 LBD', cliente: 'Pilar Ramos', trabajo: 'Revisión general', estado: 'listo', fechaEntrada: new Date('2026-10-02') },
    { id: 6, marca: 'Kia', modelo: 'Ceed', matricula: '5521 KTR', cliente: 'Andrés Molina', trabajo: 'Embrague', estado: 'piezas_en_camino', fechaEntrada: new Date('2026-10-07') },
    { id: 7, marca: 'Seat', modelo: 'Ibiza', matricula: '8842 JHM', cliente: 'Sofía Navarro', trabajo: 'Diagnóstico de motor', estado: 'esperando_presupuesto', fechaEntrada: new Date('2026-10-07') },
  ];

  getCoches(): Observable<Coche[]> {
    return of(this.coches);
  }
  getCoche(id: number): Observable<Coche | undefined> {
    return of(this.coches.find(coche => coche.id === id));
  }

  updateCoche(cocheActualizado: Coche): Observable<Coche> {
    this.coches = this.coches.map((coche) => (coche.id ===
      cocheActualizado.id ? cocheActualizado : coche)
    );
    return of(cocheActualizado);
  }
}
