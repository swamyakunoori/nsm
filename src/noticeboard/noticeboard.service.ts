import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoticeboardDto } from './dto/create-noticeboard.dto';
import { UpdateNoticeboardDto } from './dto/update-noticeboard.dto';
import { Noticeboard } from './entities/noticeboard.entity';

@Injectable()
export class NoticeboardService {
  constructor(
    @InjectRepository(Noticeboard)
    private readonly noticeboardRepository: Repository<Noticeboard>,
  ) { }

  create(createNoticeboardDto: CreateNoticeboardDto) {
    return this.noticeboardRepository.save(createNoticeboardDto);
  }

  findAll() {
    return this.noticeboardRepository.find();
  }

  findOne(id: number) {
    return this.noticeboardRepository.findOne(id);
  }

  update(id: number, updateNoticeboardDto: UpdateNoticeboardDto) {
    return this.noticeboardRepository.update(id, updateNoticeboardDto);
  }

  remove(id: number) {
    return this.noticeboardRepository.delete(id);
  }
}
