import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './repository/employee.repository';
import { DataSource } from 'typeorm';

describe('EmployeeService', () => {
  let employeeService: EmployeeService;
  let employeeRepository: EmployeeRepository;
  let dataSource: DataSource;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService, EmployeeRepository, DataSource],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeRepository = moduleRef.get<EmployeeRepository>(EmployeeRepository);
    dataSource = moduleRef.get<DataSource>(DataSource);
  });

  it('should be defined', () => {
    expect(employeeService).toBeDefined();
  });
});
