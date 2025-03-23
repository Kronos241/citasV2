import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalCitasHoy = 5;
  totalClientes = 28;
  totalServicios = 7;
  citasPendientes = 3;

  ultimasCitas = [
    { nombre: 'María López', fecha: new Date(), hora: '10:00 AM', servicio: 'Consulta médica' },
    { nombre: 'Carlos Pérez', fecha: new Date(), hora: '11:30 AM', servicio: 'Corte de cabello' },
    { nombre: 'Ana Torres', fecha: new Date(), hora: '01:00 PM', servicio: 'Limpieza dental' }
  ];
}
