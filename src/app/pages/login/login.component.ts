import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private auth = inject(Auth);
  private router = inject(Router);

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión', error);
        alert('Credenciales inválidas');
      });
  }
}
