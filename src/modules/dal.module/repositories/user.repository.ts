import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, EntityManager, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { BaseRepositoty } from "./base.repository";

@Injectable()
export class UserRepository extends BaseRepositoty<UserEntity> {
    constructor(@InjectRepository(UserEntity) repository: Repository<UserEntity>) {
        super(repository);
    } // constructor

    public find(login: string, manager: EntityManager): Promise<UserEntity | undefined> {
        return manager.findOne(UserEntity, { 
            where: { login: login }
        });
    } // find
}