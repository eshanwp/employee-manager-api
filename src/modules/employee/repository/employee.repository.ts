import { DataSource } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { FilterRepository } from '../../../base/repository/filter.repository';

@Injectable()
export class EmployeeRepository extends FilterRepository<Employee> {
  constructor(private dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
}
