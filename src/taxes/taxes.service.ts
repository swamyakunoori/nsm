import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { Taxes } from './entities/tax.entity';

@Injectable()
export class TaxesService {
  constructor(
    @InjectRepository(Taxes)
    private readonly taxesRepository: Repository<Taxes>,
  ) { }

  create(createTaxDto: CreateTaxDto) {
    return this.taxesRepository.save(createTaxDto);
  }

  findAll() {
    return this.taxesRepository.find();
  }

  findOne(id: number) {
    return this.taxesRepository.findOne(id);
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxesRepository.update(id, updateTaxDto);
  }

  remove(id: number) {
    return this.taxesRepository.delete(id);
  }
}
