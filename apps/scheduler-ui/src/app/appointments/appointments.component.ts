import { Component } from '@angular/core';
import { AppointmentsDataService } from './appointments-data.service';

@Component({
  selector: 'scheduling-system-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {

  constructor(private appointmentsDataService: AppointmentsDataService) {
    this.getAppointments();
  }


  getAppointments() {
    this.appointmentsDataService.getAppointments().subscribe((data) => {
      console.log(data);
    })
  }
}
