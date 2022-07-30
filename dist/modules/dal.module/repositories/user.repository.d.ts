import { EntityManager, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { BaseRepositoty } from "./base.repository";
export declare class UserRepository extends BaseRepositoty<UserEntity> {
    constructor(repository: Repository<UserEntity>);
    find(login: string, manager: EntityManager): Promise<UserEntity | undefined>;
}
