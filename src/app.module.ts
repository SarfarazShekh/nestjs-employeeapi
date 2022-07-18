import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),EmployeeModule, DepartmentModule, PrismaModule],
  providers: [],
})
export class AppModule {}
