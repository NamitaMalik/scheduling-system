import { Component } from '@angular/core';
import { AppointmentsDataService } from './appointments-data.service';
import { map } from 'rxjs';
import { DEFAULT_CALENDAR_OPTIONS } from '@scheduling-system/ui';

@Component({
  selector: 'scheduling-system-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
  options = { ...DEFAULT_CALENDAR_OPTIONS };
  constructor(private appointmentsDataService: AppointmentsDataService) {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentsDataService
      .getAppointments()
      .pipe(
        map((appointments) => {
          return appointments.map((appointment) => ({
            end: appointment.endTime,
            id: appointment.email,
            start: appointment.startTime,
            title: appointment.name,
          }));
        })
      )
      .subscribe((events) => {
        this.options = {
          ...this.options,
          events: events,
        };
      });
  }
}
