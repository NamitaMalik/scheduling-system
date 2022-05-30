import { TestBed } from '@angular/core/testing';

import { AppointmentsDataService } from './appointments-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppointmentsDataService', () => {
  let service: AppointmentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppointmentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
