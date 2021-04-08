import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseTypeDto } from './dto/create-expense-type.dto';
import { UpdateExpenseTypeDto } from './dto/update-expense-type.dto';
import { ExpenseType } from './entities/expense-type.entity';

@Injectable()
export class ExpenseTypeService {
  constructor(
    @InjectRepository(ExpenseType)
    private readonly expenseTypeRepository: Repository<ExpenseType>,
  ) { }

  create(createExpenseTypeDto: CreateExpenseTypeDto) {
    return this.expenseTypeRepository.save(createExpenseTypeDto);
  }

  findAll() {
    return this.expenseTypeRepository.find();
  }

  findOne(id: number) {
    return this.expenseTypeRepository.findOne(id);
  }

  update(id: number, updateExpenseTypeDto: UpdateExpenseTypeDto) {
    return this.expenseTypeRepository.update(id, updateExpenseTypeDto);
  }

  remove(id: number) {
    return this.expenseTypeRepository.delete(id);
  }
}
