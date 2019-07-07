import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'why-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.styl']
})
export class CalendarComponent implements OnInit {
  @Input() getMsg;
  @Output() childEvent = new EventEmitter();
  public selectedValue = 'September';

  months = ['January', 'Feburary', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'];

  constructor() { }

  ngOnInit() {
  }

  changemonths() {
    this.childEvent.emit(this.selectedValue);
  }

}
