import { ApiProperty } from "@nestjs/swagger";

export class CreateSupplierDto {
    @ApiProperty()
    sName: string;
    @ApiProperty()
    sMail: string;
    @ApiProperty()
    sMobile: string;
    @ApiProperty()
    sAddress: string;
    @ApiProperty()
    eId: number;
}
