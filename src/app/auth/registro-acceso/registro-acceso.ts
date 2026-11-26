import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelMarca } from '../panel-marca/panel-marca';

@Component({
  imports: [PanelMarca, RouterLink],
  selector: 'app-registro-acceso',
  styleUrl: './registro-acceso.css',
  templateUrl: './registro-acceso.html',
})
export class RegistroAcceso {}
