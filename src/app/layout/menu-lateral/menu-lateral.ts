import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../auth/auth';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [RouterLink, RouterLinkActive,TitleCasePipe],
  selector: 'app-menu-lateral',
  styleUrl: './menu-lateral.css',
  templateUrl: './menu-lateral.html',
})
export class MenuLateral {
  private auth = inject(Auth);


  usuario = this.auth.getUsuario();
}
