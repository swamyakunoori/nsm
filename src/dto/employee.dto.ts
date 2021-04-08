import { ApiProperty } from "@nestjs/swagger";

export class EmployeeDTO {
    @ApiProperty()
    eId: number;
    @ApiProperty()
    rId: number;
    @ApiProperty()
    eUserName: string;
    @ApiProperty()
    ePassword: string;
    @ApiProperty()
    eFirstName: string;
    @ApiProperty()
    eLastName: string;
    @ApiProperty()
    eMail: string;
    @ApiProperty()
    eMobile: string;
    @ApiProperty()
    eImage: string;
    @ApiProperty()
    eGender: string;
    @ApiProperty()
    eAddress: string;
    @ApiProperty()
    eCountry: string;
    @ApiProperty()
    eBlood: string;
    @ApiProperty()
    eDofB: string;
    @ApiProperty()
    eCreatedAt: Date;
    @ApiProperty()
    eStatus: number
}