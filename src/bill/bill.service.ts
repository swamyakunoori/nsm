import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>,
  ) { }

  create(createBillDto: CreateBillDto) {
    return this.billRepository.save(createBillDto);
  }

  findAll() {
    return this.billRepository.find();
  }

  findOne(id: number) {
    return this.billRepository.findOne(id);
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return this.billRepository.update(id, updateBillDto);
  }

  remove(id: number) {
    return this.billRepository.delete(id);
  }
}
