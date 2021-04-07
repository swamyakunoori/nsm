import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suppliers } from 'src/entities/suppliers.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Suppliers])]
})
export class SupplierModule { }