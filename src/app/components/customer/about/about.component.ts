import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/servers/employee-server.service';
import { asEnumerable } from 'linq-es2015';

@Component({
  selector: 'why-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.styl']
})
export class AboutComponent implements OnInit {
  public name: String;
  public message;
  count: number;
  constructor(private server: EmployeeService ) {
    this.count = asEnumerable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).Where(a => a % 2 === 1)
                                                              .Count();
  }

  ngOnInit() {
    this.name = '';
  }

  getMsg(info) {
    this.message = 'come from child ' + info;
  }
}
