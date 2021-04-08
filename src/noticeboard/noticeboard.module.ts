import { Module } from '@nestjs/common';
import { NoticeboardService } from './noticeboard.service';
import { NoticeboardController } from './noticeboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticeboard } from './entities/noticeboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticeboard])],
  controllers: [NoticeboardController],
  providers: [NoticeboardService]
})
export class NoticeboardModule {}
