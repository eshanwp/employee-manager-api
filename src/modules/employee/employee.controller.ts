import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilterOptionsDto } from '../../base/dto/filter-options.dto';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {
  }

  /**
   * @des Handling the functionality for employee creation
   * @param createEmployeeDto
   */
  @Post()
  @ApiOperation({ summary: 'Create an employee' })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  /**
   * @des Handling the functionality for pagination
   * @param filterOptionsDto
   */
  @Post('/filter')
  @ApiOperation({ summary: 'filter employees' })
  @ApiBody({ type: FilterOptionsDto })
  filter(@Body() filterOptionsDto: FilterOptionsDto) {
    return this.employeeService.filter(filterOptionsDto);
  }

  /**
   * @des Handling the functionality for employee update
   * @param id
   * @param updateEmployeeDto
   */
  @Put(':id')
  @ApiOperation({ summary: 'Update an employee' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  /**
   * @des Handling the functionality for employee removal
   * @param id
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Remove an employee' })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.employeeService.remove(id);
  }
}
