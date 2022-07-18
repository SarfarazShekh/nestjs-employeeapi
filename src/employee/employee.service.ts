import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { EditEmployeeDto, EmployeeDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class EmployeeService {
  department: any;
  constructor(private prisma: PrismaService) {}
  //Add employee detils
  async addEmployee(dto: EmployeeDto) {
    this.department = await this.addDepartment(dto);
    try {
      const employee = await this.prisma.employee.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          gender: dto.gender,
          dateOfBrith: dto.dateOfBrith,
          photoPath: dto.photoPath,
          departmentId: this.department.departmentId,
        },
      });
      return employee;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('This Email All ready taken');
        }
      }
      throw err;
    }
  }
  //add department
  async addDepartment(dto : EmployeeDto) {
    try {

      const _department ={
        departmentId: dto.department.departmentId,
        departmentName: dto.department.departmentName,
      }
      const department = await this.prisma.department.create({
        data: _department
      });
      return department;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        return err.message;
      }
      throw err;
    }
  }
  //Get all employee
  async GetallEmployeesAsync() {
    const employee = await this.prisma.employee.findMany();
    return employee;
  }
  //Get emplyee by id
  async GetEmployeeById(id:string) {
    console.log(parseInt(id))
    const employee= await this.prisma.employee.findUnique({
      where:{
        id: parseInt(id),
      }
    });
    console.log({employee});
    return employee;
  }

  //Update employee
  async Updateemaployee(dto:EditEmployeeDto)
  {
    const updatedEmployee= await this.prisma.employee.update({
      where:{
        id:dto.id,
      },
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
       // email: dto.email,
        gender: dto.gender,
        dateOfBrith: dto.dateOfBrith,
        photoPath: dto.photoPath,
        departmentId: dto.departmentId,
      },
    })
    return updatedEmployee;
  }
  //Delete employee
  async DeleteEmployee(employeeId:string){
    const deletedEmployee=this.prisma.employee.delete({
      where:{
        id:parseInt(employeeId),
      }
    });
    return deletedEmployee;
  }
}
