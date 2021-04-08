import { ApiProperty } from "@nestjs/swagger";

export class CreateMedicineDto {
    @ApiProperty()
    mName: string;
    @ApiProperty()
    mCompany: string;
    @ApiProperty()
    mGeneric: string;
    @ApiProperty()
    mGroup: string;
    @ApiProperty()
    mcId: number;
    @ApiProperty()
    mStoreBox: string;
    @ApiProperty()
    mMinLevel: number;
    @ApiProperty()
    mReorderLevel: number;
    @ApiProperty()
    mUnit: number;
    @ApiProperty()
    mUnitPacking: number;
    @ApiProperty()
    mTax: number;
    @ApiProperty()
    mNote: string;
    @ApiProperty()
    eId: number;
}
