import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelMarca } from '../panel-marca/panel-marca';

@Component({
  imports: [PanelMarca, RouterLink],
  selector: 'app-recuperar-contrasena',
  styleUrl: './recuperar-contrasena.css',
  templateUrl: './recuperar-contrasena.html',
})
export class RecuperarContrasena {}
