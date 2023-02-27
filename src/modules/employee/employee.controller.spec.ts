import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeService = moduleRef.get<EmployeeService>(EmployeeService);
    employeeController = moduleRef.get<EmployeeController>(EmployeeController);
  });

  describe('filter', () => {
    it('should return an array of employees', async () => {
      const result = ['test'];
      jest.spyOn(employeeService, 'filter').mockImplementation(() => result);
      expect(await employeeController.filter({ selects: ['id'] })).toBe(result);
    });
  });
});
