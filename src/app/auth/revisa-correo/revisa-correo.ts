import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelMarca } from '../panel-marca/panel-marca';

@Component({
  imports: [PanelMarca, RouterLink],
  selector: 'app-revisa-correo',
  styleUrl: './revisa-correo.css',
  templateUrl: './revisa-correo.html',
})
export class RevisaCorreo {}
