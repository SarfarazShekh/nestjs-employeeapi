import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EditEmployeeDto, EmployeeDto } from './dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  //Inject Service
  constructor(private employee: EmployeeService) {}
  //Create employee
  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  CreateEmployee(@Body() dto: EmployeeDto) {
    return this.employee.addEmployee(dto);
  }
  //Get all employee
  @HttpCode(HttpStatus.OK)
  @Get('getallemployee')
  GetAllEmployees() {
    return this.employee.GetallEmployeesAsync();
  }
  // Get employee by id
  @HttpCode(HttpStatus.OK)
  @Get('getbyid/:id')
  GetEmployeeById(@Param('id') employeeid: string) {
    return this.employee.GetEmployeeById(employeeid);
  }

  // Update employee
  @HttpCode(HttpStatus.OK)
  @Put('update')
  UpdateEmployee(@Body() dto: EditEmployeeDto) {
    return this.employee.Updateemaployee(dto);
  }
// Delete Employee
  @HttpCode(HttpStatus.OK)
  @Delete('delete/:id')
  DeleteEmployee(@Param('id') id:string){
    return this.employee.DeleteEmployee(id);
  }
}
