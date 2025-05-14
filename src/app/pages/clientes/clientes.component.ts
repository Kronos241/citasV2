import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  clientes = [
    { nombre: 'Juan Pérez', correo: 'juan@mail.com', telefono: '1234567890' },
    { nombre: 'Ana López', correo: 'ana@mail.com', telefono: '9876543210' },
    { nombre: 'Carlos Ruiz', correo: 'carlos@mail.com', telefono: '1112223333' }
  ];
}
