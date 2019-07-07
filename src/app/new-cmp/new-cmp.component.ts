import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'why-test',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.styl']
})
export class NewCmpComponent implements OnInit {
  newcompent = 'testforcomponent';
  months = ['January', 'Feburary', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  todaydate;
  isavailable = true;
  constructor() { }

  ngOnInit() {
    this.newcompent = 'test';
  }

  myClickFunction(event) {
    // just added console.log which will display the event details in browser on click of the button.
    alert('婷婷');
    this.newcompent = '婷婷吃屁';
    console.log(event);
  }

  changemonths(event) {
    this.isavailable = false;
    alert('Changed month from the Dropdown');
  }

}
