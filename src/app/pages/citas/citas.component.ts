import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE
import { Cita } from '../../models/cita.model';

@Component({
  selector: 'app-citas',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  imports: [CommonModule, FormsModule] // 👈 AGREGA CommonModule
})
export class CitasComponent {
  nuevaCita: Cita = {
    nombre: '',
    fecha: '',
    hora: '',
    motivo: ''
  };

  citas: Cita[] = [
    { nombre: 'Juan Pérez', fecha: '2025-05-14', hora: '10:00', motivo: 'Consulta general' },
    { nombre: 'María López', fecha: '2025-05-15', hora: '12:30', motivo: 'Revisión anual' }
  ];

  agregarCita() {
    if (this.nuevaCita.nombre && this.nuevaCita.fecha && this.nuevaCita.hora && this.nuevaCita.motivo) {
      this.citas.push({ ...this.nuevaCita });
      this.nuevaCita = { nombre: '', fecha: '', hora: '', motivo: '' };
    }
  }

  eliminarCita(cita: Cita) {
    const index = this.citas.indexOf(cita);
    if (index > -1) {
      this.citas.splice(index, 1);
    }
  }
  chartData = {
  labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
  datasets: [
    {
      label: 'Citas',
      data: [2, 4, 1, 5, 3],
      backgroundColor: '#3B82F6'
    }
  ]
};

chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  }
};

citasProximas = [
  { nombre: 'Pedro Gómez', motivo: 'Chequeo dental', hora: '08:30' },
  { nombre: 'Lucía Torres', motivo: 'Control prenatal', hora: '11:00' },
  { nombre: 'Carlos Rivera', motivo: 'Revisión ocular', hora: '09:00' }
];

}
