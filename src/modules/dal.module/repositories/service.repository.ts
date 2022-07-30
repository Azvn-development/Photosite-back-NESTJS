import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from "typeorm";
import { ServiceEntity } from "../entities/service.entity";
import { BaseRepositoty } from "./base.repository";

@Injectable()
export class ServiceRepository extends BaseRepositoty<ServiceEntity> {
    constructor(@InjectRepository(ServiceEntity) repository: Repository<ServiceEntity>) {
        super(repository);
    } // constructor

    public findAll(manager: EntityManager): Promise<ServiceEntity[]> {
        return manager.find(ServiceEntity);
    } // findAll

    public add(entity: ServiceEntity, manager: EntityManager): Promise<ServiceEntity> {
        const newEntity = manager.create(ServiceEntity, entity);
        return manager.save(newEntity);
    } // add

    public async edit(entity: ServiceEntity, manager: EntityManager): Promise<ServiceEntity> {
        await manager.update(ServiceEntity, entity.id, entity);
        return entity;
    } // edit

    public async delete(id: number, manager: EntityManager): Promise<number> {
        await manager.delete(ServiceEntity, id);
        return id;
    } // delete
}