import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @ApiProperty()
    pMail: string;
    @ApiProperty()
    pAmount: number;
    @ApiProperty()
    pDate: Date;
    @ApiProperty()
    pInvoice: number;
    @ApiProperty()
    ptId: number;
}
