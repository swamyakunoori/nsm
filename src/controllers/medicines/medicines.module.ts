import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicines } from 'src/entities/medicines.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Medicines])]
})
export class MedicineModule { }