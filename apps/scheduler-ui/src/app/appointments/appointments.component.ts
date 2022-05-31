import { Component, OnInit } from '@angular/core';
import { AppointmentsDataService } from './appointments-data.service';
import { map, Observable } from 'rxjs';
import { DEFAULT_CALENDAR_OPTIONS } from '@scheduling-system/ui';
import { Appointment, CalendarEvent } from './appointments';

@Component({
  selector: 'scheduling-system-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  options = { ...DEFAULT_CALENDAR_OPTIONS };

  constructor(private appointmentsDataService: AppointmentsDataService) {}

  ngOnInit() {
    this.getCalendarEvents().subscribe((events: CalendarEvent[]) =>
      this.setEventsInCalendarOptions(events)
    );
  }

  getCalendarEvents(): Observable<CalendarEvent[]> {
    return this.appointmentsDataService
      .getAppointments()
      .pipe(
        map((appointments) =>
          this.transformAppointmentsToCalendarEvents(appointments)
        )
      );
  }

  transformAppointmentsToCalendarEvents(
    appointments: Appointment[]
  ): CalendarEvent[] {
    return appointments.map((appointment) => ({
      end: appointment.endTime,
      id: appointment.email,
      start: appointment.startTime,
      title: `${appointment.name}-${appointment.phoneNumber}`,
    }));
  }

  setEventsInCalendarOptions(events: CalendarEvent[]): void {
    this.options = {
      ...this.options,
      events: events,
    };
  }
}
