import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taxes } from 'src/entities/taxes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Taxes])]
})
export class TaxesModule { }