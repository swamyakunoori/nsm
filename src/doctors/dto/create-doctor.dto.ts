import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto {
    @ApiProperty()
    dFirstName: string;
    @ApiProperty()
    dLastName: string;
    @ApiProperty()
    dMail: string;
    @ApiProperty()
    dMobile: string;
    @ApiProperty()
    dImage: string;
    @ApiProperty()
    dGender: string;
    @ApiProperty()
    dAddress: string;
    @ApiProperty()
    eId: number;
}
