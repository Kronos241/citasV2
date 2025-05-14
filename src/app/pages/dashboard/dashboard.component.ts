import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule, AvatarModule, TagModule, CardModule, ProgressBarModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  totalCitas = 8;
  citasHoy = 3;
  totalUsuarios = 4;
  citasCanceladas = 2;
  ocupacionSemanal = 75;

  chartData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    datasets: [
      {
        label: 'Citas',
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        data: [2, 4, 1, 5, 3],
      },
    ],
  };

  chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#495057',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  };

  pieData = {
    labels: ['Consulta general', 'Revisión anual', 'Chequeo dental'],
    datasets: [
      {
        data: [4, 2, 2],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
      },
    ],
  };

  proximasCitas = [
    { nombre: 'Pedro Gómez', hora: '08:30', motivo: 'Chequeo dental' },
    { nombre: 'Lucía Torres', hora: '11:00', motivo: 'Control prenatal' },
    { nombre: 'Carlos Rivera', hora: '09:00', motivo: 'Revisión ocular' },
  ];

  
  tareasPendientes = [
    'Revisar agenda de jueves',
    'Llamar a pacientes pendientes',
    'Actualizar datos de usuarios',
  ];

  
}
