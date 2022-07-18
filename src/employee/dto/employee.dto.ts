import { IsEmail, IsNotEmpty } from "class-validator"
import { DepartmentDto } from "src/department/dto";

export class EmployeeDto{
    @IsNotEmpty()
    firstName :   string;
    @IsNotEmpty()
    lastName  :   string;
    @IsEmail()
    @IsNotEmpty()
    email  :      string;   
    dateOfBrith:  string;
    gender :      string;
    photoPath:    string;
    dId:number;
    department:DepartmentDto
}