import { Injectable } from '@nestjs/common';
import { CreateNoticeboardDto } from './dto/create-noticeboard.dto';
import { UpdateNoticeboardDto } from './dto/update-noticeboard.dto';

@Injectable()
export class NoticeboardService {
  create(createNoticeboardDto: CreateNoticeboardDto) {
    return 'This action adds a new noticeboard';
  }

  findAll() {
    return `This action returns all noticeboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noticeboard`;
  }

  update(id: number, updateNoticeboardDto: UpdateNoticeboardDto) {
    return `This action updates a #${id} noticeboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} noticeboard`;
  }
}
