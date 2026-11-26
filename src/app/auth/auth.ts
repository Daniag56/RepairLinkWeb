import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Respuesta,Usuario } from './usuario';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Auth {

  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/auth`;

  login(email: string, password: string): Observable<Respuesta> {
    return this.http.post<Respuesta>(`${this.url}/login`, {email,password})
    .pipe(
      tap((respuesta) => {
        localStorage.setItem('token',respuesta.token);
        localStorage.setItem('usuario',JSON.stringify(respuesta.user))
      })
    )
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }

  getUsuario(): Usuario | null{
    const datos = localStorage.getItem('usuario');
    return datos ? JSON.parse(datos) : null;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
