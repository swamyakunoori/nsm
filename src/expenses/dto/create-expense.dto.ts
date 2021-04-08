import { ApiProperty } from "@nestjs/swagger";

export class CreateExpenseDto {
    @ApiProperty()
    exName: string;
    @ApiProperty()
    etId: number;
    @ApiProperty()
    exAmount: number;
    @ApiProperty()
    ptId: number;
    @ApiProperty()
    exDate: Date;
    @ApiProperty()
    exDescription: string;
    @ApiProperty()
    eId: number;
}
