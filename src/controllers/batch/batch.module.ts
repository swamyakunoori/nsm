import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from 'src/entities/batch.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Batch])]
})
export class BatchModule { }