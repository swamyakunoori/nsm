import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses } from 'src/entities/expenses.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Expenses])]
})
export class ExpensesModule { }