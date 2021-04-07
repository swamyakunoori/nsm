import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from 'src/entities/bill.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Bill])]
})
export class BillModule { }