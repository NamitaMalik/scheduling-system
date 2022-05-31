import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsComponent } from './appointments.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppointmentsDataService } from './appointments-data.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_APPOINTMENTS, MOCK_CALENDAR_EVENTS } from './appointments.mock';
import { of } from 'rxjs';

describe('AppointmentsComponent', () => {
  const DEFAULT_OPTIONS = {
    plugins: [dayGridPlugin],
  };

  let component: AppointmentsComponent;
  let appointmentsDataService: AppointmentsDataService;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentsComponent],
      imports: [HttpClientTestingModule],
      providers: [AppointmentsDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    appointmentsDataService = TestBed.inject(AppointmentsDataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    component.options = DEFAULT_OPTIONS;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppointmentsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Customer Service Schedule'
    );
  });

  describe('getCalendarEvents', () => {
    it('should call AppointmentsDataService to get Appointments', (done) => {
      jest
        .spyOn(appointmentsDataService, 'getAppointments')
        .mockReturnValue(of(MOCK_APPOINTMENTS));
      component.getCalendarEvents().subscribe(() => {
        expect(appointmentsDataService.getAppointments).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('transformAppointmentsToCalendarEvents', () => {
    it('should transform appointments to calendar events', () => {
      expect(
        component.transformAppointmentsToCalendarEvents(MOCK_APPOINTMENTS)
      ).toEqual(MOCK_CALENDAR_EVENTS);
    });
  });

  describe('setEventsInCalendarOptions', () => {
    it('sets events in calendar options', () => {
      component.ngOnInit();
      expect(component.options.events).toBe(undefined);
      component.setEventsInCalendarOptions(MOCK_CALENDAR_EVENTS);
      expect(component.options.events).toEqual(MOCK_CALENDAR_EVENTS);
    });
  });
});
