import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBatchDto } from './dto/create-batch.dto';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';

@Injectable()
export class BatchService {
  constructor(
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
  ) { }

  create(createBatchDto: CreateBatchDto) {
    return this.batchRepository.save(createBatchDto);
  }

  findAll() {
    return this.batchRepository.find();
  }

  findOne(id: number) {
    return this.batchRepository.findOne(id);
  }

  update(id: number, updateBatchDto: UpdateBatchDto) {
    return this.batchRepository.update(id, updateBatchDto);
  }

  remove(id: number) {
    return this.batchRepository.delete(id);
  }
}
