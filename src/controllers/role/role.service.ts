import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RoleDTO } from "src/dto/role.dto";
import { Role } from "src/entities/role.entity";
import { Repository } from "typeorm";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) { }

    create(postRole: RoleDTO): Promise<Role> {
        return this.roleRepository.save(postRole);
    }

    async findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    findOne(rId: string): Promise<Role> {
        return this.roleRepository.findOne(rId);
    }

    async modify(rId: number, postRoleDTO: RoleDTO): Promise<void> {
        await this.roleRepository.update(rId, postRoleDTO);
    }

    async remove(rId: string): Promise<void> {
        await this.roleRepository.delete(rId);
    }
}