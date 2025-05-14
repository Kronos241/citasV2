import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'citas',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/citas/citas.component').then((m) => m.CitasComponent)
  },
  {
    path: 'clientes',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/clientes/clientes.component').then((m) => m.ClientesComponent)
  },
  {
    path: 'configuracion',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/configuracion/configuracion.component').then((m) => m.ConfiguracionComponent)
  }
];
