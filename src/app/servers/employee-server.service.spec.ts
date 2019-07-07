import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee-server.service';

describe('EmployeeServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
