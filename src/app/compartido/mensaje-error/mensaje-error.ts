import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mensaje-error',
  styleUrl: './mensaje-error.css',
  templateUrl: './mensaje-error.html',
})
export class MensajeError {
  titulo = input('Error');
  descripcion = input('Ocurrió un error inesperado. Por favor, intenta nuevamente más tarde.');
}
