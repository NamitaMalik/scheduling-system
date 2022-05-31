export interface Appointment {
  name: string;
  email: string;
  phoneNumber: string;
  startTime: string;
  endTime: string;
  date: string;
}

export interface CalendarEvent {
  end: string,
  id: string,
  start: string,
  title: string,
}
