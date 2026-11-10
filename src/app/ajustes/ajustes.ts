import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-ajustes',
  styleUrl: './ajustes.css',
  templateUrl: './ajustes.html',
})
export class Ajustes {}
