import { CalendarOptions } from '@fullcalendar/angular';

export enum CalendarView {
  Month = 'dayGridMonth',
  Week = 'timeGridWeek',
  Day = 'timeGridDay',
}

export enum CalendarNavigation {
  PreviousNext = 'prev,next',
  Next = 'next',
  Today = 'today'
}

export const DEFAULT_CALENDAR_OPTIONS: CalendarOptions = {
  headerToolbar: {
    left: `${CalendarNavigation.PreviousNext + ' ' + CalendarNavigation.Today}`,
    center: 'title',
    right: `${CalendarView.Month+','+CalendarView.Week+','+CalendarView.Day}`
  },
  initialView: CalendarView.Month,
  editable: true,
  selectable:true,
  selectMirror: true,
  dayMaxEvents: true,
  timeZone: 'UTC',
  locale: 'en',
};
