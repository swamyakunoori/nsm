import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class MedicinesService {
  constructor(
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
  ) { }

  create(createMedicineDto: CreateMedicineDto) {
    return this.medicineRepository.save(createMedicineDto);
  }

  findAll() {
    return this.medicineRepository.find();
  }

  findOne(id: number) {
    return this.medicineRepository.findOne(id);
  }

  update(id: number, updateMedicineDto: UpdateMedicineDto) {
    return this.medicineRepository.update(id, updateMedicineDto);
  }

  remove(id: number) {
    return this.medicineRepository.delete(id);
  }
}
