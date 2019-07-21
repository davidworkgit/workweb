import { Component, OnInit } from '@angular/core';
import { asEnumerable } from 'linq-es2015';

@Component({
  selector: 'why-updown-top',
  templateUrl: './updown-top.component.html',
  styleUrls: ['./updown-top.component.styl']
})
export class UpdownTopComponent implements OnInit {
  count: any;
  constructor() { }

  ngOnInit() {
  
  }

  testclick(){
   
    this.count = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).Where(a => a % 2 == 0).ToArray();
    console.log(this.count);
  }

}
