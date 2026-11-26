import { Component, inject,signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {FormBuilder, ReactiveFormsModule,Validators} from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../auth';
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private auth = inject(Auth);
  private router = inject(Router);
  private builder = inject(FormBuilder);

  enviando = signal(false);
  error = signal('');

  loginForm = this.builder.nonNullable.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]],
  });

  entrar(): void{
    if (this.loginForm.invalid) {
      return;
    }
    this.enviando.set(true);
    this.error.set('');

    const {email,password} = this.loginForm.getRawValue();

    this.auth.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/panel']);
      },
      error: (err:HttpErrorResponse) => {
        this.enviando.set(false);
        if (err.status === 401) {
          this.error.set('Correo o contraseña incorrectos.');
        }else{
          this.error.set('No se ha podido conectar con el servidor.')
        }
      },
    });
  }
}
