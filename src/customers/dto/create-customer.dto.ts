import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerDto {
    @ApiProperty()
    cFirstName: string;
    @ApiProperty()
    cLastName: string;
    @ApiProperty()
    cMail: string;
    @ApiProperty()
    cMobile: string;
    @ApiProperty()
    cGender: string;
    @ApiProperty()
    cAddress: string;
    @ApiProperty()
    cBlood: string;
    @ApiProperty()
    cDofB: Date;
    @ApiProperty()
    eId: number;
}
