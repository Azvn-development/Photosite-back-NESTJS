import { Injectable } from "@nestjs/common";
import { AboutEntity } from "../entities/about.entity";
import { Connection, EntityManager, Repository } from "typeorm";
import { BaseRepositoty } from "./base.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AboutRepository extends BaseRepositoty<AboutEntity> {
    constructor(@InjectRepository(AboutEntity) repository: Repository<AboutEntity>) {
        super(repository);
    } // constructor

    public findAll(manager: EntityManager):Promise<AboutEntity[]> {
        return manager.find(AboutEntity);
    } // findAll

    public add(entity: AboutEntity, manager: EntityManager): Promise<AboutEntity> {
        const newEntity = manager.create(AboutEntity, entity);
        return manager.save(newEntity);
    } // add

    public async edit(entity: AboutEntity, manager: EntityManager): Promise<AboutEntity> {
        await manager.update(AboutEntity, entity.id, entity);
        return entity;
    } // edit

    public async delete(id: number, manager: EntityManager): Promise<number> {
        await manager.delete(AboutEntity, id);
        return id;
    } // delete
}