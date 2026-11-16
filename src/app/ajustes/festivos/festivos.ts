import { Component, inject } from '@angular/core';
import { Confirmacion } from '../../compartido/confirmacion';

@Component({
  imports: [],
  selector: 'app-festivos',
  styleUrl: './festivos.css',
  templateUrl: './festivos.html',
})
export class Festivos {
  private confirmacion = inject(Confirmacion);

  quitarFestivo(nombre:string){
    if(this.confirmacion.preguntar("¿Está seguro de que desea quitar el festivo " + nombre + "?")){
      console.log("Festivo quitado: " + nombre);
    }
  }
}
