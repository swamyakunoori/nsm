import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticeboardService } from './noticeboard.service';
import { CreateNoticeboardDto } from './dto/create-noticeboard.dto';
import { UpdateNoticeboardDto } from './dto/update-noticeboard.dto';

@Controller('noticeboard')
export class NoticeboardController {
  constructor(private readonly noticeboardService: NoticeboardService) {}

  @Post()
  create(@Body() createNoticeboardDto: CreateNoticeboardDto) {
    return this.noticeboardService.create(createNoticeboardDto);
  }

  @Get()
  findAll() {
    return this.noticeboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticeboardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticeboardDto: UpdateNoticeboardDto) {
    return this.noticeboardService.update(+id, updateNoticeboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticeboardService.remove(+id);
  }
}
