import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent {
  selectedDay: string;
  selectedHour: number;
  selectedMinute: number;

  saveAlarm() {
    // Aquí puedes realizar acciones adicionales cuando se guarda la alarma
    console.log('Alarma guardada');
    console.log('Día:', this.selectedDay);
    console.log('Hora:', this.selectedHour);
    console.log('Minutos:', this.selectedMinute);
  }
}
