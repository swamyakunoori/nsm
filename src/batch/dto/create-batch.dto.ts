import { ApiProperty } from "@nestjs/swagger";

export class CreateBatchDto {
    @ApiProperty()
    baName: string;
    @ApiProperty()
    mbBatch: number;
    @ApiProperty()
    mbExpiry: string;
    @ApiProperty()
    mbQuantity: number;
    @ApiProperty()
    mbSalePrice: number;
    @ApiProperty()
    mbPurchasePrice: number;
    @ApiProperty()
    mbDisccountType: string;
    @ApiProperty()
    mbDiscount: number;
    @ApiProperty()
    mbTax: string;
    @ApiProperty()
    mbTaxPrice: number;
    @ApiProperty()
    mbPrice: number;
    @ApiProperty()
    mbSold: number;
    @ApiProperty()
    mId: number;
    @ApiProperty()
    pId: number;
    @ApiProperty()
    eId: number;
}
