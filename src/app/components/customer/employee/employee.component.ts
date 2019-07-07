import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/servers/employee-server.service';
import { Employee } from 'src/app/modules/employee';

@Component({
  selector: 'why-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.styl']
})
export class EmployeeComponent implements OnInit {
   Employees: Employee[];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe((data: Employee[]) => this.Employees = data);
    console.log(this.Employees);
  }
}
