import { Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Auth {

private authenticated: boolean = false;

  login(): void {
    this.authenticated = true;
  }

  logout(): void {
    this.authenticated = false;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}



