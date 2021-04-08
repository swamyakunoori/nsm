import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentTypeDto {
    @ApiProperty()
    ptName: string;
    @ApiProperty()
    ptDescription: string;
}
