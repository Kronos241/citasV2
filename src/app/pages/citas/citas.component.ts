// citas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-citas',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    TableModule
  ]
})
export class CitasComponent {
  nuevaCita = {
    nombre: '',
    fecha: null,
    hora: null,
    servicio: ''
  };

  citas: any[] = [];

  horas = [
    { label: '08:00 AM', value: '08:00' },
    { label: '09:00 AM', value: '09:00' },
    { label: '10:00 AM', value: '10:00' },
    { label: '11:00 AM', value: '11:00' },
    { label: '12:00 PM', value: '12:00' },
    { label: '01:00 PM', value: '13:00' },
    { label: '02:00 PM', value: '14:00' },
    { label: '03:00 PM', value: '15:00' },
    { label: '04:00 PM', value: '16:00' },
    { label: '05:00 PM', value: '17:00' }
  ];

  servicios = [
    { label: 'Consulta general', value: 'consulta' },
    { label: 'Limpieza dental', value: 'limpieza' },
    { label: 'Ortodoncia', value: 'ortodoncia' }
  ];

  citaValida(): boolean {
    return !(this.nuevaCita.nombre && this.nuevaCita.fecha && this.nuevaCita.hora && this.nuevaCita.servicio);
  }

  guardarCita() {
    this.citas.push({ ...this.nuevaCita });
    this.nuevaCita = {
      nombre: '',
      fecha: null,
      hora: null,
      servicio: ''
    };
  }
}
