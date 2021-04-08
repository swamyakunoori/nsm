import { ApiProperty } from "@nestjs/swagger";

export class CreateExpenseTypeDto {
    @ApiProperty()
    etName: string;
    @ApiProperty()
    etDescription: string;
}
