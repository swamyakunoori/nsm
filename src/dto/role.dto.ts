import { ApiProperty } from "@nestjs/swagger";

export class RoleDTO {
    @ApiProperty()
    role: string;
    @ApiProperty()
    description: string;
}