import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
