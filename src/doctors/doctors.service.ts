import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctors } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctors)
    private readonly doctorsRepository: Repository<Doctors>,
  ) { }

  create(createDoctorDto: CreateDoctorDto) {
    return this.doctorsRepository.save(createDoctorDto);
  }

  findAll() {
    return this.doctorsRepository.find();
  }

  findOne(id: number) {
    return this.doctorsRepository.findOne(id);
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsRepository.update(id, updateDoctorDto);
  }

  remove(id: number) {
    return this.doctorsRepository.delete(id);
  }
}
