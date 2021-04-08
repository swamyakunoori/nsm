import { ApiProperty } from "@nestjs/swagger";

export class CreateTaxDto {
    @ApiProperty()
    tName: string;
    @ApiProperty()
    tRate: number;
    @ApiProperty()
    tDescription: string;
}
