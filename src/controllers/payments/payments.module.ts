import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payments } from 'src/entities/payments.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Payments])]
})
export class PaymentsModule { }