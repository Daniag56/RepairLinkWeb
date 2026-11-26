import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PanelMarca } from '../panel-marca/panel-marca';

@Component({
  imports: [PanelMarca, RouterLink],
  selector: 'app-registro-taller',
  styleUrl: './registro-taller.css',
  templateUrl: './registro-taller.html',
})
export class RegistroTaller {}
