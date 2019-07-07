import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/modules/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly rootUrl = 'http://localhost:7200/api/';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.rootUrl + 'Employees');
  }
}
