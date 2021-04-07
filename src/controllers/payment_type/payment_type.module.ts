import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentType } from 'src/entities/payment_type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentType])]
})
export class PaymentTypeModule { }