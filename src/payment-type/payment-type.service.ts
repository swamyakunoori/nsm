import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentTypeDto } from './dto/create-payment-type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment-type.dto';
import { PaymentType } from './entities/payment-type.entity';

@Injectable()
export class PaymentTypeService {
  constructor(
    @InjectRepository(PaymentType)
    private readonly paymentTypeRepository: Repository<PaymentType>,
  ) { }

  create(createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeRepository.save(createPaymentTypeDto);
  }

  findAll() {
    return this.paymentTypeRepository.find();
  }

  findOne(id: number) {
    return this.paymentTypeRepository.findOne(id);
  }

  update(id: number, updatePaymentTypeDto: UpdatePaymentTypeDto) {
    return this.paymentTypeRepository.update(id, updatePaymentTypeDto);
  }

  remove(id: number) {
    return this.paymentTypeRepository.delete(id);
  }
}
