import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticeboard } from 'src/entities/noticeboard.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Noticeboard])]
})
export class NoticeboardModule { }