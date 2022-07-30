import { EntityManager, Repository } from "typeorm";
import { ServiceEntity } from "../entities/service.entity";
import { BaseRepositoty } from "./base.repository";
export declare class ServiceRepository extends BaseRepositoty<ServiceEntity> {
    constructor(repository: Repository<ServiceEntity>);
    findAll(manager: EntityManager): Promise<ServiceEntity[]>;
    add(entity: ServiceEntity, manager: EntityManager): Promise<ServiceEntity>;
    edit(entity: ServiceEntity, manager: EntityManager): Promise<ServiceEntity>;
    delete(id: number, manager: EntityManager): Promise<number>;
}
