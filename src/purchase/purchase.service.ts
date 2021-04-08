import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchaseRepository: Repository<Purchase>,
  ) { }

  create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseRepository.save(createPurchaseDto);
  }

  findAll() {
    return this.purchaseRepository.find();
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne(id);
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseRepository.update(id, updatePurchaseDto);
  }

  remove(id: number) {
    return this.purchaseRepository.delete(id);
  }
}
