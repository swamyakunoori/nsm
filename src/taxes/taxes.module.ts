import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';
import { TaxesController } from './taxes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taxes } from './entities/tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taxes])],
  controllers: [TaxesController],
  providers: [TaxesService]
})
export class TaxesModule {}
