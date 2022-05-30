import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsComponent } from './appointments.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppointmentsDataService } from './appointments-data.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppointmentsComponent', () => {
  const DEFAULT_OPTIONS = {
    plugins: [dayGridPlugin]
  };

  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentsComponent],
      imports: [HttpClientTestingModule],
      providers: [AppointmentsDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
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
});
