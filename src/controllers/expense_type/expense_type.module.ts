import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseType } from 'src/entities/expense_type.entity';
@Module({
    imports: [TypeOrmModule.forFeature([ExpenseType])]
})
export class ExpenseTypeModule { }