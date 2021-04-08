import { Controller, Body, Post, Get, Param, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RoleDTO } from "src/dto/role.dto";
import { Role } from "src/entities/role.entity";
import { RoleService } from "./role.service";

@ApiTags("Roles")
@Controller('role')
export class RoleController {
    constructor(private readonly usersService: RoleService) { }

    @Post()
    create(@Body() postRoleDTO: RoleDTO): Promise<Role> {
        return this.usersService.create(postRoleDTO);
    }

    @Get()
    findAll(): Promise<Role[]> {
        return this.usersService.findAll();
    }

    @Get(':rId')
    findOne(@Param('rId') rId: string): Promise<Role> {
        return this.usersService.findOne(rId);
    }

    @Patch(':rId')
    update(@Param('rId', ParseIntPipe) rId: number, @Body() postRoleDTO: RoleDTO): Promise<void> {
        return this.usersService.modify(rId, postRoleDTO);
    }

    @Delete(':rId')
    remove(@Param('rId') rId: string): Promise<void> {
        return this.usersService.remove(rId);
    }
}