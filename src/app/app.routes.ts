import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'citas',
    loadComponent: () => import('./pages/citas/citas.component')
      .then(m => m.CitasComponent)
  },
  {
    path: 'clientes',
    loadComponent: () => import('./pages/clientes/clientes.component')
      .then(m => m.ClientesComponent)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./pages/configuracion/configuracion.component')
      .then(m => m.ConfiguracionComponent)
  }
];
