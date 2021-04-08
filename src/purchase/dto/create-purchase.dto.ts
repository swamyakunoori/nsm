import { ApiProperty } from "@nestjs/swagger";

export class CreatePurchaseDto {
    @ApiProperty()
    sId: number;
    @ApiProperty()
    pDate: Date;
    @ApiProperty()
    pAmount: number;
    @ApiProperty()
    pTax: number;
    @ApiProperty()
    pDisccountType: string;
    @ApiProperty()
    pDiscount: number;
    @ApiProperty()
    pTotal: number;
    @ApiProperty()
    pNote: string;
    @ApiProperty()
    eId: number;
}
