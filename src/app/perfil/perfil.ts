import { Component, inject } from '@angular/core';
import {Router} from '@angular/router'
import {Auth} from '../auth/auth'

@Component({
  imports: [],
  selector: 'app-perfil',
  styleUrl: './perfil.css',
  templateUrl: './perfil.html',
})
export class Perfil {
  private auth = inject(Auth);
  private router = inject(Router);

  cerrarSesion(): void{
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
