import { TestBed } from '@angular/core/testing';

import { AppointmentsDataService } from './appointments-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_URL } from '../app.constant';
import { MOCK_APPOINTMENTS } from './appointments.mock';

describe('AppointmentsDataService', () => {
  let service: AppointmentsDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppointmentsDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAppointments', () => {
    it('should make http request to fetch appointments', () => {
      service.getAppointments().subscribe((appointments) => {
        expect(appointments).toEqual(MOCK_APPOINTMENTS);
      });
      const httpRequest = httpTestingController.expectOne(API_URL.APPOINTMENTS);
      httpRequest.flush(MOCK_APPOINTMENTS);
      expect(httpRequest.request.method).toEqual('GET');
    });
  })
});
