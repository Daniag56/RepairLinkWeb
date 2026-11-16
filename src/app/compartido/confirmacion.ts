import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Confirmacion {
  preguntar(mensaje : string): boolean{
    return confirm(mensaje);
  }
}
