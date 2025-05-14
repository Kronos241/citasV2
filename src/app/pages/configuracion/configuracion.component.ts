import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button'; // 👈 Asegúrate de importar esto

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule, // 👈 Asegúrate de importar esto
    FormsModule,
    CardModule,
    InputSwitchModule,
    InputNumberModule
     
  ],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  notificaciones = true;
  modoOscuro = false;
  duracionCita = 30;

  guardarConfiguracion() {
    console.log({
      notificaciones: this.notificaciones,
      modoOscuro: this.modoOscuro,
      duracionCita: this.duracionCita
    });
  }
}
