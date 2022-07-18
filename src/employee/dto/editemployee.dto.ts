import { IsEmail, IsNotEmpty } from 'class-validator';

export class EditEmployeeDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  dateOfBrith: string;
  gender: string;
  photoPath: string;
  departmentId: number;
}
