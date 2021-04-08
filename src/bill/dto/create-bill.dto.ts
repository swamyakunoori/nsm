import { ApiProperty } from "@nestjs/swagger";

export class CreateBillDto {
    @ApiProperty()
    bName: string;
    @ApiProperty()
    bMail: string;
    @ApiProperty()
    bMobile: string;
    @ApiProperty()
    bDoctor: string;
    @ApiProperty()
    bDate: string;
    @ApiProperty()
    bItems: string;
    @ApiProperty()
    bSubTotal: number;
    @ApiProperty()
    bTax: number;
    @ApiProperty()
    bDisccountType: string;
    @ApiProperty()
    bDiscount: number;
    @ApiProperty()
    bTotal: number;
    @ApiProperty()
    bNote: string;
    @ApiProperty()
    dId: number;
    @ApiProperty()
    cId: number;
    @ApiProperty()
    eId: number;
}
