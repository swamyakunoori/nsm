import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Purchase } from 'src/entities/purchase.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Purchase])]
})
export class PurchaseModule { }