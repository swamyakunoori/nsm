import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from 'src/entities/employee.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Employees])],
})
export class EmployeeModule { }