import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scheduling-system-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  options: any;

  ngOnInit(): void {
    this.options = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      selectable:true,
      selectMirror: true,
      dayMaxEvents: true
    };
  }
}
