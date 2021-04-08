import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from 'src/entities/doctors.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Doctors])],
})
export class DoctorsModule { }