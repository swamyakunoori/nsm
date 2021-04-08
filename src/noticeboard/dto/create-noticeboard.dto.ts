import { ApiProperty } from "@nestjs/swagger";

export class CreateNoticeboardDto {
    @ApiProperty()
    nTitle: string;
    @ApiProperty()
    nDescription: string;
    @ApiProperty()
    nStartDate: Date;
    @ApiProperty()
    nEndDate: Date;
    @ApiProperty()
    eId: number;
}
