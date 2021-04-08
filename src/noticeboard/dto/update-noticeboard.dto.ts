import { PartialType } from '@nestjs/swagger';
import { CreateNoticeboardDto } from './create-noticeboard.dto';

export class UpdateNoticeboardDto extends PartialType(CreateNoticeboardDto) {}
