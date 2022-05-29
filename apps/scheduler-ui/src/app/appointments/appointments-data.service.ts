import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointments';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsDataService {

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(API_URL.APPOINTMENTS);
  }
}
