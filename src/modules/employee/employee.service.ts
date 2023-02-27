import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ResponseDto } from '../../base/dto/response.dto';
import { EmployeeRepository } from './repository/employee.repository';
import { PaginationResultsDto } from '../../base/dto/pagination-results.dto';
import { Employee } from './entities/employee.entity';
import { FilterOptionsDto } from '../../base/dto/filter-options.dto';

@Injectable()
export class EmployeeService {

  constructor(
    private readonly employeeRepository: EmployeeRepository,
  ) {
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = this.employeeRepository.create(createEmployeeDto);
    const data = await this.employeeRepository.save(newEmployee);
    return new ResponseDto(
      true,
      'The operation has been completed successfully.',
      'This action adds a new employee',
      data,
    );
  }

  async filter(filterOptionsDto: FilterOptionsDto) {
    const paginationModelData: PaginationResultsDto<Employee> =
      await this.employeeRepository.findWithPagination(filterOptionsDto);
    return new ResponseDto(
      true,
      'The operation has been completed successfully.',
      'This action returns all employee',
      paginationModelData,
    );
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    await this.employeeRepository.update(id, updateEmployeeDto);
    return new ResponseDto(
      true,
      'The operation has been completed successfully.',
      `This action updates a #${id} employee`,
    );
  }

  async remove(id: string) {
    const employee = await this.employeeRepository.findOne({ where: [{ id: id }] });
    if (employee) {
      await this.employeeRepository.softDelete({
        id: id,
      });
      return new ResponseDto(
        true,
        'The operation has been completed successfully.',
        `This action removes a #${id} employee`,
      );
    } else {
      return new ResponseDto(
        true,
        'The operation has been completed successfully.',
        `The employee ID could not be found`,
      );
    }
  }
}
